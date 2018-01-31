'use strict';

var colorTools = require('color-string');
var _ = require('lodash');

function createLinearGradient (start, end) {
  return new LinearGradient(start || 0, end || 255);
}

function LinearGradient (start, end) {

  this.start = Math.min(start, end);
  this.end = Math.max(start, end);
  this.colorStop = [];
  this.color = {};
  this.addColorStop = function (index, color) {
    this.color = {};
    if (index == null || typeof index !== 'number') {
      throw new Error('addColorStop(index, color) index must be a Number');
    }
    if (color == null || typeof color !== 'string') {
      throw new Error('addColorStop(index, color) color must be a String');      
    }
    var stop = _formatColorString(index, color);
    this.colorStop.splice(_.sortedIndexBy(this.colorStop, stop, 'index'), 0, stop);
  }
  this.getAll = function () {
    return _.range(start, end).map(function (item) {
      return this.getColor(item);
    }.bind(this));
  }
  this.getColor = function (number) {
    var maxStop, minStop, va;
    if (this.color[number]) {
      return this.color[number];
    }
    var proportion = (number - this.start) / (this.end - this.start);
    var index = _.sortedIndexBy(this.colorStop, { index: proportion }, 'index');
    if (proportion === this.colorStop[index].index) {
      this.color[number] = this.colorStop[index].color;
    } else {
      maxStop = this.colorStop[index];
      minStop = this.colorStop[index - 1];
      va = (proportion - minStop.index) / (maxStop.index - minStop.index);
      this.color[number] = [
        parseInt(maxStop.color[0] * va + (1 - va) * minStop.color[0]),
        parseInt(maxStop.color[1] * va + (1 - va) * minStop.color[1]),
        parseInt(maxStop.color[2] * va + (1 - va) * minStop.color[2]),
        parseInt(maxStop.color[3] * va + (1 - va) * minStop.color[3]),
      ];
    }
    return this.color[number];
  }
  this.getHex = function (number) {
    return colorTools.to.hex(this.getColor(number));
  }
}

function _formatColorString (index, colorString) {
  var color = colorTools.get.rgb(colorString);
  return {
    index: index,
    color: color,
  }
}

module.exports = {
  createLinearGradient
};