// for class of item - what info is included in it in the db 
// also what can be done to it to make it work. 

const itemsDB = require("./fakeDb");

class Item {
    // make up of an item
    constructor(name, price) {
        this.name = name;
        this.price = price;

        itemsDB.push(this);
    }

    // find all items method - generate shopping list - get/items
    static findAll() {
        return itemsDB;
    }


    // get specific itemsDB - items/name
    static find(name) {
        const foundItem = itemsDB.find(item => item.name === name);
        if(foundItem === undefined){
            throw {message: "Item Not Found", status: 404};
        }
        return foundItem;
    }
    // update specific itemsDB - patch/items/name
    static update(name, data) {
        let foundItem = Item.find(name);
        if(!foundItem){
            throw {message: "Item cannot be Updated Not Found", status: 404};
        }
        if (data.name) foundItem.name = data.name;
        if (data.price) foundItem.price = data.price;
        return foundItem;
    }

    // delete specific item - delete/items/name
    static delete(name) {
        let foundItem = itemsDB.findIndex(item => item.name === name);
        if(foundItem === -1){
            throw {message: "Item cannot be Deleted. Item Not Found", status: 404};
        }
        itemsDB.splice(foundItem, 1);
    }
}
module.exports = Item;