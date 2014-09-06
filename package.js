Package.describe({
  summary: "Provides basic authentication",
  version: "0.0.1",
  name: "bads:alpha-auth"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.2-rc1');
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
