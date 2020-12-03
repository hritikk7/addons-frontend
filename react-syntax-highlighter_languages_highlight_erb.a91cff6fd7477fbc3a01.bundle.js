(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 2283:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[%=-]?', end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_erb.a91cff6fd7477fbc3a01.bundle.js.map