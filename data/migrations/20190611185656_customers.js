exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', table => {
      table.integer('id').primary()
      table.datetime('SignUpDate').defaultTo(knex.fn.now())
      table.string('First_name', 100).notNullable();
      table.string('Last_name', 100).notNullable();
      table.string('Email').unique().notNullable();
      table.double('Latitude').notNullable();
      table.double('Longitude').notNullable();
      table.integer('IP').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('customers')
};
