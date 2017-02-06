/*
	Author CntChen
*/
'use strict';

class WebpackSplittingManifestPlugin {
	constructor(options) {
		this.options = options || {};
		if(typeof this.options.fileName !== 'string'){
      this.options.fileName = 'splitting-manifest.json';
    }

    this.SplittingManifest = {};
	}
	apply(compiler) {
    compiler.plugin('after-compile', (compilation, compileCallback) => {
      for(let key in compilation.entrypoints){
        this.SplittingManifest[key] = compilation.entrypoints[key].getFiles();  
      }

      let json = JSON.stringify(this.SplittingManifest, null, 2);
      compilation.assets[this.options.fileName] = {
        source: function() {
          return json;
        },
        size: function() {
          return json.length;
        }
      };

      compileCallback();
    });
	}
}

module.exports = WebpackSplittingManifestPlugin;