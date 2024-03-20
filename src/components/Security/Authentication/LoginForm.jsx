import { useState } from "react";
import "./../../../App.css"

function LoginForm() {
    const [loginCredentials, setLoginCredentials] = useState(
       {
        username: "",
        password: ""
       }
    );

    
    const handleChange = (event) => {
      const {name, value} = event.target; 
      setLoginCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(loginCredentials);
      try {
        const res = await fetch("http://localhost:4000/auth/signin", {
          method: "POST",
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(loginCredentials)
        });
        if (!res.ok) {
          console.error("Failed to login");
        } else {
          console.log("Login successful");
          const data = await res.json();
          console.log(data);
          const jwtToken = data.token
          localStorage.setItem('token', jwtToken);
          fetchUser(data.id)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchUser = (id) => {
      fetch(`http://localhost:4000/users/${id}`)
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data.data);
          localStorage.setItem("loggedInUser", JSON.stringify(data.data));
          
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    };
    

  return (
    <div className="container mt-5">
    <div className="row justify-content-center push-down">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="username" className="form-control" name="username" placeholder="Enter username" value={loginCredentials.username} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={loginCredentials.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-dark">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginForm