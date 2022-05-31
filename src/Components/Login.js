import React, { useState, useContext } from 'react';
import { setUser } from '../Context/UserContext';
import { UserContext } from '../Context/UserContext';

function Login() {
    const { user, setUser } = useContext(UserContext)
    const onSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        console.log(`Submitted: ${username} ${password}`);
    };

    const [isDisabled, setIsDisabled] = useState(true);
    const [isInputValid, setIsInputValid] = useState(false);
    const [isInput2Valid, setIsInput2Valid] = useState(false);

    const onChange = (e) => {
        setIsInputValid(e.target.value);
        setIsDisabled(!e.target.value || !isInput2Valid);
        setUser({ name: e.target.value });
    };

    const onChange2 = (e) => {
        setIsInput2Valid(e.target.value);
        setIsDisabled(!e.target.value || !isInputValid);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name
                <input name="username" onChange={onChange} />
                {isInputValid && <span>✅</span>}
            </label>
            <br />
            <label>
                Password
                <input name="password" type="password" onChange={onChange} />
                {isInput2Valid && <span>✅</span>}
            </label>
            <br />
            {/* <span id="myName">{user.name}</span> */}
            {/* <button onClick={()=>{setUser() user.name}}>your name</button> */}
            <button disabled={isDisabled}>Submit</button>
        </form>
    );
}

export default Login;

//  const Login = () => {

//         return (
//             <input type="text" id="login" placeholder="username" />
//         );
//     }
//     export default Login;
