const router = require("express").Router();
const Grid = require("../db/models/Grid");

router.post("/save", async (req, res) => {
	const { photos } = req.body;

	console.log(req.body);

	try {
		const newGrid = new Grid({
			photos: photos,
		});

		const saveGrid = await newGrid.save();

		res.status(200).json({
			success: true,
			msg: "Saved grid successfully!",
			data: saveGrid,
		});
	} catch (err) {
		console.log("Save grid", err);

		res.status(500).json({
			status: false,
			msg: "Grid saving process was unsuccessful",
			data: err,
		});
	}
});

router.get("/get-photos", async (req, res) => {
	try {
		const photoGrid = await Grid.find({});
		res.status(200).json({
			success: true,
			msg: "Fectched grid data successfully!",
			data: photoGrid,
		});
	} catch (err) {
		res.status(500).json({
			status: false,
			msg: "Grid saving process was unsuccessful",
			data: err,
		});
	}
});

module.exports = router;
