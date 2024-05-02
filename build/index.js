/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/more.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const more = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (more);
//# sourceMappingURL=more.js.map

/***/ }),

/***/ "./src/components/ContentSelection.js":
/*!********************************************!*\
  !*** ./src/components/ContentSelection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



function ContentSelection({
  thisId,
  postList,
  setSelectetContent,
  selectedContent
}) {
  const [currentContent, setCurrentContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('please selcet');
  const handleContentSelect = selectedValue => {
    setSelectetContent(thisId, selectedValue);
    setCurrentContent(selectedValue);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedContent) {
      setCurrentContent(selectedContent);
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "em-content-selection-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "contentselection"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ComboboxControl, {
    label: "select content",
    value: currentContent,
    onChange: handleContentSelect,
    options: postList,
    onInputChange: inputValue => setFilteredOptions(postList.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase())))
  }));
}

/***/ }),

/***/ "./src/components/ExpoMapListItem.js":
/*!*******************************************!*\
  !*** ./src/components/ExpoMapListItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpoMapListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentSelection */ "./src/components/ContentSelection.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





function ExpoMapListItem(props) {
  const {
    booth,
    itemId,
    toggleActiveState,
    setSelectetContent
  } = props;
  const [postList, setPostList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var postArray = [];
    fetch('/wp-json/wp/v2/booth?per_page=100').then(response => response.json()).then(data => {
      data.map(post => {
        postArray.push({
          value: post.id,
          label: post.title.rendered
        });
      });
      setPostList(postArray);
    }).catch(error => {
      console.error('Error:', error);
      setError(error);
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: itemId,
    className: "element-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "element-item-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "element-item-nr"
  }, booth.nr), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ContentSelection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    thisId: itemId,
    postList: postList,
    setSelectetContent: setSelectetContent,
    selectedContent: booth.selectedContent
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: booth.active,
    onChange: () => toggleActiveState(index)
  }));
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more.js");
/* harmony import */ var _helper_svg_preparing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/svg-preparing */ "./src/helper/svg-preparing.js");
/* harmony import */ var _components_ExpoMapListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ExpoMapListItem */ "./src/components/ExpoMapListItem.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");










function Edit({
  attributes,
  setAttributes
}) {
  const {
    mapSVGId,
    mapSVGUrl,
    mapZoom,
    boothes
  } = attributes;
  const [fetchedSVG, setFetchedSVG] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [expoMap, setExpoMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [expoList, setExpoList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  //const EXPO_MAP = new MAP_SVG()

  const onSelectMedia = media => {
    setAttributes({
      mapSVGId: media.id,
      mapSVGUrl: media.url
    });
  };
  const setSelectetContent = async (itemId, selectedContent) => {
    const selectedItem = boothes.find(item => item.id === itemId);
    if (selectedItem) {
      // If the item exists, update it with the new data
      const updatedBoothes = await boothes.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            selectedContent: selectedContent
          }; // Update the selectedContent property of the matching item
        }
        return item;
      });
      await setAttributes({
        boothes: updatedBoothes
      });
    } else {
      console.error(`Item with ID ${itemId} not found.`);
    }
  };
  const fetchSVG = async () => {
    try {
      const response = await fetch(mapSVGUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch SVG');
      }
      const svgContent = await response.text();
      setFetchedSVG(svgContent); // Update state with fetched SVG content
    } catch (error) {
      console.error('There was a problem with the fetch of the SVG MAP:', error);
    }
  };

  // Fetch SVG when mapSVGUrl changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mapSVGUrl) {
      fetchSVG();
    }
  }, [mapSVGUrl]);

  // call map class and saves in expomap state
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let MAP_WRAPPER = document.querySelector('#expo-plan-wrapper');
    let MAP_SVG_IMAGE = MAP_WRAPPER.querySelector('svg');
    if (MAP_SVG_IMAGE) {
      let newExpoMap = new _helper_svg_preparing__WEBPACK_IMPORTED_MODULE_3__.MAP_SVG(MAP_SVG_IMAGE);

      // Compare the new ExpoMap with the existing one
      if (!expoMap || !isEqual(newExpoMap, expoMap)) {
        setExpoMap(newExpoMap);
      }
    }
  }, [fetchedSVG]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (expoMap) {
      let elementList = [];
      for (let index = 0; index < expoMap.ALL_ELEMENTS.length; index++) {
        const element = expoMap.ALL_ELEMENTS[index];
        const elementType = element.id.replace('_ai', '').replace('b', 'Booth').replace('z', 'Zone').replace('i', 'Info').replace('a', 'Arena').replace('-', ' ').replace('-', ' ').replace(/\d+/g, "").trim();
        const elementTypeID = element.id.replace('_ai-', '').replace(/\d+/g, "").replace('-', '');
        const elementNr = element.id.replace('_ai-', '').replace('_ai-', '').replace('-', ' ').replace(/[abiz]/g, '').trim();
        let newElement = {
          id: element.id,
          type: elementType,
          type_id: elementTypeID,
          nr: elementNr,
          active: true
        };
        elementList.push(newElement);
      }
      elementList.sort((a, b) => a.type.localeCompare(b.type) || a.nr - b.nr);
      setExpoList(elementList);
      if (boothes.length < 1) {
        setAttributes({
          boothes: elementList
        });
      }
    }
    let elementItem = document.querySelectorAll('.element-item');
  }, [expoMap]);
  const toggleActiveState = index => {
    setExpoList(prevList => {
      const updatedList = prevList.map((elem, idx) => {
        if (idx === index) {
          return {
            ...elem,
            active: !elem.active
          };
        }
        return elem;
      });
      return updatedList;
    });
  };

  //useEffect( () => console.log('-------> ',boothes) )

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
    className: "my-tab-panel",
    activeClass: "active-tab",
    orientation: "horizontal",
    initialTabName: "tab2",
    tabs: [{
      name: 'tab1',
      title: 'General',
      className: 'tab-one'
    }, {
      name: 'tab2',
      title: 'Elements',
      className: 'tab-two'
    }]
  }, tab => {
    if (tab.name === 'tab1') return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map', 'expo-plan'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
      onSelect: onSelectMedia,
      value: mapSVGId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        className: mapSVGId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, mapSVGId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose your svg map', 'Expo Plan'), attributes != undefined && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ResponsiveWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mapSVGUrl,
        height: "300px",
        width: "300px",
        style: {
          height: "300px"
        }
      })))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
      label: "Zoom",
      allowReset: true,
      resetFallbackValue: 1,
      step: .1,
      withInputField: true,
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
      separatorType: "topFullWidth",
      trackColor: "blue",
      isShiftStepEnabled: true,
      marks: [{
        value: 0,
        label: '0'
      }, {
        value: 2,
        label: '1'
      }, {
        value: 10,
        label: '10'
      }],
      railColor: "grey",
      renderTooltipContent: () => mapZoom,
      value: mapZoom,
      onChange: value => setAttributes({
        mapZoom: value
      }),
      min: 0,
      max: 10
    }));
    if (tab.name === 'tab2') return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, expoList && expoList.map((item, index) => {
      const isFirstOfType = index === 0 || item.type !== expoList[index - 1].type;
      if (isFirstOfType) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
          title: item.type,
          initialOpen: false
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ExpoMapListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          booth: boothes.find(booth => item.id === booth.id),
          itemId: item.id,
          toggleActiveState: toggleActiveState,
          setSelectetContent: setSelectetContent
        }), expoList.slice(index + 1).map((nextItem, nextIndex) => nextItem.type === item.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ExpoMapListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index + nextIndex + 1,
          booth: boothes.find(booth => nextItem.id === booth.id),
          itemId: nextItem.id,
          index: index + nextIndex + 1,
          toggleActiveState: toggleActiveState,
          setSelectetContent: setSelectetContent
        })));
      } else {
        return null;
      }
    }));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "expo-plan-wrapper"
  }, fetchedSVG && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "expo-plan-image-container",
    style: {
      transform: `scale(${mapZoom})`
    },
    dangerouslySetInnerHTML: {
      __html: fetchedSVG
    }
  }))));
}

/***/ }),

/***/ "./src/helper/svg-preparing.js":
/*!*************************************!*\
  !*** ./src/helper/svg-preparing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAP_SVG: () => (/* binding */ MAP_SVG)
/* harmony export */ });
class MAP_SVG {
  constructor(SVG) {
    this.ALL_ELEMENTS = SVG.querySelectorAll('[id^="_ai-"]');
    this.SORTED_ELEMNTS = [];
    this.ALL_ELEMENTS.forEach(element => {
      // Sort interactive elements by categories
      let sort_key = element.id.split('-')[1];
      if (!this.SORTED_ELEMNTS[sort_key]) {
        this.SORTED_ELEMNTS[sort_key] = [];
      }
      this.SORTED_ELEMNTS[sort_key].push(element);

      // Element hover effect
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover-element');
      });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-element');
      });
    });
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"aa-expo-plan/expo-plan","version":"1.1.00","title":"Expo Plan","category":"widgets","icon":"location-alt","description":"Create a interactive expo map/plan","example":{},"supports":{"html":false},"textdomain":"expo-plan","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js","attributes":{"mapSVGId":{"type":"number","default":0},"mapSVGUrl":{"type":"string","default":""},"mapZoom":{"type":"number","default":1},"boothes":{"type":"array","default":[]}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkexpo_plan"] = globalThis["webpackChunkexpo_plan"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map