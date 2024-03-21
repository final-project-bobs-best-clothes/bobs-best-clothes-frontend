import { useState } from "react"
import LoginForm from "./Authentication/LoginForm"
import SignUpForm from "./Authentication/SignUpForm"

function Authentication() {
  const [displayState, setDisplayState] = useState("login") 

  return (
    <div className="push-down text-center">
      {(displayState === "login") ? 
      <div>
        <LoginForm></LoginForm>
        <p className="mt-4">No account yet?</p>
        <p>Press here to <strong onClick={() => setDisplayState("signup")} style={{cursor: 'pointer'}}>Sign up</strong></p> 
      </div>
      : 
      <div>
      <SignUpForm setDisplayState={setDisplayState}></SignUpForm>
      <p className="mt-4">Alredy have an account?</p>
      <p>Press here to <strong onClick={() => setDisplayState("login")} style={{cursor: 'pointer'}}>Log in</strong></p> 
      </div>
     }

    </div>

  )
}

export default Authentication