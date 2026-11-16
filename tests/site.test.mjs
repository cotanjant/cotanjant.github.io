import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const blogSrcDir = path.resolve('src/content/blog');

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

test('built pages exist for home, blog index, and every markdown post', () => {
  assert.ok(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html missing');
  assert.ok(fs.existsSync(path.join(distDir, 'blog/index.html')), 'dist/blog/index.html missing');

  const mdFiles = fs.readdirSync(blogSrcDir).filter((f) => f.endsWith('.md'));
  assert.ok(mdFiles.length >= 3, 'expected at least 3 blog posts');

  for (const file of mdFiles) {
    const slug = file.replace(/\.md$/, '');
    const postHtml = path.join(distDir, 'blog', slug, 'index.html');
    assert.ok(fs.existsSync(postHtml), `missing built post page: ${postHtml}`);
  }
});

test('internal anchor and route links on home page resolve', () => {
  const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const hrefs = [...html.matchAll(/\bhref="([^"]+)"/g)].map((m) => m[1]);

  for (const href of hrefs) {
    if (href.startsWith('#')) {
      assert.ok(ids.has(href.slice(1)), `dangling anchor link: ${href}`);
    } else if (href.startsWith('/assets/') || href === '/favicon.svg') {
      assert.ok(fs.existsSync(path.join(distDir, href.slice(1))), `missing asset: ${href}`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      const clean = href.replace(/^\//, '').replace(/\/$/, '');
      const target = clean ? path.join(distDir, clean, 'index.html') : path.join(distDir, 'index.html');
      assert.ok(fs.existsSync(target), `missing route target for ${href}`);
    }
  }
});

test('prose avoids em/en dashes and AI slop residue', () => {
  const pages = [
    path.join(distDir, 'index.html'),
    path.join(distDir, 'blog/index.html'),
    ...fs
      .readdirSync(blogSrcDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => path.join(distDir, 'blog', f.replace(/\.md$/, ''), 'index.html')),
  ];

  const banned = [
    /\u2014/, // em dash
    /\u2013/, // en dash
    /\bdelve\b/i,
    /\btestament\b/i,
    /\btapestry\b/i,
    /\bpivotal\b/i,
    /\bseamless\b/i,
    /\bcutting-edge\b/i,
    /\[NEED\]/i,
    /lorem ipsum/i,
  ];

  for (const page of pages) {
    const text = stripScriptsAndStyles(fs.readFileSync(page, 'utf8'));
    for (const pattern of banned) {
      assert.equal(pattern.test(text), false, `found banned pattern ${pattern} in ${page}`);
    }
  }
});
