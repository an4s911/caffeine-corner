/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
