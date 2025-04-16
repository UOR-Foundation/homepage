# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- Use industry standard production practices

## Commands
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run linting

## Coding Style
- **TypeScript**: Use strict TypeScript with proper type annotations
- **Components**: Use React functional components with hooks
- **Imports**: Group imports by type - React, Next.js, components, utilities
- **CSS**: Use Tailwind CSS with shadcn/ui components
- **Naming**: PascalCase for components, camelCase for variables and functions
- **File structure**: One component per file, named the same as the component
- **Error handling**: Use try/catch for async operations, provide meaningful error messages
- **State management**: Use React hooks (useState, useEffect) for component state
- **Formatting**: Use consistent indentation (2 spaces), avoid trailing whitespace
- **Responsiveness**: Design for mobile-first using Tailwind breakpoints (sm, md, lg)
- **Performance**: Use lazy loading and code splitting where appropriate