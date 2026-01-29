/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.white / 100%'), theme('colors.white / 100%'))`,
                'hero-gradient': `linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)`
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
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
            },
            lineHeight: {
                'relaxed-body': '1.7'
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem'
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
                'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
                'md': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
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
                    'base-200': '#ffffff',
                    'base-300': '#f9fafb',
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
