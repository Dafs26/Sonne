"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Hero = function(param) {\n    var heading = param.heading, message = param.message;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]\"\n            }, void 0, false, {\n                fileName: \"/home/Dafs/Documentos/reactTutorial/Sonne/components/Hero.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 text-white z-[2] mt-[-10rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-5xl font-bold\",\n                        children: heading\n                    }, void 0, false, {\n                        fileName: \"/home/Dafs/Documentos/reactTutorial/Sonne/components/Hero.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"py-5 text-xl\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/Dafs/Documentos/reactTutorial/Sonne/components/Hero.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/Dafs/Documentos/reactTutorial/Sonne/components/Hero.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/Dafs/Documentos/reactTutorial/Sonne/components/Hero.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBRTFCLElBQU1DLElBQUksR0FBRyxnQkFBd0I7UUFBdEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDN0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdGQUF3Rjs7MEJBRXJHLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMERBQTBEOzs7OztxQkFBRzswQkFDNUUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7O2tDQUMvQyw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLG9CQUFvQjtrQ0FBRUgsT0FBTzs7Ozs7NkJBQU07a0NBQ2pELDhEQUFDSyxHQUFDO3dCQUFDRixTQUFTLEVBQUMsY0FBYztrQ0FBRUYsT0FBTzs7Ozs7NkJBQUs7Ozs7OztxQkFFckM7Ozs7OzthQUNGLENBQ047Q0FDSDtBQVpLRixLQUFBQSxJQUFJO0FBY1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8uanN4PzI4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVybyA9ICh7aGVhZGluZywgbWVzc2FnZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gbWItMTIgYmctZml4ZWQgYmctY2VudGVyIGJnLWNvdmVyIGN1c3RvbS1pbWcnPlxuICAgICAgey8qIE92ZXJsYXkgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgYmctYmxhY2svNzAgei1bMl0nIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01IHRleHQtd2hpdGUgei1bMl0gbXQtWy0xMHJlbV0nPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTV4bCBmb250LWJvbGQnPntoZWFkaW5nfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ncHktNSB0ZXh0LXhsJz57bWVzc2FnZX08L3A+XG4gICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPSdweC04IHB5LTIgYm9yZGVyJz5Cb29rPC9idXR0b24+ICovfSBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlcm8iLCJoZWFkaW5nIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.jsx\n"));

/***/ })

});