"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var path = require('path');

var multer = require('multer');

var realyze = require('./config').realyze;

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.resolve() + '/public/images/gallery');
  },
  filename: function filename(req, file, cb) {
    var _ref, _ref2, max, uniqueSuffix;

    return regeneratorRuntime.async(function filename$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(realyze("SELECT MAX(id) AS id FROM `performed_works`"));

          case 2:
            _ref = _context.sent;
            _ref2 = _slicedToArray(_ref, 1);
            max = _ref2[0];
            console.log("🚀 ~ filename: ~ max:", max);
            uniqueSuffix = "".concat(file.originalname, ".jpg"); //Date.now() + '-' + file.originalname;
            // cb(null, uniqueSuffix)

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
});
var upload = multer({
  storage: storage
});
module.exports.uploadForGallery = upload;