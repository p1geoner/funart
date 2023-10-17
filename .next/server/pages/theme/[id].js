(() => {
var exports = {};
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 3077:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ColoringItem_wrapper__tJbJI",
	"image": "ColoringItem_image__CZZO6",
	"buttonPrint": "ColoringItem_buttonPrint__6Ux_U",
	"buttonDownLoad": "ColoringItem_buttonDownLoad__EY3lC",
	"buttonWrapper": "ColoringItem_buttonWrapper__N7JEG",
	"nameTitle": "ColoringItem_nameTitle__ngtmk",
	"buttons": "ColoringItem_buttons__coWIg",
	"container": "ColoringItem_container__BqsAO"
};


/***/ }),

/***/ 5253:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ColoringsList_wrapper__CVAIw",
	"firstColumn": "ColoringsList_firstColumn__c3oIP",
	"secondColumn": "ColoringsList_secondColumn__0ppkp",
	"paginationButton": "ColoringsList_paginationButton__4I457",
	"wrapperMobile": "ColoringsList_wrapperMobile__j9_lT"
};


/***/ }),

/***/ 5313:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "coloringPage_wrapper__iYsgH",
	"flexWrapper": "coloringPage_flexWrapper__Z9ViE",
	"slider": "coloringPage_slider__W_9Ie"
};


/***/ }),

/***/ 9156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_theme_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7989:
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
/* harmony import */ var _ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3077);
/* harmony import */ var _ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const ColoringItem = ({ name , image , id  })=>{
    const style = {
        width: "100%",
        height: "auto",
        objectFit: "contain",
        objectPosition: "top",
        position: "inherit"
    };
    const handlePrint = ()=>{
        const url = `https://api-didishka.ru${image}`;
        const printWindow = window.open("", "_blank");
        printWindow.document.write("<html><head><title>Print</title></head><body>");
        printWindow.document.write('<img id="printImage" src="' + url + '" style="width:100%" />');
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        const printImage = printWindow.document.getElementById("printImage");
        printImage.onload = ()=>{
            printWindow.print();
        };
        printWindow.onafterprint = ()=>{
            printWindow.close();
        };
        printImage.src = url;
        printWindow.document.close();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
                href: `/theme/coloring/${id}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fill: false,
                            width: 400,
                            height: 400,
                            style: style,
                            sizes: "(min-height: 768px) (width:100%)",
                            src: `https://api-didishka.ru${image}`,
                            alt: name,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_ColoringItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameTitle),
                            children: name
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColoringItem);


/***/ }),

/***/ 6971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1922);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColoringItem_ColoringItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7989);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4269);
/* harmony import */ var _ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5253);
/* harmony import */ var _ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_1__, _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__]);
([_store_store__WEBPACK_IMPORTED_MODULE_1__, _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ColoringsList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.observer)(({ list  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [colorList, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(list);
    const [firstColumn, setFirstColumn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(list.slice(0, list.length / 2));
    const [secondColumn, setSecondColumn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(list.slice(list.length / 2, list.length));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage = 1;
        setFirstColumn(list.slice(0, list.length / 2));
        setSecondColumn(list.slice(list.length / 2, list.length));
        setList(list);
    }, [
        asPath
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (_store_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage !== 1) {
            const newColoringsList = _store_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].categories.coloringsList */ .Z.categories.coloringsList;
            setList(colorList.concat(newColoringsList));
            const newFirstColumn = firstColumn.concat(newColoringsList.slice(0, newColoringsList.length / 2));
            const newSecondColumn = secondColumn.concat(newColoringsList.slice(newColoringsList.length / 2, newColoringsList.length));
            console.log(newColoringsList.length);
            setFirstColumn(newFirstColumn);
            setSecondColumn(newSecondColumn);
            console.log(newFirstColumn, newSecondColumn);
        } else {
            setFirstColumn(list.slice(0, list.length / 2));
            setSecondColumn(list.slice(list.length / 2, list.length));
        }
    }, [
        _store_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].categories.coloringsList */ .Z.categories.coloringsList
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7___default().firstColumn),
                        children: firstColumn.map((coloring)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColoringItem_ColoringItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                name: coloring.name,
                                image: coloring.image,
                                id: coloring.id
                            }, coloring.id);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7___default().secondColumn),
                        children: secondColumn.map((coloring)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColoringItem_ColoringItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                name: coloring.name,
                                image: coloring.image,
                                id: coloring.id
                            }, coloring.id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapperMobile),
                children: colorList.map((coloring)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColoringItem_ColoringItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        name: coloring.name,
                        image: coloring.image,
                        id: coloring.id
                    }, coloring.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColoringsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5253);
/* harmony import */ var _ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_5__);
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
            _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].categories.getColoringsList */ .Z.categories.getColoringsList(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage, `themes/${_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.categoryId */ .Z.pagination.categoryId}/colorings`);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage === _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pagination.countPages */ .Z.pagination.countPages ? " " : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handleNextPage,
            className: (_ColoringsList_module_css__WEBPACK_IMPORTED_MODULE_5___default().paginationButton),
            children: "See more"
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8357);
/* harmony import */ var _SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6060);
/* harmony import */ var _SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_3__);




const PopularThemesList = ({ list  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default().popularThemes),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_SliderCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default().sliderTitle),
                children: "The most popular coloring ideas for today"
            }),
            list.map((category)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    category: category,
                    width: 290,
                    height: 145
                }, category.id);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularThemesList);


/***/ }),

/***/ 7926:
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
/* harmony import */ var _components_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5096);
/* harmony import */ var _components_ColoringsList_ColoringsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6971);
/* harmony import */ var _coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5313);
/* harmony import */ var _coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1922);
/* harmony import */ var _components_SliderCategory_popularThemesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6874);
/* harmony import */ var _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5232);
/* harmony import */ var _components_Upper_Upper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__, _components_ColoringsList_ColoringsList__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_6__, _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_8__]);
([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__, _components_ColoringsList_ColoringsList__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_6__, _components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getStaticProps = async ({ params  })=>{
    const id = params.id.toString();
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`themes/${id}/colorings/?page=1&per_page=8`);
    const coloringsList = response.data;
    const response2 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`themes/populars/`);
    const popularThemes = response2.data.themes;
    const response3 = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`categories/`);
    const categories = response3.data.categories;
    return {
        props: {
            coloringsList,
            popularThemes,
            categories
        },
        revalidate: 60
    };
};
const getStaticPaths = async ()=>{
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().get(`themes/?page=1&per_page=999&language=ru`);
    const themesList = response.data.themes;
    return {
        paths: themesList.map((theme)=>({
                params: {
                    id: theme.id.toString()
                }
            })),
        fallback: "blocking"
    };
};
const CategoryPage = ({ coloringsList , popularThemes , categories  })=>{
    const { asPath , pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"].categories.categorylist */ .Z.categories.categorylist = categories;
        _store_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"].pagination.categoryId */ .Z.pagination.categoryId = coloringsList.theme.id;
        _store_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"].categories.coloringsList */ .Z.categories.coloringsList = coloringsList.colorings;
        const pages = coloringsList.page_data.split(",");
        _store_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"].pagination.currentPage */ .Z.pagination.currentPage = 1;
        _store_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"].pagination.countPages */ .Z.pagination.countPages = pages.length;
    }, [
        asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: coloringsList.theme.name,
                description: coloringsList.theme.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().flexWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderCategory_popularThemesList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        list: popularThemes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_coloringPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().slider),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderCategory_SliderCategory__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            categories: popularThemes
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ColoringsList_ColoringsList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        list: coloringsList.colorings
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Upper_Upper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,125,922,290,904], () => (__webpack_exec__(9156)));
module.exports = __webpack_exports__;

})();