import { takeEvery } from "redux-saga/effects";
import { socketInitializeWorker } from "./socketSaga";

// root saga where we listen for socket initialize
export const rootSaga = function* () {
  yield takeEvery("INITIALIZE_SOCKET", socketInitializeWorker);
};
