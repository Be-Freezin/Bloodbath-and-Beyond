/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-white': 'var(--primary-white)',
				'header-text': 'var(--primary-white)',
				'primary-background': 'var(--primary-color)',
				'primary-text': 'var(--primary-black)',
				'primary-button': 'var(--primary-color)',
				'primary-black': 'var(--primary-black)',
				'button-muted': 'var(--primary-color-muted)',
			},
			fontFamily:{
				'heroking': ['heroking', 'san-serif'],
				'inika': ['inika', 'serif']

			}
		},
	},
	plugins: [],
}

