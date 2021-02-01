import React, { useRef } from 'react';

export const LoginForm = (props) => {
    const form = useRef(null);

    const checkLogin = (e) => {
        e.preventDefault();
        const login = form.current.login.value;
        const password = form.current.password.value;

        props.login(login, password);
    };

    return (
        <div className='loginform'>
            <div className='loginwrapper'>
                <form ref={form}>
                    <input type='text' name='login' placeholder='Username' />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <input type='submit' value='Login' onClick={checkLogin} />
                </form>
            </div>
        </div>
    );
};
