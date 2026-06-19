<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://picsum.photos">
        <link rel="dns-prefetch" href="https://picsum.photos">
        <link rel="preload" as="image" href="https://picsum.photos/1920/1080.webp?random=1"
              imagesrcset="https://picsum.photos/1024/576.webp?random=1 1024w, https://picsum.photos/1440/810.webp?random=1 1440w, https://picsum.photos/1920/1080.webp?random=1 1920w"
              imagesizes="100vw" fetchpriority="high">
        <link rel="preload" as="image" href="https://picsum.photos/1920/1080.webp?random=2"
              imagesrcset="https://picsum.photos/1024/576.webp?random=2 1024w, https://picsum.photos/1440/810.webp?random=2 1440w, https://picsum.photos/1920/1080.webp?random=2 1920w"
              imagesizes="100vw" fetchpriority="high">
        <link rel="preload" as="image" href="https://picsum.photos/1920/1080.webp?random=3"
              imagesrcset="https://picsum.photos/1024/576.webp?random=3 1024w, https://picsum.photos/1440/810.webp?random=3 1440w, https://picsum.photos/1920/1080.webp?random=3 1920w"
              imagesizes="100vw" fetchpriority="high">
        @php
            $woff2ManifestPath = public_path('build/manifest.json');
            $preloadFonts = ['resources/fonts/Calcio-Italiano.woff2', 'resources/fonts/instrument-sans-latin-400-normal.woff2', 'resources/fonts/instrument-sans-latin-600-normal.woff2'];
            if (file_exists($woff2ManifestPath)) {
                $woff2Manifest = json_decode(file_get_contents($woff2ManifestPath), true);
                foreach ($preloadFonts as $key) {
                    if (isset($woff2Manifest[$key])) {
                        $url = asset('build/' . $woff2Manifest[$key]['file']);
                        echo '<link rel="preload" href="' . $url . '" as="font" type="font/woff2" crossorigin>';
                    }
                }
            }
        @endphp

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased overflow-x-hidden">
        <x-inertia::app />
    </body>
</html>
