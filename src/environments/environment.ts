// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  coursesURL: 'shared/course.json',
  firebase: {
    apiKey: 'AIzaSyB0y9QZMB1d3LrXyOW2N-eIGBXE242mjoM',
    authDomain: 'golf-app-games.firebaseapp.com',
    databaseURL: 'https://golf-app-games.firebaseio.com',
    projectId: 'golf-app-games',
    storageBucket: '',
    messagingSenderId: '697816302436',
    appId: '1:697816302436:web:e6ebfa78a1cc7d59'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
