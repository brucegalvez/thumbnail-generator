/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/demoDay.js":
/*!**********************************!*\
  !*** ./src/templates/demoDay.js ***!
  \**********************************/
/***/ ((module) => {

eval("var createDemoDay = function createDemoDay(canvas, ctx, title, subtitle, img) {\n  var cw = canvas.width; // Add blue background\n\n  ctx.fillStyle = \"#75B0F5\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height); // Write the title\n\n  ctx.font = \"\".concat(cw / 16, \"px Arial\"); // ctx.rotate(0.1);\n\n  ctx.fillStyle = \"#ffffff\";\n  title.map(function (line, i) {\n    ctx.fillText(line.toUpperCase(), 50, 100 + 30 * i);\n  }); // Write subtitle\n\n  ctx.font = \"\".concat(cw / 24, \"px Arial\"); // ctx.rotate(0.1);\n\n  ctx.fillStyle = \"#ffffff\";\n  ctx.fillText(subtitle[0].toUpperCase(), 50, cw / 24 * 22); // Draw square\n\n  ctx.strokeStyle = \"#fff\";\n  ctx.lineWidth = cw / 200;\n  ctx.beginPath();\n  ctx.lineTo(cw / 24, cw / 24);\n  ctx.lineTo(cw / 24, cw / 24 * 11);\n  ctx.lineTo(cw / 24 * 20, cw / 24 * 11);\n  ctx.lineTo(cw / 24 * 20, cw / 24);\n  ctx.lineTo(cw / 24, cw / 24);\n  ctx.stroke();\n  return canvas;\n};\n\nmodule.exports = createDemoDay;\n\n//# sourceURL=webpack://thumbnail-generator/./src/templates/demoDay.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!********************************!*\
  !*** ./previewFiles/script.js ***!
  \********************************/
eval("// const breakString = require(\"../src/utils/breakString\");\nvar createDemoDay = __webpack_require__(/*! ../src/templates/demoDay */ \"./src/templates/demoDay.js\");\n\nvar title = [\"Making\", \"Impactful\", \"Decisions\"];\nvar subtitle = [\"Rick Smith\"];\nvar type = \"demoday\";\nvar img = \"\"; // client canvas setup\n\nvar canvas = document.getElementById(\"canvas\");\nvar resolution = 40;\nvar width = resolution * 16;\nvar height = resolution * 9;\ncanvas.setAttribute(\"width\", \"\".concat(width, \"px\"));\ncanvas.setAttribute(\"height\", \"\".concat(height, \"px\"));\ncanvas.style.border = \"1px solid black\";\nvar ctx = canvas.getContext(\"2d\"); // call controller\n\ncreateDemoDay(canvas, ctx, title, subtitle, img);\n\n//# sourceURL=webpack://thumbnail-generator/./previewFiles/script.js?");
})();

/******/ })()
;