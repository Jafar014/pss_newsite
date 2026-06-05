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
                typewriters: {
                    to: {
                        left: '100%',
                    }
                },
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
                    "0%": {
                        opacity: '0'
                    },
                    "0.1%": {
                        opacity: '1'
                    },
                    "50%": {
                        opacity: '1',
                        borderColor: "transparent"
                    },
                    "50.1%": {
                        opacity: '0',
                    },
                    "100%": {
                        opacity: '0',
                        borderColor: "white"
                    }
                }
            },
            animation: {
                typewriter: "typewriter 3s steps(11) forwards",
                caret: "typewriter 3s steps(11) forwards, blink 1s steps(11) infinite 3s",
                typing: "typing 3s ease-in-out forwards",
                typingDelay: "typing 2s ease-in-out forwards 2.2s"
            }
        },
    },
    plugins: [],
    
};

export default config;
