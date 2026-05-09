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
        if (token) router.push('/');
    }, [token, router]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    };
    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center">

            <div className="w-full max-w-[350px] bg-white border border-[#dbdbdb] px-10 py-10 mb-[10px]">

                <h1 style={{ fontFamily: "'Dancing Script', cursive" }}
                    className="text-[36px] text-center text-[#262626] mb-6 tracking-wide">
                    Instagram
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-[6px]">
                    <input type="email" placeholder="Số điện thoại, tên người dùng hoặc email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-[10px] py-[9px] border border-[#dbdbdb] rounded-sm text-xs bg-[#fafafa] focus:outline-none focus:border-[#a8a8a8]"
                        required />
                    <input type="password" placeholder="Mật khẩu"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-[10px] py-[9px] border border-[#dbdbdb] rounded-sm text-xs bg-[#fafafa] focus:outline-none focus:border-[#a8a8a8]"
                        required />
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                    <button type="submit" disabled={loading}
                        className="w-full bg-[#3797F0] hover:bg-[#1877F2] disabled:opacity-60 text-white text-sm font-semibold py-[8px] rounded-lg mt-[2px]">
                        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </button>
                </form>

                <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-[#dbdbdb]" />
                    <span className="px-4 text-[13px] font-semibold text-[#8e8e8e]">HOẶC</span>
                    <div className="flex-1 h-px bg-[#dbdbdb]" />
                </div>

                <button className="flex items-center justify-center gap-2 w-full text-[#385185] text-sm font-semibold mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#385185">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                    Đăng nhập bằng Facebook
                </button>

                <div className="text-center">
                    <a href="#" className="text-xs text-[#00376B]">Quên mật khẩu?</a>
                </div>
            </div>

            <div className="w-full max-w-[350px] bg-white border border-[#dbdbdb] py-4 text-center text-sm text-[#262626]">
                Chưa có tài khoản?{' '}
                <a href="/register" className="text-[#3797F0] font-semibold">Đăng ký</a>
            </div>

        </div>
    );
}

export default LoginPage;
