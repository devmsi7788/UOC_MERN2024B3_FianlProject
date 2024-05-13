import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Login/Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = 'Username is required';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    }
    setErrors(formErrors);
  };

  return (
    <div className='background'>
    <div className="container mt-5" style={{ paddingTop: '10%' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{opacity: '0.75'}}>
            <div className="card-body">
              <h2 className="card-title mb-4" style={{textAlign: 'center'}}>Welcome to the Game-Hub</h2>
              <h3 className="card-subtitle mb-4" style={{textAlign: 'center'}}>Login to your account</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.username && 'is-invalid'}`}
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password && 'is-invalid'}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <p className="mt-3">
                Don't have an account? <Link to="/register">Register here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
