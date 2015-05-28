Package.describe({
  summary: 'Wrapped sendwithus library',
  version: '2.9.1',
  name: 'sendwithus'
});

Npm.depends({sendwithus: "https://github.com/whalepath/sendwithus_nodejs/tarball/41b0d177f6eabf02de2daec9bb2b36daebbfbef4"});
Package.onUse(function(api){
    api.addFiles('main.js', 'server');
    api.export('SendWithUs');
});