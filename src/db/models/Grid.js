const mongoose = require("mongoose");

/**
 * Mongoose schema for the Grid collection
 * @constant gridSchema
 */
const gridSchema = new mongoose.Schema({
	photos: { type: [{}], required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grid", gridSchema);
