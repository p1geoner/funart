exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 5507:
/***/ ((module) => {

// Exports
module.exports = {
	"errorWrapper": "NotFoundPage_errorWrapper__4YVRY",
	"wrapper": "NotFoundPage_wrapper__CdOXR",
	"infoWrapper": "NotFoundPage_infoWrapper__pmpnv",
	"link": "NotFoundPage_link__bPhb_",
	"linkWrapper": "NotFoundPage_linkWrapper__zAoQV",
	"footer": "NotFoundPage_footer__DdBc3",
	"svg": "NotFoundPage_svg__4a0IW",
	"errorSvg": "NotFoundPage_errorSvg__Y7fEC"
};


/***/ }),

/***/ 8560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5507);
/* harmony import */ var _styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const NotFoundPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.push("404");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().infoWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Something went wrong"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "If you re sure the address was correct, the page may have been deleted"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkWrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
                                    children: "Back to Home"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorSvg),
                            width: "487",
                            height: "223",
                            viewBox: "0 0 487 223",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0.431641 184.455V157.637L79.4316 32.8189H101.795V71.0007H88.1589L34.9771 155.273V156.728H145.25V184.455H0.431641ZM89.2498 219.001V176.273L89.6135 164.273V32.8189H121.432V219.001H89.2498Z",
                                    fill: "#828282"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M243.113 222.546C228.144 222.546 215.295 218.758 204.568 211.183C193.901 203.546 185.689 192.546 179.932 178.183C174.235 163.758 171.386 146.395 171.386 126.092C171.447 105.789 174.326 88.5159 180.023 74.2734C185.78 59.9704 193.992 49.0613 204.659 41.5462C215.386 34.031 228.204 30.2734 243.113 30.2734C258.023 30.2734 270.841 34.031 281.568 41.5462C292.295 49.0613 300.507 59.9704 306.204 74.2734C311.962 88.5765 314.841 105.849 314.841 126.092C314.841 146.455 311.962 163.849 306.204 178.273C300.507 192.637 292.295 203.607 281.568 211.183C270.901 218.758 258.083 222.546 243.113 222.546ZM243.113 194.092C254.75 194.092 263.932 188.364 270.659 176.91C277.447 165.395 280.841 148.455 280.841 126.092C280.841 111.304 279.295 98.8795 276.204 88.8189C273.113 78.7583 268.75 71.1825 263.113 66.0916C257.477 60.9401 250.81 58.3643 243.113 58.3643C231.538 58.3643 222.386 64.1219 215.659 75.6371C208.932 87.0916 205.538 103.91 205.477 126.092C205.416 140.94 206.901 153.425 209.932 163.546C213.023 173.667 217.386 181.304 223.023 186.455C228.659 191.546 235.356 194.092 243.113 194.092Z",
                                    fill: "#828282"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M341.682 184.455V157.637L420.682 32.8189H443.045V71.0007H429.409L376.227 155.273V156.728H486.5V184.455H341.682ZM430.5 219.001V176.273L430.863 164.273V32.8189H462.682V219.001H430.5Z",
                                    fill: "#828282"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M186.916 16.8511L186.916 16.8511L186.919 16.8544L193.226 22.2901C193.226 22.2901 193.226 22.2902 193.227 22.2902C193.32 22.3711 193.425 22.4367 193.536 22.4858V22.5906L194.036 22.5908C194.286 22.5909 194.53 22.5157 194.737 22.3746C194.943 22.2333 195.102 22.0324 195.191 21.7981C195.28 21.5636 195.295 21.3076 195.233 21.0645C195.171 20.8215 195.035 20.604 194.846 20.4405C194.846 20.4405 194.846 20.4405 194.846 20.4405L188.538 15.0043L188.538 15.0043L188.534 15.0011C188.287 14.7922 187.968 14.689 187.645 14.7122C187.323 14.7354 187.021 14.8834 186.807 15.1261C186.592 15.369 186.482 15.6871 186.502 16.0113C186.523 16.3355 186.672 16.6371 186.916 16.8511Z",
                                    fill: "#976EAF",
                                    stroke: "#976EAF"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M297.447 14.9991L297.447 14.9991C297.694 14.7903 298.014 14.687 298.336 14.7102C298.659 14.7334 298.96 14.8814 299.175 15.1241C299.39 15.3671 299.5 15.6852 299.479 16.0094C299.459 16.3335 299.309 16.6351 299.066 16.8491L299.062 16.8525L299.062 16.8525L292.756 22.2878C292.755 22.2879 292.755 22.2881 292.755 22.2882C292.53 22.4828 292.243 22.5892 291.946 22.5893L297.447 14.9991ZM297.447 14.9991L297.443 15.0024M297.447 14.9991L297.443 15.0024M297.443 15.0024L291.136 20.439C291.136 20.439 291.136 20.439 291.136 20.439C290.946 20.6025 290.811 20.82 290.749 21.063C290.687 21.306 290.701 21.5621 290.79 21.7965C290.879 22.0309 291.038 22.2318 291.245 22.373M297.443 15.0024L291.245 22.373M291.245 22.373C291.451 22.5142 291.696 22.5894 291.946 22.5893L291.524 21.9651L291.245 22.373C291.245 22.373 291.245 22.373 291.245 22.373Z",
                                    fill: "#976EAF",
                                    stroke: "#976EAF"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M242.643 14.9945C242.875 15.2236 243.188 15.3511 243.514 15.3511C243.839 15.3511 244.152 15.2236 244.384 14.9945C244.617 14.7653 244.748 14.453 244.748 14.126V1.72519C244.748 1.39819 244.617 1.08588 244.384 0.856611C244.152 0.627558 243.839 0.5 243.514 0.5C243.188 0.5 242.875 0.62756 242.643 0.856611C242.411 1.08587 242.279 1.39818 242.279 1.72519V14.126C242.279 14.453 242.411 14.7653 242.643 14.9945Z",
                                    fill: "#976EAF",
                                    stroke: "#976EAF"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    className: (_styles_notFoundPage_NotFoundPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().svg),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1920",
                    height: "413",
                    viewBox: "0 0 1920 413",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                            id: "path-1-inside-1_893_2019",
                            fill: "white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M634 413C637.162 351.791 687.981 303.13 750.21 303.13C753.747 303.13 757.24 303.314 760.696 303.622C774.29 280.324 793.782 260.986 817.226 247.541C840.669 234.095 867.244 227.013 894.295 227C921.346 226.987 947.927 234.045 971.383 247.468C994.839 260.891 1014.35 280.211 1027.97 303.496C1030.88 303.278 1033.82 303.13 1036.79 303.13C1099.02 303.13 1149.84 351.791 1153 413"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M634 413C637.162 351.791 687.981 303.13 750.21 303.13C753.747 303.13 757.24 303.314 760.696 303.622C774.29 280.324 793.782 260.986 817.226 247.541C840.669 234.095 867.244 227.013 894.295 227C921.346 226.987 947.927 234.045 971.383 247.468C994.839 260.891 1014.35 280.211 1027.97 303.496C1030.88 303.278 1033.82 303.13 1036.79 303.13C1099.02 303.13 1149.84 351.791 1153 413",
                            fill: "#C089E1",
                            "fill-opacity": "0.06"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M760.696 303.622L760.607 304.618L761.24 304.674L761.56 304.126L760.696 303.622ZM1027.97 303.496L1027.1 304.001L1027.42 304.54L1028.04 304.493L1027.97 303.496ZM634.999 413.052C638.134 352.375 688.513 304.13 750.21 304.13V302.13C687.449 302.13 636.191 351.207 633.001 412.948L634.999 413.052ZM750.21 304.13C753.713 304.13 757.175 304.312 760.607 304.618L760.785 302.626C757.304 302.316 753.782 302.13 750.21 302.13V304.13ZM761.56 304.126C775.065 280.979 794.431 261.767 817.723 248.408L816.728 246.673C793.133 260.206 773.515 279.668 759.832 303.118L761.56 304.126ZM817.723 248.408C841.015 235.05 867.418 228.013 894.295 228L894.294 226C867.069 226.013 840.323 233.141 816.728 246.673L817.723 248.408ZM894.295 228C921.172 227.987 947.582 235 970.886 248.336L971.88 246.6C948.272 233.09 921.52 225.987 894.294 226L894.295 228ZM970.886 248.336C994.191 261.673 1013.58 280.867 1027.1 304.001L1028.83 302.991C1015.12 279.554 995.488 260.11 971.88 246.6L970.886 248.336ZM1028.04 304.493C1030.94 304.276 1033.85 304.13 1036.79 304.13V302.13C1033.79 302.13 1030.82 302.279 1027.89 302.499L1028.04 304.493ZM1036.79 304.13C1098.49 304.13 1148.87 352.375 1152 413.052L1154 412.948C1150.81 351.207 1099.55 302.13 1036.79 302.13V304.13Z",
                            fill: "#C089E1",
                            mask: "url(#path-1-inside-1_893_2019)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                            id: "path-3-inside-2_893_2019",
                            fill: "white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M1206 413C1212.99 277.089 1325.4 169.042 1463.05 169.042C1470.87 169.042 1478.6 169.45 1486.24 170.133C1516.31 118.401 1559.43 75.464 1611.29 45.6095C1663.14 15.7551 1721.92 0.028334 1781.76 3.82501e-05C1841.59 -0.0282575 1900.39 15.6429 1952.27 45.4483C2004.16 75.2537 2047.31 118.15 2077.43 169.854C2083.88 169.369 2090.38 169.042 2096.95 169.042C2234.6 169.042 2347.01 277.089 2354 413"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M1206 413C1212.99 277.089 1325.4 169.042 1463.05 169.042C1470.87 169.042 1478.6 169.45 1486.24 170.133C1516.31 118.401 1559.43 75.464 1611.29 45.6095C1663.14 15.7551 1721.92 0.028334 1781.76 3.82501e-05C1841.59 -0.0282575 1900.39 15.6429 1952.27 45.4483C2004.16 75.2537 2047.31 118.15 2077.43 169.854C2083.88 169.369 2090.38 169.042 2096.95 169.042C2234.6 169.042 2347.01 277.089 2354 413",
                            fill: "#C089E1",
                            "fill-opacity": "0.06"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M1486.24 170.133L1486.16 171.129L1486.79 171.186L1487.11 170.636L1486.24 170.133ZM2077.43 169.854L2076.57 170.357L2076.88 170.898L2077.51 170.851L2077.43 169.854ZM1207 413.051C1213.97 277.67 1325.94 170.042 1463.05 170.042V168.042C1324.87 168.042 1212.02 276.509 1205 412.949L1207 413.051ZM1463.05 170.042C1470.84 170.042 1478.53 170.448 1486.16 171.129L1486.33 169.137C1478.66 168.452 1470.91 168.042 1463.05 168.042V170.042ZM1487.11 170.636C1517.09 119.055 1560.08 76.2433 1611.78 46.4762L1610.79 44.7429C1558.78 74.6847 1515.54 117.748 1485.38 169.631L1487.11 170.636ZM1611.78 46.4762C1663.49 16.709 1722.1 1.02825 1781.76 1.00004L1781.76 -0.999962C1721.75 -0.971583 1662.79 14.8011 1610.79 44.7429L1611.78 46.4762ZM1781.76 1.00004C1841.42 0.971825 1900.04 16.5971 1951.78 46.3154L1952.77 44.5812C1900.74 14.6886 1841.77 -1.02834 1781.76 -0.999962L1781.76 1.00004ZM1951.78 46.3154C2003.51 76.0337 2046.54 118.805 2076.57 170.357L2078.3 169.35C2048.09 117.496 2004.81 74.4737 1952.77 44.5812L1951.78 46.3154ZM2077.51 170.851C2083.94 170.368 2090.41 170.042 2096.95 170.042V168.042C2090.34 168.042 2083.82 168.371 2077.36 168.856L2077.51 170.851ZM2096.95 170.042C2234.06 170.042 2346.03 277.67 2353 413.051L2355 412.949C2347.98 276.509 2235.13 168.042 2096.95 168.042V170.042Z",
                            fill: "#C089E1",
                            mask: "url(#path-3-inside-2_893_2019)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                            id: "path-5-inside-3_893_2019",
                            fill: "white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M-168 413.047C-162.545 307.067 -74.8913 222.815 32.4446 222.815C38.545 222.815 44.569 223.133 50.5307 223.666C73.9785 183.326 107.599 149.845 148.036 126.565C188.472 103.285 234.309 91.0221 280.968 91C327.627 90.978 373.475 103.198 413.933 126.439C454.392 149.681 488.044 183.131 511.53 223.448C516.56 223.07 521.623 222.815 526.749 222.815C634.085 222.815 721.739 307.067 727.194 413.047"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M-168 413.047C-162.545 307.067 -74.8913 222.815 32.4446 222.815C38.545 222.815 44.569 223.133 50.5307 223.666C73.9785 183.326 107.599 149.845 148.036 126.565C188.472 103.285 234.309 91.0221 280.968 91C327.627 90.978 373.475 103.198 413.933 126.439C454.392 149.681 488.044 183.131 511.53 223.448C516.56 223.07 521.623 222.815 526.749 222.815C634.085 222.815 721.739 307.067 727.194 413.047",
                            fill: "#C089E1",
                            "fill-opacity": "0.06"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M50.5307 223.666L50.4417 224.662L51.0755 224.718L51.3953 224.168L50.5307 223.666ZM511.53 223.448L510.666 223.951L510.981 224.492L511.605 224.445L511.53 223.448ZM-167.001 413.098C-161.574 307.648 -74.3562 223.815 32.4446 223.815V221.815C-75.4264 221.815 -163.517 306.487 -168.999 412.996L-167.001 413.098ZM32.4446 223.815C38.5103 223.815 44.5042 224.131 50.4417 224.662L50.6197 222.67C44.6338 222.135 38.5797 221.815 32.4446 221.815V223.815ZM51.3953 224.168C74.7551 183.98 108.25 150.624 148.535 127.432L147.537 125.699C106.949 149.066 73.2018 182.673 49.6662 223.163L51.3953 224.168ZM148.535 127.432C188.82 104.239 234.484 92.022 280.968 92L280.967 90C234.133 90.0222 188.125 102.331 147.537 125.699L148.535 127.432ZM280.968 92C327.452 91.978 373.128 104.152 413.435 127.307L414.431 125.572C373.821 102.244 327.801 89.9779 280.967 90L280.968 92ZM413.435 127.307C453.742 150.461 487.268 183.785 510.666 223.951L512.394 222.944C488.82 182.476 455.041 148.901 414.431 125.572L413.435 127.307ZM511.605 224.445C516.619 224.068 521.656 223.815 526.749 223.815V221.815C521.59 221.815 516.501 222.071 511.455 222.45L511.605 224.445ZM526.749 223.815C633.55 223.815 720.768 307.648 726.195 413.098L728.193 412.996C722.711 306.487 634.62 221.815 526.749 221.815V223.815Z",
                            fill: "#C089E1",
                            mask: "url(#path-5-inside-3_893_2019)"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);


/***/ })

};
;