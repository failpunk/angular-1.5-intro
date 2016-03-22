angular.module('myApp', [])
    .component('myDetails', {
        transclude: {
            'title': '?detailsTitle',
            'body': '?detailsBody',
            'description': '?detailsDescription'
        },
        template: `
                <div class="content">
                    <div class="header" ng-transclude="title">
                        Jane Doe
                    </div>
                    <div class="meta" ng-transclude="body">
                        Unknown
                    </div>
                    <div class="description" ng-transclude="description">
                        Someone didn't bother to override the default description text.
                    </div>
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Hell Yeah!</div>
                        <div class="ui basic red button">Please No!</div>
                    </div>
                </div>
    `
    });
