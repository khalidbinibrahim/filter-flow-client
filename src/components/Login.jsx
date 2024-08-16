import { useContext, useState } from 'react';
import AuthContext from '../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6 font-poppins">Login</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-lg mb-4 hover:bg-red-600 transition duration-200"
                >
                    <FaGoogle className="mr-2" />
                    Login with Google
                </button>
                <div className="text-center text-gray-500 mb-4">or</div>
                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-poppins"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-poppins"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-poppins"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/register" className="text-blue-600 hover:underline">
                        Do not have an account? Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
