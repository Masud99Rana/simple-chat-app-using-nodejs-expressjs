const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV.trim() === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    // html response

    // one way
    // res.locals.title = "Error Page";
    // res.render("error");
    
    // Another way
    res.render("error", {
      title: "Error page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
