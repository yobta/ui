# Yobta UI

A UI library for React and Railwind
work in progress...

## Installation

1. Install [`Tailwind`]
2. Install `@yobta/ui`

   ```Shell
   pnpm i @yobta/ui
   ```

3. Add Yobta Tailwind preset to `tailwind.config.js`

   ```js
   module.exports = {
     content: ['./src/**/*.{js,ts,jsx,tsx}'],
     theme: {
       extend: {}
     },
     plugins: [],
     presets: [require('@yobta/ui/tailwind-preset')]
   }
   ```

4. See components [`documentation`]

[`documentation`]: https://yobta.github.io/ui/
[`tailwind`]: https://tailwindcss.com/docs/installation
