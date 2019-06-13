
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', table => {
      table.uuid('id').primary();
      table.datetime('created_at');
      table.string('First_name', 100).notNullable();
      table.string('Last_name', 100).notNullable();
      table.string('Email').unique().notNullable();
      table.float('Latitude').notNullable();
      table.float('Longitude').notNullable();
      table.float('IP').unique().notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('customers')
};
