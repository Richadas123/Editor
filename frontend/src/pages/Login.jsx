// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';

// import { handleError, handleSuccess } from '../utils';

// function Login({ setIsAuthenticated }) {
//   const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       handleError('Email and password are required');
//       return;
//     }

//     try {
//       const url = `${import.meta.env.VITE_API_URL}/auth/login`;

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();
//       const { success, message, jwtToken, name, error } = result;

//       if (success) {
//         handleSuccess(message);

//         // ✅ Store user data and token
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);

//         // ✅ Update auth state
//         setIsAuthenticated(true);

//         // ✅ Redirect to editor page
//         setTimeout(() => navigate('/EditorComponent'), 1000);
//       } else if (error) {
//         const details = error?.details?.[0]?.message;
//         handleError(details || 'Login failed');
//       } else {
//         handleError(message || 'Login failed');
//       }
//     } catch (err) {
//       handleError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email..."
//             value={loginInfo.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password..."
//             value={loginInfo.password}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Login</button>

//         <span>
//           Don&apos;t have an account? <Link to="/signup">Signup</Link>
//         </span>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// }

// Login.propTypes = {
//   setIsAuthenticated: PropTypes.func.isRequired,
// };

// export default Login;




import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { handleError, handleSuccess } from '../utils';

function Login({ setIsAuthenticated }) {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      handleError('Email and password are required');
      return;
    }

    try {
      const url =`${import.meta.env.VITE_API_URL}/auth/login`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setIsAuthenticated(true);
        setTimeout(() => navigate('/EditorComponent'), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details || 'Login failed');
      } else {
        handleError(message || 'Login failed');
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="center-body">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Login</button>

          <span>
            Don&apos;t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;



// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';
// import { handleError, handleSuccess } from '../utils';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👈 Import icons

// function Login({ setIsAuthenticated }) {
//   const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       handleError('Email and password are required');
//       return;
//     }

//     try {
//       const url = `${import.meta.env.VITE_API_URL}/auth/login`;

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();
//       const { success, message, jwtToken, name, error } = result;

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setIsAuthenticated(true);
//         setTimeout(() => navigate('/EditorComponent'), 1000);
//       } else if (error) {
//         const details = error?.details?.[0]?.message;
//         handleError(details || 'Login failed');
//       } else {
//         handleError(message || 'Login failed');
//       }
//     } catch (err) {
//       handleError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="center-body">
//       <div className="container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email..."
//               value={loginInfo.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="relative">
//             <label>Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Enter your password..."
//               value={loginInfo.password}
//               onChange={handleChange}
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 cursor-pointer text-gray-600"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           <button type="submit">Login</button>

//           <span>
//             Don&apos;t have an account? <Link to="/signup">Signup</Link>
//           </span>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// }

// Login.propTypes = {
//   setIsAuthenticated: PropTypes.func.isRequired,
// };

// export default Login;
