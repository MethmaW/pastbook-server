const request = require("supertest");

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

module.exports = { apiGridGet };
