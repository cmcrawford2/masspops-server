"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pool = require("./pool");

var modelQuestionIds = /*#__PURE__*/function () {
  function modelQuestionIds(table) {
    (0, _classCallCheck2["default"])(this, modelQuestionIds);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(modelQuestionIds, [{
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pollIdString, questionIdString) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT DISTINCT \"Question_ID\" FROM ".concat(this.table, "\n                    WHERE \"Poll_ID\" IN ").concat(pollIdString, "\n                    AND \"Question_ID\" IN ").concat(questionIdString);
                return _context.abrupt("return", this.pool.query(query));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function select(_x, _x2) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
  }]);
  return modelQuestionIds;
}();

var _default = modelQuestionIds;
exports["default"] = _default;