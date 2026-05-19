import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                typing: {
                "0%": {
                    width: "0%",
                    visibility: "hidden"
                },
                "100%": {
                    width: "100%"
                }
                },
                blink: {
                "50%": {
                    borderColor: "transparent"
                },
                "100%": {
                    borderColor: "white"
                }
                }
            },
            animation: {
                typing: "typing 3s ease-in-out forwards",
                typingDelay: "typing 2s ease-in-out forwards 2.2s",
            }
        },
    },
    plugins: [],
    
};

export default config;
