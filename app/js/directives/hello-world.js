 module.exports = function(ngModule) {
   ngModule.directive('helloWorld', helloWorldFn);//定义指令，对应页面中的<hello-world></hello-world>
   function helloWorldFn() {
     return {
       restrict: 'E',//元素(element)
       scope: {},
       template: require('../../tpl/hello-world.html'),//模板
       //templateUrl: 'directives/hello-world/hello-world.html',
       controllerAs: 'vm',// <=> $scope.vm = {greeting: '你好，我是卡哥'}
       controller: function () {
         var vm = this;
         vm.tips = 'hello angular+webpack';
       }
     }
   }
 }