import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, Avatar, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import Divider from "./UserLists";

export default function ConversationLists(props) {
    const newConversations = props.conversations.slice(1, 7);
    //console.log(newConversations);
    const json = {...newConversations};

    return(
        <div data-test="review">
            <div>
                {newConversations && Object.keys(json).map((conversation, index) =>
                    <div key={index}>
                        {conversation !== undefined && Object.keys(conversation).map((conv, index) =>
                            <div key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="avatar"
                                            src="/outline-account_circle-black-18/2x/outline_account_circle_black_18dp.png"/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Link to={`/conversation/${json[conversation].conversation.id}`}>{json[conversation].conversation.name}</Link>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography component="span" style={{display: 'inline'}}
                                                        color="textPrimary">
                                                {`Last seen - `}
                                            </Typography>
                                            {json[conversation].conversation.lastseen}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            </div>
                        )}
                        <Divider/>
                    </div>
                )}
            </div>
        </div>
    );
}