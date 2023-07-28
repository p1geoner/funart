(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 2992:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "categoryPage_wrapper__UIkrB"
};


/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_category_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5125);
/* harmony import */ var _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7419);
/* harmony import */ var _categoryPage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2992);
/* harmony import */ var _categoryPage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_categoryPage_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5096);
/* harmony import */ var _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5232);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__, _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_4__, _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_6__, _store_store__WEBPACK_IMPORTED_MODULE_7__]);
([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__, _components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_4__, _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_6__, _store_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getStaticPaths = async ()=>{
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`categories/`);
    const categories = response.data.categories;
    console.log(categories, "categories");
    const paths = categories.map((category)=>{
        return {
            params: {
                id: category.id.toString()
            }
        };
    });
    // console.log(paths);
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const id = toString(params.params?.id);
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`categories/${params?.id}/themes/?page=1&per_page=8`);
    // console.log(params?.id, params?.params?.name, response);
    const categoryList = response.data;
    const response2 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`themes/populars/`);
    const popularThemes = response2.data.themes;
    const response3 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`categories/`);
    const categories = response3.data.categories;
    return {
        props: {
            categoryList,
            popularThemes,
            categories
        },
        revalidate: 60
    };
};
const CategoryPage = ({ categoryList , popularThemes , categories  })=>{
    const { asPath , pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].categories.categorylist */ .Z.categories.categorylist = categories !== undefined && categories;
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory = categoryList.category;
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].categories.Themeslist */ .Z.categories.Themeslist = categoryList.themes;
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].pagination.categoryId */ .Z.pagination.categoryId = categoryList.category.id;
        const pages = categoryList.page_data.split(",");
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage = 1;
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].pagination.countPages */ .Z.pagination.countPages = pages.length;
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].pagination.pageData */ .Z.pagination.pageData = "category";
        console.log(asPath);
    }, [
        asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_categoryPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: categoryList?.category.name,
                description: categoryList?.category.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categories: popularThemes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemesList_ThemeList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                name: "",
                list: categoryList.themes
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPage);

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,125,922,290,419], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();