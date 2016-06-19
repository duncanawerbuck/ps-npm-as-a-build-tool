# Introduction to npm as a Build Tool

Me following along with the [Introduction to npm as a Build Tool](https://app.pluralsight.com/library/courses/npm-build-tool-introduction/table-of-contents) Pluralsight Course, by Marcus Hammarberg.

## Modules

(we're ignoring the intro module)
### 1. Get started
* Introduction to defining scripts, starting with ones that simply echo text
* Install ```mocha``` (testing framework) and ```should``` (a popular assertion library)
* Install ```koa``` v1.0.0 (lightweight web framework that uses generators to negate the need for nested callbacks)
* Create index.js (koa server) and ```start``` script, so web app runs on a configurable port (preferred port can be passed as parameter to ```start``` script)
* Create ```start:dev``` task that runs web app on port 4000 (3000 is the default if you use the ```start``` script)
* Install ```supertest``` v1.1.0 (dev dependency) and create a real test that verifies our web app returns the friendly message
* Add ```test``` script to invoke mocha to run our web app test

### 2. Pre- & post hooks
We implement a linting task for our project in this module. The course uses jshint, but there are issues on Windows, so I used eslint:
* Install ```eslint``` (dev dependency)
* Run ```eslint --init``` and configure eslint as required:
  * ignore node_modules by adding a ```.eslintignore``` file
  * choose a consistent approach to using single or double quotes - defined in ```.eslintrc.json```
* Create new ```lint``` task that invokes eslint
* Run this as a pretest hook

### 3. Develop and test scripts
* I skipped compiling CoffeeScript, and created a ```compile:ts``` task for TypeScript compilation. I had to also ensure eslint was ignoring the .js files that are the result of TypeScript compilation - see ```.eslintignore```.
* Install ```less``` (dev dependency) and create new ```build:less``` task to compile demo.less to public/css/site.css
* Install ```browserify``` (dev dependency) and create ```build:bundle``` task to bundle using browserify and allow us to require commonJS modules and bundle to a single file 
* Install ```uglify``` (dev dependency) and amend ```build:bundle``` task to pipe the browserified output to a mangled and compressed .js. Note that I had to remove the backticks (string template ES6 syntax) from ```main.js``` so uglify wouldn't fall over. The better solution would be to babel transpile to ES5 before uglifying. This is trivial to do, but I didn't want to deviate too much from the course by throwing babel transpilation into the mix. 
* Create ```build``` task that just runs ```build:less```, then ```build:bundle```.
* Create ```build:clean``` task that cleans public/css and lib folders.
* Invoke ```build:clean``` as ```prebuild``` hook.

### 4. Scripts for watching
* Add ```watch:test``` script, which is very similar to the ```test``` script, but uses the ```-w``` (or alternatively ```--watch```) flag to re-run tests when mocha detects code changes.
* Refactor ```watch:test``` script to call through to the ```test``` script, overriding the paramaters passed to the mocha command.

### 5. Build & deploy scripts
### 6. Put it all together "Deploy to prod"

