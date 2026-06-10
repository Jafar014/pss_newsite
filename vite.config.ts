import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const isVercel = process.env.VERCEL === '1';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
         !isVercel &&
            wayfinder(),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
    ].filter(Boolean),
    assetsInclude: ['**/*.ttf'],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes('node_modules/react/') || id.includes('node_modules/@inertiajs/react/')) {
                        return 'vendor';
                    }
                    if (id.includes('node_modules/@radix-ui/') || id.includes('node_modules/lucide-react/') || id.includes('node_modules/@headlessui/')) {
                        return 'ui';
                    }
                },
            },
        },
    },
});
