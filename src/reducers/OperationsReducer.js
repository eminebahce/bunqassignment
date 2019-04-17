import {USERS_FETCHED} from "../actions/OperationsAction";
import {CONVERSATIONS_FETCHED} from "../actions/OperationsAction";
import {MESSAGES_FETCHED} from "../actions/OperationsAction";
import {CREATE_MESSAGE} from '../actions/OperationsAction';

const initialState = {
    users: [],
    conversations: [],
    messages: [],
    selectedUser: null
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
                conversations: action.payload.conversations,
                selectedUser: action.payload.id
            }
        case MESSAGES_FETCHED:
            return{
                ...state,
                messages: action.payload.messages
            }
        case CREATE_MESSAGE:
            return [...state.messages, action.payload.message]
        default:
            return state;
    }
}

export default reducer;

