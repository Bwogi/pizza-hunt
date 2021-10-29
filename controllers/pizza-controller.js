const { Pizza } = require('../models');


const PizzaController = {
    // functions go here
    // get all pizza
    getAllPizza(req, res) {
        Pizza.find({}) // Pizza in this case is actually an instance of mongoose from the models. Mongoose has a function .find({}) that returns all data
            .then(dbPizzaData = res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    // get one pizza by id
    getPizzaById({ params }, res) {
        Pizza.findOne({ _id: params.id })
            .then(dbPizzaData => {
                // if no pizza is found
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No Pizza found with this id!' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create a Pizza
    createPizza({ body }, res) {
        Pizza.create(body)
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => res.status(400).json(err));
    },
    // update Pizza by id 
    updatePizza({ body, params }, res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true }) // if we dont set the third parameter {new:true} it will return original document and not the new version of the document
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete a pizza
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({ _id: params.id })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    }
}   

module.exports = PizzaController;