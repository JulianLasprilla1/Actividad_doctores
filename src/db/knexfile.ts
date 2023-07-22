import path from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port:5433,
      user: 'postgres',
      password: 'changeme',
      database: 'gestion_citas',
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
    },
  },
};
