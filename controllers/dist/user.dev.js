"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var bcrypt = require('bcrypt');

var realyze = require('../config').realyze;

module.exports.userById = function _callee(req, res) {
  var userId, users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = req.params.id;
          _context.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM `user` WHERE `id`= ? ", [userId]));

        case 3:
          users = _context.sent;
          res.send(users);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.login = function _callee2(req, res) {
  var _ref, email, password, _ref2, _ref3, user;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref = [req.body.email, req.body.password], email = _ref[0], password = _ref[1];
          _context2.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM `user` WHERE `email`= ? ", [email]));

        case 3:
          _ref2 = _context2.sent;
          _ref3 = _slicedToArray(_ref2, 1);
          user = _ref3[0];
          console.log(user['id']);
          _context2.t0 = user;

          if (!_context2.t0) {
            _context2.next = 12;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 11:
          _context2.t0 = _context2.sent;

        case 12:
          if (!_context2.t0) {
            _context2.next = 16;
            break;
          }

          //req.session.user = user;
          res.send("".concat(user.id));
          _context2.next = 17;
          break;

        case 16:
          res.send('0');

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.register = function _callee3(req, res) {
  var user, passwordHash, bool;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = req.body;
          _context3.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(user.password, 10));

        case 3:
          passwordHash = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(realyze("INSERT INTO `user` (login, password, email, name, gender, role, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?) ", [user.login, passwordHash, user.email, user.name, user.gender, 'user', Date.now()]));

        case 6:
          bool = _context3.sent;
          res.send('0');

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
};