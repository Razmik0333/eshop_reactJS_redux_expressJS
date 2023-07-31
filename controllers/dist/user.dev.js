"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bcrypt = require('bcrypt');

var path = require('path');

var fs = require('fs');

var fsPromises = require('fs/promises');

var realyze = require('../config').realyze;

module.exports.userById = function _callee2(req, res) {
  var userId, users, modDataUser;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userId = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM `user` WHERE `id`= ? ", [userId]));

        case 4:
          users = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(Promise.all(users.map(function _callee(item) {
            var url, files;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = "public/images/users/".concat(userId);
                    _context.next = 3;
                    return regeneratorRuntime.awrap(fsPromises.readdir(url));

                  case 3:
                    files = _context.sent;
                    _context.next = 6;
                    return regeneratorRuntime.awrap(_objectSpread({}, item, {
                      picture: "images/users/".concat(userId, "/").concat(files)
                    }));

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })));

        case 7:
          modDataUser = _context2.sent;
          res.send(modDataUser);
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.login = function _callee3(req, res) {
  var _ref, email, password, _ref2, _ref3, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ref = [req.body.email, req.body.password], email = _ref[0], password = _ref[1];
          _context3.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM `user` WHERE `email`= ? ", [email]));

        case 3:
          _ref2 = _context3.sent;
          _ref3 = _slicedToArray(_ref2, 1);
          user = _ref3[0];
          console.log(user['id']);
          _context3.t0 = user;

          if (!_context3.t0) {
            _context3.next = 12;
            break;
          }

          _context3.next = 11;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 11:
          _context3.t0 = _context3.sent;

        case 12:
          if (!_context3.t0) {
            _context3.next = 16;
            break;
          }

          //req.session.user = user;
          res.send("".concat(user.id));
          _context3.next = 17;
          break;

        case 16:
          res.send('0');

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports.register = function _callee4(req, res) {
  var user, passwordHash, emailExist;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          user = req.body;
          _context4.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(user.password, 10));

        case 3:
          passwordHash = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM `user` WHERE `email` = ? OR `login` = ? ", [user.email, user.login]));

        case 6:
          emailExist = _context4.sent;

          if (!(emailExist.length === 0)) {
            _context4.next = 13;
            break;
          }

          _context4.next = 10;
          return regeneratorRuntime.awrap(realyze("INSERT INTO `user` (login, password, email, name, gender, role, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?) ", [user.login, passwordHash, user.email, user.name, user.gender, 'user', Date.now()]));

        case 10:
          res.send('1');
          _context4.next = 14;
          break;

        case 13:
          res.send('0');

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports.avatar = function _callee7(req, res) {
  var usersPath, userId, url, data;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          usersPath = path.resolve() + "/public/images/users/";
          userId = req.body.userId;

          try {
            if (!fs.existsSync(usersPath + "".concat(userId))) {
              fs.mkdirSync(usersPath + "".concat(userId));
            } else {
              url = usersPath + "".concat(userId, "/avatar_").concat(Date.now(), ".jpg");
              data = req.body.preview.replace(/^data:image\/\w+;base64,/, '');
              fs.readdir(usersPath + "".concat(userId), function _callee6(err, files) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

                return regeneratorRuntime.async(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!err) {
                          _context6.next = 2;
                          break;
                        }

                        throw err;

                      case 2:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context6.prev = 5;

                        for (_iterator = files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          file = _step.value;
                          fs.unlink(path.join(usersPath + "".concat(userId), file), function (err) {
                            if (err) throw err;
                            fs.writeFile(url, data, {
                              encoding: 'base64'
                            }, function _callee5(err) {
                              var avatars;
                              return regeneratorRuntime.async(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      if (!err) {
                                        _context5.next = 4;
                                        break;
                                      }

                                      throw err;

                                    case 4:
                                      _context5.next = 6;
                                      return regeneratorRuntime.awrap(fsPromises.readdir("public/images/users/".concat(userId)));

                                    case 6:
                                      avatars = _context5.sent;
                                      res.send(JSON.stringify("/images/users/".concat(userId, "/").concat(avatars[0])));

                                    case 8:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              });
                            });
                          });
                        }

                        _context6.next = 13;
                        break;

                      case 9:
                        _context6.prev = 9;
                        _context6.t0 = _context6["catch"](5);
                        _didIteratorError = true;
                        _iteratorError = _context6.t0;

                      case 13:
                        _context6.prev = 13;
                        _context6.prev = 14;

                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                          _iterator["return"]();
                        }

                      case 16:
                        _context6.prev = 16;

                        if (!_didIteratorError) {
                          _context6.next = 19;
                          break;
                        }

                        throw _iteratorError;

                      case 19:
                        return _context6.finish(16);

                      case 20:
                        return _context6.finish(13);

                      case 21:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, null, null, [[5, 9, 13, 21], [14,, 16, 20]]);
              });
            }
          } catch (error) {
            console.log(error);
          }

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
};

module.exports.name = function _callee8(req, res) {
  var userName, userId, _ref4, _ref5, newUserName;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          //console.log(req.body);
          userName = req.body.user_name;
          userId = req.body.user_id;
          _context8.next = 4;
          return regeneratorRuntime.awrap(realyze("UPDATE user SET name = ? WHERE id = ?", [userName, userId]));

        case 4:
          _context8.next = 6;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM user WHERE id = ?", [userId]));

        case 6:
          _ref4 = _context8.sent;
          _ref5 = _slicedToArray(_ref4, 1);
          newUserName = _ref5[0];
          console.log("🚀 ~ file: user.js:104 ~ module.exports.name= ~ newUserName:", [newUserName]);
          res.send(JSON.stringify(newUserName['name']));

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  });
};