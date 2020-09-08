import { call, put } from 'redux-saga/effects';
import TYPES from '../../../redux/types/constant';
// import { call, put, delay } from "redux-saga/effects";
import ApiRequest from "../../../configs/ApiRequest";

// Saga generator function to update the state
// It can be also useful in case of api call, we can send data from here to api config file in case if needed
export function* setNameSaga({ payload }) {


	let requestObj = {
		methodType: "GET",
		// endPoint:`200/300?image=${payload}`
	  };
	

	try {
		let resultString = yield call(ApiRequest, requestObj);
		resultString = JSON.parse(resultString);
		console.log('resultString :: ',resultString);

        // For sucess state update
		yield put({ type: TYPES.REQUEST_SET_NAME_SUCCESS, payload: {response:payload, api_res:resultString} });
	} catch (error) {
        // in case any error
		yield put({ type: TYPES.REQUEST_SET_NAME_FAILURE, payload: {response:error} });
	}
}


// https://picsum.photos/list