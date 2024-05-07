/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
       screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
         'xxxs': '320px',
         'xxs' : '375px',
         'xs' : '425px',
       },
    extend: {
      screens: {
        '1xl': '1440px',
      },
      colors: {
        primary: {
          Darkblue: '#07043B',
          Bluedesa: '#575989'
        },
        accent: {
          Brightblue: '#2F65F9',
          CyanModer: '#41A494'
        },
        neutral: {
          Bluegraylight: '#f8f8fe',
          Lightgray: '#00004b',
        }
      },
      fontFamily: {
        body:['Open Sans'],
        heading:['Raleway'],
      },
      width: {
        '424': '44rem',
        '1440': '90rem',
        '656': '39.5rem',
        '320': '20rem',
        '1200': '75rem',
        '576': '36rem',
        '762': '47.634',
        '480': '30rem',
      }
    },
    container: {
			center: true,
		},
  },
  plugins: [],
}

