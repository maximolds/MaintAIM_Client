module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        20: '20px'
      },
      colors:{
        "main-blue": "hsla(197, 28%, 63%, 1)"
      },
      backgroundColor: {
        'main-bg': '#f3f5f5',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'fade-blue': "#86ACBB",
        "main-blue": "hsla(197, 28%, 63%, 1)"
      },
      borderWidth: {
        1: '1px',
      },
      shadow: {
        custom: '0 0 10px #FFFFFF',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
        'fade-blue': "#86ACBB"
      },
      spacing: {
        1: '1px',
        "16px": "16px",
        40: '40px',
        200:'200px'
      },

      zIndex: {
        '1000': 1000,
        '10000': 10000
      },
      
      width: {
        9000: '9000px',
        318: '318px',
        27:'27px',
        30: '30px',
        80: '80px',
        75: '75px',
        130: '130px',
        200: '250px',
        256: '256px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        30: "30px",
        42: '42px',
        50: '50px',
        80: '80px',
        75: '75px',
        97: '97px',
        119: '119px'
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://img.freepik.com/premium-vector/modern-blue-hexagon-banner-background-suit-medical-futuristic-technology-digital-banner_181182-20279.jpg')",
          
      },
    },
  },
  plugins: [],
};