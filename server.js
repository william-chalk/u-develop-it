const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require("./utils/inputCheck");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
  });
});
