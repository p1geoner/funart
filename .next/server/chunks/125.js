"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 5125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ axiosConfig)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function axiosConfig() {
    const devOrProd = "https://api-didishka.ru/api/";
    const user = "token";
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: devOrProd
    });
    instance.interceptors.request.use((config)=>{
        // Проверяем тип запроса на GET или POST
        if (config.method === "get") {
            config.headers["token"] = user;
            config.headers["Content-Type"] = "multipart/form-data";
        } else if (config.method === "post") {
            config.headers["token"] = user;
            config.headers["Content-Type"] = "multipart/form-data";
        } else if (config.method === "delete") {
            config.headers["token"] = user;
        }
        return config;
    }, (error)=>Promise.reject(error));
    instance.interceptors.response.use((response)=>response, async (error)=>{
        console.log(error);
        if (error.response.status === 401 || error.response.status === 404) {
            // localStorage.clear();
            // debugger;
            // window.location.reload();
            console.log("Not auth", error);
        }
    });
    return instance;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;