var angular = require('angular');//引入angular
var ngModule = angular.module('app',[]);//定义一个angular模块
require('./js/directives/hello-world.js')(ngModule);//引入指令(directive)文件
require('./css/bootstrap.css');//引入样式文件
require('./css/animate.css');
require('./css/font-awesome.min.css');
require('./css/simple-line-icons.css');
require('./css/font.css');
require('./css/app.css');


