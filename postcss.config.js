module.exports = (ctx) => ({
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: ctx.env === "production" ? {} : false,
    cssnano: ctx.env === "production" ? {} : false,
  },
});
