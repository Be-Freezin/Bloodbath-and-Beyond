/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-white': 'var(--primary-white)',
				'primary-white-muted': 'var(--primary-white-muted)',
				'header-text': 'var(--primary-white)',
				'primary-background': 'var(--primary-color)',
				'primary-text': 'var(--primary-black)',
				'primary-text-muted': 'var(--primary-black-muted)',
				'primary-button': 'var(--primary-color)',
				'primary-black': 'var(--primary-black)',
				'button-muted': 'var(--primary-color-muted)',

			},
			fontFamily: {
				heroking: ['heroking', 'san-serif'],
				inika: ['inika', 'serif'],
			},

			boxShadow: {
				'3xl': '15px 8px 0 -5px #111010',
				button: '5px 3px 0 -1px #111010',
			},
		},
	},
	plugins: [],
}
