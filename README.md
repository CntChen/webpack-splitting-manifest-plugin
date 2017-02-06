# Webpack Splitting Manifest Plugin
Webpack plugin for generating aggressive splitting manifest.

Usfull when using [webpack.optimize.AggressiveSplittingPlugin](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting).

## install
```
$ npm webpack-splitting-manifest-plugin
// or
$ npm install git://github.com/CntChen/webpack-splitting-manifest-plugin.git
```

## Usage
In your `webpack.config.js`
```
var SplittingManifestPlugin = require('webpack-splitting-manifest-plugin');

module.exports = {
  // ...
  plugins: [
    new SplittingManifestPlugin(),
  ]
};
```

This will generate a `splitting-manifest.json` file in your root output directory with a mapping of all source file names to there aggressive splitting output file, for example:
```
{
  "vendors": [
    "099d4b0e7353a1eada84.bundle.js",
    "79c7eda1f8479abf5d18.bundle.js",
    "f5ccbec6de528b1fe014.bundle.js",
    "22b0cdafc400b155a8a4.bundle.js"
  ],
}
```

## Configuration
A manifest is configurable using constructor options:
```
new SplittingManifestPlugin({
  fileName: 'my-splitting-manifest.json',
})
```

## Options
* `fileName`: The manifest filename in your output directory (`splitting-manifest.json` by default).

## Test
``` 
$ cd example
$ yarn install
$ npm test
```
Then `splitting-manifest.json` can be found in `example/dist`.