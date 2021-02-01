import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routes) => {
                if (auth.isAuthenticated()) {
                    return <Component {...routes} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: routes.location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
