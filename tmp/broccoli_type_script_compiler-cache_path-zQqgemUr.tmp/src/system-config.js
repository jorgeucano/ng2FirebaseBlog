/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+routerdash',
    'app/+home',
    'app/+list',
    'app/+contact',
    'app/+about',
    'app/+post',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
//add firebase
cliSystemConfigPackages['angularfire2'] = {
    main: 'angularfire2'
};
// Angular Material 2 Packages to load.
var _materialPackages = [
    'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
    'progress-circle', 'radio', 'sidenav'
];
_materialPackages.forEach(function (item) {
    // All Material 2 components are prefixed with  @angular2-material and use
    // the components name as entry point.
    cliSystemConfigPackages['@angular2-material/' + item] = { main: item };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'firebase': 'vendor/firebase/lib/firebase-web.js',
        'angularfire2': 'vendor/angularfire2',
        '@angular2-material': 'vendor/@angular2-material'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map