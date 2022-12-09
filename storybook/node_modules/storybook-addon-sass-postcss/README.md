# Storybook Addon Sass PostCSS

[![Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/Progyan1997)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/addons/storybook-addon-sass-postcss)
[![Npm Version](https://img.shields.io/npm/v/storybook-addon-sass-postcss?style=for-the-badge)](https://www.npmjs.com/package/storybook-addon-sass-postcss)
[![Weekly Downloads](https://img.shields.io/npm/dw/storybook-addon-sass-postcss?style=for-the-badge)](https://www.npmjs.com/package/storybook-addon-sass-postcss)
[![Minified Zipped Size](https://img.shields.io/bundlephobia/minzip/storybook-addon-sass-postcss?style=for-the-badge)](https://www.npmjs.com/package/storybook-addon-sass-postcss)
[![License](https://img.shields.io/npm/l/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/LICENSE)
[![Dependencies](https://img.shields.io/librariesio/release/npm/storybook-addon-sass-postcss?style=for-the-badge)](https://www.npmjs.com/package/storybook-addon-sass-postcss)
[![Dependents](https://img.shields.io/librariesio/dependents/npm/storybook-addon-sass-postcss?style=for-the-badge)](https://www.npmjs.com/package/storybook-addon-sass-postcss)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/security)
[![Open Issues](https://img.shields.io/github/issues-raw/Progyan1997/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed-raw/Progyan1997/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/issues?q=is%3Aissue+is%3Aclosed)
[![Stars](https://img.shields.io/github/stars/Progyan1997/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/stargazers)
[![Forks](https://img.shields.io/github/forks/Progyan1997/storybook-addon-sass-postcss?style=for-the-badge)](https://github.com/Progyan1997/storybook-addon-sass-postcss/network/members)

## Description

The Storybook PostCSS addon can be used to run the PostCSS preprocessor with Sass support against your stories in [Storybook](https://storybook.js.org).

## Getting Started

Install this addon by adding the `storybook-addon-sass-postcss` dependency:

```sh
yarn add -D storybook-addon-sass-postcss
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-addon-sass-postcss'],
};
```

and create a PostCSS config in the base of your project, like `postcss.config.js`, that contains:

```js
module.exports = {
  // Add your installed PostCSS plugins here:
  plugins: [
    // require('autoprefixer'),
    // require('postcss-color-rebeccapurple'),
  ],
};
```

## PostCSS 8+

If your project requires you to be using PostCSS v8, you can replace the included PostCSS by passing `postcssLoaderOptions` to this addon.

First, you'll need to install PostCSS v8 as a dependency of your project:

```sh
yarn add -D postcss@^8
```

Then, you'll need to update your addons config. Within `.storybook/main.js`:

```diff
module.exports = {
  addons: [
-   'storybook-addon-sass-postcss',
+   {
+     name: 'storybook-addon-sass-postcss',
+     options: {
+       postcssLoaderOptions: {
+         implementation: require('postcss'),
+       },
+     },
+   },
  ]
}
```

When running Storybook, you'll see the version of PostCSS being used in the logs. For example:

```sh
info => Using PostCSS preset with postcss@8.2.4
```

## Dart Sass

Similar to above, you can provide reference to your local Sass transpiler to invoke Dart Sass.

First, you'll need to install PostCSS v8 as a dependency of your project:

```sh
yarn add -D sass
```

Then, you'll need to update your addons config. Within `.storybook/main.js`:

```diff
module.exports = {
  addons: [
-   'storybook-addon-sass-postcss',
+   {
+     name: 'storybook-addon-sass-postcss',
+     options: {
+       sassLoaderOptions: {
+         implementation: require('sass'),
+       },
+     },
+   },
  ]
}
```

## Sass Only

Be default, this plugin will try to transform both CSS and SASS modules. You can change this behaviour by passing _optional_ argument `rule`.

```diff
module.exports = {
  addons: [
-   'storybook-addon-sass-postcss',
+   {
+     name: 'storybook-addon-sass-postcss',
+     options: {
+       rule: {
+         test: /\.(scss|sass)$/i,
+       },
+     },
+   },
  ]
}
```

### Using with TailwindCSS

By default, Sass loading is done before PostCSS preprocessing. But this does not work well with TailwindCSS. As it relies on classnames and non-standard behaviours that are only exposed via PostCSS plugin. So to overcome this, Sass must be loaded after preprocessing has been done.

```diff
module.exports = {
  addons: [
-   'storybook-addon-sass-postcss',
+   {
+     name: 'storybook-addon-sass-postcss',
+     options: {
+       loadSassAfterPostCSS: true,
+     },
+   },
  ]
}
```

## Loader Options

You can specify loader options for `style-loader`, `css-loader`, `sass-loader` and `postcss-loader` by passing options to this addon as `styleLoaderOptions`, `cssLoaderOptions`, `sassLoaderOptions` or `postcssLoaderOptions` respectively.
