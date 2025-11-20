---
layout: page
title: "Contributing Guide"
permalink: /contributing/
---

# Contributing to Open Source Philosophy Degree

Thank you for your interest in contributing to the Open Source Philosophy Degree project! We welcome contributions from everyone, whether you're a philosophy student, educator, or enthusiast.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How You Can Contribute](#how-you-can-contribute)
- [Suggesting New Courses](#suggesting-new-courses)
- [Improving Documentation](#improving-documentation)
- [Reporting Issues](#reporting-issues)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

- Be respectful and constructive in discussions
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

---

## How You Can Contribute

There are many ways to contribute to this project:

### 1. Suggest New Courses

Know a great free philosophy course? We'd love to add it! See [Suggesting New Courses](#suggesting-new-courses) below.

### 2. Improve Course Descriptions

Help us make course descriptions more accurate, comprehensive, and helpful for learners.

### 3. Fix Broken Links

If you find a broken or outdated link, please report it or submit a fix.

### 4. Enhance Documentation

Improve our guides, FAQs, or other documentation to make the project more accessible.

### 5. Add Learning Resources

Suggest readings, practice materials, or study guides to complement the courses.

### 6. Improve Website Design

Help enhance the user experience through design, accessibility, or functionality improvements.

### 7. Share Your Experience

Write reviews or testimonials about courses you've taken.

---

## Suggesting New Courses

When suggesting a new course, please ensure it meets these criteria:

### Course Criteria

 **Free Access**: Course must be completely free (auditing is acceptable)
 **Quality**: From reputable institutions or recognized experts
 **Accessibility**: Publicly available online without enrollment barriers
 **Complete**: Substantial content (not just single lectures)
 **Philosophy-Relevant**: Directly related to philosophical study

### How to Suggest a Course

**Option 1: Open an Issue**

1. Go to our [Issues page](https://github.com/alexkourtis98/open-source-philosophy-degree/issues)
2. Click "New Issue"
3. Use the title format: `[COURSE] Course Name - Institution`
4. Include this information:
   ```markdown
   **Course Title**:
   **Institution/Instructor**:
   **Platform**:
   **URL**:
   **Duration**:
   **Difficulty Level**: Beginner/Intermediate/Advanced
   **Category**: (Ethics, Logic, Metaphysics, etc.)
   **Description**:
   **Why this course should be included**:
   ```

**Option 2: Submit a Pull Request**

1. Fork the repository
2. Add the course to `extras/course-catalog.md` in the appropriate category
3. Follow the existing format (see [Style Guidelines](#style-guidelines))
4. Submit a pull request with a clear description

---

## Improving Documentation

To improve documentation:

1. Identify the file that needs improvement
2. Fork the repository
3. Make your changes
4. Submit a pull request with:
   - Clear description of what you changed
   - Reason for the change
   - Any relevant context

Focus areas for documentation:
- Clarifying instructions
- Fixing typos or grammar
- Adding examples
- Improving organization
- Enhancing accessibility

---

## Reporting Issues

Found a problem? Please report it!

### Before Reporting

- Search existing issues to avoid duplicates
- Verify the issue still exists
- Gather relevant details

### Creating an Issue

Include:
- **Clear title**: Briefly describe the problem
- **Description**: Detailed explanation
- **Steps to reproduce**: If applicable
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If relevant
- **Environment**: Browser, device, etc. (if applicable)

---

## Pull Request Process

### Before Submitting

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test** your changes (check links, formatting, etc.)
5. **Commit** with clear messages: `git commit -m "Add: Brief description"`

### Commit Message Format

Use clear, descriptive commit messages:

```
Add: New course from Stanford on Ethics
Fix: Broken link to MIT OCW
Update: Course description for Justice course
Remove: Duplicate course entry
Docs: Improve contributing guidelines
```

### Submitting the PR

1. **Push** to your fork: `git push origin feature/your-feature-name`
2. Open a **Pull Request** on GitHub
3. Fill out the PR template with:
   - What changes you made
   - Why you made them
   - Any relevant issue numbers (e.g., "Fixes #123")

### Review Process

- Maintainers will review your PR
- They may request changes or ask questions
- Once approved, your PR will be merged
- Your contribution will be credited!

---

## Style Guidelines

### Course Entry Format

When adding courses to the catalog, follow this structure:

```markdown
### <span class="difficulty-badge [beginner|intermediate|advanced]">[Level]</span> [Course Title  Institution](URL)
{: .course-item data-difficulty="[beginner|intermediate|advanced]" data-category="[category]" data-platform="[platform]"}

**Instructor**: Name (if applicable)
**Platform**: Platform name
**Duration**: X weeks, Y hours/week (if available)
**Focus**: Brief topic description

**What You'll Learn**:
- Key learning outcome 1
- Key learning outcome 2
- Key learning outcome 3
- Key learning outcome 4

**Format**: Description of course format

[**Enroll Now �**](URL)

---
```

### Category Values

Use these standardized categories:
- `ethics` - Ethics & Moral Philosophy
- `logic` - Logic & Critical Thinking
- `metaphysics` - Metaphysics & Epistemology
- `political` - Political Philosophy
- `history` - History of Philosophy
- `mind` - Philosophy of Mind & Science
- `general` - General/Introductory

### Platform Values

Use these standardized platform names:
- `edx` - edX
- `coursera` - Coursera
- `yale` - Open Yale
- `mit` - MIT OCW
- `stanford` - Stanford
- `hillsdale` - Hillsdale
- `other` - Other platforms

### Markdown Guidelines

- Use **bold** for emphasis on important terms
- Use `code` formatting for technical terms if needed
- Use proper heading hierarchy (H1 � H2 � H3)
- Include blank lines between sections
- Keep lines reasonably short (wrap at 120 characters)
- Use relative links for internal navigation

---

## Questions?

If you have questions about contributing:

1. Check the [FAQ](/faq/)
2. Review existing issues and discussions
3. Open a new issue with the `question` label
4. Reach out to maintainers

---

## Recognition

All contributors will be recognized in our project! Your contributions help make philosophy education accessible to everyone.

Thank you for helping build this resource! 🎓

---

## License

By contributing, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers this project.
