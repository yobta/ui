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

## Other design systems

1. [`Ant Design`]
2. [`Material UI`]
3. [`Chakra UI`]
4. [`React Bootstrap`]
5. [`Semantic UI React`]
6. [`Fluent UI`]
7. [`Evergreen UI`]
8. [`Reactstrap`]
9. [`Grommet`]
10. [`Reakit`]
11. [`Mantine UI`]
12. [`Theme UI`]
13. [`Rebass`]
14. [`Blueprint UI`]
15. [`Svelte Material UI`]
16. [`Next UI`]

[`documentation`]: https://yobta.github.io/ui/
[`tailwind`]: https://tailwindcss.com/docs/installation
[`esmexternals`]: https://nextjs.org/blog/next-11-1#es-modules-support
[`ant design`]: https://ant.design/
[`material ui`]: https://mui.com/material-ui/
[`chakra ui`]: https://chakra-ui.com/
[`react bootstrap`]: https://react-bootstrap.netlify.app/
[`semantic ui react`]: https://react.semantic-ui.com/
[`fluent ui`]: https://developer.microsoft.com/en-us/fluentui#/
[`evergreen ui`]: https://evergreen.segment.com/
[`reactstrap`]: https://reactstrap.github.io/
[`grommet`]: https://v2.grommet.io/
[`reakit`]: https://reakit.io/
[`mantine ui`]: https://ui.mantine.dev/
[`theme ui`]: https://theme-ui.com/
[`rebass`]: https://rebassjs.org/
[`blueprint ui`]: https://blueprintjs.com/
[`svelte material ui`]: https://sveltematerialui.com/
[`next ui`]: https://nextui.org/
