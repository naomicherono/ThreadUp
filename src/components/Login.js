
import React, { useState } from 'react';
import firebaseConfig from '../firebaseConfig';
import { useHistory } from 'react-router-dom'; // Import useHistory
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory(); // Initialize useHistory

  const handleLogin = async () => {
    try {
      await firebaseConfig.signInWithEmailAndPassword(email, password);
      // Redirect to the /products route on successful login
      history.push('/products');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


export default Login;