// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyArUAd96C2jFtJbKT_kGzs7dEOL-DTCEv4",
    authDomain: "maps-7a0b8.firebaseapp.com",
    databaseURL: "https://maps-7a0b8.firebaseio.com",
    projectId: "maps-7a0b8",
    storageBucket: "maps-7a0b8.appspot.com",
    messagingSenderId: "794864320619",
    appId: "1:794864320619:web:01d093cb62da53ee36312e",
    measurementId: "G-GLRNRX1M9V"
  },
  mapsApiKey : {
    apiKey: 'AIzaSyDqlZqseq8qla50cZHhMiwx-vknoRSUVds',
    libraries: ['visualization'],
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
