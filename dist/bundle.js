/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.module.css":
/*!******************************!*\
  !*** ./src/style.module.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"mainScreen\":\"sugNSY7IBSp7gW8AXtm_\",\"mainScreenH1\":\"Db6ZvICHddn4JhfqVsJ1\",\"mainScreenButtonMenu\":\"kEEBCdyBPOVruHy2MzJf\",\"mainScreenButton\":\"n5NYPptC7LR8OUmfyvlt\",\"mainScreenStartButton\":\"BN8Fudicks7E2anhQBM5\",\"mainEasy\":\"hi4uoMDp7NSTXY8OafOO\",\"mainEasyFilter\":\"rNMVkUIo6jTMF0atQ0p6\",\"timer\":\"Ne5FkdV3cDk0iiXUqtnA\",\"timerContext\":\"mkMakGVNnkqr9467pHU3\",\"timerMin\":\"lVsgzBHViNxuynUC7ML1\",\"timerSec\":\"lydhvtestONCmUwU1qoQ\",\"timerTime\":\"dCcyvgYLSFxu4xa3Odrl\",\"resetButton\":\"WIfDlVfvs2AtdP0iO43z\",\"easyArea\":\"f4AcaAvKri7WL_nZYa4C\",\"timerTimeFinal\":\"kgdeoz9mybzW2tolEZpt\"});\n\n//# sourceURL=webpack://gameduple/./src/style.module.css?");

/***/ }),

/***/ "./src/easy__level.js":
/*!****************************!*\
  !*** ./src/easy__level.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _help_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help/library */ \"./src/help/library.js\");\n/* harmony import */ var _help_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/timer */ \"./src/help/timer.js\");\n/* harmony import */ var _help_shuffle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help/shuffle */ \"./src/help/shuffle.js\");\n/* harmony import */ var _help_clear_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/clear__screen */ \"./src/help/clear__screen.js\");\n/* harmony import */ var _help_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/cards */ \"./src/help/cards.js\");\n/* harmony import */ var _lose_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lose__screen */ \"./src/lose__screen.js\");\n/* harmony import */ var _win_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./win__screen */ \"./src/win__screen.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ \"./src/style.module.css\");\n\n\n\n\n\n\n\n\n\nfunction renderEasyLevelSreen() {\n    const app = document.querySelector('.app');\n\n    (0,_help_clear_screen__WEBPACK_IMPORTED_MODULE_3__.clear)();\n\n    const main = document.createElement('div');\n    main.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].mainEasy);\n    const forMain = document.createElement('div');\n    forMain.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].mainEasyFilter);\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('easyTimer', forMain);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('resetEasyBtn', forMain);\n    main.appendChild(forMain);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('easyArea', main);\n    app.appendChild(main);\n}\n\nfunction createEasyTimer(container) {\n    const timer = document.createElement('div');\n    timer.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].timer);\n    const timerContext = document.createElement('div');\n    timerContext.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].timerContext);\n    const timerMin = document.createElement('p');\n    timerMin.textContent = 'min';\n    timerMin.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].timerMin);\n    const timerSec = document.createElement('p');\n    timerSec.textContent = 'sec';\n    timerSec.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].timerSec);\n    const timerTime = document.createElement('h1');\n    timerTime.textContent = '00:00';\n    timerTime.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].timerTime);\n    timerTime.id = 'time';\n\n    container.appendChild(timer);\n    timerContext.appendChild(timerMin);\n    timerContext.appendChild(timerSec);\n    timer.appendChild(timerContext);\n    timer.appendChild(timerTime);\n}\n\nfunction createResetEasyButton(container) {\n    const resetEasyBtn = document.createElement('button');\n    resetEasyBtn.textContent = 'Начать заново';\n    resetEasyBtn.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].resetButton);\n    resetEasyBtn.onclick = function () {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('easy-level');\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearTimer?.();\n    };\n    container.appendChild(resetEasyBtn);\n}\nconst goLose = function () {\n    (0,_lose_screen__WEBPACK_IMPORTED_MODULE_5__.initLoseScreen)();\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('lose-screen');\n};\n\nconst createBackCard = function (id) {\n    const back = document.createElement('img');\n    back.src = _help_cards__WEBPACK_IMPORTED_MODULE_4__.cards.back.img;\n    back.id = `${id}`;\n    back.addEventListener('click', function () {\n        gameProcess(id, _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameCards[id].id);\n    });\n    return back;\n};\n\nconst createCard = function (id, realId) {\n    const card = document.createElement('img');\n    const findCard = _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameCards.find(\n        (gameCard) => gameCard.id === realId\n    );\n    card.src = findCard.img;\n    card.id = id;\n    return card;\n};\n\nfunction gameProcess(id, realId) {\n    const newCard = createCard(id, realId);\n    const oldCard = document.getElementById(id);\n    oldCard.replaceWith(newCard);\n    if (_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs.length < 2) {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs.push({ id, realId });\n    }\n    if (_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs.length === 2 && realId === _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs[0].realId) {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkVictory++;\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs = [];\n        if (_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkVictory === _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty / 2) {\n            (0,_win_screen__WEBPACK_IMPORTED_MODULE_6__.initWinScreen)();\n            _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearTimer();\n            _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('win-screen');\n        }\n        return;\n    }\n    if (_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs.length === 2 && realId !== _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs[0].realId) {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs.forEach((back) => {\n            const backEl = document.getElementById(`${back.id}`);\n            backEl.replaceWith(createBackCard(back.id));\n        });\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backs = [];\n        return;\n    }\n}\n\nfunction createEasyArea(container) {\n    const easyArea = document.createElement('div');\n    easyArea.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].easyArea);\n    const easyCards = (0,_help_shuffle__WEBPACK_IMPORTED_MODULE_2__.shuffle)(_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty / 2);\n    console.log(easyCards);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkVictory = 0;\n    easyCards.forEach((easyCard) => {\n        const element = document.createElement('img');\n        element.src = easyCard.img;\n        easyArea.appendChild(element);\n        console.log(easyCards);\n    });\n    setTimeout(function () {\n        easyArea.innerHTML = '';\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearTimer = (0,_help_timer__WEBPACK_IMPORTED_MODULE_1__.goTime)(goLose);\n        easyCards.forEach((easyCard, index) => {\n            const backCard = createBackCard(index);\n            easyArea.appendChild(backCard);\n        });\n    }, 5000);\n    container.appendChild(easyArea);\n}\nfunction init() {\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.easyTimer = createEasyTimer;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.resetEasyBtn = createResetEasyButton;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.easyArea = createEasyArea;\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screens[\"easy-level\"] = renderEasyLevelSreen;\n}\n\n\n//# sourceURL=webpack://gameduple/./src/easy__level.js?");

/***/ }),

/***/ "./src/help/cards.js":
/*!***************************!*\
  !*** ./src/help/cards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cards\": () => (/* binding */ cards)\n/* harmony export */ });\n/* harmony import */ var _img_SixD_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/SixD.svg */ \"./src/help/img/SixD.svg\");\n/* harmony import */ var _img_SevenD_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/SevenD.svg */ \"./src/help/img/SevenD.svg\");\n/* harmony import */ var _img_EightD_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/EightD.svg */ \"./src/help/img/EightD.svg\");\n/* harmony import */ var _img_NineD_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/NineD.svg */ \"./src/help/img/NineD.svg\");\n/* harmony import */ var _img_TenD_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/TenD.svg */ \"./src/help/img/TenD.svg\");\n/* harmony import */ var _img_JackD_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/JackD.svg */ \"./src/help/img/JackD.svg\");\n/* harmony import */ var _img_QueenD_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/QueenD.svg */ \"./src/help/img/QueenD.svg\");\n/* harmony import */ var _img_KingD_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/KingD.svg */ \"./src/help/img/KingD.svg\");\n/* harmony import */ var _img_AceD_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/AceD.svg */ \"./src/help/img/AceD.svg\");\n/* harmony import */ var _img_SixS_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/SixS.svg */ \"./src/help/img/SixS.svg\");\n/* harmony import */ var _img_SevenS_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/SevenS.svg */ \"./src/help/img/SevenS.svg\");\n/* harmony import */ var _img_EightS_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/EightS.svg */ \"./src/help/img/EightS.svg\");\n/* harmony import */ var _img_NineS_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/NineS.svg */ \"./src/help/img/NineS.svg\");\n/* harmony import */ var _img_TenS_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/TenS.svg */ \"./src/help/img/TenS.svg\");\n/* harmony import */ var _img_JackS_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/JackS.svg */ \"./src/help/img/JackS.svg\");\n/* harmony import */ var _img_QueenS_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/QueenS.svg */ \"./src/help/img/QueenS.svg\");\n/* harmony import */ var _img_KingS_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/KingS.svg */ \"./src/help/img/KingS.svg\");\n/* harmony import */ var _img_AceS_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/AceS.svg */ \"./src/help/img/AceS.svg\");\n/* harmony import */ var _img_SixH_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/SixH.svg */ \"./src/help/img/SixH.svg\");\n/* harmony import */ var _img_SevenH_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/SevenH.svg */ \"./src/help/img/SevenH.svg\");\n/* harmony import */ var _img_EightH_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/EightH.svg */ \"./src/help/img/EightH.svg\");\n/* harmony import */ var _img_NineH_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/NineH.svg */ \"./src/help/img/NineH.svg\");\n/* harmony import */ var _img_TenH_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./img/TenH.svg */ \"./src/help/img/TenH.svg\");\n/* harmony import */ var _img_JackH_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./img/JackH.svg */ \"./src/help/img/JackH.svg\");\n/* harmony import */ var _img_QueenH_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./img/QueenH.svg */ \"./src/help/img/QueenH.svg\");\n/* harmony import */ var _img_KingH_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./img/KingH.svg */ \"./src/help/img/KingH.svg\");\n/* harmony import */ var _img_AceH_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./img/AceH.svg */ \"./src/help/img/AceH.svg\");\n/* harmony import */ var _img_SixC_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./img/SixC.svg */ \"./src/help/img/SixC.svg\");\n/* harmony import */ var _img_SevenC_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./img/SevenC.svg */ \"./src/help/img/SevenC.svg\");\n/* harmony import */ var _img_EightC_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./img/EightC.svg */ \"./src/help/img/EightC.svg\");\n/* harmony import */ var _img_NineC_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./img/NineC.svg */ \"./src/help/img/NineC.svg\");\n/* harmony import */ var _img_TenC_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./img/TenC.svg */ \"./src/help/img/TenC.svg\");\n/* harmony import */ var _img_JackC_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./img/JackC.svg */ \"./src/help/img/JackC.svg\");\n/* harmony import */ var _img_QueenC_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./img/QueenC.svg */ \"./src/help/img/QueenC.svg\");\n/* harmony import */ var _img_KingC_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./img/KingC.svg */ \"./src/help/img/KingC.svg\");\n/* harmony import */ var _img_AceC_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./img/AceC.svg */ \"./src/help/img/AceC.svg\");\n/* harmony import */ var _img_Back_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./img/Back.svg */ \"./src/help/img/Back.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst cards = {\n    diamonds: {\n        6: {\n            img: _img_SixD_svg__WEBPACK_IMPORTED_MODULE_0__,\n            id: 'D6',\n        },\n        7: {\n            img: _img_SevenD_svg__WEBPACK_IMPORTED_MODULE_1__,\n            id: 'D7',\n        },\n        8: {\n            img: _img_EightD_svg__WEBPACK_IMPORTED_MODULE_2__,\n            id: 'D8',\n        },\n        9: {\n            img: _img_NineD_svg__WEBPACK_IMPORTED_MODULE_3__,\n            id: 'D9',\n        },\n        10: {\n            img: _img_TenD_svg__WEBPACK_IMPORTED_MODULE_4__,\n            id: 'D10',\n        },\n        Jack: {\n            img: _img_JackD_svg__WEBPACK_IMPORTED_MODULE_5__,\n            id: 'DJ',\n        },\n        Queen: {\n            img: _img_QueenD_svg__WEBPACK_IMPORTED_MODULE_6__,\n            id: 'DQ',\n        },\n        King: {\n            img: _img_KingD_svg__WEBPACK_IMPORTED_MODULE_7__,\n            id: 'DK',\n        },\n        Ace: {\n            img: _img_AceD_svg__WEBPACK_IMPORTED_MODULE_8__,\n            id: 'DA',\n        },\n    },\n    spades: {\n        6: {\n            img: _img_SixS_svg__WEBPACK_IMPORTED_MODULE_9__,\n            id: 'S6',\n        },\n        7: {\n            img: _img_SevenS_svg__WEBPACK_IMPORTED_MODULE_10__,\n            id: 'S7',\n        },\n        8: {\n            img: _img_EightS_svg__WEBPACK_IMPORTED_MODULE_11__,\n            id: 'S8',\n        },\n        9: {\n            img: _img_NineS_svg__WEBPACK_IMPORTED_MODULE_12__,\n            id: 'S9',\n        },\n        10: {\n            img: _img_TenS_svg__WEBPACK_IMPORTED_MODULE_13__,\n            id: 'S10',\n        },\n        Jack: {\n            img: _img_JackS_svg__WEBPACK_IMPORTED_MODULE_14__,\n            id: 'SJ',\n        },\n        Queen: {\n            img: _img_QueenS_svg__WEBPACK_IMPORTED_MODULE_15__,\n            id: 'SQ',\n        },\n        King: {\n            img: _img_KingS_svg__WEBPACK_IMPORTED_MODULE_16__,\n            id: 'SK',\n        },\n        Ace: {\n            img: _img_AceS_svg__WEBPACK_IMPORTED_MODULE_17__,\n            id: 'SA',\n        },\n    },\n    hearts: {\n        6: {\n            img: _img_SixH_svg__WEBPACK_IMPORTED_MODULE_18__,\n            id: 'H6',\n        },\n        7: {\n            img: _img_SevenH_svg__WEBPACK_IMPORTED_MODULE_19__,\n            id: 'H7',\n        },\n        8: {\n            img: _img_EightH_svg__WEBPACK_IMPORTED_MODULE_20__,\n            id: 'H8',\n        },\n        9: {\n            img: _img_NineH_svg__WEBPACK_IMPORTED_MODULE_21__,\n            id: 'H9',\n        },\n        10: {\n            img: _img_TenH_svg__WEBPACK_IMPORTED_MODULE_22__,\n            id: 'H10',\n        },\n        Jack: {\n            img: _img_JackH_svg__WEBPACK_IMPORTED_MODULE_23__,\n            id: 'HJ',\n        },\n        Queen: {\n            img: _img_QueenH_svg__WEBPACK_IMPORTED_MODULE_24__,\n            id: 'HQ',\n        },\n        King: {\n            img: _img_KingH_svg__WEBPACK_IMPORTED_MODULE_25__,\n            id: 'HK',\n        },\n        Ace: {\n            img: _img_AceH_svg__WEBPACK_IMPORTED_MODULE_26__,\n            id: 'HA',\n        },\n    },\n    clubs: {\n        6: {\n            img: _img_SixC_svg__WEBPACK_IMPORTED_MODULE_27__,\n            id: 'C6',\n        },\n        7: {\n            img: _img_SevenC_svg__WEBPACK_IMPORTED_MODULE_28__,\n            id: 'C7',\n        },\n        8: {\n            img: _img_EightC_svg__WEBPACK_IMPORTED_MODULE_29__,\n            id: 'C8',\n        },\n        9: {\n            img: _img_NineC_svg__WEBPACK_IMPORTED_MODULE_30__,\n            id: 'C9',\n        },\n        10: {\n            img: _img_TenC_svg__WEBPACK_IMPORTED_MODULE_31__,\n            id: 'C10',\n        },\n        Jack: {\n            img: _img_JackC_svg__WEBPACK_IMPORTED_MODULE_32__,\n            id: 'CJ',\n        },\n        Queen: {\n            img: _img_QueenC_svg__WEBPACK_IMPORTED_MODULE_33__,\n            id: 'CQ',\n        },\n        King: {\n            img: _img_KingC_svg__WEBPACK_IMPORTED_MODULE_34__,\n            id: 'CK',\n        },\n        Ace: {\n            img: _img_AceC_svg__WEBPACK_IMPORTED_MODULE_35__,\n            id: 'CA',\n        },\n    },\n    back: {\n        img: _img_Back_svg__WEBPACK_IMPORTED_MODULE_36__,\n    },\n};\n\n\n\n\n//# sourceURL=webpack://gameduple/./src/help/cards.js?");

/***/ }),

/***/ "./src/help/clear__screen.js":
/*!***********************************!*\
  !*** ./src/help/clear__screen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/help/library.js\");\n\n\nfunction clear() {\n    const app = document.querySelector('.app');\n    app.textContent = '';\n    _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timers = [];\n}\n\n\n//# sourceURL=webpack://gameduple/./src/help/clear__screen.js?");

/***/ }),

/***/ "./src/help/library.js":
/*!*****************************!*\
  !*** ./src/help/library.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst library = {\n    blocks: {},\n    screens: {},\n    renderScreen: function (screenName) {\n        library.screens[screenName]();\n    },\n    renderBlock: function (blockName, container) {\n        library.blocks[blockName](container);\n    },\n    timers: {},\n    realTime: {},\n    levels: {},\n    gameCards: [],\n    backs: [],\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (library);\n\n\n//# sourceURL=webpack://gameduple/./src/help/library.js?");

/***/ }),

/***/ "./src/help/shuffle.js":
/*!*****************************!*\
  !*** ./src/help/shuffle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/help/library.js\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ \"./src/help/cards.js\");\n\n\n\nconst suits = ['clubs', 'spades', 'hearts', 'diamonds'];\n\nconst values = ['6', '7', '8', '9', '10', 'Queen', 'King', 'Jack', 'Ace'];\n\nfunction shuffle(count) {\n    const cardsForShuffle = [];\n    console.log(count);\n    while (cardsForShuffle.length < count) {\n        const randomSuits = Math.floor(Math.random() * suits.length);\n        const randomValues = Math.floor(Math.random() * values.length);\n        const card = _cards__WEBPACK_IMPORTED_MODULE_1__.cards[suits[randomSuits]][values[randomValues]];\n        if (!cardsForShuffle.includes(card)) {\n            cardsForShuffle.push(card);\n        }\n    }\n    _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameCards = [...cardsForShuffle, ...cardsForShuffle];\n    return _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameCards.sort(() => Math.random() - 0.5);\n}\n\n\n//# sourceURL=webpack://gameduple/./src/help/shuffle.js?");

/***/ }),

/***/ "./src/help/timer.js":
/*!***************************!*\
  !*** ./src/help/timer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goTime\": () => (/* binding */ goTime)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/help/library.js\");\n\n\nfunction goTime(callback) {\n    let sec = 0;\n    let min = 0;\n    let time = 0;\n    const timer = setInterval(function () {\n        const timerBasa = document.getElementById('time');\n        timerBasa.innerHTML = `0${min}:0${sec}`;\n        _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].realTime = `0${min}:0${sec}`;\n        sec++;\n        time++;\n        if (sec > 9) {\n            timerBasa.innerHTML = `0${min}:${sec}`;\n            _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timer = time;\n            _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].realTime = `0${min}:${sec}`;\n        }\n        if (sec > 60) {\n            sec = 0;\n            min = 1;\n            timerBasa.innerHTML = `0${min}:0${sec}`;\n            _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timer = time;\n            _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].realTime = `0${min}:0${sec}`;\n        }\n        if (time > 90) {\n            clearInterval(timer);\n            callback();\n        }\n    }, 1000);\n    return () => {\n        clearInterval(timer);\n    };\n}\n\n\n//# sourceURL=webpack://gameduple/./src/help/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLobbyBtnMenu\": () => (/* binding */ createLobbyBtnMenu),\n/* harmony export */   \"createLobbyH1\": () => (/* binding */ createLobbyH1),\n/* harmony export */   \"createStartBtn\": () => (/* binding */ createStartBtn),\n/* harmony export */   \"renderLobbySreen\": () => (/* binding */ renderLobbySreen)\n/* harmony export */ });\n/* harmony import */ var _help_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help/library */ \"./src/help/library.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ \"./src/style.module.css\");\n/* harmony import */ var _help_clear_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help/clear__screen */ \"./src/help/clear__screen.js\");\n/* harmony import */ var _easy_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easy__level */ \"./src/easy__level.js\");\n/* harmony import */ var _help_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/cards */ \"./src/help/cards.js\");\n\n\n\n\n\n\nfunction renderLobbySreen() {\n    const app = document.querySelector('.app');\n\n    (0,_help_clear_screen__WEBPACK_IMPORTED_MODULE_2__.clear)();\n\n    const main = document.createElement('div');\n    main.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreen);\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('lobbyH1', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('lobbyBtnMenu', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('startButton', main);\n\n    app.appendChild(main);\n}\n\nfunction createLobbyH1(container) {\n    const lobbyH1 = document.createElement('h1');\n    lobbyH1.textContent = 'Выбери сложность';\n    lobbyH1.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenH1);\n    container.appendChild(lobbyH1);\n}\n\nfunction createLobbyBtnMenu(container) {\n    const lobbyBtnMenu = document.createElement('div');\n    lobbyBtnMenu.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenButtonMenu);\n    const easyButton = document.createElement('button');\n    easyButton.textContent = '1';\n    easyButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenButton);\n    easyButton.addEventListener('click', function () {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].levels.value = 'easy';\n    });\n    const normalButton = document.createElement('button');\n    normalButton.textContent = '2';\n    normalButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenButton);\n    normalButton.addEventListener('click', function normalLevel() {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].levels.value = 'normal';\n    });\n    const hardButton = document.createElement('button');\n    hardButton.textContent = '3';\n    hardButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenButton);\n    hardButton.addEventListener('click', function hardLevel() {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].levels.value = 'hard';\n    });\n    container.appendChild(lobbyBtnMenu);\n    lobbyBtnMenu.appendChild(easyButton);\n    lobbyBtnMenu.appendChild(normalButton);\n    lobbyBtnMenu.appendChild(hardButton);\n}\n\nfunction createStartBtn(container) {\n    const startButton = document.createElement('button');\n    startButton.textContent = 'Старт';\n    startButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mainScreenStartButton);\n    startButton.addEventListener('click', function () {\n        switch (_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].levels.value) {\n            case 'easy':\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty = 6;\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('easy-level');\n                console.log(_help_cards__WEBPACK_IMPORTED_MODULE_4__.cards);\n                break;\n            case 'normal':\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty = 12;\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('easy-level');\n                console.log(_help_cards__WEBPACK_IMPORTED_MODULE_4__.cards);\n                break;\n            case 'hard':\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty = 18;\n                _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('easy-level');\n                console.log(_help_cards__WEBPACK_IMPORTED_MODULE_4__.cards);\n                break;\n        }\n    });\n    container.appendChild(startButton);\n}\n\n_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.lobbyH1 = createLobbyH1;\n_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.lobbyBtnMenu = createLobbyBtnMenu;\n_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.startButton = createStartBtn;\n\n_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screens[\"lobby-screen\"] = renderLobbySreen;\n\n(0,_easy_level__WEBPACK_IMPORTED_MODULE_3__.init)();\n\n_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('lobby-screen');\n\n\n//# sourceURL=webpack://gameduple/./src/index.js?");

/***/ }),

/***/ "./src/lose__screen.js":
/*!*****************************!*\
  !*** ./src/lose__screen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initLoseScreen\": () => (/* binding */ initLoseScreen)\n/* harmony export */ });\n/* harmony import */ var _help_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help/library */ \"./src/help/library.js\");\n/* harmony import */ var _help_clear_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/clear__screen */ \"./src/help/clear__screen.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/style.module.css\");\n\n\n\n\nfunction renderLoseScreen() {\n    const app = document.querySelector('.app');\n    (0,_help_clear_screen__WEBPACK_IMPORTED_MODULE_1__.clear)();\n    const main = document.createElement('div');\n    main.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreen);\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('loseH1', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('loseContent', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('resetLoseButton', main);\n\n    app.appendChild(main);\n}\n\nfunction createLoseH1(container) {\n    const loseH1 = document.createElement('h1');\n    loseH1.textContent = 'Вы проиграли!';\n    loseH1.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreenH1);\n    container.appendChild(loseH1);\n}\n\nfunction createLoseContent(container) {\n    const contentMain = document.createElement('div');\n    contentMain.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerMain);\n    const textContent = document.createElement('p');\n    textContent.textContent = 'Затраченное время:';\n    textContent.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerContent);\n    const timerTime = document.createElement('p');\n    timerTime.textContent = `${_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].realTime}`;\n    timerTime.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerTimeFinal);\n    contentMain.appendChild(textContent);\n    contentMain.appendChild(timerTime);\n    container.appendChild(contentMain);\n}\n\nfunction createLoseResetBtn(container) {\n    const resetButton = document.createElement('button');\n    resetButton.textContent = 'Играть снова';\n    resetButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreenStartButton);\n    resetButton.addEventListener('click', function () {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('lobby-screen');\n    });\n    container.appendChild(resetButton);\n}\nfunction initLoseScreen() {\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.loseH1 = createLoseH1;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.loseContent = createLoseContent;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.resetLoseButton = createLoseResetBtn;\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screens[\"lose-screen\"] = renderLoseScreen;\n}\n\n\n//# sourceURL=webpack://gameduple/./src/lose__screen.js?");

/***/ }),

/***/ "./src/win__screen.js":
/*!****************************!*\
  !*** ./src/win__screen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initWinScreen\": () => (/* binding */ initWinScreen)\n/* harmony export */ });\n/* harmony import */ var _help_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help/library */ \"./src/help/library.js\");\n/* harmony import */ var _help_clear_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/clear__screen */ \"./src/help/clear__screen.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/style.module.css\");\n\n\n\n\nfunction renderWinScreen() {\n    const app = document.querySelector('.app');\n    (0,_help_clear_screen__WEBPACK_IMPORTED_MODULE_1__.clear)();\n    const main = document.createElement('div');\n    main.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreen);\n\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('winH1', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('winContent', main);\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBlock('resetButton', main);\n\n    app.appendChild(main);\n}\n\nfunction createWinH1(container) {\n    const winH1 = document.createElement('h1');\n    winH1.textContent = 'Вы выиграли!';\n    winH1.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreenH1);\n    container.appendChild(winH1);\n}\n\nfunction createWinContent(container) {\n    const contentMain = document.createElement('div');\n    contentMain.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerMain);\n    const textContent = document.createElement('p');\n    textContent.textContent = 'Затраченное время:';\n    textContent.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerContent);\n    const timerTime = document.createElement('p');\n    timerTime.textContent = `${_help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].realTime}`;\n    timerTime.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timerTimeFinal);\n    contentMain.appendChild(textContent);\n    contentMain.appendChild(timerTime);\n    container.appendChild(contentMain);\n}\n\nfunction createResetBtn(container) {\n    const resetButton = document.createElement('button');\n    resetButton.textContent = 'Играть снова';\n    resetButton.classList.add(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainScreenStartButton);\n    resetButton.addEventListener('click', function () {\n        _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderScreen('lobby-screen');\n    });\n    container.appendChild(resetButton);\n}\nfunction initWinScreen() {\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.winH1 = createWinH1;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.winContent = createWinContent;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocks.resetButton = createResetBtn;\n    _help_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screens[\"win-screen\"] = renderWinScreen;\n}\n\n\n//# sourceURL=webpack://gameduple/./src/win__screen.js?");

/***/ }),

/***/ "./src/help/img/AceC.svg":
/*!*******************************!*\
  !*** ./src/help/img/AceC.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f04ddc422f03841bdb42.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/AceC.svg?");

/***/ }),

/***/ "./src/help/img/AceD.svg":
/*!*******************************!*\
  !*** ./src/help/img/AceD.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f0dd340f6c9013ddbdc.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/AceD.svg?");

/***/ }),

/***/ "./src/help/img/AceH.svg":
/*!*******************************!*\
  !*** ./src/help/img/AceH.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7ec9933b854ab4c8b0e.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/AceH.svg?");

/***/ }),

/***/ "./src/help/img/AceS.svg":
/*!*******************************!*\
  !*** ./src/help/img/AceS.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19b1addd436b2e895075.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/AceS.svg?");

/***/ }),

/***/ "./src/help/img/Back.svg":
/*!*******************************!*\
  !*** ./src/help/img/Back.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21a9e44e53978fdb8f7f.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/Back.svg?");

/***/ }),

/***/ "./src/help/img/EightC.svg":
/*!*********************************!*\
  !*** ./src/help/img/EightC.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29b0ae64c9ed5ae20633.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/EightC.svg?");

/***/ }),

/***/ "./src/help/img/EightD.svg":
/*!*********************************!*\
  !*** ./src/help/img/EightD.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0efc683b2386d26c602.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/EightD.svg?");

/***/ }),

/***/ "./src/help/img/EightH.svg":
/*!*********************************!*\
  !*** ./src/help/img/EightH.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ac750c1db5d327c7a0a.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/EightH.svg?");

/***/ }),

/***/ "./src/help/img/EightS.svg":
/*!*********************************!*\
  !*** ./src/help/img/EightS.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc35ab9c407441ee0edd.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/EightS.svg?");

/***/ }),

/***/ "./src/help/img/JackC.svg":
/*!********************************!*\
  !*** ./src/help/img/JackC.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"942887902efee698cffc.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/JackC.svg?");

/***/ }),

/***/ "./src/help/img/JackD.svg":
/*!********************************!*\
  !*** ./src/help/img/JackD.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"657b3ecada336a15db80.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/JackD.svg?");

/***/ }),

/***/ "./src/help/img/JackH.svg":
/*!********************************!*\
  !*** ./src/help/img/JackH.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f545d80cba58b00a521.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/JackH.svg?");

/***/ }),

/***/ "./src/help/img/JackS.svg":
/*!********************************!*\
  !*** ./src/help/img/JackS.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"174f809441ab65dcdd35.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/JackS.svg?");

/***/ }),

/***/ "./src/help/img/KingC.svg":
/*!********************************!*\
  !*** ./src/help/img/KingC.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4ae42b4497ffa13b572.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/KingC.svg?");

/***/ }),

/***/ "./src/help/img/KingD.svg":
/*!********************************!*\
  !*** ./src/help/img/KingD.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2c5818e68bf5d6c6696.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/KingD.svg?");

/***/ }),

/***/ "./src/help/img/KingH.svg":
/*!********************************!*\
  !*** ./src/help/img/KingH.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4c65505ba99ed220bcc.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/KingH.svg?");

/***/ }),

/***/ "./src/help/img/KingS.svg":
/*!********************************!*\
  !*** ./src/help/img/KingS.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca649326d9640c29a03c.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/KingS.svg?");

/***/ }),

/***/ "./src/help/img/NineC.svg":
/*!********************************!*\
  !*** ./src/help/img/NineC.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"566ac6839e48d8b4b28c.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/NineC.svg?");

/***/ }),

/***/ "./src/help/img/NineD.svg":
/*!********************************!*\
  !*** ./src/help/img/NineD.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa796460cf8cee629b1b.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/NineD.svg?");

/***/ }),

/***/ "./src/help/img/NineH.svg":
/*!********************************!*\
  !*** ./src/help/img/NineH.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d682cc8265023fafcfe.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/NineH.svg?");

/***/ }),

/***/ "./src/help/img/NineS.svg":
/*!********************************!*\
  !*** ./src/help/img/NineS.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"deeea19a003f2dea612c.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/NineS.svg?");

/***/ }),

/***/ "./src/help/img/QueenC.svg":
/*!*********************************!*\
  !*** ./src/help/img/QueenC.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c1bbcb08250eec579d6.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/QueenC.svg?");

/***/ }),

/***/ "./src/help/img/QueenD.svg":
/*!*********************************!*\
  !*** ./src/help/img/QueenD.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65facc26a1653baaeb95.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/QueenD.svg?");

/***/ }),

/***/ "./src/help/img/QueenH.svg":
/*!*********************************!*\
  !*** ./src/help/img/QueenH.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6cf8872082e13e990846.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/QueenH.svg?");

/***/ }),

/***/ "./src/help/img/QueenS.svg":
/*!*********************************!*\
  !*** ./src/help/img/QueenS.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab8a59c072f8ab2cdf7d.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/QueenS.svg?");

/***/ }),

/***/ "./src/help/img/SevenC.svg":
/*!*********************************!*\
  !*** ./src/help/img/SevenC.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e78debb33717196105cf.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SevenC.svg?");

/***/ }),

/***/ "./src/help/img/SevenD.svg":
/*!*********************************!*\
  !*** ./src/help/img/SevenD.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d6f19c172c45feab534.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SevenD.svg?");

/***/ }),

/***/ "./src/help/img/SevenH.svg":
/*!*********************************!*\
  !*** ./src/help/img/SevenH.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69dd0b9631e36ed9398c.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SevenH.svg?");

/***/ }),

/***/ "./src/help/img/SevenS.svg":
/*!*********************************!*\
  !*** ./src/help/img/SevenS.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cbc43b19944fad99fe3a.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SevenS.svg?");

/***/ }),

/***/ "./src/help/img/SixC.svg":
/*!*******************************!*\
  !*** ./src/help/img/SixC.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf116182a578c06e66f9.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SixC.svg?");

/***/ }),

/***/ "./src/help/img/SixD.svg":
/*!*******************************!*\
  !*** ./src/help/img/SixD.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c3e737ca8b30d15f1ac.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SixD.svg?");

/***/ }),

/***/ "./src/help/img/SixH.svg":
/*!*******************************!*\
  !*** ./src/help/img/SixH.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"876c27f1a20b0b8ad0d3.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SixH.svg?");

/***/ }),

/***/ "./src/help/img/SixS.svg":
/*!*******************************!*\
  !*** ./src/help/img/SixS.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"557d9cc625de44dd4f8f.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/SixS.svg?");

/***/ }),

/***/ "./src/help/img/TenC.svg":
/*!*******************************!*\
  !*** ./src/help/img/TenC.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b8e7a7986a7908de6fd.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/TenC.svg?");

/***/ }),

/***/ "./src/help/img/TenD.svg":
/*!*******************************!*\
  !*** ./src/help/img/TenD.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e269ca021c3521c9ee68.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/TenD.svg?");

/***/ }),

/***/ "./src/help/img/TenH.svg":
/*!*******************************!*\
  !*** ./src/help/img/TenH.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e076d54117993c2ebee9.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/TenH.svg?");

/***/ }),

/***/ "./src/help/img/TenS.svg":
/*!*******************************!*\
  !*** ./src/help/img/TenS.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b18bc52e401e807ac692.svg\";\n\n//# sourceURL=webpack://gameduple/./src/help/img/TenS.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;