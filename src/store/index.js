import {createStore} from 'redux'
import rootReducer from '../reducers'
import data from './wowdata'

let store = createStore(rootReducer,data);

export default store;