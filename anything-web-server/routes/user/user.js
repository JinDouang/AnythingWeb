'use strict';


// const router = express.Router();

// const userController = require('../../controller/user.controller');
const baseUrl = '/api'


// a simple test url to check that all of our files are communicating correctly.
// router.post('/api/register', userController.signup);


// module.exports = router;

module.exports = function(app) {
    const user = require('../../controller/user.controller')

    app.route(baseUrl + '/register').post(user.signup);
};
