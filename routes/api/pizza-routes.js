const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller')

// set up the GET all and POST routes at api/pizzas
router
    .router('/')
    .get(getAllPizza)
    .post(createPizza);

// Setup the GET one, PUT and DELETE at api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;