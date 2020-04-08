//Initialize express router
const router = require('express').Router();


// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to sara world love!'
    });
});

// Import contact controller
const userController = require('../controller/api-controller');// User routes
router.route('/users')
    .get(userController.app)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);


// Export API routes
module.exports = router;