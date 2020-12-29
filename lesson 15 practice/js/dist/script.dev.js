"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var unit = {
  health: 100,
  power: 120,
  equipment: {
    shield: 40,
    weapon: 60
  }
};

for (var key in unit) {
  if (_typeof(unit[key]) === "object") {
    for (var value in unit[key]) {
      console.log("Value of ".concat(value, " is: ").concat(unit[key][value]));
    }
  } else {
    console.log("Value of ".concat(key, " is: ").concat(unit[key]));
  }
}