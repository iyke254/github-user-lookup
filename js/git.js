var apiKey = require('./../.env').apiKey;

function git(){
}
function displayInfo(){
}

git.prototype.getRepos = function(hub){
  $.get('https://api.github.com/users/'+ hub +'?access_token=' + apiKey).then(function(response){
    $("#showRepos").append(response.name, response.email);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
displayInfo.prototype.getName = function(hub,displayRepos){
  $.get('https://api.github.com/users/'+ hub +'/repos?access_token=' + apiKey).then(function(response){
    $("#showName").append(response);
    for (var i = 0; i< response.length + 1; i++) {
      if (response[i].description===null){
        response[i].description = 'No description in repo';
      }
      displayRepos(response[i].name,response[i].description,response[i].created_at);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.reposModule = git;
exports.displayInfoModule = displayInfo;
