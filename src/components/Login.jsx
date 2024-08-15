import { useContext, useState } from 'react';
import AuthContext from '../providers/AuthProvider';

const Login = () => {
    const { loginWithGoogle, loginWithEmailPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        loginWithGoogle();
    };

    const handleEmailLogin = (e) => {
        e.preventDefault();
        loginWithEmailPassword(email, password);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Login with Google</button>
            <form onSubmit={handleEmailLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;