console.log('top of app_server/routes/index.js')

var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controllers/login');
var ctrlNotes = require('../controllers/notes');
/*var ctrlHome = require('../controllers/main');
var ctrlData = require('../controllers/data');*/


/* GET home page. */
router.get('/', ctrlLogin.loginScreen);
router.get('/notes', ctrlNotes.displayNotes);
router.get('/notes/edit', ctrlNotes.makeEdit);

/* API */
/*router.get('/api/', ctrlHome.userList);
router.get('/api/users', ctrlData.findAll);
router.get('/api/users/:id', ctrlData.findById);
router.post('/api/users/', ctrlData.add);
router.put('/api/users/:id', ctrlData.update);
router.delete('/api/users/:id', ctrlData.deleteById);*/



module.exports = router;
