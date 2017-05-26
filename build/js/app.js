(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5f5ee9d348a554dc88e9d7f9d248b1ab884326df";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/git.js":2}]},{},[3]);
