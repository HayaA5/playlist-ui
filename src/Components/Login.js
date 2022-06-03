import React, { useState, useContext } from 'react';
import { UserContext, login } from '../Context/UserContext';



function Login() {
    const { user, setUser } = useContext(UserContext)
    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        const userData = login(username, password)
        setUser(userData);
    };

    const [isInputValid, setIsInputValid] = useState(false);

    const onChange = (e) => {
        setIsInputValid(e.target.value);
        setUser({ name: e.target.value });

    };

    return (

        <form onSubmit={onSubmit}>

            <div class="login">
                <input type="text" placeholder="Username" onClick={() => { setUser(user.name) }} id="username" />
                <input type="password" placeholder="password" id="password" />
                <a href="#" class="forgot">forgot password?</a>
                <input type="submit" value="Sign In" />
            </div>
            <div class="shadow"></div>
        </form>
    );
}

export default Login;

