"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPost = exports.getPost = function getPost(state, id) {
  return state.posts.data.filter(function (post) {
    return post.id === id;
  })[0];
};