# Computer Store Demo

Great deals on laptops!

## Build With

- React + [Vite](https://vitejs.dev/): Frontend
- [NestJS](https://nestjs.com/): Backend
- [Turborepo](https://turbo.build/): bundler and build system
- Postgres
- [Prisma](https://www.prisma.io/): ORM
- Docker
- [pnpm](https://pnpm.io/): package manager

## Getting Started

This repo contains a frontend and a backend app. The frontend source code lives in `apps/store` and the backend source code lives in `apps/api`.

_Run the following commands from the root of the repo. No need to change directories into each app._

Install project dependencies

```sh
pnpm install
```

Generate prisma client

```sh
pnpm --filter api prisma:generate
```

Start database

```sh
docker compose up -d
```

Run migrations

```sh
pnpm run --filter api prisma:migrate
```

Create `.env` file for api

```sh
cp apps/api/.env.example apps/api/.env
```

> [!IMPORTANT]  
> Update the `DATABASE_URL` environment variable if not using provided docker database

Seed the database

```sh
pnpm run --filter api seed
```

Start frontend and backend dev servers

```sh
pnpm run dev
```

Both apps should now be running and viewable:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
