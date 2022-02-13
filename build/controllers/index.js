"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = require("./home");

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _home[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _home[key];
    }
  });
});

var _polls = require("./polls");

Object.keys(_polls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _polls[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _polls[key];
    }
  });
});

var _topics = require("./topics");

Object.keys(_topics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _topics[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _topics[key];
    }
  });
});

var _topicQuestions = require("./topicQuestions");

Object.keys(_topicQuestions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _topicQuestions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _topicQuestions[key];
    }
  });
});

var _pollIds = require("./pollIds");

Object.keys(_pollIds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pollIds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pollIds[key];
    }
  });
});

var _questionIds = require("./questionIds");

Object.keys(_questionIds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _questionIds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _questionIds[key];
    }
  });
});

var _questions = require("./questions");

Object.keys(_questions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _questions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _questions[key];
    }
  });
});

var _results = require("./results");

Object.keys(_results).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _results[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _results[key];
    }
  });
});