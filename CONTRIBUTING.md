# Contributing to Rnazho

Thank you for considering contributing to Rnazho! This document provides guidelines for contributing to the project.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment.

## 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, Node version, etc.)

## 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- Clear description of the enhancement
- Use case or problem it solves
- Possible implementation approach

## 🔧 Development Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Follow coding standards**
   - Run `npm run lint` before committing
   - Run `npm run format` to format code
   - Run `npm run type-check` to check types
5. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## 📝 Commit Message Guidelines

Use conventional commit messages:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add appointment booking form
fix: resolve date picker timezone issue
docs: update setup instructions
```

## 🎨 Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use Persian comments where appropriate

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test your changes in different browsers
- Test RTL (Right-to-Left) layout

## 📚 Documentation

- Update README.md if needed
- Document new components and functions
- Add JSDoc comments for public APIs
- Update SETUP.md for configuration changes

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

## 🌍 Internationalization

When adding text content:

- Use Persian (Farsi) for UI text
- Provide English translations where appropriate
- Test RTL layout
- Use appropriate date/time formatting

## 📧 Contact

If you have questions, feel free to open an issue or contact the maintainers.

---

Thank you for contributing to Rnazho! 🙏