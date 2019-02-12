Package.describe({
  name: 'perfectsofttunisia:autoform-file-rating-semantic-ui',
  version: '1.0.0',
  summary: 'Rating semantic ui',
  git: 'https://github.com/benbahrikhawla/rating-semantic-ui',
  documentation: 'README.md'
});

Package.describe({

});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use(['ecmascript', 'templating', 'reactive-var'], 'client');

  api.use('aldeed:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});
  api.use('perfectsofttunisia:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});

  api.addFiles([
    'autoform-rating.html',
    'autoform-rating.js',
    'input-type-config.js',
  ], 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('perfectsofttunisia:autoform-file-rating-semantic-ui');
  api.mainModule('autoform-file-rating-semantic-ui-tests.js');
});
