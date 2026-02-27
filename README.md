# Payam-e-Seerat Trust Website

[![CI](https://github.com/payam-e-seerat/website/actions/workflows/ci.yml/badge.svg)](https://github.com/payam-e-seerat/website/actions/workflows/ci.yml)
[![Deploy](https://github.com/payam-e-seerat/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/payam-e-seerat/website/actions/workflows/deploy.yml)

A bilingual (English/Urdu) website for **Payam-e-Seerat Trust**, a religious educational and welfare trust based in Golconda, Hyderabad, India.

🌐 **Live Site**: [https://payameseerat.com](https://payameseerat.com)

---

## 🎯 About Payam-e-Seerat Trust

Payam-e-Seerat Trust is dedicated to:
- Promoting Islamic education through maktabs and madrasas
- Making Quran education accessible to every child
- Strengthening moral character and Islamic values in youth
- Serving the community through organized departments and welfare programs

**Impact**: 150+ Maktabs | 200+ Teachers | 5000+ Students | 8 Departments

---

## 🚀 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.x | Static site generator |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |
| [Node.js](https://nodejs.org) | 20.x LTS | Runtime |

---

## 📁 Project Structure

```
payam-astro/
├── .github/
│   ├── settings.yml              # Branch protection rules
│   └── workflows/
│       ├── ci.yml                # CI workflow (build verification)
│       └── deploy.yml            # Cloudflare Pages deployment
├── public/                       # Static assets
│   ├── _headers                  # Security headers
│   ├── _redirects                # Routing rules
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/               # Reusable Astro components
│   │   ├── Header.astro          # Navigation header
│   │   └── Footer.astro          # Site footer
│   ├── content/                  # Bilingual content (JSON)
│   │   ├── en/                   # English content
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── contact.json
│   │   │   ├── courses.json
│   │   │   ├── departments.json
│   │   │   ├── publications.json
│   │   │   ├── support.json
│   │   │   └── announcements.json
│   │   └── ur/                   # Urdu content (same structure)
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with SEO
│   ├── pages/                    # Route definitions
│   │   ├── index.astro           # Language selection landing
│   │   ├── en/                   # English pages (7 routes)
│   │   │   ├── index.astro       # Home
│   │   │   ├── about.astro
│   │   │   ├── contact.astro
│   │   │   ├── courses.astro
│   │   │   ├── departments.astro
│   │   │   ├── publications.astro
│   │   │   └── support.astro
│   │   └── ur/                   # Urdu pages (RTL layout)
│   │       └── [same 7 pages]
│   └── styles/
│       └── global.css            # Tailwind + custom styles
├── astro.config.mjs              # Astro configuration
├── tailwind.config.js            # Tailwind customization
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites

- **Node.js 20.x** (see `.nvmrc`)
- **npm** (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/payam-e-seerat/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

---

## 📝 Content Editing

All content is stored in JSON files under `src/content/{en,ur}/`. The structure is identical between languages—only the values differ.

### Quick Content Update

1. Edit the relevant JSON file in `src/content/en/` and/or `src/content/ur/`
2. **Important**: Keep the JSON keys identical between languages
3. Test changes locally: `npm run dev`
4. Commit and push to trigger deployment

### Content Files

| File | Contains |
|------|----------|
| `home.json` | Hero section, mission statements, stats, department previews |
| `about.json` | About page content, trust history, objectives |
| `departments.json` | All 8 department descriptions |
| `courses.json` | Course offerings and curriculum |
| `publications.json` | Books and publications catalog |
| `support.json` | Donation information and UPI details |
| `contact.json` | Contact information, address, map |
| `announcements.json` | Latest news and announcements |

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed content editing guidelines.

---

## 🚀 Deployment

This site is automatically deployed to **Cloudflare Pages** via GitHub Actions.

### Deployment Flow

1. **Pull Request**: CI workflow runs build verification
2. **Merge to main**: Deploy workflow triggers automatically
3. **Cloudflare Pages**: Site built and deployed globally

### Manual Deployment (if needed)

```bash
# Build the site
npm run build

# Deploy using Wrangler CLI (requires authentication)
npx wrangler pages deploy dist --project-name=payam-e-seerat
```

### Environment Variables

The following secrets must be configured in GitHub:

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages:Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

---

## 🔒 Security

Security headers are configured in `public/_headers`:

- **HSTS**: Enforces HTTPS
- **CSP**: Content Security Policy tailored for Astro + Google Fonts
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing

See [SECURITY.md](./SECURITY.md) for vulnerability reporting.

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:

- Content editing workflow
- JSON structure guidelines
- Bilingual content requirements
- Local testing
- Submitting changes

---

## 📜 License

This project is proprietary to Payam-e-Seerat Trust. All rights reserved.

---

## 📧 Contact

- **Email**: payameseerat@gmail.com
- **Phone**: 9550025666
- **Address**: Ali Ahmed Colony, Near Ali Ahmed Masjid, Golconda, Hyderabad, Telangana, India

---

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Fonts: [Google Fonts](https://fonts.google.com) (Inter, Noto Nastaliq Urdu)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)
