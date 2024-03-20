import LoginForm from "./Authentication/LoginForm"
import SignUpForm from "./Authentication/SignUpForm"

function Authentication() {
  
  return (
    <div className="push-down text-center">
      <h2>Login</h2>
      <LoginForm></LoginForm>
      <h2>Signup</h2>
      <SignUpForm></SignUpForm>
    </div>

  )
}

export default Authentication