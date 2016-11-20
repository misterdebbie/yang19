/**
 * Created by debrachong on 11/17/16.
 */
module.exports.loginScreen = function (req,res) {
    res.render('login', {
        title: 'Yang Project! Keep your notes neat',
        pageHeader: {
          title: 'Yang Project!',
          strapline: 'Keep your notes neat :)'
    },
        entries: [{
          name: 'Goodfellas',
          rating: 4,
          review: 'Ray Liotta!'
        }, {
            name: 'Mystery Train',
          rating: 5,
          review: 'Elvis! True love!'
        }, {
            name: 'Part 1',
           rating: 2,
            review: 'Plot is confusing'
        },{
            name: 'Part 2',
            rating: 1,
            review: 'Better than Part 1'
        },{
            name: 'Part 3',
            rating: 5,
            review: 'Picture of the year. MUST SEE'
        }]
    });

};