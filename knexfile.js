module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/customers.sqlite3.db'
    },
  useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};