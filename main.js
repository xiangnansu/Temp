"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); return _classApplyDescriptorDestructureSet(receiver, descriptor); }

function _classApplyDescriptorDestructureSet(receiver, descriptor) { if (descriptor.set) { if (!("__destrObj" in descriptor)) { descriptor.__destrObj = { set value(v) { descriptor.set.call(receiver, v); } }; } return descriptor.__destrObj; } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } return descriptor; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

(function Xiangnansu() {
  'use strict';

  window.focus();

  window.ondragstart = function () {
    return false;
  };

  var _element = /*#__PURE__*/new WeakMap();

  var _hTimeout = /*#__PURE__*/new WeakMap();

  var _mousedown = /*#__PURE__*/new WeakSet();

  var _mousemove = /*#__PURE__*/new WeakSet();

  var _mouseup = /*#__PURE__*/new WeakSet();

  var Cursor = /*#__PURE__*/function () {
    function Cursor(element) {
      var _this = this;

      _classCallCheck(this, Cursor);

      _classPrivateMethodInitSpec(this, _mouseup);

      _classPrivateMethodInitSpec(this, _mousemove);

      _classPrivateMethodInitSpec(this, _mousedown);

      _classPrivateFieldInitSpec(this, _element, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _hTimeout, {
        writable: true,
        value: void 0
      });

      _defineProperty(this, "$mousedown", void 0);

      _defineProperty(this, "$mousemove", void 0);

      _defineProperty(this, "$mouseup", void 0);

      _classPrivateFieldSet(this, _element, new Element(element));

      var mousedown = function mousedown(e) {
        if (Global.touchable === true) {
          return;
        }

        _classPrivateMethodGet(_this, _mousedown, _mousedown2).call(_this, e);
      };

      var mousemove = function mousemove(e) {
        if (Global.touchable === true) {
          return;
        }

        _classPrivateMethodGet(_this, _mousemove, _mousemove2).call(_this, e);
      };

      var mouseup = function mouseup(e) {
        if (Global.touchable === true) {
          return;
        }

        _classPrivateMethodGet(_this, _mouseup, _mouseup2).call(_this, e);
      };

      var touchend = function touchend(e) {
        clearTimeout(_classPrivateFieldGet(_this, _hTimeout));

        _classPrivateMethodGet(_this, _mouseup, _mouseup2).call(_this, e);

        e.preventDefault();
      };

      var touchmove = function touchmove(e) {
        clearTimeout(_classPrivateFieldGet(_this, _hTimeout));

        _classPrivateFieldSet(_this, _hTimeout, setTimeout(function () {
          if (Draggable.touchstart(e)) {
            _classPrivateMethodGet(_this, _mousedown, _mousedown2).call(_this, e);
          }
        }, 0.20 * 1000));

        _classPrivateMethodGet(_this, _mousemove, _mousemove2).call(_this, e);

        e.preventDefault();
      };

      var touchstart = function touchstart(e) {
        Global.touchable = true;

        if (Draggable.touchstart(e)) {
          _classPrivateMethodGet(_this, _mousedown, _mousedown2).call(_this, e);
        }

        if (_classPrivateFieldGet(_this, _element).visible) {
          var _Utility$getCursorPos = Utility.getCursorPosition(e);

          var _Utility$getCursorPos2 = _slicedToArray(_Utility$getCursorPos, 2);

          _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _left).value = _Utility$getCursorPos2[0];
          _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _top).value = _Utility$getCursorPos2[1];
          _this.element.left = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
          _this.element.top = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
        }

        e.preventDefault();
      };

      Global.frame.addEventListener("mousedown", mousedown, false);
      Global.frame.addEventListener("mousemove", mousemove, false);
      Global.frame.addEventListener("mouseup", mouseup, false);
      Global.frame.addEventListener("touchstart", touchstart, false);
      Global.frame.addEventListener("touchmove", touchmove, false);
      Global.frame.addEventListener("touchend", touchend, false);
    }

    _createClass(Cursor, [{
      key: "element",
      get: function get() {
        return _classPrivateFieldGet(this, _element);
      }
    }, {
      key: "style",
      get: function get() {
        return _classPrivateFieldGet(this, _element).style;
      }
    }, {
      key: "visible",
      set: function set(value) {
        _classPrivateFieldGet(this, _element).visible = value;
        _classPrivateFieldGet(this, _element).left = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
        _classPrivateFieldGet(this, _element).top = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
      }
    }], [{
      key: "left",
      get: function get() {
        return _classStaticPrivateFieldSpecGet(this, Cursor, _left);
      }
    }, {
      key: "top",
      get: function get() {
        return _classStaticPrivateFieldSpecGet(this, Cursor, _top);
      }
    }]);

    return Cursor;
  }();

  function _mousedown2(e) {
    if (_classPrivateFieldGet(this, _element).visible) {
      var _Utility$getCursorPos7 = Utility.getCursorPosition(e);

      var _Utility$getCursorPos8 = _slicedToArray(_Utility$getCursorPos7, 2);

      _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _left).value = _Utility$getCursorPos8[0];
      _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _top).value = _Utility$getCursorPos8[1];
      this.$mousedown && this.$mousedown(_classStaticPrivateFieldSpecGet(Cursor, Cursor, _left), _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top));
    }
  }

  function _mousemove2(e) {
    if (_classPrivateFieldGet(this, _element).visible) {
      var _Utility$getCursorPos9 = Utility.getCursorPosition(e);

      var _Utility$getCursorPos10 = _slicedToArray(_Utility$getCursorPos9, 2);

      _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _left).value = _Utility$getCursorPos10[0];
      _classStaticPrivateFieldDestructureSet(Cursor, Cursor, _top).value = _Utility$getCursorPos10[1];
      this.element.left = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
      this.element.top = _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
      this.$mousemove && this.$mousemove(_classStaticPrivateFieldSpecGet(Cursor, Cursor, _left), _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top));
    }
  }

  function _mouseup2(e) {
    if (_classPrivateFieldGet(this, _element).visible) {
      this.$mouseup && this.$mouseup(_classStaticPrivateFieldSpecGet(Cursor, Cursor, _left), _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top));
    }
  }

  var _left = {
    writable: true,
    value: void 0
  };
  var _top = {
    writable: true,
    value: void 0
  };

  var _draggable = /*#__PURE__*/new WeakMap();

  var _element2 = /*#__PURE__*/new WeakMap();

  var _lastMoveX = /*#__PURE__*/new WeakMap();

  var _lastMoveY = /*#__PURE__*/new WeakMap();

  var _offsetX = /*#__PURE__*/new WeakMap();

  var _offsetY = /*#__PURE__*/new WeakMap();

  var _originalX = /*#__PURE__*/new WeakMap();

  var _originalY = /*#__PURE__*/new WeakMap();

  var _previousZIndex = /*#__PURE__*/new WeakMap();

  var _mousedown3 = /*#__PURE__*/new WeakSet();

  var _mousemove3 = /*#__PURE__*/new WeakSet();

  var _mouseup3 = /*#__PURE__*/new WeakSet();

  var Draggable = /*#__PURE__*/function () {
    function Draggable() {
      _classCallCheck(this, Draggable);

      _classPrivateMethodInitSpec(this, _mouseup3);

      _classPrivateMethodInitSpec(this, _mousemove3);

      _classPrivateMethodInitSpec(this, _mousedown3);

      _classPrivateFieldInitSpec(this, _draggable, {
        writable: true,
        value: true
      });

      _classPrivateFieldInitSpec(this, _element2, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _lastMoveX, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _lastMoveY, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _offsetX, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _offsetY, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _originalX, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _originalY, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _previousZIndex, {
        writable: true,
        value: void 0
      });

      _defineProperty(this, "$mousedown", void 0);

      _defineProperty(this, "$mouseenter", void 0);

      _defineProperty(this, "$mouseleave", void 0);

      _defineProperty(this, "$mousemove", void 0);

      _defineProperty(this, "$mouseup", void 0);

      _classStaticPrivateFieldSpecGet(Draggable, Draggable, _draggers).push(this);
    }

    _createClass(Draggable, [{
      key: "draggable",
      set: function set(value) {
        _classPrivateFieldSet(this, _draggable, value);
      }
    }, {
      key: "element",
      get: function get() {
        return _classPrivateFieldGet(this, _element2);
      }
    }, {
      key: "previousXIndex",
      get: function get() {
        return _classPrivateFieldGet(this, _previousZIndex);
      }
    }, {
      key: "initialize",
      value: function initialize(element) {
        var _this2 = this;

        _classPrivateFieldSet(this, _element2, new Element(element));

        var mousedown = function mousedown(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this2, _mousedown3, _mousedown4).call(_this2, e);
        };

        var mouseenter = function mouseenter(e) {
          if (Global.touchable) {
            return;
          }

          _this2.$mouseenter && _this2.$mouseenter();
        };

        var mouseleave = function mouseleave(e) {
          if (Global.touchable) {
            return;
          }

          _this2.$mouseleave && _this2.$mouseleave();
        };

        var mousemove = function mousemove(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this2, _mousemove3, _mousemove4).call(_this2, e);
        };

        var mouseup = function mouseup(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this2, _mouseup3, _mouseup4).call(_this2, e);
        };

        var touchend = function touchend(e) {
          if (Droppable.touchend(e) === false) {
            _classPrivateMethodGet(_this2, _mouseup3, _mouseup4).call(_this2, e);
          }

          e.preventDefault();
        };

        var touchmove = function touchmove(e) {
          _classPrivateMethodGet(_this2, _mousemove3, _mousemove4).call(_this2, e);

          Droppable.touchmove(e);
          e.preventDefault();
        };

        var touchstart = function touchstart(e) {
          Global.touchable = true;

          _classPrivateMethodGet(_this2, _mousedown3, _mousedown4).call(_this2, e);

          e.preventDefault();
        };

        _classPrivateFieldGet(this, _element2).addEventListener("mousedown", mousedown, false);

        _classPrivateFieldGet(this, _element2).addEventListener("mouseenter", mouseenter, false);

        _classPrivateFieldGet(this, _element2).addEventListener("mouseleave", mouseleave, false);

        Global.frame.addEventListener("mousemove", mousemove, false);
        Global.frame.addEventListener("mouseup", mouseup, false);

        _classPrivateFieldGet(this, _element2).addEventListener("touchstart", touchstart, false);

        Global.frame.addEventListener("touchmove", touchmove, false);
        Global.frame.addEventListener("touchend", touchend, false);
      }
    }, {
      key: "restore",
      value: function restore() {
        _classPrivateFieldGet(this, _element2).style["pointer-events"] = "auto";
        _classPrivateFieldGet(this, _element2).style["z-index"] = _classPrivateFieldGet(this, _previousZIndex);
        _classPrivateFieldGet(this, _element2).left = _classPrivateFieldGet(this, _originalX);
        _classPrivateFieldGet(this, _element2).top = _classPrivateFieldGet(this, _originalY);
      }
    }], [{
      key: "dragger",
      get: function get() {
        return _classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger);
      }
    }, {
      key: "release",
      value: function release() {
        if (_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger) !== null) {
          _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger), _element2).style["pointer-events"] = "auto";
          _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger), _element2).style["z-index"] = _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger), _previousZIndex);

          _classStaticPrivateFieldSpecSet(Draggable, Draggable, _dragger, null);
        }
      }
    }, {
      key: "touchstart",
      value: function touchstart(e) {
        for (var i = 0; i < _classStaticPrivateFieldSpecGet(Draggable, Draggable, _draggers).length; i++) {
          var _Utility$getCursorPos3 = Utility.getCursorPosition(e),
              _Utility$getCursorPos4 = _slicedToArray(_Utility$getCursorPos3, 2),
              left = _Utility$getCursorPos4[0],
              top = _Utility$getCursorPos4[1];

          var dragger = _classStaticPrivateFieldSpecGet(Draggable, Draggable, _draggers)[i];

          if (Utility.isIntersectPoint({
            left: left,
            top: top
          }, dragger.element.rect)) {
            _classPrivateMethodGet(dragger, _mousedown3, _mousedown4).call(dragger, e);

            return true;
          }
        }

        return false;
      }
    }]);

    return Draggable;
  }();

  function _mousedown4(e) {
    if (_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger) === null && _classPrivateFieldGet(this, _draggable) === true) {
      _classStaticPrivateFieldSpecSet(Draggable, Draggable, _dragger, this);

      _classPrivateFieldSet(this, _previousZIndex, _classPrivateFieldGet(this, _element2).style["z-index"]);

      _classPrivateFieldGet(this, _element2).style["z-index"] = 999;
      _classPrivateFieldGet(this, _element2).style["pointer-events"] = "none";

      _classPrivateFieldSet(this, _originalX, _classPrivateFieldGet(this, _element2).left);

      _classPrivateFieldSet(this, _originalY, _classPrivateFieldGet(this, _element2).top);

      var _Utility$getCursorPos11 = Utility.getCursorPosition(e),
          _Utility$getCursorPos12 = _slicedToArray(_Utility$getCursorPos11, 2),
          left = _Utility$getCursorPos12[0],
          top = _Utility$getCursorPos12[1];

      _classPrivateFieldSet(this, _offsetX, left - _classPrivateFieldGet(this, _element2).left);

      _classPrivateFieldSet(this, _offsetY, top - _classPrivateFieldGet(this, _element2).top);

      if ((this.$mousedown && this.$mousedown(left, top)) === "reject") {
        _classPrivateFieldGet(this, _element2).style["pointer-events"] = "auto";

        _classStaticPrivateFieldSpecSet(Draggable, Draggable, _dragger, null);
      }
    }
  }

  function _mousemove4(e) {
    if (_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger) === this) {
      var _Utility$getCursorPos13 = Utility.getCursorPosition(e),
          _Utility$getCursorPos14 = _slicedToArray(_Utility$getCursorPos13, 2),
          left = _Utility$getCursorPos14[0],
          top = _Utility$getCursorPos14[1];

      _classPrivateFieldGet(this, _element2).left = left - _classPrivateFieldGet(this, _offsetX);
      _classPrivateFieldGet(this, _element2).top = top - _classPrivateFieldGet(this, _offsetY);
      this.$mousemove && this.$mousemove(left, top);

      _classPrivateFieldSet(this, _lastMoveX, left);

      _classPrivateFieldSet(this, _lastMoveY, top);
    }
  }

  function _mouseup4(e) {
    if (_classStaticPrivateFieldSpecGet(Draggable, Draggable, _dragger) === this) {
      if (this.$mouseup) {
        if (this.$mouseup(_classPrivateFieldGet(this, _lastMoveX), _classPrivateFieldGet(this, _lastMoveY))) {
          Draggable.prototype.restore.call(this);
        }
      }

      _classStaticPrivateFieldSpecSet(Draggable, Draggable, _dragger, null);
    }
  }

  var _dragger = {
    writable: true,
    value: null
  };
  var _draggers = {
    writable: true,
    value: new Array()
  };

  var _element3 = /*#__PURE__*/new WeakMap();

  var _entered = /*#__PURE__*/new WeakMap();

  var _mouseenter = /*#__PURE__*/new WeakSet();

  var _mouseleave = /*#__PURE__*/new WeakSet();

  var _mouseup5 = /*#__PURE__*/new WeakSet();

  var Droppable = /*#__PURE__*/function () {
    function Droppable() {
      _classCallCheck(this, Droppable);

      _classPrivateMethodInitSpec(this, _mouseup5);

      _classPrivateMethodInitSpec(this, _mouseleave);

      _classPrivateMethodInitSpec(this, _mouseenter);

      _classPrivateFieldInitSpec(this, _element3, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _entered, {
        writable: true,
        value: false
      });

      _defineProperty(this, "$mouseenter", void 0);

      _defineProperty(this, "$mouseleave", void 0);

      _defineProperty(this, "$mouseup", void 0);

      _defineProperty(this, "acceptable", true);

      _defineProperty(this, "acceptCallback", void 0);

      _defineProperty(this, "mouseUpEvent", void 0);

      _defineProperty(this, "rejectCallback", void 0);
    }

    _createClass(Droppable, [{
      key: "element",
      get: function get() {
        return _classPrivateFieldGet(this, _element3);
      }
    }, {
      key: "initialize",
      value: function initialize(element) {
        var _this3 = this;

        _classPrivateFieldSet(this, _element3, new Element(element));

        _classStaticPrivateFieldSpecGet(Droppable, Droppable, _droppers).push(this);

        var mouseenter = function mouseenter(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this3, _mouseenter, _mouseenter2).call(_this3);
        };

        var mouseleave = function mouseleave(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this3, _mouseleave, _mouseleave2).call(_this3);
        };

        var mouseup = function mouseup(e) {
          if (Global.touchable) {
            return;
          }

          _classPrivateMethodGet(_this3, _mouseup5, _mouseup6).call(_this3);
        };

        var touchend = function touchend(e) {
          _classPrivateMethodGet(_this3, _mouseup5, _mouseup6).call(_this3);

          e.preventDefault();
        };

        _classPrivateFieldGet(this, _element3).addEventListener("mouseenter", mouseenter, false);

        _classPrivateFieldGet(this, _element3).addEventListener("mouseleave", mouseleave, false);

        _classPrivateFieldGet(this, _element3).addEventListener("mouseup", mouseup, false);

        Global.frame.addEventListener("touchend", touchend, false);
      }
    }], [{
      key: "touchend",
      value: function touchend(e) {
        for (var i = 0; i < _classStaticPrivateFieldSpecGet(Droppable, Droppable, _droppers).length; i++) {
          var dropper = _classStaticPrivateFieldSpecGet(Droppable, Droppable, _droppers)[i];

          if (dropper.entered) {
            _classPrivateMethodGet(dropper, _mouseup5, _mouseup6).call(dropper, e);

            return true;
          }
        }

        return false;
      }
    }, {
      key: "touchmove",
      value: function touchmove(e) {
        for (var i = 0; i < _classStaticPrivateFieldSpecGet(Droppable, Droppable, _droppers).length; i++) {
          var _Utility$getCursorPos5 = Utility.getCursorPosition(e),
              _Utility$getCursorPos6 = _slicedToArray(_Utility$getCursorPos5, 2),
              left = _Utility$getCursorPos6[0],
              top = _Utility$getCursorPos6[1];

          var dropper = _classStaticPrivateFieldSpecGet(Droppable, Droppable, _droppers)[i];

          if (Utility.isIntersectPoint({
            left: left,
            top: top
          }, dropper.element.rect)) {
            if (dropper.entered) {
              continue;
            }

            dropper.entered = true;

            _classPrivateMethodGet(dropper, _mouseenter, _mouseenter2).call(dropper);
          } else if (dropper.entered === true) {
            dropper.entered = false;

            _classPrivateMethodGet(dropper, _mouseleave, _mouseleave2).call(dropper);
          }
        }
      }
    }]);

    return Droppable;
  }();

  function _mouseenter2() {
    if (Draggable.dragger !== null) {
      this.$mouseenter && this.$mouseenter(Draggable.dragger);
    }
  }

  function _mouseleave2() {
    if (Draggable.dragger !== null) {
      this.$mouseleave && this.$mouseleave(Draggable.dragger);
    }
  }

  function _mouseup6() {
    if (Draggable.dragger !== null) {
      this.$mouseup && this.$mouseup(Draggable.dragger);
      Draggable.release();
    }
  }

  var _droppers = {
    writable: true,
    value: new Array()
  };

  var _element4 = /*#__PURE__*/new WeakMap();

  var _handlers = /*#__PURE__*/new WeakMap();

  var Element = /*#__PURE__*/function () {
    function Element(element) {
      _classCallCheck(this, Element);

      _classPrivateFieldInitSpec(this, _element4, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _handlers, {
        writable: true,
        value: new Array()
      });

      _classPrivateFieldSet(this, _element4, element);
    }

    _createClass(Element, [{
      key: "bottom",
      get: function get() {
        return this.top + this.height;
      },
      set: function set(value) {
        this.top = value - this.height;
      }
    }, {
      key: "children",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).children;
      }
    }, {
      key: "element",
      get: function get() {
        return _classPrivateFieldGet(this, _element4);
      }
    }, {
      key: "left",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).getBoundingClientRect().left - Global.frame.getBoundingClientRect().left;
      },
      set: function set(value) {
        _classPrivateFieldGet(this, _element4).style["left"] = value - (1 - this.scale.x) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _element4)).width) / 2.0 + "px";
      }
    }, {
      key: "height",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).getBoundingClientRect().height;
      },
      set: function set(value) {
        _classPrivateFieldGet(this, _element4).style["height"] = value + "px";
      }
    }, {
      key: "rect",
      get: function get() {
        return {
          left: this.left,
          top: this.top,
          width: this.width,
          height: this.height,
          right: this.left + this.width,
          bottom: this.top + this.height
        };
      }
    }, {
      key: "right",
      get: function get() {
        return this.left + this.width;
      },
      set: function set(value) {
        this.left = value - this.width;
      }
    }, {
      key: "scale",
      get: function get() {
        return {
          x: _classPrivateFieldGet(this, _element4).getBoundingClientRect().width / _classPrivateFieldGet(this, _element4).offsetWidth,
          y: _classPrivateFieldGet(this, _element4).getBoundingClientRect().height / _classPrivateFieldGet(this, _element4).offsetHeight
        };
      }
    }, {
      key: "style",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).style;
      }
    }, {
      key: "top",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).getBoundingClientRect().top - Global.frame.getBoundingClientRect().top;
      },
      set: function set(value) {
        _classPrivateFieldGet(this, _element4).style["top"] = value - (1 - this.scale.y) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _element4)).height) / 2.0 + "px";
      }
    }, {
      key: "visible",
      get: function get() {
        return getComputedStyle(_classPrivateFieldGet(this, _element4)).display === "none" ? false : true;
      },
      set: function set(value) {
        _classPrivateFieldGet(this, _element4).style["display"] = value ? "block" : "none";
      }
    }, {
      key: "width",
      get: function get() {
        return _classPrivateFieldGet(this, _element4).getBoundingClientRect().width;
      },
      set: function set(value) {
        _classPrivateFieldGet(this, _element4).style["width"] = value + "px";
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(event, handler) {
        _classPrivateFieldGet(this, _element4).addEventListener(event, handler);

        for (var i = 0; i < _classPrivateFieldGet(this, _handlers).length; i++) {
          if (_classPrivateFieldGet(this, _handlers)[i] === null) {
            _classPrivateFieldGet(this, _handlers)[i] = handler;
            return i;
          }
        }

        return _classPrivateFieldGet(this, _handlers).push(handler) - 1;
      }
    }, {
      key: "getComputedStyle",
      value: function getComputedStyle() {
        return this.getComputedStyle(_classPrivateFieldGet(this, _element4).get);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(event, handler) {
        _classPrivateFieldGet(this, _element4).removeEventListener(event, handler);

        for (var i = 0; i < _classPrivateFieldGet(this, _handlers).length; i++) {
          if (_classPrivateFieldGet(this, _handlers)[i] === handler) {
            _classPrivateFieldGet(this, _handlers)[i] = null;
          }
        }
      }
    }, {
      key: "removeEventListenerByIndex",
      value: function removeEventListenerByIndex(event, index) {
        _classPrivateFieldGet(this, _element4).removeEventListener(event, _classPrivateFieldGet(this, _handlers)[index]);

        _classPrivateFieldGet(this, _handlers)[index] = null;
      }
    }]);

    return Element;
  }();

  var Global = /*#__PURE__*/function () {
    function Global() {
      _classCallCheck(this, Global);
    }

    _createClass(Global, null, [{
      key: "frame",
      get: function get() {
        return _classStaticPrivateFieldSpecGet(Global, Global, _frame);
      }
    }, {
      key: "touchable",
      get: function get() {
        return _classStaticPrivateFieldSpecGet(Global, Global, _touchable);
      },
      set: function set(value) {
        if (_classStaticPrivateFieldSpecGet(Global, Global, _touchable) === false) {
          _classStaticPrivateFieldSpecSet(Global, Global, _touchable, true);
        }
      }
    }]);

    return Global;
  }();

  var _frame = {
    writable: true,
    value: document.querySelector("#frame")
  };
  var _touchable = {
    writable: true,
    value: false
  };

  var Utility = /*#__PURE__*/function () {
    function Utility() {
      _classCallCheck(this, Utility);
    }

    _createClass(Utility, null, [{
      key: "getRandomArray",
      value: function getRandomArray(buffer) {
        for (var i = 0; i < buffer.length; i++) {
          var index = Utility.getRandom(buffer.length);
          var _ref = [buffer[index], buffer[i]];
          buffer[i] = _ref[0];
          buffer[index] = _ref[1];
        }

        return buffer;
      }
    }, {
      key: "createNonRepetitiveRandom",
      value: function createNonRepetitiveRandom(maxValue, length) {
        if (length === undefined) {
          length = maxValue;
        }

        var buffer = new Array(length);

        for (var i = 0; i < buffer.length; i++) {
          buffer[i] = i % maxValue;
        }

        for (var _i2 = 0; _i2 < buffer.length; _i2++) {
          var index = Utility.getRandom(buffer.length);
          var _ref2 = [buffer[index], buffer[_i2]];
          buffer[_i2] = _ref2[0];
          buffer[index] = _ref2[1];
        }

        return {
          getRepetitiveRandom: function getRepetitiveRandom() {
            return buffer.shift();
          },
          getBuffer: function getBuffer() {
            return buffer;
          }
        };
      }
    }, {
      key: "getCursorPosition",
      value: function getCursorPosition(e) {
        if (e.touches === undefined) {
          return [e.clientX - Global.frame.getBoundingClientRect().left, e.clientY - Global.frame.getBoundingClientRect().top];
        }

        return [e.touches[0].clientX - Global.frame.getBoundingClientRect().left, e.touches[0].clientY - Global.frame.getBoundingClientRect().top];
      }
    }, {
      key: "getDistance",
      value: function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
      }
    }, {
      key: "getRandom",
      value: function getRandom(maxValue) {
        return Math.floor(Math.random() * maxValue);
      }
    }, {
      key: "getRandomSort",
      value: function getRandomSort(buffer) {
        return Utility.createNonRepetitiveRandom(0, buffer).getBuffer();
      }
    }, {
      key: "isBaiduBrowser",
      value: function isBaiduBrowser() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf("bidu") >= 0 || userAgent.indexOf("baidu") >= 0 || false;
      }
    }, {
      key: "isFirefoxBrowser",
      value: function isFirefoxBrowser() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf("firefox") >= 0 || userAgent.indexOf("fxios/i") >= 0 || false;
      }
    }, {
      key: "waitForSeconds",
      value: function waitForSeconds(seconds) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, seconds * 1000.0);
        });
      }
    }, {
      key: "waitForCondition",
      value: function waitForCondition(conditionCallback, resolveCallback) {
        if (conditionCallback()) {
          resolveCallback && resolveCallback();
        } else {
          setTimeout(this.waitForCondition.bind(this, conditionCallback, resolveCallback), 0);
        }
      }
    }, {
      key: "isIntersectRect",
      value: function isIntersectRect(rect1, rect2) {
        if (Utility.isIntersectPoint({
          left: rect1.left,
          top: rect1.top
        }, rect2) || Utility.isIntersectPoint({
          left: rect1.left + rect1.width,
          top: rect1.top
        }, rect2) || Utility.isIntersectPoint({
          left: rect1.left,
          top: rect1.top + rect1.height
        }, rect2) || Utility.isIntersectPoint({
          left: rect1.left + rect1.width,
          top: rect1.top + rect1.height
        }, rect2)) {
          return true;
        }

        return false;
      }
    }, {
      key: "isIntersectPoint",
      value: function isIntersectPoint(point, rect) {
        if (point.left > rect.left && point.left < rect.left + rect.width && point.top > rect.top && point.top < rect.top + rect.height) {
          return true;
        }

        return false;
      }
    }]);

    return Utility;
  }();

  var _backgroundMusic = /*#__PURE__*/new WeakMap();

  var BackgroundMusic = /*#__PURE__*/function () {
    function BackgroundMusic() {
      var _this4 = this;

      _classCallCheck(this, BackgroundMusic);

      _classPrivateFieldInitSpec(this, _backgroundMusic, {
        writable: true,
        value: void 0
      });

      if (!BackgroundMusic.instance) {
        _classPrivateFieldSet(this, _backgroundMusic, new Audio("sounds/6_bgmusic05.wav.mp3"));

        _classPrivateFieldGet(this, _backgroundMusic).addEventListener('ended', function () {
          this.currentTime = 0;
          this.play();
        }, false);

        var autoplay = function autoplay() {
          _classPrivateFieldGet(_this4, _backgroundMusic).play();

          if (_classPrivateFieldGet(_this4, _backgroundMusic).duration > 0 && _classPrivateFieldGet(_this4, _backgroundMusic).paused === false) {
            document.removeEventListener("mousedown", autoplay);
            document.removeEventListener("touchstart", autoplay);
          } else {
            setTimeout(function () {
              document.dispatchEvent(new Event("mousedown"));
              document.dispatchEvent(new Event("touchstart"));
            }, 0);
          }
        };

        document.addEventListener("mousedown", autoplay);
        document.addEventListener("touchstart", autoplay);
      }

      return BackgroundMusic.instance || (BackgroundMusic.instance = this);
    }

    _createClass(BackgroundMusic, [{
      key: "pause",
      value: function pause() {
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
      }
    }, {
      key: "play",
      value: function play() {
        this.backgroundMusic.play();
      }
    }]);

    return BackgroundMusic;
  }();

  var _accept = /*#__PURE__*/new WeakMap();

  var _actionCallback = /*#__PURE__*/new WeakMap();

  var _color = /*#__PURE__*/new WeakMap();

  var _dropping = /*#__PURE__*/new WeakMap();

  var _originalTop = /*#__PURE__*/new WeakMap();

  var _reject = /*#__PURE__*/new WeakMap();

  var _onTopOf = /*#__PURE__*/new WeakSet();

  var Candy = /*#__PURE__*/function (_Draggable) {
    _inherits(Candy, _Draggable);

    var _super = _createSuper(Candy);

    function Candy(color, left, top, actionCallback) {
      var _thisSuper, _this5;

      _classCallCheck(this, Candy);

      _this5 = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _onTopOf);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _accept, {
        writable: true,
        value: ""
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _actionCallback, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _color, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _dropping, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _originalTop, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _reject, {
        writable: true,
        value: ""
      });

      _classPrivateFieldSet(_assertThisInitialized(_this5), _color, color);

      if (!left) {
        left = 0;
      }

      if (!top) {
        top = 400;
      }

      _classPrivateFieldSet(_assertThisInitialized(_this5), _actionCallback, actionCallback);

      _classPrivateFieldSet(_assertThisInitialized(_this5), _originalTop, top);

      if (!_classStaticPrivateFieldSpecGet(Candy, Candy, _triggerTop)) {
        var fishBowl = document.querySelector(".fish-bowls> .fish-bowls_fish-bowl-" + _classPrivateFieldGet(_assertThisInitialized(_this5), _color));
        var height = parseFloat(getComputedStyle(fishBowl).height);

        _classStaticPrivateFieldSpecSet(Candy, Candy, _triggerTop, parseFloat(getComputedStyle(fishBowl).top) + height * 0.125 + 20);
      }

      var candy = document.createElement("div");
      candy.className = "candy";
      candy.style["z-index"] = "98";
      candy.style["left"] = left + "px";
      candy.style["top"] = top + "px";
      Global.frame.appendChild(candy);
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "74");
      svg.setAttribute("height", "54");
      svg.setAttribute("viewBox", "0 0 74 54");
      svg.setAttribute("version", "1.1");
      candy.appendChild(svg);
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m69.805 14.584 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l-0.05 0.05 0.9 1.85q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7q-0.5-0.05-0.85-0.65l-0.4-1.1q-0.8-3.05-0.7-7.75 2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4l0.3 1.15-0.1 1.2 0.15 0.85 0.95 0.5");
      path.setAttribute("fill", _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "red" ? "#f00" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "green" ? "#0f0" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "blue" ? "#00f" : "");
      path.setAttribute("fill-rule", "evenodd");
      svg.appendChild(path);
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m61.105 22.884q0.85 4.95-0.15 9.9-1 4.7-3.6 8.65-2.65 3.95-6.5 6.6-4 2.7-8.75 3.55l-9.4-0.3q-4.5-1.15-8.35-4-3.85-2.8-6.4-6.9-2.65-4.25-3.5-9.25-0.9-5 0.15-9.9 0.95-4.7 3.6-8.7 2.6-3.95 6.45-6.6 4-2.7 8.75-3.5l9.45 0.3q4.45 1.1 8.3 3.95 3.8 2.8 6.4 6.95 2.65 4.2 3.55 9.25");
      path.setAttribute("fill", _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "red" ? "#f00" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "green" ? "#0f0" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "blue" ? "#00f" : "");
      path.setAttribute("fill-rule", "evenodd");
      svg.appendChild(path);
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m9.7046 23.384q2.45 3.65 4.5 4.75l0.8-0.75q1.25 0.75 1.3 3.15v1.85l-0.2 1.75q-0.05 1.15-1 1.55l-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05");
      path.setAttribute("fill", _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "red" ? "#f00" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "green" ? "#0f0" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "blue" ? "#00f" : "");
      path.setAttribute("fill-rule", "evenodd");
      svg.appendChild(path);
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m5.7046 40.284 0.35-1.5 0.95-0.7 1.15-0.4q0.35-0.3 0.25-0.95l-0.3-0.65-0.35-0.5-0.85-1.35 0.4-1.15q0.5-0.7 0.45-1.05l-0.8-1.4q-1.9-3.3-2.35-3.75l0.2-0.4 0.8-0.85q0.45-0.55 0.25-1.15l-1.55-0.55-0.05 0.05q-0.55 1.45-0.55 2.75l0.05 1.3 0.4 1.15 0.5 1.1 0.65 1.95q0.35 1.05 0.15 2.35l-0.65 3.25q-0.1 1.35 0.9 2.45");
      path.setAttribute("fill", _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "red" ? "#752605" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "green" ? "#006500" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "blue" ? "#00003e" : "");
      path.setAttribute("fill-rule", "evenodd");
      svg.appendChild(path);
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m68.805 12.034-0.1 1.2 0.15 0.85 0.95 0.5 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l0.85 1.9q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7-0.45-0.15q-0.05 8.8-5.45 15.6-5.5 6.85-13.95 8.35-8.55 1.5-16.05-3.15-7.5-4.6-10.5-13.05l-0.45 0.3-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05 2.4 3.55 4.4 4.7-0.3-4.6 1.05-8.95 1.25-4.25 3.85-7.75 2.6-3.55 6.25-5.8 3.75-2.4 8.15-3.15 8.55-1.55 16.15 3.15 7.5 4.65 10.5 13.2l-0.05-0.5q2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4z");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "red" ? "#f03" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "green" ? "#0c0" : _classPrivateFieldGet(_assertThisInitialized(_this5), _color) === "blue" ? "#009" : "");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-width", "2");
      svg.appendChild(path);
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m57.905 24.234q0.75 4.15-0.05 8.3-0.75 3.9-2.85 7.25-2.05 3.3-5.1 5.5-3.2 2.2-6.95 2.9-5.45 0.95-10.65-1.45-5-2.4-8.25-7.25 3.15 2.45 7 3.45l8 0.3q3.75-0.7 6.95-2.8 3.1-2 5.25-5 2.1-3.1 2.95-6.65 0.85-3.75 0.15-7.5-0.85-4.75-3.8-8.45-2.9-3.6-7.05-5.5 5.35 1.55 9.3 6.05 3.95 4.6 5.1 10.85");
      path.setAttribute("fill", "#fff");
      path.setAttribute("fill-opacity", ".70196");
      path.setAttribute("fill-rule", "evenodd");
      svg.appendChild(path);

      _this5.$mousedown = function (left, top) {
        _this5.element.left = left;
        _this5.element.top = top;
        _this5.element.style["transform"] = "translate(-50%,-25%)";
      };

      _this5.$mousemove = function (left, top) {
        _this5.element.left = left;
        _this5.element.top = top;
        _this5.element.style["transform"] = "translate(-50%,-25%)";
      };

      _this5.$mouseup = function (left, top) {
        var color = _classPrivateMethodGet(_assertThisInitialized(_this5), _onTopOf, _onTopOf2).call(_assertThisInitialized(_this5), left, top);

        if (_classPrivateFieldGet(_assertThisInitialized(_this5), _color) === color) {
          _classPrivateFieldSet(_assertThisInitialized(_this5), _accept, color);

          _classPrivateFieldSet(_assertThisInitialized(_this5), _reject, color);

          _classPrivateFieldSet(_assertThisInitialized(_this5), _originalTop, 350);

          _classPrivateFieldSet(_assertThisInitialized(_this5), _dropping, true);

          _this5.element.style["transform"] = "translate(-50%,0%)";
          _this5.element.style["pointer-events"] = "none";
          return false;
        }

        _classPrivateFieldSet(_assertThisInitialized(_this5), _reject, color);

        _this5.element.style["transform"] = "translate(0%,0%)";
        return true;
      };

      _get((_thisSuper = _assertThisInitialized(_this5), _getPrototypeOf(Candy.prototype)), "initialize", _thisSuper).call(_thisSuper, candy);

      return _this5;
    }

    _createClass(Candy, [{
      key: "action",
      value: function action() {
        if (_classPrivateFieldGet(this, _dropping) === true) {
          var top = this.element.top;
          var a = this.element.style["z-index"];

          if (_classPrivateFieldGet(this, _reject) !== "" && top > _classStaticPrivateFieldSpecGet(Candy, Candy, _triggerTop) && this.element.style["z-index"] != 2) {
            if (_classPrivateFieldGet(this, _accept) !== "") {
              this.element.style["z-index"] = 2;
            }

            _classPrivateFieldGet(this, _actionCallback) && _classPrivateFieldGet(this, _actionCallback).call(this, _classPrivateFieldGet(this, _accept), _classPrivateFieldGet(this, _reject));

            _classPrivateFieldSet(this, _reject, "");
          }

          if (top < _classPrivateFieldGet(this, _originalTop)) {
            this.element.top = Math.min(top + 10, _classPrivateFieldGet(this, _originalTop));
          }

          if (this.element.top >= _classPrivateFieldGet(this, _originalTop)) {
            _classPrivateFieldSet(this, _dropping, false);

            this.element.style["pointer-events"] = "auto";
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        Global.frame.removeChild(this.element.element);
      }
    }]);

    return Candy;
  }(Draggable);

  function _onTopOf2(cursorLeft, cursorTop) {
    var colors = ["red", "green", "blue"];

    for (var i = 0; i < colors.length; i++) {
      var fishBowl = new Element(document.querySelector(".fish-bowls> .fish-bowls_fish-bowl-" + colors[i]));

      if (cursorLeft > fishBowl.left + 51 && cursorLeft < fishBowl.right + 51 - 129 && cursorTop < fishBowl.top + 20) {
        return colors[i];
      }
    }

    return "";
  }

  var _triggerTop = {
    writable: true,
    value: void 0
  };

  var EndScreen = /*#__PURE__*/function () {
    function EndScreen(restartCallback) {
      var _this6 = this;

      _classCallCheck(this, EndScreen);

      _defineProperty(this, "restartCallback", void 0);

      if (!EndScreen.instance) {
        EndScreen.loseAudio = new Audio("sounds/4_lose.mp3");
        EndScreen.winAudio = new Audio("sounds/2_win.mp3");

        var click = function click(e) {
          _this6.shutup();

          _this6.setVisible(false);

          restartCallback && restartCallback();
        };

        document.querySelector(".end-screen > .end-screen_buttons > .end-screen_buttons_button-1").addEventListener("click", click);
        document.querySelector(".end-screen > .end-screen_buttons > .end-screen_buttons_button-1").addEventListener("touchstart", click);
        var buttons = document.querySelector(".end-screen > .end-screen_buttons");

        for (var i = 0; i < buttons.childElementCount; i++) {
          buttons.children[i].addEventListener("mouseenter", function (e) {
            new Audio("sounds/95.mp3").play();
          });
        }
      }

      return EndScreen.instance || (EndScreen.instance = this);
    }

    _createClass(EndScreen, [{
      key: "getVisible",
      value: function getVisible() {
        return EndScreen.endScreen.style["display"] === "block" ? true : false;
      }
    }, {
      key: "setVisible",
      value: function setVisible(visible, win, score) {
        if (visible) {
          var result = document.querySelector(".end-screen > .end-screen_result");

          if (win) {
            EndScreen.winAudio.play();
            result.style["background-image"] = "url(shapes/114.svg)";
          } else {
            EndScreen.loseAudio.play();
            result.style["background-image"] = "url(shapes/111.svg)";
          }

          EndScreen.endScreen.style["display"] = "block";
        } else {
          EndScreen.endScreen.style["display"] = "none";
        }
      }
    }, {
      key: "shutup",
      value: function shutup() {
        EndScreen.loseAudio.pause();
        EndScreen.loseAudio.currentTime = 0;
        EndScreen.winAudio.pause();
        EndScreen.winAudio.currentTime = 0;
      }
    }]);

    return EndScreen;
  }();

  _defineProperty(EndScreen, "endScreen", document.querySelector(".end-screen"));

  _defineProperty(EndScreen, "loseAudio", void 0);

  _defineProperty(EndScreen, "winAudio", void 0);

  var ExitButton = /*#__PURE__*/_createClass(function ExitButton() {
    _classCallCheck(this, ExitButton);

    if (!ExitButton.instance) {
      document.querySelector(".exit-button").addEventListener("mouseenter", function () {
        new Audio("sounds/78.mp3").play();
      });
    }

    return ExitButton.instance || (ExitButton.instance = this);
  });

  var HandCursor = /*#__PURE__*/function (_Cursor) {
    _inherits(HandCursor, _Cursor);

    var _super2 = _createSuper(HandCursor);

    function HandCursor() {
      var _this7;

      _classCallCheck(this, HandCursor);

      if (!HandCursor.instance) {
        _this7 = _super2.call(this, document.querySelector(".hand-cursor"));

        _this7.$mousedown = function (left, top) {
          new Audio("sounds/1_pick.mp3").play();
          _this7.image = "url(shapes/132.svg)";
        };

        _this7.$mousemove = function (left, top) {
          _this7.element.left = left;
          _this7.element.top = top;
        };

        _this7.$mouseup = function (left, top) {
          _this7.image = "url(shapes/129.svg)";
        };

        _this7.image = "url(shapes/129.svg)";
        _this7.visible = false;
      }

      return _possibleConstructorReturn(_this7, HandCursor.instance || (HandCursor.instance = _assertThisInitialized(_this7)));
    }

    _createClass(HandCursor, [{
      key: "image",
      set: function set(value) {
        this.element.style["background-image"] = value;
        this.element.style["transform"] = "scale(0.5, 0.5) translate(-45px, -140px)";
      }
    }]);

    return HandCursor;
  }(Cursor);

  var StartScreen = /*#__PURE__*/_createClass(function StartScreen(startButtonClickCallback) {
    _classCallCheck(this, StartScreen);

    if (!StartScreen.instance) {
      var startButton = document.querySelector(".start-screen > .start-screen-button");

      var click = function click(e) {
        new Audio("sounds/2_開始玩.mp3").play();
        document.querySelector(".start-screen").style["display"] = "none";
        startButtonClickCallback && startButtonClickCallback();
      };

      startButton.addEventListener("mouseenter", function () {
        new Audio("sounds/95.mp3").play();
      });
      startButton.addEventListener("click", click);
      startButton.addEventListener("touchstart", click);
    }

    return StartScreen.instance || (StartScreen.instance = this);
  });

  var StarCursor = /*#__PURE__*/function (_Cursor2) {
    _inherits(StarCursor, _Cursor2);

    var _super3 = _createSuper(StarCursor);

    function StarCursor() {
      var _this8;

      _classCallCheck(this, StarCursor);

      if (!StarCursor.instance) {
        _this8 = _super3.call(this, document.querySelector(".star-cursor"));
        _this8.visible = false;
      }

      return _possibleConstructorReturn(_this8, StarCursor.instance || (StarCursor.instance = _assertThisInitialized(_this8)));
    }

    return _createClass(StarCursor);
  }(Cursor);

  var _hInterval = /*#__PURE__*/new WeakMap();

  var _second = /*#__PURE__*/new WeakMap();

  var Timer = /*#__PURE__*/function () {
    function Timer(timeupCallback) {
      _classCallCheck(this, Timer);

      _classPrivateFieldInitSpec(this, _hInterval, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _second, {
        writable: true,
        value: void 0
      });

      _defineProperty(this, "timeupCallback", void 0);

      if (!Timer.instance) {
        this.timeupCallback = timeupCallback;

        _classPrivateFieldSet(this, _second, 0);
      }

      return Timer.instance || (Timer.instance = this);
    }

    _createClass(Timer, [{
      key: "start",
      value: function start(duration) {
        var _this9 = this;

        _classPrivateFieldSet(this, _second, 0);

        clearInterval(_classPrivateFieldGet(this, _hInterval));

        _classPrivateFieldSet(this, _hInterval, setInterval(function () {
          _classPrivateFieldSet(_this9, _second, _classPrivateFieldGet(_this9, _second) + 0.1);

          var remainingTime = duration - _classPrivateFieldGet(_this9, _second);

          if (remainingTime <= 0) {
            _classStaticPrivateFieldSpecGet(Timer, Timer, _timer).innerHTML = "00:00";

            _this9.stop();

            _this9.timeupCallback && _this9.timeupCallback();
          } else {
            _classStaticPrivateFieldSpecGet(Timer, Timer, _timer).innerHTML = "00:".concat(remainingTime / 10 < 1 ? "0" : "").concat(Math.floor(remainingTime));
          }
        }, 100));
      }
    }, {
      key: "stop",
      value: function stop() {
        _classPrivateFieldSet(this, _second, 0);

        clearInterval(_classPrivateFieldGet(this, _hInterval));
      }
    }]);

    return Timer;
  }();

  var _timer = {
    writable: true,
    value: document.querySelector(".timer")
  };

  var Main = /*#__PURE__*/function () {
    function Main() {
      _classCallCheck(this, Main);

      _defineProperty(this, "backgroundMusic", void 0);

      _defineProperty(this, "candies", void 0);

      _defineProperty(this, "endScreen", void 0);

      _defineProperty(this, "handCursor", void 0);

      _defineProperty(this, "running", void 0);

      _defineProperty(this, "score", void 0);

      _defineProperty(this, "starCursor", void 0);

      _defineProperty(this, "timer", void 0);

      this.gameover = this.gameover.bind(this);
      this.restart = this.restart.bind(this);
      this.result = this.result.bind(this);
      this.start = this.start.bind(this);
      this.timeup = this.timeup.bind(this);
      new ExitButton();
      new StartScreen(this.start);
      this.backgroundMusic = new BackgroundMusic();
      this.endScreen = new EndScreen(this.restart);
      this.handCursor = new HandCursor();
      this.starCursor = new StarCursor();
      this.timer = new Timer(this.timeup);
      this.running = true;
      this.starCursor.visible = true;
    }

    _createClass(Main, [{
      key: "gameover",
      value: function gameover(win) {
        this.endScreen.setVisible(true, win);
        this.handCursor.visible = false;
        this.starCursor.visible = true;
        this.running = false;

        for (var i = 0; i < this.candies.length; i++) {
          this.candies[i].destroy();
          delete this.candies[i];
          this.candies[i] = null;
        }

        this.candies = new Array();
      }
    }, {
      key: "restart",
      value: function restart() {
        this.start();
      }
    }, {
      key: "result",
      value: function () {
        var _result = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(correct, color) {
          var imageUrl, element, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  new Audio("sounds/" + (correct ? "105" : "103") + ".mp3").play();
                  imageUrl = "url(shapes/" + (correct ? "104" : "102") + ".svg)";
                  element = document.querySelector(".fish-bowls > .fish-bowls_fish-bowl-" + color + " > .result");
                  i = 0;

                case 4:
                  if (!(i < 3)) {
                    _context.next = 14;
                    break;
                  }

                  element.style["background-image"] = imageUrl;
                  _context.next = 8;
                  return Utility.waitForSeconds(0.1);

                case 8:
                  element.style["background-image"] = "none";
                  _context.next = 11;
                  return Utility.waitForSeconds(0.1);

                case 11:
                  i++;
                  _context.next = 4;
                  break;

                case 14:
                  element.style["background-image"] = imageUrl;
                  _context.next = 17;
                  return Utility.waitForSeconds(0.5);

                case 17:
                  element.style["background-image"] = "none";

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function result(_x, _x2) {
          return _result.apply(this, arguments);
        }

        return result;
      }()
    }, {
      key: "start",
      value: function () {
        var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this10 = this;

          var buffer, positions, i, candy, _i3;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.endScreen.setVisible(false);
                  this.handCursor.visible = true;
                  this.starCursor.visible = false;
                  this.running = true;
                  this.score = 0;
                  this.timer.start(60);
                  this.candies = new Array(15);
                  buffer = Utility.createNonRepetitiveRandom(15).getBuffer();
                  positions = [{
                    left: 70,
                    top: 430
                  }, {
                    left: 20,
                    top: 490
                  }, {
                    left: 95,
                    top: 535
                  }, {
                    left: 225,
                    top: 435
                  }, {
                    left: 155,
                    top: 480
                  }, {
                    left: 205,
                    top: 525
                  }, {
                    left: 315,
                    top: 460
                  }, {
                    left: 290,
                    top: 535
                  }, {
                    left: 400,
                    top: 465
                  }, {
                    left: 385,
                    top: 525
                  }, {
                    left: 480,
                    top: 425
                  }, {
                    left: 535,
                    top: 480
                  }, {
                    left: 485,
                    top: 535
                  }, {
                    left: 630,
                    top: 450
                  }, {
                    left: 600,
                    top: 530
                  }];

                  for (i = 0; i < this.candies.length; i++) {
                    candy = new Candy(buffer[i] < 5 ? "red" : buffer[i] < 10 ? "green" : "blue", positions[i].left, positions[i].top, /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accept, reject) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (accept !== "") {
                                  if (++_this10.score === 15) {
                                    _this10.gameover(true);
                                  } else {
                                    _this10.result(true, accept);
                                  }
                                } else {
                                  _this10.result(false, reject);
                                }

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x3, _x4) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                    this.candies[i] = candy;
                  }

                case 10:
                  if (!this.running) {
                    _context3.next = 16;
                    break;
                  }

                  for (_i3 = 0; _i3 < this.candies.length; _i3++) {
                    this.candies[_i3].action();
                  }

                  _context3.next = 14;
                  return Utility.waitForSeconds(0.033);

                case 14:
                  _context3.next = 10;
                  break;

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function start() {
          return _start.apply(this, arguments);
        }

        return start;
      }()
    }, {
      key: "timeup",
      value: function timeup() {
        this.gameover(false);
      }
    }]);

    return Main;
  }();

  new Main();
})();