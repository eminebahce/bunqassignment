import request from 'superagent';

const baseURL = 'http://assignment.bunq.com';
export const USERS_FETCHED = 'USERS_FETCHED';
export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';
export const MESSAGES_FETCHED = 'MESSAGES_FETCHED';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

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
                dispatch(conversationsFetched(JSON.parse(response.text), id))
            })
            .catch(error => console.log(error))
    }
};

export const getMessages = (conversationId) => {
    return(dispatch) => {
        request(`${baseURL}/conversation/${conversationId}/message/limited?limit=5&offset=1`)
            .then(response => {
                dispatch(messageFetched(JSON.parse(response.text)))
            })
            .catch(error => console.log(error))
    }
};

export const createMessage = (message, senderId) => {
    return(dispatch) => {
        console.log(message, senderId);
        request
            .post(`${baseURL}/conversation/${senderId}/message/send`)
            .send({message:message, senderId:senderId})
            .then(response => {
                dispatch(messageCreated(response))
            })
            .catch(error => console.log(error))
    }
}

const usersFetched = (users) => ({
    type: USERS_FETCHED,
    payload: {
        users
    }
});

const conversationsFetched = (conversations, id) => ({
    type: CONVERSATIONS_FETCHED,
    payload: {
        conversations,
        id
    }
});

const messageFetched = (messages) => ({
    type: MESSAGES_FETCHED,
    payload: {
        messages
    }
});

const messageCreated = (message, senderId) => ({
  type: CREATE_MESSAGE,
  payload: {
      message,
      senderId
  }
});