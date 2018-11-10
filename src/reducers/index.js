import { combineReducers } from 'redux';
import cartReducers from './cartReducers';
import productReducers from './productsReducers';

const rootReducers = combineReducers({
    cart:cartReducers,
    products:productReducers
})

export default rootReducers;