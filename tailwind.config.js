/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'darkBlueIntro': 'hsl(217, 28%, 15%)',
          'darkBlueMain': 'hsl(218, 28%, 13%)',
          'darkFlueFooter': 'hsl(216, 53%, 9%)',
          'darkBlueTestimonials': 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          'lightRed': 'hsl(0, 100%, 63%)',
        },
    
      },
      screens : {
        sm : '567px' ,
        md : "768px" ,
        lg  : "992px" ,
        xl : "1200px" ,
        "2xl" : "1400px" ,
      }
    },
  },
  plugins: [],
};