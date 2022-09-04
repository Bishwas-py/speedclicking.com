/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layer/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "source-sans-pro": ['source-sans-pro', 'sans-serif'],
                "mclaren": ['mclaren-regular', 'sans-serif'],
                "sora": ['sora', 'sans-serif'],
            },
            colors: {
                "jazzy": {
                    'light': '#4a4e69',
                    'body': '#21232f',
                    'head': '#313448',
                }
            },
        }
    },
    plugins: [
    ]
}
