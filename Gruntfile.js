/*
 * grunt-layered-themes
 * https://github.com/peternaydenov/grunt-layered-themes
 *
 * Copyright (c) 2015 Peter Naydenov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    layered_themes : {
                        task : {
                                  options : {
                                                configFile : 'test/fixtures/_config.json'
                                              , src        : 'test/fixtures/css-dev'
                                              , target     : 'tmp'
                                          } ,
                             }
    } ,

    // Unit tests.
    nodeunit: {
        tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'layered_themes']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
