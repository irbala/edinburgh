// Tailwind settings for the Edinburgh guide. Rebuild tailwind.css after adding new classes (see README).
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
