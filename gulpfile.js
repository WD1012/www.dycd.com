const path=require('path');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const del = require('del');
const runSequence = require('run-sequence');



const $ = gulpLoadPlugins();
const basedir='public';
const cssSrc=path.join(basedir,'/styles/**/*');
console.log(cssSrc)
const cssDist=path.join(basedir,'dist/styles');
const jsSrc=path.join(basedir,'/scripts/**/*.js');
const jsDist=path.join(basedir,'dist/scripts');
const imgSrc=path.join(basedir,'/images/**/*');
const imgDist=path.join(basedir,'dist/images');
const fontSrc=path.join(basedir,'/fonts/**/*');
const fontDist=path.join(basedir,'dist/fonts');

let dev = false;

gulp.task('clean', del.bind(null, [path.join(basedir,'dist')]));
gulp.task('cleanjs', del.bind(null, [jsDist]));
gulp.task('styles', () => {
    return gulp.src(cssSrc)
        .pipe($.plumber())
        .pipe($.if(dev, $.sourcemaps.init()))
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe($.if(dev, $.sourcemaps.write()))
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('stylesMin', () => {
    return gulp.src(cssSrc)
        .pipe($.plumber())
        .pipe($.if(dev, $.sourcemaps.init()))
        .pipe($.sass.sync({
            outputStyle: 'compressed',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe($.if(dev, $.sourcemaps.write()))
        .pipe($.cssnano({safe: true, autoprefixer: false}))
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.stream());
});
gulp.task('scripts', () => {
    return gulp.src(jsSrc)
        .pipe($.plumber())
        .pipe($.if(dev, $.sourcemaps.init()))
        .pipe($.babel())
        .pipe($.if(dev, $.sourcemaps.write('.')))
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('scriptsMin', () => {
    return gulp.src(jsSrc)
        .pipe($.plumber())
        .pipe($.if(dev, $.sourcemaps.init()))
        .pipe($.babel())
        .pipe($.if(dev, $.sourcemaps.write('.')))
        .pipe($.uglify({compress: {drop_console: true}}))
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.stream());
});
gulp.task('images', () => {
    return gulp.src(imgSrc)
        .pipe($.cache($.imagemin()))
        .pipe(gulp.dest(imgDist))
});
gulp.task('fonts', () => {
    return gulp.src(fontSrc)
        .pipe(gulp.dest(fontDist))
        // .pipe(browserSync.stream());
});

function lint(files) {
    return gulp.src(files)
        .pipe($.eslint({ fix: true }))
        .pipe(browserSync.stream())
        .pipe($.eslint.format())
        .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
    return lint('app/scripts/**/*.js')
        .pipe(gulp.dest('app/scripts'));
});
gulp.task('serve', () => {
    runSequence('clean', ['styles','scripts','images','fonts'], () => {
        nodemon({
            script: './bin/wwwdev',
// 忽略部分对程序运行无影响的文件的改动，nodemon只监视js文件，可用ext项来扩展别的文件类型
            ignore: ["node_modules/", "public/**/*"]
            // env: {'NODE_ENV': 'production'}
        }).on('start', function () {
            browserSync.init({
                    // 对应.bin/www/port
                    proxy: 'http://localhost:3013',
                    files: ["public/**/*", "./views/**/*", "./routes/**/*", "./app.js"],
                    port: 1203
                },
                function () {
                    console.log("browser refreshed.");
                });
        });
        gulp.watch(cssSrc, function (e) {
            console.log(e);
            if('added' == e.type || 'changed' == e.type || 'renamed' == e.type || 'deleted' == e.type) {
                runSequence('styles');
            }
        });
        gulp.watch(jsSrc, function (e) {
            console.log(e);
            if('added' == e.type || 'changed' == e.type || 'renamed' == e.type || 'deleted' == e.type) {
                runSequence('scripts');
            }
        });
        gulp.watch(imgSrc, function (e) {
            console.log(e);
            if('added' == e.type || 'changed' == e.type || 'renamed' == e.type || 'deleted' == e.type) {
                runSequence('images');
            }
        });
        // gulp.watch([imgSrc]).on('change',browserSync.reload());
    });

});
gulp.task('sv', () => {
    runSequence('clean', ['styles','scripts','images','fonts'], () => {
        nodemon({
            script: './bin/wwwdev',
// 忽略部分对程序运行无影响的文件的改动，nodemon只监视js文件，可用ext项来扩展别的文件类型
            ignore: ["gulpfile.js", "node_modules/", "public/**/*"]
            // env: {'NODE_ENV': 'development'}
        }).on('start', function () {
            browserSync.init({
                    // 对应.bin/www/port
                    proxy: 'http://localhost:3013',
                    files: ["public/**/*", "./views/**", "./routes/**", "./app.js"],
                    port: 1203
                },
                function () {
                    console.log("browser refreshed.");
                });
        });
    });
});
gulp.task('build',()=>{
    runSequence('clean',['stylesMin','scriptsMin','images','fonts']);
});


