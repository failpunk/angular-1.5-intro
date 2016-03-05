angular.module('myApp', [])
  .component('new', {
    bindings: {
        title: '@',
        description: '@'
    },
    template: [
        '<div>',
            '<h1>{{$ctrl.title}}</h1>',
            '<p>{{$ctrl.description || "default description"}}</p>',
        '</div>'
    ].join('')  
  });
  
  
angular.module('myApp')
  .directive('old', function () {
    return {
        scope: {},
        bindToController: {
            title: '@',
            description: '@'
        },
        controllerAs: '$ctrl',
        controller: angular.noop,
        template: [
        '<div>',
            '<h1>{{$ctrl.title}}</h1>',
            '<p>{{$ctrl.description || "default description"}}</p>',
        '</div>'
        ].join('')
    }
    
  });