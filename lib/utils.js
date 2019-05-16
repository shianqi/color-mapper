"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatColorString = void 0;

var colorTools = require('color-string');

var formatColorString = function formatColorString(colorString) {
  return colorTools.get.rgb(colorString);
};

exports.formatColorString = formatColorString;