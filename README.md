# PatternFly + Vite + TypeScript + React 19 Seed App

This project is a modern starter for enterprise apps using:
- [PatternFly](https://www.patternfly.org/) (v6 prerelease, React 19 compatible)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- [TypeScript](https://www.typescriptlang.org/)
- [React 19](https://react.dev/)

---

## 🚀 Vibe Coding & AI Documentation Support

This project supports **vibe coding** workflows, where you can direct an AI agent to use the [`ai-documentation/`](./ai-documentation/) directory as a primary source for developing with PatternFly. The documentation in this directory provides:
- Core rules and best practices for PatternFly React development
- Component usage guidelines, layout rules, and troubleshooting
- Quick navigation to specialized rules and resources

**Tip:** When using an AI coding assistant (like Cursor), you can instruct it to prioritize the `ai-documentation` directory for authoritative guidance on PatternFly usage in this codebase.

### Cursor Rule
If you are using the Cursor editor, there is a **Cursor rule** you can leverage to further enhance AI-driven development. This rule helps the agent understand how to use the `ai-documentation` directory as the primary source for PatternFly-related questions and implementation details.

---

## Key Lessons & Best Practices

### Testing
- Uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests.
- CSS and SVG imports are mocked using `identity-obj-proxy` and a custom SVG mock.
- Test files are colocated with their components in the same directory.
- See `jest.config.cjs` for configuration details.

### Project Structure
- Each page (Dashboard, Settings, Instances, Documentation) is in its own directory under `src/pages/`, with its test and an `index.tsx` re-export.
- Main navigation and layout are managed in `App.tsx` using PatternFly's `Page`, `Masthead`, and `Sidebar` components.

### How to Run Tests
```sh
npm test
```

### How to Start the App
```sh
npm run dev
```

---

This project demonstrates best practices for building maintainable, accessible, and enterprise-ready UIs with PatternFly, Vite, TypeScript, and React 19.
