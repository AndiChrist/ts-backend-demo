// knexfile.ts
import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'demo'
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations'
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds'
    }
  }
};

export default config;
