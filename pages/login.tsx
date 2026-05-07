import { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginRequest } from '../store/auth/actions';
import { RootState } from '../store';
import Image from 'next/image';

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, token } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) router.push('/home');
  }, [token, router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginRequest(email, password));
  };
    return (

        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm border border-gray-300 bg-white p-8 mb-3">
                <div className="flex flex-row">
                    <div className="basis-1/3">
                        <div className="">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
                                alt="logo instagram"
                                width={50} 
                                height={50}
                                className="w-[50%] ml-[25%]" />
                        </div>
                    </div>
                    <div className="basis-2/3 justify-center">
                        <h1 className="text-4xl font-logo text-center mb-6">Instagram</h1>
                    </div>

                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="email"
                        placeholder="Phone number, username, or email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border text-sm border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border text-sm border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                    {error && <p style={{ color: 'red'}}>{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded"
                    >
                        { loading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <div className="px-2 text-sm text-gray-500">OR</div>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <button className="text-sm text-blue-900 font-semibold w-full mb-4">
                    Log in with Facebook
                </button>

                <div className="text-xs text-blue-700 text-center cursor-pointer">
                    Forgot password?
                </div>
            </div>

            <div className="w-full max-w-sm border border-gray-300 bg-white text-sm text-center py-4">
                Don’t have an account? <a href="#" className="text-blue-500 font-semibold">Sign up</a>
            </div>
        </div>

    );
}

export default LoginPage;
