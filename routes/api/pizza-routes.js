const router = require('express').Router();

// set up the GET all and POST routes at api/pizzas
router
    .router('/')
    .get()
    .post();

// Setup the GET one, PUT and DELETE at api/pizzas/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;