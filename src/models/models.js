
const mongoose = require("mongoose");

const paitentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  mobile_number: String,
  address: String,
  sex: String,
  date_of_birth: String,
   
    records: [{
      type: mongoose.Schema.Types.ObjectId, ref:"ClinicalTests"
    }]
  });


// Define the clinical test schema
const clinicalTestSchema = new mongoose.Schema({
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    date: { type: String },
    bloodPressure: {type: String},
    respiratoryRate: {type: String},
    bloodOxygenLevel: {type: String},
    heartBeatRate: {type: String},
    // reading: { type: String, required: true },
  });

  const accountModelSchema = new mongoose.Schema({
    user_name: {type: String},
    email: {type: String},
    password: {type: String},
  })
  
  // Create models based on schemas
  const patientsModel = mongoose.model("Patient", paitentSchema);
  const clinicalTestModel = mongoose.model("ClinicalTests", clinicalTestSchema);
  const accountModel = mongoose.model("Account", accountModelSchema)

  module.exports = {
    clinicalTestModel,
    patientsModel,
    accountModel
  }