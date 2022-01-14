import { SIGNUP_USER } from "../actions"

const users = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const newData = {};
            newData[action.userId] = action.user;
            return Object.assign({}, state, newData);
        default:
            return state;
      }
};

export default users;