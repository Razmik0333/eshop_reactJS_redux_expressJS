"use strict";

var fs = require('fs');

var fsPromises = require('fs/promises');

var path = require('path');

var multer = require('multer');

var usersPath = path.resolve() + "/public/images/users/";
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var userId;
    return regeneratorRuntime.async(function destination$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              userId = file.fieldname;

              if (!fs.existsSync(usersPath + "".concat(userId))) {
                fs.mkdirSync(usersPath + "".concat(userId));
              } else {
                fs.readdir(usersPath + "".concat(userId), function (err, files) {
                  if (err) throw err;
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _file = _step.value;
                      fs.unlink(path.join(usersPath + "".concat(userId), _file), function (err) {
                        if (err) throw err;
                      });
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                });
              }

              cb(null, usersPath + "".concat(userId));
            } catch (e) {
              console.log(e);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix;
    return regeneratorRuntime.async(function filename$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            uniqueSuffix = "user_".concat(file.fieldname, "_").concat(Date.now(), ".jpg"); //Date.now() + '-' + file.originalname;

            cb(null, uniqueSuffix);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
});
var upload = multer({
  storage: storage
});
module.exports.uploadAvatar = upload;