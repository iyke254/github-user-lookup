var apiKey = require('./../.env').apiKey;
var git = require('./../js/git.js').reposModule;
var dim = require('./../js/git.js').displayInfoModule;

var displayRepos = function(repoName, repoDescription, $time) {
  $('#showName').append("<li><h4>" + repoName + "</h4><br>" + repoDescription + "<br> Date of creation: " + $time + "</li>");
}

$(document).ready(function() {
  $('#repoInfo').click(function() {
    var getRepoInfo = new git();
    var getdim = new dim();
    var hub = $('#username').val();
    $('#username').val("");
    getRepoInfo.getRepos(hub);
    getdim.getName(hub, displayRepos);
    event.preventDefault();
  });
});
