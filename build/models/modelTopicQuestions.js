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

var ModelTopicQuestions = /*#__PURE__*/function () {
  function ModelTopicQuestions(table) {
    (0, _classCallCheck2["default"])(this, ModelTopicQuestions);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(ModelTopicQuestions, [{
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(topicIdString) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT \"Question_ID\" FROM ".concat(this.table, "\n                    WHERE topic_id IN ").concat(topicIdString);
                return _context.abrupt("return", this.pool.query(query));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function select(_x) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
  }]);
  return ModelTopicQuestions;
}();

var _default = ModelTopicQuestions;
exports["default"] = _default;