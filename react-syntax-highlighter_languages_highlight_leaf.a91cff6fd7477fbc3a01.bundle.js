(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ 2322:
/***/ (function(module, exports) {

module.exports = function (hljs) {
  return {
    contains: [
      {
        className: 'function',
        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
        end:' {',
        returnBegin: true,
        excludeEnd: true,
        contains : [
          {
            className: 'keyword',
            begin: '#+'
          },
          {
            className: 'title',
            begin: '[A-Za-z_][A-Za-z_0-9]*'
          },
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            endsParent: true,
            contains: [
              {
                className: 'string',
                begin: '"',
                end: '"'
              },
              {
                className: 'variable',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              }
            ]
          }
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_leaf.a91cff6fd7477fbc3a01.bundle.js.map