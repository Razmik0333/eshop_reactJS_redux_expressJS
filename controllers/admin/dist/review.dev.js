"use strict";

module.exports.getReviewsList = function _callee(req, res) {
  var reviews;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM reviews ORDER BY rating DESC LIMIT 3"));

        case 2:
          reviews = _context.sent;
          console.log("🚀 ~ module.exports.getRatedReviews= ~ reviews:", reviews);
          res.send(reviews);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};