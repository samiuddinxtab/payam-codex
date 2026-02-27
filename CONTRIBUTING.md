# Contributing to Payam-e-Seerat Website

Thank you for your interest in contributing to the Payam-e-Seerat Trust website! This guide will help you understand how to edit content, add new information, and maintain the bilingual nature of the site.

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Content Editing Guide](#content-editing-guide)
- [Bilingual Content Guidelines](#bilingual-content-guidelines)
- [Testing Your Changes](#testing-your-changes)
- [Submitting Changes](#submitting-changes)

---

## 🚀 Quick Start

### For Content Editors (No Coding Required)

If you're only updating text content:

1. Navigate to the content files: `src/content/en/` and `src/content/ur/`
2. Find the JSON file for the page you want to edit
3. Edit the text values (keep the keys unchanged)
4. Update both English and Urdu versions
5. Commit and create a pull request

---

## 📝 Content Editing Guide

### Understanding JSON Structure

Our content is stored in JSON files. Here's what a typical file looks like:

```json
{
  "hero": {
    "title": "Payam-e-Seerat Trust",
    "subtitle": "Religious Educational & Welfare Trust"
  },
  "sections": [
    {
      "title": "Our Mission",
      "content": "We aim to promote Islamic education..."
    }
  ]
}
```

**Key Concept**: 
- **Keys** (in quotes on the left): Must stay in English and identical across both language files
- **Values** (on the right): The actual content text—translate these

### Content Files Reference

| Page | English File | Urdu File | What to Edit |
|------|-------------|-----------|--------------|
| Home | `src/content/en/home.json` | `src/content/ur/home.json` | Hero text, stats, mission statements |
| About | `src/content/en/about.json` | `src/content/ur/about.json` | Trust history, objectives |
| Departments | `src/content/en/departments.json` | `src/content/ur/departments.json` | Department descriptions |
| Courses | `src/content/en/courses.json` | `src/content/ur/courses.json` | Course details |
| Publications | `src/content/en/publications.json` | `src/content/ur/publications.json` | Book listings |
| Support | `src/content/en/support.json` | `src/content/ur/support.json` | Donation info |
| Contact | `src/content/en/contact.json` | `src/content/ur/contact.json` | Address, phone, email |
| Announcements | `src/content/en/announcements.json` | `src/content/ur/announcements.json` | News and updates |

### Editing Examples

#### Example 1: Updating a Statistic

**Before** (in `src/content/en/home.json`):
```json
"stats": [
  { "value": "150+", "label": "Maktabs" }
]
```

**After** (updating to 200):
```json
"stats": [
  { "value": "200+", "label": "Maktabs" }
]
```

#### Example 2: Adding a New Department

In `src/content/en/departments.json`:
```json
"departments": [
  {
    "id": "new-dept",
    "name": "New Department Name",
    "description": "Description of the department..."
  }
]
```

Same structure in `src/content/ur/departments.json`:
```json
"departments": [
  {
    "id": "new-dept",
    "name": "نئے شعبے کا نام",
    "description": "شعبے کی تفصیل..."
  }
]
```

**Important**: The `id` must be identical in both files!

---

## 🌐 Bilingual Content Guidelines

### The Golden Rule

**JSON keys must remain identical across both language files. Only values differ.**

✅ **Correct**:
```json
// en/home.json
{ "title": "About Us" }

// ur/home.json  
{ "title": "ہمارے بارے میں" }
```

❌ **Incorrect**:
```json
// en/home.json
{ "title": "About Us" }

// ur/home.json
{ "urduTitle": "ہمارے بارے میں" }  // ← Key is different!
```

### Adding Urdu Text

When adding Urdu content:

1. Use proper Urdu script (اردو)
2. Ensure correct spelling and grammar
3. Maintain consistency with existing terminology
4. Keep formatting similar to English version

### Translation Tips

| English Term | Urdu Term |
|--------------|-----------|
| Home | ہوم |
| About | ہمارے بارے میں |
| Departments | شعبہ جات |
| Courses | کورسز |
| Publications | اشاعت |
| Support | مدد |
| Contact | رابطہ |
| Trust | ٹرسٹ |
| Maktab | مکتب |
| Madrasa | مدرسہ |

---

## 🧪 Testing Your Changes

### Method 1: GitHub Web Editor (Simplest)

If making small edits directly on GitHub:

1. Edit the file in your browser
2. Preview the JSON syntax (GitHub shows errors in red)
3. Commit with a descriptive message

### Method 2: Local Testing (Recommended)

For larger changes or multiple files:

```bash
# 1. Clone the repository
git clone https://github.com/payam-e-seerat/website.git
cd website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:4321 in your browser
```

### What to Check

- [ ] Content displays correctly in both languages
- [ ] No broken links or missing images
- [ ] Urdu text renders properly (RTL layout)
- [ ] JSON is valid (no syntax errors)
- [ ] Both language files have matching keys

### Validating JSON

Before committing, ensure your JSON is valid:

```bash
# Using Node.js
node -e "JSON.parse(require('fs').readFileSync('src/content/en/home.json'))" && echo "Valid JSON!"
```

Or use an online JSON validator: [jsonlint.com](https://jsonlint.com)

---

## 📤 Submitting Changes

### Via GitHub Web Interface

1. Navigate to the file you want to edit
2. Click the pencil icon (✏️) to edit
3. Make your changes
4. Scroll down and click "Commit changes..."
5. Select "Create a new branch for this commit and start a pull request"
6. Provide a clear commit message (e.g., "Update student count to 5000+")
7. Click "Propose changes"
8. Fill in the pull request description
9. Click "Create pull request"

### Via Command Line

```bash
# Create a new branch
git checkout -b update-content-description

# Make your edits
git add src/content/en/home.json src/content/ur/home.json

# Commit with a descriptive message
git commit -m "Update: Increase student count from 4500 to 5000+"

# Push to GitHub
git push origin update-content-description

# Create a pull request via GitHub web interface
```

### Pull Request Best Practices

1. **One change per PR**: Don't mix unrelated updates
2. **Update both languages**: Always edit English and Urdu files together
3. **Clear title**: Use format "Update: [what changed]"
4. **Description**: Explain why the change is needed
5. **Check CI status**: Ensure the build passes

### Example PR Description

```markdown
## Summary
Updated the student count on the homepage from 4500+ to 5000+.

## Changes Made
- Updated `stats[2].value` in `src/content/en/home.json`
- Updated `stats[2].value` in `src/content/ur/home.json`

## Verification
- [x] Both language files updated
- [x] Validated JSON syntax
- [x] Tested locally
```

---

## ❓ Need Help?

- **Technical issues**: Contact the development team
- **Content questions**: Reach out to the trust administration
- **Urdu translation help**: Consult with bilingual team members

### Contact

- **Email**: payameseerat@gmail.com
- **Phone**: 9550025666

---

## 🎓 Tips for New Contributors

1. **Start small**: Make a simple text change first
2. **Check existing content**: Look at how similar content is structured
3. **Ask questions**: Don't hesitate to ask for help
4. **Test thoroughly**: Always verify your changes locally
5. **Be patient**: PR reviews may take 1-2 days

Thank you for helping improve the Payam-e-Seerat website! 🙏
