const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// DB config
const db = process.env.MONGODB_URL; // change to this process.env.MONGODB_URL

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
