import { takeLatest, all } from "redux-saga/effects";
import TYPES from '../types/constant';
import {setNameSaga} from '../../module/welcome/saga/WelcomeSaga'

export function* rootSaga() {
  yield all([takeLatest(TYPES.REQUEST_SET_NAME_INIT, setNameSaga)]);
}

export default rootSaga;
