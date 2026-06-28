# Runbook

## Development

```bash
pnpm install
pnpm dev
```

The web app runs on `http://127.0.0.1:3200`.
The API server runs on `http://127.0.0.1:3201`.
Swagger UI is available at `http://127.0.0.1:3201/docs`.

## Tests

```bash
pnpm test
```

Server tests run through `apps/server`. Web tests run through `apps/web`.

## Database

```bash
docker compose -f infra/docker/docker-compose.yml up -d mysql
pnpm --filter @app/server prisma:generate
pnpm --filter @app/server prisma:migrate
```
