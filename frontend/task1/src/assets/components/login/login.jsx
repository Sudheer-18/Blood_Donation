import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const Log = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate();

  // Function to validate password
  const validatePassword = (password) => {
    const uppercase = /[A-Z]/.test(password);
    const number = /[0-9]/.test(password);
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return uppercase && number && specialCharacter;
  };

  // Function to validate email
  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  // Handle Login
  const handleLogin = async () => {
      const user_email = email
      console.log(email,password)
      const res = await axios.post('http://localhost:5001/login', { email, password })
      .then(res => {
      localStorage.setItem("data",user_email)
      console.log("yes")
      navigate('/')

      alert('' + res.data.msg);

      })
      .catch(err =>{
      setErrorMessage(err.response.data.msg || 'Error logging in');

      })
    }

  // Handle Sign-Up
  const handleSignUp = async () => {
    // Validate email and password
    if (!validateEmail(email)) {
      alert('Please enter a valid Gmail address ending with @gmail.com');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must contain at least one uppercase letter, one number, and one special character.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5001/signup', {
        name,
        rollNumber,
        email,
        password,
      });
      alert('' + res.data.msg);
      setIsLogin(true); // Switch to login after successful sign-up
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="login-form">
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLogin(false)}>Sign up here</span>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)}>Login here</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Log;


// import React, { useState } from 'react';
// import './login.css';
// import axios from 'axios';

// const Log = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isResetPassword, setIsResetPassword] = useState(false); // Add state for password reset
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [rollNumber, setRollNumber] = useState('');
//   const [newPassword, setNewPassword] = useState(''); // For password reset
//   const [errorMessage, setErrorMessage] = useState('');

//   // Function to validate password
//   const validatePassword = (password) => {
//     const uppercase = /[A-Z]/.test(password);
//     const number = /[0-9]/.test(password);
//     const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
//     return uppercase && number && specialCharacter;
//   };

//   // Function to validate email
//   const validateEmail = (email) => {
//     return email.endsWith('@gmail.com');
//   };

//   // Handle Login
//   const handleLogin = async () => {
//     try {
//       const res = await axios.post('http://localhost:7000/api/auth/login', { email, password });
//       alert('' + res.data.msg);
//     } catch (err) {
//       setErrorMessage(err.response.data.msg || 'Error logging in');
//     }
//   };

//   // Handle Sign-Up
//   const handleSignUp = async () => {
//     // Validate email and password
//     if (!validateEmail(email)) {
//       alert('Please enter a valid Gmail address ending with @gmail.com');
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert('Password must contain at least one uppercase letter, one number, and one special character.');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:7000/api/auth/signup', {
//         name,
//         rollNumber,
//         email,
//         password,
//       });
//       alert('' + res.data.msg);
//       setIsLogin(true); // Switch to login after successful sign-up
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Handle Password Reset
//   const handleResetPassword = async () => {
//     if (!validatePassword(newPassword)) {
//       alert('Password must contain at least one uppercase letter, one number, and one special character.');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:7000/api/auth/reset-password', {
//         email,
//         newPassword,
//       });
//       alert('' + res.data.msg);
//       setIsResetPassword(false); // Go back to login after successful reset
//       setIsLogin(true);
//     } catch (err) {
//       setErrorMessage(err.response.data.msg || 'Error resetting password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       {isResetPassword ? (
//         <div className="reset-password-form">
//           <h2>Reset Password</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <button onClick={handleResetPassword}>Reset Password</button>
//           <p>
//             Back to{' '}
//             <span onClick={() => setIsLogin(true)}>Login</span>
//           </p>
//         </div>
//       ) : isLogin ? (
//         <div className="login-form">
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <button onClick={handleLogin}>Login</button>
//           <p>
//             Don't have an account?{' '}
//             <span onClick={() => setIsLogin(false)}>Sign up here</span>
//           </p>
//           <p>
//             Forgot your password?{' '}
//             <span onClick={() => setIsResetPassword(true)}>Reset Password</span>
//           </p>
//         </div>
//       ) : (
//         <div className="signup-form">
//           <h2>Sign Up</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Roll Number"
//             value={rollNumber}
//             onChange={(e) => setRollNumber(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <button onClick={handleSignUp}>Sign Up</button>
//           <p>
//             Already have an account?{' '}
//             <span onClick={() => setIsLogin(true)}>Login here</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Log;
