angular.module('myApp', [])
  .component('new', {
    bindings: {
        title: '@',
        description: '@'
    },
    template: [
        '<div class="ui card green">',
            '<div class="content">',
                '<div class="header">{{$ctrl.title}}</div>',
                '<div class="meta">{{$ctrl.description || "default description"}}</div>',
                '<div class="description">',
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation.</p>',
                '</div>',
            '</div>',
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
            '<div class="ui card red">',
            '<div class="content">',
                '<div class="header">{{$ctrl.title}}</div>',
                '<div class="meta">{{$ctrl.description || "default description"}}</div>',
                '<div class="description">',
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation.</p>',
                '</div>',
            '</div>',
        '</div>'
        ].join('')
    }
    
  });