// export default Register;
import '../assets/css/register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

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
        <div className="registerPage">
            <div className='register'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label>Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label> Password </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        
                    </div>
                    <div className="password">
                        <label> Confirm Password </label>
                        <input type="password" />
                        {error && <div className='errorLog'>{error}</div>}
                    </div>
                    <button type="submit" disabled={loading}>
                        Register
                    </button>
                </form>
                <div className='loginLink'>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>

    );
}

export default Register;