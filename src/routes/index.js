import {
  // eslint-disable-next-line max-len
  indexPage, pollsPage, topicsPage, topicQuestionsPage, pollIdsPage, questionsPage, questionIdsPage, resultsPage
} from '../controllers';

const express = require('express');

const indexRouter = express.Router();

indexRouter.get('/home', indexPage);
indexRouter.get('/polls/:pollIds', pollsPage);
indexRouter.get('/topics', topicsPage);
indexRouter.get('/topicQuestions/:topicIds', topicQuestionsPage);
indexRouter.get('/pollIds/:questionIds', pollIdsPage);
indexRouter.get('/questionIds/:pollIds/:questionIds', questionIdsPage);
indexRouter.get('/questions/:questionIds', questionsPage);
indexRouter.get('/results/:questionIds', resultsPage);

export default indexRouter;
