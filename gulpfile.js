var fs = require("fs");
//var url = require("url");
var path = require("path");
var gulp = require("gulp");
var webserver = require("gulp-webserver");
gulp.task("web", function() {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            fallback: "index.html",
            livereload:true
        }));
});
gulp.task("server", function() {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            middleware: function(req, res, next) {
                res.writeHead(200, {
                    "Content-type": "text/json;charset=utf8",
                    "Access-Control-Allow-Origin": "*"
                });
                //console.log(req.url)
                    res.end(fs.readFileSync("./Data/data.json"));

            }
        }));
});

gulp.task("default", ["web", "server"]);