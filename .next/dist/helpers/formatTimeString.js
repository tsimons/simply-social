"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = formatTimeString;
var SECOND = 1000;
var MINUTE = 60000;
var HOUR = 3600000;
var DAY = 86400000;
var YEAR = 31536000000;

function formatTimeString(timestamp) {
    var date = new Date(timestamp);
    var now = new Date();
    var diff = now - date;

    if (diff < MINUTE) {
        return Math.floor(diff / SECOND) + "s";
    } else if (diff < HOUR) {
        return Math.floor(diff / MINUTE) + "m";
    } else if (diff < DAY) {
        return Math.floor(diff / HOUR) + "h";
    }

    return Math.floor(diff / YEAR) + "y";
}