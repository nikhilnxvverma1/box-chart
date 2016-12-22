// get the dependencies
var gulp  = require('gulp');  
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var ts=require('gulp-typescript');
var sourcemaps=require('gulp-sourcemaps');

var paths = {
  'src':['package.json'],
  'style': {
    all: './public/sass/**/*.scss',
    output: './public/css'
  },
  'typescript':{
	  client:{
		src: ['./app/**/*.ts'],
		rootTypescriptDir:'./app',
		outputJavascriptDir:'./app/transpiled',
		relativeSourcemaps:'./sourcemaps'
	  },
	  server:{
		src: ['./app/**/*.ts'],
		rootTypescriptDir:'./app',
		outputJavascriptDir:'./app/transpiled',
		relativeSourcemaps:'./sourcemaps'
	  }
  }
};

gulp.task('watch:sass', function () {
  gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
  gulp.src(paths.style.all)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.style.output));
});

gulp.task('watch:typescript',function(){
	gulp.watch(paths.typescript.client.src,['client-typescript']);
  	gulp.watch(paths.typescript.server.src,['server-typescript']);
});

gulp.task('client-typescript',function(){
	
	var tsOptionsClient={
		noImplicitAny: false,
		target:'es6',
		module:'system',
		moduleResolution:'node',
		experimentalDecorators:true,
		emitDecoratorMetadata:true,	
		rootDir:paths.typescript.client.rootTypescriptDir,
		outDir:paths.typescript.client.outputJavascriptDir
	};

    return gulp.src(paths.typescript.client.src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptionsClient))
        .pipe(sourcemaps.write(paths.typescript.client.relativeSourcemaps))
        .pipe(gulp.dest(paths.typescript.client.outputJavascriptDir));
});

gulp.task('server-typescript',function(){

	var tsOptionsServer={
		noImplicitAny: false,
		target:'es6',
		module:'system',
		moduleResolution:'node',
		experimentalDecorators:true,
		emitDecoratorMetadata:true,	
		rootDir:paths.typescript.server.rootTypescriptDir,
		outDir:paths.typescript.server.outputJavascriptDir
	};

    return gulp.src(paths.typescript.server.src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptionsServer))
        .pipe(sourcemaps.write(paths.typescript.server.relativeSourcemaps))
        .pipe(gulp.dest(paths.typescript.server.outputJavascriptDir));
});

gulp.task('run',shell.task('npm run lite'));//fires up the lite server that loads up the index page in the browser

gulp.task('info',function(){	
	console.log("If this is the very first run, expect a delay in the page load (because .ts files haven't transpiled yet)");
});

gulp.task('default',['client-typescript','server-typescript','sass','watch:sass','watch:typescript','run','info']);