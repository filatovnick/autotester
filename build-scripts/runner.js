/**
 * Build unpacked extension with specified example
 */

"use strict";

const unpacked = require('./unpacked');
const zip = require('./zip');
const copyLibs = require('./copy-libs');


const cmd = process.argv[2];

switch (cmd) {
  case 'unpacked':
    unpacked.create(process.argv[3]);
  break;
  case 'copy-libs':
    copyLibs.run();
    break;
  case 'build':
    unpacked.create('google');
    zip.create('dist/unpacked', 'dist/autotester.zip');
    break;
  default:
    console.log(`Unknown command: ${cmd}`)
}
