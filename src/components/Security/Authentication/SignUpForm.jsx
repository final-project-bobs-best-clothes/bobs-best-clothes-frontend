import { useState } from "react";
import "./../../../App.css";

function SignUpForm({ setDisplayState }) {
  const [role, setRole] = useState("");
  const [signUpCredentials, setSignUpCredentials] = useState({
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    role: ["user"],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "role") {
      setRole(value);
    } else {
      // For other fields, directly set the value
      setSignUpCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === "admin") {
      signUpCredentials.role.push("admin");
    }

    //PostReq
    try {
      const res = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpCredentials),
      });
      if (!res.ok) {
        alert("failed to create account");
      } else {
        setDisplayState("login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Sign Up</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-select"
                    name="role"
                    value={role}
                    onChange={handleChange}
                    required
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    name="username"
                    placeholder="Enter username"
                    value={signUpCredentials.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="firstname"
                    className="form-control"
                    name="firstname"
                    placeholder="Enter First name"
                    value={signUpCredentials.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="lastname"
                    className="form-control"
                    name="lastname"
                    placeholder="Enter Last name"
                    value={signUpCredentials.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Enter phone number"
                    value={signUpCredentials.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={signUpCredentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={signUpCredentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
