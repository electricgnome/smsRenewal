const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    payDay: Date,
    amount: String,
    notes: String,
    updated_At: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", CustomerSchema);
