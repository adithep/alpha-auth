Package.describe({
  summary: "Provides basic authentication",
  version: "0.0.1"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use([
    'bads:core-lib',
    'bads:utilities',
    'bads:alpha-stylus',
    'coffeescript',
    'standard-app-packages',
    'accounts-base',
    'accounts-password'
  ]);
  api.add_files(['authentication.html', 'authentication.coffee', 'authentication.styl'], 'client');
});

Package.on_test(function (api) {
  api.use("../packages/bads:alpha-auth");

  api.add_files('authentication_tests.js', ['client', 'server']);
});
