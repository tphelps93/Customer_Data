const mongoose = require('mongoose');

// Customers data structure
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: Date,
    gender: String,
    weight: Number,
    height: Number,
    bodyFat: Number,
    number: String,
    notes: String
});



// allows use of the customer model in other parts of the application
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;