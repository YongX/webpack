// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    {{#if_eq platform "mobile"}}
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-nested": {},
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    },
    {{/if_eq}}
    {{#if_eq platform "desktop"}}
    "postcss-import": {},
    "postcss-url": {},
    "postcss-nested": {},
      // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
    {{/if_eq}}
  }
}
