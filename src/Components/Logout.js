// import React, { useContext } from 'react';
// import { UserContext, login } from '../Context/UserContext';

// function Login() {
//     const { user, setUser } = useContext(UserContext)
//     const onSubmit = (e) => {
//         e.preventDefault();

//         const username = e.target.elements.username.value;
//         const password = e.target.elements.password.value;

//         if (login(username, password)) {
//             setUser(username);
//         }
//     };
//     return (
//         <form onSubmit={onSubmit}>
//             <div className="login">
//                 <input type="text" placeholder="Username" id="username" />
//                 <input type="password" placeholder="password" id="password" />
//                 <a href="#" class="forgot">forgot password?</a>
//                 <input type="submit" value="Sign In" />
//             </div>
//             <div className="shadow"></div>
//         </form>
//     );
// }

// export default Login;
