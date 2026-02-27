# Changelog

All notable changes to the Payam-e-Seerat website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Cloudflare Pages deployment configuration
- Security headers (HSTS, CSP, X-Frame-Options)
- Comprehensive documentation (README, CONTRIBUTING, SECURITY)
- GitHub Actions CI/CD workflows

### Changed
- Updated CI workflow to use Node.js version from `.nvmrc`
- Simplified build process for Astro static site

## [1.0.0] - 2025-02-27

### Added
- Initial Astro 5 website launch
- Bilingual support (English/Urdu)
- 7-page website structure:
  - Home page with hero, mission, stats
  - About page with trust history
  - Departments page (8 departments)
  - Courses page with curriculum
  - Publications page
  - Support/Donation page
  - Contact page
- Responsive design with Tailwind CSS
- Islamic-themed color palette (green/gold/cream)
- JSON-based content management
- RTL layout support for Urdu
- Custom Nastaliq font for Urdu text
- SEO meta tags and JSON-LD schema
- Mobile-responsive navigation

### Technical
- Astro 5.x static site generator
- Tailwind CSS 4.x for styling
- TypeScript for type safety
- Custom color theme configuration
- Animations and transitions
- Print styles for course materials

---

## Release Categories

### Content Updates
- **Added**: New content sections, pages, or features
- **Changed**: Updates to existing content (text, numbers, dates)
- **Removed**: Deleted content or deprecated sections

### Technical Updates
- **Added**: New dependencies, features, or configurations
- **Changed**: Updates to existing code or dependencies
- **Deprecated**: Soon-to-be removed features
- **Removed**: Deleted features or dependencies
- **Fixed**: Bug fixes
- **Security**: Security-related updates

---

## Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Breaking changes or major redesigns
- **MINOR** (0.X.0): New content sections or features
- **PATCH** (0.0.X): Content updates, bug fixes, security patches

### Examples

- `1.0.0` → `1.1.0`: Added new department page
- `1.1.0` → `1.1.1`: Updated student count from 5000 to 5500
- `1.1.1` → `2.0.0`: Complete website redesign

---

## How to Update This Changelog

When making changes:

1. Add entry under `[Unreleased]` section
2. Categorize appropriately (Added/Changed/Fixed/Removed/Security)
3. Be specific but concise
4. Include date when creating a new version

### Example Entry

```markdown
### Added
- New "Alumni" section to About page
- Urdu translation for new department descriptions

### Changed
- Updated student count from 5000+ to 5500+
- Revised contact phone number

### Fixed
- Corrected typo in Madrasa department description
```

---

## Archive

*Older versions will be listed here as the project evolves.*
