/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-bg': '#F5F0EB',
                'brand-bg-alt': '#EDE8E3',
                'brand-text': '#1A1A1A',
                'brand-teal': '#0D9488',
                'brand-teal-hover': '#0F766E',
                'brand-divider': '#D4CFC9',
                'brand-muted': '#6B6560',
            },
            fontFamily: {
                serif: ['Newsreader', ...defaultTheme.fontFamily.serif],
            },
            lineHeight: {
                'relaxed-body': '1.7'
            },
            maxWidth: {
                'reading': '680px',
                'hero': '900px',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out both',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    },
    plugins: []
};
