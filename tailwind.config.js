import { plugins } from "#tailwind-config";

module.exports = {
    theme: {
      extend: {
        colors: {
          "primary-color": "var(--primary-color)",
          "bg-color": "var(--bg-color)"
        },
        spacing: {
          '0.5': '2px',
          '1.5': '6px',
        },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ]
  };
  