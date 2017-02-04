// get the dependencies
var gulp  = require('gulp');  
var path = require('path');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var ts=require('gulp-typescript');
var sourcemaps=require('gulp-sourcemaps');

var paths = {
  'src':['package.json'],
  'style': {
    all: './client/public/sass/**/*.scss',
    output: './client/public/css'
  },
  'typescript':{
	  client:{
			src: ['./client/**/*.ts'],
			rootTypescriptDir:'./client',
			outputJavascriptDir:'./client/transpiled',
			relativeSourcemaps:'./sourcemaps'
		},
	  server:{
			src: ['./server/**/*.ts'],
			rootTypescriptDir:'./server',
			// outputJavascriptDir:'./server/transpiled',//different one used for debugging in vscode
			outputJavascriptDir:'./server',
			relativeSourcemaps:'./sourcemaps'
	  }
  }
};

//watches sass files and compiles on change (DEPRECATED, done using webpack)
gulp.task('watch:sass', function () {
  gulp.watch(paths.style.all, ['sass']);
});

//compiles all sass files defined under client/public/sass (DEPRECATED, done using webpack)
gulp.task('sass', function(){
  gulp.src(paths.style.all)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.style.output));
});

//watches client typescript files and compiles on change (DEPRECATED, instead, its done using webpack)
gulp.task('watch:client-typescript',function(){
	gulp.watch(paths.typescript.client.src,['client-typescript']);  	
});

//compiles typescript files and stores them in a 'transpiled' folder (DEPRECATED, instead, its done using webpack)
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

//watches server typescript files and compiles on change
gulp.task('watch:server-typescript',function(){		
  	gulp.watch(paths.typescript.server.src,['server-typescript']);
});

//compiles typescript files and stores them in a 'transpiled' folder
gulp.task('server-typescript',function(){

	var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
	// .pipe(sourcemaps.write(paths.typescript.server.relativeSourcemaps))
    return gulp.src(paths.typescript.server.src)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write(paths.typescript.server.relativeSourcemaps))
        .pipe(gulp.dest(paths.typescript.server.outputJavascriptDir));
});

//compiles in the same directory(to enable debugging inside vscode)
// vscode outFiles bug makes it impossible to debug transpiled JS outside current TS directory. 
gulp.task('server-vscode:typescript',function(){

	var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
	// .pipe(sourcemaps.write(paths.typescript.server.relativeSourcemaps))
    return gulp.src(paths.typescript.server.src)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({sourceRoot:"."}))
        .pipe(gulp.dest("./server"));
});

//clean up javascript files that may have resulted from typescript files in the same directory
gulp.task('server:clean',shell.task('rm server/*.js'));

//builds the client codebase for production
gulp.task('prod:client',shell.task('webpack --config config/webpack.prod.js'));

//builds and watches client for development environment using webpack
gulp.task('start:client',shell.task('webpack --debug --devtool source-map --watch --display-error-details --config config/webpack.dev.js'));

//server: transpiles typescript, watches ts files and launches the server
gulp.task('execute-server-index',shell.task('node server/index.js'));
gulp.task('start:server',['server-typescript','watch:server-typescript','execute-server-index']);

gulp.task('info',function(){	
	console.log("If this is the very first run, expect a delay in the page load (because .ts files haven't transpiled yet)");
});

gulp.task('compile-sources',['server-typescript']);
gulp.task('default',['start:client','start:server']);
