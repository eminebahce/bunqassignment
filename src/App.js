import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/store';
import {Route} from "react-router-dom";
import UserListsContainer from '../src/components/UserListsContainer';
import ConversationListsContainer from '../src/components/ConversationListsContainer';
import {withStyles} from '@material-ui/core/styles';

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
          </div>
        </Provider>
    );
  }
}

export default withStyles(styles)(App);
