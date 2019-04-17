import {USERS_FETCHED} from "../actions/OperationsAction";
import {CONVERSATIONS_FETCHED} from "../actions/OperationsAction";

const initialState = {
    users: [],
    conversations: []
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case USERS_FETCHED:
            return {
                ...state,
                users: action.payload.users
            }
        case CONVERSATIONS_FETCHED:
            return {
                ...state,
                conversations: action.payload.conversations
            }
        default:
            return state;
    }
}

export default reducer;

