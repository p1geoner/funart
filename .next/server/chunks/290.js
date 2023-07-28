exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 6060:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "SliderCategory_wrapper__UzHat",
	"sliderTitle": "SliderCategory_sliderTitle___g7rH",
	"popularThemes": "SliderCategory_popularThemes__GRUWb",
	"swiperSlide": "SliderCategory_swiperSlide__nbCpS",
	"swiper": "SliderCategory_swiper__rqUdZ"
};


/***/ }),

/***/ 2634:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "SliderItem_image__D6PiG",
	"container": "SliderItem_container__Om_xS",
	"imageBackground": "SliderItem_imageBackground__QmO65",
	"text": "SliderItem_text__WpDrN"
};


/***/ }),

/***/ 4333:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Title_wrapper__3xTVp",
	"title": "Title_title__n_gez",
	"description": "Title_description__wtbvk"
};


/***/ }),

/***/ 5232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6060);
/* harmony import */ var _SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SliderCategory = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)(({ categories  })=>{
    console.log(categories);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7___default().sliderTitle),
                children: "The most popular coloring ideas for today"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                spaceBetween: 20,
                height: 420,
                loop: true,
                slidesPerView: 4,
                breakpoints: {
                    1320: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1112: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        loop: true
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop: true
                    }
                },
                className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7___default().swiper),
                children: categories.map((category)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_7___default().swiperSlide),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            category: category,
                            width: 320,
                            height: 200
                        })
                    }, category.id);
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCategory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2634);
/* harmony import */ var _SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const SliderItem = ({ category , width , height  })=>{
    const src = `https://api-didishka.ru${category.image}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/theme/${category.id}`,
        className: (_SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        style: {
            height: `${height}px`
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageBackground),
            style: {
                width: `${width}px`
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: (_SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                    src: src,
                    alt: category.name,
                    width: width,
                    height: 145
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_SliderItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                    children: category.name
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderItem);


/***/ }),

/***/ 5096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4333);
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Title_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Title = ({ title , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
                children: description
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;