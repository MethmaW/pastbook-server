/**
 * npm package - Node js framework
 * @const express
 * */
const express = require("express");

/**
 * npm package - dotenv is used to set up environment variables
 * @const dotenv
 * */
const dotenv = require("dotenv");

/**
 * npm package  - cors manages cross origin permissions
 * @const cors
 * */
const cors = require("cors");

/**
 * npm package  - allows to show more readable logs
 * @const colors
 * */
const colors = require("colors");

/**
 * Importing all the database configurations and models
 * @const connectDB
 */
const connectDB = require("./db/index.js");

/**
 * Intializing an express app instance
 * @const app
 */
const app = express();

/**
 * Environment varaiables setup configuration
 * @function config
 */
dotenv.config();

/**
 * Importing gridRoute - all the API end points related to grid functionality
 * @const gridRoute
 */
const gridRoute = require("./routes/grid");

/**
 * express app middlewear setup
 * @function use
 */
app.use(express.json());
app.use(cors());
app.use("/api/grid", gridRoute);

/**
 * connecting to mongoDB
 */
connectDB();

/**
 * listening to the given port
 * @function listen
 */
app.listen(process.env.PORT, () =>
	console.log(
		colors.yellow.bold(`🚀 Server is running on`),
		colors.yellow.underline(`http://localhost:${process.env.PORT}`)
	)
);
