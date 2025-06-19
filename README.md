# ts-backend-demo
Demo for DB interaction by TypeScript

# start MySQL DB
```zsh
 brew services start mysql
```

# stop MySQL DB
```zsh
 brew services stop mysql
```

# DB initialization
```mysql
CREATE DATABASE demo;

USE demo;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');
```

# run application
```zsh
 npm run dev
```

# open in browser
http://localhost:3000/users

# Playwright tests
## installation
```zsh
npm install -D @playwright/test
npx playwright install
```
## initialize Playwright
```zsh
npx playwright init
```
or:
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests',
use: {
baseURL: 'http://localhost:3000',
browserName: 'chromium',
headless: true,
},
});
```
## start tests
```zsh
npx playwright test
```
or:
```zsh
npx playwright test --ui
```

## reporting
```zsh
npx playwright show-report
```

# Knex
## install
```zsh
npm install knex mysql2
npm install -D ts-node typescript @types/node
```

## create configuration
```zsh
npx knex init
```
(and rename to *.ts)

## create table file
```zsh
npx knex --knexfile knexfile.ts migrate:make create_users_table
```
(example: see db/migrations/20250617175154_create_users_table.ts)

## create seed file
```zsh
npx knex --knexfile knexfile.ts seed:make demo_users
```

## execute migrate && seed
create table:
```zsh
npx knex --knexfile knexfile.ts migrate:latest
```
create data:
```zsh
npx knex --knexfile knexfile.ts seed:run
```
