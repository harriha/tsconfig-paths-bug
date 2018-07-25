import { escape } from 'querystring';

// Function escape() exists in the native node querystring module, but not in
// the http://npmjs.com/package/querystring
console.log({ escape });
