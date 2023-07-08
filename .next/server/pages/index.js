(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3579:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Home_wrapper__kA9A_"
};


/***/ }),

/***/ 9933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_index_jsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_index_jsx__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var private_next_pages_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3579);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5096);
/* harmony import */ var _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5232);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5125);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7419);
/* harmony import */ var _components_Upper_Upper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_10__]);
([_components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const getStaticProps = async ()=>{
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().get(`categories/`);
    const categories = response.data.categories;
    const response2 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().get(`themes/populars/`);
    const popularThemes = response2.data.themes;
    const response3 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().get(`themes/?page=1&per_page=8`);
    const themeList = response3.data;
    return {
        props: {
            categories,
            popularThemes,
            themeList
        },
        revalidate: 60
    };
};
const Home = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.observer)(({ categories , popularThemes , themeList  })=>{
    console.log(popularThemes, categories);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].categories.categorylist */ .Z.categories.categorylist = categories !== undefined && categories;
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory = "";
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].categories.popularThemes */ .Z.categories.popularThemes = popularThemes;
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].categories.Themeslist */ .Z.categories.Themeslist = themeList.themes;
        const pages = themeList.page_data.split(",");
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pagination.countPages */ .Z.pagination.countPages = pages.length;
        console.log(pages, pages.length);
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pagination.pageData */ .Z.pagination.pageData = "main";
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "FunArt"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: "Coloring for fun \uD83C\uDF08",
                        description: "About 6k coloring pages"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        categories: popularThemes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        name: "All Colorings",
                        list: themeList.themes
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Upper_Upper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,89,922,290,419,904], () => (__webpack_exec__(9933)));
module.exports = __webpack_exports__;

})();