import { SIGNUP_USER, ADD_PARTICIPATE_CLUB, DELETE_PARTICIPATE_CLUB } from "../actions"

const users = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const newData = {};
            newData[action.userId] = action.user;
            return Object.assign({}, state, newData);
        case ADD_PARTICIPATE_CLUB:
            const addState = {...state};
            const addArr = new Set([...addState[action.userId]["participateClubs"], action.clubId]);
            addState[action.userId]["participateClubs"] = [...addArr];
            return addState;
        case DELETE_PARTICIPATE_CLUB:
            const deleteState = {...state};
            const deleteArr = deleteState[action.userId]["participateClubs"].filter((x) => x !== action.clubId);
            deleteState[action.userId]["participateClubs"] = [...deleteArr];
            return deleteState;
        default:
            return state;
      }
};

export default users;