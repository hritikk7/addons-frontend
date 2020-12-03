(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ 2395:
/***/ (function(module, exports) {

module.exports = function(hljs) {

  var COMMENT = {
    className: 'comment',
    begin: /\$noop\(/,
    end: /\)/,
    contains: [{
      begin: /\(/,
      end: /\)/,
      contains: ['self', {
        begin: /\\./
      }]
    }],
    relevance: 10
  };

  var FUNCTION = {
    className: 'keyword',
    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
    end: /\(/,
    excludeEnd: true
  };

  var VARIABLE = {
    className: 'variable',
    begin: /%[_a-zA-Z0-9:]*/,
    end: '%'
  };

  var ESCAPE_SEQUENCE = {
    className: 'symbol',
    begin: /\\./
  };

  return {
    contains: [
      COMMENT,
      FUNCTION,
      VARIABLE,
      ESCAPE_SEQUENCE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_taggerscript.a91cff6fd7477fbc3a01.bundle.js.map