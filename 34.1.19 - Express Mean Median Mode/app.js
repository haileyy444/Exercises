const express = require('express');
const ExpressError = require('./expressError.js');
const {validateNums, findMean, findMedian, findMode} = require('./functions.js')

const app = express();

// 3 routes
app.get('/mean', function(request, response, next) {
    if (!request.query.nums) {
        throw new ExpressError('Must pass in valid numbers seperated by commas', 400)
    }
    let stringNums = request.query.nums.split(',');
    let nums = validateNums(stringNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let results = {
        operation: "mean", 
        result: findMean(nums)
    }
    return response.send(results);
});

app.get('/median', function(request, response, next) {
    if (!request.query.nums) {
        throw new ExpressError('Must pass in valid numbers seperated by commas', 400)
    }
    let stringNums = request.query.nums.split(',');
    let nums = validateNums(stringNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let results = {
        operation: "median", 
        result: findMedian(nums)
    }
    return response.send(results);
});

app.get('/mode', function(request, response, next) {
    if (!request.query.nums) {
        throw new ExpressError('Must pass in valid numbers seperated by commas', 400)
    }
    let stringNums = request.query.nums.split(',');
    let nums = validateNums(stringNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let results = {
        operation: "mode", 
        result: findMode(nums)
    }
    return response.send(results);
});


// ERROR HANDLING
app.use(function(request, response, next) {
    const error = new ExpressError("Option Not Found", 404);
    return next(error);
});
app.use(function(error, request, response, next) {
    response.status(error.status || 500);
    return response.json({
        error: error,
        message: error.message
    });
});

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});