const router = require('express').Router();
// import all the API routes from 'api/index.js'
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// lets add a prefix of 'api' on all routes from the the api directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
