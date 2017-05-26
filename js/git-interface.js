var Repos = require('./../js/git.js').reposModule;

$(document).ready(function() {
  var getRepoInfo = new getRepos();
  $('#repoInfo').click(function() {
    var city = $('#username').val();
    $('#username').val("");
    getRepoInfo.getRepos(city);
  });
});
