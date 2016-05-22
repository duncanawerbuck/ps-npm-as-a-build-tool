var app = require('koa')();

app.use(function *(){
    this.body = 'Koa says Hi!';
});

app.listen(3000);
console.log('Application started.');