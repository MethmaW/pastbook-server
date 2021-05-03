const request = require("supertest");

/**
 * Test - Fetching all the photos from db successfully
 *@function apiGridGet
 */
const apiGridGet = (app) => {
	request(app)
		.get("/api/grid/get")
		.expect(200)
		.end(function (err, res) {
			if (err) throw err;
			if (!err) {
				console.log("GET API - fetch photos test passed");
			}
		});
};

/**
 * Test - Saving a photo grid to the db successfully
 * @function apiGridSave
 */
const apiGridSave = (app) => {
	request(app)
		.post("/api/grid/save")
		.send({ photos: [{ id: "0", thumb: "test image" }] })
		.expect(200)
		.end(function (err, res) {
			if (err) throw err;
			if (!err) {
				console.log("POST API - save photos test passed");
			}
		});
};

/**
 * Test - Must fail to delete the document from the db when a wrong id is provided
 * @function apiGridDelete
 */
const apiGridDelete = (app) => {
	request(app)
		.post("/api/grid/delete")
		.send({ id: "0" })
		.expect(500)
		.end(function (err, res) {
			if (err) throw err;
			if (!err) {
				console.log("POST API - delete photos test passed");
			}
		});
};

module.exports = { apiGridGet, apiGridSave, apiGridDelete };
