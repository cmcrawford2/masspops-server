"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _settings = require("../settings");

_dotenv["default"].config();

var pool = new _pg.Pool({
  user: 'cris',
  host: _settings.AWSUrl,
  database: 'masspops',
  password: _settings.AWSPassword,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});
exports.pool = pool;