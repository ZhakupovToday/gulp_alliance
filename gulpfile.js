const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const group = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");

gulp.task("clean", function (done) {
  if (fs.existsSync("./dist/")) {
    return gulp.src("./dist/", { read: false }).pipe(clean());
  }
  done();
});

const fileIncludeSetting = {
  prefix: "@@",
  basepath: "@file",
};

const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

gulp.task("html", function () {
  return gulp
    .src("./src/*.html")
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("sass", function () {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(plumber(plumberNotify("SCSS")))
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(group())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("img", function () {
  return gulp.src("./src/img/**/*").pipe(gulp.dest("./dist/img/"));
});

gulp.task("js", function () {
  return gulp
    .src("./src/js/*.js")
    .pipe(plumber(plumberNotify("JS")))
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("server", function () {
  return gulp.src("./dist/").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("./src/**/*.html", gulp.parallel("html"));
  gulp.watch("./src/img/**/*", gulp.parallel("img"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("js"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel("html", "sass", "img", "js"),
    gulp.parallel("server", "watch")
  )
);
