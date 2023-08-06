/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/images/home-bg.png')",
        'newsletter-bg': "url('/images/newsletter-bg.png')",
        'events-bg': "url('/images/events-bg.png')",
        'about-bg': "url('/images/about-bg.png')",
      }
    },
  },
  plugins: [],
}
