import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserLists from './UserLists';
import {getUsers} from '../actions/OperationsAction';
import {Grid, List} from '@material-ui/core';
import TopBar from './TopBar';

class UserListsContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div data-test="reviews-list">
                <TopBar />
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={3}>
                        <List>
                            <UserLists users={this.props.users}/>
                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, {getUsers})(UserListsContainer);