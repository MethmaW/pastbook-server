const mongoose = require("mongoose");

const selectionSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Selection", selectionSchema);
