var apiKey = require('./../.env').apiKey;

function git(){

}
git.prototype.getRepos = function(hub){
  $.get('https://api.github.com/users/'+ hub +'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.reposModule = git;
