"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var realyze = require('../../config').realyze;

module.exports.categoryList = function _callee(req, res) {
  var categoryList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM category "));

        case 2:
          categoryList = _context.sent;
          console.log("🚀 ~ module.exports.categoryList=async ~ categoryList:", categoryList);
          res.send(categoryList);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.currentCategory = function _callee2(req, res) {
  var catId, _ref, _ref2, currentCategory;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          catId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM category WHERE id = ? ", [catId]));

        case 3:
          _ref = _context2.sent;
          _ref2 = _slicedToArray(_ref, 1);
          currentCategory = _ref2[0];
          res.send(currentCategory);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.create = function _callee3(req, res) {
  var body;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          body = req.body;
          _context3.next = 3;
          return regeneratorRuntime.awrap(realyze("INSERT INTO `category` (alias, arm_name) VALUES ( ?, ? )", [body.alias, body.arm_name]));

        case 3:
          res.send('0');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports.update = function _callee4(req, res) {
  var body;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          body = req.body; //const [alias, arm_name, id] =  

          console.log(body);
          _context4.next = 4;
          return regeneratorRuntime.awrap(realyze("UPDATE `category` SET `alias` = ?, `arm_name` = ?, `rus_name` = ?, `eng_name` = ?  WHERE `id` = ? ", [body.alias, body.arm_name, body.rus_name, body.eng_name, body.id]));

        case 4:
          res.send('1');

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports["delete"] = function _callee5(req, res) {
  var body;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          body = req.body;
          _context5.next = 3;
          return regeneratorRuntime.awrap(realyze("DELETE FROM category WHERE id = ?", [body.id]));

        case 3:
          res.send('0');

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};