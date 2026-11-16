export interface Project {
  slug: string;
  name: string;
  category: string;
  language: string;
  status: 'Active' | 'Shipped' | 'Early';
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
    slug: 'thunder',
    name: 'thunder',
    category: 'Audio / Desktop',
    language: 'Rust',
    status: 'Active',
    summary:
      'Desktop FL-style step-sequencer DAW in Rust with cpal audio, egui dock panels, fundsp synths, and out-of-process CLAP plugin hosting.',
    repoUrl: 'https://github.com/cotanjant/thunder',
    liveUrl: 'https://cotanjant.github.io/thunder/',
  },
  {
    slug: 'krnl',
    name: 'krnl',
    category: 'Kernel',
    language: 'Rust',
    status: 'Early',
    summary:
      'Experimental x86_64 kernel written in Rust and booted through Limine, currently bringing up framebuffer graphics and ISO builds.',
    repoUrl: 'https://github.com/cotanjant/krnl',
  },
  {
    slug: 'showcase',
    name: 'showcase',
    category: 'Infrastructure',
    language: 'Go',
    status: 'Shipped',
    summary:
      'Go backend paired with Kubernetes, ArgoCD, and OpenTofu deployment manifests split across an application repo and a GitOps repo.',
    repoUrl: 'https://github.com/cotanjant/showcase',
  },
  {
    slug: 'teamalazfrc',
    name: 'teamalazfrc',
    category: 'Web / CMS',
    language: 'TypeScript',
    status: 'Shipped',
    summary:
      'Public site and Git-backed admin panel for FRC Team ALAZ #12368 in Izmir, built with Next.js 15, React 19, and WebGL2 shaders.',
    repoUrl: 'https://github.com/cotanjant/teamalazfrc',
    liveUrl: 'https://teamalazfrc-kappa.vercel.app',
  },
  {
    slug: 'daily',
    name: 'daily',
    category: 'CLI',
    language: 'Rust',
    status: 'Shipped',
    summary:
      'Single Rust binary for file downloads, interactive desktop reminders, file utilities, and duration math, with cross-platform release builds.',
    repoUrl: 'https://github.com/cotanjant/daily',
    liveUrl: 'https://website-pearl-ten-65.vercel.app',
  },
  {
    slug: 'skallibrary',
    name: 'skallibrary',
    category: 'Web',
    language: 'Python',
    status: 'Shipped',
    summary:
      'School library catalog and loan tracker built with Django 6.1 and Unfold, keeping student PII off public catalog pages.',
    repoUrl: 'https://github.com/cotanjant/skallibrary',
  },
  {
    slug: 'sp5der',
    name: 'sp5der',
    category: 'TUI',
    language: 'Go',
    status: 'Shipped',
    summary:
      'Terminal UI built with Bubble Tea and libvirt-go for inspecting and polling Linux virtual machine domains.',
    repoUrl: 'https://github.com/cotanjant/sp5der',
  },
  {
    slug: 'fizz',
    name: 'fizz',
    category: 'CLI',
    language: 'Rust',
    status: 'Shipped',
    summary:
      'Command-line wallet inspector for Solana and EVM addresses written in Rust.',
    repoUrl: 'https://github.com/cotanjant/fizz',
  },
  {
    slug: 'cartflame',
    name: 'cartflame',
    category: 'Backend',
    language: 'Java',
    status: 'Shipped',
    summary:
      'Spring Boot e-commerce test API backed by PostgreSQL, Redis rate limiting, RabbitMQ event emails, and Docker Compose.',
    repoUrl: 'https://github.com/cotanjant/cartflame',
  },
  {
    slug: 'ridvanotel',
    name: 'ridvanotel',
    category: 'Web',
    language: 'TypeScript',
    status: 'Shipped',
    summary:
      'Bilingual landing page for Ridvan Otel in Cesme, Izmir built with Vite, React, TypeScript, and GSAP.',
    repoUrl: 'https://github.com/cotanjant/ridvanotel',
    liveUrl: 'https://ridvanotel.com',
  },
  {
    slug: 'operant',
    name: 'operant',
    category: 'ML / Systems',
    language: 'Rust',
    status: 'Early',
    summary:
      'Experiments around a fine-tuned agentic model and custom inference engine built with PyTorch and Rust.',
    repoUrl: 'https://github.com/cotanjant/operant',
  },
  {
    slug: 'pegasus',
    name: 'pegasus',
    category: 'Systems',
    language: 'Rust',
    status: 'Early',
    summary:
      'Notes and small binaries exploring the Windows API, security boundaries, and low-level system calls in Rust.',
    repoUrl: 'https://github.com/cotanjant/pegasus',
  },
];
