import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'luna-bright': 'var(--luna-bright)',
      'luna-purple': 'var(--luna-purple)',
      'luna-dark': 'var(--luna-dark)',
      'luna-black': 'var(--luna-black)',
      'luna-white': 'var(--luna-white)',
    },
    fontSize: {
      display: ['48px', { lineHeight: '64px', letterSpacing: '-1.44px' }],
      title: ['24px', { lineHeight: '32px', letterSpacing: '-0.48px' }],
      heading: ['20px', { lineHeight: '28px', letterSpacing: '-0.4px' }],
      body: ['16px', { lineHeight: '24px', letterSpacing: '-0.32px' }],
      label: ['14px', { lineHeight: '22px', letterSpacing: '-0.28px' }],
      footnote: ['12px', { lineHeight: '20px', letterSpacing: '-0.24px' }],
      caption: ['10px', { lineHeight: '16px', letterSpacing: '-0.2px' }],
    },
    spacing: {
      'spacing-50': '2px',
      'spacing-100': '4px',
      'spacing-150': '6px',
      'spacing-200': '8px',
      'spacing-300': '12px',
      'spacing-400': '16px',
      'spacing-500': '20px',
      'spacing-550': '24px',
      'spacing-600': '28px',
      'spacing-700': '32px',
      'spacing-750': '36px',
      'spacing-800': '40px',
      'spacing-850': '48px',
      'spacing-900': '64px',
      'spacing-950': '72px',
      'spacing-1000': '80px',
    },
    borderRadius: {
      'radius-100': '4px',
      'radius-200': '6px',
      'radius-300': '8px',
      'radius-400': '12px',
      'radius-500': '14px',
      'radius-600': '16px',
      'radius-700': '20px',
      'radius-800': '24px',
      'radius-full': '9999px',
    },
  },
  plugins: [],
};
export default config;
