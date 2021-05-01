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

router.get("/get", async (req, res) => {
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

router.post("/delete", async (req, res) => {
	console.log(req.body);
	const { id } = req.body;

	try {
		const photoGrid = await Grid.deleteOne({ _id: id });
		res.status(200).json({
			success: true,
			msg: "Deleted the grid successfully!",
			data: photoGrid,
		});
	} catch (err) {
		res.status(500).json({
			status: false,
			msg: "Grid deleting process was unsuccessful",
			data: err,
		});
	}
});

module.exports = router;
