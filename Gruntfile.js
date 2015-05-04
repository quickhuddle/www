module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({

        distdir: 'dist',

        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['src/**/*.js'],
            jsVendor_d: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/ui-router/release/angular-ui-router.js',
                'bower_components/firebase/firebase.js',
                'bower_components/angularfire/dist/angularfire.js',
                'bower_components/handsontable/dist/handsontable.full.js',
                'bower_components/nghandsontable/dist/nghandsontable.js',
                'bower_components/moment/moment.js',
                'bower_components/fullcalendar/dist/fullcalendar.js',
                'bower_components/uikit/js/uikit.js',
                'bower_components/uikit/js/components/datepicker.js',
                'bower_components/uikit/js/components/timepicker.js',
                'bower_components/uikit/js/components/autocomplete.js',
                'bower_components/uikit/js/components/form-select.js',
                'bower_components/uikit/js/components/notify.js',
                'bower_components/uikit/js/components/sortable.js',
                'bower_components/uikit/js/components/search.js',
                'bower_components/uikit/js/components/autocomplete.js'
            ],
            cssVendor_d: [
                'bower_components/uikit/css/uikit.almost-flat.css',
                'bower_components/uikit/css/aaauikit.css',
                'bower_components/uikit/css/components/datepicker.almost-flat.min.css',
                'bower_components/uikit/css/components/timepicker.almost-flat.min.css',
                'bower_components/uikit/css/components/form-select.almost-flat.min.css',
                'bower_components/uikit/css/components/notify.almost-flat.min.css',
                'bower_components/uikit/css/components/cover.almost-flat.min.css',
                'bower_components/handsontable/dist/handsontable.full.css',
                'bower_components/fullcalendar/dist/fullcalendar.css',
            ],
            jsVendor_m: [
                'bower_components/ionic/js/ionic.bundle.js',
                'bower_components/firebase/firebase.js',
                'bower_components/angularfire/dist/angularfire.js'
            ],
            cssVendor_m: [
                'bower_components/ionic/css/ionic.css'
            ],

            html: ['src/index.html'],
            scss: ['src/scss/light-theme.scss', 'src/scss/dark-theme.scss'],
            scssWatch: ['src/scss/**/*.scss'],
            test: ['test/**/*.js']
        },
        copy: {
            images: {
                expand: true,
                cwd: 'src/assets/img/',
                src: ['**'],
                dest: 'dist/img'
            },
            fonts: {
                expand: true,
                cwd: 'src/assets/fonts/',
                src: ['**'],
                dest: 'dist/fonts'
            },
            uiKitfonts: {
                expand: true,
                cwd: 'bower_components/uikit/fonts/',
                src: ['**'],
                dest: 'dist/fonts'
            }

        },
        concat: {

            desktop_index: {
                options: {
                    process: true
                },
                src: 'src/index_d.html',
                dest: 'dist/index_d.html'
            },
            desktop_js: {
                src: ['<%= src.jsVendor_d %>', 'src/app/app.js', 'src/app/router_d.js', 'src/app/services/**/*.js', 'src/app/directives/**/*.js', 'src/app/pages/**/*.js', 'src/app/cards/**/*.js'],
                dest: 'dist/js/desktop.js'
            },
            desktop_css: {
                src: ['<%= src.cssVendor_d %>','src/app/**/*.css', 'src/css/**/*.css'],
                dest: 'dist/css/desktop.css'
            },
            mobile_js: {
                src: ['<%= src.jsVendor_m %>', 'src/app/app.js', 'src/app/router_m.js', 'src/app/services/**/*.js', 'src/app/pages/**/*.js', 'src/app/cards/**/*.js'],
                dest: 'dist/js/mobile.js'
            },
            mobile_css: {
                src: '<%= src.cssVendor_m %>',
                dest: 'dist/css/mobile.css'
            },
            mobile_index: {
                options: {
                    process: true
                },
                src: 'src/index_m.html',
                dest: 'dist/index_m.html'
            },
            firebase: {
                src: 'src/firebase.json',
                dest: 'dist/firebase.json'
            }
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            },
            js: {
                src: 'dist/js/desktop.js',
                dest: 'dist/js/desktop.min.js'
            }
        },
        watch: {
            index: {
                files: ['src/*.html'],
                tasks: ['copy', 'concat', 'ngtemplates'],
                options: {
                    livereload: true
                },
            },
            css: {
                files: ['src/css/*.css','src/app/**/*.css'],
                tasks: ['concat'],
                options: {
                    livereload: true
                },
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['concat', 'ngtemplates'],
                options: {
                    livereload: true
                },
            },
            templates: {
                files: ['src/app/pages/**/*.html', 'src/app/cards/**/*.html'],
                tasks: ['concat', 'ngtemplates'],
                options: {
                    livereload: true
                },
            },
        },
        ngtemplates: {
            desktop_templates: {
                options: {
                    module: "qh"
                },
                src: "src/app/**/*_d.html",
                dest: "dist/js/templates_d.js"
            },
            mobile_templates: {
                options: {
                    module: "qh"
                },
                src: "src/app/**/*_m.html",
                dest: "dist/js/templates_m.js"
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['copy', 'ngtemplates', 'concat', 'watch']);
};
