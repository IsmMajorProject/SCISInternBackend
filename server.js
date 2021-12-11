const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(cors());

// DB config
const db = require("./config/keys").mongoURI; // change to this process.env.MONGODB_URL

// Connect to DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/recruiter", require("./routes/api/recruiter"));
app.use("/api/listing", require("./routes/api/listing"));
app.use("/api/applicant", require("./routes/api/applicant"));
app.use("/api/application", require("./routes/api/application"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => {
  console.log(`Server is running on port => ${PORT}`);
});
