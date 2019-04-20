'use strict';

const baseUrl = '/api'

module.exports = function(app) {
    const alive = require('../controller/alive')

    app.route(baseUrl + '/alive').get(alive.getAlive);
};
