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
                'grid-pattern': `linear-gradient(to bottom, theme('colors.white / 100%'), theme('colors.gray.50 / 100%'))`
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
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
                    accent: '#3B82F6',
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
