/** Type declaration for ambient System. */
declare const System: any;

// Apply the CLI SystemJS configuration.
System.config({
  paths: {
    'node:*': 'node_modules/*',
  },
  map: {
    'rxjs': 'node:rxjs',
    'main': 'main.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/http': 'node:@angular/http/bundles/http.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser': 'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@metaclinic/material': 'dist/bundles/material.umd.js',
    '@metaclinic/cdk': 'dist/bundles/cdk.umd.js',
    '@metaclinic/cdk/a11y': 'dist/bundles/cdk-a11y.umd.js',
    '@metaclinic/cdk/bidi': 'dist/bundles/cdk-bidi.umd.js',
    '@metaclinic/cdk/coercion': 'dist/bundles/cdk-coercion.umd.js',
    '@metaclinic/cdk/collections': 'dist/bundles/cdk-collections.umd.js',
    '@metaclinic/cdk/keycodes': 'dist/bundles/cdk-keycodes.umd.js',
    '@metaclinic/cdk/observers': 'dist/bundles/cdk-observers.umd.js',
    '@metaclinic/cdk/overlay': 'dist/bundles/cdk-overlay.umd.js',
    '@metaclinic/cdk/platform': 'dist/bundles/cdk-platform.umd.js',
    '@metaclinic/cdk/portal': 'dist/bundles/cdk-portal.umd.js',
    '@metaclinic/cdk/rxjs': 'dist/bundles/cdk-rxjs.umd.js',
    '@metaclinic/cdk/scrolling': 'dist/bundles/cdk-scrolling.umd.js',
    '@metaclinic/cdk/stepper': 'dist/bundles/cdk-stepper.umd.js',
    '@metaclinic/cdk/table': 'dist/bundles/cdk-table.umd.js',
    '@metaclinic/cdk/testing': 'dist/bundles/cdk-testing.umd.js',
    '@metaclinic/material-examples': 'dist/bundles/material-examples.umd.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': { main: 'index' },
    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});
