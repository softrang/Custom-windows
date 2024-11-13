/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '375px',
      'msm': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1240px',
      '2xl': '1480px',
      '3xl': '1650px',
      '4xl': '1950px',
     

      
     
    },

    extend: {
      width: {
        '90': '90%',
        '80': '80%',
        '85': '85%',
        '50': '50%',
      },
      colors: {
          oasim:"#181818 ",
          oasim1:"#8752a3 ",
          oasim2:"#f8efff",
          oasim3:"#9AB8DB",
          oasim4:"#471069",
          oasim5:"#023B7D",
      },
      boxShadow: {
        '3xl': '10px -10px 40px  rgba(0, 0, 0, 0.3)',
      }


    },
  },
  plugins: [],
}

