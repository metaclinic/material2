/** Type declaration for ambient System. */
declare const System: any;

// Configure the base path and map the different node packages.
System.config({
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    // TODO(devversion): replace once the index.ts file for the Material package has been added.
    '@metaclinic/material': 'dist/packages/material/public-api.js',
    '@metaclinic/material-moment-adapter': 'dist/packages/material-moment-adapter/public-api.js',
    '@metaclinic/cdk': 'dist/packages/cdk/index.js',
    '@metaclinic/cdk/a11y': 'dist/packages/cdk/a11y/index.js',
    '@metaclinic/cdk/accordion': 'dist/packages/cdk/accordion/index.js',
    '@metaclinic/cdk/bidi': 'dist/packages/cdk/bidi/index.js',
    '@metaclinic/cdk/coercion': 'dist/packages/cdk/coercion/index.js',
    '@metaclinic/cdk/collections': 'dist/packages/cdk/collections/index.js',
    '@metaclinic/cdk/keycodes': 'dist/packages/cdk/keycodes/index.js',
    '@metaclinic/cdk/layout': 'dist/packages/cdk/layout/index.js',
    '@metaclinic/cdk/observers': 'dist/packages/cdk/observers/index.js',
    '@metaclinic/cdk/overlay': 'dist/packages/cdk/overlay/index.js',
    '@metaclinic/cdk/platform': 'dist/packages/cdk/platform/index.js',
    '@metaclinic/cdk/portal': 'dist/packages/cdk/portal/index.js',
    '@metaclinic/cdk/scrolling': 'dist/packages/cdk/scrolling/index.js',
    '@metaclinic/cdk/stepper': 'dist/packages/cdk/stepper/index.js',
    '@metaclinic/cdk/table': 'dist/packages/cdk/table/index.js',

    '@metaclinic/material/autocomplete': 'dist/packages/material/autocomplete/index.js',
    '@metaclinic/material/button': 'dist/packages/material/button/index.js',
    '@metaclinic/material/button-toggle': 'dist/packages/material/button-toggle/index.js',
    '@metaclinic/material/card': 'dist/packages/material/card/index.js',
    '@metaclinic/material/checkbox': 'dist/packages/material/checkbox/index.js',
    '@metaclinic/material/chips': 'dist/packages/material/chips/index.js',
    '@metaclinic/material/core': 'dist/packages/material/core/index.js',
    '@metaclinic/material/datepicker': 'dist/packages/material/datepicker/index.js',
    '@metaclinic/material/dialog': 'dist/packages/material/dialog/index.js',
    '@metaclinic/material/expansion': 'dist/packages/material/expansion/index.js',
    '@metaclinic/material/form-field': 'dist/packages/material/form-field/index.js',
    '@metaclinic/material/grid-list': 'dist/packages/material/grid-list/index.js',
    '@metaclinic/material/icon': 'dist/packages/material/icon/index.js',
    '@metaclinic/material/input': 'dist/packages/material/input/index.js',
    '@metaclinic/material/list': 'dist/packages/material/list/index.js',
    '@metaclinic/material/menu': 'dist/packages/material/menu/index.js',
    '@metaclinic/material/paginator': 'dist/packages/material/paginator/index.js',
    '@metaclinic/material/progress-bar': 'dist/packages/material/progress-bar/index.js',
    '@metaclinic/material/progress-spinner': 'dist/packages/material/progress-spinner/index.js',
    '@metaclinic/material/radio': 'dist/packages/material/radio/index.js',
    '@metaclinic/material/select': 'dist/packages/material/select/index.js',
    '@metaclinic/material/sidenav': 'dist/packages/material/sidenav/index.js',
    '@metaclinic/material/slide-toggle': 'dist/packages/material/slide-toggle/index.js',
    '@metaclinic/material/slider': 'dist/packages/material/slider/index.js',
    '@metaclinic/material/snack-bar': 'dist/packages/material/snack-bar/index.js',
    '@metaclinic/material/sort': 'dist/packages/material/sort/index.js',
    '@metaclinic/material/stepper': 'dist/packages/material/stepper/index.js',
    '@metaclinic/material/table': 'dist/packages/material/table/index.js',
    '@metaclinic/material/tabs': 'dist/packages/material/tabs/index.js',
    '@metaclinic/material/toolbar': 'dist/packages/material/toolbar/index.js',
    '@metaclinic/material/tooltip': 'dist/packages/material/tooltip/index.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},
    'rxjs/operators': {main: 'index'},

    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});
