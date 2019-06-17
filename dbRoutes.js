const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

getCustomers = () => {
    return db('customer');
}

insertNew = (customer) => {
    return db('customer').insert(customer);
}

findById = (id) => {
    return db('customer').where('id', id).first();
}

removeCustomer = (id) => {
    return db('customer').where('id', id).del();
}

updateCustomer = (id, customer) => {
    return db('customer').where('id', id,).update(customer);
}

module.exports ={
    getCustomers,
    insertNew,
    findById,
    removeCustomer,
    updateCustomer
}