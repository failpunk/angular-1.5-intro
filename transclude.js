angular.module('transcludeApp', [])
  .component('someDetails', {
        transclude: {
            'title': '?detailsTitle',
            'body': '?detailsBody',
            'footer': '?detailsFooter',
        },
        template: `
            <div>
                <h1 ng-transclude="title">Default Title</h1>
                <p ng-transclude="body">Default Body Text</p>
                <div ng-transclude="footer">Default Footer Text</div>
            </div>
        `
  });