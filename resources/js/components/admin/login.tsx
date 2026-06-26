import { useForm, usePage } from "@inertiajs/react";

export default function Login() {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/admin/login');
    }

    return (
        <div className="flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex justify-center mb-8">
                        <img src="/pssLogo.webp" alt="PSS Sleman" loading="lazy" className="h-20 w-auto" />
                    </div>

                    <h1 className="text-2xl font-bold text-center text-[#1c1c1c] mb-2">
                        Login Dashboard
                    </h1>

                    {errors.username && (
                        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 mb-6 text-sm">
                            {errors.username}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={data.username}
                                onChange={e => setData('username', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent text-sm text-[#1c1c1c]"
                                placeholder="Masukkan username"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent text-sm text-[#1c1c1c]"
                                placeholder="Masukkan password"
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={data.remember}
                                onChange={e => setData('remember', e.target.checked)}
                                className="h-4 w-4 text-[#0f7a4a] focus:ring-[#0f7a4a] border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                Ingat saya
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#0f7a4a] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#0c6239] transition-colors disabled:opacity-50"
                        >
                            {processing ? 'Memproses...' : 'Masuk'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
