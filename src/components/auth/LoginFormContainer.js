import React from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

class LoginFormContainer extends React.Component{

    state = {
        email: '',
        password: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
        this.props.history.push("/");
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        return(
            <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
        error: state.login.error
    }
};

export default connect(mapStateToProps, {login})(LoginFormContainer)