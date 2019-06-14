
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {First_name: "Javier", Last_name: "Alvarez", Email: "Javier@someemail.com", Latitude: 123.214, Longitude: 123.546, IP: "123.123.123.123" },
      ]);
    });
};
