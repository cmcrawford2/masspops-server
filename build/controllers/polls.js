"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pollsPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _modelPolls = _interopRequireDefault(require("../models/modelPolls"));

var pollsModel = new _modelPolls["default"]('polls');

var pollsPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pollIds, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pollIds = req.params.pollIds;
            _context.next = 4;
            return pollsModel.select(pollIds);

          case 4:
            data = _context.sent;
            res.status(200).json({
              polls: data.rows
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              polls: _context.t0.stack
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function pollsPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.pollsPage = pollsPage;