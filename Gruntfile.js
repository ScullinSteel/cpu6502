module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            files: {
                src: [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'tests/**/*.js'
                ]
            }
        },
        mochaTest: {
            files: {
                src: [
                    'tests/**/*.js'
                ],
                options: {
                    reporter: 'spec'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('default', ['lint']);
};
    
