import UserReducers from '../Reducers/UserReducers'
import { createStore } from 'redux'

const store = createStore(UserReducers);

export default store

