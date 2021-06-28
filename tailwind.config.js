module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./public/assets/images/KEB_0902.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
      colors: {
        blue: {
          100: "#72c1df",
          200: "#5bb7d9",
          300: "#43add4",
          400: "#2ca2ce",
          500: "#1498c9",
          600: "#1289b5",
          700: "#107aa1",
          800: "#0e6a8d",
          900: "#0c5b79",
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': '500px',
        // => @media (min-width: 640px) { ... }
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
      }
    },
  },
};
