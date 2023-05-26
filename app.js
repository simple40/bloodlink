const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/accounts/users",require("./routes/userRoutes"));
app.use("/request",require("./routes/requestRoutes"));
app.use(errorHandler);

app.get("/",(req,res)=>
{
    res.send("Hello World");
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });