/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.white / 100%'), theme('colors.gray.50 / 100%'))`,
                'hero-gradient': `linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #fef3c7 100%)`
            },
            colors: {
                neutral: colors.neutral,
                gold: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f'
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
            },
            lineHeight: {
                'relaxed-body': '1.7'
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2563EB',
                    'primary-content': '#ffffff',
                    secondary: '#64748B',
                    'secondary-content': '#ffffff',
                    accent: '#d97706',
                    'accent-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#F3F4F6',
                    'base-300': '#E5E7EB',
                    'base-content': '#1F2937',
                    info: '#2563EB',
                    'info-content': '#ffffff',
                    success: '#10B981',
                    'success-content': '#ffffff',
                    warning: '#F59E0B',
                    'warning-content': '#ffffff',
                    error: '#EF4444',
                    'error-content': '#ffffff'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
