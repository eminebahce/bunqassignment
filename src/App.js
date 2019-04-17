import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import UserListsContainer from '../src/components/UserListsContainer';
import ConversationListsContainer from '../src/components/ConversationListsContainer';
import {withStyles} from '@material-ui/core/styles';
import MessageListsContainer from '../src/components/MessageListsContainer';
import {connect, Provider} from 'react-redux'
import LoginFormContainer from '../src/components/auth/LoginFormContainer';
import SignUpFormContainer from '../src/components/auth/SignUpFormContainer';
import store from "./store";

const styles = {
    root: {
        flexGrow: 1,
    }
};

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App" style={styles.root}>
              <Route exact path="/" component={UserListsContainer}/>
              <Route exact path={"/user/:id"} component={ConversationListsContainer}/>
              <Route exact path={"/conversation/:conversationId"} component={MessageListsContainer}/>
          </div>
            {/*{this.props.currentUser === null &&
            <div>
                <Route exact path="/login" component={LoginFormContainer}/>
                <Route exact path="/signup" component={SignUpFormContainer}/>
            </div>
            }*/}
        </Provider>
    );
  }
}

/*const mapStateToProps = state => ({
    currentUser: state.currentUser
})*/

export default withStyles(styles)(App);
