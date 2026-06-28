# Architecture

## Decisions

- Use `pnpm workspace` with `turbo` for monorepo orchestration.
- Use `apps/web` for the Vue admin app and `apps/server` for the Fastify API.
- Use MySQL shared tables for multi-tenancy. Business tables must include `tenant_id`, and access should go through tenant-aware service or repository functions.
- Share API contracts through `packages/api-contract` using Zod schemas and TypeScript types.

## Test Layers

- `apps/server`: fast unit and semi-integration tests with `Fastify.inject()`.
- `apps/web`: frontend tests with Vitest for Vue application logic.

## Local Start

```bash
pnpm install
docker compose -f infra/docker/docker-compose.yml up -d
cp .env.example .env
pnpm --filter @app/server prisma:generate
pnpm dev
```
