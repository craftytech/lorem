module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lorem: {
            src: 'src',
            build: 'build',
            dist: 'dist'
        },
        clean: {
            all: {
                files: [{
                    dot: true,
                    src: [
                        '<%= lorem.build %>/*',
                        '<%= lorem.dist %>/*'
                    ]
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: 'jshintrc.json',
                reporter: require('jshint-stylish')
            },
            files: [
                'Gruntfile.js',
                '<%= lorem.src %>/js/main.js',
                '<%= lorem.src %>/js/lorem/*.js'
            ],
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= lorem.dist %>/js/{,*/}*.js',
                        '<%= lorem.dist %>/css/{,*/}*.css',
                        '<%= lorem.dist %>/img/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                staging: '<%= lorem.build %>',
                dest: '<%= lorem.dist %>'
            },
            html: '<%= lorem.src %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: ['<%= lorem.dist %>']
            },
            html: ['<%= lorem.dist %>/index.html'],
            css: ['<%= lorem.dist %>/css/*.css']
        },
        // Concat, uglify and cssmin are autoconfigured by useminPrepare
        concat: {},
        cssmin: {},
        uglify: {},
        htmlmin: {
            dist: {
                options: {},
                files: [{
                    expand: true,
                    cwd: '<%= lorem.src %>',
                    src: '*.html',
                    dest: '<%= lorem.dist %>'
                }]
            }
        },
         copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= lorem.src %>',
                    dest: '<%= lorem.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'img/*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= lorem.src %>/css',
                dest: '<%= lorem.build %>/css',
                src: '{,*/}*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-rev');


    grunt.registerTask('test', []);

    grunt.registerTask('build', [
        'clean:all',
        'useminPrepare',
        //'copy:styles',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'build']);
};
