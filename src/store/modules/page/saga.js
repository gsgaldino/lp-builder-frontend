import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import api from 'services/api';
import * as actions from './slice';

export function* fetchPage(action) {
  const pageId = action.payload;

  try {
    const { data } = yield call(api.get, `/page/${pageId}`);

    yield put(actions.fetchPageSuccess(data.page));
  } catch (error) {
    console.log('ERROR', error);
  }
}

export function* createSection(action) {
  const pageId = action.payload;
  try {
    const { data } = yield call(api.post, `/page/${pageId}/section`);
    yield put(actions.updatePageSuccess(data.page));
  } catch (error) {
    console.log('ERROR', error);
  }
}

// export function* updateSection(action) {
//   const { sectionId, pageId } = action.payload;

//   try {
//     const { data } = yield call(api.post, `/page/${pageId}/section/${sectionId}`);
//   } catch (error) {

//   }
// }

export function* deleteSection(action) {
  const { sectionId, pageId } = action.payload;

  try {
    const { data } = yield call(api.delete, `/page/${pageId}/section/${sectionId}`);
    yield put(actions.deleteSectionSuccess(data.deleted));
  } catch (error) {
    console.log('error', error);
  }
}

export function* createElement(action) {
  const { sectionId, pageId, element } = action.payload;

  try {
    const { data } = yield call(
      api.post,
      `/page/${pageId}/section/${sectionId}/element`,
      { element },
    );

    yield put(actions.updatePageSuccess(data.page));
  } catch (error) {
    console.log('error', error);
  }
}

export default all([
  takeLatest(actions.fetchPage.type, fetchPage),
  takeLatest(actions.createSection.type, createSection),
  takeLatest(actions.deleteSection.type, deleteSection),
  takeLatest(actions.createElement.type, createElement),
]);
