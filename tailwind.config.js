module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-mobile': "url('./img/bg-intro-mobile.svg')",
				'hero-desktop': "url('./img/bg-intro-desktop.svg')",
				'hero-mockups': "url('./img/image-mockups.png')"
			},
			fontFamily: {
				sans: ['"Public Sans"']
			}
		}
	},
	plugins: []
};
