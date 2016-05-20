angular.module('myApp', [])
  .component('new', {
    bindings: {
        title: '@',
        description: '@'
    },
    template:
        `<div class="ui card green">
            <div class="content">
                <div class="header">{{$ctrl.title}}</div>
                <div class="meta">{{$ctrl.description || "default description"}}</div>
                <div class="description">
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                    </p>
                </div>
            </div>
        </div>`
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
        template:
            `<div class="ui card red">
                <div class="content">
                    <div class="header">{{$ctrl.title}}</div>
                    <div class="meta">{{$ctrl.description || "default description"}}</div>
                    <div class="description">
                        <p>
                            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                        </p>
                    </div>
                </div>
            </div>`
    }
    
  });