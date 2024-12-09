const Item = require("../itemFunctions.js")
const express = require("express");

//from directions request
const router = express.Router(); 



// 1. ***GET /items*** - this should render a list of shopping items.
// Here is what a response looks like:
// **[{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]**
router.get('', function(request, response, next){
    try {
        const items = Item.findAll();
        return response.json({Items: items});
    }
    catch(error) {
        return next(error);
    }
});


// 1. ***POST /items*** - this route should accept JSON data and add it to the shopping list.
// Here is what a sample request/response looks like:
// **{“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}**
router.post('', (request, response, next) => {
    try {
        let newItem = new Item(request.body.name, request.body.price);
        return response.status(201).json({item: newItem});
    }
    catch(error) {
        return next(error);
    }
});


// 1. ***GET /items/:name*** - this route should display a single item’s name and price.
// Here is what a sample response looks like:
// **{“name”: “popsicle”, “price”: 1.45}**
router.get('/:name', (request, response, next) => {
    try {
        let foundItem = Item.find(request.params.name);
        return response.json({item: foundItem});
    }
    catch(error) {
        return next(error);
    }
});


// 1. ***PATCH /items/:name***, this route should modify a single item’s name and/or price.
// Here is what a sample request/response looks like:
// **{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}**
router.patch('/:name', (request, response, next) => {
    try {
        let foundItem = Item.update(request.params.name, request.body);
        return response.json({item: foundItem});
    }
    catch(error) {
        return next(error);
    }
});


// 1. ***DELETE /items/:name*** - this route should allow you to delete a specific item from the array.
// Here is what a sample response looks like:
// **{message: “Deleted”}**
router.delete('/:name', (request, response, next) => {
    try {
        Item.remove(request.params.name);
        return response.status(200).json({message: 'Item Deleted'});
    }
    catch(error) {
        return next(error);
    }
});


module.exports = router;