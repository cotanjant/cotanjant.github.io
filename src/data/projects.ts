export interface Project {
  slug: string;
  name: string;
  category: string;
  stack: string;
  language: string;
  shortLang: string;
  status: 'Shipped' | 'Showcase' | 'Hobby';
  tier: 'core' | 'hobby';
  summary: string;
  repoUrl: string;
  liveUrl?: string;
}

export const PROFILE = {
  handle: 'cotanjant',
  name: 'Deniz Dayan',
  email: 'dnzdyn2012@gmail.com',
  github: 'https://github.com/cotanjant',
  linkedin: 'https://www.linkedin.com/in/deniz-d-b23a243b7/',
  repoCount: 21,
} as const;

export const PROJECTS: Project[] = [
  {
    slug: 'cartflame',
    name: 'cartflame',
    category: 'Backend',
    stack: 'Spring Boot',
    language: 'Java',
    shortLang: 'Java',
    status: 'Showcase',
    tier: 'core',
    summary:
      'Spring Boot e-commerce backend API built as a working showcase, backed by PostgreSQL, Redis rate limiting, RabbitMQ event emails, and Docker Compose.',
    repoUrl: 'https://github.com/cotanjant/cartflame',
  },
  {
    slug: 'teamalazfrc',
    name: 'teamalazfrc',
    category: 'Full-Stack',
    stack: 'Next.js 15',
    language: 'TypeScript',
    shortLang: 'TS',
    status: 'Shipped',
    tier: 'core',
    summary:
      'Public site and Git-backed admin panel for FRC Team ALAZ #12368 in Izmir, built with Next.js 15, React 19, and HMAC-authenticated GitHub API writes.',
    repoUrl: 'https://github.com/cotanjant/teamalazfrc',
    liveUrl: 'https://teamalazfrc-kappa.vercel.app',
  },
  {
    slug: 'showcase',
    name: 'showcase',
    category: 'DevOps',
    stack: 'K8s & ArgoCD',
    language: 'DevOps',
    shortLang: 'K8s',
    status: 'Showcase',
    tier: 'core',
    summary:
      'Containerized service paired with Kubernetes, ArgoCD, and OpenTofu deployment manifests split across an application repo and a GitOps repo.',
    repoUrl: 'https://github.com/cotanjant/showcase',
  },
  {
    slug: 'ridvanotel',
    name: 'ridvanotel',
    category: 'Web',
    stack: 'React & Vite',
    language: 'TypeScript',
    shortLang: 'TS',
    status: 'Shipped',
    tier: 'core',
    summary:
      'Bilingual landing page for Ridvan Otel in Cesme, Izmir built with Vite, React, TypeScript, and GSAP.',
    repoUrl: 'https://github.com/cotanjant/ridvanotel',
    liveUrl: 'https://ridvanotel.com',
  },
  {
    slug: 'skallibrary',
    name: 'skallibrary',
    category: 'Backend',
    stack: 'Django',
    language: 'Python',
    shortLang: 'Py',
    status: 'Shipped',
    tier: 'core',
    summary:
      'School library catalog and loan tracker built with Django and Unfold, keeping student PII off public catalog pages.',
    repoUrl: 'https://github.com/cotanjant/skallibrary',
  },
  {
    slug: 'thunder',
    name: 'thunder',
    category: 'Audio / Hobby',
    stack: 'Rust DAW',
    language: 'Rust',
    shortLang: 'Rust',
    status: 'Hobby',
    tier: 'hobby',
    summary:
      'Hobby desktop FL-style step-sequencer DAW in Rust with cpal audio, egui dock panels, fundsp synths, and out-of-process CLAP plugin hosting.',
    repoUrl: 'https://github.com/cotanjant/thunder',
    liveUrl: 'https://cotanjant.github.io/thunder/',
  },
  {
    slug: 'daily',
    name: 'daily',
    category: 'CLI / Hobby',
    stack: 'Rust CLI',
    language: 'Rust',
    shortLang: 'Rust',
    status: 'Hobby',
    tier: 'hobby',
    summary:
      'Hobby single Rust binary for file downloads, interactive desktop reminders, file utilities, and duration math, with cross-platform release builds.',
    repoUrl: 'https://github.com/cotanjant/daily',
    liveUrl: 'https://website-pearl-ten-65.vercel.app',
  },
  {
    slug: 'krnl',
    name: 'krnl',
    category: 'Kernel / Hobby',
    stack: 'Rust x86_64',
    language: 'Rust',
    shortLang: 'Rust',
    status: 'Hobby',
    tier: 'hobby',
    summary:
      'Hobby experimental x86_64 kernel written in Rust and booted through Limine, bringing up framebuffer graphics and ISO builds.',
    repoUrl: 'https://github.com/cotanjant/krnl',
  },
];
