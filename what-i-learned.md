# What I Learned

* You can easily find out what commands you can run (e.g. ```mocha```) by listing the contents of the hidden ```.bin``` folder in the ```node_modules``` folder.
* You can see which scripts are available to run by just typing ```npm run```

## Shortcuts
I knew `npm run <scriptname>`, but never knew that:
* ```run``` is shorthand for ```run-script```
* There are various shortcuts for ```npm run-script test```:
    * ```npm run test```
    * ```npm test```
    * ```npm tst```
    * ```npm t```
* ```npm start``` is short for ```npm run start```

## Conventions
It's normal to have ```start```, ```stop``` and ```test``` scripts. Running ```restart``` will automatically run ```stop```, then ```start```, unless you define your own ```restart``` script, which will only do exactly what you specify.

## Running multiple commands
Use ```&&``` to run commands in series:
```
echo 1 && echo 2
```

A failing command will result in no further commands executing:
```
exit 1 && echo "I will not run"
```

Use ```;``` to run subsequent commands irrespective of previous failures:
```
npm run someFailingTask ; echo "I run anyway"
```