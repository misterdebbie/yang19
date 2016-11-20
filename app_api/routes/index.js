/**
 * Created by debrachong on 11/19/16.
 */
console.log('top of app_api/routes/index.js')

var express = require('express');
var router = express.Router();
var ctrlData = require('../controllers/data');
var ctrlHome = require('../controllers/main');


/* API */
router.get('/', ctrlHome.userList);
router.get('/users', ctrlData.findAll);
router.get('/users/:id', ctrlData.findById);
router.post('/users/', ctrlData.add);
router.put('/users/:id', ctrlData.update);
router.delete('/users/:id', ctrlData.deleteById);



module.exports = router;