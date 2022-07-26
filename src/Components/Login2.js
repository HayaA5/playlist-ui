import React, {useRef} from 'react'
import './Login2Ter.css'

function Login2() {
    const loginRef=useRef();
    const signupRef=useRef();

    function aa(e) {
        debugger;
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                signupRef.current.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }

    function bb(e){
        debugger;
            let parent = e.target.parentNode;
            Array.from(e.target.parentNode.classList).find((element) => {
                if(element !== "slide-up") {
                    parent.classList.add('slide-up')
                }else{
                    loginRef.current.parentNode.parentNode.classList.add('slide-up')
                    parent.classList.remove('slide-up')
                }
            });
    
    }

  return (
<div class="form-structor">
	<div class="signup">
		<h2 class="form-title" id="signup" ref={signupRef} onClick={(e)=>aa(e)}><span>or</span>Sign up</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Name" />
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
		</div>
		<button class="submit-btn">Sign up</button>
	</div>
	<div class="login slide-up">
		<div class="center">
			<h2 class="form-title" id="login" ref={loginRef} onClick={(e)=>bb(e)}><span>or</span>Log in</h2>
			<div class="form-holder">
				<input type="email" class="input" placeholder="Email" />
				<input type="password" class="input" placeholder="Password" />
			</div>
			<button class="submit-btn">Log in</button>
		</div>
	</div>
</div>

    )
}

export default Login2


 