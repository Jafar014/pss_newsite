import { User, Shield, Info } from "lucide-react";

export default function SettingsPanel() {
    return (
        <div className="w-full">
            <h1 className="text-[#1c1c1c] text-2xl font-semibold">Pengaturan</h1>

            {/* Akun Pengelola */}
            <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <User className="size-5 text-[#0f7a4a]" />
                    <h2 className="text-lg font-semibold text-[#1c1c1c]">Akun Pengelola</h2>
                </div>
                <div className="bg-white rounded-md border border-[#1c1c1c]/10 shadow-xs">
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Nama Akun</label>
                            <div className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm flex items-center text-[#1c1c1c] bg-[#f5f5f5]">
                                admin_pss
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Penanggungjawab</label>
                            <div className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm flex items-center text-[#1c1c1c] bg-[#f5f5f5]">
                                Fajar
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Keamanan */}
            <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <Shield className="size-5 text-[#0f7a4a]" />
                    <h2 className="text-lg font-semibold text-[#1c1c1c]">Keamanan</h2>
                </div>
                <div className="bg-white rounded-md border border-[#1c1c1c]/10 shadow-xs">
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Password</label>
                            <div className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm flex items-center text-[#1c1c1c]/40 bg-[#f5f5f5]">
                                ••••••••
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Informasi Sistem */}
            <div className="mt-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Info className="size-5 text-[#0f7a4a]" />
                    <h2 className="text-lg font-semibold text-[#1c1c1c]">Informasi Sistem</h2>
                </div>
                <div className="bg-white rounded-md border border-[#1c1c1c]/10 shadow-xs">
                    <div className="p-6 space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-[#1c1c1c]/5">
                            <span className="text-[#1c1c1c]/60">Nama Aplikasi</span>
                            <span className="text-[#1c1c1c] font-medium">Panel Admin PSS</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-[#1c1c1c]/5">
                            <span className="text-[#1c1c1c]/60">Framework</span>
                            <span className="text-[#1c1c1c] font-medium">Laravel 13</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-[#1c1c1c]/60">Akun Pengelola</span>
                            <span className="text-[#1c1c1c] font-medium">Admin PSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
