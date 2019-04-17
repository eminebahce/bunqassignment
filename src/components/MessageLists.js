import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";

export default function MessageLists(props) {
    const names = {
        1: "Wessel",
        2: "Quint",
        3: "Mani",
        4: "Menno",
        5: "Patrick"
    };

    return (
        <div>
            {props.messages && props.messages.map((msg, index) =>
                <div key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="avatar"
                                    src="/outline-account_circle-black-18/2x/outline_account_circle_black_18dp.png"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    {Object.keys(names).map(name => {
                                            if (name === msg.senderId) {
                                                return names[name];
                                            }
                                        }
                                    )}
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" style={{display: 'inline'}}
                                                color="textPrimary">
                                        {msg.message}
                                    </Typography>
                                    {`- ${msg.timestamp}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </div>
            )}
        </div>
    )
}