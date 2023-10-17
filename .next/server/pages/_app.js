(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5431:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Burger_button__e8wll",
	"svgRectHover": "Burger_svgRectHover__yKdNs",
	"svgRectWhite": "Burger_svgRectWhite__jCsRF",
	"wrapperInner": "Burger_wrapperInner__EMIFF",
	"modal": "Burger_modal__R81wY",
	"modalWrapper": "Burger_modalWrapper__iKRsY",
	"navigation": "Burger_navigation__8fhR5",
	"openList": "Burger_openList__J8g8b",
	"categoryList": "Burger_categoryList__MQ0vn",
	"option": "Burger_option__D627O",
	"activeOption": "Burger_activeOption__Ghs0h",
	"wrapper": "Burger_wrapper__4_7iv"
};


/***/ }),

/***/ 9543:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1IwEk",
	"wrapper": "Footer_wrapper__chorF",
	"title": "Footer_title___pDUp",
	"navigationWrapper": "Footer_navigationWrapper__IcBIU",
	"firstElement": "Footer_firstElement__vvJEt",
	"flexColumn": "Footer_flexColumn__lxCj_",
	"navigationLink": "Footer_navigationLink__l8QgC",
	"secondElement": "Footer_secondElement__A6BQJ",
	"navigationText": "Footer_navigationText__znTI_"
};


/***/ }),

/***/ 3298:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__paEmf",
	"adaptiveHeader": "Header_adaptiveHeader__MjDJY",
	"header": "Header_header__pUpk9",
	"visible": "Header_visible__j0quP",
	"logo": "Header_logo__vPR6R",
	"centerWrapper": "Header_centerWrapper___VbNa",
	"LinkAbout": "Header_LinkAbout__BZyUg",
	"burger": "Header_burger__Hbq3J"
};


/***/ }),

/***/ 6348:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__pGf4r"
};


/***/ }),

/***/ 8283:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "SearchBar_wrapper__wMTO1",
	"focusWrapper": "SearchBar_focusWrapper__4HBwQ",
	"input": "SearchBar_input__7nhBl"
};


/***/ }),

/***/ 2292:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Select_wrapper__JW_mz",
	"selected": "Select_selected__fOyiS",
	"selectedOpen": "Select_selectedOpen__EBt_v",
	"text": "Select_text__DD6M4",
	"options": "Select_options__OX633",
	"option": "Select_option__ontD_",
	"activeOption": "Select_activeOption__BDnp4",
	"link": "Select_link__PgigA"
};


/***/ }),

/***/ 1430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Burger_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5431);
/* harmony import */ var _Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Burger_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Burger = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(({ categories  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listIsOpen, setListIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSelect = (option)=>{
        setIsOpen(false);
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.setPickedCategory */ .Z.categories.setPickedCategory(option);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "53",
                    height: "53",
                    viewBox: "0 0 53 53",
                    fill: "none",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        id: "Frame 84",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "0.5",
                                y: "0.5",
                                width: "52",
                                height: "52",
                                rx: "26",
                                fill: "#976EAF",
                                className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectHover)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectWhite),
                                id: "Rectangle 1",
                                x: "17.4143",
                                y: "17.0918",
                                width: "27",
                                height: "2",
                                rx: "1",
                                transform: "rotate(45 17.4143 17.0918)",
                                fill: "#976EAF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectWhite),
                                id: "Rectangle 3",
                                x: "16",
                                y: "36.0918",
                                width: "27",
                                height: "2",
                                rx: "1",
                                transform: "rotate(-45 16 36.0918)",
                                fill: "#976EAF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "0.5",
                                y: "0.5",
                                width: "52",
                                height: "52",
                                rx: "26",
                                stroke: "#976EAF"
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "53",
                    height: "53",
                    viewBox: "0 0 53 53",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "53",
                            height: "53",
                            rx: "26.5",
                            fill: "#976EAF",
                            className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectHover)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "13",
                            y: "18.5",
                            width: "27",
                            height: "2",
                            rx: "1",
                            className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectWhite),
                            fill: "#976EAF"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "13",
                            y: "25.5",
                            width: "27",
                            height: "2",
                            rx: "1",
                            className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectWhite),
                            fill: "#976EAF"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "13",
                            y: "32.5",
                            width: "27",
                            height: "2",
                            rx: "1",
                            className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgRectWhite),
                            fill: "#976EAF"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "52",
                            height: "52",
                            rx: "26",
                            stroke: "#976EAF"
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().modalWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapperInner),
                        children: !listIsOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/about/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation),
                                    onClick: (e)=>{
                                        setListIsOpen(true);
                                        e.stopPropagation();
                                    },
                                    children: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name ? _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name : "Any category"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().openList),
                                    onClick: (e)=>{
                                        setListIsOpen(!setListIsOpen);
                                        e.stopPropagation();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "28",
                                            height: "24",
                                            viewBox: "0 0 28 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                    id: "ep:back",
                                                    clipPath: "url(#clip0_487_2010)",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "Vector",
                                                            d: "M3.09375 11.3438H26.2188C26.5254 11.3438 26.8195 11.4656 27.0363 11.6824C27.2532 11.8992 27.375 12.1933 27.375 12.5C27.375 12.8067 27.2532 13.1008 27.0363 13.3176C26.8195 13.5344 26.5254 13.6562 26.2188 13.6562H3.09375C2.78709 13.6562 2.493 13.5344 2.27616 13.3176C2.05932 13.1008 1.9375 12.8067 1.9375 12.5C1.9375 12.1933 2.05932 11.8992 2.27616 11.6824C2.493 11.4656 2.78709 11.3438 3.09375 11.3438Z",
                                                            fill: "#4A4A4A"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "Vector_2",
                                                            d: "M3.57255 12.5L13.1625 22.0876C13.3796 22.3047 13.5016 22.5992 13.5016 22.9062C13.5016 23.2133 13.3796 23.5078 13.1625 23.7249C12.9454 23.942 12.6509 24.064 12.3439 24.064C12.0368 24.064 11.7424 23.942 11.5252 23.7249L1.11899 13.3186C1.01131 13.2112 0.925881 13.0836 0.867591 12.9431C0.809301 12.8027 0.779297 12.6521 0.779297 12.5C0.779297 12.3479 0.809301 12.1973 0.867591 12.0568C0.925881 11.9164 1.01131 11.7888 1.11899 11.6814L11.5252 1.27512C11.7424 1.05801 12.0368 0.936035 12.3439 0.936035C12.6509 0.936035 12.9454 1.05801 13.1625 1.27512C13.3796 1.49223 13.5016 1.7867 13.5016 2.09375C13.5016 2.40079 13.3796 2.69526 13.1625 2.91237L3.57255 12.5Z",
                                                            fill: "#4A4A4A"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                        id: "clip0_487_2010",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                            width: "28",
                                                            height: "24",
                                                            fill: "white"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name ? _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name : "Any category"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryList),
                                    children: categories?.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            className: (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                                            href: `/category/${option.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.id === option.id ? (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeOption) : (_Burger_module_css__WEBPACK_IMPORTED_MODULE_5___default().option),
                                                onClick: ()=>handleSelect(option),
                                                children: option.name
                                            })
                                        }, option.id))
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(9543);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer/Navigation/Navigation.jsx




const Navigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Footer_module_default()).navigationWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Footer_module_default()).firstElement,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Footer_module_default()).flexColumn,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: (Footer_module_default()).navigationLink,
                                href: "/about",
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: (Footer_module_default()).navigationLink,
                                href: "/about",
                                children: "Contact"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Footer_module_default()).flexColumn,
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: (Footer_module_default()).navigationLink,
                            href: "#",
                            children: "Pinterest"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Footer_module_default()).secondElement,
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: (Footer_module_default()).navigationText,
                    children: "\xa9Didishka 2023"
                })
            })
        ]
    });
};
/* harmony default export */ const Navigation_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/Footer/Footer.jsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Footer_module_default()).wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                    className: (Footer_module_default()).title,
                    children: [
                        "Didishka. ",
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "Coloring for fun"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Navigation_Navigation, {})
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);


/***/ }),

/***/ 2337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3298);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(217);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1922);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6430);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BurgerMenu_Burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5316);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6593);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Select_Select__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__, _BurgerMenu_Burger__WEBPACK_IMPORTED_MODULE_8__, clsx__WEBPACK_IMPORTED_MODULE_9__]);
([_Select_Select__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__, _BurgerMenu_Burger__WEBPACK_IMPORTED_MODULE_8__, clsx__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import Burger from "../BurgerMenu/Burger";
const Header = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)(({})=>{
    const selectCategory = (category)=>{
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.setPickedCategory */ .Z.categories.setPickedCategory(category);
    };
    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsVisible(true);
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (false) {}
        };
        if (false) {}
        return ()=>{
            if (false) {}
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleScroll = ()=>{
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;
            if (currentScrollPos >= 200) {
                setIsVisible(!isScrollingDown);
                setPrevScrollPos(currentScrollPos);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        prevScrollPos,
        isVisible
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsVisible(true);
    }, [
        router.pathname
    ]);
    const headerStyles = (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])({
        [(_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header)]: true,
        [(_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().visible)]: isVisible
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: headerStyles,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
                    href: "/",
                    children: "Didishka"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().adaptiveHeader),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
                            href: "/",
                            children: "Didishka"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().burger),
                            children: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BurgerMenu_Burger__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                categories: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().centerWrapper),
                    children: [
                        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select_Select__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().selectCategory),
                            options: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist,
                            onChange: selectCategory,
                            activeOption: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory,
                            value: "Any category"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().burger),
                    children: [
                        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BurgerMenu_Burger__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            categories: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.categorylist */ .Z.categories.categorylist
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().LinkAbout),
                            href: `/about`,
                            children: "Abous us"
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2337);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(460);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1922);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6348);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8560);
/* harmony import */ var _LoaderPage_LoaderPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1311);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);
([_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Layout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [pathname, setPathname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname);
    // useEffect(() => {
    //   const handleRouteChange = () => {
    //     setIsLoading(true);
    //   };
    //   const handleRouteChangeComplete = () => {
    //     setIsLoading(false);
    //     setPathname(router.pathname);
    //   };
    //   router.events.on("routeChangeStart", handleRouteChange);
    //   router.events.on("routeChangeComplete", handleRouteChangeComplete);
    //   router.events.on("routeChangeError", handleRouteChangeComplete);
    // }, [router]);
    // if (
    //   isLoading &&
    //   router.pathname !== "/StepByStep" &&
    //   router.pathname !== "/adv"
    // ) {
    //   return (
    //     <>
    //       <Header />
    //       <LoaderPage></LoaderPage>
    //       <Footer />
    //     </>
    //   );
    // }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            pathname !== "/404" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_8___default()), {
                color: "#703D8F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
                children: children
            }),
            pathname !== "/404" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1311:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/LoaderPage/Loader/Loader.jsx


const Loader_Loader = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.ldsRing,
        children: [
            /*#__PURE__*/ _jsx("div", {}),
            /*#__PURE__*/ _jsx("div", {}),
            /*#__PURE__*/ _jsx("div", {}),
            /*#__PURE__*/ _jsx("div", {})
        ]
    });
};
/* harmony default export */ const LoaderPage_Loader_Loader = ((/* unused pure expression or super */ null && (Loader_Loader)));

;// CONCATENATED MODULE: ./components/LoaderPage/LoaderPage.jsx



const LoaderPage = ()=>{
    const meta = {
        title: "Загрузка..."
    };
    return /*#__PURE__*/ _jsx(Loader, {});
};
/* harmony default export */ const LoaderPage_LoaderPage = ((/* unused pure expression or super */ null && (LoaderPage)));


/***/ }),

/***/ 7984:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 523 521",
        style: {
            enableBackground: "new 0 0 523 521"
        },
        children: [
            /*#__PURE__*/ _jsxs("g", {
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#FFFFFF",
                        d: "M365.86,158.29c-0.23,4.61-0.41,9.08-2.43,13.23c-1.84,3.76-4.51,6.75-8.01,9.03     c-9.18,5.98-19.24,9.7-30.04,11.29c-4.09,0.61-8.26,0.76-12.41,0.94c-2.91,0.12-5.71-0.67-8.34-1.9c-3.86-1.8-6.08-4.81-6.49-9.08     c-0.4-4.21,0.08-8.29,1.73-12.21c2.48-5.89,5.07-11.73,6.82-17.9c1.56-5.53,3.32-11.02,3.74-16.8c0.12-1.67,0.22-3.36,0.14-5.03     c-0.48-9.34-1.02-18.67-1.55-28.01c-0.26-4.68,0.37-9.24,1.73-13.72c2.39-7.88,8.27-11.25,16.26-10.93     c7.26,0.29,12.78,3.83,16.57,9.93c6.48,10.43,11.65,21.45,15.23,33.23c3.24,10.66,5.62,21.47,6.74,32.55     C365.71,154.75,365.76,156.59,365.86,158.29z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#FFFFFF",
                        d: "M134.85,113.48c-0.49,7.23-2.09,14.21-5.13,20.81c-2.44,5.3-5.25,10.43-7.51,15.8     c-2.73,6.47-5.04,13.12-7.55,19.68c-0.8,2.09-1.61,4.17-2.5,6.23c-2.13,4.94-5.82,8.36-10.66,10.53     c-6.18,2.77-12.66,3.76-19.42,3.15c-5.12-0.46-10.13-1.32-14.98-3.08c-3.74-1.36-7.01-3.44-9.83-6.26     c-4.24-4.24-5.71-9.33-4.56-15.16c1.05-5.28,2.81-10.32,5.43-15.04c6.72-12.1,14.93-23.09,24.8-32.79     c6.87-6.76,14.71-12.3,23.18-16.91c4.56-2.49,9.51-3.73,14.65-4.18c5.86-0.51,9.84,1.95,12.09,7.4     C134.15,106.8,134.96,110.04,134.85,113.48z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#FFFFFF",
                        d: "M478.96,284.7c6.76-0.01,9.89,2.49,11.09,7.7c1.15,4.95,0.78,9.86-0.59,14.69c-2.17,7.62-4.63,15.12-9.45,21.6     c-2.75,3.7-6.29,6.33-10.63,7.85c-4.79,1.68-9.12,0.73-13.04-2.37c-2.42-1.91-3.5-4.46-3.56-7.52c-0.08-4.16,1.33-7.83,3.55-11.24     c1.22-1.87,2.51-3.7,3.79-5.54c2.62-3.77,4.67-7.8,6.08-12.17c0.54-1.67,1.11-3.34,1.84-4.93     C470.45,287.52,474.66,284.97,478.96,284.7z"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M244.87,469.57c0.29-29.45,6.73-57.54,18.74-84.37c5.14-11.48,11.74-22.17,18.01-33.05    c5.51-9.56,10.77-19.26,16.16-28.88c4.45-7.94,6.57-16.62,7.99-25.48c0.85-5.36,1.42-10.78,1.72-16.2    c0.21-3.81-0.18-7.67-0.46-11.49c-0.43-5.92-0.77-11.87,0.21-17.71c1.66-9.9,6.84-17.46,16.07-21.88c5.04-2.41,10.4-3.7,15.99-3.71    c3.35-0.01,6.7,0.29,10.04,0.48c0.55,0.03,1.1,0.2,1.64,0.34c6.23,1.61,9.42,5.31,9.74,11.74c0.32,6.51-0.79,12.7-4.4,18.34    c-2.47,3.85-5.1,7.54-8.29,10.83c-2.23,2.29-4.38,4.66-6.46,7.1c-3.67,4.3-5,9.42-4.77,14.94c0.22,5.25,6.18,9.38,11.22,7.85    c1.35-0.41,2.64-1.13,3.87-1.86c1.03-0.61,1.98-1.36,2.87-2.17c7.85-7.17,13.44-15.89,16.49-26.02c1.48-4.93,1.9-10.19,2.76-15.31    c0.82-4.88,1.36-9.83,2.41-14.66c2.83-13.11,10.98-21.35,23.77-25c5.95-1.7,12.02-1.76,18,0.01c10.12,3,17.2,12.31,17.36,22.87    c0.03,1.9-0.24,3.84-0.61,5.71c-1.61,8.18-4.93,15.68-9.44,22.66c-11.25,17.44-24.44,33.23-39.77,47.23    c-6.47,5.91-13.56,10.96-21.52,14.69c-2.16,1.01-4.4,1.97-6.69,2.59c-5.47,1.47-10.98,2.81-16.52,4.04    c-5.46,1.21-9.22,5.35-9.94,11.19c-0.45,3.69,0.38,6.93,2.74,9.86c1.92,2.39,4.04,4.51,6.54,6.3c5.52,3.96,11.17,7.78,16.45,12.04    c13.68,11.05,24.93,24.32,34.5,39.03c3.71,5.7,7.25,11.5,9.9,17.79c3.18,7.57,4.76,15.44,3.79,23.64    c-0.92,7.77-3.44,15.01-8.56,21.03c-7.85,9.22-17.73,15.32-29.57,18.07c-5.79,1.35-11.59,0.97-17.35-0.36    c-7.66-1.77-11.62-8.1-12.43-14.79c-0.88-7.29,0.07-14.5,1.55-21.67c1.1-5.32,2.12-10.67,2.74-16.06    c1.01-8.69-0.11-17.24-2.73-25.57c-1.2-3.8-2.59-7.56-4.11-11.24c-1.9-4.6-5.11-8.27-8.85-11.49c-4.58-3.95-9.66-4.7-15.19-2.33    c-6.45,2.77-10.86,7.33-11.99,14.45c-0.82,5.12-1.37,10.29-1.93,15.45c-0.29,2.62-0.44,5.26-0.48,7.9c-0.13,8.87,1.48,17.49,4,25.96    c1.73,5.82,3.55,11.61,6.27,17.08c1.77,3.55,2.61,7.38,2.97,11.3c0.45,4.86,0.7,9.69,0.26,14.6c-0.98,10.75-9.33,22.75-23.92,25.37    c-6.92,1.24-13.7,0.45-20.3-1.92c-6.48-2.33-11.34-6.55-14.21-12.83c-3.85-8.44-6.42-17.21-6.29-26.62    C244.9,476.13,244.87,472.85,244.87,469.57z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M46.23,219.15c7.55-0.2,14.98,1.67,22.43,3.56c9.99,2.52,19.97,5.1,30.07,7.12c6.87,1.38,13.91,2,20.91,2.69    c7.71,0.76,15.46,1.24,23.19,1.81c5.34,0.4,10.68,0.82,16.03,1.1c11.73,0.62,23.19,2.44,34.07,7.14c5.02,2.17,9.79,4.77,14.02,8.23    c8.49,6.95,12.3,15.89,10.99,26.9c-0.6,5.05-1.91,9.9-4.16,14.44c-5.03,10.15-12.97,16.28-24.5,17.09    c-12.48,0.88-24.66-0.54-35.91-6.31c-11.95-6.12-23.7-12.63-35.5-19.03c-4.99-2.71-9.91-5.54-14.83-8.37    c-6.28-3.62-13.02-5.19-20.24-4.75c-2.41,0.15-4.73,0.62-6.89,1.82c-5.21,2.89-6.27,8.47-2.96,13.31c1.37,2,3.21,3.55,5.34,4.73    c4.26,2.37,8.52,4.74,12.75,7.17c2.36,1.35,4.67,2.78,6.95,4.26c6.48,4.19,11.26,9.87,14.63,16.78c3.5,7.18,5.49,14.81,6.74,22.66    c1.85,11.58,2.26,23.22,1.38,34.91c-0.86,11.46-2.68,22.7-7.63,33.22c-1.98,4.22-4.3,8.21-7.58,11.58    c-6.29,6.45-14.06,8.63-22.77,7.7c-10.73-1.15-18.48-6.86-23.93-16.05c-2.89-4.87-6.01-9.62-9.14-14.35    c-3.05-4.59-7.04-8.22-11.75-11.13c-4.49-2.77-8.79-5.84-13.25-8.65c-12.51-7.86-17.25-25.41-10.73-39.32    c4.41-9.42,12.04-14.2,22.38-14.71c3.87-0.19,7.67,0.29,11.35,1.47c5.05,1.62,8.47,4.91,10.23,9.97c1.46,4.2,2.12,8.51,2.39,12.92    c0.13,2.15,0.37,4.3,0.53,6.45c0.24,3.12,1.95,4.93,4.91,5.73c3.07,0.83,6.17,0.89,9.26,0.27c3.26-0.65,5.48-2.6,6.38-5.81    c0.6-2.14,1.13-4.35,1.34-6.55c0.85-8.89-1.46-16.71-7.83-23.26c-8.55-8.8-18.76-14.49-30.7-17.23c-6.54-1.5-12.99-3.39-19.54-4.84    c-11.64-2.59-18.51-10.09-22.29-20.97c-1.4-4.03-2.09-8.17-2.4-12.43c-0.88-12.15,2.6-23.1,9.15-33.14    c5.77-8.85,14.07-14.22,24.29-16.7C37.57,219.59,41.75,218.95,46.23,219.15z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M254.29,190.09c0.23-11.84,1.75-21.87,5.19-31.64c4.92-13.93,9.76-27.9,14.33-41.95    c2.32-7.13,3.86-14.5,4.77-21.98c0.83-6.85,0.18-13.54-1.31-20.23c-1.65-7.41-3.16-14.85-4.81-22.25    c-2.17-9.73-0.87-19.07,3.03-28.11c4.71-10.96,12.88-17.65,24.7-19.77c5.2-0.93,10.42-1.96,15.71-1.29    c4.75,0.59,9.48,1.42,14.16,2.4c16.64,3.51,31.78,10.67,46.06,19.67c10.95,6.89,18.87,16.7,24.91,28.02    c3.66,6.86,6.73,13.99,8.03,21.72c0.67,4.02,1.14,8.07,1.56,12.12c0.74,7.05,2.57,13.8,5.13,20.39c1.83,4.69,3.59,9.4,5.24,14.16    c2.86,8.24,3.2,16.73,2.38,25.34c-0.78,8.2-2.75,16.04-6.31,23.48c-4.65,9.72-11.53,17.31-20.81,22.9    c-7.99,4.81-16.47,8.12-25.64,9.63c-19.06,3.13-37.13,9.37-54.82,16.92c-6.61,2.82-13.32,5.44-20.12,7.76    c-18.43,6.3-37.47-6.21-40.23-25.21C254.8,197.67,254.57,193.11,254.29,190.09z M373.75,136.11c-0.1-1.7-0.16-3.54-0.34-5.37    c-1.12-11.08-3.5-21.89-6.74-32.55c-3.58-11.78-8.75-22.81-15.23-33.23c-3.79-6.1-9.31-9.64-16.57-9.93    c-7.99-0.32-13.87,3.05-16.26,10.93c-1.36,4.48-1.99,9.04-1.73,13.72c0.52,9.34,1.06,18.67,1.55,28.01    c0.09,1.67-0.01,3.36-0.14,5.03c-0.43,5.78-2.18,11.27-3.74,16.8c-1.75,6.17-4.34,12.01-6.82,17.9c-1.65,3.92-2.14,8-1.73,12.21    c0.41,4.28,2.63,7.29,6.49,9.08c2.64,1.23,5.43,2.02,8.34,1.9c4.14-0.17,8.31-0.33,12.41-0.94c10.8-1.6,20.86-5.31,30.04-11.29    c3.5-2.28,6.18-5.27,8.01-9.03C373.35,145.2,373.52,140.72,373.75,136.11z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M192.76,346.26c0.29,5.72-1.27,11.08-3.58,16.23c-2.85,6.36-5.12,12.92-7.13,19.58    c-1.28,4.25-1.75,8.6-2.12,12.99c-0.07,0.87-0.02,1.76,0.06,2.63c0.27,2.92,2.03,4.56,4.68,5.44c2.51,0.83,4.51,0.02,6.3-1.77    c1.98-1.98,3.13-4.4,3.95-7.03c1.94-6.17,3.96-12.33,5.88-18.51c2.95-9.5,7.07-18.51,11.47-27.4c5.52-11.13,9.01-22.88,10.99-35.09    c1.03-6.39,1.8-12.82,2.89-19.19c1.37-7.98,3.7-15.65,7.23-23.01c4.21-8.78,10.97-14.43,20-17.48c9.57-3.23,19.08-2.72,28.27,1.51    c7.58,3.49,11.62,9.7,12.95,17.83c0.84,5.09,0.17,10.03-1.22,14.93c-2.18,7.66-5.34,14.89-9.66,21.59    c-6.8,10.55-13.66,21.06-20.5,31.59c-2.44,3.75-4.88,7.51-7.36,11.24c-6.99,10.52-12.39,21.81-16.52,33.72    c-3.33,9.58-6.75,19.14-9.7,28.84c-2.48,8.13-3.41,16.57-3.75,25.07c-0.26,6.65-0.31,13.28,0.59,19.88    c0.46,3.39,1.34,6.73,2.08,10.08c0.93,4.21,2.18,8.37,2.78,12.63c1.06,7.57,0.17,15.06-2.71,22.13c-3.11,7.62-9.25,11.7-17.28,12.75    c-15.69,2.07-29.14-3.26-40.98-13.13c-6.19-5.16-7.98-12.16-6.92-19.93c1.09-7.98,3.31-15.64,7.17-22.75    c2.55-4.7,5.26-9.32,7.98-13.93c1.95-3.3,3.16-6.83,3.38-10.63c0.32-5.65-3.81-8.99-9.34-7.66c-4.12,0.99-6.92,3.68-8.52,7.47    c-1.6,3.78-2.52,7.74-1.7,11.93c1.55,7.89,0.19,15.39-2.98,22.69c-4.58,10.56-13.11,14.23-23.53,13.65    c-5.49-0.3-10.41-2.14-14.9-5.35c-7.25-5.18-10.91-12.32-12.04-20.97c-1.39-10.6,1.72-19.71,8.92-27.54c4-4.35,8.03-8.7,11.86-13.2    c4.51-5.31,7.52-11.53,9.6-18.12c1.34-4.25,2.03-8.71,2.91-13.09c1.01-5.01,1.96-10.03,2.87-15.06c0.81-4.47,0.32-8.93-0.27-13.37    c-0.38-2.85-0.91-5.7-1.09-8.56c-0.31-5.15,0.41-10.22,2.15-15.08c1.2-3.36,3.62-5.79,6.55-7.74c9.98-6.66,24.58-5.14,32.87,0.91    c5.05,3.69,7.04,8.92,7.4,14.94C192.82,344,192.76,345.12,192.76,346.26z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M189.08,65.08c0.22,4.52-1.26,9.97-3.3,15.31c-7.3,19.11-13.72,38.53-19.42,58.17    c-2.48,8.57-3.84,17.46-5.71,26.2c-1.6,7.5-3.11,15.01-4.81,22.49c-2.46,10.8-9.34,17.93-19.15,22.51    c-7.71,3.6-15.77,4.94-24.28,4.04c-10.42-1.1-20.73-2.77-31.03-4.67c-10.85-2-21.82-3.14-32.91-2.86    c-8.55,0.22-17.11,0.12-25.66,0.28c-6.43,0.12-11.73-2.3-15.94-6.99c-4.67-5.19-6.68-11.36-6.04-18.35    c0.84-9.17,3.29-17.87,7.35-26.15c8.07-16.45,16.52-32.69,27.11-47.69c17.04-24.15,37.01-45.5,60.88-63.07    c12.73-9.37,26.76-15.86,42.19-19.33c8.15-1.83,16.28-2.08,24.48-0.31c10.2,2.2,17.43,7.99,21.72,17.46    C187.69,49.02,188.94,56.3,189.08,65.08z M142.74,91.29c0.11-3.44-0.7-6.68-1.99-9.81c-2.24-5.45-6.22-7.91-12.09-7.4    c-5.14,0.45-10.08,1.69-14.65,4.18c-8.47,4.61-16.3,10.15-23.18,16.91c-9.86,9.7-18.08,20.69-24.8,32.79    c-2.62,4.72-4.39,9.76-5.43,15.04c-1.15,5.83,0.31,10.92,4.56,15.16c2.82,2.81,6.09,4.9,9.83,6.26c4.84,1.75,9.86,2.62,14.98,3.08    c6.75,0.61,13.24-0.38,19.42-3.15c4.84-2.17,8.53-5.59,10.66-10.53c0.88-2.05,1.7-4.14,2.5-6.23c2.51-6.56,4.83-13.21,7.55-19.68    c2.26-5.37,5.07-10.5,7.51-15.8C140.65,105.51,142.24,98.53,142.74,91.29z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M522.62,280.04c0.02,11.19-0.48,21.08-2.18,30.88c-1.9,10.96-5.81,21.25-10.56,31.24    c-1.37,2.89-2.8,5.76-4.4,8.52c-5.72,9.91-9.5,20.58-12.67,31.51c-2.34,8.06-4.61,16.14-7.3,24.08c-1.66,4.9-3.67,9.76-6.18,14.28    c-5.93,10.7-14.41,18.73-26.22,22.67c-9.29,3.1-17.73,1.13-25.02-5.28c-6.19-5.44-10.43-12.06-11.19-20.54    c-0.52-5.78,0.73-11.27,2.44-16.72c2.2-7.01,6.72-12.49,11.62-17.68c2.96-3.14,6.16-6.06,9.22-9.11c2.15-2.14,4.29-4.3,6.36-6.53    c4.99-5.37,8.22-11.76,10.73-18.57c1.3-3.53,1.56-7.18,1.2-10.88c-0.45-4.58-3.11-6.48-7.61-5.57c-1.93,0.39-3.58,1.33-5.11,2.53    c-3.99,3.12-6.41,7.31-8.1,11.96c-2.48,6.84-4.81,13.73-7.24,20.58c-0.69,1.96-1.45,3.9-2.32,5.78    c-5.12,11.07-16.22,16.04-27.9,12.53c-0.84-0.25-1.67-0.55-2.49-0.87c-13.38-5.1-16.47-16.28-15.3-26.55    c0.66-5.78,2.81-10.91,5.81-15.83c4.28-7.03,9.76-13.04,15.34-19c5.35-5.72,10.87-11.32,15.81-17.39    c6.45-7.93,12.52-16.17,17.32-25.29c3.48-6.62,5.98-13.59,8.41-20.62c2.19-6.34,4.26-12.72,7.44-18.69    c3.02-5.66,6.87-10.63,11.69-14.78c6.37-5.49,13.76-8.19,22.3-7.72c12.02,0.66,20.82,6.43,27.02,16.54    c3.82,6.24,5.86,13.09,7.11,20.23C522.14,264.2,522.88,272.71,522.62,280.04z M486.85,262.52c-4.3,0.27-8.51,2.82-10.92,8.05    c-0.73,1.59-1.3,3.26-1.84,4.93c-1.41,4.37-3.46,8.41-6.08,12.17c-1.28,1.84-2.56,3.67-3.79,5.54c-2.22,3.41-3.64,7.08-3.55,11.24    c0.06,3.06,1.14,5.61,3.56,7.52c3.92,3.1,8.25,4.05,13.04,2.37c4.35-1.53,7.88-4.15,10.63-7.85c4.82-6.47,7.28-13.98,9.45-21.6    c1.37-4.82,1.74-9.73,0.59-14.69C496.74,265.01,493.61,262.51,486.85,262.52z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M262.09,90.24c0.06,5.33-1.43,11.39-4.54,17.05c-3.62,6.58-7.15,13.21-10.83,19.75    c-5.28,9.39-8.8,19.36-9.71,30.1c-0.45,5.31-0.3,10.69-0.21,16.04c0.12,6.63,0.62,13.26,0.63,19.89c0.01,4.3-0.33,8.64-0.93,12.9    c-1.27,9.09-8.58,20-22.2,21.66c-8.01,0.98-15.22-1.32-21.9-5.43c-11.28-6.95-17.47-17.06-18.07-30.39    c-0.18-3.98-0.34-7.99-0.14-11.97c0.33-6.66,2.24-13.04,3.73-19.51c3.23-14.07,8.59-27.42,13.48-40.94    c3.67-10.15,7.72-20.14,12.26-29.94c2.5-5.4,5.77-10.3,9.42-14.99c4.56-5.86,10.79-8.64,17.84-9.8c3.21-0.53,6.52-0.5,9.79-0.56    c1.33-0.02,2.73,0.23,3.99,0.68C253.08,67.74,262.6,75.59,262.09,90.24z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M457.33,68.21c3.44-0.25,6.49,0.33,9.51,1.17c3.01,0.84,5.28,2.64,6.75,5.37c1.9,3.54,3.38,7.24,3.55,11.34    c0.07,1.76,0.27,3.52,0.22,5.27c-0.15,6.36,1.63,12.18,5.08,17.46c4.47,6.84,8.09,14.15,12.03,21.28    c5.52,9.99,8.77,20.74,10.67,31.9c1.99,11.62-1.19,21.66-9.87,29.83c-8.78,8.26-19.19,12.72-31.23,12.54    c-10.63-0.16-18.82-4.9-23.89-14.55c-3.24-6.16-4.5-12.61-3.19-19.47c0.33-1.71,0.91-3.4,1.6-5c0.79-1.83,1.71-3.63,2.78-5.3    c3.04-4.75,5.08-9.96,7.09-15.17c2.34-6.07,2.03-12.22,0.26-18.36c-1.39-4.81-3.57-9.22-6.76-13.12c-2.12-2.6-4.27-5.2-6.16-7.97    c-3.75-5.5-5.27-11.6-4.14-18.22c1.12-6.54,5.15-11.07,10.55-14.47C446.86,69.79,452.02,68.18,457.33,68.21z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M198.48,41.72c0.45-2.26,0.72-4.57,1.38-6.77c1.2-3.98,2.75-7.86,5-11.38c3.4-5.32,6.73-10.7,10.41-15.82    c4.85-6.75,11.71-8.45,19.56-6.76c5.51,1.18,10.23,3.94,14.49,7.59c2.56,2.19,5.03,4.43,7.01,7.19c5.16,7.21,5.73,14.72,1.57,22.54    c-1.01,1.9-2.19,3.72-3.4,5.5c-2.91,4.25-7,6.66-12.04,7.59c-3.14,0.58-6.31,1.08-9.39,1.91c-3.61,0.98-7.14,2.29-10.7,3.44    c-1.97,0.64-3.92,1.37-5.92,1.87c-6.05,1.5-10.62-1.07-14.28-5.59C199.55,49.79,198.73,45.89,198.48,41.72z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#703D8F",
                d: "M439.25,36.15c7.45,0,12.55,2.11,16.91,5.89c3.43,2.98,4.6,7,4.18,11.46c-0.17,1.82-1.05,3.35-2.4,4.57    c-2.02,1.83-4.2,3.45-6.79,4.41c-1.12,0.42-2.23,0.87-3.37,1.25c-3.8,1.24-7.11,3.24-9.84,6.18c-0.33,0.35-0.68,0.67-1.03,1.01    c-5.16,4.93-12.51,3.82-15.78-2.58c-1.11-2.17-1.79-4.63-2.23-7.03c-0.65-3.56-0.56-7.18,0.46-10.69c1.37-4.73,4.14-8.46,8.46-10.88    C431.84,37.5,436.13,36.06,439.25,36.15z"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Logo)));


/***/ }),

/***/ 6430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8283);
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const SearchBar = ()=>{
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isFocus, setIsFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        search
    ]);
    const handleClick = ()=>{
        inputRef.current.focus();
        setIsFocus(true);
    };
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    const handleInputChange = (event)=>{
        setSearch(event.target.value);
    };
    const handleSearch = ()=>{
        if (search !== "") {
            const searchQuery = encodeURIComponent(search);
            router.push(`/search/${searchQuery}`);
        }
    };
    const handleBlur = ()=>{
        setIsFocus(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: isFocus ? (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().focusWrapper) : (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "18",
                height: "19",
                viewBox: "0 0 18 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16.6 18.5L10.3 12.2C9.8 12.6 9.225 12.9167 8.575 13.15C7.925 13.3833 7.23333 13.5 6.5 13.5C4.68333 13.5 3.146 12.8707 1.888 11.612C0.63 10.3533 0.000666667 8.816 0 7C0 5.18333 0.629333 3.646 1.888 2.388C3.14667 1.13 4.684 0.500667 6.5 0.5C8.31667 0.5 9.854 1.12933 11.112 2.388C12.37 3.64667 12.9993 5.184 13 7C13 7.73333 12.8833 8.425 12.65 9.075C12.4167 9.725 12.1 10.3 11.7 10.8L18 17.1L16.6 18.5ZM6.5 11.5C7.75 11.5 8.81267 11.0623 9.688 10.187C10.5633 9.31167 11.0007 8.24933 11 7C11 5.75 10.5623 4.68733 9.687 3.812C8.81167 2.93667 7.74933 2.49933 6.5 2.5C5.25 2.5 4.18733 2.93767 3.312 3.813C2.43667 4.68833 1.99933 5.75067 2 7C2 8.25 2.43767 9.31267 3.313 10.188C4.18833 11.0633 5.25067 11.5007 6.5 11.5Z",
                    fill: "#4A4A4A"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                value: search,
                onBlur: handleBlur,
                type: "text",
                className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                placeholder: "Search",
                onChange: (e)=>handleInputChange(e),
                onKeyDown: handleKeyDown
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);


/***/ }),

/***/ 217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Select_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2292);
/* harmony import */ var _Select_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Select_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1922);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8464);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__]);
_store_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Select = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ options , value , onChange , activeOption  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSelect = (option)=>{
        onChange(option);
        setIsOpen(false);
        console.log(option, _store_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
        onMouseLeave: ()=>setIsOpen(false),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: isOpen ? (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().selectedOpen) : (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().selected),
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),
                        children: _store_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name ? _store_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.name : value
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "11",
                        height: "7",
                        transform: isOpen ? ` rotate(180)` : ` rotate(0)`,
                        viewBox: "0 0 11 7",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M1 1L5.32 6L10 1",
                            stroke: "#976EAF"
                        })
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().options),
                children: options?.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: _store_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categories.PickedCategory */ .Z.categories.PickedCategory?.id === option.id ? (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().activeOption) : (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().option),
                        onClick: ()=>handleSelect(option),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            className: (_Select_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),
                            href: `/category/${option.id}`,
                            children: option.name
                        })
                    }, option.id))
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



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

/***/ 252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7507:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/web/spec-extension/adapters/headers.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

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

/***/ 6593:
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,464,125,922,560], () => (__webpack_exec__(1430)));
module.exports = __webpack_exports__;

})();