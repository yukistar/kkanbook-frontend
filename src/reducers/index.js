import { combineReducers } from 'redux';
import clubs from './clubs';
import users from './users';

const rootReducer = combineReducers({
    clubs, 
    users
});

export default rootReducer;