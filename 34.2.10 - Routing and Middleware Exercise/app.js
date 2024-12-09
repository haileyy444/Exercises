const express = require('express');
const app = express();
const itemsRoutes = require("./routes/items.js");
const ExpressError = require('./expressError');


app.use(express.json());
app.use("/items", itemsRoutes);

app.use(function (request, response, next) {
    const missingPageError = new ExpressError("Page Not Found", 404);
    return next(missingPageError);

});
app.use((error, request, response, next) => {
    console.error(error);
    response.status(error.status || 500);
    return response.json({error: error.message, status: error.status});
});

module.exports = app;