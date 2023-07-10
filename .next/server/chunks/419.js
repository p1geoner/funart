exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 9722:
/***/ ((module) => {

// Exports
module.exports = {
	"imageBackground": "ThemeItem_imageBackground__rF_Ql",
	"container": "ThemeItem_container__MpBK9",
	"text": "ThemeItem_text__r_EHW",
	"image": "ThemeItem_image__4_FJm"
};


/***/ }),

/***/ 4542:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "ThemeList_list__zfQPc",
	"wrapper": "ThemeList_wrapper__ea9Q6",
	"title": "ThemeList_title__IAHPJ",
	"paginationButton": "ThemeList_paginationButton__xxsCX"
};


/***/ }),

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4542);
/* harmony import */ var _ThemeList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__, _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_4__]);
([_store_store__WEBPACK_IMPORTED_MODULE_2__, _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Pagination = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const handleNextPage = async ()=>{
        const NotlastPage = _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.handleNextPage */ .Z.pagination.handleNextPage();
        if (NotlastPage === true) {
            switch(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.pageData */ .Z.pagination.pageData){
                case "category":
                    _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].categories.getThemesList */ .Z.categories.getThemesList(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage, `categories/${_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.categoryId */ .Z.pagination.categoryId}/themes`);
                    return true;
                case "main":
                    _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].categories.getThemesList */ .Z.categories.getThemesList(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage, "themes");
                    return true;
                case "search":
                    _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].categories.searchThemesList */ .Z.categories.searchThemesList(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage, _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentSearch */ .Z.pagination.currentSearch, true);
                    return true;
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage === _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.countPages */ .Z.pagination.countPages ? " " : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handleNextPage,
            className: (_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_5___default().paginationButton),
            children: "See more"
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9722);
/* harmony import */ var _ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const ThemeItem = ({ theme  })=>{
    const src = `https://api-didishka.ru${theme.image}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: (_ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        href: `/theme/${theme.id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageBackground),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                    src: src,
                    alt: theme.name,
                    fill: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ThemeItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: theme.name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeItem);


/***/ }),

/***/ 7419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeItem_ThemeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4163);
/* harmony import */ var _ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4542);
/* harmony import */ var _ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);
([_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ThemeList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)(({ name , list  })=>{
    const [themes, setThemes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(list);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage = 1;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (_store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage !== 1) {
            const NewThemesList = _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.Themeslist */ .Z.categories.Themeslist;
            setThemes(NewThemesList);
            console.log("list", _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage);
        } else {
            setThemes(list);
        }
    }, [
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage,
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.Themeslist */ .Z.categories.Themeslist
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ThemeList_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),
                children: themes.map((theme)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeItem_ThemeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        theme: theme
                    }, theme.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;