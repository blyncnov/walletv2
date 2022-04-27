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

/***/ "./styles/Header.js":
/*!**************************!*\
  !*** ./styles/Header.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderContainer\": function() { return /* binding */ HeaderContainer; },\n/* harmony export */   \"Constraints\": function() { return /* binding */ Constraints; },\n/* harmony export */   \"HGridContainer\": function() { return /* binding */ HGridContainer; },\n/* harmony export */   \"HLeft\": function() { return /* binding */ HLeft; },\n/* harmony export */   \"HRight\": function() { return /* binding */ HRight; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nwidth: 100%;\\nheight: 80vh;\\nbackground: #F7FAFC;\\ndisplay: flex;\\njustify-content: center;\\nalign-items: center;\\n\\n@media (max-width: 800px) {\\n    height: auto;\\n}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \" \\nwidth: 100%;\\nmax-width: 90%;\\nmargin: 0 auto;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \" \\nwidth: 100%;\\ndisplay: grid;\\ngrid-template-columns: 1fr 1fr;\\ngrid-template-rows: 1fr;\\njustify-items: center;\\nalign-items: center;\\ngap: 4em;\\n\\n\\n@media (max-width: 768px) {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr;\\n}\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \" \\nwidth: 100%;\\n\\nh1{\\n    font-size: 3.75rem;\\n       color: #2B6CB0;\\n       font-weight: 800;\\n\\n    @media (max-width: 768px) {\\n         font-size: 3.15rem;\\n    }\\n}\\n\\np{\\n    font-size: 20px;\\n    margin: 1em 0;\\n    line-height: 1.5;\\n    color: #4A5567;\\n\\n        @media (max-width: 768px) {\\n         font-size: 14px;\\n             margin: 1.3em 0;\\n    }\\n}\\n\\nbutton{\\n    background-color: #3182ce;\\n    border: none;\\n    width: 40%;\\n    padding: 1.5em 3em;\\n    text-align: center;\\n    font-weight: 600;\\n    font-size: 16px;\\n    outline: none;\\n    border-radius: 5px;\\n    color: white;\\n    cursor: pointer;\\n\\n    &:hover{\\n        background-color: #2b6cb0;\\n    }\\n\\n        @media (max-width: 768px) {\\n        width: 100%;\\n         width: 60%;\\n            padding: 1.2em 2em;\\n    }\\n\\n    @media (max-width: 768px) {\\n        width: 100%;\\n         width: 60%;\\n            padding: 1.2em 2em;\\n    }\\n}\\n    @media (max-width: 768px) {\\n        margin: 2em 0;\\n    }\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \" \\nwidth: 100%;\\n\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"Header__HeaderContainer\",\n    componentId: \"sc-136af121-0\"\n})(_templateObject());\nvar Constraints = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"Header__Constraints\",\n    componentId: \"sc-136af121-1\"\n})(_templateObject1());\nvar HGridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"Header__HGridContainer\",\n    componentId: \"sc-136af121-2\"\n})(_templateObject2());\nvar HLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"Header__HLeft\",\n    componentId: \"sc-136af121-3\"\n})(_templateObject3());\nvar HRight = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"Header__HRight\",\n    componentId: \"sc-136af121-4\"\n})(_templateObject4());\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContainer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLElBQU1DLGVBQWUsR0FBR0Qsd0VBQVU7OztxQkFXeEM7QUFFTSxJQUFNRyxXQUFXLEdBQUdILHdFQUFVOzs7c0JBSXBDO0FBRU0sSUFBTUksY0FBYyxHQUFHSix3RUFBVTs7O3NCQWN2QztBQUVNLElBQU1LLEtBQUssR0FBR0wsd0VBQVU7OztzQkEwRDlCO0FBRU0sSUFBTU0sTUFBTSxHQUFHTix3RUFBVTs7O3NCQUcvQjtBQUVELCtEQUFlQyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9IZWFkZXIuanM/Y2YwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDgwdmg7XG5iYWNrZ3JvdW5kOiAjRjdGQUZDO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuYFxuXG5leHBvcnQgY29uc3QgQ29uc3RyYWludHMgPSBzdHlsZWQuZGl2YCBcbndpZHRoOiAxMDAlO1xubWF4LXdpZHRoOiA5MCU7XG5tYXJnaW46IDAgYXV0bztcbmBcblxuZXhwb3J0IGNvbnN0IEhHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmAgXG53aWR0aDogMTAwJTtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5nYXA6IDRlbTtcblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IEhMZWZ0ID0gc3R5bGVkLmRpdmAgXG53aWR0aDogMTAwJTtcblxuaDF7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgICAgIGNvbG9yOiAjMkI2Q0IwO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogMy4xNXJlbTtcbiAgICB9XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzRBNTU2NztcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICBtYXJnaW46IDEuM2VtIDA7XG4gICAgfVxufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxODJjZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAxLjVlbSAzZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI2Y2IwO1xuICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgcGFkZGluZzogMS4yZW0gMmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJlbSAyZW07XG4gICAgfVxufVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW46IDJlbSAwO1xuICAgIH1cblxuYFxuXG5leHBvcnQgY29uc3QgSFJpZ2h0ID0gc3R5bGVkLmRpdmAgXG53aWR0aDogMTAwJTtcblxuYFxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250YWluZXIiXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiQ29uc3RyYWludHMiLCJIR3JpZENvbnRhaW5lciIsIkhMZWZ0IiwiSFJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Header.js\n");

/***/ })

});