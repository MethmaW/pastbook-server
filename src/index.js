//@ts-check
/**
 * imports
 */

//npm packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");

//general imports
const connectDB = require("./db/index.js");

/**
 * @type{string}
 */
const name = "methma";

//express app setup
const app = express();

//environment variable configuaration
dotenv.config();

//middlewear
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//import Routes
const userRoute = require("./routes/home");

//route middlewear
app.use("/api/user", userRoute);

//test route
app.get("/", (req, res) => {
	res.send("Success");
});

app.listen(process.env.PORT, () =>
	console.log(
		colors.yellow.bold(`🚀 Server is running on`),
		colors.yellow.underline(`http://localhost:${process.env.PORT}`)
	)
);
