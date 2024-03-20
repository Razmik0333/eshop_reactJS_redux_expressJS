"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fs = require('fs');

var realyze = require('../../config').realyze;

module.exports.reviewsList = function _callee(req, res) {
  var reviews;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM reviews "));

        case 2:
          reviews = _context.sent;
          res.send(reviews);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.reviewsId = function _callee2(req, res) {
  var reviewId, _ref, _ref2, reviewById;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          reviewId = req.params.review_id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM reviews WHERE id = ? ", [reviewId]));

        case 3:
          _ref = _context2.sent;
          _ref2 = _slicedToArray(_ref, 1);
          reviewById = _ref2[0];
          res.send(reviewById);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.reply = function _callee3(req, res) {
  var reply, review_id, _ref3, _ref4, reviewById, reviews, newReviews;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          reply = req.body.reply;
          review_id = req.params.review_id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(realyze("UPDATE `reviews` SET `reply` = ?, `reply_time` = ? WHERE id = ? ", [reply, Date.now(), review_id]));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM reviews WHERE id = ? ", [review_id]));

        case 6:
          _ref3 = _context3.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          reviewById = _ref4[0];
          console.log("🚀 ~ module.exports.reply= ~ reviewById:", reviewById);
          _context3.next = 12;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM reviews WHERE product_id = ?  ORDER BY id DESC ", [productId]));

        case 12:
          reviews = _context3.sent;
          _context3.next = 15;
          return regeneratorRuntime.awrap(getReviewsByProduct(reviews));

        case 15:
          newReviews = _context3.sent;
          fs_functions.writeCacheFile("".concat(cachesPath, "/reviews/reviewsByProduct.json"), newReviews);
          res.send(reviewById);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  });
};