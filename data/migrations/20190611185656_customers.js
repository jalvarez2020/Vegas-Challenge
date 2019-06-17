exports.up = function(knex, Promise) {
  return knex.schema.createTable('customer', table => {
      table.integer('Id').primary()
      table.datetime('SignUpDate').defaultTo(knex.fn.now())
      table.string('First', 100).notNullable();
      table.string('Last', 100).notNullable();
      table.string('Email').unique().notNullable();
      table.string('Latitude').notNullable();
      table.string('Longitude').notNullable();
      table.string('IP').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('customer')
};
