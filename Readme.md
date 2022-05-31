# Yobta UI

A ESM UI library for React and Tailwind

## Installation

1. Install [`Tailwind`]
2. Install `@yobta/ui`

   ```Shell
   pnpm i @yobta/ui
   ```

3. Add Yobta UI to **content** and **presets** to sections of `tailwind.config.js`

   ```js
   module.exports = {
     content: [
       './src/**/*.{js,ts,jsx,tsx}',
       './node_modules/@yobta/ui/**/*.{js,jsx}'
     ],
     theme: {
       extend: {}
     },
     plugins: [],
     presets: [require('@yobta/ui/tailwind-preset')]
   }
   ```

4. Yobta UI is an ECMAScript module, and you need to configure your application for ESM.

   For Next.js you can configure it with [`esmExternals`].

5. See components [`documentation`]

## Development Installation

1. `make i`
2. `make dev`

[`documentation`]: https://yobta.github.io/ui/
[`tailwind`]: https://tailwindcss.com/docs/installation
[`esmexternals`]: https://nextjs.org/blog/next-11-1#es-modules-support
