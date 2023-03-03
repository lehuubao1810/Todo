// import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';

// function Register() {
//   const { signup } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError('');
//       setLoading(true);
//       await signup(email, password);
//     } catch (err) {
//       setError('Failed to create an account');
//       console.log(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Password
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit" disabled={loading}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Register() {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(signup)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        setError('');
        setLoading(true);
        await signup(email, password);
        navigate('/');
        } catch (err) {
        setError('Failed to create an account');
        console.log(err);
        }
    
        setLoading(false);
    };
    
    return (
        <div>
        <h2>Register</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
            <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" disabled={loading}>
            Register
            </button>
        </form>
        </div>
    );
}

export default Register;
