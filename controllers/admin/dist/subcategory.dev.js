"use strict";

var realyze = require('../../config').realyze;

module.exports.subCategoriesList = function _callee(req, res) {
  var catId, subCategoriesList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          catId = req.params.id;
          _context.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM subcategory WHERE category = ? ", [catId]));

        case 3:
          subCategoriesList = _context.sent;
          res.send(subCategoriesList);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};