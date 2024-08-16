import { useContext, useState } from 'react';
import AuthContext from '../providers/AuthProvider';

const Register = () => {
    const { registerWithEmailPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        registerWithEmailPassword(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6 font-poppins">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
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
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/login" className="text-blue-600 hover:underline">
                        Already have an account? Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;