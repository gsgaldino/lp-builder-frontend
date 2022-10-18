import { all } from 'redux-saga/effects';

import page from './page/saga';

export default function* rootSaga() {
  return yield all([
    page,
  ]);
}
