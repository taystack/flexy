module.exports = function(grunt) {

  _ = grunt.util._
  path = require('path')

  baseDirectory = '.'

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      compile: {
        dest: "" + baseDirectory + "/build/flexy/flexy.css",
        src: "" + baseDirectory + "/lib/flexy/flexy.scss",
        options: {
          loadPath: path.join(path.resolve('.'), baseDirectory, 'temp')
        }
      }
    },
    watch: {
      compass: {
        files: 'lib/**/*.scss',
        tasks: 'sass:compile',
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('scss', ['sass']);

};