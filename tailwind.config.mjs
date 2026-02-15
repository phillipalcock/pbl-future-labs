/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-bg': '#0a0a0a',
                'brand-bg-alt': '#1a1a1a',
                'brand-surface': '#1a1a1a',
                'brand-surface-hover': '#2a2a2a',
                'brand-text': '#ffffff',
                'brand-text-secondary': '#a0a0a0',
                'brand-accent': '#E33D5A',
                'brand-accent-hover': '#c42f49',
                'brand-divider': 'rgba(255, 255, 255, 0.1)',
                'brand-muted': '#a0a0a0',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
            lineHeight: {
                'relaxed-body': '1.7'
            },
            maxWidth: {
                'reading': '680px',
                'hero': '900px',
                'site': '1280px',
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
