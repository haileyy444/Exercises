process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
let items = require("../fakeDb");
const { beforeEach, afterEach, test} = require("node:test");

let item = {name: "eggs", price: 2.50}

beforeEach(async() => {
    items.push(item);
});

afterEach(async() => {
    items.length = 0;
});

// 1. ***GET /items*** - this should render a list of shopping items.
// Here is what a response looks like:
// **[{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]**

    test("Gets all items list", async function () {
        const response = await request(app).get(`/items`);
        const {Items} = response.body;
        expect(response.statusCode).toBe(200);
        expect(items).toHaveLength(1);
    });


// 1. ***POST /items*** - this route should accept JSON data and add it to the shopping list.
// Here is what a sample request/response looks like:
// **{“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}**

    test("Posts a new item", async function () {
        const response = await request(app).post(`/items`).send({name:"popsicle", price: 1.45});

        expect(response.statusCode).toBe(201);
        expect(response.body.item).toHaveProperty("name");
        expect(response.body.item.name).toEqual("popsicle");
        expect(response.body.item).toHaveProperty("price");
        expect(response.body.item.price).toEqual(1.45);
    });
  



// 1. ***GET /items/:name*** - this route should display a single item’s name and price.
// Here is what a sample response looks like:
// **{“name”: “popsicle”, “price”: 1.45}**

    test("Gets a specific item", async function () {
        const response = await request(app).get(`/items/${item.name}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.item).toEqual(item);

    });
    test("Item not found - cannot get item", async function () {
        const response = await request(app).get(`/items/23`);
        expect(response.statusCode).toBe(404);
    });



// 1. ***PATCH /items/:name***, this route should modify a single item’s name and/or price.
// Here is what a sample request/response looks like:
// **{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}**

    test("Updates a specific items name", async function () {
        const response = await request(app).patch(`/items/eggs`).set('Content-Type', 'application/json').send({name:"Almond Milk"});

        expect(response.statusCode).toBe(200);
        expect(response.body.Item.name).toEqual("Almond Milk");
 
    });
    test("Can't updat item - item not found", async function () {
        const response = await request(app).patch(`/items/23`);

        expect(response.statusCode).toBe(404);
      
    });



// 1. ***DELETE /items/:name*** - this route should allow you to delete a specific item from the array.
// Here is what a sample response looks like:
// **{message: “Deleted”}**

    test("Deletes item", async function () {
        const response = await request(app).delete(`/items/${item.name}`);
       
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: "Item Deleted"});
    });


