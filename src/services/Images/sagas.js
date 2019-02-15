import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    IMAGES_GET_IMAGES_REQUEST,
    IMAGES_GET_IMAGES_SUCCESS,
    IMAGES_GET_IMAGES_FAILURE,
} from '../types';

const BASE_API = 'https://us-central1-react-training-101.cloudfunctions.net/api/shibes';  

function* getImages(action) {
    try {
        console.log("action:",action);
        const response = yield call(axios.get,
            `${BASE_API}?count=${action.payload}`
        );
        console.log("response:",response);
        yield put({
            type: IMAGES_GET_IMAGES_SUCCESS,
            payload: {
                images: response.data,
                imgCount: action.payload
            }
        });
    } catch (err) {
        console.error(err);
        yield put({ type: IMAGES_GET_IMAGES_FAILURE });
    }
}


export default function* () {
    yield takeLatest(IMAGES_GET_IMAGES_REQUEST, getImages);
};
