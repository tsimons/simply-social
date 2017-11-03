"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAuthor = exports.getAuthor = function getAuthor(state, id) {
  return state.profiles.data.filter(function (profile) {
    return profile.id === id;
  })[0];
};