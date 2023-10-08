import React from 'react';
import LoginForm from '../components/LoginForm'; 
import './loginStyles.css';

const Login = () => {
  return (
    <div class="login">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;