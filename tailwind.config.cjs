/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{html,vue,js}'],
    theme: {
        extend: {},
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            '1x': '1152px',
            // => @media (min-width: 1152px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')['[data-theme=light]'],
                    primary: '#1273EB',
                    // 'primary-content': '#fff',
                    secondary: '#050D28',
                    accent: '#3D4357',
                    'base-100': '#FDFDFD',
                },
            },
        ],
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
