const { schema, model } = require('mongoose')

// we create the schema
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: string
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// then we create the model
const Pizza = model(Pizza, PizzaSchema);
module.exports = Pizza; // we export the model