"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testEnvironmentVariable = exports.connectionString = exports.AWSUrl = exports.AWSPassword = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
exports.testEnvironmentVariable = testEnvironmentVariable;
var connectionString = process.env.CONNECTION_STRING;
exports.connectionString = connectionString;
var AWSPassword = process.env.AWS_PASSWORD;
exports.AWSPassword = AWSPassword;
var AWSUrl = process.env.AWS_URL;
exports.AWSUrl = AWSUrl;