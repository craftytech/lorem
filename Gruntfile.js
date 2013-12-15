module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/js/main.js', 'src/js/lorem/*.js'],
            options: {
                jshintrc: 'jshintrc.json'
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: "src/js",
                    baseUrl: ".",
                    dir: "build/",
                    optimize: 'uglify',
                    mainConfigFile:'./src/js/main.js',
                    modules:[{ name:'main' }],
                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    inlineText: true
                }
            }
        }
    });

    // Checking js code quality
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Use r.js to optimize assets loading
    grunt.loadNpmTasks('grunt-contrib-requirejs');


    // Default task(s).
    grunt.registerTask('default', ['jshint', 'requirejs']);

};
