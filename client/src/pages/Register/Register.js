import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
  });

  const countries = [
    'Sri Lanka',
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!formData.username) {
      formErrors.username = 'Username is required';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Please confirm password';
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.country) {
      formErrors.country = 'Country is required';
    }
    setErrors(formErrors);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        country: formData.country
    });
      console.log('Response:', res); // Log the entire response
      if (res && res.data && res.data.token) {
          login(res.data.token,formData.username);
          navigate('/home'); // Use navigate instead of history.push
      } else {
          setError('Registration failed. Please try again.');
      }
  } catch (err) {
      console.error('Error:', err); // Log the entire error
      const errorMsg = err.response && err.response.data && err.response.data.msg 
          ? err.response.data.msg 
          : 'An error occurred. Please try again.';
      setError(errorMsg);
  }

  };

  return (
    <div className='background-Reg'>
    <div className="container mt-5" style={{ paddingTop: '8%' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{opacity: '0.9'}}>
            <div className="card-body">
              <h2 className="card-title mb-4" style={{textAlign: 'center'}}>Welcome to the Game-Hub</h2>
              <h3 className="card-subtitle mb-4"  style={{textAlign: 'center'}}>Register an account</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
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
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className={`form-select ${errors.country && 'is-invalid'}`}
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Register
                </button>
                <p className="mt-3">
                Already have an account? <Link to="/">Login here</Link>
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

export default Register;
