# Tessera

A full-stack TypeScript framework with server and client components, a built-in backend layer, and adapters for deploying anywhere.

> **Status:** pre-alpha. Specs first. APIs will change.

## Goals

- Server and client components with one typed route contract
- Express-like backend layer with dependency injection
- Explicit, tag-based caching
- Self-hosting first (Node, Docker, VPS), then Vercel, Cloudflare and Netlify

## Repository

```
packages/   compiler, runtimes, router, CLI
examples/   reference apps
apps/       documentation site
docs/       RFCs and architecture decisions
infra/      Docker, Terraform, Kubernetes
```

## Development

Requires Node 24 and pnpm 10.

```bash
pnpm install
pnpm typecheck
pnpm test
```

## Roadmap

Phase 0 is in progress: design RFCs and three small prototypes. Read them in [`docs/rfcs`](docs/rfcs).

## Contributing

The project is too early for pull requests. Please open an issue to discuss ideas first.

## License

MIT
