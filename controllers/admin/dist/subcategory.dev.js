"use strict";

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
          res.send(subCategoriesList);

        case 4:
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