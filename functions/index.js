(function (_, Kotlin) {
  'use strict';
  function main$lambda(req, res) {
    return res.send('Hello From Kotlin!');
  }
  function main(args) {
    var fireaseFun = require('firebase-functions');
    exports.myTestFun = fireaseFun.https.onRequest(main$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));
