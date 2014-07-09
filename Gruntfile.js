// 包装函数
module.exports = function(grunt) {
  var mozjpeg = require('imagemin-mozjpeg');
  var optipng = require('imagemin-optipng');
  // 任务配置
grunt.initConfig({
  imagemin: {
    png: {
      options: {
        optimizationLevel: 7,
        use:[optipng()],
        cache : false
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'bg/',
          src: ['**/**/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'new_bg/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
        ,        cache : false
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'bg/',
          src: ['**/**/*.jpg'],
          dest: 'new_bg/',
          ext: '.jpg'
        }
      ]
    }

  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);

};