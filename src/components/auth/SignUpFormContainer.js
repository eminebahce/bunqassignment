import React from 'react';
import SignUpForm from './SignUpForm';
import {connect} from "react-redux";
import {signup} from '../../actions/auth';
import { Redirect } from 'react-router-dom';

class SignUpFormContainer extends React.Component{

    state = {
        email: '',
        password: ''
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state.email, this.state.password);
        this.props.history.push("/login");
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        if (this.props.signup.success) return (
            <Redirect to="/login" />
        )
        return(
            <SignUpForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        signup: state.signup
    }
};

export default connect(mapStateToProps, { postSignup: signup})(SignUpFormContainer);