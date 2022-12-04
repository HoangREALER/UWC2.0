const express = require('express');
const { loginView } = require('../controllers/LoginController');
const { mapView } = require('../controllers/MapController');
const router = express.Router();


router.get('/login', loginView);
router.get('/map', mapView);


module.exports = () => {
    return router;
};