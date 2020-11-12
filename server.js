const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./config/db");
const stripe = require("stripe");
const cors = require("cors");
const path = require("path");

// // connect to db
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// api routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/questions", require("./routes/api/questions"));
app.use("/api/doctors", require("./routes/api/doctors"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/education", require("./routes/api/education"));
app.use("/api/booking", require("./routes/api/doctorBooking"));
app.use("/api/livestream", require("./routes/api/liveStream"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/matchmaking", require("./routes/api/matchmaking"));
// app.use("/api/vendors", require("./routes/api/vendors"));
// Serve static in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
