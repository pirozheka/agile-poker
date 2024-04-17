/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F9FAFF",
        foreground: "hsl(var(--foreground))",
        main: '#009CBB',
        secondary: '#F18225',
        darkbutton: '#F2F3F3',
        mainText: 'rgb(43, 69, 84)',
        btnHover: 'rgb(247, 169, 104)',
        darkThemebgmain1: '#096784',
        darkButtonText: '#3E97B0',
        darkThemeBg: '#273a45',
        darkThemeText: '#E7ECF1',
        darkBtnHover: '#C9D6DD',
        divider: '#E2E8F0',
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      width: {
        '421': '421px',
      },
      screens: {

        'tablet': '880px',
  
        'laptop': '1280px',

      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      skew: { '45': '45deg', }, 
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #009CBB 70%, #F18225 70%)',
        'dark-custom-gradient': 'linear-gradient(135deg, #096784 70%, #3E97B0 70%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}