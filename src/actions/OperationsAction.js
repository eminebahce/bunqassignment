import request from 'superagent';

const baseURL = 'http://assignment.bunq.com';
export const USERS_FETCHED = 'USERS_FETCHED';
export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';

export const getUsers = () => {
    return(dispatch) => {
        request(`${baseURL}/users`)
            .then(response => {
                dispatch(usersFetched(JSON.parse(response.text)))
            })
            .catch(error => console.log(error))
    }
};

export const getConversations = (id) => {
    return(dispatch) => {
        request(`${baseURL}/conversation/user/${id}`)
            .then(response => {
                dispatch(conversationsFetched(JSON.parse(response.text)))
            })
            .catch(error => console.log(error))
    }
};

const usersFetched = (users) => ({
    type: USERS_FETCHED,
    payload: {
        users
    }
});

const conversationsFetched = (conversations) => ({
    type: CONVERSATIONS_FETCHED,
    payload: {
        conversations
    }
});