const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: [String],
  education: [
    {
      instituteName: { type: String, required: true },
      startYear: { type: String, required: true },
      endYear: String,
    },
  ]
});

module.exports = Applicant = mongoose.model("Applicant", ApplicantSchema);
