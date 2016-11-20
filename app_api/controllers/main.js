/**
 * Created by debrachong on 11/17/16.
 */
var request = require('request');

var renderHomepage = function(req, res, responseBody){
    res.render('index', {
        title: 'Users',
        users: responseBody
    });
};

/* GET 'home' page */
module.exports.userList = function(req, res){
    //Call API
    var options = {
        url: 'http://localhost:3000/api/users',
        method: 'GET',
        json: {}
    }

    request(options, function(err, response, body){
        if (err){
            console.log(err);
            res.render('error', {
                message: 'Error',
                error: err
            });
        } else if (response.statusCode === 200){
            renderHomepage(req, res, body);
        } else {
            console.log(response.statusCode);
        }
    });





};
