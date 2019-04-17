import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConversationLists from './ConversationLists';
import {getConversations} from '../actions/OperationsAction';
import TopBar from './TopBar';
import {Grid, List} from '@material-ui/core';


class ConversationListsContainer extends Component {


    componentDidMount() {
        const userId = this.props.match.params.id;
        this.props.getConversations(userId);
    }


    render() {
        return (
            <div data-test="reviews-list">
                <TopBar/>
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={3}>
                        <List>
                            <ConversationLists conversations={this.props.conversations}/>
                        </List>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    selectedUser: state
});

export default connect(mapStateToProps, {getConversations})(ConversationListsContainer);