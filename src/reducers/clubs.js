import { INITIAL_STATE } from '../store/store'
import { POST_CLUB, DELETE_CLUB } from "../actions"

const clubs = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_CLUB:
            return state.concat(action.club);
        case DELETE_CLUB:
            return state.filter(club => club.id !== action.id)
        default:
            return state;
      }
};

export default clubs;