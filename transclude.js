angular.module('myApp', [])
  .component('myDetails', {
    transclude: {
        'title': '?detailsTitle',
        'body': '?detailsBody',
        'footer': '?detailsFooter'
    },
    template: `
        <div>
            <h1 ng-transclude="title">Default Title Text</h1>
            <p ng-transclude="body">Default Body Text</p>
            <small ng-transclude="footer">Default Footer Text</small>
        </div>
    `
  });
  