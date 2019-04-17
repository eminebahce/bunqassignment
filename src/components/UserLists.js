import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, Avatar, Typography} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';



export default function UserLists(props) {

    return (
        <div data-test="review">
    <div>
        {props.users && props.users.map((user, index) =>
            <div key={index}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="avatar"
                                src="/outline-account_circle-black-18/2x/outline_account_circle_black_18dp.png"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Link to={`/user/${user.id}`}>{user.name}</Link>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography component="span" style={{display: 'inline'}}
                                            color="textPrimary">
                                    {user.name}
                                </Typography>
                                {`-${user.name}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider/>
            </div>
        )}
    </div>
</div>
    );
}
