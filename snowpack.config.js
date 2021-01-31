/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* src should be: dist, public should be: / */
    src: '/dist',
    public: '/'
  },
  // installOptions: {
  //   rollup: { plugins: [require('rollup-plugin-scss')()] }
  // },
  plugins: [
    /* ... */
    [
      '@snowpack/plugin-sass',
      {

      },
    ]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
