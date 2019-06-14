const {server} = require('./serverConfig')
const db = require('./dbRoutes');
const port = 5000 || localhost;



//returns all customers in DB
server.get('/customers', (req, res) => {
    db.getCustomers().then( customers => {
        res.status(200).send(customers)
    })
    .catch(error => {message: error})
})

//returns single customer
server.get('/customers/:id', (req, res) => {
    const id = req.params.id;
    db.findById(id).then(customer => {
        res.status(200).json(customer);
    })
    .catch(error => {message: error})
})

//updates  customer information
server.put('customers/update/:id', (req, res) => {
    const id = req.params.id;
    const customer = req.body;
    db.updateCustomer(id, customer).then(updateCustomer => {
        res.status(201).json({message: "Customer information updated."})
    })
    .catch(error => {message: error})
})

//Adds New Customer
server.post('customers', (req, res) => {
    const customer = req.body;
    db.insertNew(customer).then(newCustomer => {
        res.status(201).json({message: "New customer successfully added."})
    })
})

//remove customer
server.delete('customers/remove/:id', (req, res) => {
    const id = req.params.id;
    db.removeCustomer(id).then(response => {
        res.status(200).json({message: `Customer with ${id} has been removed.`})
    })
    .catch(error => {message: error})
})



server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})