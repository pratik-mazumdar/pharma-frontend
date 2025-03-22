import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Reducers/Authslice';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
      {/* Left Panel: Logo / Branding */}
      <div className="hidden lg:flex w-1/2 bg-gray-50 items-center justify-center">
        <img
          src="/Logo.svg"
          alt="Logo"
          className="max-w-sm"
        />
      </div>

      {/* Right Panel: Login Form */}
      <div className="flex flex-col w-full lg:w-1/2 bg-gray-50 items-center justify-center px-8 py-10">
        <div className="max-w-md w-full">
          {/* Logo (Mobile only) */}
          <div className="lg:hidden flex justify-center mb-6">
            <img
              src="/Logo.svg"
              alt="Logo"
              className="w-24 h-24"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">Log in to your account</h2>
          <p className="text-gray-600 mb-8">Welcome back! Please enter your details.</p>
          {error && <div className="text-red-600 mb-2">{error}</div>}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => console.log("Forgot password clicked")}
              >
                Forgot password
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              label={loading ? "Signing in..." : "Sign in"}
              variant="primary"
              className="w-full"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;