import React, {Component} from 'react';
import {connect} from 'react-redux';
import TopBar from './TopBar';
import {Grid, List, Paper, FormControl, Tooltip, Fab, TextField} from '@material-ui/core';
import MessageLists from './MessageLists';
import AddIcon from "@material-ui/icons/Add";
import {getMessages, createMessage} from '../actions/OperationsAction';

class MessageListsContainer extends Component {

    componentDidMount() {
        const path = this.props.history.location.pathname;
        const conversationId = path.split('/');
        this.props.getMessages(conversationId[2]);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const message = event.target.formControlsTextarea.value;
        const senderId = this.props.selectedUser;
        this.props.createMessage(message, senderId);
        event.target.formControlsTextarea.value = " ";
        this.props.history.push('/');
        window.location.reload();
    };

    render() {
        return (<div data-test="reviews-list">
                <TopBar/>
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={3}>
                        <List>
                            <MessageLists messages={this.props.messages}/>
                        </List>
                    </Grid>
                </Grid>
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <form style={{width: "100%", height: "100%"}} onSubmit={this.onSubmit}>
                                <FormControl style={{marginLeft: '10px', width: "90%", marginTop: '25px'}}
                                             required={true}>
                                    <TextField id="formControlsTextarea"
                                               rowsMax="4"
                                               label="Message:"
                                               placeholder="Enter your message here"
                                               required={true}
                                               data-test="formTextArea"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Tooltip title="Click to send the message">
                                        <Fab type="submit" variant="round" color="primary" size="medium"
                                             style={{marginTop: '20px', marginBottom: '20px', marginLeft: '10px'}}>
                                            <AddIcon/>
                                        </Fab>
                                    </Tooltip>
                                </FormControl>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
     messages: state.messages,
     selectedUser: state.selectedUser
});

export default connect(mapStateToProps, {getMessages, createMessage})(MessageListsContainer);