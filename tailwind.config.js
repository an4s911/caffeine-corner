/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#884A39",
                secondary: "#C38154",
                tertiary: "#FFC26F",
                fourth: "#F9E0BB",
            },
        },
    },
    plugins: [],
};
