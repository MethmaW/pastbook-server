/**
 * MongoDB library for object data modeling
 * @const mongoose
 * */
const mongoose = require("mongoose");

const colors = require("colors");

/**
 * connecting to mongoDB
 * @function connectDB
 */
const connectDB = () => {
	const uri = process.env.DB_URI;

	try {
		mongoose.connect(
			uri,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
			() => console.log(colors.blue.bold("🚀 Connected to MongoDB"))
		);
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
