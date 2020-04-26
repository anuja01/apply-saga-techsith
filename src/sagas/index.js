import { delay, takeEvery, takeLatest, put, all } from "redux-saga/effects";
export function* watchAll() {
    //combine multiple sagas to a root saga
  yield all([
    yield takeLatest("AGE_DOWN", ageDownAsync),
    yield takeEvery("AGE_UP", ageUpAsync),
  ]);
}
function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

function* ageDownAsync() {
  yield delay(4000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}
