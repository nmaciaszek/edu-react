import React from 'react';
import { LoginForm } from './../components/LoginForm/LoginForm';
import auth from './../auth';

export const LandingPage = (props) => {
    const LoginHandler = (login, password) => {
        auth.login(login, password, () => {
            props.history.push('/app');
        });
    };

    return (
        <div>
            <h1>Simple Web App</h1>
            <LoginForm login={LoginHandler} />
        </div>
    );
};
