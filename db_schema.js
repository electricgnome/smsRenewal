require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const callback = function(err, data) {
  if (err) {
    return console.error(err);
  } else {
    console.log(data);
    console.log("Query completed!");
    process.exit();
  }
};

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  payDay: Date,
  amount: String,
  notes: String,
  updated_At: { type: Date, default: Date.now }
});



const Customer = mongoose.model("customers", CustomerSchema);

// Customer.create({ firstName: "Roger", lastName:"Smith", phone: "98292819181", payDay: "12/20/2018", amount: "130.00", notes:"N/A" }, callback);
// Customer.create({ name: "Peter Smith", email: "Peter@smith.com" }, callback);
// Customer.create({ name: "Mary Smith", email: "Mary@smith.com" }, callback);
// Customer.create({ name: "Susan Smith", email: "Susan@smith.com" }, callback);



Customer.find({},callback)