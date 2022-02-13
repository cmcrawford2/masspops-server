"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionIdsPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _modelQuestionIds = _interopRequireDefault(require("../models/modelQuestionIds"));

var questionIdsModel = new _modelQuestionIds["default"]('results');

var questionIdsPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$params, pollIds, questionIds, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$params = req.params, pollIds = _req$params.pollIds, questionIds = _req$params.questionIds;
            _context.next = 4;
            return questionIdsModel.select(pollIds, questionIds);

          case 4:
            data = _context.sent;
            res.status(200).json({
              questionIds: data.rows
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              questionIds: _context.t0.stack
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function questionIdsPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.questionIdsPage = questionIdsPage;