"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createLinearGradient(start, end) {
  return new LinearGradient(start || 0, end || 255);
}

function LinearGradient(start, end) {
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

    var stopColor = (0, _utils.formatColorString)(color);
    var stop = {
      index: index,
      color: stopColor
    };
    this.colorStop.splice(_lodash["default"].sortedIndexBy(this.colorStop, stop, 'index'), 0, stop);
  };

  this.getAll = function () {
    return _lodash["default"].range(start, end + 1).map(function (item) {
      return this.getColor(item);
    }.bind(this));
  };

  this.getColor = function (number) {
    var maxStop, minStop, va;

    if (this.color[number]) {
      return this.color[number];
    }

    var proportion = (number - this.start) / (this.end - this.start);

    var index = _lodash["default"].sortedIndexBy(this.colorStop, {
      index: proportion
    }, 'index');

    if (proportion === this.colorStop[index].index) {
      this.color[number] = this.colorStop[index].color;
    } else {
      maxStop = this.colorStop[index];
      minStop = this.colorStop[index - 1];
      va = (proportion - minStop.index) / (maxStop.index - minStop.index);
      this.color[number] = [parseInt(maxStop.color[0] * va + (1 - va) * minStop.color[0]), parseInt(maxStop.color[1] * va + (1 - va) * minStop.color[1]), parseInt(maxStop.color[2] * va + (1 - va) * minStop.color[2]), parseFloat(maxStop.color[3] * va + (1 - va) * minStop.color[3])];
    }

    return this.color[number];
  };
}

var _default = createLinearGradient;
exports["default"] = _default;