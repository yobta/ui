// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
require('./global.css')

module.exports = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
