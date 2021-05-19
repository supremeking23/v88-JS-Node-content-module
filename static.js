var path = require("path");

module.exports = () => {
	return {
		static_contents: (req, res, fs) => {
			if (req.url === "/") {
				fs.readFile("views/index.html", "utf8", function (err, content) {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(content);
					res.end();
				});
			} else if (req.url === "/cars") {
				fs.readFile("views/cars.html", function (err, content) {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(content);
					res.end();
				});
			} else if (req.url === "/cats") {
				fs.readFile("views/cats.html", function (err, content) {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(content);
					res.end();
				});
			} else if (req.url === "/cars/new") {
				fs.readFile("views/new.html", function (err, content) {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(content);
					res.end();
				});
			}

			// stylesheet
			else if (path.extname(req.url) === ".css") {
				fs.readFile(`stylesheets/${path.basename(req.url)}`, "utf8", function (err, content) {
					res.writeHead(200, { "Content-Type": "text/css" });
					res.write(content);
					res.end();
				});
			}
			// images
			// no need to put utf8 as an argument in readfile
			else if (path.extname(req.url) === ".jpg") {
				fs.readFile(`images/${path.basename(req.url)}`, function (err, content) {
					res.writeHead(200, { "Content-Type": "text/jpg" });
					res.write(content);
					res.end();
				});
			} else {
				// res.writeHead(404);
				// res.end("File not found");
				fs.readFile("views/error.html", "utf8", function (err, content) {
					res.writeHead(404, { "Content-Type": "text/html" });
					res.write(content);
					res.end();
				});
			}
			// return res;
		},
	};
};

// else if (req.url === "/images/AmericanBobtail.jpg") {
// 	fs.readFile("images/AmericanBobtail.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/AmericanCurlSHA.jpg") {
// 	fs.readFile("images/AmericanCurlSHA.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/AmericanShorthair.jpg") {
// 	fs.readFile("images/AmericanShorthair.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/aston-martin-db11.jpg") {
// 	fs.readFile("images/aston-martin-db11.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/chevrolet-camaro.jpg") {
// 	fs.readFile("images/chevrolet-camaro.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/Chevrolet-Corvette-Stingray-c7.jpg") {
// 	fs.readFile("images/Chevrolet-Corvette-Stingray-c7.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/Lamborghini-LP770-4-Centenario.jpg") {
// 	fs.readFile("images/Lamborghini-LP770-4-Centenario.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/mercedes-benz-unimog-hound.jpg") {
// 	fs.readFile("images/mercedes-benz-unimog-hound.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/optimus-prime.jpg") {
// 	fs.readFile("images/optimus-prime.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// } else if (req.url === "/images/transformers-barricade-ford-mustang.jpg") {
// 	fs.readFile("images/transformers-barricade-ford-mustang.jpg", function (err, content) {
// 		res.writeHead(200, { "Content-Type": "text/jpg" });
// 		res.write(content);
// 		res.end();
// 	});
// }
