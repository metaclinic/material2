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
    'moment': 'node:moment/min/moment-with-locales.min.js',
    'tslib': 'node:tslib/tslib.js',

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

    '@metaclinic/material': 'dist/bundles/material.umd.js',
    '@metaclinic/material-moment-adapter': 'dist/bundles/material-moment-adapter.umd.js',
    '@metaclinic/cdk': 'dist/bundles/cdk.umd.js',
    '@metaclinic/cdk/a11y': 'dist/bundles/cdk-a11y.umd.js',
    '@metaclinic/cdk/accordion': 'dist/bundles/cdk-accordion.umd.js',
    '@metaclinic/cdk/bidi': 'dist/bundles/cdk-bidi.umd.js',
    '@metaclinic/cdk/coercion': 'dist/bundles/cdk-coercion.umd.js',
    '@metaclinic/cdk/collections': 'dist/bundles/cdk-collections.umd.js',
    '@metaclinic/cdk/keycodes': 'dist/bundles/cdk-keycodes.umd.js',
    '@metaclinic/cdk/layout': 'dist/bundles/cdk-layout.umd.js',
    '@metaclinic/cdk/observers': 'dist/bundles/cdk-observers.umd.js',
    '@metaclinic/cdk/overlay': 'dist/bundles/cdk-overlay.umd.js',
    '@metaclinic/cdk/platform': 'dist/bundles/cdk-platform.umd.js',
    '@metaclinic/cdk/portal': 'dist/bundles/cdk-portal.umd.js',
    '@metaclinic/cdk/scrolling': 'dist/bundles/cdk-scrolling.umd.js',
    '@metaclinic/cdk/stepper': 'dist/bundles/cdk-stepper.umd.js',
    '@metaclinic/cdk/table': 'dist/bundles/cdk-table.umd.js',
    '@metaclinic/cdk/testing': 'dist/bundles/cdk-testing.umd.js',
    '@metaclinic/material-examples': 'dist/bundles/material-examples.umd.js',

    '@metaclinic/material/autocomplete': 'dist/bundles/material-autocomplete.umd.js',
    '@metaclinic/material/button': 'dist/bundles/material-button.umd.js',
    '@metaclinic/material/button-toggle': 'dist/bundles/material-button-toggle.umd.js',
    '@metaclinic/material/card': 'dist/bundles/material-card.umd.js',
    '@metaclinic/material/checkbox': 'dist/bundles/material-checkbox.umd.js',
    '@metaclinic/material/chips': 'dist/bundles/material-chips.umd.js',
    '@metaclinic/material/core': 'dist/bundles/material-core.umd.js',
    '@metaclinic/material/datepicker': 'dist/bundles/material-datepicker.umd.js',
    '@metaclinic/material/dialog': 'dist/bundles/material-dialog.umd.js',
    '@metaclinic/material/expansion': 'dist/bundles/material-expansion.umd.js',
    '@metaclinic/material/form-field': 'dist/bundles/material-form-field.umd.js',
    '@metaclinic/material/grid-list': 'dist/bundles/material-grid-list.umd.js',
    '@metaclinic/material/icon': 'dist/bundles/material-icon.umd.js',
    '@metaclinic/material/input': 'dist/bundles/material-input.umd.js',
    '@metaclinic/material/list': 'dist/bundles/material-list.umd.js',
    '@metaclinic/material/menu': 'dist/bundles/material-menu.umd.js',
    '@metaclinic/material/paginator': 'dist/bundles/material-paginator.umd.js',
    '@metaclinic/material/progress-bar': 'dist/bundles/material-progress-bar.umd.js',
    '@metaclinic/material/progress-spinner': 'dist/bundles/material-progress-spinner.umd.js',
    '@metaclinic/material/radio': 'dist/bundles/material-radio.umd.js',
    '@metaclinic/material/select': 'dist/bundles/material-select.umd.js',
    '@metaclinic/material/sidenav': 'dist/bundles/material-sidenav.umd.js',
    '@metaclinic/material/slide-toggle': 'dist/bundles/material-slide-toggle.umd.js',
    '@metaclinic/material/slider': 'dist/bundles/material-slider.umd.js',
    '@metaclinic/material/snack-bar': 'dist/bundles/material-snack-bar.umd.js',
    '@metaclinic/material/sort': 'dist/bundles/material-sort.umd.js',
    '@metaclinic/material/stepper': 'dist/bundles/material-stepper.umd.js',
    '@metaclinic/material/table': 'dist/bundles/material-table.umd.js',
    '@metaclinic/material/tabs': 'dist/bundles/material-tabs.umd.js',
    '@metaclinic/material/toolbar': 'dist/bundles/material-toolbar.umd.js',
    '@metaclinic/material/tooltip': 'dist/bundles/material-tooltip.umd.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': { main: 'index' },
    'rxjs/operators': { main: 'index' },

    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});
