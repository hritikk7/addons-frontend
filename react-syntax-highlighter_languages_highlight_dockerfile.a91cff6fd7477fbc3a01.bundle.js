(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 2275:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['docker'],
    case_insensitive: true,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
        starts: {
          end: /[^\\]\n/,
          subLanguage: 'bash'
        }
      }
    ],
    illegal: '</'
  }
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dockerfile.a91cff6fd7477fbc3a01.bundle.js.map