/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n  // need to change letters to ships & grids\n  constructor() {\n    this.grid = [\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"],\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"],\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"],\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"],\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"],\n      [\"E\", \"E\", \"E\", \"E\", \"E\", \"E\"]\n      ]\n  }\n\n  checkSpace(row, col) {\n    return this.grid[row][col]\n  }\n\n  placeShips(row, col, val) {\n    this.grid[row][col] = val\n  }\n\n  checkShips() {\n    let flattenedGrid = this.grid.flat()\n    let shipsLeft = 0\n    for(let i = 0; i < flattenedGrid.length; i++) {\n      if (flattenedGrid[i] === \"S\") {\n        shipsLeft += 1\n      }\n    }\n    return shipsLeft\n  }\n\n  initializeBoardWithShips() {\n    console.log(\"inside initalize ships\")\n    const numberOfShips = 5\n    while (this.checkShips() < numberOfShips) {\n      let randomRow = Math.floor(Math.random() * 6);\n      let randomCol = Math.floor(Math.random() * 6);\n      this.placeShips(randomRow, randomCol, \"S\")\n    }\n  }\n\n  attack(row, col) {\n    if (this.checkSpace(row, col) === \"S\") {\n      this.grid[row][col] = \"H\"\n      return true\n    } else {\n      this.grid[row][col] = \"X\"\n      return false\n    }\n  }\n\n  hideShips() {\n    return this.grid.map(array => {\n      return array.map(ele => {\n        if (ele === \"S\") {\n          return \"E\"\n        } else {\n         return ele\n        }\n      })\n    })\n  }\n\n  // need to map divs into html\n  printGrid(grid) {\n    return grid.forEach(row => {\n      console.log(row.join(\" \"))\n    })\n  }\n\n  printGameBoard() {\n    console.log(\"inside print game board\")\n    return this.printGrid(this.hideShips())  \n  }\n\n  printRealBoard() {\n    return this.printGrid(this.grid)\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/Board.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.player = new Player();\n    this.remainingMisses = 15\n  }\n\n  startGame() {\n    this.board.initializeBoardWithShips()\n    this.board.printGameBoard()\n    console.log(\"There are 5 ships on the board!\")\n    while (!this.gameOver()) {\n      this.currentTurn()\n      console.log(\"---------\")\n    }\n\n  }\n\n  lose() {\n    if (this.remainingMisses === 0) {\n      console.log(\"you lost! game over\")\n      return true\n    } else {\n      return false\n    }\n  }\n\n  win() {\n    if (this.board.checkShips() === 0) {\n      console.log(\"you won! game over!\")\n      return true\n    } else {\n      return false\n    }\n  }\n\n  gameOver() {\n    if (this.win() || this.lose()) {\n      return true\n    } else {\n      return false\n    }\n  }\n\n  currentTurn() {\n    let position = this.player.getMove()\n    let row = position[0]\n    let col = position[1]\n    if (!this.board.attack(row, col)) {\n      this.remainingMisses -= 1\n      console.log(`Remaining misses: ${this.remainingMisses}`)\n    }\n    this.board.printGameBoard()\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor() {\n\n  }\n  \n  getMove() {\n    let movePos = window.prompt(\"enter a position with coordinates seperated with a space like `0 3`. Numbers must be between 0 and 5\")\n    let intPos = movePos.split(\" \").map(Number)\n    return intPos\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\nconsole.log(\"Webpack is working!\")\n\n// import PlayGame from \"./PlayGame\"\n\n\n\n\nwindow.Board = _Board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nwindow.Player = _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nwindow.Game = new _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });