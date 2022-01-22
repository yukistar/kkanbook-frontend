import { SIGNUP_USER, EDIT_USER_NAME, EDIT_USER_PASSWORD,
         ADD_PARTICIPATE_CLUB, DELETE_PARTICIPATE_CLUB } from "../actions"

const users = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const newData = {};
            newData[action.userId] = action.user;
            return Object.assign({}, state, newData);
        case ADD_PARTICIPATE_CLUB:
            const addParticipateState = {...state};
            const addParticipateArr = new Set([...addParticipateState[action.userId]["participateClubs"], action.clubId]);
            addParticipateState[action.userId]["participateClubs"] = [...addParticipateArr];
            return addParticipateState;
        case DELETE_PARTICIPATE_CLUB:
            const deleteParticipateState = {...state};
            const deleteParticipateArr = addParticipateState[action.userId]["participateClubs"].filter((x) => x !== action.clubId);
            addParticipateState[action.userId]["participateClubs"] = [...deleteParticipateArr];
            return deleteParticipateState;
        case EDIT_USER_NAME:
            const editUserNameData = {...state};
            editUserNameData[action.userId]["userName"] = action.userName;
            return Object.assign({}, state, editUserNameData);
        case EDIT_USER_PASSWORD:
            const editUserPasswordData = {...state};
            editUserPasswordData[action.userId]["userPassword"] = action.userPassword;
            return Object.assign({}, state, editUserPasswordData);
        default:
            return state;
      }
};

export default users;