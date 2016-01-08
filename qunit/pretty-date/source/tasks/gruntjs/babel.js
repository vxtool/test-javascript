module.exports = function(grunt, options){

	var projectDev = options.projectDev;
  var projectDir = options.projectDir;

	return {
		options: {
        sourceMap: false,
        presets: ['es2015']
    },
    dist: {
        files: {
            '<%= projectDir %>/script.js': '<%= projectDev %>/script.js'
        }
    }
	};
};
