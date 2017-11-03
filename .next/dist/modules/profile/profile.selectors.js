"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAuthor = exports.getAuthor = function getAuthor(state, id) {
  return state.profiles.data.filter(function (profile) {
    return profile.id === id;
  })[0];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcHJvZmlsZS9wcm9maWxlLnNlbGVjdG9ycy5qcyJdLCJuYW1lcyI6WyJnZXRBdXRob3IiLCJzdGF0ZSIsImlkIiwicHJvZmlsZXMiLCJkYXRhIiwiZmlsdGVyIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBRCxBQUFRLElBQVI7ZUFBZSxBQUFNLFNBQU4sQUFBZSxLQUFmLEFBQW9CLE9BQU8sVUFBQSxBQUFDLFNBQUQ7V0FBYSxRQUFBLEFBQVEsT0FBckIsQUFBNEI7QUFBdkQsR0FBQSxFQUFmLEFBQWUsQUFBMkQ7QUFBNUYiLCJmaWxlIjoicHJvZmlsZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==