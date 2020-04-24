// obtains access from the Customer.js model
const Customer = require('../models/Customer');

// renders the list.pug view
exports.list = (req, res) => {
    Customer.find({}, function (err, customers) {
        res.render('list', {
            customers
        })
    });
};

// renders the details.pug view
exports.details = (req, res) => {
    Customer.findById(req.params.customerId, function (err, customer) {
        res.render('details', {
            customer
        })
    });
}


// renders the edit.pug view
exports.edit = (req, res) => {
    Customer.findById(req.params.customerId, function (err, customer) {
        res.render('edit', {
            customer
        })
    });
}

// renders the create.pug view
exports.create = (req, res) => {
    res.render('create');
}

// posts new customer information to the database
exports.postCustomer = (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        gender: req.body.gender,
        weight: req.body.weight,
        height: req.body.height,
        bodyFat: req.body.bodyFat,
        number: req.body.number,
        notes: req.body.notes
    });
    customer.save((err) => {
        res.redirect('/');
    });
};



exports.postUpdateCustomer = (req, res) => {
    Customer.findById(req.params.customerId, function (err, customer) {
        customer.name = req.body.name || '';
        customer.email = req.body.email || '';
        customer.date = req.body.date || new Date();
        customer.gender = req.body.gender || '';
        customer.weight = req.body.weight || 0;
        customer.height = req.body.height || 0;
        customer.bodyFat = req.body.bodyFat || 0;
        customer.number = req.body.number || 0;
        customer.notes = req.body.notes || '';
        customer.save((err) => {
            return res.redirect('/');
        })
    });
};

exports.deleteCustomer = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId, function (err) {
        res.redirect('/');
    });
};

