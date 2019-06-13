const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

getCustomers = () => {
    return db('customers');
}

insertNew = (note) => {
    return db('customers').insert(note);
}

findById = (id) => {
    return db('customers').where('id', id).first();
}

removeCustomer = (id) => {
    return db('customers').where('id', id).del();
}

updateCustomer = (id, note) => {
    return db('customers').where('id', id,).update(note);
}

module.exports ={
    getCustomers,
    insertNew,
    findById,
    removeCustomer,
    updateCustomer
}