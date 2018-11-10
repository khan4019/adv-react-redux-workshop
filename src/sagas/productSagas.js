import {put, call, all, fork} from 'redux-saga/effects'
import data from '../data/productData.json';
import { loadProductsActions, productsLoadedActions } from '../actions/productActions';

function loadProduct(){
    return data;
}

function* loadProductSaga(){
    yield put(loadProductsActions())
    const products = yield call(loadProduct);
    yield put(productsLoadedActions(products));
}

export default function* root(){
    yield all([fork(loadProductSaga)])
}