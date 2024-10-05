"use strict";

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER_LOGIN,
    pass: process.env.EMAIL_USER_PASS
  }
}, {
  from: "Mailer Test <".concat(process.env.EMAIL_USER_LOGIN, ">")
});

var mailer = function mailer(message) {
  var info;
  return regeneratorRuntime.async(function mailer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail(message));

        case 3:
          info = _context.sent;
          console.log('Email sent : ', info.messageId);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = mailer;