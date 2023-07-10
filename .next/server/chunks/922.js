"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storeList_CategoryStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1555);
/* harmony import */ var _storeList_PaginationStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storeList_CategoryStore_js__WEBPACK_IMPORTED_MODULE_0__, _storeList_PaginationStore_js__WEBPACK_IMPORTED_MODULE_1__]);
([_storeList_CategoryStore_js__WEBPACK_IMPORTED_MODULE_0__, _storeList_PaginationStore_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class Store {
    constructor(){
        this.categories = new _storeList_CategoryStore_js__WEBPACK_IMPORTED_MODULE_0__/* .CategoryStore */ .F();
        this.pagination = new _storeList_PaginationStore_js__WEBPACK_IMPORTED_MODULE_1__/* .PaginationStore */ .L();
    }
}
const store = new Store();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ CategoryStore)
/* harmony export */ });
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5125);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__]);
_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,mobx__WEBPACK_IMPORTED_MODULE_1__.configure)({
    enforceActions: "never"
});
class CategoryStore {
    constructor(){
        this.categorylist = [];
        this.pickedCategory = [];
        this.popularThemes = [];
        this.Themeslist = [];
        this.coloringsList = [];
        this.getCategories = async ()=>{
            const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`categories/`);
            this.setCategoryList(response.data?.categories);
            return response.data;
        };
        this.setNewThemesList = (list)=>{
            const themesList = this.Themeslist;
            const NewThemesList = themesList.concat(list);
            console.log(NewThemesList);
            this.Themeslist = NewThemesList;
        };
        this.getThemesList = async (page, url)=>{
            const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`${url}/?page=${page}&per_page=8`);
            this.setNewThemesList(response.data.themes);
            return response.data.themes;
        };
        this.searchThemesList = async (page, search, isPagination)=>{
            if (isPagination) {
                const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`search/?page=${page}&per_page=8&search=${search}`);
                if (response.status === 200) {
                    this.setNewThemesList(response.data.Coloring);
                }
            } else {
                const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`search/?page=${page}&per_page=8&search=${search}`);
                this.Themeslist = response.data.Coloring;
                return response.data.page_data;
            }
        };
        this.getColoringsList = async (page, url)=>{
            const response = await (0,_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`${url}/?page=${page}&per_page=8`);
            this.setNewColoringsList(response.data.colorings);
            return response.data.colorings;
        };
        this.setNewColoringsList = (list)=>{
            const coloringsList = this.coloringsList;
            const NewColoringsList = coloringsList.concat(list);
            this.coloringsList = list;
            console.log(this.coloringsList);
        };
        this.setCategoryList = (list)=>{
            this.categorylist = list;
        };
        this.setPickedCategory = (category)=>{
            this.PickedCategory = category;
        };
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ PaginationStore)
/* harmony export */ });
/* harmony import */ var _utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5125);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__]);
_utils_axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,mobx__WEBPACK_IMPORTED_MODULE_1__.configure)({
    enforceActions: "never"
});
class PaginationStore {
    constructor(){
        this.currentPage = 0;
        this.countPages = 0;
        this.categoryId = "";
        this.pageData = "";
        this.currentSearch = "";
        this.setCategoryList = (list)=>{
            this.categorylist = list;
        };
        this.handleNextPage = ()=>{
            if (this.currentPage !== this.countPages) {
                this.currentPage += 1;
                return true;
            } else {
                return false;
            }
        };
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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