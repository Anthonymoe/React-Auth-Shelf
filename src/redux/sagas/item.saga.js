import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga () {
    yield takeEvery('FETCH_ITEMS', fetchAllItems );
}

function* fetchAllItems() {
    // get all items from the DB
    try {
        const items = yield axios.get('./api/shelf');
        console.log('In fetchAllItems() saga generator.', items.data);
        yield put({ type: 'SET_ITEMS', payload: items.data });
    } catch {
        console.log('get all error' );
    }
}


export default itemSaga;