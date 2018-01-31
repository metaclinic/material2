/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;

// The default time that jasmine waits for an asynchronous test to finish is five seconds.
// If this timeout is too short the CI may fail randomly because our asynchronous tests can
// take longer in some situations (e.g Saucelabs and Browserstack tunnels)
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

__karma__.loaded = function () {};

var baseDir = '/base';
var specFiles = Object.keys(window.__karma__.files).filter(isMaterialSpecFile);

// Configure the base path and map the different node packages.
System.config({
  baseURL: baseDir,
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',

    // Angular specific mappings.
    '@metaclinic/core': 'node:@metaclinic/core/bundles/core.umd.js',
    '@metaclinic/core/testing': 'node:@metaclinic/core/bundles/core-testing.umd.js',
    '@metaclinic/common': 'node:@metaclinic/common/bundles/common.umd.js',
    '@metaclinic/common/testing': 'node:@metaclinic/common/bundles/common-testing.umd.js',
    '@metaclinic/common/http': 'node:@metaclinic/common/bundles/common-http.umd.js',
    '@metaclinic/common/http/testing': 'node:@metaclinic/common/bundles/common-http-testing.umd.js',
    '@metaclinic/compiler': 'node:@metaclinic/compiler/bundles/compiler.umd.js',
    '@metaclinic/compiler/testing': 'node:@metaclinic/compiler/bundles/compiler-testing.umd.js',
    '@metaclinic/forms': 'node:@metaclinic/forms/bundles/forms.umd.js',
    '@metaclinic/forms/testing': 'node:@metaclinic/forms/bundles/forms-testing.umd.js',
    '@metaclinic/animations': 'node:@metaclinic/animations/bundles/animations.umd.js',
    '@metaclinic/animations/browser': 'node:@metaclinic/animations/bundles/animations-browser.umd.js',
    '@metaclinic/platform-browser/animations': 'node:@metaclinic/platform-browser/bundles/platform-browser-animations.umd',
    '@metaclinic/platform-browser': 'node:@metaclinic/platform-browser/bundles/platform-browser.umd.js',
    '@metaclinic/platform-browser/testing': 'node:@metaclinic/platform-browser/bundles/platform-browser-testing.umd.js',
    '@metaclinic/platform-browser-dynamic': 'node:@metaclinic/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@metaclinic/platform-browser-dynamic/testing': 'node:@metaclinic/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',

    // Path mappings for local packages that can be imported inside of tests.
    // TODO(devversion): replace once the index.ts file for the Material package has been added.
    '@metaclinic/material': 'dist/packages/material/public-api.js',
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
    '@metaclinic/cdk/testing': 'dist/packages/cdk/testing/index.js',

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
    'rxjs': {
      main: 'index'
    },
    'rxjs/operators': {
      main: 'index'
    },

    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});

// Configure the Angular test bed and run all specs once configured.
configureTestBed()
  .then(runMaterialSpecs)
  .then(__karma__.start, __karma__.error);


/** Runs the Angular Material specs in Karma. */
function runMaterialSpecs() {
  // By importing all spec files, Karma will run the tests directly.
  return Promise.all(specFiles.map(function (fileName) {
    return System.import(fileName);
  }));
}

/** Whether the specified file is part of Angular Material. */
function isMaterialSpecFile(path) {
  return path.slice(-8) === '.spec.js' && path.indexOf('node_modules') === -1;
}

/** Configures Angular's TestBed. */
function configureTestBed() {
  return Promise.all([
    System.import('@metaclinic/core/testing'),
    System.import('@metaclinic/platform-browser-dynamic/testing')
  ]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    var testBed = testing.TestBed.initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );

    patchTestBedToDestroyFixturesAfterEveryTest(testBed);
  });
}

/**
 * Monkey-patches TestBed.resetTestingModule such that any errors that occur during component
 * destruction are thrown instead of silently logged. Also runs TestBed.resetTestingModule after
 * each unit test.
 *
 * Without this patch, the combination of two behaviors is problematic for Angular Material:
 * - TestBed.resetTestingModule catches errors thrown on fixture destruction and logs them without
 *     the errors ever being thrown. This means that any component errors that occur in ngOnDestroy
 *     can encounter errors silently and still pass unit tests.
 * - TestBed.resetTestingModule is only called *before* a test is run, meaning that even *if* the
 *    aforementioned errors were thrown, they would be reported for the wrong test (the test that's
 *    about to start, not the test that just finished).
 */
function patchTestBedToDestroyFixturesAfterEveryTest(testBed) {
  // Original resetTestingModule function of the TestBed.
  var _resetTestingModule = testBed.resetTestingModule;

  // Monkey-patch the resetTestingModule to destroy fixtures outside of a try/catch block.
  // With https://github.com/angular/angular/commit/2c5a67134198a090a24f6671dcdb7b102fea6eba
  // errors when destroying components are no longer causing Jasmine to fail.
  testBed.resetTestingModule = function () {
    try {
      this._activeFixtures.forEach(function (fixture) {
        fixture.destroy();
      });
    } finally {
      this._activeFixtures = [];
      // Regardless of errors or not, run the original reset testing module function.
      _resetTestingModule.call(this);
    }
  };

  // Angular's testing package resets the testing module before each test. This doesn't work well
  // for us because it doesn't allow developers to see what test actually failed.
  // Fixing this by resetting the testing module after each test.
  // https://github.com/angular/angular/blob/master/packages/core/testing/src/before_each.ts#L25
  afterEach(function () {
    testBed.resetTestingModule();
  });
}