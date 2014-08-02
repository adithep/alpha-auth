Package.describe({
  summary: "Provides basic authentication"
});

Package.on_use(function (api, where) {
  api.use(['coffeescript', 'core-lib', 'utilities', 'alpha-stylus', 'standard-app-packages', 'accounts-base', 'accounts-password']);
  api.add_files(['authentication.html', 'authentication.coffee', 'authentication.styl'], 'client');
});

Package.on_test(function (api) {
  api.use('alpha-auth');

  api.add_files('authentication_tests.js', ['client', 'server']);
});
