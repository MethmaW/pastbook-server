const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = () => {
	const url = process.env.DB_URL;
	const dbName = process.env.DB_NAME;

	try {
		mongoose.connect(
			url + dbName,
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
