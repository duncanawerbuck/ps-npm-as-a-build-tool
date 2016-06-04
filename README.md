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
### 4. Scripts for watching
### 5. Build & reply scripts
### 6. Put it all together "Deploy to prod"

