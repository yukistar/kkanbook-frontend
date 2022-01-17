import { SIGNUP_USER, ADD_PARTICIPATE_CLUB } from "../actions"

const users = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const newData = {};
            newData[action.userId] = action.user;
            return Object.assign({}, state, newData);
        case ADD_PARTICIPATE_CLUB:
            const editState = {...state};
            const set = new Set([...editState[action.userId]["participateClubs"], action.clubId]);
            editState[action.userId]["participateClubs"] = [...set];
            return editState;
        default:
            return state;
      }
};

export default users;