import { INITIAL_STATE } from '../store/store'
import { ADD_CLUB, DELETE_CLUB, EDIT_CLUB } from "../actions"

const clubs = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CLUB:
            const newData = {};
            newData[action.clubId] = action.club;
            return Object.assign({}, state, newData);
        case DELETE_CLUB:
            const deleteState = {...state};
            delete deleteState[action.clubId];
            return deleteState;
        case EDIT_CLUB:
            const editState = {...state};
            editState[action.clubId] = action.club;;
            return editState;
        default:
          return state;
      }
};

export default clubs;