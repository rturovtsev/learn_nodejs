
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '<b>Express</b>', body: '<b>Express</b>' });
};