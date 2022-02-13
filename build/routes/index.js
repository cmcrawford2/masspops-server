"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controllers = require("../controllers");

var express = require('express');

var indexRouter = express.Router();
indexRouter.get('/home', _controllers.indexPage);
indexRouter.get('/polls/:pollIds', _controllers.pollsPage);
indexRouter.get('/topics', _controllers.topicsPage);
indexRouter.get('/topicQuestions/:topicIds', _controllers.topicQuestionsPage);
indexRouter.get('/pollIds/:questionIds', _controllers.pollIdsPage);
indexRouter.get('/questionIds/:pollIds/:questionIds', _controllers.questionIdsPage);
indexRouter.get('/questions/:questionIds', _controllers.questionsPage);
indexRouter.get('/results/:questionIds', _controllers.resultsPage);
var _default = indexRouter;
exports["default"] = _default;