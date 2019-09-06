

import { takeEvery, put} from 'redux-saga/effects';
import {GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList(){

    const res = yield axios.get('/api/todolist');
    const action = initListAction(res.data);
    yield put(action);
    //  axios.get('/api/todolist')
    //     .then((res)=>{
    //         const data = res.data;
    //         const action = initListAction(data)
    //         put(action);
    //     })
    //     .catch(()=>{console.log('error')})

}
// generator
function * mySaga(){
    yield takeEvery(GET_INIT_LIST,getInitList)

}
export default mySaga;