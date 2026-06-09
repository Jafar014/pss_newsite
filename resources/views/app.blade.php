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

        {{-- Inline style for splash screen and HTML background --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }

            #splash-screen {
                position: fixed;
                inset: 0;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #splash-screen .top {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 33.33vh;
                background: #0f7a4a;
            }

            #splash-screen .mid {
                position: absolute;
                top: 33.33vh;
                left: 0;
                right: 0;
                height: 33.34vh;
                background: #f5f5f5;
            }

            #splash-screen .bot {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 33.33vh;
                background: #1c1c1c;
            }

            #splash-screen img {
                position: relative;
                z-index: 1;
                width: 120px;
                animation: splash-blink 1.5s ease-in-out infinite;
            }

            @keyframes splash-blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }

            #splash-screen.fade-out {
                opacity: 0;
                transition: opacity 0.5s ease;
                pointer-events: none;
            }

            html.splash-active,
            html.splash-active body {
                overflow: hidden;
                height: 100%;
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased overflow-x-hidden">
        <div id="splash-screen">
            <div class="top"></div>
            <div class="mid"></div>
            <div class="bot"></div>
            <img src="/pssLogo.png" alt="PSS Sleman">
        </div>

        <x-inertia::app />

        <script>
            (function() {
                var splash = document.getElementById('splash-screen');

                if (localStorage.getItem('pss_visited')) {
                    splash.style.display = 'none';
                } else {
                    document.documentElement.classList.add('splash-active');

                    window.addEventListener('load', function() {
                        setTimeout(function() {
                            splash.classList.add('fade-out');
                            setTimeout(function() {
                                splash.style.display = 'none';
                                document.documentElement.classList.remove('splash-active');
                                localStorage.setItem('pss_visited', 'true');
                            }, 500);
                        }, 2000);
                    });
                }
            })();
        </script>
    </body>
</html>
