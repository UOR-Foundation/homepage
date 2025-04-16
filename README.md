# UOR Foundation Website

This is the website for the UOR Foundation, showcasing the UOR Framework and related products.

## Development

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm run dev

# Build for production
pnpm run build

# Run production server
pnpm start

# Run linting
pnpm run lint

# Run type checking
pnpm run typecheck
```

## Deployment

This website is automatically deployed to GitHub Pages through GitHub Actions:

- **Pull Requests**: When a PR is opened against the `main` branch, it's automatically deployed to a staging environment at `https://<github-username>.github.io/homepage/staging-<PR-number>/`

- **Production**: When changes are merged to the `main` branch, the site is automatically deployed to the production environment at `https://<github-username>.github.io/homepage/`

The deployment process is defined in `.github/workflows/deploy.yml`.

### Environment Variables

- `NEXT_PUBLIC_BASE_PATH`: Set to the subdirectory path for GitHub Pages. This is automatically configured by the GitHub Actions workflow.

## Built With

- [Next.js](https://nextjs.org/) - React framework with static site export
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI components