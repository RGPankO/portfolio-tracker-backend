# 💰 Portfolio Tracker Backend

Portfolio tracker app backend

## Description

Backend is build by [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install

or

$ yarn
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the DB

Backend is currently using Prisma ORM with Postgre DB.
Postgres is running on Docker.

To run Postgre:

```bash
$ docker compose up dev-db -d
```

To run Prisma studio

```bash
$ npx prisma studio
```

To run migrations

```bash
$ npx prisma migrate db
```

For production update `DATABASE_URL` in `.env` file and migrate local DB.

## Endpoints

`/user/data` - Returns portfolio user data

`/coin/data` - Returns coins data

`/transaction/data` - Returns transactions data

## Things to be finished:

- [ ] Migrate users from Firebase and create `user` table with registered user
- [ ] Current users table needs to be renamed to portfolio
- [ ] Relations between `users` <-> `portfolio` <-> `coins` <-> `transactions`
- [ ] Migrate db from Postgre to MySQL
