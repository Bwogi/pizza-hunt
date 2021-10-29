const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// lets add a prefix of '/pizza' on all the routes created in 'pizza-routes.js'
router.use('/pizza', pizzaRoutes);

module.exports = router;