import { spawn } from 'redux-saga/effects';
import watchGetQuestions from '../sagas/getQuestions';
import watchGetQuestionDetails from '../sagas/getQuestionDetails';
import watchPostVote from '../sagas/postVote';
import watchPostQuestion from '../sagas/postQuestion';

/**
 * @description - Core saga function.
 */
export default function* rootSaga() {
  yield 'RootSaga';
  yield spawn(watchGetQuestions);
  yield spawn(watchGetQuestionDetails);
  yield spawn(watchPostVote);
  yield spawn(watchPostQuestion);
}
