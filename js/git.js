var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = getRepos;
