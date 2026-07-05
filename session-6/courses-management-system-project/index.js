const express = require("express");
const dbConnect = require("./config/db-connect");
require("dotenv").config();
const courseRouter = require("./routes/course-routes");


dbConnect();

const app = express();



app.use(express.json());

app.use("/api/v1/courses", courseRouter);


app.listen(process.env.PORT, () => {
  console.log("Server listening on port 5000");
});
