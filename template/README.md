<img align="center" src="https://raw.githubusercontent.com/timmybytes/timmybytes-template/main/timmybytes.png">

## About

This is a custom template for [create-react-app](https://create-react-app.dev/docs/custom-templates/) that removes much of the typically unneeded boilerplate, and adds a [SPLATE](https://github.com/timmybytes/splate) directory tree for styling with Sass.

This template removes the following:

- `README` boilerplate text
- `public/favicon.ico`
- `public/logo192.png`
- `public/logo512.png`
- `public/robots.txt`
- `public/manifest.json`
- `public/index.html` boilerplate and extraneous links
- `src/App.css`
- `src/App.js`
- `src/App.test.js`
- `src/index.css`
- `src/logo.svg`
- `src/logo.serviceWorker.js`
- `src/logo.setupTests.js`
- `src/index.js` boilerplate and extraneous imports

This template adds the following:

- `src/index.js` parent element set to Fragment
- `src/components` directory, with default `App.jsx` and ES6 syntax
- `src/scss` directory tree based on **[SPLATE](https://github.com/timmybytes/splate)**

```bash
src/scss
├── components
│   ├── _buttons.scss
│   ├── _links.scss
│   ├── _media.scss
│   └── _menu.scss
├── config
│   ├── _resets.scss
│   └── _shame.scss
├── imported
│   └── _vendor-resets.scss
├── layout
│   ├── _footer.scss
│   ├── _grid.scss
│   ├── _header.scss
│   ├── _layout.scss
│   └── _navbar.scss
├── main.scss
├── meta
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _variables.scss
├── pages
│   ├── _about.scss
│   ├── _contact.scss
│   └── _home.scss
└── theme
    ├── _colors.scss
    ├── _sizing.scss
    └── _typography.scss
```

- `src/main.css` generated from SCSS

_Note:_ I use this template with [VS Code](https://code.visualstudio.com/) and the [Live SASS Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) extension, and use a few simple local settings in `.vscode/` as a result. If you're planning to use a different editor or to compile your SASS another way, you can delete the `.vscode/` directory and/or uncomment it in `.gitignore`.

## License

This project is licensed under an MIT License.
