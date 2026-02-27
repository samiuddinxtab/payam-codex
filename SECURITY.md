# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

The Payam-e-Seerat Trust takes security seriously. We appreciate your efforts to responsibly disclose any security vulnerabilities you may find.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security issues via:

- **Email**: payameseerat@gmail.com
- **Subject**: [SECURITY] Brief description of the issue

### What to Include

When reporting a vulnerability, please include:

1. **Description**: Clear description of the vulnerability
2. **Impact**: What could be compromised if exploited
3. **Steps to reproduce**: Detailed steps to demonstrate the issue
4. **Proof of concept**: If applicable, provide minimal example
5. **Suggested fix**: Any recommendations for remediation (optional)

### Response Timeline

| Action | Timeline |
|--------|----------|
| Acknowledgment | Within 48 hours |
| Initial assessment | Within 5 business days |
| Fix or mitigation plan | Within 14 business days |
| Public disclosure | After fix is deployed |

### Security Measures in Place

Our website implements the following security measures:

- **HTTPS**: All traffic is encrypted via TLS
- **Security Headers**: HSTS, CSP, X-Frame-Options, and more
- **Static Site**: No server-side code or database to exploit
- **Regular Updates**: Dependencies are kept up-to-date
- **Cloudflare Protection**: DDoS protection and WAF rules

### Scope

The following are considered in-scope for security reports:

- The website at https://payameseerat.com
- GitHub repository configuration
- Cloudflare Pages deployment
- Content delivery and caching

Out of scope:

- Third-party services (Google Fonts, etc.)
- Social engineering attacks
- Physical security

### Safe Harbor

We support responsible disclosure and commit to:

- Not pursuing legal action against researchers acting in good faith
- Working with you to understand and resolve the issue
- Acknowledging your contribution (if desired)
- Keeping your identity confidential (unless you prefer otherwise)

## Security Best Practices for Contributors

When contributing to this project:

1. **Keep dependencies updated**: Run `npm audit` regularly
2. **Don't commit secrets**: Never commit API keys or credentials
3. **Validate inputs**: Ensure all content inputs are properly escaped
4. **Review carefully**: Check all changes for potential security implications
5. **Use strong passwords**: Protect your GitHub account with 2FA

## Contact

For security-related inquiries:

- **Email**: payameseerat@gmail.com
- **Phone**: 9550025666
- **Address**: Ali Ahmed Colony, Near Ali Ahmed Masjid, Golconda, Hyderabad, Telangana, India

---

Thank you for helping keep Payam-e-Seerat Trust and its community safe.
