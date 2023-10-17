(() => {
var exports = {};
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 2238:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "coloringSinglePage_wrapper__k5T14",
	"buttonsWrapper": "coloringSinglePage_buttonsWrapper__Cieks",
	"button": "coloringSinglePage_button__La78g",
	"buttonsInnerWrapper": "coloringSinglePage_buttonsInnerWrapper__wlKiK",
	"image": "coloringSinglePage_image__8017a",
	"title": "coloringSinglePage_title__ifo3n",
	"imageWrapper": "coloringSinglePage_imageWrapper__SBqIz",
	"navButtons": "coloringSinglePage_navButtons__FTvsL"
};


/***/ }),

/***/ 9646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_theme_coloring_id_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5125);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2238);
/* harmony import */ var _coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const getStaticProps = async ({ params  })=>{
    const id = params.id.toString();
    let prevId = parseInt(params.id) - 1;
    let nextId = parseInt(params.id) + 1;
    let hasNext = false;
    let hasPrev = false;
    const responsePrev = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`colorings/${prevId}/`);
    if (responsePrev?.status === 200) {
        hasPrev = true;
    }
    const responseNext = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`colorings/${nextId}/`);
    if (responseNext?.status === 200) {
        hasNext = true;
    }
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`colorings/${id}/`);
    const coloring = response.data;
    return {
        props: {
            coloring,
            hasNext,
            hasPrev
        },
        revalidate: 3600
    };
};
const getStaticPaths = async ()=>{
    const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`colorings/`);
    const coloringsList = response.data;
    return {
        paths: coloringsList.map((coloring)=>({
                params: {
                    id: coloring.id.toString()
                }
            })),
        fallback: "blocking"
    };
};
const SingleColoring = ({ coloring , hasNext , hasPrev  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = router.query;
    const prevId = parseInt(id) - 1;
    const nextId = parseInt(id) + 1;
    const handlePrint = ()=>{
        const url = `https://api-didishka.ru${coloring.image}`;
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
    const handleDownload = ()=>{
        (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`https://api-didishka.ru/api/colorings/5/download/`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonsWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                        onClick: ()=>router.back(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "24",
                                height: "25",
                                viewBox: "0 0 24 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                    id: "mdi:arrow-up",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Vector",
                                        d: "M21.0002 11.4999L21.0002 13.4999L9.00016 13.4999L14.5002 18.9999L13.0802 20.4199L5.16016 12.4999L13.0802 4.57992L14.5002 5.99992L9.00016 11.4999L21.0002 11.4999Z",
                                        fill: "#976EAF"
                                    })
                                })
                            }),
                            "Back"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonsInnerWrapper),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                onClick: handlePrint,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "24",
                                        height: "25",
                                        viewBox: "0 0 24 25",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                            id: "mdi:arrow-up",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                id: "Vector",
                                                d: "M18 7H6V3H18V7ZM18 12.5C18.2833 12.5 18.521 12.404 18.713 12.212C18.905 12.02 19.0007 11.7827 19 11.5C19 11.2167 18.904 10.979 18.712 10.787C18.52 10.595 18.2827 10.4993 18 10.5C17.7167 10.5 17.479 10.596 17.287 10.788C17.095 10.98 16.9993 11.2173 17 11.5C17 11.7833 17.096 12.021 17.288 12.213C17.48 12.405 17.7173 12.5007 18 12.5ZM16 19V15H8V19H16ZM18 21H6V17H2V11C2 10.15 2.29167 9.43733 2.875 8.862C3.45833 8.28667 4.16667 7.99933 5 8H19C19.85 8 20.5627 8.28767 21.138 8.863C21.7133 9.43833 22.0007 10.1507 22 11V17H18V21Z",
                                                fill: "#976EAF"
                                            })
                                        })
                                    }),
                                    "Print"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                href: `https://api-didishka.ru/api/colorings/${coloring.id}/download/`,
                                download: `${coloring.name}.jpeg`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "24",
                                        height: "25",
                                        viewBox: "0 0 24 25",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                            id: "material-symbols:save",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                id: "Vector",
                                                d: "M6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6ZM12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5Z",
                                                fill: "#976EAF"
                                            })
                                        })
                                    }),
                                    "Download"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: coloring.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
                        src: `https://api-didishka.ru${coloring.image}`,
                        width: 1000,
                        height: 1000,
                        alt: `${coloring.name}`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().navButtons),
                        children: [
                            hasPrev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: `/theme/coloring/${prevId}`,
                                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().prevButton),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "50",
                                    height: "50",
                                    viewBox: "0 0 50 50",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M34.0002 24.4999L34.0002 26.4999L22.0002 26.4999L27.5002 31.9999L26.0802 33.4199L18.1602 25.4999L26.0802 17.5799L27.5002 18.9999L22.0002 24.4999L34.0002 24.4999Z",
                                            fill: "#976EAF"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "49",
                                            height: "49",
                                            rx: "24.5",
                                            stroke: "#976EAF"
                                        })
                                    ]
                                })
                            }),
                            hasNext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: `/theme/coloring/${nextId}`,
                                className: (_coloringSinglePage_module_css__WEBPACK_IMPORTED_MODULE_6___default().prevButton),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "50",
                                    height: "50",
                                    viewBox: "0 0 50 50",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M15.9998 25.5001L15.9998 23.5001L27.9998 23.5001L22.4998 18.0001L23.9198 16.5801L31.8398 24.5001L23.9198 32.4201L22.4998 31.0001L27.9998 25.5001L15.9998 25.5001Z",
                                            fill: "#976EAF"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "49.5",
                                            y: "49.5",
                                            width: "49",
                                            height: "49",
                                            rx: "24.5",
                                            transform: "rotate(-180 49.5 49.5)",
                                            stroke: "#976EAF"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleColoring);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,125], () => (__webpack_exec__(9646)));
module.exports = __webpack_exports__;

})();