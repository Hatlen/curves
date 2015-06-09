/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	'use-strict'
	var
	graph = document.querySelector('.easing-block'),
	eases = __webpack_require__(1),
	fragment = document.createDocumentFragment(),
	new_node,
	data_string,
	x,
	y,
	i;

	graph.remove();
	Object.keys(eases).forEach(function(eases_key) {
	  new_node = graph.cloneNode(true);
	  data_string = '';
	  for (i = 0; i <= 100; i++) {
	    x = i / 100;
	    y = 1 - eases[eases_key](x);
	    data_string += x + ',' + y + ' ';
	  }
	  new_node.querySelector('path').setAttribute('d', 'M ' + data_string);
	  new_node.querySelector('h1').innerText = eases_key;
	  fragment.appendChild(new_node)
	});
	document.body.appendChild(fragment);
	})()


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		'backInOut': __webpack_require__(2),
		'backIn': __webpack_require__(3),
		'backOut': __webpack_require__(4),
		'bounceInOut': __webpack_require__(5),
		'bounceIn': __webpack_require__(7),
		'bounceOut': __webpack_require__(6),
		'circInOut': __webpack_require__(8),
		'circIn': __webpack_require__(9),
		'circOut': __webpack_require__(10),
		'cubicInOut': __webpack_require__(11),
		'cubicIn': __webpack_require__(12),
		'cubicOut': __webpack_require__(13),
		'elasticInOut': __webpack_require__(14),
		'elasticIn': __webpack_require__(15),
		'elasticOut': __webpack_require__(16),
		'expoInOut': __webpack_require__(17),
		'expoIn': __webpack_require__(18),
		'expoOut': __webpack_require__(19),
		'linear': __webpack_require__(20),
		'quadInOut': __webpack_require__(21),
		'quadIn': __webpack_require__(22),
		'quadOut': __webpack_require__(23),
		'quartInOut': __webpack_require__(24),
		'quartIn': __webpack_require__(25),
		'quartOut': __webpack_require__(26),
		'quintInOut': __webpack_require__(27),
		'quintIn': __webpack_require__(28),
		'quintOut': __webpack_require__(29),
		'sineInOut': __webpack_require__(30),
		'sineIn': __webpack_require__(31),
		'sineOut': __webpack_require__(32)
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	function backInOut(t) {
	  var s = 1.70158 * 1.525
	  if ((t *= 2) < 1)
	    return 0.5 * (t * t * ((s + 1) * t - s))
	  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
	}

	module.exports = backInOut

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	function backIn(t) {
	  var s = 1.70158
	  return t * t * ((s + 1) * t - s)
	}

	module.exports = backIn

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	function backOut(t) {
	  var s = 1.70158
	  return --t * t * ((s + 1) * t + s) + 1
	}

	module.exports = backOut

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var bounceOut = __webpack_require__(6)

	function bounceInOut(t) {
	  return t < 0.5
	    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
	    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
	}

	module.exports = bounceInOut

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	function bounceOut(t) {
	  var a = 4.0 / 11.0
	  var b = 8.0 / 11.0
	  var c = 9.0 / 10.0

	  var ca = 4356.0 / 361.0
	  var cb = 35442.0 / 1805.0
	  var cc = 16061.0 / 1805.0

	  var t2 = t * t

	  return t < a
	    ? 7.5625 * t2
	    : t < b
	      ? 9.075 * t2 - 9.9 * t + 3.4
	      : t < c
	        ? ca * t2 - cb * t + cc
	        : 10.8 * t * t - 20.52 * t + 10.72
	}

	module.exports = bounceOut

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var bounceOut = __webpack_require__(6)

	function bounceIn(t) {
	  return 1.0 - bounceOut(1.0 - t)
	}

	module.exports = bounceIn

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	function circInOut(t) {
	  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
	  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
	}

	module.exports = circInOut

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	function circIn(t) {
	  return 1.0 - Math.sqrt(1.0 - t * t)
	}

	module.exports = circIn

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	function circOut(t) {
	  return Math.sqrt(1 - ( --t * t ))
	}

	module.exports = circOut

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	function cubicInOut(t) {
	  return t < 0.5
	    ? 4.0 * t * t * t
	    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
	}

	module.exports = cubicInOut

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	function cubicIn(t) {
	  return t * t * t
	}

	module.exports = cubicIn

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	function cubicOut(t) {
	  var f = t - 1.0
	  return f * f * f + 1.0
	}

	module.exports = cubicOut

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	function elasticInOut(t) {
	  return t < 0.5
	    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
	    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
	}

	module.exports = elasticInOut

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	function elasticIn(t) {
	  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
	}

	module.exports = elasticIn

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	function elasticOut(t) {
	  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
	}

	module.exports = elasticOut

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	function expoInOut(t) {
	  return (t === 0.0 || t === 1.0)
	    ? t
	    : t < 0.5
	      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
	      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
	}

	module.exports = expoInOut

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	function expoIn(t) {
	  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
	}

	module.exports = expoIn

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	function expoOut(t) {
	  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
	}

	module.exports = expoOut

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	function linear(t) {
	  return t
	}

	module.exports = linear

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	function quadInOut(t) {
	    t /= 0.5
	    if (t < 1) return 0.5*t*t
	    t--
	    return -0.5 * (t*(t-2) - 1)
	}

	module.exports = quadInOut

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	function quadIn(t) {
	  return t * t
	}

	module.exports = quadIn

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	function quadOut(t) {
	  return -t * (t - 2.0)
	}

	module.exports = quadOut

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	function quarticInOut(t) {
	  return t < 0.5
	    ? +8.0 * Math.pow(t, 4.0)
	    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
	}

	module.exports = quarticInOut

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	function quarticIn(t) {
	  return Math.pow(t, 4.0)
	}

	module.exports = quarticIn

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	function quarticOut(t) {
	  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
	}

	module.exports = quarticOut

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	function qinticInOut(t) {
	    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
	    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
	}

	module.exports = qinticInOut

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	function qinticIn(t) {
	  return t * t * t * t * t
	}

	module.exports = qinticIn

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	function qinticOut(t) {
	  return --t * t * t * t * t + 1
	}

	module.exports = qinticOut

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	function sineInOut(t) {
	  return -0.5 * (Math.cos(Math.PI*t) - 1)
	}

	module.exports = sineInOut

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	function sineIn(t) {
	  return 1 - Math.cos( t * Math.PI / 2 )
	}

	module.exports = sineIn

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	function sineOut(t) {
	  return Math.sin(t * Math.PI/2)
	}

	module.exports = sineOut

/***/ }
/******/ ]);