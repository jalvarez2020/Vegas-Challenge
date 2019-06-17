
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer').insert([
        {First: "Javier", Last: "Alvarez", Email: "Javier@someemail.com", Latitude: 123.214, Longitude: 123.546, IP: "123.123.123.123" },
      ]);
    });
};
