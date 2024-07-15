"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var realyze = require('../../config').realyze;

module.exports.allSubCategoriesList = function _callee(req, res) {
  var subCategoriesList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM subcategory"));

        case 2:
          subCategoriesList = _context.sent;
          console.log("🚀 ~ module.exports.allSubCategoriesList=async ~ subCategoriesList:", subCategoriesList);
          res.send(subCategoriesList);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.subCategoriesListByCategory = function _callee2(req, res) {
  var catId, subCategoriesList;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          catId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM subcategory WHERE category = ? ", [catId]));

        case 3:
          subCategoriesList = _context2.sent;
          res.send(subCategoriesList);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.currentSubCategory = function _callee3(req, res) {
  var subCatId, _ref, _ref2, currentSubCategory;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          subCatId = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM subcategory WHERE id = ? ", [subCatId]));

        case 3:
          _ref = _context3.sent;
          _ref2 = _slicedToArray(_ref, 1);
          currentSubCategory = _ref2[0];
          res.send(currentSubCategory);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports.create = function _callee4(req, res) {
  var body, categoryId, _ref3, _ref4, maxIdByCategory, _ref5, _ref6, maxSubCatId, _ref7, _ref8, currentSubCategory;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          body = req.body;
          categoryId = body.category;
          _context4.next = 4;
          return regeneratorRuntime.awrap(realyze("SELECT MAX(sub_category) as max FROM `subcategory` WHERE category = ?  ", [categoryId]));

        case 4:
          _ref3 = _context4.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          maxIdByCategory = _ref4[0];
          _context4.next = 9;
          return regeneratorRuntime.awrap(realyze("INSERT INTO `subcategory` (category,sub_category,arm_name, rus_name,eng_name, alias) VALUES (?,?,?,?,?,?) ", [categoryId, maxIdByCategory.max + 1, body.arm_name, body.rus_name, body.eng_name, body.alias]));

        case 9:
          _context4.next = 11;
          return regeneratorRuntime.awrap(realyze("SELECT MAX(id) AS max FROM subcategory "));

        case 11:
          _ref5 = _context4.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          maxSubCatId = _ref6[0];
          _context4.next = 16;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM subcategory WHERE id = ? ", [maxSubCatId.max]));

        case 16:
          _ref7 = _context4.sent;
          _ref8 = _slicedToArray(_ref7, 1);
          currentSubCategory = _ref8[0];
          res.send(currentSubCategory);

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports.update = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.send(JSON.stringify('update'));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
};

module.exports["delete"] = function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.send(JSON.stringify('delete'));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
};