(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5f5ee9d348a554dc88e9d7f9d248b1ab884326df";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function git() {}

function displayInfo() {}

git.prototype.getRepos = function(hub) {
  $.get('https://api.github.com/users/' + hub + '?access_token=' + apiKey).then(function(response) {
    console.log(response)
    $("#showRepos").text(response.name);
    event.preventDefault();
  }).fail(function(error) {
    //console.log(error.response.message);
    console.log("errorrepo");
  });
};
displayInfo.prototype.getName = function(hub, displayRepos) {
  $.get('https://api.github.com/users/' + hub + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i = 0; i < response.length + 1; i++) {
      if (response[i].description === null) {
        response[i].description = 'No description in repo';
      }
      displayRepos(response[i].name, response[i].description, response[i].created_at);
    }
  }).fail(function(error) {
    //console.log(error.response.message);
    console.log("errorname");
  });


};
exports.reposModule = git;
exports.displayInfoModule = displayInfo;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/git.js":2}]},{},[3]);
