(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 2267:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    case_insensitive: false,
    lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
    keywords: {
      keyword: 'base-uri child-src connect-src default-src font-src form-action' +
        ' frame-ancestors frame-src img-src media-src object-src plugin-types' +
        ' report-uri sandbox script-src style-src', 
    },
    contains: [
    {
      className: 'string',
      begin: "'", end: "'"
    },
    {
      className: 'attribute',
      begin: '^Content', end: ':', excludeEnd: true,
    },
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_csp.a91cff6fd7477fbc3a01.bundle.js.map