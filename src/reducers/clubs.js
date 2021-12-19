import { INITIAL_STATE } from '../store/store'
import { POST_CLUB } from "../actions"

const clubs = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_CLUB:
            return state.concat(action.club);
        default:
          return state;
      }
};

export default clubs;