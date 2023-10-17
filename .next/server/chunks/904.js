exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 9874:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Upper_button__mVh88"
};


/***/ }),

/***/ 6904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Upper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9874);
/* harmony import */ var _Upper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Upper_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Upper = ()=>{
    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            if (scrollY >= 1000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_Upper_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
            onClick: scrollToTop,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "42",
                height: "42",
                viewBox: "0 0 42 42",
                fill: "none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "state=default, type=up",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            id: "Vector",
                            d: "M21 13L28 19.6667L26.04 21.6L22.4 18.1333L22.4 29L19.6 29L19.6 18.1333L15.96 21.6L14 19.6667L21 13Z",
                            fill: "#976EAF"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "41",
                            height: "41",
                            rx: "20.5",
                            stroke: "#976EAF"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upper);


/***/ })

};
;