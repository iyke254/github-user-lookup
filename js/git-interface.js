var Repos = require('./../js/git.js').reposModule;

$(document).ready(function() {
  var getRepoInfo = new getRepos();
  $('#repoInfo').click(function() {
    var hub = $('#username').val();
    $('#username').val("");
    getRepoInfo.getRepos(hub);
  });
});
