var apiKey = require('./../.env').apiKey;
var git = require('./../js/git.js').reposModule;

$(document).ready(function() {
  $('#repoInfo').click(function() {
    var getRepoInfo = new git();
    var hub = $('#username').val();
      $('#username').val("");
      getRepoInfo.getRepos(hub);
      event.preventDefault();
  });
});
