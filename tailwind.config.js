/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,jsx,js}'],
    theme: {
        fontFamily: {
            sans: 'Roboto Mono, monospace',
        },
        extend: {
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [],
}
