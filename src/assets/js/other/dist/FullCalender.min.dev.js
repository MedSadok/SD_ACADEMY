"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
FullCalendar Standard Bundle v6.0.1
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2022 Adam Shaw
*/
var FullCalendar = function (e) {
  "use strict";

  var t,
      n,
      r,
      i,
      s,
      o,
      a,
      l = {},
      c = [],
      d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function u(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function h(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }

  function f(e, n, r) {
    var i,
        s,
        o,
        a = {};

    for (o in n) {
      "key" == o ? i = n[o] : "ref" == o ? s = n[o] : a[o] = n[o];
    }

    if (arguments.length > 2 && (a.children = arguments.length > 3 ? t.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps) for (o in e.defaultProps) {
      void 0 === a[o] && (a[o] = e.defaultProps[o]);
    }
    return g(e, a, i, s, null);
  }

  function g(e, t, i, s, o) {
    var a = {
      type: e,
      props: t,
      key: i,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++r : o
    };
    return null == o && null != n.vnode && n.vnode(a), a;
  }

  function p(e) {
    return e.children;
  }

  function m(e, t) {
    this.props = e, this.context = t;
  }

  function v(e, t) {
    if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;

    for (var n; t < e.__k.length; t++) {
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    }

    return "function" == typeof e.type ? v(e) : null;
  }

  function b(e) {
    var t, n;

    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      }

      return b(e);
    }
  }

  function y(e) {
    (!e.__d && (e.__d = !0) && s.push(e) && !E.__r++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || setTimeout)(E);
  }

  function E() {
    for (var e; E.__r = s.length;) {
      e = s.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      }), s = [], e.some(function (e) {
        var t, n, r, i, s, o;
        e.__d && (s = (i = (t = e).__v).__e, (o = t.__P) && (n = [], (r = u({}, i)).__v = i.__v + 1, T(o, i, r, t.__n, void 0 !== o.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? v(i) : s, i.__h), k(n, i), i.__e != s && b(i)));
      });
    }
  }

  function A(e, t, n, r, i, s, o, a, d, u) {
    var h,
        f,
        m,
        b,
        y,
        E,
        A,
        S = r && r.__k || c,
        C = S.length;

    for (n.__k = [], h = 0; h < t.length; h++) {
      if (null != (b = n.__k[h] = null == (b = t[h]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? g(null, b, null, null, b) : Array.isArray(b) ? g(p, {
        children: b
      }, null, null, null) : b.__b > 0 ? g(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b)) {
        if (b.__ = n, b.__b = n.__b + 1, null === (m = S[h]) || m && b.key == m.key && b.type === m.type) S[h] = void 0;else for (f = 0; f < C; f++) {
          if ((m = S[f]) && b.key == m.key && b.type === m.type) {
            S[f] = void 0;
            break;
          }

          m = null;
        }
        T(e, b, m = m || l, i, s, o, a, d, u), y = b.__e, (f = b.ref) && m.ref != f && (A || (A = []), m.ref && A.push(m.ref, null, b), A.push(f, b.__c || y, b)), null != y ? (null == E && (E = y), "function" == typeof b.type && b.__k === m.__k ? b.__d = d = D(b, d, e) : d = w(e, b, m, S, y, d), "function" == typeof n.type && (n.__d = d)) : d && m.__e == d && d.parentNode != e && (d = v(m));
      }
    }

    for (n.__e = E, h = C; h--;) {
      null != S[h] && O(S[h], S[h]);
    }

    if (A) for (h = 0; h < A.length; h++) {
      I(A[h], A[++h], A[++h]);
    }
  }

  function D(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++) {
      (r = i[s]) && (r.__ = e, t = "function" == typeof r.type ? D(r, t, n) : w(n, r, r, i, r.__e, t));
    }

    return t;
  }

  function S(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function (e) {
      S(e, t);
    }) : t.push(e)), t;
  }

  function w(e, t, n, r, i, s) {
    var o, a, l;
    if (void 0 !== t.__d) o = t.__d, t.__d = void 0;else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), o = null;else {
      for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 1) {
        if (a == i) break e;
      }

      e.insertBefore(i, s), o = s;
    }
    return void 0 !== o ? o : i.nextSibling;
  }

  function C(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px";
  }

  function R(e, t, n, r, i) {
    var s;

    e: if ("style" === t) {
      if ("string" == typeof n) e.style.cssText = n;else {
        if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) {
          n && t in n || C(e.style, t, "");
        }
        if (n) for (t in n) {
          r && n[t] === r[t] || C(e.style, t, n[t]);
        }
      }
    } else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? _ : x, s) : e.removeEventListener(t, s ? _ : x, s);else if ("dangerouslySetInnerHTML" !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
  }

  function x(e) {
    this.l[e.type + !1](n.event ? n.event(e) : e);
  }

  function _(e) {
    this.l[e.type + !0](n.event ? n.event(e) : e);
  }

  function T(e, t, r, i, s, o, a, l, c) {
    var d,
        h,
        f,
        g,
        v,
        b,
        y,
        E,
        D,
        S,
        w,
        C,
        R,
        x,
        _,
        T = t.type;

    if (void 0 !== t.constructor) return null;
    null != r.__h && (c = r.__h, l = t.__e = r.__e, t.__h = null, o = [l]), (d = n.__b) && d(t);

    try {
      e: if ("function" == typeof T) {
        if (E = t.props, D = (d = T.contextType) && i[d.__c], S = d ? D ? D.props.value : d.__ : i, r.__c ? y = (h = t.__c = r.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? t.__c = h = new T(E, S) : (t.__c = h = new m(E, S), h.constructor = T, h.render = N), D && D.sub(h), h.props = E, h.state || (h.state = {}), h.context = S, h.__n = i, f = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = u({}, h.__s)), u(h.__s, T.getDerivedStateFromProps(E, h.__s))), g = h.props, v = h.state, f) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == T.getDerivedStateFromProps && E !== g && null != h.componentWillReceiveProps && h.componentWillReceiveProps(E, S), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(E, h.__s, S) || t.__v === r.__v) {
            for (h.props = E, h.state = h.__s, t.__v !== r.__v && (h.__d = !1), h.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), w = 0; w < h._sb.length; w++) {
              h.__h.push(h._sb[w]);
            }

            h._sb = [], h.__h.length && a.push(h);
            break e;
          }

          null != h.componentWillUpdate && h.componentWillUpdate(E, h.__s, S), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(g, v, b);
          });
        }

        if (h.context = S, h.props = E, h.__v = t, h.__P = e, C = n.__r, R = 0, "prototype" in T && T.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), x = 0; x < h._sb.length; x++) {
            h.__h.push(h._sb[x]);
          }

          h._sb = [];
        } else do {
          h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
        } while (h.__d && ++R < 25);

        h.state = h.__s, null != h.getChildContext && (i = u(u({}, i), h.getChildContext())), f || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(g, v)), _ = null != d && d.type === p && null == d.key ? d.props.children : d, A(e, Array.isArray(_) ? _ : [_], t, r, i, s, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && a.push(h), y && (h.__E = h.__ = null), h.__e = !1;
      } else null == o && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = M(r.__e, t, r, i, s, o, a, c);

      (d = n.diffed) && d(t);
    } catch (e) {
      t.__v = null, (c || null != o) && (t.__e = l, t.__h = !!c, o[o.indexOf(l)] = null), n.__e(e, t, r);
    }
  }

  function k(e, t) {
    n.__c && n.__c(t, e), e.some(function (t) {
      try {
        e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        });
      } catch (e) {
        n.__e(e, t.__v);
      }
    });
  }

  function M(e, n, r, i, s, o, a, c) {
    var d,
        u,
        f,
        g = r.props,
        p = n.props,
        m = n.type,
        b = 0;
    if ("svg" === m && (s = !0), null != o) for (; b < o.length; b++) {
      if ((d = o[b]) && "setAttribute" in d == !!m && (m ? d.localName === m : 3 === d.nodeType)) {
        e = d, o[b] = null;
        break;
      }
    }

    if (null == e) {
      if (null === m) return document.createTextNode(p);
      e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, p.is && p), o = null, c = !1;
    }

    if (null === m) g === p || c && e.data === p || (e.data = p);else {
      if (o = o && t.call(e.childNodes), u = (g = r.props || l).dangerouslySetInnerHTML, f = p.dangerouslySetInnerHTML, !c) {
        if (null != o) for (g = {}, b = 0; b < e.attributes.length; b++) {
          g[e.attributes[b].name] = e.attributes[b].value;
        }
        (f || u) && (f && (u && f.__html == u.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""));
      }

      if (function (e, t, n, r, i) {
        var s;

        for (s in n) {
          "children" === s || "key" === s || s in t || R(e, s, null, n[s], r);
        }

        for (s in t) {
          i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || R(e, s, t[s], n[s], r);
        }
      }(e, p, g, s, c), f) n.__k = [];else if (b = n.props.children, A(e, Array.isArray(b) ? b : [b], n, r, i, s && "foreignObject" !== m, o, a, o ? o[0] : r.__k && v(r, 0), c), null != o) for (b = o.length; b--;) {
        null != o[b] && h(o[b]);
      }
      c || ("value" in p && void 0 !== (b = p.value) && (b !== e.value || "progress" === m && !b || "option" === m && b !== g.value) && R(e, "value", b, g.value, !1), "checked" in p && void 0 !== (b = p.checked) && b !== e.checked && R(e, "checked", b, g.checked, !1));
    }
    return e;
  }

  function I(e, t, r) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      n.__e(e, r);
    }
  }

  function O(e, t, r) {
    var i, s;

    if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || I(i, null, t)), null != (i = e.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (e) {
        n.__e(e, t);
      }
      i.base = i.__P = null, e.__c = void 0;
    }

    if (i = e.__k) for (s = 0; s < i.length; s++) {
      i[s] && O(i[s], t, r || "function" != typeof e.type);
    }
    r || null == e.__e || h(e.__e), e.__ = e.__e = e.__d = void 0;
  }

  function N(e, t, n) {
    return this.constructor(e, n);
  }

  function P(e, r, i) {
    var s, o, a;
    n.__ && n.__(e, r), o = (s = "function" == typeof i) ? null : i && i.__k || r.__k, a = [], T(r, e = (!s && i || r).__k = f(p, null, [e]), o || l, l, void 0 !== r.ownerSVGElement, !s && i ? [i] : o ? null : r.firstChild ? t.call(r.childNodes) : null, a, !s && i ? i : o ? o.__e : r.firstChild, s), k(a, e);
  }

  t = c.slice, n = {
    __e: function __e(e, t, n, r) {
      for (var i, s, o; t = t.__;) {
        if ((i = t.__c) && !i.__) try {
          if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
        } catch (t) {
          e = t;
        }
      }

      throw e;
    }
  }, r = 0, i = function i(e) {
    return null != e && void 0 === e.constructor;
  }, m.prototype.setState = function (e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = u({}, this.state), "function" == typeof e && (e = e(u({}, n), this.props)), e && u(n, e), null != e && this.__v && (t && this._sb.push(t), y(this));
  }, m.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), y(this));
  }, m.prototype.render = p, s = [], E.__r = 0, a = 0;
  var H,
      B,
      j,
      z = [],
      U = [],
      L = n.__b,
      W = n.__r,
      F = n.diffed,
      V = n.__c,
      G = n.unmount;

  function Q() {
    for (var e; e = z.shift();) {
      if (e.__P && e.__H) try {
        e.__H.__h.forEach(Z), e.__H.__h.forEach(X), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], n.__e(t, e.__v);
      }
    }
  }

  n.__b = function (e) {
    H = null, L && L(e);
  }, n.__r = function (e) {
    W && W(e);
    var t = (H = e.__c).__H;
    t && (B === H ? (t.__h = [], H.__h = [], t.__.forEach(function (e) {
      e.__N && (e.__ = e.__N), e.__V = U, e.__N = e.i = void 0;
    })) : (t.__h.forEach(Z), t.__h.forEach(X), t.__h = [])), B = H;
  }, n.diffed = function (e) {
    F && F(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== z.push(t) && j === n.requestAnimationFrame || ((j = n.requestAnimationFrame) || Y)(Q)), t.__H.__.forEach(function (e) {
      e.i && (e.__H = e.i), e.__V !== U && (e.__ = e.__V), e.i = void 0, e.__V = U;
    })), B = H = null;
  }, n.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(Z), e.__h = e.__h.filter(function (e) {
          return !e.__ || X(e);
        });
      } catch (r) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }), t = [], n.__e(r, e.__v);
      }
    }), V && V(e, t);
  }, n.unmount = function (e) {
    G && G(e);
    var t,
        r = e.__c;
    r && r.__H && (r.__H.__.forEach(function (e) {
      try {
        Z(e);
      } catch (e) {
        t = e;
      }
    }), r.__H = void 0, t && n.__e(t, r.__v));
  };
  var q = "function" == typeof requestAnimationFrame;

  function Y(e) {
    var t,
        n = function n() {
      clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(e);
    },
        r = setTimeout(n, 100);

    q && (t = requestAnimationFrame(n));
  }

  function Z(e) {
    var t = H,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), H = t;
  }

  function X(e) {
    var t = H;
    e.__c = e.__(), H = t;
  }

  function J(e, t) {
    for (var n in e) {
      if ("__source" !== n && !(n in t)) return !0;
    }

    for (var r in t) {
      if ("__source" !== r && e[r] !== t[r]) return !0;
    }

    return !1;
  }

  function $(e) {
    this.props = e;
  }

  ($.prototype = new m()).isPureReactComponent = !0, $.prototype.shouldComponentUpdate = function (e, t) {
    return J(this.props, e) || J(this.state, t);
  };
  var K = n.__b;

  n.__b = function (e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), K && K(e);
  };

  var ee = n.__e;

  n.__e = function (e, t, n, r) {
    if (e.then) for (var i, s = t; s = s.__;) {
      if ((i = s.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
    }
    ee(e, t, n, r);
  };

  var te = n.unmount;

  function ne() {
    this.__u = 0, this.t = null, this.__b = null;
  }

  function re(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }

  function ie() {
    this.u = null, this.o = null;
  }

  n.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), te && te(e);
  }, (ne.prototype = new m()).__c = function (e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);

    var i = re(r.__v),
        s = !1,
        o = function o() {
      s || (s = !0, n.__R = null, i ? i(a) : a());
    };

    n.__R = o;

    var a = function a() {
      if (! --r.__u) {
        if (r.state.__a) {
          var e = r.state.__a;

          r.__v.__k[0] = function e(t, n, r) {
            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
              return e(t, n, r);
            }), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
          }(e, e.__c.__P, e.__c.__O);
        }

        var t;

        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) {
          t.forceUpdate();
        }
      }
    },
        l = !0 === t.__h;

    r.__u++ || l || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), e.then(o, o);
  }, ne.prototype.componentWillUnmount = function () {
    this.t = [];
  }, ne.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
            r = this.__v.__k[0].__c;

        this.__v.__k[0] = function e(t, n, r) {
          return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }), t.__c.__H = null), null != (t = function (e, t) {
            for (var n in t) {
              e[n] = t[n];
            }

            return e;
          }({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
            return e(t, n, r);
          })), t;
        }(this.__b, n, r.__O = r.__P);
      }

      this.__b = null;
    }

    var i = t.__a && f(p, null, e.fallback);
    return i && (i.__h = null), [f(p, null, t.__a ? null : e.children), i];
  };

  var se = function se(e, t, n) {
    if (++n[1] === n[0] && e.o["delete"](t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
      for (; n.length > 3;) {
        n.pop()();
      }

      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
  };

  function oe(e) {
    return this.getChildContext = function () {
      return e.context;
    }, e.children;
  }

  function ae(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function () {
      P(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function appendChild(e) {
        this.childNodes.push(e), t.i.appendChild(e);
      },
      insertBefore: function insertBefore(e, n) {
        this.childNodes.push(e), t.i.appendChild(e);
      },
      removeChild: function removeChild(e) {
        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
      }
    }), P(f(oe, {
      context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount();
  }

  (ie.prototype = new m()).__a = function (e) {
    var t = this,
        n = re(t.__v),
        r = t.o.get(e);
    return r[0]++, function (i) {
      var s = function s() {
        t.props.revealOrder ? (r.push(i), se(t, e, r)) : i();
      };

      n ? n(s) : s();
    };
  }, ie.prototype.render = function (e) {
    this.u = null, this.o = new Map();
    var t = S(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();

    for (var n = t.length; n--;) {
      this.o.set(t[n], this.u = [1, 0, this.u]);
    }

    return e.children;
  }, ie.prototype.componentDidUpdate = ie.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach(function (t, n) {
      se(e, n, t);
    });
  };

  var le = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
      ce = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      de = "undefined" != typeof document,
      ue = function ue(e) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e);
  };

  m.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(m.prototype, e, {
      configurable: !0,
      get: function get() {
        return this["UNSAFE_" + e];
      },
      set: function set(t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
    });
  });
  var he = n.event;

  function fe() {}

  function ge() {
    return this.cancelBubble;
  }

  function pe() {
    return this.defaultPrevented;
  }

  n.event = function (e) {
    return he && (e = he(e)), e.persist = fe, e.isPropagationStopped = ge, e.isDefaultPrevented = pe, e.nativeEvent = e;
  };

  var me = {
    configurable: !0,
    get: function get() {
      return this["class"];
    }
  },
      ve = n.vnode;

  n.vnode = function (e) {
    var t = e.type,
        n = e.props,
        r = n;

    if ("string" == typeof t) {
      var i = -1 === t.indexOf("-");

      for (var s in r = {}, n) {
        var o = n[s];
        de && "children" === s && "noscript" === t || "value" === s && "defaultValue" in n && null == o || ("defaultValue" === s && "value" in n && null == n.value ? s = "value" : "download" === s && !0 === o ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + t) && !ue(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && ce.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === o && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = S(n.children).forEach(function (e) {
        e.props.selected = -1 != r.value.indexOf(e.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = S(n.children).forEach(function (e) {
        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
      })), e.props = r, n["class"] != n.className && (me.enumerable = "className" in n, null != n.className && (r["class"] = n.className), Object.defineProperty(r, "className", me));
    }

    e.$$typeof = le, ve && ve(e);
  };

  var be = n.__r;

  function ye(e) {
    if (!e || "undefined" == typeof document) return;
    var t = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }

  n.__r = function (e) {
    be && be(e), e.__c;
  };

  var Ee =
  /*#__PURE__*/
  function () {
    function Ee(e) {
      _classCallCheck(this, Ee);

      this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
    }

    _createClass(Ee, [{
      key: "request",
      value: function request(e) {
        this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e));
      }
    }, {
      key: "pause",
      value: function pause() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = this.pauseDepths;
        t[e] = (t[e] || 0) + 1, this.clearTimeout();
      }
    }, {
      key: "resume",
      value: function resume() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var n = this.pauseDepths;

        if (e in n) {
          if (t) delete n[e];else {
            n[e] -= 1, n[e] <= 0 && delete n[e];
          }
          this.tryDrain();
        }
      }
    }, {
      key: "isPaused",
      value: function isPaused() {
        return Object.keys(this.pauseDepths).length;
      }
    }, {
      key: "tryDrain",
      value: function tryDrain() {
        if (!this.isRunning && !this.isPaused()) {
          for (this.isRunning = !0; this.isDirty;) {
            this.isDirty = !1, this.drained();
          }

          this.isRunning = !1;
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
      }
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout) {
        function clearTimeout() {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function () {
        this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
      })
    }, {
      key: "drained",
      value: function drained() {
        this.drainedOption && this.drainedOption();
      }
    }]);

    return Ee;
  }();

  var Ae = Object.prototype.hasOwnProperty;

  function De(e, t) {
    var n = {};
    if (t) for (var _r2 in t) {
      var _t2 = [];

      for (var _i2 = e.length - 1; _i2 >= 0; _i2 -= 1) {
        var _s2 = e[_i2][_r2];
        if ("object" == _typeof(_s2) && _s2) _t2.unshift(_s2);else if (void 0 !== _s2) {
          n[_r2] = _s2;
          break;
        }
      }

      _t2.length && (n[_r2] = De(_t2));
    }

    for (var _t3 = e.length - 1; _t3 >= 0; _t3 -= 1) {
      var _r3 = e[_t3];

      for (var _e2 in _r3) {
        _e2 in n || (n[_e2] = _r3[_e2]);
      }
    }

    return n;
  }

  function Se(e, t) {
    var n = {};

    for (var _r4 in e) {
      t(e[_r4], _r4) && (n[_r4] = e[_r4]);
    }

    return n;
  }

  function we(e, t) {
    var n = {};

    for (var _r5 in e) {
      n[_r5] = t(e[_r5], _r5);
    }

    return n;
  }

  function Ce(e) {
    var t = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _n2 = _step.value;
        t[_n2] = !0;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return t;
  }

  function Re(e) {
    var t = [];

    for (var _n3 in e) {
      t.push(e[_n3]);
    }

    return t;
  }

  function xe(e, t) {
    if (e === t) return !0;

    for (var _n4 in e) {
      if (Ae.call(e, _n4) && !(_n4 in t)) return !1;
    }

    for (var _n5 in t) {
      if (Ae.call(t, _n5) && e[_n5] !== t[_n5]) return !1;
    }

    return !0;
  }

  function _e(e, t) {
    var n = [];

    for (var _r6 in e) {
      Ae.call(e, _r6) && (_r6 in t || n.push(_r6));
    }

    for (var _r7 in t) {
      Ae.call(t, _r7) && e[_r7] !== t[_r7] && n.push(_r7);
    }

    return n;
  }

  function Te(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (e === t) return !0;

    for (var _r8 in t) {
      if (!(_r8 in e) || !ke(e[_r8], t[_r8], n[_r8])) return !1;
    }

    for (var _n6 in e) {
      if (!(_n6 in t)) return !1;
    }

    return !0;
  }

  function ke(e, t, n) {
    return e === t || !0 === n || !!n && n(e, t);
  }

  function Me(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var i = [];
    null == n && (n = Object.keys(e).length);

    for (var _s3 = t; _s3 < n; _s3 += r) {
      var _t4 = e[_s3];
      void 0 !== _t4 && i.push(_t4);
    }

    return i;
  }

  function Ie(e, t, n) {
    if (e === t) return !0;
    var r,
        i = e.length;
    if (i !== t.length) return !1;

    for (r = 0; r < i; r += 1) {
      if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    }

    return !0;
  }

  function Oe(e, t, n) {
    var r, i;
    return function () {
      for (var _len = arguments.length, s = new Array(_len), _key = 0; _key < _len; _key++) {
        s[_key] = arguments[_key];
      }

      if (r) {
        if (!Ie(r, s)) {
          n && n(i);

          var _r9 = e.apply(this, s);

          t && t(_r9, i) || (i = _r9);
        }
      } else i = e.apply(this, s);

      return r = s, i;
    };
  }

  function Ne(e, t, n) {
    var _this = this;

    var r, i;
    return function (s) {
      if (r) {
        if (!xe(r, s)) {
          n && n(i);

          var _r10 = e.call(_this, s);

          t && t(_r10, i) || (i = _r10);
        }
      } else i = e.call(_this, s);

      return r = s, i;
    };
  }

  function Pe(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }

  function He(e, t) {
    if (e.closest) return e.closest(t);
    if (!document.documentElement.contains(e)) return null;

    do {
      if (Be(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }

  function Be(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }

  function je(e, t) {
    var n = e instanceof HTMLElement ? [e] : e,
        r = [];

    for (var _e3 = 0; _e3 < n.length; _e3 += 1) {
      var _i3 = n[_e3].querySelectorAll(t);

      for (var _e4 = 0; _e4 < _i3.length; _e4 += 1) {
        r.push(_i3[_e4]);
      }
    }

    return r;
  }

  var ze = /(top|left|right|bottom|width|height)$/i;

  function Ue(e, t) {
    for (var _n7 in t) {
      Le(e, _n7, t[_n7]);
    }
  }

  function Le(e, t, n) {
    null == n ? e.style[t] = "" : "number" == typeof n && ze.test(t) ? e.style[t] = n + "px" : e.style[t] = n;
  }

  function We(e) {
    var t, n;
    return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target;
  }

  function Fe(e) {
    return e.getRootNode ? e.getRootNode() : document;
  }

  var Ve = 0;

  function Ge() {
    return Ve += 1, "fc-dom-" + Ve;
  }

  function Qe(e) {
    e.preventDefault();
  }

  function qe(e, t, n, r) {
    var i = function (e, t) {
      return function (n) {
        var r = He(n.target, e);
        r && t.call(r, n, r);
      };
    }(n, r);

    return e.addEventListener(t, i), function () {
      e.removeEventListener(t, i);
    };
  }

  var Ye = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

  function Ze(e, t) {
    var n = function n(r) {
      t(r), Ye.forEach(function (t) {
        e.removeEventListener(t, n);
      });
    };

    Ye.forEach(function (t) {
      e.addEventListener(t, n);
    });
  }

  function Xe(e) {
    return Object.assign({
      onClick: e
    }, Je(e));
  }

  function Je(e) {
    return {
      tabIndex: 0,
      onKeyDown: function onKeyDown(t) {
        "Enter" !== t.key && " " !== t.key || (e(t), t.preventDefault());
      }
    };
  }

  var $e = 0;

  function Ke() {
    return $e += 1, String($e);
  }

  function et() {
    document.body.classList.add("fc-not-allowed");
  }

  function tt() {
    document.body.classList.remove("fc-not-allowed");
  }

  function nt(e) {
    e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Qe);
  }

  function rt(e) {
    e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Qe);
  }

  function it(e) {
    e.addEventListener("contextmenu", Qe);
  }

  function st(e) {
    e.removeEventListener("contextmenu", Qe);
  }

  function ot(e) {
    var t,
        n,
        r = [],
        i = [];

    for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e), t = 0; t < i.length; t += 1) {
      n = i[t], "string" == typeof n ? r.push("-" === n.charAt(0) ? {
        field: n.substring(1),
        order: -1
      } : {
        field: n,
        order: 1
      }) : "function" == typeof n && r.push({
        func: n
      });
    }

    return r;
  }

  function at(e, t, n) {
    var r, i;

    for (r = 0; r < n.length; r += 1) {
      if (i = lt(e, t, n[r]), i) return i;
    }

    return 0;
  }

  function lt(e, t, n) {
    return n.func ? n.func(e, t) : ct(e[n.field], t[n.field]) * (n.order || 1);
  }

  function ct(e, t) {
    return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0;
  }

  function dt(e, t) {
    var n = String(e);
    return "000".substr(0, t - n.length) + n;
  }

  function ut(e, t, n) {
    return "function" == typeof e ? e.apply(void 0, _toConsumableArray(t)) : "string" == typeof e ? t.reduce(function (e, t, n) {
      return e.replace("$" + n, t || "");
    }, e) : n;
  }

  function ht(e, t) {
    return e - t;
  }

  function ft(e) {
    return e % 1 == 0;
  }

  function gt(e) {
    var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
        n = e.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }

  var pt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  function mt(e, t) {
    var n = Tt(e);
    return n[2] += 7 * t, kt(n);
  }

  function vt(e, t) {
    var n = Tt(e);
    return n[2] += t, kt(n);
  }

  function bt(e, t) {
    var n = Tt(e);
    return n[6] += t, kt(n);
  }

  function yt(e, t) {
    return Et(e, t) / 7;
  }

  function Et(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }

  function At(e, t) {
    var n = wt(e),
        r = wt(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(Et(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
    };
  }

  function Dt(e, t) {
    var n = St(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }

  function St(e, t) {
    return It(e) === It(t) ? Math.round(Et(e, t)) : null;
  }

  function wt(e) {
    return kt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }

  function Ct(e, t, n, r) {
    var i = kt([t, 0, 1 + Rt(t, n, r)]),
        s = wt(e),
        o = Math.round(Et(i, s));
    return Math.floor(o / 7) + 1;
  }

  function Rt(e, t, n) {
    var r = 7 + t - n;
    return -((7 + kt([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }

  function xt(e) {
    return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()];
  }

  function _t(e) {
    return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
  }

  function Tt(e) {
    return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()];
  }

  function kt(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, _toConsumableArray(e)));
  }

  function Mt(e) {
    return !isNaN(e.valueOf());
  }

  function It(e) {
    return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds();
  }

  var Ot = {};
  var Nt, Pt;
  Nt = "gregory", Pt =
  /*#__PURE__*/
  function () {
    function Pt() {
      _classCallCheck(this, Pt);
    }

    _createClass(Pt, [{
      key: "getMarkerYear",
      value: function getMarkerYear(e) {
        return e.getUTCFullYear();
      }
    }, {
      key: "getMarkerMonth",
      value: function getMarkerMonth(e) {
        return e.getUTCMonth();
      }
    }, {
      key: "getMarkerDay",
      value: function getMarkerDay(e) {
        return e.getUTCDate();
      }
    }, {
      key: "arrayToMarker",
      value: function arrayToMarker(e) {
        return kt(e);
      }
    }, {
      key: "markerToArray",
      value: function markerToArray(e) {
        return Tt(e);
      }
    }]);

    return Pt;
  }(), Ot[Nt] = Pt;
  var Ht = ["years", "months", "days", "milliseconds"],
      Bt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

  function jt(e, t) {
    return "string" == typeof e ? function (e) {
      var t = Bt.exec(e);

      if (t) {
        var _e5 = t[1] ? -1 : 1;

        return {
          years: 0,
          months: 0,
          days: _e5 * (t[2] ? parseInt(t[2], 10) : 0),
          milliseconds: _e5 * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
        };
      }

      return null;
    }(e) : "object" == _typeof(e) && e ? zt(e) : "number" == typeof e ? zt(_defineProperty({}, t || "milliseconds", e)) : null;
  }

  function zt(e) {
    var t = {
      years: e.years || e.year || 0,
      months: e.months || e.month || 0,
      days: e.days || e.day || 0,
      milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
    },
        n = e.weeks || e.week;
    return n && (t.days += 7 * n, t.specifiedWeeks = !0), t;
  }

  function Ut(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds
    };
  }

  function Lt(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t
    };
  }

  function Wt(e) {
    return Ft(e) / 864e5;
  }

  function Ft(e) {
    return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
  }

  function Vt(e, t) {
    var n = null;

    for (var _r11 = 0; _r11 < Ht.length; _r11 += 1) {
      var _i4 = Ht[_r11];

      if (t[_i4]) {
        var _r12 = e[_i4] / t[_i4];

        if (!ft(_r12) || null !== n && n !== _r12) return null;
        n = _r12;
      } else if (e[_i4]) return null;
    }

    return n;
  }

  function Gt(e) {
    var t = e.milliseconds;

    if (t) {
      if (t % 1e3 != 0) return {
        unit: "millisecond",
        value: t
      };
      if (t % 6e4 != 0) return {
        unit: "second",
        value: t / 1e3
      };
      if (t % 36e5 != 0) return {
        unit: "minute",
        value: t / 6e4
      };
      if (t) return {
        unit: "hour",
        value: t / 36e5
      };
    }

    return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
      unit: "week",
      value: e.days / 7
    } : {
      unit: "day",
      value: e.days
    } : e.months ? {
      unit: "month",
      value: e.months
    } : e.years ? {
      unit: "year",
      value: e.years
    } : {
      unit: "millisecond",
      value: 0
    };
  }

  function Qt(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var r = e.toISOString();
    return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Zt(t, !0)))), r;
  }

  function qt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }

  function Yt(e) {
    return dt(e.getUTCHours(), 2) + ":" + dt(e.getUTCMinutes(), 2) + ":" + dt(e.getUTCSeconds(), 2);
  }

  function Zt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = e < 0 ? "-" : "+",
        r = Math.abs(e),
        i = Math.floor(r / 60),
        s = Math.round(r % 60);
    return t ? "".concat(n + dt(i, 2), ":").concat(dt(s, 2)) : "GMT".concat(n).concat(i).concat(s ? ":" + dt(s, 2) : "");
  }

  var Xt = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

  function Jt(e) {
    var t = Xt.exec(e);

    if (t) {
      var _e6 = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));

      if (Mt(_e6)) {
        var _n8 = null;
        return t[13] && (_n8 = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
          marker: _e6,
          isTimeUnspecified: !t[6],
          timeZoneOffset: _n8
        };
      }
    }

    return null;
  }

  var $t =
  /*#__PURE__*/
  function () {
    function $t(e) {
      _classCallCheck(this, $t);

      var t = this.timeZone = e.timeZone,
          n = "local" !== t && "UTC" !== t;
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function (e) {
        return new Ot[e]();
      }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.weekTextLong = (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }

    _createClass($t, [{
      key: "createMarker",
      value: function createMarker(e) {
        var t = this.createMarkerMeta(e);
        return null === t ? null : t.marker;
      }
    }, {
      key: "createNowMarker",
      value: function createNowMarker() {
        return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : kt(xt(new Date()));
      }
    }, {
      key: "createMarkerMeta",
      value: function createMarkerMeta(e) {
        if ("string" == typeof e) return this.parse(e);
        var t = null;
        return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = kt(e)), null !== t && Mt(t) ? {
          marker: t,
          isTimeUnspecified: !1,
          forcedTzo: null
        } : null;
      }
    }, {
      key: "parse",
      value: function parse(e) {
        var t = Jt(e);
        if (null === t) return null;
        var n = t.marker,
            r = null;
        return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
          marker: n,
          isTimeUnspecified: t.isTimeUnspecified,
          forcedTzo: r
        };
      }
    }, {
      key: "getYear",
      value: function getYear(e) {
        return this.calendarSystem.getMarkerYear(e);
      }
    }, {
      key: "getMonth",
      value: function getMonth(e) {
        return this.calendarSystem.getMarkerMonth(e);
      }
    }, {
      key: "add",
      value: function add(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "subtract",
      value: function subtract(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "addYears",
      value: function addYears(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] += t, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "addMonths",
      value: function addMonths(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[1] += t, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "diffWholeYears",
      value: function diffWholeYears(e, t) {
        var n = this.calendarSystem;
        return It(e) === It(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
      }
    }, {
      key: "diffWholeMonths",
      value: function diffWholeMonths(e, t) {
        var n = this.calendarSystem;
        return It(e) === It(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null;
      }
    }, {
      key: "greatestWholeUnit",
      value: function greatestWholeUnit(e, t) {
        var n = this.diffWholeYears(e, t);
        return null !== n ? {
          unit: "year",
          value: n
        } : (n = this.diffWholeMonths(e, t), null !== n ? {
          unit: "month",
          value: n
        } : (n = Dt(e, t), null !== n ? {
          unit: "week",
          value: n
        } : (n = St(e, t), null !== n ? {
          unit: "day",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 36e5;
        }(e, t), ft(n) ? {
          unit: "hour",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 6e4;
        }(e, t), ft(n) ? {
          unit: "minute",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 1e3;
        }(e, t), ft(n) ? {
          unit: "second",
          value: n
        } : {
          unit: "millisecond",
          value: t.valueOf() - e.valueOf()
        }))))));
      }
    }, {
      key: "countDurationsBetween",
      value: function countDurationsBetween(e, t, n) {
        var r;
        return n.years && (r = this.diffWholeYears(e, t), null !== r) ? r / (Wt(n) / 365) : n.months && (r = this.diffWholeMonths(e, t), null !== r) ? r / function (e) {
          return Wt(e) / 30;
        }(n) : n.days && (r = St(e, t), null !== r) ? r / Wt(n) : (t.valueOf() - e.valueOf()) / Ft(n);
      }
    }, {
      key: "startOf",
      value: function startOf(e, t) {
        return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? wt(e) : "hour" === t ? function (e) {
          return kt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]);
        }(e) : "minute" === t ? function (e) {
          return kt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]);
        }(e) : "second" === t ? function (e) {
          return kt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]);
        }(e) : null;
      }
    }, {
      key: "startOfYear",
      value: function startOfYear(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
      }
    }, {
      key: "startOfMonth",
      value: function startOfMonth(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]);
      }
    }, {
      key: "startOfWeek",
      value: function startOfWeek(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7]);
      }
    }, {
      key: "computeWeekNumber",
      value: function computeWeekNumber(e) {
        return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
          var r = e.getUTCFullYear(),
              i = Ct(e, r, t, n);
          if (i < 1) return Ct(e, r - 1, t, n);
          var s = Ct(e, r + 1, t, n);
          return s >= 1 ? Math.min(i, s) : i;
        }(e, this.weekDow, this.weekDoy);
      }
    }, {
      key: "format",
      value: function format(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return t.format({
          marker: e,
          timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
        }, this);
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return r.isEndExclusive && (t = bt(t, -1)), n.formatRange({
          marker: e,
          timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
        }, {
          marker: t,
          timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
        }, this, r.defaultSeparator);
      }
    }, {
      key: "formatIso",
      value: function formatIso(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = null;
        return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Qt(e, n, t.omitTime);
      }
    }, {
      key: "timestampToMarker",
      value: function timestampToMarker(e) {
        return "local" === this.timeZone ? kt(xt(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? kt(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e);
      }
    }, {
      key: "offsetForMarker",
      value: function offsetForMarker(e) {
        return "local" === this.timeZone ? -_t(Tt(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Tt(e)) : null;
      }
    }, {
      key: "toDate",
      value: function toDate(e, t) {
        return "local" === this.timeZone ? _t(Tt(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Tt(e)) * 60) : new Date(e.valueOf() - (t || 0));
      }
    }]);

    return $t;
  }();

  var Kt =
  /*#__PURE__*/
  function () {
    function Kt(e) {
      _classCallCheck(this, Kt);

      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }

    _createClass(Kt, [{
      key: "setIconOverride",
      value: function setIconOverride(e) {
        var t, n;

        if ("object" == _typeof(e) && e) {
          for (n in t = Object.assign({}, this.iconClasses), e) {
            t[n] = this.applyIconOverridePrefix(e[n]);
          }

          this.iconClasses = t;
        } else !1 === e && (this.iconClasses = {});
      }
    }, {
      key: "applyIconOverridePrefix",
      value: function applyIconOverridePrefix(e) {
        var t = this.iconOverridePrefix;
        return t && 0 !== e.indexOf(t) && (e = t + e), e;
      }
    }, {
      key: "getClass",
      value: function getClass(e) {
        return this.classes[e] || "";
      }
    }, {
      key: "getIconClass",
      value: function getIconClass(e, t) {
        var n;
        return n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e], n ? "".concat(this.baseIconClass, " ").concat(n) : "";
      }
    }, {
      key: "getCustomButtonIconClass",
      value: function getCustomButtonIconClass(e) {
        var t;
        return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption], t) ? "".concat(this.baseIconClass, " ").concat(this.applyIconOverridePrefix(t)) : "";
      }
    }]);

    return Kt;
  }();

  Kt.prototype.classes = {}, Kt.prototype.iconClasses = {}, Kt.prototype.baseIconClass = "", Kt.prototype.iconOverridePrefix = "";
  var en = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
  },
      tn = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  },
      nn = /\s*([ap])\.?m\.?/i,
      rn = /,/g,
      sn = /\s+/g,
      on = /\u200e/g,
      an = /UTC|GMT/;

  var ln =
  /*#__PURE__*/
  function () {
    function ln(e) {
      _classCallCheck(this, ln);

      var t = {},
          n = {},
          r = 0;

      for (var _i5 in e) {
        _i5 in en ? (n[_i5] = e[_i5], r = Math.max(en[_i5], r)) : (t[_i5] = e[_i5], _i5 in tn && (r = Math.max(tn[_i5], r)));
      }

      this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Oe(cn);
    }

    _createClass(ln, [{
      key: "format",
      value: function format(e, t) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        var i = this.standardDateProps,
            s = this.extendedSettings,
            o = function (e, t, n) {
          if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
          if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
          if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
          if (It(e) !== It(t)) return 1;
          return 0;
        }(e.marker, t.marker, n.calendarSystem);

        if (!o) return this.format(e, n);
        var a = o;
        !(a > 1) || "numeric" !== i.year && "2-digit" !== i.year || "numeric" !== i.month && "2-digit" !== i.month || "numeric" !== i.day && "2-digit" !== i.day || (a = 1);
        var l = this.format(e, n),
            c = this.format(t, n);
        if (l === c) return l;

        var d = cn(function (e, t) {
          var n = {};

          for (var _r13 in e) {
            (!(_r13 in tn) || tn[_r13] <= t) && (n[_r13] = e[_r13]);
          }

          return n;
        }(i, a), s, n),
            u = d(e),
            h = d(t),
            f = function (e, t, n, r) {
          var i = 0;

          for (; i < e.length;) {
            var _s4 = e.indexOf(t, i);

            if (-1 === _s4) break;

            var _o2 = e.substr(0, _s4);

            i = _s4 + t.length;

            var _a2 = e.substr(i),
                _l2 = 0;

            for (; _l2 < n.length;) {
              var _e7 = n.indexOf(r, _l2);

              if (-1 === _e7) break;

              var _t5 = n.substr(0, _e7);

              _l2 = _e7 + r.length;

              var _i6 = n.substr(_l2);

              if (_o2 === _t5 && _a2 === _i6) return {
                before: _o2,
                after: _a2
              };
            }
          }

          return null;
        }(l, u, c, h),
            g = s.separator || r || n.defaultSeparator || "";

        return f ? f.before + u + g + h + f.after : l + g + c;
      }
    }, {
      key: "getLargestUnit",
      value: function getLargestUnit() {
        switch (this.severity) {
          case 7:
          case 6:
          case 5:
            return "year";

          case 4:
            return "month";

          case 3:
            return "week";

          case 2:
            return "day";

          default:
            return "time";
        }
      }
    }]);

    return ln;
  }();

  function cn(e, t, n) {
    var r = Object.keys(e).length;
    return 1 === r && "short" === e.timeZoneName ? function (e) {
      return Zt(e.timeZoneOffset);
    } : 0 === r && t.week ? function (e) {
      return function (e, t, n, r, i) {
        var s = [];
        "long" === i ? s.push(n) : "short" !== i && "narrow" !== i || s.push(t);
        "long" !== i && "short" !== i || s.push(" ");
        s.push(r.simpleNumberFormat.format(e)), "rtl" === r.options.direction && s.reverse();
        return s.join("");
      }(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week);
    } : function (e, t, n) {
      e = Object.assign({}, e), t = Object.assign({}, t), function (e, t) {
        e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
        "long" === e.timeZoneName && (e.timeZoneName = "short");
        t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
      }(e, t), e.timeZone = "UTC";
      var r,
          i = new Intl.DateTimeFormat(n.locale.codes, e);

      if (t.omitZeroMinute) {
        var _t6 = Object.assign({}, e);

        delete _t6.minute, r = new Intl.DateTimeFormat(n.locale.codes, _t6);
      }

      return function (s) {
        var o,
            a = s.marker;
        return o = r && !a.getUTCMinutes() ? r : i, function (e, t, n, r, i) {
          e = e.replace(on, ""), "short" === n.timeZoneName && (e = function (e, t) {
            var n = !1;
            e = e.replace(an, function () {
              return n = !0, t;
            }), n || (e += " " + t);
            return e;
          }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : Zt(t.timeZoneOffset)));
          r.omitCommas && (e = e.replace(rn, "").trim());
          r.omitZeroMinute && (e = e.replace(":00", ""));
          !1 === r.meridiem ? e = e.replace(nn, "").trim() : "narrow" === r.meridiem ? e = e.replace(nn, function (e, t) {
            return t.toLocaleLowerCase();
          }) : "short" === r.meridiem ? e = e.replace(nn, function (e, t) {
            return t.toLocaleLowerCase() + "m";
          }) : "lowercase" === r.meridiem && (e = e.replace(nn, function (e) {
            return e.toLocaleLowerCase();
          }));
          return e = (e = e.replace(sn, " ")).trim();
        }(o.format(a), s, e, t, n);
      };
    }(e, t, n);
  }

  function dn(e, t) {
    var n = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6]
    };
  }

  function un(e, t, n, r) {
    var i = dn(e, n.calendarSystem);
    return {
      date: i,
      start: i,
      end: t ? dn(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator
    };
  }

  var hn =
  /*#__PURE__*/
  function () {
    function hn(e) {
      _classCallCheck(this, hn);

      this.cmdStr = e;
    }

    _createClass(hn, [{
      key: "format",
      value: function format(e, t, n) {
        return t.cmdFormatter(this.cmdStr, un(e, null, t, n));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        return n.cmdFormatter(this.cmdStr, un(e, t, n, r));
      }
    }]);

    return hn;
  }();

  var fn =
  /*#__PURE__*/
  function () {
    function fn(e) {
      _classCallCheck(this, fn);

      this.func = e;
    }

    _createClass(fn, [{
      key: "format",
      value: function format(e, t, n) {
        return this.func(un(e, null, t, n));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        return this.func(un(e, t, n, r));
      }
    }]);

    return fn;
  }();

  function gn(e) {
    return "object" == _typeof(e) && e ? new ln(e) : "string" == typeof e ? new hn(e) : "function" == typeof e ? new fn(e) : null;
  }

  var pn = {
    navLinkDayClick: wn,
    navLinkWeekClick: wn,
    duration: jt,
    bootstrapFontAwesome: wn,
    buttonIcons: wn,
    customButtons: wn,
    defaultAllDayEventDuration: jt,
    defaultTimedEventDuration: jt,
    nextDayThreshold: jt,
    scrollTime: jt,
    scrollTimeReset: Boolean,
    slotMinTime: jt,
    slotMaxTime: jt,
    dayPopoverFormat: gn,
    slotDuration: jt,
    snapDuration: jt,
    headerToolbar: wn,
    footerToolbar: wn,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: gn,
    dayHeaderClassNames: wn,
    dayHeaderContent: wn,
    dayHeaderDidMount: wn,
    dayHeaderWillUnmount: wn,
    dayCellClassNames: wn,
    dayCellContent: wn,
    dayCellDidMount: wn,
    dayCellWillUnmount: wn,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: wn,
    weekNumbers: Boolean,
    weekNumberClassNames: wn,
    weekNumberContent: wn,
    weekNumberDidMount: wn,
    weekNumberWillUnmount: wn,
    editable: Boolean,
    viewClassNames: wn,
    viewDidMount: wn,
    viewWillUnmount: wn,
    nowIndicator: Boolean,
    nowIndicatorClassNames: wn,
    nowIndicatorContent: wn,
    nowIndicatorDidMount: wn,
    nowIndicatorWillUnmount: wn,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: wn,
    locale: wn,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: wn,
    eventOrder: ot,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: wn,
    contentHeight: wn,
    direction: String,
    weekNumberFormat: gn,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: wn,
    initialDate: wn,
    now: wn,
    eventDataTransform: wn,
    stickyHeaderDates: wn,
    stickyFooterScrollbar: wn,
    viewHeight: wn,
    defaultAllDay: Boolean,
    eventSourceFailure: wn,
    eventSourceSuccess: wn,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: wn,
    eventConstraint: wn,
    eventAllow: wn,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: wn,
    eventContent: wn,
    eventDidMount: wn,
    eventWillUnmount: wn,
    selectConstraint: wn,
    selectOverlap: wn,
    selectAllow: wn,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: wn,
    slotLaneClassNames: wn,
    slotLaneContent: wn,
    slotLaneDidMount: wn,
    slotLaneWillUnmount: wn,
    slotLabelClassNames: wn,
    slotLabelContent: wn,
    slotLabelDidMount: wn,
    slotLabelWillUnmount: wn,
    dayMaxEvents: wn,
    dayMaxEventRows: wn,
    dayMinWidth: Number,
    slotLabelInterval: jt,
    allDayText: String,
    allDayClassNames: wn,
    allDayContent: wn,
    allDayDidMount: wn,
    allDayWillUnmount: wn,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: gn,
    rerenderDelay: Number,
    moreLinkText: wn,
    moreLinkHint: wn,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: wn,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: jt,
    hiddenDays: wn,
    monthMode: Boolean,
    fixedWeekCount: Boolean,
    validRange: wn,
    visibleRange: wn,
    titleFormat: wn,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: wn,
    navLinkHint: wn,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: wn,
    moreLinkClassNames: wn,
    moreLinkContent: wn,
    moreLinkDidMount: wn,
    moreLinkWillUnmount: wn,
    handleCustomRendering: wn,
    customRenderingMetaMap: wn,
    customRenderingReplacesEl: Boolean
  },
      mn = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " – ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: {
      day: 1
    },
    forceEventDuration: !1,
    nextDayThreshold: "00:00:00",
    dayHeaders: !0,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    weekends: !0,
    weekNumbers: !1,
    weekNumberCalculation: "local",
    editable: !1,
    nowIndicator: !1,
    scrollTime: "06:00:00",
    scrollTimeReset: !0,
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: !0,
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: !0,
    allDayMaintainDuration: !1,
    unselectAuto: !0,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    handleWindowResize: !0,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: !1,
    navLinks: !1,
    selectable: !1,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30
  },
      vn = {
    datesSet: wn,
    eventsSet: wn,
    eventAdd: wn,
    eventChange: wn,
    eventRemove: wn,
    windowResize: wn,
    eventClick: wn,
    eventMouseEnter: wn,
    eventMouseLeave: wn,
    select: wn,
    unselect: wn,
    loading: wn,
    _unmount: wn,
    _beforeprint: wn,
    _afterprint: wn,
    _noEventDrop: wn,
    _noEventResize: wn,
    _resize: wn,
    _scrollRequest: wn
  },
      bn = {
    buttonText: wn,
    buttonHints: wn,
    views: wn,
    plugins: wn,
    initialEvents: wn,
    events: wn,
    eventSources: wn
  },
      yn = {
    headerToolbar: En,
    footerToolbar: En,
    buttonText: En,
    buttonHints: En,
    buttonIcons: En,
    dateIncrement: En
  };

  function En(e, t) {
    return "object" == _typeof(e) && "object" == _typeof(t) && e && t ? xe(e, t) : e === t;
  }

  var An = {
    type: String,
    component: wn,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: wn,
    usesMinMaxTime: Boolean,
    classNames: wn,
    content: wn,
    didMount: wn,
    willUnmount: wn
  };

  function Dn(e) {
    return De(e, yn);
  }

  function Sn(e, t) {
    var n = {},
        r = {};

    for (var _r14 in t) {
      _r14 in e && (n[_r14] = t[_r14](e[_r14]));
    }

    for (var _n9 in e) {
      _n9 in t || (r[_n9] = e[_n9]);
    }

    return {
      refined: n,
      extra: r
    };
  }

  function wn(e) {
    return e;
  }

  function Cn(e) {
    e();
    var t = n.debounceRendering,
        r = [];

    for (n.debounceRendering = function (e) {
      r.push(e);
    }, P(f(Rn, {}), document.createElement("div")); r.length;) {
      r.shift()();
    }

    n.debounceRendering = t;
  }

  var Rn =
  /*#__PURE__*/
  function (_m) {
    _inherits(Rn, _m);

    function Rn() {
      _classCallCheck(this, Rn);

      return _possibleConstructorReturn(this, _getPrototypeOf(Rn).apply(this, arguments));
    }

    _createClass(Rn, [{
      key: "render",
      value: function render() {
        return f("div", {});
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({});
      }
    }]);

    return Rn;
  }(m);

  function xn(e) {
    var t = function (e, t) {
      var n = {
        __c: t = "__cC" + a++,
        __: e,
        Consumer: function Consumer(e, t) {
          return e.children(t);
        },
        Provider: function Provider(e) {
          var n, r;
          return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
            return r;
          }, this.shouldComponentUpdate = function (e) {
            this.props.value !== e.value && n.some(y);
          }, this.sub = function (e) {
            n.push(e);
            var t = e.componentWillUnmount;

            e.componentWillUnmount = function () {
              n.splice(n.indexOf(e), 1), t && t.call(e);
            };
          }), e.children;
        }
      };
      return n.Provider.__ = n.Consumer.contextType = n;
    }(e),
        n = t.Provider;

    return t.Provider = function () {
      var _this2 = this;

      var e = !this.getChildContext,
          t = n.apply(this, arguments);

      if (e) {
        var _e8 = [];
        this.shouldComponentUpdate = function (t) {
          _this2.props.value !== t.value && _e8.forEach(function (e) {
            e.context = t.value, e.forceUpdate();
          });
        }, this.sub = function (t) {
          _e8.push(t);

          var n = t.componentWillUnmount;

          t.componentWillUnmount = function () {
            _e8.splice(_e8.indexOf(t), 1), n && n.call(t);
          };
        };
      }

      return t;
    }, t;
  }

  var _n =
  /*#__PURE__*/
  function () {
    function _n(e, t, n, r) {
      var _this3 = this;

      _classCallCheck(this, _n);

      this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = function (e) {
        _this3.queuedRequest = Object.assign({}, _this3.queuedRequest || {}, e), _this3.drain();
      }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }

    _createClass(_n, [{
      key: "detach",
      value: function detach() {
        this.emitter.off("_scrollRequest", this.handleScrollRequest);
      }
    }, {
      key: "update",
      value: function update(e) {
        e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
      }
    }, {
      key: "fireInitialScroll",
      value: function fireInitialScroll() {
        this.handleScrollRequest({
          time: this.scrollTime
        });
      }
    }, {
      key: "drain",
      value: function drain() {
        this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
      }
    }]);

    return _n;
  }();

  var Tn = xn({});

  function kn(e, t, n, r, i, s, o, a, l, c, d, u, h) {
    return {
      dateEnv: i,
      options: n,
      pluginHooks: o,
      emitter: c,
      dispatch: a,
      getCurrentData: l,
      calendarApi: d,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: s,
      isRtl: "rtl" === n.direction,
      addResizeHandler: function addResizeHandler(e) {
        c.on("_resize", e);
      },
      removeResizeHandler: function removeResizeHandler(e) {
        c.off("_resize", e);
      },
      createScrollResponder: function createScrollResponder(e) {
        return new _n(e, c, jt(n.scrollTime), n.scrollTimeReset);
      },
      registerInteractiveComponent: u,
      unregisterInteractiveComponent: h
    };
  }

  var Mn =
  /*#__PURE__*/
  function (_m2) {
    _inherits(Mn, _m2);

    function Mn() {
      _classCallCheck(this, Mn);

      return _possibleConstructorReturn(this, _getPrototypeOf(Mn).apply(this, arguments));
    }

    _createClass(Mn, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(e, t) {
        return this.debug && console.log(_e(e, this.props), _e(t, this.state)), !Te(this.props, e, this.propEquality) || !Te(this.state, t, this.stateEquality);
      }
    }, {
      key: "safeSetState",
      value: function safeSetState(e) {
        Te(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
      }
    }]);

    return Mn;
  }(m);

  Mn.addPropsEquality = function (e) {
    var t = Object.create(this.prototype.propEquality);
    Object.assign(t, e), this.prototype.propEquality = t;
  }, Mn.addStateEquality = function (e) {
    var t = Object.create(this.prototype.stateEquality);
    Object.assign(t, e), this.prototype.stateEquality = t;
  }, Mn.contextType = Tn, Mn.prototype.propEquality = {}, Mn.prototype.stateEquality = {};

  var In =
  /*#__PURE__*/
  function (_Mn) {
    _inherits(In, _Mn);

    function In() {
      _classCallCheck(this, In);

      return _possibleConstructorReturn(this, _getPrototypeOf(In).apply(this, arguments));
    }

    return In;
  }(Mn);

  function On(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }

  In.contextType = Tn;

  var Nn =
  /*#__PURE__*/
  function (_In) {
    _inherits(Nn, _In);

    function Nn() {
      var _this4;

      _classCallCheck(this, Nn);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Nn).apply(this, arguments)), _this4.id = Ke(), _this4.currentDomNodes = [], _this4.queuedDomNodes = [], _this4.handleEl = function (e) {
        _this4.props.elRef && On(_this4.props.elRef, e);
      };
      return _this4;
    }

    _createClass(Nn, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.generator,
            s = e.renderProps,
            o = Hn(e);
        var a,
            l = [];
        if (Pn(e.generatorName, n)) n.customRenderingReplacesEl && delete o.elRef;else {
          var _e9 = "function" == typeof r ? r(s, f) : r;

          "string" == typeof _e9 || i(_e9) || Array.isArray(_e9) ? a = _e9 : "object" == _typeof(_e9) && ("html" in _e9 ? o.dangerouslySetInnerHTML = {
            __html: _e9.html
          } : "domNodes" in _e9 && (l = Array.prototype.slice.call(_e9.domNodes)));
        }
        return this.queuedDomNodes = l, f(e.elTag, o, a);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.triggerCustomRendering(!1);
      }
    }, {
      key: "triggerCustomRendering",
      value: function triggerCustomRendering(e) {
        var t = this.props,
            n = this.context,
            _n$options = n.options,
            r = _n$options.handleCustomRendering,
            i = _n$options.customRenderingMetaMap;

        if (r) {
          var _n10 = null == i ? void 0 : i[t.generatorName];

          _n10 && r(Object.assign({
            id: this.id,
            isActive: e,
            containerEl: this.base,
            reportNewContainerEl: this.handleEl,
            generatorMeta: _n10
          }, t));
        }
      }
    }, {
      key: "applyQueueudDomNodes",
      value: function applyQueueudDomNodes() {
        var e = this.queuedDomNodes,
            t = this.currentDomNodes,
            n = this.base;

        if (!Ie(e, t)) {
          t.forEach(Pe);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _t7 = _step2.value;
              n.appendChild(_t7);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.currentDomNodes = e;
        }
      }
    }]);

    return Nn;
  }(In);

  function Pn(e, t) {
    var n;
    return Boolean(t.handleCustomRendering && e && (null === (n = t.customRenderingMetaMap) || void 0 === n ? void 0 : n[e]));
  }

  function Hn(e, t) {
    var n = Object.assign(Object.assign({}, e.elAttrs), {
      ref: e.elRef
    });
    return (e.elClasses || t) && (n.className = (e.elClasses || []).concat(t || []).concat(n.className || []).filter(Boolean).join(" ")), e.elStyle && (n.style = e.elStyle), n;
  }

  Nn.addPropsEquality({
    elClasses: Ie,
    elStyle: xe,
    elAttrs: xe,
    renderProps: xe
  });
  var Bn = xn(0);

  var jn =
  /*#__PURE__*/
  function (_m3) {
    _inherits(jn, _m3);

    function jn() {
      var _this5;

      _classCallCheck(this, jn);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(jn).apply(this, arguments)), _this5.InnerContent = zn.bind(void 0, _assertThisInitialized(_this5));
      return _this5;
    }

    _createClass(jn, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = function (e, t) {
          var n = "function" == typeof e ? e(t) : e || [];
          return "string" == typeof n ? [n] : n;
        }(e.classNameGenerator, e.renderProps);

        if (e.children) {
          var _n11 = Hn(e, t),
              _r15 = e.children(this.InnerContent, e.renderProps, _n11);

          return e.elTag ? f(e.elTag, _n11, _r15) : _r15;
        }

        return f(Nn, Object.assign(Object.assign({}, e), {
          elTag: e.elTag || "div",
          elClasses: (e.elClasses || []).concat(t),
          renderId: this.context
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e, t;
        null === (t = (e = this.props).didMount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.base
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var e, t;
        null === (t = (e = this.props).willUnmount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.base
        }));
      }
    }]);

    return jn;
  }(m);

  function zn(e, t) {
    var n = e.props;
    return f(Nn, Object.assign({
      renderProps: n.renderProps,
      generatorName: n.generatorName,
      generator: n.generator,
      renderId: e.context
    }, t));
  }

  jn.contextType = Bn;

  var Un =
  /*#__PURE__*/
  function (_In2) {
    _inherits(Un, _In2);

    function Un() {
      _classCallCheck(this, Un);

      return _possibleConstructorReturn(this, _getPrototypeOf(Un).apply(this, arguments));
    }

    _createClass(Un, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = {
          view: t.viewApi
        };
        return f(jn, Object.assign({}, e, {
          elTag: e.elTag || "div",
          elClasses: [].concat(_toConsumableArray(Ln(e.viewSpec)), _toConsumableArray(e.elClasses || [])),
          renderProps: r,
          classNameGenerator: n.viewClassNames,
          generatorName: void 0,
          generator: void 0,
          didMount: n.viewDidMount,
          willUnmount: n.viewWillUnmount
        }), function () {
          return e.children;
        });
      }
    }]);

    return Un;
  }(In);

  function Ln(e) {
    return ["fc-".concat(e.type, "-view"), "fc-view"];
  }

  function Wn(e, t) {
    var n,
        r,
        i = [],
        s = t.start;

    for (e.sort(Fn), n = 0; n < e.length; n += 1) {
      r = e[n], r.start > s && i.push({
        start: s,
        end: r.start
      }), r.end > s && (s = r.end);
    }

    return s < t.end && i.push({
      start: s,
      end: t.end
    }), i;
  }

  function Fn(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }

  function Vn(e, t) {
    var n = e.start,
        r = e.end,
        i = null;
    return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (i = {
      start: n,
      end: r
    }), i;
  }

  function Gn(e, t) {
    return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf());
  }

  function Qn(e, t) {
    return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end);
  }

  function qn(e, t) {
    return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end);
  }

  function Yn(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }

  function Zn(e) {
    var t = Math.floor(Et(e.start, e.end)) || 1,
        n = wt(e.start);
    return {
      start: n,
      end: vt(n, t)
    };
  }

  function Xn(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : jt(0);
    var n = null,
        r = null;

    if (e.end) {
      r = wt(e.end);

      var _n12 = e.end.valueOf() - r.valueOf();

      _n12 && _n12 >= Ft(t) && (r = vt(r, 1));
    }

    return e.start && (n = wt(e.start), r && r <= n && (r = vt(n, 1))), {
      start: n,
      end: r
    };
  }

  function Jn(e) {
    var t = Xn(e);
    return Et(t.start, t.end) > 1;
  }

  function $n(e, t, n, r) {
    return "year" === r ? jt(n.diffWholeYears(e, t), "year") : "month" === r ? jt(n.diffWholeMonths(e, t), "month") : At(e, t);
  }

  function Kn(e, t) {
    return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e);
  }

  var er =
  /*#__PURE__*/
  function () {
    function er(e) {
      _classCallCheck(this, er);

      this.props = e, this.nowDate = Kn(e.nowInput, e.dateEnv), this.initHiddenDays();
    }

    _createClass(er, [{
      key: "buildPrev",
      value: function buildPrev(e, t, n) {
        var r = this.props.dateEnv,
            i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(i, -1, n);
      }
    }, {
      key: "buildNext",
      value: function buildNext(e, t, n) {
        var r = this.props.dateEnv,
            i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(i, 1, n);
      }
    }, {
      key: "build",
      value: function build(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var r,
            i,
            s,
            o,
            a,
            l,
            c = this.props;
        var d, u;
        return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (d = e, e = null != (u = r).start && d < u.start ? u.start : null != u.end && d >= u.end ? new Date(u.end.valueOf() - 1) : d), i = this.buildCurrentRangeInfo(e, t), s = /^(year|month|week|day)$/.test(i.unit), o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s), o = this.trimHiddenDays(o), a = o, c.showNonCurrentDates || (a = Vn(a, i.range)), a = this.adjustActiveRange(a), a = Vn(a, r), l = Qn(i.range, r), {
          validRange: r,
          currentRange: i.range,
          currentRangeUnit: i.unit,
          isRangeAllDay: s,
          activeRange: a,
          renderRange: o,
          slotMinTime: c.slotMinTime,
          slotMaxTime: c.slotMaxTime,
          isValid: l,
          dateIncrement: this.buildDateIncrement(i.duration)
        };
      }
    }, {
      key: "buildValidRange",
      value: function buildValidRange() {
        var e = this.props.validRangeInput,
            t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
        return this.refineRange(t) || {
          start: null,
          end: null
        };
      }
    }, {
      key: "buildCurrentRangeInfo",
      value: function buildCurrentRangeInfo(e, t) {
        var n,
            r = this.props,
            i = null,
            s = null,
            o = null;
        return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, t, i, s)) : (n = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, t, n)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = Gt(i).unit, o = this.buildRangeFromDuration(e, t, i, s)), {
          duration: i,
          unit: s,
          range: o
        };
      }
    }, {
      key: "getFallbackDuration",
      value: function getFallbackDuration() {
        return jt({
          day: 1
        });
      }
    }, {
      key: "adjustActiveRange",
      value: function adjustActiveRange(e) {
        var _this$props = this.props,
            t = _this$props.dateEnv,
            n = _this$props.usesMinMaxTime,
            r = _this$props.slotMinTime,
            i = _this$props.slotMaxTime,
            s = e.start,
            o = e.end;
        return n && (Wt(r) < 0 && (s = wt(s), s = t.add(s, r)), Wt(i) > 1 && (o = wt(o), o = vt(o, -1), o = t.add(o, i))), {
          start: s,
          end: o
        };
      }
    }, {
      key: "buildRangeFromDuration",
      value: function buildRangeFromDuration(e, t, n, r) {
        var i,
            s,
            o,
            _this$props2 = this.props,
            a = _this$props2.dateEnv,
            l = _this$props2.dateAlignment;

        if (!l) {
          var _e10 = this.props.dateIncrement;
          l = _e10 && Ft(_e10) < Ft(n) ? Gt(_e10).unit : r;
        }

        function c() {
          i = a.startOf(e, l), s = a.add(i, n), o = {
            start: i,
            end: s
          };
        }

        return Wt(n) <= 1 && this.isHiddenDay(i) && (i = this.skipHiddenDays(i, t), i = wt(i)), c(), this.trimHiddenDays(o) || (e = this.skipHiddenDays(e, t), c()), o;
      }
    }, {
      key: "buildRangeFromDayCount",
      value: function buildRangeFromDayCount(e, t, n) {
        var r,
            _this$props3 = this.props,
            i = _this$props3.dateEnv,
            s = _this$props3.dateAlignment,
            o = 0,
            a = e;
        s && (a = i.startOf(a, s)), a = wt(a), a = this.skipHiddenDays(a, t), r = a;

        do {
          r = vt(r, 1), this.isHiddenDay(r) || (o += 1);
        } while (o < n);

        return {
          start: a,
          end: r
        };
      }
    }, {
      key: "buildCustomVisibleRange",
      value: function buildCustomVisibleRange(e) {
        var t = this.props,
            n = t.visibleRangeInput,
            r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
            i = this.refineRange(r);
        return !i || null != i.start && null != i.end ? i : null;
      }
    }, {
      key: "buildRenderRange",
      value: function buildRenderRange(e, t, n) {
        return e;
      }
    }, {
      key: "buildDateIncrement",
      value: function buildDateIncrement(e) {
        var t,
            n = this.props.dateIncrement;
        return n || ((t = this.props.dateAlignment) ? jt(1, t) : e || jt({
          days: 1
        }));
      }
    }, {
      key: "refineRange",
      value: function refineRange(e) {
        if (e) {
          var _t8 = function (e, t) {
            var n = null,
                r = null;
            return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), n || r ? n && r && r < n ? null : {
              start: n,
              end: r
            } : null;
          }(e, this.props.dateEnv);

          return _t8 && (_t8 = Xn(_t8)), _t8;
        }

        return null;
      }
    }, {
      key: "initHiddenDays",
      value: function initHiddenDays() {
        var e,
            t = this.props.hiddenDays || [],
            n = [],
            r = 0;

        for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) {
          (n[e] = -1 !== t.indexOf(e)) || (r += 1);
        }

        if (!r) throw new Error("invalid hiddenDays");
        this.isHiddenDayHash = n;
      }
    }, {
      key: "trimHiddenDays",
      value: function trimHiddenDays(e) {
        var t = e.start,
            n = e.end;
        return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
          start: t,
          end: n
        } : null;
      }
    }, {
      key: "isHiddenDay",
      value: function isHiddenDay(e) {
        return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
      }
    }, {
      key: "skipHiddenDays",
      value: function skipHiddenDays(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

        for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) {
          e = vt(e, t);
        }

        return e;
      }
    }]);

    return er;
  }();

  function tr(e, t, n, r) {
    return {
      instanceId: Ke(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r
    };
  }

  function nr(e, t, n) {
    var r = n.dateEnv,
        i = n.pluginHooks,
        s = n.options,
        o = e.defs,
        a = e.instances;
    a = Se(a, function (e) {
      return !o[e.defId].recurringDef;
    });

    for (var _e11 in o) {
      var _n13 = o[_e11];

      if (_n13.recurringDef) {
        var _o3 = _n13.recurringDef.duration;
        _o3 || (_o3 = _n13.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);

        var _l3 = rr(_n13, _o3, t, r, i.recurringTypes);

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _l3[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _t9 = _step3.value;

            var _n14 = tr(_e11, {
              start: _t9,
              end: r.add(_t9, _o3)
            });

            a[_n14.instanceId] = _n14;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }

    return {
      defs: o,
      instances: a
    };
  }

  function rr(e, t, n, r, i) {
    var s = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
      start: r.subtract(n.start, t),
      end: n.end
    }, r);
    return e.allDay && (s = s.map(wt)), s;
  }

  var ir = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
  },
      sr = {
    start: wn,
    end: wn,
    date: wn,
    allDay: Boolean
  },
      or = Object.assign(Object.assign(Object.assign({}, ir), sr), {
    extendedProps: wn
  });

  function ar(e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : cr(n);

    var _lr = lr(e, n, i),
        s = _lr.refined,
        o = _lr.extra,
        a = function (e, t) {
      var n = null;
      e && (n = e.defaultAllDay);
      null == n && (n = t.options.defaultAllDay);
      return n;
    }(t, n),
        l = function (e, t, n, r) {
      for (var _i7 = 0; _i7 < r.length; _i7 += 1) {
        var _s5 = r[_i7].parse(e, n);

        if (_s5) {
          var _n15 = e.allDay;
          return null == _n15 && (_n15 = t, null == _n15 && (_n15 = _s5.allDayGuess, null == _n15 && (_n15 = !1))), {
            allDay: _n15,
            duration: _s5.duration,
            typeData: _s5.typeData,
            typeId: _i7
          };
        }
      }

      return null;
    }(s, a, n.dateEnv, n.pluginHooks.recurringTypes);

    if (l) {
      var _e12 = dr(s, o, t ? t.sourceId : "", l.allDay, Boolean(l.duration), n);

      return _e12.recurringDef = {
        typeId: l.typeId,
        typeData: l.typeData,
        duration: l.duration
      }, {
        def: _e12,
        instance: null
      };
    }

    var c = function (e, t, n, r) {
      var i,
          s,
          o = e.allDay,
          a = null,
          l = !1,
          c = null,
          d = null != e.start ? e.start : e.date;
      if (i = n.dateEnv.createMarkerMeta(d), i) a = i.marker;else if (!r) return null;
      null != e.end && (s = n.dateEnv.createMarkerMeta(e.end));
      null == o && (o = null != t ? t : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified));
      o && a && (a = wt(a));
      s && (c = s.marker, o && (c = wt(c)), a && c <= a && (c = null));
      c ? l = !0 : r || (l = n.options.forceEventDuration || !1, c = n.dateEnv.add(a, o ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
      return {
        allDay: o,
        hasEnd: l,
        range: {
          start: a,
          end: c
        },
        forcedStartTzo: i ? i.forcedTzo : null,
        forcedEndTzo: s ? s.forcedTzo : null
      };
    }(s, a, n, r);

    if (c) {
      var _e13 = dr(s, o, t ? t.sourceId : "", c.allDay, c.hasEnd, n);

      return {
        def: _e13,
        instance: tr(_e13.defId, c.range, c.forcedStartTzo, c.forcedEndTzo)
      };
    }

    return null;
  }

  function lr(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cr(t);
    return Sn(e, n);
  }

  function cr(e) {
    return Object.assign(Object.assign(Object.assign({}, br), or), e.pluginHooks.eventRefiners);
  }

  function dr(e, t, n, r, i, s) {
    var o = {
      title: e.title || "",
      groupId: e.groupId || "",
      publicId: e.id || "",
      url: e.url || "",
      recurringDef: null,
      defId: Ke(),
      sourceId: n,
      allDay: r,
      hasEnd: i,
      interactive: e.interactive,
      ui: Er(e, s),
      extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t)
    };
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = s.pluginHooks.eventDefMemberAdders[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _t10 = _step4.value;
        Object.assign(o, _t10(e));
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
  }

  function ur(e, t, n, r) {
    var i = {
      defs: {},
      instances: {}
    },
        s = cr(n);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = e[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _o4 = _step5.value;

        var _e14 = ar(_o4, t, n, r, s);

        _e14 && hr(_e14, i);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return i;
  }

  function hr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      defs: {},
      instances: {}
    };
    return t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
  }

  function fr(e, t) {
    var n = e.instances[t];

    if (n) {
      var _t11 = e.defs[n.defId],
          _r16 = mr(e, function (e) {
        return n = _t11, r = e, Boolean(n.groupId && n.groupId === r.groupId);
        var n, r;
      });

      return _r16.defs[_t11.defId] = _t11, _r16.instances[n.instanceId] = n, _r16;
    }

    return {
      defs: {},
      instances: {}
    };
  }

  function gr() {
    return {
      defs: {},
      instances: {}
    };
  }

  function pr(e, t) {
    return {
      defs: Object.assign(Object.assign({}, e.defs), t.defs),
      instances: Object.assign(Object.assign({}, e.instances), t.instances)
    };
  }

  function mr(e, t) {
    var n = Se(e.defs, t),
        r = Se(e.instances, function (e) {
      return n[e.defId];
    });
    return {
      defs: n,
      instances: r
    };
  }

  function vr(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }

  var br = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: wn,
    overlap: wn,
    allow: wn,
    className: vr,
    classNames: vr,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  },
      yr = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: []
  };

  function Er(e, t) {
    var n = function (e, t) {
      return Array.isArray(e) ? ur(e, null, t, !0) : "object" == _typeof(e) && e ? ur([e], null, t, !0) : null != e ? String(e) : null;
    }(e.constraint, t);

    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || [])
    };
  }

  function Ar(e) {
    return e.reduce(Dr, yr);
  }

  function Dr(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames)
    };
  }

  var Sr = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: wn,
    eventDataTransform: wn,
    success: wn,
    failure: wn
  };

  function wr(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Cr(t);
    var r;

    if ("string" == typeof e ? r = {
      url: e
    } : "function" == typeof e || Array.isArray(e) ? r = {
      events: e
    } : "object" == _typeof(e) && e && (r = e), r) {
      var _Sn = Sn(r, n),
          _i8 = _Sn.refined,
          _s6 = _Sn.extra,
          _o5 = function (e, t) {
        var n = t.pluginHooks.eventSourceDefs;

        for (var _t12 = n.length - 1; _t12 >= 0; _t12 -= 1) {
          var _r17 = n[_t12].parseMeta(e);

          if (_r17) return {
            sourceDefId: _t12,
            meta: _r17
          };
        }

        return null;
      }(_i8, t);

      if (_o5) return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: _i8.defaultAllDay,
        eventDataTransform: _i8.eventDataTransform,
        success: _i8.success,
        failure: _i8.failure,
        publicId: _i8.id || "",
        sourceId: Ke(),
        sourceDefId: _o5.sourceDefId,
        meta: _o5.meta,
        ui: Er(_i8, t),
        extendedProps: _s6
      };
    }

    return null;
  }

  function Cr(e) {
    return Object.assign(Object.assign(Object.assign({}, br), Sr), e.pluginHooks.eventSourceRefiners);
  }

  function Rr(e, t, n, r, i) {
    switch (t.type) {
      case "RECEIVE_EVENTS":
        return function (e, t, n, r, i, s) {
          if (t && n === t.latestFetchId) {
            var _n16 = ur(function (e, t, n) {
              var r = n.options.eventDataTransform,
                  i = t ? t.eventDataTransform : null;
              i && (e = xr(e, i));
              r && (e = xr(e, r));
              return e;
            }(i, t, s), t, s);

            return r && (_n16 = nr(_n16, r, s)), pr(_r(e, t.sourceId), _n16);
          }

          return e;
        }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);

      case "ADD_EVENTS":
        return function (e, t, n, r) {
          n && (t = nr(t, n, r));
          return pr(e, t);
        }(e, t.eventStore, r ? r.activeRange : null, i);

      case "RESET_EVENTS":
        return t.eventStore;

      case "MERGE_EVENTS":
        return pr(e, t.eventStore);

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return r ? nr(e, r.activeRange, i) : e;

      case "REMOVE_EVENTS":
        return function (e, t) {
          var n = e.defs,
              r = e.instances,
              i = {},
              s = {};

          for (var _e15 in n) {
            t.defs[_e15] || (i[_e15] = n[_e15]);
          }

          for (var _e16 in r) {
            !t.instances[_e16] && i[r[_e16].defId] && (s[_e16] = r[_e16]);
          }

          return {
            defs: i,
            instances: s
          };
        }(e, t.eventStore);

      case "REMOVE_EVENT_SOURCE":
        return _r(e, t.sourceId);

      case "REMOVE_ALL_EVENT_SOURCES":
        return mr(e, function (e) {
          return !e.sourceId;
        });

      case "REMOVE_ALL_EVENTS":
        return {
          defs: {},
          instances: {}
        };

      default:
        return e;
    }
  }

  function xr(e, t) {
    var n;

    if (t) {
      n = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = e[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _r18 = _step6.value;

          var _e17 = t(_r18);

          _e17 ? n.push(_e17) : null == _e17 && n.push(_r18);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    } else n = e;

    return n;
  }

  function _r(e, t) {
    return mr(e, function (e) {
      return e.sourceId !== t;
    });
  }

  var Tr =
  /*#__PURE__*/
  function () {
    function Tr() {
      _classCallCheck(this, Tr);

      this.handlers = {}, this.thisContext = null;
    }

    _createClass(Tr, [{
      key: "setThisContext",
      value: function setThisContext(e) {
        this.thisContext = e;
      }
    }, {
      key: "setOptions",
      value: function setOptions(e) {
        this.options = e;
      }
    }, {
      key: "on",
      value: function on(e, t) {
        !function (e, t, n) {
          (e[t] || (e[t] = [])).push(n);
        }(this.handlers, e, t);
      }
    }, {
      key: "off",
      value: function off(e, t) {
        !function (e, t, n) {
          n ? e[t] && (e[t] = e[t].filter(function (e) {
            return e !== n;
          })) : delete e[t];
        }(this.handlers, e, t);
      }
    }, {
      key: "trigger",
      value: function trigger(e) {
        var n = this.handlers[e] || [],
            r = this.options && this.options[e],
            i = [].concat(r || [], n);

        for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          t[_key2 - 1] = arguments[_key2];
        }

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = i[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _e18 = _step7.value;

            _e18.apply(this.thisContext, t);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }, {
      key: "hasHandlers",
      value: function hasHandlers(e) {
        return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
      }
    }]);

    return Tr;
  }();

  var kr = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours"
  };

  function Mr(e, t) {
    return ur(function (e) {
      var t;
      t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function (e) {
        return e.daysOfWeek;
      }) : "object" == _typeof(e) && e ? [e] : [];
      return t = t.map(function (e) {
        return Object.assign(Object.assign({}, kr), e);
      }), t;
    }(e), null, t);
  }

  function Ir(e, t, n) {
    n.emitter.trigger("select", Object.assign(Object.assign({}, Or(e, n)), {
      jsEvent: t ? t.origEvent : null,
      view: n.viewApi || n.calendarApi.view
    }));
  }

  function Or(e, t) {
    var n = {};
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = t.pluginHooks.dateSpanTransforms[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _r19 = _step8.value;
        Object.assign(n, _r19(e, t));
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
          _iterator8["return"]();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

    var r, i;
    return Object.assign(n, (r = e, i = t.dateEnv, Object.assign(Object.assign({}, ai(r.range, i, r.allDay)), {
      allDay: r.allDay
    }))), n;
  }

  function Nr(e, t, n) {
    var r = n.dateEnv,
        i = n.options,
        s = t;
    return e ? (s = wt(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
  }

  function Pr(e, t, n, r) {
    var i = Gr(e.defs, t),
        s = {
      defs: {},
      instances: {}
    };

    for (var _t13 in e.defs) {
      var _o6 = e.defs[_t13];
      s.defs[_t13] = Hr(_o6, i[_t13], n, r);
    }

    for (var _t14 in e.instances) {
      var _o7 = e.instances[_t14],
          _a3 = s.defs[_o7.defId];
      s.instances[_t14] = Br(_o7, _a3, i[_o7.defId], n, r);
    }

    return s;
  }

  function Hr(e, t, n, r) {
    var i = n.standardProps || {};
    null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
    var s = Object.assign(Object.assign(Object.assign({}, e), i), {
      ui: Object.assign(Object.assign({}, e.ui), i.ui)
    });
    n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = r.pluginHooks.eventDefMutationAppliers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var _e19 = _step9.value;

        _e19(s, n, r);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
          _iterator9["return"]();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }

    return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
  }

  function Br(e, t, n, r, i) {
    var s = i.dateEnv,
        o = r.standardProps && !0 === r.standardProps.allDay,
        a = r.standardProps && !1 === r.standardProps.hasEnd,
        l = Object.assign({}, e);
    return o && (l.range = Zn(l.range)), r.datesDelta && n.startEditable && (l.range = {
      start: s.add(l.range.start, r.datesDelta),
      end: s.add(l.range.end, r.datesDelta)
    }), r.startDelta && n.durationEditable && (l.range = {
      start: s.add(l.range.start, r.startDelta),
      end: l.range.end
    }), r.endDelta && n.durationEditable && (l.range = {
      start: l.range.start,
      end: s.add(l.range.end, r.endDelta)
    }), a && (l.range = {
      start: l.range.start,
      end: Nr(t.allDay, l.range.start, i)
    }), t.allDay && (l.range = {
      start: wt(l.range.start),
      end: wt(l.range.end)
    }), l.range.end < l.range.start && (l.range.end = Nr(t.allDay, l.range.start, i)), l;
  }

  var jr =
  /*#__PURE__*/
  function () {
    function jr(e, t) {
      _classCallCheck(this, jr);

      this.context = e, this.internalEventSource = t;
    }

    _createClass(jr, [{
      key: "remove",
      value: function remove() {
        this.context.dispatch({
          type: "REMOVE_EVENT_SOURCE",
          sourceId: this.internalEventSource.sourceId
        });
      }
    }, {
      key: "refetch",
      value: function refetch() {
        this.context.dispatch({
          type: "FETCH_EVENT_SOURCES",
          sourceIds: [this.internalEventSource.sourceId],
          isRefetch: !0
        });
      }
    }, {
      key: "id",
      get: function get() {
        return this.internalEventSource.publicId;
      }
    }, {
      key: "url",
      get: function get() {
        return this.internalEventSource.meta.url;
      }
    }, {
      key: "format",
      get: function get() {
        return this.internalEventSource.meta.format;
      }
    }]);

    return jr;
  }();

  var zr =
  /*#__PURE__*/
  function () {
    function zr(e, t, n) {
      _classCallCheck(this, zr);

      this._context = e, this._def = t, this._instance = n || null;
    }

    _createClass(zr, [{
      key: "setProp",
      value: function setProp(e, t) {
        if (e in sr) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if ("id" === e) t = ir[e](t), this.mutate({
          standardProps: {
            publicId: t
          }
        });else if (e in ir) t = ir[e](t), this.mutate({
          standardProps: _defineProperty({}, e, t)
        });else if (e in br) {
          var _n17 = br[e](t);

          _n17 = "color" === e ? {
            backgroundColor: t,
            borderColor: t
          } : "editable" === e ? {
            startEditable: t,
            durationEditable: t
          } : _defineProperty({}, e, t), this.mutate({
            standardProps: {
              ui: _n17
            }
          });
        } else console.warn("Could not set prop '".concat(e, "'. Use setExtendedProp instead."));
      }
    }, {
      key: "setExtendedProp",
      value: function setExtendedProp(e, t) {
        this.mutate({
          extendedProps: _defineProperty({}, e, t)
        });
      }
    }, {
      key: "setStart",
      value: function setStart(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = this._context.dateEnv,
            r = n.createMarker(e);

        if (r && this._instance) {
          var _e20 = $n(this._instance.range.start, r, n, t.granularity);

          t.maintainDuration ? this.mutate({
            datesDelta: _e20
          }) : this.mutate({
            startDelta: _e20
          });
        }
      }
    }, {
      key: "setEnd",
      value: function setEnd(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n,
            r = this._context.dateEnv;
        if ((null == e || (n = r.createMarker(e), n)) && this._instance) if (n) {
          var _e21 = $n(this._instance.range.end, n, r, t.granularity);

          this.mutate({
            endDelta: _e21
          });
        } else this.mutate({
          standardProps: {
            hasEnd: !1
          }
        });
      }
    }, {
      key: "setDates",
      value: function setDates(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var r,
            i = this._context.dateEnv,
            s = {
          allDay: n.allDay
        },
            o = i.createMarker(e);
        var a, l;

        if (o && (null == t || (r = i.createMarker(t), r)) && this._instance) {
          var _e22 = this._instance.range;
          !0 === n.allDay && (_e22 = Zn(_e22));

          var _t15 = $n(_e22.start, o, i, n.granularity);

          if (r) {
            var _o8 = $n(_e22.end, r, i, n.granularity);

            l = _o8, (a = _t15).years === l.years && a.months === l.months && a.days === l.days && a.milliseconds === l.milliseconds ? this.mutate({
              datesDelta: _t15,
              standardProps: s
            }) : this.mutate({
              startDelta: _t15,
              endDelta: _o8,
              standardProps: s
            });
          } else s.hasEnd = !1, this.mutate({
            datesDelta: _t15,
            standardProps: s
          });
        }
      }
    }, {
      key: "moveStart",
      value: function moveStart(e) {
        var t = jt(e);
        t && this.mutate({
          startDelta: t
        });
      }
    }, {
      key: "moveEnd",
      value: function moveEnd(e) {
        var t = jt(e);
        t && this.mutate({
          endDelta: t
        });
      }
    }, {
      key: "moveDates",
      value: function moveDates(e) {
        var t = jt(e);
        t && this.mutate({
          datesDelta: t
        });
      }
    }, {
      key: "setAllDay",
      value: function setAllDay(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = {
          allDay: e
        },
            r = t.maintainDuration;
        null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
          standardProps: n
        });
      }
    }, {
      key: "formatRange",
      value: function formatRange(e) {
        var t = this._context.dateEnv,
            n = this._instance,
            r = gn(e);
        return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
          forcedStartTzo: n.forcedStartTzo,
          forcedEndTzo: n.forcedEndTzo
        }) : t.format(n.range.start, r, {
          forcedTzo: n.forcedStartTzo
        });
      }
    }, {
      key: "mutate",
      value: function mutate(e) {
        var t = this._instance;

        if (t) {
          var _n18 = this._def,
              _r20 = this._context,
              _r20$getCurrentData = _r20.getCurrentData(),
              _i9 = _r20$getCurrentData.eventStore,
              _s7 = fr(_i9, t.instanceId);

          _s7 = Pr(_s7, {
            "": {
              display: "",
              startEditable: !0,
              durationEditable: !0,
              constraints: [],
              overlap: null,
              allows: [],
              backgroundColor: "",
              borderColor: "",
              textColor: "",
              classNames: []
            }
          }, e, _r20);

          var _o9 = new zr(_r20, _n18, t);

          this._def = _s7.defs[_n18.defId], this._instance = _s7.instances[t.instanceId], _r20.dispatch({
            type: "MERGE_EVENTS",
            eventStore: _s7
          }), _r20.emitter.trigger("eventChange", {
            oldEvent: _o9,
            event: this,
            relatedEvents: Lr(_s7, _r20, t),
            revert: function revert() {
              _r20.dispatch({
                type: "RESET_EVENTS",
                eventStore: _i9
              });
            }
          });
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        var e = this._context,
            t = Ur(this);
        e.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: t
        }), e.emitter.trigger("eventRemove", {
          event: this,
          relatedEvents: [],
          revert: function revert() {
            e.dispatch({
              type: "MERGE_EVENTS",
              eventStore: t
            });
          }
        });
      }
    }, {
      key: "toPlainObject",
      value: function toPlainObject() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this._def,
            n = t.ui,
            r = this.startStr,
            i = this.endStr,
            s = {};
        return t.title && (s.title = t.title), r && (s.start = r), i && (s.end = i), t.publicId && (s.id = t.publicId), t.groupId && (s.groupId = t.groupId), t.url && (s.url = t.url), n.display && "auto" !== n.display && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(s, t.extendedProps) : s.extendedProps = t.extendedProps), s;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toPlainObject();
      }
    }, {
      key: "source",
      get: function get() {
        var e = this._def.sourceId;
        return e ? new jr(this._context, this._context.getCurrentData().eventSources[e]) : null;
      }
    }, {
      key: "start",
      get: function get() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
      }
    }, {
      key: "end",
      get: function get() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
      }
    }, {
      key: "startStr",
      get: function get() {
        var e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        }) : "";
      }
    }, {
      key: "endStr",
      get: function get() {
        var e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        }) : "";
      }
    }, {
      key: "id",
      get: function get() {
        return this._def.publicId;
      }
    }, {
      key: "groupId",
      get: function get() {
        return this._def.groupId;
      }
    }, {
      key: "allDay",
      get: function get() {
        return this._def.allDay;
      }
    }, {
      key: "title",
      get: function get() {
        return this._def.title;
      }
    }, {
      key: "url",
      get: function get() {
        return this._def.url;
      }
    }, {
      key: "display",
      get: function get() {
        return this._def.ui.display || "auto";
      }
    }, {
      key: "startEditable",
      get: function get() {
        return this._def.ui.startEditable;
      }
    }, {
      key: "durationEditable",
      get: function get() {
        return this._def.ui.durationEditable;
      }
    }, {
      key: "constraint",
      get: function get() {
        return this._def.ui.constraints[0] || null;
      }
    }, {
      key: "overlap",
      get: function get() {
        return this._def.ui.overlap;
      }
    }, {
      key: "allow",
      get: function get() {
        return this._def.ui.allows[0] || null;
      }
    }, {
      key: "backgroundColor",
      get: function get() {
        return this._def.ui.backgroundColor;
      }
    }, {
      key: "borderColor",
      get: function get() {
        return this._def.ui.borderColor;
      }
    }, {
      key: "textColor",
      get: function get() {
        return this._def.ui.textColor;
      }
    }, {
      key: "classNames",
      get: function get() {
        return this._def.ui.classNames;
      }
    }, {
      key: "extendedProps",
      get: function get() {
        return this._def.extendedProps;
      }
    }]);

    return zr;
  }();

  function Ur(e) {
    var t = e._def,
        n = e._instance;
    return {
      defs: _defineProperty({}, t.defId, t),
      instances: n ? _defineProperty({}, n.instanceId, n) : {}
    };
  }

  function Lr(e, t, n) {
    var r = e.defs,
        i = e.instances,
        s = [],
        o = n ? n.instanceId : "";

    for (var _e23 in i) {
      var _n19 = i[_e23],
          _a4 = r[_n19.defId];
      _n19.instanceId !== o && s.push(new zr(t, _a4, _n19));
    }

    return s;
  }

  function Wr(e, t, n, r) {
    var i = {},
        s = {},
        o = {},
        a = [],
        l = [],
        c = Gr(e.defs, t);

    for (var _t16 in e.defs) {
      var _n20 = e.defs[_t16];
      "inverse-background" === c[_n20.defId].display && (_n20.groupId ? (i[_n20.groupId] = [], o[_n20.groupId] || (o[_n20.groupId] = _n20)) : s[_t16] = []);
    }

    for (var _t17 in e.instances) {
      var _o10 = e.instances[_t17],
          _d = e.defs[_o10.defId],
          _u = c[_d.defId],
          _h = _o10.range,
          _f = !_d.allDay && r ? Xn(_h, r) : _h,
          _g = Vn(_f, n);

      _g && ("inverse-background" === _u.display ? _d.groupId ? i[_d.groupId].push(_g) : s[_o10.defId].push(_g) : "none" !== _u.display && ("background" === _u.display ? a : l).push({
        def: _d,
        ui: _u,
        instance: _o10,
        range: _g,
        isStart: _f.start && _f.start.valueOf() === _g.start.valueOf(),
        isEnd: _f.end && _f.end.valueOf() === _g.end.valueOf()
      }));
    }

    for (var _e24 in i) {
      var _t18 = Wn(i[_e24], n);

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = _t18[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var _n21 = _step10.value;
          var _t19 = o[_e24],
              _r21 = c[_t19.defId];
          a.push({
            def: _t19,
            ui: _r21,
            instance: null,
            range: _n21,
            isStart: !1,
            isEnd: !1
          });
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }

    for (var _t20 in s) {
      var _r22 = Wn(s[_t20], n);

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = _r22[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _n22 = _step11.value;
          a.push({
            def: e.defs[_t20],
            ui: c[_t20],
            instance: null,
            range: _n22,
            isStart: !1,
            isEnd: !1
          });
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }
    }

    return {
      bg: a,
      fg: l
    };
  }

  function Fr(e) {
    return "background" === e.ui.display || "inverse-background" === e.ui.display;
  }

  function Vr(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }

  function Gr(e, t) {
    return we(e, function (e) {
      return Qr(e, t);
    });
  }

  function Qr(e, t) {
    var n = [];
    return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Ar(n);
  }

  function qr(e, t) {
    var n = e.map(Yr);
    return n.sort(function (e, n) {
      return at(e, n, t);
    }), n.map(function (e) {
      return e._seg;
    });
  }

  function Yr(e) {
    var t = e.eventRange,
        n = t.def,
        r = t.instance ? t.instance.range : t.range,
        i = r.start ? r.start.valueOf() : 0,
        s = r.end ? r.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
      id: n.publicId,
      start: i,
      end: s,
      duration: s - i,
      allDay: Number(n.allDay),
      _seg: e
    });
  }

  function Zr(e, t) {
    var n = t.pluginHooks,
        r = n.isDraggableTransformers,
        _e$eventRange = e.eventRange,
        i = _e$eventRange.def,
        s = _e$eventRange.ui,
        o = s.startEditable;
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = r[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var _e25 = _step12.value;
        o = _e25(o, i, s, t);
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
          _iterator12["return"]();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }

    return o;
  }

  function Xr(e, t) {
    return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
  }

  function Jr(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }

  function $r(e, t, n, r, i, s, o) {
    var a = n.dateEnv,
        l = n.options,
        c = l.displayEventTime,
        d = l.displayEventEnd,
        u = e.eventRange.def,
        h = e.eventRange.instance;
    null == c && (c = !1 !== r), null == d && (d = !1 !== i);
    var f = h.range.start,
        g = h.range.end,
        p = s || e.start || e.eventRange.range.start,
        m = o || e.end || e.eventRange.range.end,
        v = wt(f).valueOf() === wt(p).valueOf(),
        b = wt(bt(g, -1)).valueOf() === wt(bt(m, -1)).valueOf();
    return c && !u.allDay && (v || b) ? (p = v ? f : p, m = b ? g : m, d && u.hasEnd ? a.formatRange(p, m, t, {
      forcedStartTzo: s ? null : h.forcedStartTzo,
      forcedEndTzo: o ? null : h.forcedEndTzo
    }) : a.format(p, t, {
      forcedTzo: s ? null : h.forcedStartTzo
    })) : "";
  }

  function Kr(e, t, n) {
    var r = e.eventRange.range;
    return {
      isPast: r.end < (n || t.start),
      isFuture: r.start >= (n || t.end),
      isToday: t && Yn(t, r.start)
    };
  }

  function ei(e) {
    var t = ["fc-event"];
    return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
  }

  function ti(e) {
    return e.instance ? e.instance.instanceId : "".concat(e.def.defId, ":").concat(e.range.start.toISOString());
  }

  function ni(e, t) {
    var _e$eventRange2 = e.eventRange,
        n = _e$eventRange2.def,
        r = _e$eventRange2.instance,
        i = n.url;
    if (i) return {
      href: i
    };
    var s = t.emitter,
        o = t.options,
        a = o.eventInteractive;
    return null == a && (a = n.interactive, null == a && (a = Boolean(s.hasHandlers("eventClick")))), a ? Je(function (e) {
      s.trigger("eventClick", {
        el: e.target,
        event: new zr(t, n, r),
        jsEvent: e,
        view: t.viewApi
      });
    }) : {};
  }

  var ri = {
    start: wn,
    end: wn,
    allDay: Boolean
  };

  function ii(e, t, n) {
    var r = function (e, t) {
      var _Sn2 = Sn(e, ri),
          n = _Sn2.refined,
          r = _Sn2.extra,
          i = n.start ? t.createMarkerMeta(n.start) : null,
          s = n.end ? t.createMarkerMeta(n.end) : null,
          o = n.allDay;

      null == o && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified));
      return Object.assign({
        range: {
          start: i ? i.marker : null,
          end: s ? s.marker : null
        },
        allDay: o
      }, r);
    }(e, t),
        i = r.range;

    if (!i.start) return null;

    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }

    return r;
  }

  function si(e, t) {
    return Gn(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
      for (var _n23 in t) {
        if ("range" !== _n23 && "allDay" !== _n23 && e[_n23] !== t[_n23]) return !1;
      }

      for (var _n24 in e) {
        if (!(_n24 in t)) return !1;
      }

      return !0;
    }(e, t);
  }

  function oi(e, t, n) {
    return Object.assign(Object.assign({}, ai(e, t, n)), {
      timeZone: t.timeZone
    });
  }

  function ai(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, {
        omitTime: n
      }),
      endStr: t.formatIso(e.end, {
        omitTime: n
      })
    };
  }

  function li(e, t, n) {
    var r = !1,
        i = function i(e) {
      r || (r = !0, t(e));
    },
        s = function s(e) {
      r || (r = !0, n(e));
    },
        o = e(i, s);

    o && "function" == typeof o.then && o.then(i, s);
  }

  var ci =
  /*#__PURE__*/
  function (_Error) {
    _inherits(ci, _Error);

    function ci(e, t) {
      var _this6;

      _classCallCheck(this, ci);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ci).call(this, e)), _this6.response = t;
      return _this6;
    }

    return ci;
  }(_wrapNativeSuper(Error));

  function di(e, t, n) {
    var r = {
      method: e = e.toUpperCase()
    };
    return "GET" === e ? t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }), fetch(t, r).then(function (e) {
      if (e.ok) return e.json().then(function (t) {
        return [t, e];
      }, function () {
        throw new ci("Failure parsing JSON", e);
      });
      throw new ci("Request failed", e);
    });
  }

  var ui;

  function hi() {
    return null == ui && (ui = function () {
      if ("undefined" == typeof document) return !0;
      var e = document.createElement("div");
      e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
      var t = e.querySelector("div").offsetHeight > 0;
      return document.body.removeChild(e), t;
    }()), ui;
  }

  var fi =
  /*#__PURE__*/
  function (_In3) {
    _inherits(fi, _In3);

    function fi() {
      var _this7;

      _classCallCheck(this, fi);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(fi).apply(this, arguments)), _this7.state = {
        forPrint: !1
      }, _this7.handleBeforePrint = function () {
        _this7.setState({
          forPrint: !0
        });
      }, _this7.handleAfterPrint = function () {
        _this7.setState({
          forPrint: !1
        });
      };
      return _this7;
    }

    _createClass(fi, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.options,
            n = this.state.forPrint,
            r = n || "auto" === t.height || "auto" === t.contentHeight,
            i = r || null == t.height ? "" : t.height,
            s = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
        return hi() || s.push("fc-liquid-hack"), e.children(s, i, r, n);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e = this.props.emitter;
        e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var e = this.props.emitter;
        e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
      }
    }]);

    return fi;
  }(In);

  var gi =
  /*#__PURE__*/
  function () {
    function gi(e) {
      _classCallCheck(this, gi);

      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }

    _createClass(gi, [{
      key: "destroy",
      value: function destroy() {}
    }]);

    return gi;
  }();

  function pi(e) {
    return _defineProperty({}, e.component.uid, e);
  }

  var mi = {};

  var vi =
  /*#__PURE__*/
  function () {
    function vi() {
      _classCallCheck(this, vi);
    }

    _createClass(vi, [{
      key: "getCurrentData",
      value: function getCurrentData() {
        return this.currentDataManager.getCurrentData();
      }
    }, {
      key: "dispatch",
      value: function dispatch(e) {
        this.currentDataManager.dispatch(e);
      }
    }, {
      key: "batchRendering",
      value: function batchRendering(e) {
        e();
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        this.trigger("_resize", !0);
      }
    }, {
      key: "setOption",
      value: function setOption(e, t) {
        this.dispatch({
          type: "SET_OPTION",
          optionName: e,
          rawOptionValue: t
        });
      }
    }, {
      key: "getOption",
      value: function getOption(e) {
        return this.currentDataManager.currentCalendarOptionsInput[e];
      }
    }, {
      key: "getAvailableLocaleCodes",
      value: function getAvailableLocaleCodes() {
        return Object.keys(this.getCurrentData().availableRawLocales);
      }
    }, {
      key: "on",
      value: function on(e, t) {
        var n = this.currentDataManager;
        n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '".concat(e, "'"));
      }
    }, {
      key: "off",
      value: function off(e, t) {
        this.currentDataManager.emitter.off(e, t);
      }
    }, {
      key: "trigger",
      value: function trigger(e) {
        var _this$currentDataMana;

        for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          t[_key3 - 1] = arguments[_key3];
        }

        (_this$currentDataMana = this.currentDataManager.emitter).trigger.apply(_this$currentDataMana, [e].concat(t));
      }
    }, {
      key: "changeView",
      value: function changeView(e, t) {
        var _this8 = this;

        this.batchRendering(function () {
          if (_this8.unselect(), t) {
            if (t.start && t.end) _this8.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e
            }), _this8.dispatch({
              type: "SET_OPTION",
              optionName: "visibleRange",
              rawOptionValue: t
            });else {
              var _this8$getCurrentData = _this8.getCurrentData(),
                  _n25 = _this8$getCurrentData.dateEnv;

              _this8.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: e,
                dateMarker: _n25.createMarker(t)
              });
            }
          } else _this8.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          });
        });
      }
    }, {
      key: "zoomTo",
      value: function zoomTo(e, t) {
        var n;
        t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: n.type,
          dateMarker: e
        }) : this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e
        });
      }
    }, {
      key: "getUnitViewSpec",
      value: function getUnitViewSpec(e) {
        var t,
            n,
            _this$getCurrentData = this.getCurrentData(),
            r = _this$getCurrentData.viewSpecs,
            i = _this$getCurrentData.toolbarConfig,
            s = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);

        for (var _e26 in r) {
          s.push(_e26);
        }

        for (t = 0; t < s.length; t += 1) {
          if (n = r[s[t]], n && n.singleUnit === e) return n;
        }

        return null;
      }
    }, {
      key: "prev",
      value: function prev() {
        this.unselect(), this.dispatch({
          type: "PREV"
        });
      }
    }, {
      key: "next",
      value: function next() {
        this.unselect(), this.dispatch({
          type: "NEXT"
        });
      }
    }, {
      key: "prevYear",
      value: function prevYear() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, -1)
        });
      }
    }, {
      key: "nextYear",
      value: function nextYear() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, 1)
        });
      }
    }, {
      key: "today",
      value: function today() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: Kn(e.calendarOptions.now, e.dateEnv)
        });
      }
    }, {
      key: "gotoDate",
      value: function gotoDate(e) {
        var t = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.createMarker(e)
        });
      }
    }, {
      key: "incrementDate",
      value: function incrementDate(e) {
        var t = this.getCurrentData(),
            n = jt(e);
        n && (this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.add(t.currentDate, n)
        }));
      }
    }, {
      key: "getDate",
      value: function getDate() {
        var e = this.getCurrentData();
        return e.dateEnv.toDate(e.currentDate);
      }
    }, {
      key: "formatDate",
      value: function formatDate(e, t) {
        var _this$getCurrentData2 = this.getCurrentData(),
            n = _this$getCurrentData2.dateEnv;

        return n.format(n.createMarker(e), gn(t));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n) {
        var _this$getCurrentData3 = this.getCurrentData(),
            r = _this$getCurrentData3.dateEnv;

        return r.formatRange(r.createMarker(e), r.createMarker(t), gn(n), n);
      }
    }, {
      key: "formatIso",
      value: function formatIso(e, t) {
        var _this$getCurrentData4 = this.getCurrentData(),
            n = _this$getCurrentData4.dateEnv;

        return n.formatIso(n.createMarker(e), {
          omitTime: t
        });
      }
    }, {
      key: "select",
      value: function select(e, t) {
        var n;
        n = null == t ? null != e.start ? e : {
          start: e,
          end: null
        } : {
          start: e,
          end: t
        };
        var r = this.getCurrentData(),
            i = ii(n, r.dateEnv, jt({
          days: 1
        }));
        i && (this.dispatch({
          type: "SELECT_DATES",
          selection: i
        }), Ir(i, null, r));
      }
    }, {
      key: "unselect",
      value: function unselect(e) {
        var t = this.getCurrentData();
        t.dateSelection && (this.dispatch({
          type: "UNSELECT_DATES"
        }), function (e, t) {
          t.emitter.trigger("unselect", {
            jsEvent: e ? e.origEvent : null,
            view: t.viewApi || t.calendarApi.view
          });
        }(e, t));
      }
    }, {
      key: "addEvent",
      value: function addEvent(e, t) {
        var _Re, _Re2;

        if (e instanceof zr) {
          var _t21 = e._def,
              _n26 = e._instance;
          return this.getCurrentData().eventStore.defs[_t21.defId] || (this.dispatch({
            type: "ADD_EVENTS",
            eventStore: hr({
              def: _t21,
              instance: _n26
            })
          }), this.triggerEventAdd(e)), e;
        }

        var n,
            r = this.getCurrentData();
        if (t instanceof jr) n = t.internalEventSource;else if ("boolean" == typeof t) t && (_Re = Re(r.eventSources), _Re2 = _slicedToArray(_Re, 1), n = _Re2[0], _Re);else if (null != t) {
          var _e27 = this.getEventSourceById(t);

          if (!_e27) return console.warn("Could not find an event source with ID \"".concat(t, "\"")), null;
          n = _e27.internalEventSource;
        }
        var i = ar(e, n, r, !1);

        if (i) {
          var _e28 = new zr(r, i.def, i.def.recurringDef ? null : i.instance);

          return this.dispatch({
            type: "ADD_EVENTS",
            eventStore: hr(i)
          }), this.triggerEventAdd(_e28), _e28;
        }

        return null;
      }
    }, {
      key: "triggerEventAdd",
      value: function triggerEventAdd(e) {
        var _this9 = this;

        var _this$getCurrentData5 = this.getCurrentData(),
            t = _this$getCurrentData5.emitter;

        t.trigger("eventAdd", {
          event: e,
          relatedEvents: [],
          revert: function revert() {
            _this9.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: Ur(e)
            });
          }
        });
      }
    }, {
      key: "getEventById",
      value: function getEventById(e) {
        var t = this.getCurrentData(),
            _t$eventStore = t.eventStore,
            n = _t$eventStore.defs,
            r = _t$eventStore.instances;
        e = String(e);

        for (var _i10 in n) {
          var _s8 = n[_i10];

          if (_s8.publicId === e) {
            if (_s8.recurringDef) return new zr(t, _s8, null);

            for (var _e29 in r) {
              var _n27 = r[_e29];
              if (_n27.defId === _s8.defId) return new zr(t, _s8, _n27);
            }
          }
        }

        return null;
      }
    }, {
      key: "getEvents",
      value: function getEvents() {
        var e = this.getCurrentData();
        return Lr(e.eventStore, e);
      }
    }, {
      key: "removeAllEvents",
      value: function removeAllEvents() {
        this.dispatch({
          type: "REMOVE_ALL_EVENTS"
        });
      }
    }, {
      key: "getEventSources",
      value: function getEventSources() {
        var e = this.getCurrentData(),
            t = e.eventSources,
            n = [];

        for (var _r23 in t) {
          n.push(new jr(e, t[_r23]));
        }

        return n;
      }
    }, {
      key: "getEventSourceById",
      value: function getEventSourceById(e) {
        var t = this.getCurrentData(),
            n = t.eventSources;
        e = String(e);

        for (var _r24 in n) {
          if (n[_r24].publicId === e) return new jr(t, n[_r24]);
        }

        return null;
      }
    }, {
      key: "addEventSource",
      value: function addEventSource(e) {
        var t = this.getCurrentData();
        if (e instanceof jr) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [e.internalEventSource]
        }), e;
        var n = wr(e, t);
        return n ? (this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [n]
        }), new jr(t, n)) : null;
      }
    }, {
      key: "removeAllEventSources",
      value: function removeAllEventSources() {
        this.dispatch({
          type: "REMOVE_ALL_EVENT_SOURCES"
        });
      }
    }, {
      key: "refetchEvents",
      value: function refetchEvents() {
        this.dispatch({
          type: "FETCH_EVENT_SOURCES",
          isRefetch: !0
        });
      }
    }, {
      key: "scrollToTime",
      value: function scrollToTime(e) {
        var t = jt(e);
        t && this.trigger("_scrollRequest", {
          time: t
        });
      }
    }, {
      key: "view",
      get: function get() {
        return this.getCurrentData().viewApi;
      }
    }]);

    return vi;
  }();

  function bi(e, t) {
    return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
  }

  function yi(e, t) {
    var n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom)
    };
    return n.left < n.right && n.top < n.bottom && n;
  }

  function Ei(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom)
    };
  }

  function Ai(e) {
    return {
      left: (e.left + e.right) / 2,
      top: (e.top + e.bottom) / 2
    };
  }

  function Di(e, t) {
    return {
      left: e.left - t.left,
      top: e.top - t.top
    };
  }

  var Si = {
    defs: {},
    instances: {}
  };

  var wi =
  /*#__PURE__*/
  function () {
    function wi() {
      _classCallCheck(this, wi);

      this.getKeysForEventDefs = Oe(this._getKeysForEventDefs), this.splitDateSelection = Oe(this._splitDateSpan), this.splitEventStore = Oe(this._splitEventStore), this.splitIndividualUi = Oe(this._splitIndividualUi), this.splitEventDrag = Oe(this._splitInteraction), this.splitEventResize = Oe(this._splitInteraction), this.eventUiBuilders = {};
    }

    _createClass(wi, [{
      key: "splitProps",
      value: function splitProps(e) {
        var _this10 = this;

        var t = this.getKeyInfo(e),
            n = this.getKeysForEventDefs(e.eventStore),
            r = this.splitDateSelection(e.dateSelection),
            i = this.splitIndividualUi(e.eventUiBases, n),
            s = this.splitEventStore(e.eventStore, n),
            o = this.splitEventDrag(e.eventDrag),
            a = this.splitEventResize(e.eventResize),
            l = {};
        this.eventUiBuilders = we(t, function (e, t) {
          return _this10.eventUiBuilders[t] || Oe(Ci);
        });

        for (var _n28 in t) {
          var _c = t[_n28],
              _d2 = s[_n28] || Si,
              _u2 = this.eventUiBuilders[_n28];

          l[_n28] = {
            businessHours: _c.businessHours || e.businessHours,
            dateSelection: r[_n28] || null,
            eventStore: _d2,
            eventUiBases: _u2(e.eventUiBases[""], _c.ui, i[_n28]),
            eventSelection: _d2.instances[e.eventSelection] ? e.eventSelection : "",
            eventDrag: o[_n28] || null,
            eventResize: a[_n28] || null
          };
        }

        return l;
      }
    }, {
      key: "_splitDateSpan",
      value: function _splitDateSpan(e) {
        var t = {};

        if (e) {
          var _n29 = this.getKeysForDateSpan(e);

          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = _n29[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _r25 = _step13.value;
              t[_r25] = e;
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }
        }

        return t;
      }
    }, {
      key: "_getKeysForEventDefs",
      value: function _getKeysForEventDefs(e) {
        var _this11 = this;

        return we(e.defs, function (e) {
          return _this11.getKeysForEventDef(e);
        });
      }
    }, {
      key: "_splitEventStore",
      value: function _splitEventStore(e, t) {
        var n = e.defs,
            r = e.instances,
            i = {};

        for (var _e30 in n) {
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = t[_e30][Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var _r26 = _step14.value;
              i[_r26] || (i[_r26] = {
                defs: {},
                instances: {}
              }), i[_r26].defs[_e30] = n[_e30];
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                _iterator14["return"]();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }
        }

        for (var _e31 in r) {
          var _n30 = r[_e31];
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = t[_n30.defId][Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var _r27 = _step15.value;
              i[_r27] && (i[_r27].instances[_e31] = _n30);
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                _iterator15["return"]();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }
        }

        return i;
      }
    }, {
      key: "_splitIndividualUi",
      value: function _splitIndividualUi(e, t) {
        var n = {};

        for (var _r28 in e) {
          if (_r28) {
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = t[_r28][Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var _i11 = _step16.value;
                n[_i11] || (n[_i11] = {}), n[_i11][_r28] = e[_r28];
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                  _iterator16["return"]();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }
          }
        }

        return n;
      }
    }, {
      key: "_splitInteraction",
      value: function _splitInteraction(e) {
        var t = {};

        if (e) {
          var _n31 = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
              _r29 = this._getKeysForEventDefs(e.mutatedEvents),
              _i12 = this._splitEventStore(e.mutatedEvents, _r29),
              _s9 = function _s9(r) {
            t[r] || (t[r] = {
              affectedEvents: _n31[r] || Si,
              mutatedEvents: _i12[r] || Si,
              isEvent: e.isEvent
            });
          };

          for (var _e32 in _n31) {
            _s9(_e32);
          }

          for (var _e33 in _i12) {
            _s9(_e33);
          }
        }

        return t;
      }
    }]);

    return wi;
  }();

  function Ci(e, t, n) {
    var r = [];
    e && r.push(e), t && r.push(t);
    var i = {
      "": Ar(r)
    };
    return n && Object.assign(i, n), i;
  }

  function Ri(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !Yn(r.activeRange, e)),
      isOther: Boolean(r && !Yn(r.currentRange, e)),
      isToday: Boolean(t && Yn(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end)
    };
  }

  function xi(e, t) {
    var n = ["fc-day", "fc-day-" + pt[e.dow]];
    return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
  }

  var _i = gn({
    year: "numeric",
    month: "long",
    day: "numeric"
  }),
      Ti = gn({
    week: "long"
  });

  function ki(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "day";
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var i = e.dateEnv,
        s = e.options,
        o = e.calendarApi;
    var a = i.format(t, "week" === n ? Ti : _i);

    if (s.navLinks) {
      var _e34 = i.toDate(t);

      var _l4 = function _l4(e) {
        var r = "day" === n ? s.navLinkDayClick : "week" === n ? s.navLinkWeekClick : null;
        "function" == typeof r ? r.call(o, i.toDate(t), e) : ("string" == typeof r && (n = r), o.zoomTo(t, n));
      };

      return Object.assign({
        title: ut(s.navLinkHint, [a, _e34], a),
        "data-navlink": ""
      }, r ? Xe(_l4) : {
        onClick: _l4
      });
    }

    return {
      "aria-label": a
    };
  }

  var Mi,
      Ii = null;

  function Oi() {
    return null === Ii && (Ii = function () {
      var e = document.createElement("div");
      Ue(e, {
        position: "absolute",
        top: -1e3,
        left: 0,
        border: 0,
        padding: 0,
        overflow: "scroll",
        direction: "rtl"
      }), e.innerHTML = "<div></div>", document.body.appendChild(e);
      var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
      return Pe(e), t;
    }()), Ii;
  }

  function Ni() {
    return Mi || (Mi = function () {
      var e = document.createElement("div");
      e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
      var t = Pi(e);
      return document.body.removeChild(e), t;
    }()), Mi;
  }

  function Pi(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth
    };
  }

  function Hi(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = window.getComputedStyle(e),
        r = parseInt(n.borderLeftWidth, 10) || 0,
        i = parseInt(n.borderRightWidth, 10) || 0,
        s = parseInt(n.borderTopWidth, 10) || 0,
        o = parseInt(n.borderBottomWidth, 10) || 0,
        a = Pi(e),
        l = a.y - r - i,
        c = {
      borderLeft: r,
      borderRight: i,
      borderTop: s,
      borderBottom: o,
      scrollbarBottom: a.x - s - o,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    return Oi() && "rtl" === n.direction ? c.scrollbarLeft = l : c.scrollbarRight = l, t && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c;
  }

  function Bi(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var r = n ? e.getBoundingClientRect() : ji(e),
        i = Hi(e, t),
        s = {
      left: r.left + i.borderLeft + i.scrollbarLeft,
      right: r.right - i.borderRight - i.scrollbarRight,
      top: r.top + i.borderTop,
      bottom: r.bottom - i.borderBottom - i.scrollbarBottom
    };
    return t && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
  }

  function ji(e) {
    var t = e.getBoundingClientRect();
    return {
      left: t.left + window.pageXOffset,
      top: t.top + window.pageYOffset,
      right: t.right + window.pageXOffset,
      bottom: t.bottom + window.pageYOffset
    };
  }

  function zi(e) {
    var t = [];

    for (; e instanceof HTMLElement;) {
      var _n32 = window.getComputedStyle(e);

      if ("fixed" === _n32.position) break;
      /(auto|scroll)/.test(_n32.overflow + _n32.overflowY + _n32.overflowX) && t.push(e), e = e.parentNode;
    }

    return t;
  }

  var Ui =
  /*#__PURE__*/
  function () {
    function Ui(e, t, n, r) {
      _classCallCheck(this, Ui);

      this.els = t;
      var i = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
    }

    _createClass(Ui, [{
      key: "buildElHorizontals",
      value: function buildElHorizontals(e) {
        var t = [],
            n = [];
        var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = this.els[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var _r30 = _step17.value;

            var _i13 = _r30.getBoundingClientRect();

            t.push(_i13.left - e), n.push(_i13.right - e);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
              _iterator17["return"]();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }

        this.lefts = t, this.rights = n;
      }
    }, {
      key: "buildElVerticals",
      value: function buildElVerticals(e) {
        var t = [],
            n = [];
        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = this.els[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var _r31 = _step18.value;

            var _i14 = _r31.getBoundingClientRect();

            t.push(_i14.top - e), n.push(_i14.bottom - e);
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
              _iterator18["return"]();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }

        this.tops = t, this.bottoms = n;
      }
    }, {
      key: "leftToIndex",
      value: function leftToIndex(e) {
        var t,
            n = this.lefts,
            r = this.rights,
            i = n.length;

        for (t = 0; t < i; t += 1) {
          if (e >= n[t] && e < r[t]) return t;
        }
      }
    }, {
      key: "topToIndex",
      value: function topToIndex(e) {
        var t,
            n = this.tops,
            r = this.bottoms,
            i = n.length;

        for (t = 0; t < i; t += 1) {
          if (e >= n[t] && e < r[t]) return t;
        }
      }
    }, {
      key: "getWidth",
      value: function getWidth(e) {
        return this.rights[e] - this.lefts[e];
      }
    }, {
      key: "getHeight",
      value: function getHeight(e) {
        return this.bottoms[e] - this.tops[e];
      }
    }]);

    return Ui;
  }();

  var Li =
  /*#__PURE__*/
  function () {
    function Li() {
      _classCallCheck(this, Li);
    }

    _createClass(Li, [{
      key: "getMaxScrollTop",
      value: function getMaxScrollTop() {
        return this.getScrollHeight() - this.getClientHeight();
      }
    }, {
      key: "getMaxScrollLeft",
      value: function getMaxScrollLeft() {
        return this.getScrollWidth() - this.getClientWidth();
      }
    }, {
      key: "canScrollVertically",
      value: function canScrollVertically() {
        return this.getMaxScrollTop() > 0;
      }
    }, {
      key: "canScrollHorizontally",
      value: function canScrollHorizontally() {
        return this.getMaxScrollLeft() > 0;
      }
    }, {
      key: "canScrollUp",
      value: function canScrollUp() {
        return this.getScrollTop() > 0;
      }
    }, {
      key: "canScrollDown",
      value: function canScrollDown() {
        return this.getScrollTop() < this.getMaxScrollTop();
      }
    }, {
      key: "canScrollLeft",
      value: function canScrollLeft() {
        return this.getScrollLeft() > 0;
      }
    }, {
      key: "canScrollRight",
      value: function canScrollRight() {
        return this.getScrollLeft() < this.getMaxScrollLeft();
      }
    }]);

    return Li;
  }();

  var Wi =
  /*#__PURE__*/
  function (_Li) {
    _inherits(Wi, _Li);

    function Wi(e) {
      var _this12;

      _classCallCheck(this, Wi);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Wi).call(this)), _this12.el = e;
      return _this12;
    }

    _createClass(Wi, [{
      key: "getScrollTop",
      value: function getScrollTop() {
        return this.el.scrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return this.el.scrollLeft;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        this.el.scrollTop = e;
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        this.el.scrollLeft = e;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.el.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.el.scrollHeight;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return this.el.clientHeight;
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return this.el.clientWidth;
      }
    }]);

    return Wi;
  }(Li);

  var Fi =
  /*#__PURE__*/
  function (_Li2) {
    _inherits(Fi, _Li2);

    function Fi() {
      _classCallCheck(this, Fi);

      return _possibleConstructorReturn(this, _getPrototypeOf(Fi).apply(this, arguments));
    }

    _createClass(Fi, [{
      key: "getScrollTop",
      value: function getScrollTop() {
        return window.pageYOffset;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return window.pageXOffset;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        window.scroll(window.pageXOffset, e);
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        window.scroll(e, window.pageYOffset);
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return document.documentElement.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return document.documentElement.scrollHeight;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return document.documentElement.clientHeight;
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return document.documentElement.clientWidth;
      }
    }]);

    return Fi;
  }(Li);

  var Vi =
  /*#__PURE__*/
  function (_In4) {
    _inherits(Vi, _In4);

    function Vi() {
      var _this13;

      _classCallCheck(this, Vi);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Vi).apply(this, arguments)), _this13.uid = Ke();
      return _this13;
    }

    _createClass(Vi, [{
      key: "prepareHits",
      value: function prepareHits() {}
    }, {
      key: "queryHit",
      value: function queryHit(e, t, n, r) {
        return null;
      }
    }, {
      key: "isValidSegDownEl",
      value: function isValidSegDownEl(e) {
        return !this.props.eventDrag && !this.props.eventResize && !He(e, ".fc-event-mirror");
      }
    }, {
      key: "isValidDateDownEl",
      value: function isValidDateDownEl(e) {
        return !(He(e, ".fc-event:not(.fc-bg-event)") || He(e, ".fc-more-link") || He(e, "a[data-navlink]") || He(e, ".fc-popover"));
      }
    }]);

    return Vi;
  }(In);

  var Gi =
  /*#__PURE__*/
  function () {
    function Gi() {
      _classCallCheck(this, Gi);

      this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
    }

    _createClass(Gi, [{
      key: "addSegs",
      value: function addSegs(e) {
        var t = [];
        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var _n33 = _step19.value;
            this.insertEntry(_n33, t);
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
              _iterator19["return"]();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        return t;
      }
    }, {
      key: "insertEntry",
      value: function insertEntry(e, t) {
        var n = this.findInsertion(e);
        return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t);
      }
    }, {
      key: "isInsertionValid",
      value: function isInsertionValid(e, t) {
        return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt);
      }
    }, {
      key: "handleInvalidInsertion",
      value: function handleInvalidInsertion(e, t, n) {
        return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0);
      }
    }, {
      key: "splitEntry",
      value: function splitEntry(e, t, n) {
        var r = 0,
            i = [],
            s = e.span,
            o = t.span;
        return s.start < o.start && (r += this.insertEntry({
          index: e.index,
          thickness: e.thickness,
          span: {
            start: s.start,
            end: o.start
          }
        }, i)), s.end > o.end && (r += this.insertEntry({
          index: e.index,
          thickness: e.thickness,
          span: {
            start: o.end,
            end: s.end
          }
        }, i)), r ? (n.push.apply(n, [{
          index: e.index,
          thickness: e.thickness,
          span: Zi(o, s)
        }].concat(i)), r) : (n.push(e), 0);
      }
    }, {
      key: "insertEntryAt",
      value: function insertEntryAt(e, t) {
        var n = this.entriesByLevel,
            r = this.levelCoords;
        -1 === t.lateral ? (Xi(r, t.level, t.levelCoord), Xi(n, t.level, [e])) : Xi(n[t.level], t.lateral, e), this.stackCnts[qi(e)] = t.stackCnt;
      }
    }, {
      key: "findInsertion",
      value: function findInsertion(e) {
        var t = this.levelCoords,
            n = this.entriesByLevel,
            r = this.strictOrder,
            i = this.stackCnts,
            s = t.length,
            o = 0,
            a = -1,
            l = -1,
            c = null,
            d = 0;

        for (var _u3 = 0; _u3 < s; _u3 += 1) {
          var _s10 = t[_u3];
          if (!r && _s10 >= o + e.thickness) break;

          var _h2 = void 0,
              _f2 = n[_u3],
              _g2 = Ji(_f2, e.span.start, Qi),
              _p = _g2[0] + _g2[1];

          for (; (_h2 = _f2[_p]) && _h2.span.start < e.span.end;) {
            var _e35 = _s10 + _h2.thickness;

            _e35 > o && (o = _e35, c = _h2, a = _u3, l = _p), _e35 === o && (d = Math.max(d, i[qi(_h2)] + 1)), _p += 1;
          }
        }

        var u = 0;
        if (c) for (u = a + 1; u < s && t[u] < o;) {
          u += 1;
        }
        var h = -1;
        return u < s && t[u] === o && (h = Ji(n[u], e.span.end, Qi)[0]), {
          touchingLevel: a,
          touchingLateral: l,
          touchingEntry: c,
          stackCnt: d,
          levelCoord: o,
          level: u,
          lateral: h
        };
      }
    }, {
      key: "toRects",
      value: function toRects() {
        var e = this.entriesByLevel,
            t = this.levelCoords,
            n = e.length,
            r = [];

        for (var _i15 = 0; _i15 < n; _i15 += 1) {
          var _n34 = e[_i15],
              _s11 = t[_i15];
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = _n34[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var _e36 = _step20.value;
              r.push(Object.assign(Object.assign({}, _e36), {
                levelCoord: _s11
              }));
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                _iterator20["return"]();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }
        }

        return r;
      }
    }]);

    return Gi;
  }();

  function Qi(e) {
    return e.span.end;
  }

  function qi(e) {
    return e.index + ":" + e.span.start;
  }

  function Yi(e) {
    var t = [];
    var _iteratorNormalCompletion21 = true;
    var _didIteratorError21 = false;
    var _iteratorError21 = undefined;

    try {
      for (var _iterator21 = e[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
        var _i16 = _step21.value;
        var _e37 = [],
            _s12 = {
          span: _i16.span,
          entries: [_i16]
        };
        var _iteratorNormalCompletion22 = true;
        var _didIteratorError22 = false;
        var _iteratorError22 = undefined;

        try {
          for (var _iterator22 = t[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
            var _i17 = _step22.value;
            Zi(_i17.span, _s12.span) ? _s12 = {
              entries: _i17.entries.concat(_s12.entries),
              span: (n = _i17.span, r = _s12.span, {
                start: Math.min(n.start, r.start),
                end: Math.max(n.end, r.end)
              })
            } : _e37.push(_i17);
          }
        } catch (err) {
          _didIteratorError22 = true;
          _iteratorError22 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
              _iterator22["return"]();
            }
          } finally {
            if (_didIteratorError22) {
              throw _iteratorError22;
            }
          }
        }

        _e37.push(_s12), t = _e37;
      }
    } catch (err) {
      _didIteratorError21 = true;
      _iteratorError21 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
          _iterator21["return"]();
        }
      } finally {
        if (_didIteratorError21) {
          throw _iteratorError21;
        }
      }
    }

    var n, r;
    return t;
  }

  function Zi(e, t) {
    var n = Math.max(e.start, t.start),
        r = Math.min(e.end, t.end);
    return n < r ? {
      start: n,
      end: r
    } : null;
  }

  function Xi(e, t, n) {
    e.splice(t, 0, n);
  }

  function Ji(e, t, n) {
    var r = 0,
        i = e.length;
    if (!i || t < n(e[r])) return [0, 0];
    if (t > n(e[i - 1])) return [i, 0];

    for (; r < i;) {
      var _s13 = Math.floor(r + (i - r) / 2),
          _o11 = n(e[_s13]);

      if (t < _o11) i = _s13;else {
        if (!(t > _o11)) return [_s13, 1];
        r = _s13 + 1;
      }
    }

    return [r, 0];
  }

  var $i =
  /*#__PURE__*/
  function () {
    function $i(e, t) {
      _classCallCheck(this, $i);

      this.emitter = new Tr();
    }

    _createClass($i, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {}
    }, {
      key: "setMirrorNeedsRevert",
      value: function setMirrorNeedsRevert(e) {}
    }, {
      key: "setAutoScrollEnabled",
      value: function setAutoScrollEnabled(e) {}
    }]);

    return $i;
  }();

  var Ki = {},
      es = {
    startTime: jt,
    duration: jt,
    create: Boolean,
    sourceId: String
  };

  function ts(e) {
    var _Sn3 = Sn(e, es),
        t = _Sn3.refined,
        n = _Sn3.extra;

    return {
      startTime: t.startTime || null,
      duration: t.duration || null,
      create: null == t.create || t.create,
      sourceId: t.sourceId,
      leftoverProps: n
    };
  }

  function ns(e, t) {
    return gn(!e || t > 10 ? {
      weekday: "short"
    } : t > 1 ? {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: !0
    } : {
      weekday: "long"
    });
  }

  var rs = "fc-col-header-cell";

  function is(e) {
    return e.text;
  }

  var ss =
  /*#__PURE__*/
  function (_In5) {
    _inherits(ss, _In5);

    function ss() {
      _classCallCheck(this, ss);

      return _possibleConstructorReturn(this, _getPrototypeOf(ss).apply(this, arguments));
    }

    _createClass(ss, [{
      key: "render",
      value: function render() {
        var _this$context = this.context,
            e = _this$context.dateEnv,
            t = _this$context.options,
            n = _this$context.theme,
            r = _this$context.viewApi,
            i = this.props,
            s = i.date,
            o = i.dateProfile,
            a = Ri(s, i.todayRange, null, o),
            l = [rs].concat(xi(a, n)),
            c = e.format(s, i.dayHeaderFormat),
            d = !a.isDisabled && i.colCnt > 1 ? ki(this.context, s) : {},
            u = Object.assign(Object.assign(Object.assign({
          date: e.toDate(s),
          view: r
        }, i.extraRenderProps), {
          text: c
        }), a);
        return f(jn, {
          elTag: "th",
          elClasses: l,
          elAttrs: Object.assign({
            role: "columnheader",
            colSpan: i.colSpan,
            "data-date": a.isDisabled ? void 0 : qt(s)
          }, i.extraDataAttrs),
          renderProps: u,
          generatorName: "dayHeaderContent",
          generator: t.dayHeaderContent || is,
          classNameGenerator: t.dayHeaderClassNames,
          didMount: t.dayHeaderDidMount,
          willUnmount: t.dayHeaderWillUnmount
        }, function (e) {
          return f("div", {
            className: "fc-scrollgrid-sync-inner"
          }, !a.isDisabled && f(e, {
            elTag: "a",
            elAttrs: d,
            elClasses: ["fc-col-header-cell-cushion", i.isSticky && "fc-sticky"]
          }));
        });
      }
    }]);

    return ss;
  }(In);

  var os = gn({
    weekday: "long"
  });

  var as =
  /*#__PURE__*/
  function (_In6) {
    _inherits(as, _In6);

    function as() {
      _classCallCheck(this, as);

      return _possibleConstructorReturn(this, _getPrototypeOf(as).apply(this, arguments));
    }

    _createClass(as, [{
      key: "render",
      value: function render() {
        var e = this.props,
            _this$context2 = this.context,
            t = _this$context2.dateEnv,
            n = _this$context2.theme,
            r = _this$context2.viewApi,
            i = _this$context2.options,
            s = vt(new Date(2592e5), e.dow),
            o = {
          dow: e.dow,
          isDisabled: !1,
          isFuture: !1,
          isPast: !1,
          isToday: !1,
          isOther: !1
        },
            a = t.format(s, e.dayHeaderFormat),
            l = Object.assign(Object.assign(Object.assign(Object.assign({
          date: s
        }, o), {
          view: r
        }), e.extraRenderProps), {
          text: a
        });
        return f(jn, {
          elTag: "th",
          elClasses: [rs].concat(_toConsumableArray(xi(o, n)), _toConsumableArray(e.extraClassNames || [])),
          elAttrs: Object.assign({
            role: "columnheader",
            colSpan: e.colSpan
          }, e.extraDataAttrs),
          renderProps: l,
          generatorName: "dayHeaderContent",
          generator: i.dayHeaderContent || is,
          classNameGenerator: i.dayHeaderClassNames,
          didMount: i.dayHeaderDidMount,
          willUnmount: i.dayHeaderWillUnmount
        }, function (n) {
          return f("div", {
            className: "fc-scrollgrid-sync-inner"
          }, f(n, {
            elTag: "a",
            elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
            elAttrs: {
              "aria-label": t.format(s, os)
            }
          }));
        });
      }
    }]);

    return as;
  }(In);

  var ls =
  /*#__PURE__*/
  function (_m4) {
    _inherits(ls, _m4);

    function ls(e, t) {
      var _this14;

      _classCallCheck(this, ls);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(ls).call(this, e, t)), _this14.initialNowDate = Kn(t.options.now, t.dateEnv), _this14.initialNowQueriedMs = new Date().valueOf(), _this14.state = _this14.computeTiming().currentState;
      return _this14;
    }

    _createClass(ls, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state;
        return e.children(t.nowDate, t.todayRange);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setTimeout();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearTimeout();
      }
    }, {
      key: "computeTiming",
      value: function computeTiming() {
        var e = this.props,
            t = this.context,
            n = bt(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
            r = t.dateEnv.startOf(n, e.unit),
            i = t.dateEnv.add(r, jt(1, e.unit)),
            s = i.valueOf() - n.valueOf();
        return s = Math.min(864e5, s), {
          currentState: {
            nowDate: r,
            todayRange: cs(r)
          },
          nextState: {
            nowDate: i,
            todayRange: cs(i)
          },
          waitMs: s
        };
      }
    }, {
      key: "setTimeout",
      value: function (_setTimeout) {
        function setTimeout() {
          return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
          return _setTimeout.toString();
        };

        return setTimeout;
      }(function () {
        var _this15 = this;

        var _this$computeTiming = this.computeTiming(),
            e = _this$computeTiming.nextState,
            t = _this$computeTiming.waitMs;

        this.timeoutId = setTimeout(function () {
          _this15.setState(e, function () {
            _this15.setTimeout();
          });
        }, t);
      })
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout2) {
        function clearTimeout() {
          return _clearTimeout2.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout2.toString();
        };

        return clearTimeout;
      }(function () {
        this.timeoutId && clearTimeout(this.timeoutId);
      })
    }]);

    return ls;
  }(m);

  function cs(e) {
    var t = wt(e);
    return {
      start: t,
      end: vt(t, 1)
    };
  }

  ls.contextType = Tn;

  var ds =
  /*#__PURE__*/
  function (_In7) {
    _inherits(ds, _In7);

    function ds() {
      var _this16;

      _classCallCheck(this, ds);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(ds).apply(this, arguments)), _this16.createDayHeaderFormatter = Oe(us);
      return _this16;
    }

    _createClass(ds, [{
      key: "render",
      value: function render() {
        var e = this.context,
            _this$props4 = this.props,
            t = _this$props4.dates,
            n = _this$props4.dateProfile,
            r = _this$props4.datesRepDistinctDays,
            i = _this$props4.renderIntro,
            s = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
        return f(ls, {
          unit: "day"
        }, function (e, o) {
          return f("tr", {
            role: "row"
          }, i && i("day"), t.map(function (e) {
            return r ? f(ss, {
              key: e.toISOString(),
              date: e,
              dateProfile: n,
              todayRange: o,
              colCnt: t.length,
              dayHeaderFormat: s
            }) : f(as, {
              key: e.getUTCDay(),
              dow: e.getUTCDay(),
              dayHeaderFormat: s
            });
          }));
        });
      }
    }]);

    return ds;
  }(In);

  function us(e, t, n) {
    return e || ns(t, n);
  }

  var hs =
  /*#__PURE__*/
  function () {
    function hs(e, t) {
      _classCallCheck(this, hs);

      var n = e.start,
          r = e.end,
          i = [],
          s = [],
          o = -1;

      for (; n < r;) {
        t.isHiddenDay(n) ? i.push(o + 0.5) : (o += 1, i.push(o), s.push(n)), n = vt(n, 1);
      }

      this.dates = s, this.indices = i, this.cnt = s.length;
    }

    _createClass(hs, [{
      key: "sliceRange",
      value: function sliceRange(e) {
        var t = this.getDateDayIndex(e.start),
            n = this.getDateDayIndex(vt(e.end, -1)),
            r = Math.max(0, t),
            i = Math.min(this.cnt - 1, n);
        return r = Math.ceil(r), i = Math.floor(i), r <= i ? {
          firstIndex: r,
          lastIndex: i,
          isStart: t === r,
          isEnd: n === i
        } : null;
      }
    }, {
      key: "getDateDayIndex",
      value: function getDateDayIndex(e) {
        var t = this.indices,
            n = Math.floor(Et(this.dates[0], e));
        return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
      }
    }]);

    return hs;
  }();

  var fs =
  /*#__PURE__*/
  function () {
    function fs(e, t) {
      _classCallCheck(this, fs);

      var n,
          r,
          i,
          s = e.dates;

      if (t) {
        for (r = s[0].getUTCDay(), n = 1; n < s.length && s[n].getUTCDay() !== r; n += 1) {
          ;
        }

        i = Math.ceil(s.length / n);
      } else i = 1, n = s.length;

      this.rowCnt = i, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }

    _createClass(fs, [{
      key: "buildCells",
      value: function buildCells() {
        var e = [];

        for (var _t22 = 0; _t22 < this.rowCnt; _t22 += 1) {
          var _n35 = [];

          for (var _e38 = 0; _e38 < this.colCnt; _e38 += 1) {
            _n35.push(this.buildCell(_t22, _e38));
          }

          e.push(_n35);
        }

        return e;
      }
    }, {
      key: "buildCell",
      value: function buildCell(e, t) {
        var n = this.daySeries.dates[e * this.colCnt + t];
        return {
          key: n.toISOString(),
          date: n
        };
      }
    }, {
      key: "buildHeaderDates",
      value: function buildHeaderDates() {
        var e = [];

        for (var _t23 = 0; _t23 < this.colCnt; _t23 += 1) {
          e.push(this.cells[0][_t23].date);
        }

        return e;
      }
    }, {
      key: "sliceRange",
      value: function sliceRange(e) {
        var t = this.colCnt,
            n = this.daySeries.sliceRange(e),
            r = [];

        if (n) {
          var _e39 = n.firstIndex,
              _i18 = n.lastIndex,
              _s14 = _e39;

          for (; _s14 <= _i18;) {
            var _o12 = Math.floor(_s14 / t),
                _a5 = Math.min((_o12 + 1) * t, _i18 + 1);

            r.push({
              row: _o12,
              firstCol: _s14 % t,
              lastCol: (_a5 - 1) % t,
              isStart: n.isStart && _s14 === _e39,
              isEnd: n.isEnd && _a5 - 1 === _i18
            }), _s14 = _a5;
          }
        }

        return r;
      }
    }]);

    return fs;
  }();

  var gs =
  /*#__PURE__*/
  function () {
    function gs() {
      _classCallCheck(this, gs);

      this.sliceBusinessHours = Oe(this._sliceBusinessHours), this.sliceDateSelection = Oe(this._sliceDateSpan), this.sliceEventStore = Oe(this._sliceEventStore), this.sliceEventDrag = Oe(this._sliceInteraction), this.sliceEventResize = Oe(this._sliceInteraction), this.forceDayIfListItem = !1;
    }

    _createClass(gs, [{
      key: "sliceProps",
      value: function sliceProps(e, t, n, r) {
        for (var _len4 = arguments.length, i = new Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
          i[_key4 - 4] = arguments[_key4];
        }

        var s = e.eventUiBases,
            o = this.sliceEventStore.apply(this, [e.eventStore, s, t, n].concat(i));
        return {
          dateSelectionSegs: this.sliceDateSelection.apply(this, [e.dateSelection, s, r].concat(i)),
          businessHourSegs: this.sliceBusinessHours.apply(this, [e.businessHours, t, n, r].concat(i)),
          fgEventSegs: o.fg,
          bgEventSegs: o.bg,
          eventDrag: this.sliceEventDrag.apply(this, [e.eventDrag, s, t, n].concat(i)),
          eventResize: this.sliceEventResize.apply(this, [e.eventResize, s, t, n].concat(i)),
          eventSelection: e.eventSelection
        };
      }
    }, {
      key: "sliceNowDate",
      value: function sliceNowDate(e, t) {
        for (var _len5 = arguments.length, n = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
          n[_key5 - 2] = arguments[_key5];
        }

        return this._sliceDateSpan.apply(this, [{
          range: {
            start: e,
            end: bt(e, 1)
          },
          allDay: !1
        }, {}, t].concat(n));
      }
    }, {
      key: "_sliceBusinessHours",
      value: function _sliceBusinessHours(e, t, n, r) {
        for (var _len6 = arguments.length, i = new Array(_len6 > 4 ? _len6 - 4 : 0), _key6 = 4; _key6 < _len6; _key6++) {
          i[_key6 - 4] = arguments[_key6];
        }

        return e ? this._sliceEventStore.apply(this, [nr(e, ps(t, Boolean(n)), r), {}, t, n].concat(i)).bg : [];
      }
    }, {
      key: "_sliceEventStore",
      value: function _sliceEventStore(e, t, n, r) {
        if (e) {
          var _s15 = Wr(e, t, ps(n, Boolean(r)), r);

          for (var _len7 = arguments.length, i = new Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++) {
            i[_key7 - 4] = arguments[_key7];
          }

          return {
            bg: this.sliceEventRanges(_s15.bg, i),
            fg: this.sliceEventRanges(_s15.fg, i)
          };
        }

        return {
          bg: [],
          fg: []
        };
      }
    }, {
      key: "_sliceInteraction",
      value: function _sliceInteraction(e, t, n, r) {
        if (!e) return null;
        var s = Wr(e.mutatedEvents, t, ps(n, Boolean(r)), r);

        for (var _len8 = arguments.length, i = new Array(_len8 > 4 ? _len8 - 4 : 0), _key8 = 4; _key8 < _len8; _key8++) {
          i[_key8 - 4] = arguments[_key8];
        }

        return {
          segs: this.sliceEventRanges(s.fg, i),
          affectedInstances: e.affectedEvents.instances,
          isEvent: e.isEvent
        };
      }
    }, {
      key: "_sliceDateSpan",
      value: function _sliceDateSpan(e, t, n) {
        if (!e) return [];

        for (var _len9 = arguments.length, r = new Array(_len9 > 3 ? _len9 - 3 : 0), _key9 = 3; _key9 < _len9; _key9++) {
          r[_key9 - 3] = arguments[_key9];
        }

        var i = function (e, t, n) {
          var r = lr({
            editable: !1
          }, n),
              i = dr(r.refined, r.extra, "", e.allDay, !0, n);
          return {
            def: i,
            ui: Qr(i, t),
            instance: tr(i.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0
          };
        }(e, t, n),
            s = this.sliceRange.apply(this, [e.range].concat(r));

        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = s[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var _e40 = _step23.value;
            _e40.eventRange = i;
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }

        return s;
      }
    }, {
      key: "sliceEventRanges",
      value: function sliceEventRanges(e, t) {
        var n = [];
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = e[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _r32 = _step24.value;
            n.push.apply(n, _toConsumableArray(this.sliceEventRange(_r32, t)));
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
              _iterator24["return"]();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }

        return n;
      }
    }, {
      key: "sliceEventRange",
      value: function sliceEventRange(e, t) {
        var n = e.range;
        this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
          start: n.start,
          end: vt(n.start, 1)
        });
        var r = this.sliceRange.apply(this, [n].concat(_toConsumableArray(t)));
        var _iteratorNormalCompletion25 = true;
        var _didIteratorError25 = false;
        var _iteratorError25 = undefined;

        try {
          for (var _iterator25 = r[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
            var _t24 = _step25.value;
            _t24.eventRange = e, _t24.isStart = e.isStart && _t24.isStart, _t24.isEnd = e.isEnd && _t24.isEnd;
          }
        } catch (err) {
          _didIteratorError25 = true;
          _iteratorError25 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
              _iterator25["return"]();
            }
          } finally {
            if (_didIteratorError25) {
              throw _iteratorError25;
            }
          }
        }

        return r;
      }
    }]);

    return gs;
  }();

  function ps(e, t) {
    var n = e.activeRange;
    return t ? n : {
      start: bt(n.start, e.slotMinTime.milliseconds),
      end: bt(n.end, e.slotMaxTime.milliseconds - 864e5)
    };
  }

  function ms(e, t, n) {
    var r = e.mutatedEvents.instances;

    for (var _e41 in r) {
      if (!qn(t.validRange, r[_e41].range)) return !1;
    }

    return bs({
      eventDrag: e
    }, n);
  }

  function vs(e, t, n) {
    return !!qn(t.validRange, e.range) && bs({
      dateSelection: e
    }, n);
  }

  function bs(e, t) {
    var n = t.getCurrentData(),
        r = Object.assign({
      businessHours: n.businessHours,
      dateSelection: "",
      eventStore: n.eventStore,
      eventUiBases: n.eventUiBases,
      eventSelection: "",
      eventDrag: null,
      eventResize: null
    }, e);
    return (t.pluginHooks.isPropsValid || ys)(r, t);
  }

  function ys(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var r = arguments.length > 3 ? arguments[3] : undefined;
    return !(e.eventDrag && !function (e, t, n, r) {
      var i = t.getCurrentData(),
          s = e.eventDrag,
          o = s.mutatedEvents,
          a = o.defs,
          l = o.instances,
          c = Gr(a, s.isEvent ? e.eventUiBases : {
        "": i.selectionConfig
      });
      r && (c = we(c, r));
      var d = (g = e.eventStore, p = s.affectedEvents.instances, {
        defs: g.defs,
        instances: Se(g.instances, function (e) {
          return !p[e.instanceId];
        })
      }),
          u = d.defs,
          h = d.instances,
          f = Gr(u, e.eventUiBases);
      var g, p;

      for (var _r33 in l) {
        var _o13 = l[_r33],
            _g3 = _o13.range,
            _p2 = c[_o13.defId],
            _m5 = a[_o13.defId];
        if (!Es(_p2.constraints, _g3, d, e.businessHours, t)) return !1;

        var _v = t.options.eventOverlap,
            _b = "function" == typeof _v ? _v : null;

        for (var _e42 in h) {
          var _n36 = h[_e42];

          if (Qn(_g3, _n36.range)) {
            if (!1 === f[_n36.defId].overlap && s.isEvent) return !1;
            if (!1 === _p2.overlap) return !1;
            if (_b && !_b(new zr(t, u[_n36.defId], _n36), new zr(t, _m5, _o13))) return !1;
          }
        }

        var _y = i.eventStore;
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = _p2.allows[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _e43 = _step26.value;

            var _i19 = void 0,
                _s16 = Object.assign(Object.assign({}, n), {
              range: _o13.range,
              allDay: _m5.allDay
            }),
                _a6 = _y.defs[_m5.defId],
                _l5 = _y.instances[_r33];

            if (_i19 = _a6 ? new zr(t, _a6, _l5) : new zr(t, _m5), !_e43(Or(_s16, t), _i19)) return !1;
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }
      }

      return !0;
    }(e, t, n, r)) && !(e.dateSelection && !function (e, t, n, r) {
      var i = e.eventStore,
          s = i.defs,
          o = i.instances,
          a = e.dateSelection,
          l = a.range,
          _t$getCurrentData = t.getCurrentData(),
          c = _t$getCurrentData.selectionConfig;

      r && (c = r(c));
      if (!Es(c.constraints, l, i, e.businessHours, t)) return !1;
      var d = t.options.selectOverlap,
          u = "function" == typeof d ? d : null;

      for (var _e44 in o) {
        var _n37 = o[_e44];

        if (Qn(l, _n37.range)) {
          if (!1 === c.overlap) return !1;
          if (u && !u(new zr(t, s[_n37.defId], _n37), null)) return !1;
        }
      }

      var _iteratorNormalCompletion27 = true;
      var _didIteratorError27 = false;
      var _iteratorError27 = undefined;

      try {
        for (var _iterator27 = c.allows[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
          var _e45 = _step27.value;

          var _r34 = Object.assign(Object.assign({}, n), a);

          if (!_e45(Or(_r34, t), null)) return !1;
        }
      } catch (err) {
        _didIteratorError27 = true;
        _iteratorError27 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
            _iterator27["return"]();
          }
        } finally {
          if (_didIteratorError27) {
            throw _iteratorError27;
          }
        }
      }

      return !0;
    }(e, t, n, r));
  }

  function Es(e, t, n, r, i) {
    var _iteratorNormalCompletion28 = true;
    var _didIteratorError28 = false;
    var _iteratorError28 = undefined;

    try {
      for (var _iterator28 = e[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
        var _s17 = _step28.value;
        if (!Ss(As(_s17, t, n, r, i), t)) return !1;
      }
    } catch (err) {
      _didIteratorError28 = true;
      _iteratorError28 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
          _iterator28["return"]();
        }
      } finally {
        if (_didIteratorError28) {
          throw _iteratorError28;
        }
      }
    }

    return !0;
  }

  function As(e, t, n, r, i) {
    return "businessHours" === e ? Ds(nr(r, t, i)) : "string" == typeof e ? Ds(mr(n, function (t) {
      return t.groupId === e;
    })) : "object" == _typeof(e) && e ? Ds(nr(e, t, i)) : [];
  }

  function Ds(e) {
    var t = e.instances,
        n = [];

    for (var _e46 in t) {
      n.push(t[_e46].range);
    }

    return n;
  }

  function Ss(e, t) {
    var _iteratorNormalCompletion29 = true;
    var _didIteratorError29 = false;
    var _iteratorError29 = undefined;

    try {
      for (var _iterator29 = e[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
        var _n38 = _step29.value;
        if (qn(_n38, t)) return !0;
      }
    } catch (err) {
      _didIteratorError29 = true;
      _iteratorError29 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
          _iterator29["return"]();
        }
      } finally {
        if (_didIteratorError29) {
          throw _iteratorError29;
        }
      }
    }

    return !1;
  }

  var ws = /^(visible|hidden)$/;

  var Cs =
  /*#__PURE__*/
  function (_In8) {
    _inherits(Cs, _In8);

    function Cs() {
      var _this17;

      _classCallCheck(this, Cs);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Cs).apply(this, arguments)), _this17.handleEl = function (e) {
        _this17.el = e, On(_this17.props.elRef, e);
      };
      return _this17;
    }

    _createClass(Cs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.liquid,
            n = e.liquidIsAbsolute,
            r = t && n,
            i = ["fc-scroller"];
        return t && (n ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), f("div", {
          ref: this.handleEl,
          className: i.join(" "),
          style: {
            overflowX: e.overflowX,
            overflowY: e.overflowY,
            left: r && -(e.overcomeLeft || 0) || "",
            right: r && -(e.overcomeRight || 0) || "",
            bottom: r && -(e.overcomeBottom || 0) || "",
            marginLeft: !r && -(e.overcomeLeft || 0) || "",
            marginRight: !r && -(e.overcomeRight || 0) || "",
            marginBottom: !r && -(e.overcomeBottom || 0) || "",
            maxHeight: e.maxHeight || ""
          }
        }, e.children);
      }
    }, {
      key: "needsXScrolling",
      value: function needsXScrolling() {
        if (ws.test(this.props.overflowX)) return !1;
        var e = this.el,
            t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
            n = e.children;

        for (var _e47 = 0; _e47 < n.length; _e47 += 1) {
          if (n[_e47].getBoundingClientRect().width > t) return !0;
        }

        return !1;
      }
    }, {
      key: "needsYScrolling",
      value: function needsYScrolling() {
        if (ws.test(this.props.overflowY)) return !1;
        var e = this.el,
            t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
            n = e.children;

        for (var _e48 = 0; _e48 < n.length; _e48 += 1) {
          if (n[_e48].getBoundingClientRect().height > t) return !0;
        }

        return !1;
      }
    }, {
      key: "getXScrollbarWidth",
      value: function getXScrollbarWidth() {
        return ws.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
      }
    }, {
      key: "getYScrollbarWidth",
      value: function getYScrollbarWidth() {
        return ws.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
      }
    }]);

    return Cs;
  }(In);

  var Rs =
  /*#__PURE__*/
  function () {
    function Rs(e) {
      var _this18 = this;

      _classCallCheck(this, Rs);

      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, t) {
        var n = _this18.depths,
            r = _this18.currentMap,
            i = !1,
            s = !1;
        null !== e ? (i = t in r, r[t] = e, n[t] = (n[t] || 0) + 1, s = !0) : (n[t] -= 1, n[t] || (delete r[t], delete _this18.callbackMap[t], i = !0)), _this18.masterCallback && (i && _this18.masterCallback(null, String(t)), s && _this18.masterCallback(e, String(t)));
      };
    }

    _createClass(Rs, [{
      key: "createRef",
      value: function createRef(e) {
        var _this19 = this;

        var t = this.callbackMap[e];
        return t || (t = this.callbackMap[e] = function (t) {
          _this19.handleValue(t, String(e));
        }), t;
      }
    }, {
      key: "collect",
      value: function collect(e, t, n) {
        return Me(this.currentMap, e, t, n);
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return Re(this.currentMap);
      }
    }]);

    return Rs;
  }();

  function xs(e) {
    var t = je(e, ".fc-scrollgrid-shrink"),
        n = 0;
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = t[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _e49 = _step30.value;
        n = Math.max(n, gt(_e49));
      }
    } catch (err) {
      _didIteratorError30 = true;
      _iteratorError30 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
          _iterator30["return"]();
        }
      } finally {
        if (_didIteratorError30) {
          throw _iteratorError30;
        }
      }
    }

    return Math.ceil(n);
  }

  function _s(e, t) {
    return e.liquid && t.liquid;
  }

  function Ts(e, t) {
    return null != t.maxHeight || _s(e, t);
  }

  function ks(e, t, n, r) {
    var i = n.expandRows;
    return "function" == typeof t.content ? t.content(n) : f("table", {
      role: "presentation",
      className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
      style: {
        minWidth: n.tableMinWidth,
        width: n.clientWidth,
        height: i ? n.clientHeight : ""
      }
    }, n.tableColGroupNode, f(r ? "thead" : "tbody", {
      role: "presentation"
    }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent));
  }

  function Ms(e, t) {
    return Ie(e, t, xe);
  }

  function Is(e, t) {
    var n = [];
    var _iteratorNormalCompletion31 = true;
    var _didIteratorError31 = false;
    var _iteratorError31 = undefined;

    try {
      for (var _iterator31 = e[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
        var _r35 = _step31.value;

        var _e50 = _r35.span || 1;

        for (var _i20 = 0; _i20 < _e50; _i20 += 1) {
          n.push(f("col", {
            style: {
              width: "shrink" === _r35.width ? Os(t) : _r35.width || "",
              minWidth: _r35.minWidth || ""
            }
          }));
        }
      }
    } catch (err) {
      _didIteratorError31 = true;
      _iteratorError31 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
          _iterator31["return"]();
        }
      } finally {
        if (_didIteratorError31) {
          throw _iteratorError31;
        }
      }
    }

    return f.apply(void 0, ["colgroup", {}].concat(n));
  }

  function Os(e) {
    return null == e ? 4 : e;
  }

  function Ns(e) {
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = e[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var _t25 = _step32.value;
        if ("shrink" === _t25.width) return !0;
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
          _iterator32["return"]();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }

    return !1;
  }

  function Ps(e, t) {
    var n = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && n.push("fc-scrollgrid-liquid"), n;
  }

  function Hs(e, t) {
    var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
    return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
  }

  function Bs(e) {
    return f("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      }
    });
  }

  function js(e) {
    var t = e.stickyHeaderDates;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  function zs(e) {
    var t = e.stickyFooterScrollbar;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  var Us =
  /*#__PURE__*/
  function (_In9) {
    _inherits(Us, _In9);

    function Us() {
      var _this20;

      _classCallCheck(this, Us);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Us).apply(this, arguments)), _this20.processCols = Oe(function (e) {
        return e;
      }, Ms), _this20.renderMicroColGroup = Oe(Is), _this20.scrollerRefs = new Rs(), _this20.scrollerElRefs = new Rs(_this20._handleScrollerEl.bind(_assertThisInitialized(_this20))), _this20.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, _this20.handleSizing = function () {
        _this20.safeSetState(Object.assign({
          shrinkWidth: _this20.computeShrinkWidth()
        }, _this20.computeScrollerDims()));
      };
      return _this20;
    }

    _createClass(Us, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state,
            n = this.context,
            r = e.sections || [],
            i = this.processCols(e.cols),
            s = this.renderMicroColGroup(i, t.shrinkWidth),
            o = Ps(e.liquid, n);
        e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
        var a,
            l = r.length,
            c = 0,
            d = [],
            u = [],
            h = [];

        for (; c < l && "header" === (a = r[c]).type;) {
          d.push(this.renderSection(a, s, !0)), c += 1;
        }

        for (; c < l && "body" === (a = r[c]).type;) {
          u.push(this.renderSection(a, s, !1)), c += 1;
        }

        for (; c < l && "footer" === (a = r[c]).type;) {
          h.push(this.renderSection(a, s, !0)), c += 1;
        }

        var g = !hi();
        var p = {
          role: "rowgroup"
        };
        return f("table", {
          role: "grid",
          className: o.join(" "),
          style: {
            height: e.height
          }
        }, Boolean(!g && d.length) && f.apply(void 0, ["thead", p].concat(d)), Boolean(!g && u.length) && f.apply(void 0, ["tbody", p].concat(u)), Boolean(!g && h.length) && f.apply(void 0, ["tfoot", p].concat(h)), g && f.apply(void 0, ["tbody", p].concat(d, u, h)));
      }
    }, {
      key: "renderSection",
      value: function renderSection(e, t, n) {
        return "outerContent" in e ? f(p, {
          key: e.key
        }, e.outerContent) : f("tr", {
          key: e.key,
          role: "presentation",
          className: Hs(e, this.props.liquid).join(" ")
        }, this.renderChunkTd(e, t, e.chunk, n));
      }
    }, {
      key: "renderChunkTd",
      value: function renderChunkTd(e, t, n, r) {
        if ("outerContent" in n) return n.outerContent;

        var i = this.props,
            _this$state = this.state,
            s = _this$state.forceYScrollbars,
            o = _this$state.scrollerClientWidths,
            a = _this$state.scrollerClientHeights,
            l = Ts(i, e),
            c = _s(i, e),
            d = i.liquid ? s ? "scroll" : l ? "auto" : "hidden" : "visible",
            u = e.key,
            h = ks(e, n, {
          tableColGroupNode: t,
          tableMinWidth: "",
          clientWidth: i.collapsibleWidth || void 0 === o[u] ? null : o[u],
          clientHeight: void 0 !== a[u] ? a[u] : null,
          expandRows: e.expandRows,
          syncRowHeights: !1,
          rowSyncHeights: [],
          reportRowHeightChange: function reportRowHeightChange() {}
        }, r);

        return f(r ? "th" : "td", {
          ref: n.elRef,
          role: "presentation"
        }, f("div", {
          className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
        }, f(Cs, {
          ref: this.scrollerRefs.createRef(u),
          elRef: this.scrollerElRefs.createRef(u),
          overflowY: d,
          overflowX: i.liquid ? "hidden" : "visible",
          maxHeight: e.maxHeight,
          liquid: c,
          liquidIsAbsolute: !0
        }, h)));
      }
    }, {
      key: "_handleScrollerEl",
      value: function _handleScrollerEl(e, t) {
        var n = function (e, t) {
          var _iteratorNormalCompletion33 = true;
          var _didIteratorError33 = false;
          var _iteratorError33 = undefined;

          try {
            for (var _iterator33 = e[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
              var _n39 = _step33.value;
              if (_n39.key === t) return _n39;
            }
          } catch (err) {
            _didIteratorError33 = true;
            _iteratorError33 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
                _iterator33["return"]();
              }
            } finally {
              if (_didIteratorError33) {
                throw _iteratorError33;
              }
            }
          }

          return null;
        }(this.props.sections, t);

        n && On(n.chunk.scrollerElRef, e);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.handleSizing();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing);
      }
    }, {
      key: "computeShrinkWidth",
      value: function computeShrinkWidth() {
        return Ns(this.props.cols) ? xs(this.scrollerElRefs.getAll()) : 0;
      }
    }, {
      key: "computeScrollerDims",
      value: function computeScrollerDims() {
        var e = Ni(),
            t = this.scrollerRefs,
            n = this.scrollerElRefs,
            r = !1,
            i = {},
            s = {};

        for (var _e51 in t.currentMap) {
          var _n40 = t.currentMap[_e51];

          if (_n40 && _n40.needsYScrolling()) {
            r = !0;
            break;
          }
        }

        var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = this.props.sections[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var _t26 = _step34.value;
            var _o14 = _t26.key,
                _a7 = n.currentMap[_o14];

            if (_a7) {
              var _t27 = _a7.parentNode;
              i[_o14] = Math.floor(_t27.getBoundingClientRect().width - (r ? e.y : 0)), s[_o14] = Math.floor(_t27.getBoundingClientRect().height);
            }
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
              _iterator34["return"]();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }

        return {
          forceYScrollbars: r,
          scrollerClientWidths: i,
          scrollerClientHeights: s
        };
      }
    }]);

    return Us;
  }(In);

  Us.addStateEquality({
    scrollerClientWidths: xe,
    scrollerClientHeights: xe
  });

  var Ls =
  /*#__PURE__*/
  function (_In10) {
    _inherits(Ls, _In10);

    function Ls() {
      var _this21;

      _classCallCheck(this, Ls);

      _this21 = _possibleConstructorReturn(this, _getPrototypeOf(Ls).apply(this, arguments)), _this21.handleEl = function (e) {
        e && function (e, t) {
          e.fcSeg = t;
        }(e, _this21.props.seg);
      };
      return _this21;
    }

    _createClass(Ls, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = r.eventRange,
            s = i.ui,
            o = {
          event: new zr(t, i.def, i.instance),
          view: t.viewApi,
          timeText: e.timeText,
          textColor: s.textColor,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          isDraggable: !e.disableDragging && Zr(r, t),
          isStartResizable: !e.disableResizing && Xr(r, t),
          isEndResizable: !e.disableResizing && Jr(r),
          isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
          isStart: Boolean(r.isStart),
          isEnd: Boolean(r.isEnd),
          isPast: Boolean(e.isPast),
          isFuture: Boolean(e.isFuture),
          isToday: Boolean(e.isToday),
          isSelected: Boolean(e.isSelected),
          isDragging: Boolean(e.isDragging),
          isResizing: Boolean(e.isResizing)
        };
        return f(jn, Object.assign({}, e, {
          elRef: this.handleEl,
          elClasses: [].concat(_toConsumableArray(ei(o)), _toConsumableArray(r.eventRange.ui.classNames), _toConsumableArray(e.elClasses || [])),
          renderProps: o,
          generatorName: "eventContent",
          generator: n.eventContent || e.defaultGenerator,
          classNameGenerator: n.eventClassNames,
          didMount: n.eventDidMount,
          willUnmount: n.eventWillUnmount
        }));
      }
    }]);

    return Ls;
  }(In);

  var Ws =
  /*#__PURE__*/
  function (_In11) {
    _inherits(Ws, _In11);

    function Ws() {
      _classCallCheck(this, Ws);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ws).apply(this, arguments));
    }

    _createClass(Ws, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = r.eventRange.ui,
            s = $r(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
        return f(Ls, Object.assign({}, e, {
          elTag: "a",
          elStyle: {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor
          },
          elAttrs: ni(r, t),
          defaultGenerator: Fs,
          timeText: s
        }), function (e, t) {
          return f(p, null, f(e, {
            elTag: "div",
            elClasses: ["fc-event-main"],
            elStyle: {
              color: t.textColor
            }
          }), Boolean(t.isStartResizable) && f("div", {
            className: "fc-event-resizer fc-event-resizer-start"
          }), Boolean(t.isEndResizable) && f("div", {
            className: "fc-event-resizer fc-event-resizer-end"
          }));
        });
      }
    }]);

    return Ws;
  }(In);

  function Fs(e) {
    return f("div", {
      className: "fc-event-main-frame"
    }, e.timeText && f("div", {
      className: "fc-event-time"
    }, e.timeText), f("div", {
      className: "fc-event-title-container"
    }, f("div", {
      className: "fc-event-title fc-sticky"
    }, e.event.title || f(p, null, " "))));
  }

  var Vs = function Vs(e) {
    return f(Tn.Consumer, null, function (t) {
      var n = t.options,
          r = {
        isAxis: e.isAxis,
        date: t.dateEnv.toDate(e.date),
        view: t.viewApi
      };
      return f(jn, Object.assign({}, e, {
        elTag: e.elTag || "div",
        renderProps: r,
        generatorName: "nowIndicatorContent",
        generator: n.nowIndicatorContent,
        classNameGenerator: n.nowIndicatorClassNames,
        didMount: n.nowIndicatorDidMount,
        willUnmount: n.nowIndicatorWillUnmount
      }));
    });
  },
      Gs = gn({
    day: "numeric"
  });

  var Qs =
  /*#__PURE__*/
  function (_In12) {
    _inherits(Qs, _In12);

    function Qs() {
      var _this22;

      _classCallCheck(this, Qs);

      _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Qs).apply(this, arguments)), _this22.refineRenderProps = Ne(Ys);
      return _this22;
    }

    _createClass(Qs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = this.refineRenderProps({
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          showDayNumber: e.showDayNumber,
          extraRenderProps: e.extraRenderProps,
          viewApi: t.viewApi,
          dateEnv: t.dateEnv
        });
        return f(jn, Object.assign({}, e, {
          elClasses: [].concat(_toConsumableArray(xi(r, t.theme)), _toConsumableArray(e.elClasses || [])),
          elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : {
            "data-date": qt(e.date)
          }),
          renderProps: r,
          generatorName: "dayCellContent",
          generator: n.dayCellContent || e.defaultGenerator,
          classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
          didMount: n.dayCellDidMount,
          willUnmount: n.dayCellWillUnmount
        }));
      }
    }]);

    return Qs;
  }(In);

  function qs(e) {
    return Boolean(e.dayCellContent || Pn("dayCellContent", e));
  }

  function Ys(e) {
    var t = e.date,
        n = e.dateEnv,
        r = Ri(t, e.todayRange, null, e.dateProfile);
    return Object.assign(Object.assign(Object.assign({
      date: n.toDate(t),
      view: e.viewApi
    }, r), {
      dayNumberText: e.showDayNumber ? n.format(t, Gs) : ""
    }), e.extraRenderProps);
  }

  var Zs =
  /*#__PURE__*/
  function (_In13) {
    _inherits(Zs, _In13);

    function Zs() {
      _classCallCheck(this, Zs);

      return _possibleConstructorReturn(this, _getPrototypeOf(Zs).apply(this, arguments));
    }

    _createClass(Zs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.seg;
        return f(Ls, {
          elTag: "div",
          elClasses: ["fc-bg-event"],
          elStyle: {
            backgroundColor: t.eventRange.ui.backgroundColor
          },
          defaultGenerator: Xs,
          seg: t,
          timeText: "",
          isDragging: !1,
          isResizing: !1,
          isDateSelecting: !1,
          isSelected: !1,
          isPast: e.isPast,
          isFuture: e.isFuture,
          isToday: e.isToday,
          disableDragging: !0,
          disableResizing: !0
        });
      }
    }]);

    return Zs;
  }(In);

  function Xs(e) {
    var t = e.event.title;
    return t && f("div", {
      className: "fc-event-title"
    }, e.event.title);
  }

  function Js(e) {
    return f("div", {
      className: "fc-" + e
    });
  }

  var $s = function $s(e) {
    return f(Tn.Consumer, null, function (t) {
      var n = t.dateEnv,
          r = t.options,
          i = e.date,
          s = r.weekNumberFormat || e.defaultFormat,
          o = {
        num: n.computeWeekNumber(i),
        text: n.format(i, s),
        date: i
      };
      return f(jn, Object.assign({}, e, {
        renderProps: o,
        generatorName: "weekNumberContent",
        generator: r.weekNumberContent || Ks,
        classNameGenerator: r.weekNumberClassNames,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount
      }));
    });
  };

  function Ks(e) {
    return e.text;
  }

  var eo =
  /*#__PURE__*/
  function (_In14) {
    _inherits(eo, _In14);

    function eo() {
      var _this23;

      _classCallCheck(this, eo);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(eo).apply(this, arguments)), _this23.state = {
        titleId: Ge()
      }, _this23.handleRootEl = function (e) {
        _this23.rootEl = e, _this23.props.elRef && On(_this23.props.elRef, e);
      }, _this23.handleDocumentMouseDown = function (e) {
        var t = We(e);
        _this23.rootEl.contains(t) || _this23.handleCloseClick();
      }, _this23.handleDocumentKeyDown = function (e) {
        "Escape" === e.key && _this23.handleCloseClick();
      }, _this23.handleCloseClick = function () {
        var e = _this23.props.onClose;
        e && e();
      };
      return _this23;
    }

    _createClass(eo, [{
      key: "render",
      value: function render() {
        var _this$context3 = this.context,
            e = _this$context3.theme,
            t = _this$context3.options,
            n = this.props,
            r = this.state,
            i = ["fc-popover", e.getClass("popover")].concat(n.extraClassNames || []);
        return function (e, t) {
          var n = f(ae, {
            __v: e,
            i: t
          });
          return n.containerInfo = t, n;
        }(f("div", Object.assign({}, n.extraAttrs, {
          id: n.id,
          className: i.join(" "),
          "aria-labelledby": r.titleId,
          ref: this.handleRootEl
        }), f("div", {
          className: "fc-popover-header " + e.getClass("popoverHeader")
        }, f("span", {
          className: "fc-popover-title",
          id: r.titleId
        }, n.title), f("span", {
          className: "fc-popover-close " + e.getIconClass("close"),
          title: t.closeHint,
          onClick: this.handleCloseClick
        })), f("div", {
          className: "fc-popover-body " + e.getClass("popoverContent")
        }, n.children)), n.parentEl);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var e = this.context.isRtl,
            _this$props5 = this.props,
            t = _this$props5.alignmentEl,
            n = _this$props5.alignGridTop,
            r = this.rootEl,
            i = function (e) {
          var t = zi(e),
              n = e.getBoundingClientRect();
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = t[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var _e52 = _step35.value;

              var _t28 = yi(n, _e52.getBoundingClientRect());

              if (!_t28) return null;
              n = _t28;
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
                _iterator35["return"]();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }

          return n;
        }(t);

        if (i) {
          var _s18 = r.getBoundingClientRect(),
              _o15 = n ? He(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
              _a8 = e ? i.right - _s18.width : i.left;

          _o15 = Math.max(_o15, 10), _a8 = Math.min(_a8, document.documentElement.clientWidth - 10 - _s18.width), _a8 = Math.max(_a8, 10);

          var _l6 = r.offsetParent.getBoundingClientRect();

          Ue(r, {
            top: _o15 - _l6.top,
            left: _a8 - _l6.left
          });
        }
      }
    }]);

    return eo;
  }(In);

  var to =
  /*#__PURE__*/
  function (_Vi) {
    _inherits(to, _Vi);

    function to() {
      var _this24;

      _classCallCheck(this, to);

      _this24 = _possibleConstructorReturn(this, _getPrototypeOf(to).apply(this, arguments)), _this24.handleRootEl = function (e) {
        _this24.rootEl = e, e ? _this24.context.registerInteractiveComponent(_assertThisInitialized(_this24), {
          el: e,
          useEventCenter: !1
        }) : _this24.context.unregisterInteractiveComponent(_assertThisInitialized(_this24));
      };
      return _this24;
    }

    _createClass(to, [{
      key: "render",
      value: function render() {
        var _this$context4 = this.context,
            e = _this$context4.options,
            t = _this$context4.dateEnv,
            n = this.props,
            r = n.startDate,
            i = n.todayRange,
            s = n.dateProfile,
            o = t.format(r, e.dayPopoverFormat);
        return f(Qs, {
          elRef: this.handleRootEl,
          date: r,
          dateProfile: s,
          todayRange: i
        }, function (t, r, i) {
          return f(eo, {
            elRef: i.ref,
            id: n.id,
            title: o,
            extraClassNames: ["fc-more-popover"].concat(i.className || []),
            extraAttrs: i,
            parentEl: n.parentEl,
            alignmentEl: n.alignmentEl,
            alignGridTop: n.alignGridTop,
            onClose: n.onClose
          }, qs(e) && f(t, {
            elTag: "div",
            elClasses: ["fc-more-popover-misc"]
          }), n.children);
        });
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t, n, r) {
        var i = this.rootEl,
            s = this.props;
        return e >= 0 && e < n && t >= 0 && t < r ? {
          dateProfile: s.dateProfile,
          dateSpan: Object.assign({
            allDay: !0,
            range: {
              start: s.startDate,
              end: s.endDate
            }
          }, s.extraDateSpan),
          dayEl: i,
          rect: {
            left: 0,
            top: 0,
            right: n,
            bottom: r
          },
          layer: 1
        } : null;
      }
    }]);

    return to;
  }(Vi);

  var no =
  /*#__PURE__*/
  function (_In15) {
    _inherits(no, _In15);

    function no() {
      var _this25;

      _classCallCheck(this, no);

      _this25 = _possibleConstructorReturn(this, _getPrototypeOf(no).apply(this, arguments)), _this25.linkElRef = {
        current: null
      }, _this25.state = {
        isPopoverOpen: !1,
        popoverId: Ge()
      }, _this25.handleClick = function (e) {
        var _assertThisInitialize = _assertThisInitialized(_this25),
            t = _assertThisInitialize.props,
            n = _assertThisInitialize.context,
            r = n.options.moreLinkClick,
            i = io(t).start;

        function s(e) {
          var _e$eventRange3 = e.eventRange,
              t = _e$eventRange3.def,
              r = _e$eventRange3.instance,
              i = _e$eventRange3.range;
          return {
            event: new zr(n, t, r),
            start: n.dateEnv.toDate(i.start),
            end: n.dateEnv.toDate(i.end),
            isStart: e.isStart,
            isEnd: e.isEnd
          };
        }

        "function" == typeof r && (r = r({
          date: i,
          allDay: Boolean(t.allDayDate),
          allSegs: t.allSegs.map(s),
          hiddenSegs: t.hiddenSegs.map(s),
          jsEvent: e,
          view: n.viewApi
        })), r && "popover" !== r ? "string" == typeof r && n.calendarApi.zoomTo(i, r) : _this25.setState({
          isPopoverOpen: !0
        });
      }, _this25.handlePopoverClose = function () {
        _this25.setState({
          isPopoverOpen: !1
        });
      };
      return _this25;
    }

    _createClass(no, [{
      key: "render",
      value: function render() {
        var _this26 = this;

        var e = this.props,
            t = this.state;
        return f(Tn.Consumer, null, function (n) {
          var r = n.viewApi,
              i = n.options,
              s = n.calendarApi,
              o = i.moreLinkText,
              a = e.moreCnt,
              l = io(e),
              c = "function" == typeof o ? o.call(s, a) : "+".concat(a, " ").concat(o),
              d = ut(i.moreLinkHint, [a], c),
              u = {
            num: a,
            shortText: "+" + a,
            text: c,
            view: r
          };
          return f(p, null, Boolean(e.moreCnt) && f(jn, {
            elTag: e.elTag || "a",
            elRef: _this26.linkElRef,
            elClasses: [].concat(_toConsumableArray(e.elClasses || []), ["fc-more-link"]),
            elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Xe(_this26.handleClick)), {
              title: d,
              "aria-expanded": t.isPopoverOpen,
              "aria-controls": t.isPopoverOpen ? t.popoverId : ""
            }),
            renderProps: u,
            generatorName: "moreLinkContent",
            generator: i.moreLinkContent || e.defaultGenerator || ro,
            classNameGenerator: i.moreLinkClassNames,
            didMount: i.moreLinkDidMount,
            willUnmount: i.moreLinkWillUnmount
          }, e.children), t.isPopoverOpen && f(to, {
            id: t.popoverId,
            startDate: l.start,
            endDate: l.end,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            extraDateSpan: e.extraDateSpan,
            parentEl: _this26.parentEl,
            alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : _this26.linkElRef.current,
            alignGridTop: e.alignGridTop,
            onClose: _this26.handlePopoverClose
          }, e.popoverContent()));
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateParentEl();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateParentEl();
      }
    }, {
      key: "updateParentEl",
      value: function updateParentEl() {
        this.linkElRef.current && (this.parentEl = He(this.linkElRef.current, ".fc-view-harness"));
      }
    }]);

    return no;
  }(In);

  function ro(e) {
    return e.text;
  }

  function io(e) {
    if (e.allDayDate) return {
      start: e.allDayDate,
      end: vt(e.allDayDate, 1)
    };
    var t = e.hiddenSegs;
    return {
      start: so(t),
      end: (n = t, n.reduce(ao).eventRange.range.end)
    };
    var n;
  }

  function so(e) {
    return e.reduce(oo).eventRange.range.start;
  }

  function oo(e, t) {
    return e.eventRange.range.start < t.eventRange.range.start ? e : t;
  }

  function ao(e, t) {
    return e.eventRange.range.end > t.eventRange.range.end ? e : t;
  }

  var lo = {
    __proto__: null,
    BASE_OPTION_DEFAULTS: mn,
    BaseComponent: In,
    BgEvent: Zs,
    CalendarImpl: vi,
    CalendarRoot: fi,
    ContentContainer: jn,
    CustomRenderingStore:
    /*#__PURE__*/
    function (_ref4) {
      _inherits(CustomRenderingStore, _ref4);

      function CustomRenderingStore() {
        var _this27;

        _classCallCheck(this, CustomRenderingStore);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(CustomRenderingStore).apply(this, arguments)), _this27.map = new Map();
        return _this27;
      }

      _createClass(CustomRenderingStore, [{
        key: "handle",
        value: function handle(e) {
          var t = this.map;
          var n = !1;
          e.isActive ? (t.set(e.id, e), n = !0) : t.has(e.id) && (t["delete"](e.id), n = !0), n && this.set(t);
        }
      }]);

      return CustomRenderingStore;
    }(
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);

        this.handlers = [];
      }

      _createClass(_class, [{
        key: "set",
        value: function set(e) {
          this.currentValue = e;
          var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = this.handlers[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var _t29 = _step36.value;

              _t29(e);
            }
          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
                _iterator36["return"]();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }
        }
      }, {
        key: "subscribe",
        value: function subscribe(e) {
          this.handlers.push(e), void 0 !== this.currentValue && e(this.currentValue);
        }
      }]);

      return _class;
    }()),
    DateComponent: Vi,
    DateEnv: $t,
    DateProfileGenerator: er,
    DayCellContainer: Qs,
    DayHeader: ds,
    DaySeriesModel: hs,
    DayTableModel: fs,
    DelayedRunner: Ee,
    ElementDragging: $i,
    ElementScrollController: Wi,
    Emitter: Tr,
    EventContainer: Ls,
    EventImpl: zr,
    Interaction: gi,
    MoreLinkContainer: no,
    NamedTimeZoneImpl: function NamedTimeZoneImpl(e) {
      _classCallCheck(this, NamedTimeZoneImpl);

      this.timeZoneName = e;
    },
    NowIndicatorContainer: Vs,
    NowTimer: ls,
    PositionCache: Ui,
    RefMap: Rs,
    ScrollController: Li,
    ScrollResponder: _n,
    Scroller: Cs,
    SegHierarchy: Gi,
    SimpleScrollGrid: Us,
    Slicer: gs,
    Splitter: wi,
    StandardEvent: Ws,
    TableDateCell: ss,
    TableDowCell: as,
    Theme: Kt,
    ViewContainer: Un,
    ViewContextType: Tn,
    WeekNumberContainer: $s,
    WindowScrollController: Fi,
    addDays: vt,
    addDurations: Ut,
    addMs: bt,
    addWeeks: mt,
    allowContextMenu: st,
    allowSelection: rt,
    applyMutationToEventStore: Pr,
    applyStyle: Ue,
    asCleanDays: function asCleanDays(e) {
      return e.years || e.months || e.milliseconds ? 0 : e.days;
    },
    asRoughMinutes: function asRoughMinutes(e) {
      return Ft(e) / 6e4;
    },
    asRoughMs: Ft,
    asRoughSeconds: function asRoughSeconds(e) {
      return Ft(e) / 1e3;
    },
    binarySearch: Ji,
    buildElAttrs: Hn,
    buildEntryKey: qi,
    buildEventApis: Lr,
    buildEventRangeKey: ti,
    buildIsoString: Qt,
    buildNavLinkAttrs: ki,
    buildSegTimeText: $r,
    collectFromHash: Me,
    combineEventUis: Ar,
    compareByFieldSpecs: at,
    compareNumbers: ht,
    compareObjs: Te,
    computeEarliestSegStart: so,
    computeEdges: Hi,
    computeFallbackHeaderFormat: ns,
    computeInnerRect: Bi,
    computeRect: ji,
    computeShrinkWidth: xs,
    computeVisibleDayRange: Xn,
    config: Ki,
    constrainPoint: Ei,
    createDuration: jt,
    createEmptyEventStore: gr,
    createEventInstance: tr,
    createEventUi: Er,
    createFormatter: gn,
    diffDates: $n,
    diffDayAndTime: At,
    diffDays: Et,
    diffPoints: Di,
    diffWeeks: yt,
    diffWholeDays: St,
    diffWholeWeeks: Dt,
    disableCursor: et,
    elementClosest: He,
    elementMatches: Be,
    enableCursor: tt,
    eventTupleToStore: hr,
    filterHash: Se,
    findDirectChildren: function findDirectChildren(e, t) {
      var n = e instanceof HTMLElement ? [e] : e,
          r = [];

      for (var _e53 = 0; _e53 < n.length; _e53 += 1) {
        var _i21 = n[_e53].children;

        for (var _e54 = 0; _e54 < _i21.length; _e54 += 1) {
          var _n41 = _i21[_e54];
          t && !Be(_n41, t) || r.push(_n41);
        }
      }

      return r;
    },
    findElements: je,
    flexibleCompare: ct,
    formatDayString: qt,
    formatIsoTimeString: Yt,
    getAllowYScrolling: Ts,
    getCanVGrowWithinCell: hi,
    getClippingParents: zi,
    getDateMeta: Ri,
    getDayClassNames: xi,
    getDefaultEventEnd: Nr,
    getElRoot: Fe,
    getElSeg: Vr,
    getEntrySpanEnd: Qi,
    getEventTargetViaRoot: We,
    getIsRtlScrollbarOnLeft: Oi,
    getRectCenter: Ai,
    getRelevantEvents: fr,
    getScrollGridClassNames: Ps,
    getScrollbarWidths: Ni,
    getSectionClassNames: Hs,
    getSectionHasLiquidHeight: _s,
    getSegAnchorAttrs: ni,
    getSegMeta: Kr,
    getSlotClassNames: function getSlotClassNames(e, t) {
      var n = ["fc-slot", "fc-slot-" + pt[e.dow]];
      return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n;
    },
    getStickyFooterScrollbar: zs,
    getStickyHeaderDates: js,
    getUniqueDomId: Ge,
    greatestDurationDenominator: Gt,
    groupIntersectingEntries: Yi,
    guid: Ke,
    hasBgRendering: Fr,
    hasCustomDayCellContent: qs,
    hasShrinkWidth: Ns,
    identity: wn,
    injectStyles: ye,
    interactionSettingsStore: mi,
    interactionSettingsToStore: pi,
    intersectRanges: Vn,
    intersectRects: yi,
    intersectSpans: Zi,
    isArraysEqual: Ie,
    isColPropsEqual: Ms,
    isDateSelectionValid: vs,
    isDateSpansEqual: si,
    isInt: ft,
    isInteractionValid: ms,
    isMultiDayRange: Jn,
    isPropsEqual: xe,
    isPropsValid: ys,
    isValidDate: Mt,
    mapHash: we,
    memoize: Oe,
    memoizeArraylike: function memoizeArraylike(e, t, n) {
      var _this28 = this;

      var r = [],
          i = [];
      return function (s) {
        var o = r.length,
            a = s.length,
            l = 0;

        for (; l < o; l += 1) {
          if (s[l]) {
            if (!Ie(r[l], s[l])) {
              n && n(i[l]);

              var _r36 = e.apply(_this28, s[l]);

              t && t(_r36, i[l]) || (i[l] = _r36);
            }
          } else n && n(i[l]);
        }

        for (; l < a; l += 1) {
          i[l] = e.apply(_this28, s[l]);
        }

        return r = s, i.splice(a), i;
      };
    },
    memoizeHashlike: function memoizeHashlike(e, t, n) {
      var _this29 = this;

      var r = {},
          i = {};
      return function (s) {
        var o = {};

        for (var _a9 in s) {
          if (i[_a9]) {
            if (Ie(r[_a9], s[_a9])) o[_a9] = i[_a9];else {
              n && n(i[_a9]);

              var _r37 = e.apply(_this29, s[_a9]);

              o[_a9] = t && t(_r37, i[_a9]) ? i[_a9] : _r37;
            }
          } else o[_a9] = e.apply(_this29, s[_a9]);
        }

        return r = s, i = o, o;
      };
    },
    memoizeObjArg: Ne,
    mergeEventStores: pr,
    multiplyDuration: Lt,
    padStart: dt,
    parseBusinessHours: Mr,
    parseClassNames: vr,
    parseDragMeta: ts,
    parseEventDef: dr,
    parseFieldSpecs: ot,
    parseMarker: Jt,
    pointInsideRect: bi,
    preventContextMenu: it,
    preventDefault: Qe,
    preventSelection: nt,
    rangeContainsMarker: Yn,
    rangeContainsRange: qn,
    rangesEqual: Gn,
    rangesIntersect: Qn,
    refineEventDef: lr,
    refineProps: Sn,
    removeElement: Pe,
    removeExact: function removeExact(e, t) {
      var n = 0,
          r = 0;

      for (; r < e.length;) {
        e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
      }

      return n;
    },
    renderChunkContent: ks,
    renderFill: Js,
    renderMicroColGroup: Is,
    renderScrollShim: Bs,
    requestJson: di,
    sanitizeShrinkWidth: Os,
    setRef: On,
    sliceEventStore: Wr,
    sortEventSegs: qr,
    startOfDay: wt,
    translateRect: function translateRect(e, t, n) {
      return {
        left: e.left + t,
        right: e.right + t,
        top: e.top + n,
        bottom: e.bottom + n
      };
    },
    triggerDateSelect: Ir,
    unpromisify: li,
    whenTransitionDone: Ze,
    wholeDivideDurations: Vt
  };
  ye(':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;user-select:none}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{border-style:none;padding:0}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}');
  var co = [],
      uo = {
    code: "en",
    week: {
      dow: 0,
      doy: 4
    },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list"
    },
    weekText: "W",
    weekTextLong: "Week",
    closeHint: "Close",
    timeHint: "Time",
    eventHint: "Event",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display"
  },
      ho = Object.assign(Object.assign({}, uo), {
    buttonHints: {
      prev: "Previous $0",
      next: "Next $0",
      today: function today(e, t) {
        return "day" === t ? "Today" : "This " + e;
      }
    },
    viewHint: "$0 view",
    navLinkHint: "Go to $0",
    moreLinkHint: function moreLinkHint(e) {
      return "Show ".concat(e, " more event").concat(1 === e ? "" : "s");
    }
  });

  function fo(e) {
    var t = e.length > 0 ? e[0].code : "en",
        n = co.concat(e),
        r = {
      en: ho
    };
    var _iteratorNormalCompletion37 = true;
    var _didIteratorError37 = false;
    var _iteratorError37 = undefined;

    try {
      for (var _iterator37 = n[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
        var _e55 = _step37.value;
        r[_e55.code] = _e55;
      }
    } catch (err) {
      _didIteratorError37 = true;
      _iteratorError37 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion37 && _iterator37["return"] != null) {
          _iterator37["return"]();
        }
      } finally {
        if (_didIteratorError37) {
          throw _iteratorError37;
        }
      }
    }

    return {
      map: r,
      defaultCode: t
    };
  }

  function go(e, t) {
    return "object" != _typeof(e) || Array.isArray(e) ? function (e, t) {
      var n = [].concat(e || []),
          r = function (e, t) {
        for (var _n42 = 0; _n42 < e.length; _n42 += 1) {
          var _r38 = e[_n42].toLocaleLowerCase().split("-");

          for (var _e56 = _r38.length; _e56 > 0; _e56 -= 1) {
            var _n43 = _r38.slice(0, _e56).join("-");

            if (t[_n43]) return t[_n43];
          }
        }

        return null;
      }(n, t) || ho;

      return po(e, n, r);
    }(e, t) : po(e.code, [e.code], e);
  }

  function po(e, t, n) {
    var r = De([uo, n], ["buttonText"]);
    delete r.code;
    var i = r.week;
    return delete r.week, {
      codeArg: e,
      codes: t,
      week: i,
      simpleNumberFormat: new Intl.NumberFormat(e),
      options: r
    };
  }

  function mo(e) {
    return {
      id: Ke(),
      name: e.name,
      premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
      deps: e.deps || [],
      reducers: e.reducers || [],
      isLoadingFuncs: e.isLoadingFuncs || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || "",
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {}
    };
  }

  function vo() {
    var e,
        t = [],
        n = [];
    return function (r, i) {
      return e && Ie(r, t) && Ie(i, n) || (e = function (e, t) {
        var n = {},
            r = {
          premiumReleaseDate: void 0,
          reducers: [],
          isLoadingFuncs: [],
          contextInit: [],
          eventRefiners: {},
          eventDefMemberAdders: [],
          eventSourceRefiners: {},
          isDraggableTransformers: [],
          eventDragMutationMassagers: [],
          eventDefMutationAppliers: [],
          dateSelectionTransformers: [],
          datePointTransforms: [],
          dateSpanTransforms: [],
          views: {},
          viewPropsTransformers: [],
          isPropsValid: null,
          externalDefTransforms: [],
          viewContainerAppends: [],
          eventDropTransformers: [],
          componentInteractions: [],
          calendarInteractions: [],
          themeClasses: {},
          eventSourceDefs: [],
          cmdFormatter: null,
          recurringTypes: [],
          namedTimeZonedImpl: null,
          initialView: "",
          elementDraggingImpl: null,
          optionChangeHandlers: {},
          scrollGridImpl: null,
          listenerRefiners: {},
          optionRefiners: {},
          propSetHandlers: {}
        };

        function i(e) {
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = e[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var _o16 = _step38.value;
              var _e57 = _o16.name,
                  _a10 = n[_e57];
              void 0 === _a10 ? (n[_e57] = _o16.id, i(_o16.deps), s = _o16, r = {
                premiumReleaseDate: bo((t = r).premiumReleaseDate, s.premiumReleaseDate),
                reducers: t.reducers.concat(s.reducers),
                isLoadingFuncs: t.isLoadingFuncs.concat(s.isLoadingFuncs),
                contextInit: t.contextInit.concat(s.contextInit),
                eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), s.eventRefiners),
                eventDefMemberAdders: t.eventDefMemberAdders.concat(s.eventDefMemberAdders),
                eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), s.eventSourceRefiners),
                isDraggableTransformers: t.isDraggableTransformers.concat(s.isDraggableTransformers),
                eventDragMutationMassagers: t.eventDragMutationMassagers.concat(s.eventDragMutationMassagers),
                eventDefMutationAppliers: t.eventDefMutationAppliers.concat(s.eventDefMutationAppliers),
                dateSelectionTransformers: t.dateSelectionTransformers.concat(s.dateSelectionTransformers),
                datePointTransforms: t.datePointTransforms.concat(s.datePointTransforms),
                dateSpanTransforms: t.dateSpanTransforms.concat(s.dateSpanTransforms),
                views: Object.assign(Object.assign({}, t.views), s.views),
                viewPropsTransformers: t.viewPropsTransformers.concat(s.viewPropsTransformers),
                isPropsValid: s.isPropsValid || t.isPropsValid,
                externalDefTransforms: t.externalDefTransforms.concat(s.externalDefTransforms),
                viewContainerAppends: t.viewContainerAppends.concat(s.viewContainerAppends),
                eventDropTransformers: t.eventDropTransformers.concat(s.eventDropTransformers),
                calendarInteractions: t.calendarInteractions.concat(s.calendarInteractions),
                componentInteractions: t.componentInteractions.concat(s.componentInteractions),
                themeClasses: Object.assign(Object.assign({}, t.themeClasses), s.themeClasses),
                eventSourceDefs: t.eventSourceDefs.concat(s.eventSourceDefs),
                cmdFormatter: s.cmdFormatter || t.cmdFormatter,
                recurringTypes: t.recurringTypes.concat(s.recurringTypes),
                namedTimeZonedImpl: s.namedTimeZonedImpl || t.namedTimeZonedImpl,
                initialView: t.initialView || s.initialView,
                elementDraggingImpl: t.elementDraggingImpl || s.elementDraggingImpl,
                optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), s.optionChangeHandlers),
                scrollGridImpl: s.scrollGridImpl || t.scrollGridImpl,
                listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), s.listenerRefiners),
                optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), s.optionRefiners),
                propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), s.propSetHandlers)
              }) : _a10 !== _o16.id && console.warn("Duplicate plugin '".concat(_e57, "'"));
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38["return"] != null) {
                _iterator38["return"]();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }

          var t, s;
        }

        return e && i(e), i(t), r;
      }(r, i)), t = r, n = i, e;
    };
  }

  function bo(e, t) {
    return void 0 === e ? t : void 0 === t ? e : new Date(Math.max(e.valueOf(), t.valueOf()));
  }

  var yo =
  /*#__PURE__*/
  function (_Kt) {
    _inherits(yo, _Kt);

    function yo() {
      _classCallCheck(this, yo);

      return _possibleConstructorReturn(this, _getPrototypeOf(yo).apply(this, arguments));
    }

    return yo;
  }(Kt);

  function Eo(e, t, n, r) {
    if (t[e]) return t[e];

    var i = function (e, t, n, r) {
      var i = n[e],
          s = r[e],
          o = function o(e) {
        return i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null;
      },
          a = o("component"),
          l = o("superType"),
          c = null;

      if (l) {
        if (l === e) throw new Error("Can't have a custom view type that references itself");
        c = Eo(l, t, n, r);
      }

      !a && c && (a = c.component);
      if (!a) return null;
      return {
        type: e,
        component: a,
        defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
        overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {})
      };
    }(e, t, n, r);

    return i && (t[e] = i), i;
  }

  function Ao(e) {
    return we(e, Do);
  }

  function Do(e) {
    var t = "function" == typeof e ? {
      component: e
    } : e,
        n = t.component;
    var r;
    return t.content && (r = t, n = function n(e) {
      return f(Tn.Consumer, null, function (t) {
        return f(jn, {
          elTag: "div",
          elClasses: Ln(t.viewSpec),
          renderProps: Object.assign(Object.assign({}, e), {
            nextDayThreshold: t.options.nextDayThreshold
          }),
          generatorName: void 0,
          generator: r.content,
          classNameGenerator: r.classNames,
          didMount: r.didMount,
          willUnmount: r.willUnmount
        });
      });
    }), {
      superType: t.type,
      component: n,
      rawOptions: t
    };
  }

  function So(e, t, n, r) {
    var i = Ao(e),
        s = Ao(t.views);
    return we(function (e, t) {
      var n,
          r = {};

      for (n in e) {
        Eo(n, r, e, t);
      }

      for (n in t) {
        Eo(n, r, e, t);
      }

      return r;
    }(i, s), function (e) {
      return function (e, t, n, r, i) {
        var s = e.overrides.duration || e.defaults.duration || r.duration || n.duration,
            o = null,
            a = "",
            l = "",
            c = {};

        if (s && (o = function (e) {
          var t = JSON.stringify(e),
              n = wo[t];
          void 0 === n && (n = jt(e), wo[t] = n);
          return n;
        }(s), o)) {
          var _e58 = Gt(o);

          a = _e58.unit, 1 === _e58.value && (l = a, c = t[a] ? t[a].rawOptions : {});
        }

        var d = function d(t) {
          var n = t.buttonText || {},
              r = e.defaults.buttonTextKey;
          return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null;
        },
            u = function u(t) {
          var n = t.buttonHints || {},
              r = e.defaults.buttonTextKey;
          return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null;
        };

        return {
          type: e.type,
          component: e.component,
          duration: o,
          durationUnit: a,
          singleUnit: l,
          optionDefaults: e.defaults,
          optionOverrides: Object.assign(Object.assign({}, c), e.overrides),
          buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
          buttonTextDefault: d(i) || e.defaults.buttonText || d(mn) || e.type,
          buttonTitleOverride: u(r) || u(n) || e.overrides.buttonHint,
          buttonTitleDefault: u(i) || e.defaults.buttonHint || u(mn)
        };
      }(e, s, t, n, r);
    });
  }

  yo.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  }, yo.prototype.baseIconClass = "fc-icon", yo.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  }, yo.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  }, yo.prototype.iconOverrideOption = "buttonIcons", yo.prototype.iconOverrideCustomButtonOption = "icon", yo.prototype.iconOverridePrefix = "fc-icon-";
  var wo = {};

  function Co(e, t, n) {
    var r = t ? t.activeRange : null;
    return _o({}, function (e, t) {
      var n = Cr(t),
          r = [].concat(e.eventSources || []),
          i = [];
      e.initialEvents && r.unshift(e.initialEvents);
      e.events && r.unshift(e.events);
      var _iteratorNormalCompletion39 = true;
      var _didIteratorError39 = false;
      var _iteratorError39 = undefined;

      try {
        for (var _iterator39 = r[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
          var _e59 = _step39.value;

          var _r39 = wr(_e59, t, n);

          _r39 && i.push(_r39);
        }
      } catch (err) {
        _didIteratorError39 = true;
        _iteratorError39 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion39 && _iterator39["return"] != null) {
            _iterator39["return"]();
          }
        } finally {
          if (_didIteratorError39) {
            throw _iteratorError39;
          }
        }
      }

      return i;
    }(e, n), r, n);
  }

  function Ro(e, t, n, r) {
    var i = n ? n.activeRange : null;

    switch (t.type) {
      case "ADD_EVENT_SOURCES":
        return _o(e, t.sources, i, r);

      case "REMOVE_EVENT_SOURCE":
        return s = e, o = t.sourceId, Se(s, function (e) {
          return e.sourceId !== o;
        });

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? To(e, i, r) : e;

      case "FETCH_EVENT_SOURCES":
        return ko(e, t.sourceIds ? Ce(t.sourceIds) : Io(e, r), i, t.isRefetch || !1, r);

      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return function (e, t, n, r) {
          var i = e[t];
          if (i && n === i.latestFetchId) return Object.assign(Object.assign({}, e), _defineProperty({}, t, Object.assign(Object.assign({}, i), {
            isFetching: !1,
            fetchRange: r
          })));
          return e;
        }(e, t.sourceId, t.fetchId, t.fetchRange);

      case "REMOVE_ALL_EVENT_SOURCES":
        return {};

      default:
        return e;
    }

    var s, o;
  }

  function xo(e) {
    for (var _t30 in e) {
      if (e[_t30].isFetching) return !0;
    }

    return !1;
  }

  function _o(e, t, n, r) {
    var i = {};
    var _iteratorNormalCompletion40 = true;
    var _didIteratorError40 = false;
    var _iteratorError40 = undefined;

    try {
      for (var _iterator40 = t[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
        var _e60 = _step40.value;
        i[_e60.sourceId] = _e60;
      }
    } catch (err) {
      _didIteratorError40 = true;
      _iteratorError40 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion40 && _iterator40["return"] != null) {
          _iterator40["return"]();
        }
      } finally {
        if (_didIteratorError40) {
          throw _iteratorError40;
        }
      }
    }

    return n && (i = To(i, n, r)), Object.assign(Object.assign({}, e), i);
  }

  function To(e, t, n) {
    return ko(e, Se(e, function (e) {
      return function (e, t, n) {
        if (!Oo(e, n)) return !e.latestFetchId;
        return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end;
      }(e, t, n);
    }), t, !1, n);
  }

  function ko(e, t, n, r, i) {
    var s = {};

    for (var _o17 in e) {
      var _a11 = e[_o17];
      t[_o17] ? s[_o17] = Mo(_a11, n, r, i) : s[_o17] = _a11;
    }

    return s;
  }

  function Mo(e, t, n, r) {
    var i = r.options,
        s = r.calendarApi,
        o = r.pluginHooks.eventSourceDefs[e.sourceDefId],
        a = Ke();
    return o.fetch({
      eventSource: e,
      range: t,
      isRefetch: n,
      context: r
    }, function (n) {
      var o = n.rawEvents;
      i.eventSourceSuccess && (o = i.eventSourceSuccess.call(s, o, n.response) || o), e.success && (o = e.success.call(s, o, n.response) || o), r.dispatch({
        type: "RECEIVE_EVENTS",
        sourceId: e.sourceId,
        fetchId: a,
        fetchRange: t,
        rawEvents: o
      });
    }, function (n) {
      var o = !1;
      i.eventSourceFailure && (i.eventSourceFailure.call(s, n), o = !0), e.failure && (e.failure(n), o = !0), o || console.warn(n.message, n), r.dispatch({
        type: "RECEIVE_EVENT_ERROR",
        sourceId: e.sourceId,
        fetchId: a,
        fetchRange: t,
        error: n
      });
    }), Object.assign(Object.assign({}, e), {
      isFetching: !0,
      latestFetchId: a
    });
  }

  function Io(e, t) {
    return Se(e, function (e) {
      return Oo(e, t);
    });
  }

  function Oo(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }

  function No(e, t) {
    switch (t.type) {
      case "UNSELECT_DATES":
        return null;

      case "SELECT_DATES":
        return t.selection;

      default:
        return e;
    }
  }

  function Po(e, t) {
    switch (t.type) {
      case "UNSELECT_EVENT":
        return "";

      case "SELECT_EVENT":
        return t.eventInstanceId;

      default:
        return e;
    }
  }

  function Ho(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_DRAG":
        return null;

      case "SET_EVENT_DRAG":
        return n = t.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function Bo(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_RESIZE":
        return null;

      case "SET_EVENT_RESIZE":
        return n = t.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function jo(e, t, n, r, i) {
    return {
      header: e.headerToolbar ? zo(e.headerToolbar, e, t, n, r, i) : null,
      footer: e.footerToolbar ? zo(e.footerToolbar, e, t, n, r, i) : null
    };
  }

  function zo(e, t, n, r, i, s) {
    var o = {},
        a = [],
        l = !1;

    for (var _c2 in e) {
      var _d3 = Uo(e[_c2], t, n, r, i, s);

      o[_c2] = _d3.widgets, a.push.apply(a, _toConsumableArray(_d3.viewsWithButtons)), l = l || _d3.hasTitle;
    }

    return {
      sectionWidgets: o,
      viewsWithButtons: a,
      hasTitle: l
    };
  }

  function Uo(e, t, n, r, i, s) {
    var o = "rtl" === t.direction,
        a = t.customButtons || {},
        l = n.buttonText || {},
        c = t.buttonText || {},
        d = n.buttonHints || {},
        u = t.buttonHints || {},
        h = e ? e.split(" ") : [],
        f = [],
        g = !1;
    return {
      widgets: h.map(function (e) {
        return e.split(",").map(function (e) {
          if ("title" === e) return g = !0, {
            buttonName: e
          };
          var n, h, p, m, v, b;
          if (n = a[e]) p = function p(e) {
            n.click && n.click.call(e.target, e, e.target);
          }, (m = r.getCustomButtonIconClass(n)) || (m = r.getIconClass(e, o)) || (v = n.text), b = n.hint || n.text;else if (h = i[e]) {
            f.push(e), p = function p() {
              s.changeView(e);
            }, (v = h.buttonTextOverride) || (m = r.getIconClass(e, o)) || (v = h.buttonTextDefault);

            var _n44 = h.buttonTextOverride || h.buttonTextDefault;

            b = ut(h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint, [_n44, e], _n44);
          } else if (s[e]) if (p = function p() {
            s[e]();
          }, (v = l[e]) || (m = r.getIconClass(e, o)) || (v = c[e]), "prevYear" === e || "nextYear" === e) {
            var _t31 = "prevYear" === e ? "prev" : "next";

            b = ut(d[_t31] || u[_t31], [c.year || "year", "year"], c[e]);
          } else b = function b(t) {
            return ut(d[e] || u[e], [c[t] || t, t], c[e]);
          };
          return {
            buttonName: e,
            buttonClick: p,
            buttonIcon: m,
            buttonText: v,
            buttonHint: b
          };
        });
      }),
      viewsWithButtons: f,
      hasTitle: g
    };
  }

  var Lo =
  /*#__PURE__*/
  function () {
    function Lo(e, t, n) {
      _classCallCheck(this, Lo);

      this.type = e, this.getCurrentData = t, this.dateEnv = n;
    }

    _createClass(Lo, [{
      key: "getOption",
      value: function getOption(e) {
        return this.getCurrentData().options[e];
      }
    }, {
      key: "calendar",
      get: function get() {
        return this.getCurrentData().calendarApi;
      }
    }, {
      key: "title",
      get: function get() {
        return this.getCurrentData().viewTitle;
      }
    }, {
      key: "activeStart",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      }
    }, {
      key: "activeEnd",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      }
    }, {
      key: "currentStart",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      }
    }, {
      key: "currentEnd",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      }
    }]);

    return Lo;
  }();

  function Wo(e, t) {
    var n = Re(t.getCurrentData().eventSources),
        r = [];
    var _iteratorNormalCompletion41 = true;
    var _didIteratorError41 = false;
    var _iteratorError41 = undefined;

    try {
      for (var _iterator41 = e[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
        var _t32 = _step41.value;

        var _e61 = !1;

        for (var _r41 = 0; _r41 < n.length; _r41 += 1) {
          if (n[_r41]._raw === _t32) {
            n.splice(_r41, 1), _e61 = !0;
            break;
          }
        }

        _e61 || r.push(_t32);
      }
    } catch (err) {
      _didIteratorError41 = true;
      _iteratorError41 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion41 && _iterator41["return"] != null) {
          _iterator41["return"]();
        }
      } finally {
        if (_didIteratorError41) {
          throw _iteratorError41;
        }
      }
    }

    var _iteratorNormalCompletion42 = true;
    var _didIteratorError42 = false;
    var _iteratorError42 = undefined;

    try {
      for (var _iterator42 = n[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
        var _e62 = _step42.value;
        t.dispatch({
          type: "REMOVE_EVENT_SOURCE",
          sourceId: _e62.sourceId
        });
      }
    } catch (err) {
      _didIteratorError42 = true;
      _iteratorError42 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion42 && _iterator42["return"] != null) {
          _iterator42["return"]();
        }
      } finally {
        if (_didIteratorError42) {
          throw _iteratorError42;
        }
      }
    }

    for (var _i22 = 0, _r40 = r; _i22 < _r40.length; _i22++) {
      var _e63 = _r40[_i22];
      t.calendarApi.addEventSource(_e63);
    }
  }

  var Fo = [mo({
    name: "array-event-source",
    eventSourceDefs: [{
      ignoreRange: !0,
      parseMeta: function parseMeta(e) {
        return Array.isArray(e.events) ? e.events : null;
      },
      fetch: function fetch(e, t) {
        t({
          rawEvents: e.eventSource.meta
        });
      }
    }]
  }), mo({
    name: "func-event-source",
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return "function" == typeof e.events ? e.events : null;
      },
      fetch: function fetch(e, t, n) {
        var r = e.context.dateEnv;
        li(e.eventSource.meta.bind(null, oi(e.range, r)), function (e) {
          return t({
            rawEvents: e
          });
        }, n);
      }
    }]
  }), mo({
    name: "json-event-source",
    eventSourceRefiners: {
      method: String,
      extraParams: wn,
      startParam: String,
      endParam: String,
      timeZoneParam: String
    },
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return !e.url || "json" !== e.format && e.format ? null : {
          url: e.url,
          format: "json",
          method: (e.method || "GET").toUpperCase(),
          extraParams: e.extraParams,
          startParam: e.startParam,
          endParam: e.endParam,
          timeZoneParam: e.timeZoneParam
        };
      },
      fetch: function fetch(e, t, n) {
        var r = e.eventSource.meta,
            i = function (e, t, n) {
          var r,
              i,
              s,
              o,
              a = n.dateEnv,
              l = n.options,
              c = {};
          r = e.startParam, null == r && (r = l.startParam);
          i = e.endParam, null == i && (i = l.endParam);
          s = e.timeZoneParam, null == s && (s = l.timeZoneParam);
          o = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
          Object.assign(c, o), c[r] = a.formatIso(t.start), c[i] = a.formatIso(t.end), "local" !== a.timeZone && (c[s] = a.timeZone);
          return c;
        }(r, e.range, e.context);

        di(r.method, r.url, i).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              e = _ref6[0],
              n = _ref6[1];

          t({
            rawEvents: e,
            response: n
          });
        }, n);
      }
    }]
  }), mo({
    name: "simple-recurring-event",
    recurringTypes: [{
      parse: function parse(e, t) {
        if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
          var _i23,
              _s19 = {
            daysOfWeek: e.daysOfWeek || null,
            startTime: e.startTime || null,
            endTime: e.endTime || null,
            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
          };

          return e.duration && (_i23 = e.duration), !_i23 && e.startTime && e.endTime && (n = e.endTime, r = e.startTime, _i23 = {
            years: n.years - r.years,
            months: n.months - r.months,
            days: n.days - r.days,
            milliseconds: n.milliseconds - r.milliseconds
          }), {
            allDayGuess: Boolean(!e.startTime && !e.endTime),
            duration: _i23,
            typeData: _s19
          };
        }

        var n, r;
        return null;
      },
      expand: function expand(e, t, n) {
        var r = Vn(t, {
          start: e.startRecur,
          end: e.endRecur
        });
        return r ? function (e, t, n, r) {
          var i = e ? Ce(e) : null,
              s = wt(n.start),
              o = n.end,
              a = [];

          for (; s < o;) {
            var _e64 = void 0;

            i && !i[s.getUTCDay()] || (_e64 = t ? r.add(s, t) : s, a.push(_e64)), s = vt(s, 1);
          }

          return a;
        }(e.daysOfWeek, e.startTime, r, n) : [];
      }
    }],
    eventRefiners: {
      daysOfWeek: wn,
      startTime: jt,
      endTime: jt,
      duration: jt,
      startRecur: wn,
      endRecur: wn
    }
  }), mo({
    name: "change-handler",
    optionChangeHandlers: {
      events: function events(e, t) {
        Wo([e], t);
      },
      eventSources: Wo
    }
  }), mo({
    name: "misc",
    isLoadingFuncs: [function (e) {
      return xo(e.eventSources);
    }],
    propSetHandlers: {
      dateProfile: function dateProfile(e, t) {
        t.emitter.trigger("datesSet", Object.assign(Object.assign({}, oi(e.activeRange, t.dateEnv)), {
          view: t.viewApi
        }));
      },
      eventStore: function eventStore(e, t) {
        var n = t.emitter;
        n.hasHandlers("eventsSet") && n.trigger("eventsSet", Lr(e, t));
      }
    }
  })];

  var Vo =
  /*#__PURE__*/
  function () {
    function Vo(e, t) {
      _classCallCheck(this, Vo);

      this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Ee(this.drain.bind(this));
    }

    _createClass(Vo, [{
      key: "request",
      value: function request(e, t) {
        this.queue.push(e), this.delayedRunner.request(t);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        this.delayedRunner.pause(e);
      }
    }, {
      key: "resume",
      value: function resume(e, t) {
        this.delayedRunner.resume(e, t);
      }
    }, {
      key: "drain",
      value: function drain() {
        var e = this.queue;

        for (; e.length;) {
          var _t33 = void 0,
              _n45 = [];

          for (; _t33 = e.shift();) {
            this.runTask(_t33), _n45.push(_t33);
          }

          this.drained(_n45);
        }
      }
    }, {
      key: "runTask",
      value: function runTask(e) {
        this.runTaskOption && this.runTaskOption(e);
      }
    }, {
      key: "drained",
      value: function drained(e) {
        this.drainedOption && this.drainedOption(e);
      }
    }]);

    return Vo;
  }();

  function Go(e, t, n) {
    var r;
    return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, gn(t.titleFormat || function (e) {
      var t = e.currentRangeUnit;
      if ("year" === t) return {
        year: "numeric"
      };
      if ("month" === t) return {
        year: "numeric",
        month: "long"
      };
      var n = St(e.currentRange.start, e.currentRange.end);
      if (null !== n && n > 1) return {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      return {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
    }(e)), {
      isEndExclusive: e.isRangeAllDay,
      defaultSeparator: t.titleRangeSeparator
    });
  }

  var Qo =
  /*#__PURE__*/
  function () {
    function Qo(e) {
      var _this30 = this;

      _classCallCheck(this, Qo);

      this.computeOptionsData = Oe(this._computeOptionsData), this.computeCurrentViewData = Oe(this._computeCurrentViewData), this.organizeRawLocales = Oe(fo), this.buildLocale = Oe(go), this.buildPluginHooks = vo(), this.buildDateEnv = Oe(qo), this.buildTheme = Oe(Yo), this.parseToolbars = Oe(jo), this.buildViewSpecs = Oe(So), this.buildDateProfileGenerator = Ne(Zo), this.buildViewApi = Oe(Xo), this.buildViewUiProps = Ne(Ko), this.buildEventUiBySource = Oe(Jo, xe), this.buildEventUiBases = Oe($o), this.parseContextBusinessHours = Ne(ta), this.buildTitle = Oe(Go), this.emitter = new Tr(), this.actionRunner = new Vo(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function () {
        return _this30.data;
      }, this.dispatch = function (e) {
        _this30.actionRunner.request(e);
      }, this.props = e, this.actionRunner.pause();
      var t = {},
          n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
          r = n.calendarOptions.initialView || n.pluginHooks.initialView,
          i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);

      var s = function (e, t) {
        var n = e.initialDate;
        return null != n ? t.createMarker(n) : Kn(e.now, t);
      }(n.calendarOptions, n.dateEnv),
          o = i.dateProfileGenerator.build(s);

      Yn(o.activeRange, s) || (s = o.currentRange.start);
      var a = {
        dateEnv: n.dateEnv,
        options: n.calendarOptions,
        pluginHooks: n.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      };
      var _iteratorNormalCompletion43 = true;
      var _didIteratorError43 = false;
      var _iteratorError43 = undefined;

      try {
        for (var _iterator43 = n.pluginHooks.contextInit[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
          var _e65 = _step43.value;

          _e65(a);
        }
      } catch (err) {
        _didIteratorError43 = true;
        _iteratorError43 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion43 && _iterator43["return"] != null) {
            _iterator43["return"]();
          }
        } finally {
          if (_didIteratorError43) {
            throw _iteratorError43;
          }
        }
      }

      var l = Co(n.calendarOptions, o, a),
          c = {
        dynamicOptionOverrides: t,
        currentViewType: r,
        currentDate: s,
        dateProfile: o,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: l,
        eventUiBases: {},
        eventStore: {
          defs: {},
          instances: {}
        },
        renderableEventStore: {
          defs: {},
          instances: {}
        },
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig
      },
          d = Object.assign(Object.assign({}, a), c);
      var _iteratorNormalCompletion44 = true;
      var _didIteratorError44 = false;
      var _iteratorError44 = undefined;

      try {
        for (var _iterator44 = n.pluginHooks.reducers[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
          var _e66 = _step44.value;
          Object.assign(c, _e66(null, null, d));
        }
      } catch (err) {
        _didIteratorError44 = true;
        _iteratorError44 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion44 && _iterator44["return"] != null) {
            _iterator44["return"]();
          }
        } finally {
          if (_didIteratorError44) {
            throw _iteratorError44;
          }
        }
      }

      ea(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
    }

    _createClass(Qo, [{
      key: "resetOptions",
      value: function resetOptions(e, t) {
        var n = this.props;
        n.optionOverrides = t ? Object.assign(Object.assign({}, n.optionOverrides), e) : e, this.actionRunner.request({
          type: "NOTHING"
        });
      }
    }, {
      key: "_handleAction",
      value: function _handleAction(e) {
        var t = this.props,
            n = this.state,
            r = this.emitter,
            i = function (e, t) {
          switch (t.type) {
            case "SET_OPTION":
              return Object.assign(Object.assign({}, e), _defineProperty({}, t.optionName, t.rawOptionValue));

            default:
              return e;
          }
        }(n.dynamicOptionOverrides, e),
            s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
            o = function (e, t) {
          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              e = t.viewType;
          }

          return e;
        }(n.currentViewType, e),
            a = this.computeCurrentViewData(o, s, t.optionOverrides, i);

        t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(a.options);
        var l = {
          dateEnv: s.dateEnv,
          options: s.calendarOptions,
          pluginHooks: s.pluginHooks,
          calendarApi: t.calendarApi,
          dispatch: this.dispatch,
          emitter: r,
          getCurrentData: this.getCurrentData
        },
            c = n.currentDate,
            d = n.dateProfile;
        this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (d = a.dateProfileGenerator.build(c)), c = function (e, t) {
          switch (t.type) {
            case "CHANGE_DATE":
              return t.dateMarker;

            default:
              return e;
          }
        }(c, e), d = function (e, t, n, r) {
          var i;

          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              return r.build(t.dateMarker || n);

            case "CHANGE_DATE":
              return r.build(t.dateMarker);

            case "PREV":
              if (i = r.buildPrev(e, n), i.isValid) return i;
              break;

            case "NEXT":
              if (i = r.buildNext(e, n), i.isValid) return i;
          }

          return e;
        }(d, e, c, a.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && Yn(d.currentRange, c) || (c = d.currentRange.start);

        var u = Ro(n.eventSources, e, d, l),
            h = Rr(n.eventStore, e, u, d, l),
            f = xo(u) && !a.options.progressiveEventRendering && n.renderableEventStore || h,
            _this$buildViewUiProp = this.buildViewUiProps(l),
            g = _this$buildViewUiProp.eventUiSingleBase,
            p = _this$buildViewUiProp.selectionConfig,
            m = this.buildEventUiBySource(u),
            v = {
          dynamicOptionOverrides: i,
          currentViewType: o,
          currentDate: c,
          dateProfile: d,
          eventSources: u,
          eventStore: h,
          renderableEventStore: f,
          selectionConfig: p,
          eventUiBases: this.buildEventUiBases(f.defs, g, m),
          businessHours: this.parseContextBusinessHours(l),
          dateSelection: No(n.dateSelection, e),
          eventSelection: Po(n.eventSelection, e),
          eventDrag: Ho(n.eventDrag, e),
          eventResize: Bo(n.eventResize, e)
        },
            b = Object.assign(Object.assign({}, l), v);

        var _iteratorNormalCompletion45 = true;
        var _didIteratorError45 = false;
        var _iteratorError45 = undefined;

        try {
          for (var _iterator45 = s.pluginHooks.reducers[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
            var _t34 = _step45.value;
            Object.assign(v, _t34(n, e, b));
          }
        } catch (err) {
          _didIteratorError45 = true;
          _iteratorError45 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion45 && _iterator45["return"] != null) {
              _iterator45["return"]();
            }
          } finally {
            if (_didIteratorError45) {
              throw _iteratorError45;
            }
          }
        }

        var y = ea(n, l),
            E = ea(v, l);
        !y && E ? r.trigger("loading", !0) : y && !E && r.trigger("loading", !1), this.state = v, t.onAction && t.onAction(e);
      }
    }, {
      key: "updateData",
      value: function updateData() {
        var e = this.props,
            t = this.state,
            n = this.data,
            r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi),
            i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides),
            s = this.data = Object.assign(Object.assign(Object.assign({
          viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
          calendarApi: e.calendarApi,
          dispatch: this.dispatch,
          emitter: this.emitter,
          getCurrentData: this.getCurrentData
        }, r), i), t),
            o = r.pluginHooks.optionChangeHandlers,
            a = n && n.calendarOptions,
            l = r.calendarOptions;

        if (a && a !== l) {
          a.timeZone !== l.timeZone && (t.eventSources = s.eventSources = function (e, t, n) {
            var r = t ? t.activeRange : null;
            return ko(e, Io(e, n), r, !0, n);
          }(s.eventSources, t.dateProfile, s), t.eventStore = s.eventStore = function (e, t, n) {
            var r = e.defs,
                i = we(e.instances, function (e) {
              var i = r[e.defId];
              return i.allDay || i.recurringDef ? e : Object.assign(Object.assign({}, e), {
                range: {
                  start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                  end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                },
                forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
              });
            });
            return {
              defs: r,
              instances: i
            };
          }(s.eventStore, n.dateEnv, s.dateEnv));

          for (var _e67 in o) {
            a[_e67] !== l[_e67] && o[_e67](l[_e67], s);
          }
        }

        e.onData && e.onData(s);
      }
    }, {
      key: "_computeOptionsData",
      value: function _computeOptionsData(e, t, n) {
        var _this$processRawCalen = this.processRawCalendarOptions(e, t),
            r = _this$processRawCalen.refinedOptions,
            i = _this$processRawCalen.pluginHooks,
            s = _this$processRawCalen.localeDefaults,
            o = _this$processRawCalen.availableLocaleData,
            a = _this$processRawCalen.extra;

        na(a);
        var l = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekText, i, o, r.defaultRangeSeparator),
            c = this.buildViewSpecs(i.views, e, t, s),
            d = this.buildTheme(r, i);
        return {
          calendarOptions: r,
          pluginHooks: i,
          dateEnv: l,
          viewSpecs: c,
          theme: d,
          toolbarConfig: this.parseToolbars(r, e, d, c, n),
          localeDefaults: s,
          availableRawLocales: o.map
        };
      }
    }, {
      key: "processRawCalendarOptions",
      value: function processRawCalendarOptions(e, t) {
        var _Dn = Dn([mn, e, t]),
            n = _Dn.locales,
            r = _Dn.locale,
            i = this.organizeRawLocales(n),
            s = i.map,
            o = this.buildLocale(r || i.defaultCode, s).options,
            a = this.buildPluginHooks(e.plugins || [], Fo),
            l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pn), vn), bn), a.listenerRefiners), a.optionRefiners),
            c = {},
            d = Dn([mn, o, e, t]),
            u = {},
            h = this.currentCalendarOptionsInput,
            f = this.currentCalendarOptionsRefined,
            g = !1;

        for (var _e68 in d) {
          "plugins" !== _e68 && (d[_e68] === h[_e68] || yn[_e68] && _e68 in h && yn[_e68](h[_e68], d[_e68]) ? u[_e68] = f[_e68] : l[_e68] ? (u[_e68] = l[_e68](d[_e68]), g = !0) : c[_e68] = h[_e68]);
        }

        return g && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = u), {
          rawOptions: this.currentCalendarOptionsInput,
          refinedOptions: this.currentCalendarOptionsRefined,
          pluginHooks: a,
          availableLocaleData: i,
          localeDefaults: o,
          extra: c
        };
      }
    }, {
      key: "_computeCurrentViewData",
      value: function _computeCurrentViewData(e, t, n, r) {
        var i = t.viewSpecs[e];
        if (!i) throw new Error("viewType \"".concat(e, "\" is not available. Please make sure you've loaded all neccessary plugins"));

        var _this$processRawViewO = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r),
            s = _this$processRawViewO.refinedOptions,
            o = _this$processRawViewO.extra;

        return na(o), {
          viewSpec: i,
          options: s,
          dateProfileGenerator: this.buildDateProfileGenerator({
            dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
            duration: i.duration,
            durationUnit: i.durationUnit,
            usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
            dateEnv: t.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: s.slotMinTime,
            slotMaxTime: s.slotMaxTime,
            showNonCurrentDates: s.showNonCurrentDates,
            dayCount: s.dayCount,
            dateAlignment: s.dateAlignment,
            dateIncrement: s.dateIncrement,
            hiddenDays: s.hiddenDays,
            weekends: s.weekends,
            nowInput: s.now,
            validRangeInput: s.validRange,
            visibleRangeInput: s.visibleRange,
            monthMode: s.monthMode,
            fixedWeekCount: s.fixedWeekCount
          }),
          viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
        };
      }
    }, {
      key: "processRawViewOptions",
      value: function processRawViewOptions(e, t, n, r, i) {
        var s = Dn([mn, e.optionDefaults, n, r, e.optionOverrides, i]),
            o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pn), vn), bn), An), t.listenerRefiners), t.optionRefiners),
            a = {},
            l = this.currentViewOptionsInput,
            c = this.currentViewOptionsRefined,
            d = !1,
            u = {};

        for (var _e69 in s) {
          s[_e69] === l[_e69] || yn[_e69] && yn[_e69](s[_e69], l[_e69]) ? a[_e69] = c[_e69] : (s[_e69] === this.currentCalendarOptionsInput[_e69] || yn[_e69] && yn[_e69](s[_e69], this.currentCalendarOptionsInput[_e69]) ? _e69 in this.currentCalendarOptionsRefined && (a[_e69] = this.currentCalendarOptionsRefined[_e69]) : o[_e69] ? a[_e69] = o[_e69](s[_e69]) : u[_e69] = s[_e69], d = !0);
        }

        return d && (this.currentViewOptionsInput = s, this.currentViewOptionsRefined = a), {
          rawOptions: this.currentViewOptionsInput,
          refinedOptions: this.currentViewOptionsRefined,
          extra: u
        };
      }
    }]);

    return Qo;
  }();

  function qo(e, t, n, r, i, s, o, a) {
    var l = go(t || o.defaultCode, o.map);
    return new $t({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: s.namedTimeZonedImpl,
      locale: l,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: i,
      cmdFormatter: s.cmdFormatter,
      defaultSeparator: a
    });
  }

  function Yo(e, t) {
    return new (t.themeClasses[e.themeSystem] || yo)(e);
  }

  function Zo(e) {
    return new (e.dateProfileGeneratorClass || er)(e);
  }

  function Xo(e, t, n) {
    return new Lo(e, t, n);
  }

  function Jo(e) {
    return we(e, function (e) {
      return e.ui;
    });
  }

  function $o(e, t, n) {
    var r = {
      "": t
    };

    for (var _t35 in e) {
      var _i24 = e[_t35];
      _i24.sourceId && n[_i24.sourceId] && (r[_t35] = n[_i24.sourceId]);
    }

    return r;
  }

  function Ko(e) {
    var t = e.options;
    return {
      eventUiSingleBase: Er({
        display: t.eventDisplay,
        editable: t.editable,
        startEditable: t.eventStartEditable,
        durationEditable: t.eventDurationEditable,
        constraint: t.eventConstraint,
        overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
        allow: t.eventAllow,
        backgroundColor: t.eventBackgroundColor,
        borderColor: t.eventBorderColor,
        textColor: t.eventTextColor,
        color: t.eventColor
      }, e),
      selectionConfig: Er({
        constraint: t.selectConstraint,
        overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
        allow: t.selectAllow
      }, e)
    };
  }

  function ea(e, t) {
    var _iteratorNormalCompletion46 = true;
    var _didIteratorError46 = false;
    var _iteratorError46 = undefined;

    try {
      for (var _iterator46 = t.pluginHooks.isLoadingFuncs[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
        var _n46 = _step46.value;
        if (_n46(e)) return !0;
      }
    } catch (err) {
      _didIteratorError46 = true;
      _iteratorError46 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion46 && _iterator46["return"] != null) {
          _iterator46["return"]();
        }
      } finally {
        if (_didIteratorError46) {
          throw _iteratorError46;
        }
      }
    }

    return !1;
  }

  function ta(e) {
    return Mr(e.options.businessHours, e);
  }

  function na(e, t) {
    for (var _n47 in e) {
      console.warn("Unknown option '".concat(_n47, "'") + (t ? " for view '".concat(t, "'") : ""));
    }
  }

  var ra =
  /*#__PURE__*/
  function (_In16) {
    _inherits(ra, _In16);

    function ra() {
      _classCallCheck(this, ra);

      return _possibleConstructorReturn(this, _getPrototypeOf(ra).apply(this, arguments));
    }

    _createClass(ra, [{
      key: "render",
      value: function render() {
        var _this31 = this;

        return f.apply(void 0, ["div", {
          className: "fc-toolbar-chunk"
        }].concat(_toConsumableArray(this.props.widgetGroups.map(function (e) {
          return _this31.renderWidgetGroup(e);
        }))));
      }
    }, {
      key: "renderWidgetGroup",
      value: function renderWidgetGroup(e) {
        var t = this.props,
            n = this.context.theme,
            r = [],
            i = !0;
        var _iteratorNormalCompletion47 = true;
        var _didIteratorError47 = false;
        var _iteratorError47 = undefined;

        try {
          for (var _iterator47 = e[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
            var _s20 = _step47.value;
            var _e70 = _s20.buttonName,
                _o18 = _s20.buttonClick,
                _a12 = _s20.buttonText,
                _l7 = _s20.buttonIcon,
                _c3 = _s20.buttonHint;
            if ("title" === _e70) i = !1, r.push(f("h2", {
              className: "fc-toolbar-title",
              id: t.titleId
            }, t.title));else {
              var _i25 = _e70 === t.activeButton,
                  _s21 = !t.isTodayEnabled && "today" === _e70 || !t.isPrevEnabled && "prev" === _e70 || !t.isNextEnabled && "next" === _e70,
                  _d4 = ["fc-".concat(_e70, "-button"), n.getClass("button")];

              _i25 && _d4.push(n.getClass("buttonActive")), r.push(f("button", {
                type: "button",
                title: "function" == typeof _c3 ? _c3(t.navUnit) : _c3,
                disabled: _s21,
                "aria-pressed": _i25,
                className: _d4.join(" "),
                onClick: _o18
              }, _a12 || (_l7 ? f("span", {
                className: _l7
              }) : "")));
            }
          }
        } catch (err) {
          _didIteratorError47 = true;
          _iteratorError47 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion47 && _iterator47["return"] != null) {
              _iterator47["return"]();
            }
          } finally {
            if (_didIteratorError47) {
              throw _iteratorError47;
            }
          }
        }

        if (r.length > 1) {
          return f.apply(void 0, ["div", {
            className: i && n.getClass("buttonGroup") || ""
          }].concat(r));
        }

        return r[0];
      }
    }]);

    return ra;
  }(In);

  var ia =
  /*#__PURE__*/
  function (_In17) {
    _inherits(ia, _In17);

    function ia() {
      _classCallCheck(this, ia);

      return _possibleConstructorReturn(this, _getPrototypeOf(ia).apply(this, arguments));
    }

    _createClass(ia, [{
      key: "render",
      value: function render() {
        var e,
            t,
            _this$props6 = this.props,
            n = _this$props6.model,
            r = _this$props6.extraClassName,
            i = !1,
            s = n.sectionWidgets,
            o = s.center;
        return s.left ? (i = !0, e = s.left) : e = s.start, s.right ? (i = !0, t = s.right) : t = s.end, f("div", {
          className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
        }, this.renderSection("start", e || []), this.renderSection("center", o || []), this.renderSection("end", t || []));
      }
    }, {
      key: "renderSection",
      value: function renderSection(e, t) {
        var n = this.props;
        return f(ra, {
          key: e,
          widgetGroups: t,
          title: n.title,
          navUnit: n.navUnit,
          activeButton: n.activeButton,
          isTodayEnabled: n.isTodayEnabled,
          isPrevEnabled: n.isPrevEnabled,
          isNextEnabled: n.isNextEnabled,
          titleId: n.titleId
        });
      }
    }]);

    return ia;
  }(In);

  var sa =
  /*#__PURE__*/
  function (_In18) {
    _inherits(sa, _In18);

    function sa() {
      var _this32;

      _classCallCheck(this, sa);

      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(sa).apply(this, arguments)), _this32.state = {
        availableWidth: null
      }, _this32.handleEl = function (e) {
        _this32.el = e, On(_this32.props.elRef, e), _this32.updateAvailableWidth();
      }, _this32.handleResize = function () {
        _this32.updateAvailableWidth();
      };
      return _this32;
    }

    _createClass(sa, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state,
            n = e.aspectRatio,
            r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
            i = "",
            s = "";
        return n ? null !== t.availableWidth ? i = t.availableWidth / n : s = 1 / n * 100 + "%" : i = e.height || "", f("div", {
          "aria-labelledby": e.labeledById,
          ref: this.handleEl,
          className: r.join(" "),
          style: {
            height: i,
            paddingBottom: s
          }
        }, e.children);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.context.addResizeHandler(this.handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
      }
    }, {
      key: "updateAvailableWidth",
      value: function updateAvailableWidth() {
        this.el && this.props.aspectRatio && this.setState({
          availableWidth: this.el.offsetWidth
        });
      }
    }]);

    return sa;
  }(In);

  var oa =
  /*#__PURE__*/
  function (_gi) {
    _inherits(oa, _gi);

    function oa(e) {
      var _this33;

      _classCallCheck(this, oa);

      _this33 = _possibleConstructorReturn(this, _getPrototypeOf(oa).call(this, e)), _this33.handleSegClick = function (e, t) {
        var _assertThisInitialize2 = _assertThisInitialized(_this33),
            n = _assertThisInitialize2.component,
            r = n.context,
            i = Vr(t);

        if (i && n.isValidSegDownEl(e.target)) {
          var _s22 = He(e.target, ".fc-event-forced-url"),
              _o19 = _s22 ? _s22.querySelector("a[href]").href : "";

          r.emitter.trigger("eventClick", {
            el: t,
            event: new zr(n.context, i.eventRange.def, i.eventRange.instance),
            jsEvent: e,
            view: r.viewApi
          }), _o19 && !e.defaultPrevented && (window.location.href = _o19);
        }
      }, _this33.destroy = qe(e.el, "click", ".fc-event", _this33.handleSegClick);
      return _this33;
    }

    return oa;
  }(gi);

  var aa =
  /*#__PURE__*/
  function (_gi2) {
    _inherits(aa, _gi2);

    function aa(e) {
      var _this34;

      _classCallCheck(this, aa);

      _this34 = _possibleConstructorReturn(this, _getPrototypeOf(aa).call(this, e)), _this34.handleEventElRemove = function (e) {
        e === _this34.currentSegEl && _this34.handleSegLeave(null, _this34.currentSegEl);
      }, _this34.handleSegEnter = function (e, t) {
        Vr(t) && (_this34.currentSegEl = t, _this34.triggerEvent("eventMouseEnter", e, t));
      }, _this34.handleSegLeave = function (e, t) {
        _this34.currentSegEl && (_this34.currentSegEl = null, _this34.triggerEvent("eventMouseLeave", e, t));
      }, _this34.removeHoverListeners = function (e, t, n, r) {
        var i;
        return qe(e, "mouseover", t, function (e, t) {
          if (t !== i) {
            i = t, n(e, t);

            var _s23 = function _s23(e) {
              i = null, r(e, t), t.removeEventListener("mouseleave", _s23);
            };

            t.addEventListener("mouseleave", _s23);
          }
        });
      }(e.el, ".fc-event", _this34.handleSegEnter, _this34.handleSegLeave);
      return _this34;
    }

    _createClass(aa, [{
      key: "destroy",
      value: function destroy() {
        this.removeHoverListeners();
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(e, t, n) {
        var r = this.component,
            i = r.context,
            s = Vr(n);
        t && !r.isValidSegDownEl(t.target) || i.emitter.trigger(e, {
          el: n,
          event: new zr(i, s.eventRange.def, s.eventRange.instance),
          jsEvent: t,
          view: i.viewApi
        });
      }
    }]);

    return aa;
  }(gi);

  var la =
  /*#__PURE__*/
  function (_Mn2) {
    _inherits(la, _Mn2);

    function la() {
      var _this35;

      _classCallCheck(this, la);

      _this35 = _possibleConstructorReturn(this, _getPrototypeOf(la).apply(this, arguments)), _this35.buildViewContext = Oe(kn), _this35.buildViewPropTransformers = Oe(da), _this35.buildToolbarProps = Oe(ca), _this35.headerRef = {
        current: null
      }, _this35.footerRef = {
        current: null
      }, _this35.interactionsStore = {}, _this35.state = {
        viewLabelId: Ge()
      }, _this35.registerInteractiveComponent = function (e, t) {
        var n = function (e, t) {
          return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
            isHitComboAllowed: t.isHitComboAllowed || null
          };
        }(e, t),
            r = [oa, aa].concat(_this35.props.pluginHooks.componentInteractions).map(function (e) {
          return new e(n);
        });

        _this35.interactionsStore[e.uid] = r, mi[e.uid] = n;
      }, _this35.unregisterInteractiveComponent = function (e) {
        var t = _this35.interactionsStore[e.uid];

        if (t) {
          var _iteratorNormalCompletion48 = true;
          var _didIteratorError48 = false;
          var _iteratorError48 = undefined;

          try {
            for (var _iterator48 = t[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
              var _e71 = _step48.value;

              _e71.destroy();
            }
          } catch (err) {
            _didIteratorError48 = true;
            _iteratorError48 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion48 && _iterator48["return"] != null) {
                _iterator48["return"]();
              }
            } finally {
              if (_didIteratorError48) {
                throw _iteratorError48;
              }
            }
          }

          delete _this35.interactionsStore[e.uid];
        }

        delete mi[e.uid];
      }, _this35.resizeRunner = new Ee(function () {
        _this35.props.emitter.trigger("_resize", !0), _this35.props.emitter.trigger("windowResize", {
          view: _this35.props.viewApi
        });
      }), _this35.handleWindowResize = function (e) {
        var t = _this35.props.options;
        t.handleWindowResize && e.target === window && _this35.resizeRunner.request(t.windowResizeDelay);
      };
      return _this35;
    }

    _createClass(la, [{
      key: "render",
      value: function render() {
        var e,
            t = this.props,
            n = t.toolbarConfig,
            r = t.options,
            i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Kn(t.options.now, t.dateEnv), t.viewTitle),
            s = !1,
            o = "";
        t.isHeightAuto || t.forPrint ? o = "" : null != r.height ? s = !0 : null != r.contentHeight ? o = r.contentHeight : e = Math.max(r.aspectRatio, 0.5);
        var a = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent),
            l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
        return f(Tn.Provider, {
          value: a
        }, n.header && f(ia, Object.assign({
          ref: this.headerRef,
          extraClassName: "fc-header-toolbar",
          model: n.header,
          titleId: l
        }, i)), f(sa, {
          liquid: s,
          height: o,
          aspectRatio: e,
          labeledById: l
        }, this.renderView(t), this.buildAppendContent()), n.footer && f(ia, Object.assign({
          ref: this.footerRef,
          extraClassName: "fc-footer-toolbar",
          model: n.footer,
          titleId: ""
        }, i)));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e = this.props;
        this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function (t) {
          return new t(e);
        }), window.addEventListener("resize", this.handleWindowResize);
        var t = e.pluginHooks.propSetHandlers;

        for (var _n48 in t) {
          t[_n48](e[_n48], e);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        var t = this.props,
            n = t.pluginHooks.propSetHandlers;

        for (var _r42 in n) {
          t[_r42] !== e[_r42] && n[_r42](t[_r42], t);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
        var _iteratorNormalCompletion49 = true;
        var _didIteratorError49 = false;
        var _iteratorError49 = undefined;

        try {
          for (var _iterator49 = this.calendarInteractions[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
            var _e72 = _step49.value;

            _e72.destroy();
          }
        } catch (err) {
          _didIteratorError49 = true;
          _iteratorError49 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion49 && _iterator49["return"] != null) {
              _iterator49["return"]();
            }
          } finally {
            if (_didIteratorError49) {
              throw _iteratorError49;
            }
          }
        }

        this.props.emitter.trigger("_unmount");
      }
    }, {
      key: "buildAppendContent",
      value: function buildAppendContent() {
        var e = this.props;
        return f.apply(void 0, [p, {}].concat(_toConsumableArray(e.pluginHooks.viewContainerAppends.map(function (t) {
          return t(e);
        }))));
      }
    }, {
      key: "renderView",
      value: function renderView(e) {
        var t = e.pluginHooks,
            n = e.viewSpec,
            r = {
          dateProfile: e.dateProfile,
          businessHours: e.businessHours,
          eventStore: e.renderableEventStore,
          eventUiBases: e.eventUiBases,
          dateSelection: e.dateSelection,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          isHeightAuto: e.isHeightAuto,
          forPrint: e.forPrint
        },
            i = this.buildViewPropTransformers(t.viewPropsTransformers);
        var _iteratorNormalCompletion50 = true;
        var _didIteratorError50 = false;
        var _iteratorError50 = undefined;

        try {
          for (var _iterator50 = i[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
            var _t36 = _step50.value;
            Object.assign(r, _t36.transform(r, e));
          }
        } catch (err) {
          _didIteratorError50 = true;
          _iteratorError50 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion50 && _iterator50["return"] != null) {
              _iterator50["return"]();
            }
          } finally {
            if (_didIteratorError50) {
              throw _iteratorError50;
            }
          }
        }

        return f(n.component, Object.assign({}, r));
      }
    }]);

    return la;
  }(Mn);

  function ca(e, t, n, r, i, s) {
    var o = n.build(i, void 0, !1),
        a = n.buildPrev(t, r, !1),
        l = n.buildNext(t, r, !1);
    return {
      title: s,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: o.isValid && !Yn(t.currentRange, i),
      isPrevEnabled: a.isValid,
      isNextEnabled: l.isValid
    };
  }

  function da(e) {
    return e.map(function (e) {
      return new e();
    });
  }

  function ua(e) {
    var t = go(e.locale || "en", fo([]).map);
    return new $t(Object.assign(Object.assign({
      timeZone: mn.timeZone,
      calendarSystem: "gregory"
    }, e), {
      locale: t
    }));
  }

  Ki.touchMouseIgnoreWait = 500;
  var ha = 0,
      fa = 0,
      ga = !1;

  var pa =
  /*#__PURE__*/
  function () {
    function pa(e) {
      var _this36 = this;

      _classCallCheck(this, pa);

      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
        if (!_this36.shouldIgnoreMouse() && function (e) {
          return 0 === e.button && !e.ctrlKey;
        }(e) && _this36.tryStart(e)) {
          var _t37 = _this36.createEventFromMouse(e, !0);

          _this36.emitter.trigger("pointerdown", _t37), _this36.initScrollWatch(_t37), _this36.shouldIgnoreMove || document.addEventListener("mousemove", _this36.handleMouseMove), document.addEventListener("mouseup", _this36.handleMouseUp);
        }
      }, this.handleMouseMove = function (e) {
        var t = _this36.createEventFromMouse(e);

        _this36.recordCoords(t), _this36.emitter.trigger("pointermove", t);
      }, this.handleMouseUp = function (e) {
        document.removeEventListener("mousemove", _this36.handleMouseMove), document.removeEventListener("mouseup", _this36.handleMouseUp), _this36.emitter.trigger("pointerup", _this36.createEventFromMouse(e)), _this36.cleanup();
      }, this.handleTouchStart = function (e) {
        if (_this36.tryStart(e)) {
          _this36.isTouchDragging = !0;

          var _t38 = _this36.createEventFromTouch(e, !0);

          _this36.emitter.trigger("pointerdown", _t38), _this36.initScrollWatch(_t38);
          var _n49 = e.target;
          _this36.shouldIgnoreMove || _n49.addEventListener("touchmove", _this36.handleTouchMove), _n49.addEventListener("touchend", _this36.handleTouchEnd), _n49.addEventListener("touchcancel", _this36.handleTouchEnd), window.addEventListener("scroll", _this36.handleTouchScroll, !0);
        }
      }, this.handleTouchMove = function (e) {
        var t = _this36.createEventFromTouch(e);

        _this36.recordCoords(t), _this36.emitter.trigger("pointermove", t);
      }, this.handleTouchEnd = function (e) {
        if (_this36.isDragging) {
          var _t39 = e.target;
          _t39.removeEventListener("touchmove", _this36.handleTouchMove), _t39.removeEventListener("touchend", _this36.handleTouchEnd), _t39.removeEventListener("touchcancel", _this36.handleTouchEnd), window.removeEventListener("scroll", _this36.handleTouchScroll, !0), _this36.emitter.trigger("pointerup", _this36.createEventFromTouch(e)), _this36.cleanup(), _this36.isTouchDragging = !1, ha += 1, setTimeout(function () {
            ha -= 1;
          }, Ki.touchMouseIgnoreWait);
        }
      }, this.handleTouchScroll = function () {
        _this36.wasTouchScroll = !0;
      }, this.handleScroll = function (e) {
        if (!_this36.shouldIgnoreMove) {
          var _t40 = window.pageXOffset - _this36.prevScrollX + _this36.prevPageX,
              _n50 = window.pageYOffset - _this36.prevScrollY + _this36.prevPageY;

          _this36.emitter.trigger("pointermove", {
            origEvent: e,
            isTouch: _this36.isTouchDragging,
            subjectEl: _this36.subjectEl,
            pageX: _t40,
            pageY: _n50,
            deltaX: _t40 - _this36.origPageX,
            deltaY: _n50 - _this36.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new Tr(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
        passive: !0
      }), fa += 1, 1 === fa && window.addEventListener("touchmove", ma, {
        passive: !1
      });
    }

    _createClass(pa, [{
      key: "destroy",
      value: function destroy() {
        this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
          passive: !0
        }), fa -= 1, fa || window.removeEventListener("touchmove", ma, {
          passive: !1
        });
      }
    }, {
      key: "tryStart",
      value: function tryStart(e) {
        var t = this.querySubjectEl(e),
            n = e.target;
        return !(!t || this.handleSelector && !He(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0);
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        ga = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
      }
    }, {
      key: "querySubjectEl",
      value: function querySubjectEl(e) {
        return this.selector ? He(e.target, this.selector) : this.containerEl;
      }
    }, {
      key: "shouldIgnoreMouse",
      value: function shouldIgnoreMouse() {
        return ha || this.isTouchDragging;
      }
    }, {
      key: "cancelTouchScroll",
      value: function cancelTouchScroll() {
        this.isDragging && (ga = !0);
      }
    }, {
      key: "initScrollWatch",
      value: function initScrollWatch(e) {
        this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
      }
    }, {
      key: "recordCoords",
      value: function recordCoords(e) {
        this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
      }
    }, {
      key: "destroyScrollWatch",
      value: function destroyScrollWatch() {
        this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
      }
    }, {
      key: "createEventFromMouse",
      value: function createEventFromMouse(e, t) {
        var n = 0,
            r = 0;
        return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
          origEvent: e,
          isTouch: !1,
          subjectEl: this.subjectEl,
          pageX: e.pageX,
          pageY: e.pageY,
          deltaX: n,
          deltaY: r
        };
      }
    }, {
      key: "createEventFromTouch",
      value: function createEventFromTouch(e, t) {
        var n,
            r,
            i = e.touches,
            s = 0,
            o = 0;
        return i && i.length ? (n = i[0].pageX, r = i[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (s = n - this.origPageX, o = r - this.origPageY), {
          origEvent: e,
          isTouch: !0,
          subjectEl: this.subjectEl,
          pageX: n,
          pageY: r,
          deltaX: s,
          deltaY: o
        };
      }
    }]);

    return pa;
  }();

  function ma(e) {
    ga && e.preventDefault();
  }

  var va =
  /*#__PURE__*/
  function () {
    function va() {
      _classCallCheck(this, va);

      this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }

    _createClass(va, [{
      key: "start",
      value: function start(e, t, n) {
        this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition();
      }
    }, {
      key: "setIsVisible",
      value: function setIsVisible(e) {
        e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
      }
    }, {
      key: "stop",
      value: function stop(e, t) {
        var _this37 = this;

        var n = function n() {
          _this37.cleanup(), t();
        };

        e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
      }
    }, {
      key: "doRevertAnimation",
      value: function doRevertAnimation(e, t) {
        var n = this.mirrorEl,
            r = this.sourceEl.getBoundingClientRect();
        n.style.transition = "top " + t + "ms,left " + t + "ms", Ue(n, {
          left: r.left,
          top: r.top
        }), Ze(n, function () {
          n.style.transition = "", e();
        });
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.mirrorEl && (Pe(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
      }
    }, {
      key: "updateElPosition",
      value: function updateElPosition() {
        this.sourceEl && this.isVisible && Ue(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY
        });
      }
    }, {
      key: "getMirrorEl",
      value: function getMirrorEl() {
        var e = this.sourceElRect,
            t = this.mirrorEl;
        return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), Ue(t, {
          position: "fixed",
          zIndex: this.zIndex,
          visibility: "",
          boxSizing: "border-box",
          width: e.right - e.left,
          height: e.bottom - e.top,
          right: "auto",
          bottom: "auto",
          margin: 0
        }), this.parentNode.appendChild(t)), t;
      }
    }]);

    return va;
  }();

  var ba =
  /*#__PURE__*/
  function (_Li3) {
    _inherits(ba, _Li3);

    function ba(e, t) {
      var _this38;

      _classCallCheck(this, ba);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(ba).call(this)), _this38.handleScroll = function () {
        _this38.scrollTop = _this38.scrollController.getScrollTop(), _this38.scrollLeft = _this38.scrollController.getScrollLeft(), _this38.handleScrollChange();
      }, _this38.scrollController = e, _this38.doesListening = t, _this38.scrollTop = _this38.origScrollTop = e.getScrollTop(), _this38.scrollLeft = _this38.origScrollLeft = e.getScrollLeft(), _this38.scrollWidth = e.getScrollWidth(), _this38.scrollHeight = e.getScrollHeight(), _this38.clientWidth = e.getClientWidth(), _this38.clientHeight = e.getClientHeight(), _this38.clientRect = _this38.computeClientRect(), _this38.doesListening && _this38.getEventTarget().addEventListener("scroll", _this38.handleScroll);
      return _this38;
    }

    _createClass(ba, [{
      key: "destroy",
      value: function destroy() {
        this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        return this.scrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return this.scrollLeft;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return this.clientWidth;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return this.clientHeight;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.scrollHeight;
      }
    }, {
      key: "handleScrollChange",
      value: function handleScrollChange() {}
    }]);

    return ba;
  }(Li);

  var ya =
  /*#__PURE__*/
  function (_ba) {
    _inherits(ya, _ba);

    function ya(e, t) {
      _classCallCheck(this, ya);

      return _possibleConstructorReturn(this, _getPrototypeOf(ya).call(this, new Wi(e), t));
    }

    _createClass(ya, [{
      key: "getEventTarget",
      value: function getEventTarget() {
        return this.scrollController.el;
      }
    }, {
      key: "computeClientRect",
      value: function computeClientRect() {
        return Bi(this.scrollController.el);
      }
    }]);

    return ya;
  }(ba);

  var Ea =
  /*#__PURE__*/
  function (_ba2) {
    _inherits(Ea, _ba2);

    function Ea(e) {
      _classCallCheck(this, Ea);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ea).call(this, new Fi(), e));
    }

    _createClass(Ea, [{
      key: "getEventTarget",
      value: function getEventTarget() {
        return window;
      }
    }, {
      key: "computeClientRect",
      value: function computeClientRect() {
        return {
          left: this.scrollLeft,
          right: this.scrollLeft + this.clientWidth,
          top: this.scrollTop,
          bottom: this.scrollTop + this.clientHeight
        };
      }
    }, {
      key: "handleScrollChange",
      value: function handleScrollChange() {
        this.clientRect = this.computeClientRect();
      }
    }]);

    return Ea;
  }(ba);

  var Aa = "function" == typeof performance ? performance.now : Date.now;

  var Da =
  /*#__PURE__*/
  function () {
    function Da() {
      var _this39 = this;

      _classCallCheck(this, Da);

      this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
        if (_this39.isAnimating) {
          var _e73 = _this39.computeBestEdge(_this39.pointerScreenX + window.pageXOffset, _this39.pointerScreenY + window.pageYOffset);

          if (_e73) {
            var _t41 = Aa();

            _this39.handleSide(_e73, (_t41 - _this39.msSinceRequest) / 1e3), _this39.requestAnimation(_t41);
          } else _this39.isAnimating = !1;
        }
      };
    }

    _createClass(Da, [{
      key: "start",
      value: function start(e, t, n) {
        this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t));
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        if (this.isEnabled) {
          var _n51 = e - window.pageXOffset,
              _r43 = t - window.pageYOffset,
              _i26 = null === this.pointerScreenY ? 0 : _r43 - this.pointerScreenY,
              _s24 = null === this.pointerScreenX ? 0 : _n51 - this.pointerScreenX;

          _i26 < 0 ? this.everMovedUp = !0 : _i26 > 0 && (this.everMovedDown = !0), _s24 < 0 ? this.everMovedLeft = !0 : _s24 > 0 && (this.everMovedRight = !0), this.pointerScreenX = _n51, this.pointerScreenY = _r43, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Aa()));
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.isEnabled) {
          this.isAnimating = !1;
          var _iteratorNormalCompletion51 = true;
          var _didIteratorError51 = false;
          var _iteratorError51 = undefined;

          try {
            for (var _iterator51 = this.scrollCaches[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
              var _e74 = _step51.value;

              _e74.destroy();
            }
          } catch (err) {
            _didIteratorError51 = true;
            _iteratorError51 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion51 && _iterator51["return"] != null) {
                _iterator51["return"]();
              }
            } finally {
              if (_didIteratorError51) {
                throw _iteratorError51;
              }
            }
          }

          this.scrollCaches = null;
        }
      }
    }, {
      key: "requestAnimation",
      value: function requestAnimation(e) {
        this.msSinceRequest = e, requestAnimationFrame(this.animate);
      }
    }, {
      key: "handleSide",
      value: function handleSide(e, t) {
        var n = e.scrollCache,
            r = this.edgeThreshold,
            i = r - e.distance,
            s = i * i / (r * r) * this.maxVelocity * t,
            o = 1;

        switch (e.name) {
          case "left":
            o = -1;

          case "right":
            n.setScrollLeft(n.getScrollLeft() + s * o);
            break;

          case "top":
            o = -1;

          case "bottom":
            n.setScrollTop(n.getScrollTop() + s * o);
        }
      }
    }, {
      key: "computeBestEdge",
      value: function computeBestEdge(e, t) {
        var n = this.edgeThreshold,
            r = null,
            i = this.scrollCaches || [];
        var _iteratorNormalCompletion52 = true;
        var _didIteratorError52 = false;
        var _iteratorError52 = undefined;

        try {
          for (var _iterator52 = i[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
            var _s25 = _step52.value;

            var _i27 = _s25.clientRect,
                _o20 = e - _i27.left,
                _a13 = _i27.right - e,
                _l8 = t - _i27.top,
                _c4 = _i27.bottom - t;

            _o20 >= 0 && _a13 >= 0 && _l8 >= 0 && _c4 >= 0 && (_l8 <= n && this.everMovedUp && _s25.canScrollUp() && (!r || r.distance > _l8) && (r = {
              scrollCache: _s25,
              name: "top",
              distance: _l8
            }), _c4 <= n && this.everMovedDown && _s25.canScrollDown() && (!r || r.distance > _c4) && (r = {
              scrollCache: _s25,
              name: "bottom",
              distance: _c4
            }), _o20 <= n && this.everMovedLeft && _s25.canScrollLeft() && (!r || r.distance > _o20) && (r = {
              scrollCache: _s25,
              name: "left",
              distance: _o20
            }), _a13 <= n && this.everMovedRight && _s25.canScrollRight() && (!r || r.distance > _a13) && (r = {
              scrollCache: _s25,
              name: "right",
              distance: _a13
            }));
          }
        } catch (err) {
          _didIteratorError52 = true;
          _iteratorError52 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion52 && _iterator52["return"] != null) {
              _iterator52["return"]();
            }
          } finally {
            if (_didIteratorError52) {
              throw _iteratorError52;
            }
          }
        }

        return r;
      }
    }, {
      key: "buildCaches",
      value: function buildCaches(e) {
        return this.queryScrollEls(e).map(function (e) {
          return e === window ? new Ea(!1) : new ya(e, !1);
        });
      }
    }, {
      key: "queryScrollEls",
      value: function queryScrollEls(e) {
        var t = [];
        var _iteratorNormalCompletion53 = true;
        var _didIteratorError53 = false;
        var _iteratorError53 = undefined;

        try {
          for (var _iterator53 = this.scrollQuery[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
            var _n52 = _step53.value;
            "object" == _typeof(_n52) ? t.push(_n52) : t.push.apply(t, _toConsumableArray(Array.prototype.slice.call(Fe(e).querySelectorAll(_n52))));
          }
        } catch (err) {
          _didIteratorError53 = true;
          _iteratorError53 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion53 && _iterator53["return"] != null) {
              _iterator53["return"]();
            }
          } finally {
            if (_didIteratorError53) {
              throw _iteratorError53;
            }
          }
        }

        return t;
      }
    }]);

    return Da;
  }();

  var Sa =
  /*#__PURE__*/
  function (_$i) {
    _inherits(Sa, _$i);

    function Sa(e, t) {
      var _this40;

      _classCallCheck(this, Sa);

      _this40 = _possibleConstructorReturn(this, _getPrototypeOf(Sa).call(this, e)), _this40.containerEl = e, _this40.delay = null, _this40.minDistance = 0, _this40.touchScrollAllowed = !0, _this40.mirrorNeedsRevert = !1, _this40.isInteracting = !1, _this40.isDragging = !1, _this40.isDelayEnded = !1, _this40.isDistanceSurpassed = !1, _this40.delayTimeoutId = null, _this40.onPointerDown = function (e) {
        _this40.isDragging || (_this40.isInteracting = !0, _this40.isDelayEnded = !1, _this40.isDistanceSurpassed = !1, nt(document.body), it(document.body), e.isTouch || e.origEvent.preventDefault(), _this40.emitter.trigger("pointerdown", e), _this40.isInteracting && !_this40.pointer.shouldIgnoreMove && (_this40.mirror.setIsVisible(!1), _this40.mirror.start(e.subjectEl, e.pageX, e.pageY), _this40.startDelay(e), _this40.minDistance || _this40.handleDistanceSurpassed(e)));
      }, _this40.onPointerMove = function (e) {
        if (_this40.isInteracting) {
          if (_this40.emitter.trigger("pointermove", e), !_this40.isDistanceSurpassed) {
            var _t42,
                _n53 = _this40.minDistance,
                _r44 = e.deltaX,
                _i28 = e.deltaY;

            _t42 = _r44 * _r44 + _i28 * _i28, _t42 >= _n53 * _n53 && _this40.handleDistanceSurpassed(e);
          }

          _this40.isDragging && ("scroll" !== e.origEvent.type && (_this40.mirror.handleMove(e.pageX, e.pageY), _this40.autoScroller.handleMove(e.pageX, e.pageY)), _this40.emitter.trigger("dragmove", e));
        }
      }, _this40.onPointerUp = function (e) {
        _this40.isInteracting && (_this40.isInteracting = !1, rt(document.body), st(document.body), _this40.emitter.trigger("pointerup", e), _this40.isDragging && (_this40.autoScroller.stop(), _this40.tryStopDrag(e)), _this40.delayTimeoutId && (clearTimeout(_this40.delayTimeoutId), _this40.delayTimeoutId = null));
      };
      var n = _this40.pointer = new pa(e);
      n.emitter.on("pointerdown", _this40.onPointerDown), n.emitter.on("pointermove", _this40.onPointerMove), n.emitter.on("pointerup", _this40.onPointerUp), t && (n.selector = t), _this40.mirror = new va(), _this40.autoScroller = new Da();
      return _this40;
    }

    _createClass(Sa, [{
      key: "destroy",
      value: function destroy() {
        this.pointer.destroy(), this.onPointerUp({});
      }
    }, {
      key: "startDelay",
      value: function startDelay(e) {
        var _this41 = this;

        "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function () {
          _this41.delayTimeoutId = null, _this41.handleDelayEnd(e);
        }, this.delay) : this.handleDelayEnd(e);
      }
    }, {
      key: "handleDelayEnd",
      value: function handleDelayEnd(e) {
        this.isDelayEnded = !0, this.tryStartDrag(e);
      }
    }, {
      key: "handleDistanceSurpassed",
      value: function handleDistanceSurpassed(e) {
        this.isDistanceSurpassed = !0, this.tryStartDrag(e);
      }
    }, {
      key: "tryStartDrag",
      value: function tryStartDrag(e) {
        this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
      }
    }, {
      key: "tryStopDrag",
      value: function tryStopDrag(e) {
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
      }
    }, {
      key: "stopDrag",
      value: function stopDrag(e) {
        this.isDragging = !1, this.emitter.trigger("dragend", e);
      }
    }, {
      key: "setIgnoreMove",
      value: function setIgnoreMove(e) {
        this.pointer.shouldIgnoreMove = e;
      }
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {
        this.mirror.setIsVisible(e);
      }
    }, {
      key: "setMirrorNeedsRevert",
      value: function setMirrorNeedsRevert(e) {
        this.mirrorNeedsRevert = e;
      }
    }, {
      key: "setAutoScrollEnabled",
      value: function setAutoScrollEnabled(e) {
        this.autoScroller.isEnabled = e;
      }
    }]);

    return Sa;
  }($i);

  var wa =
  /*#__PURE__*/
  function () {
    function wa(e) {
      _classCallCheck(this, wa);

      this.origRect = ji(e), this.scrollCaches = zi(e).map(function (e) {
        return new ya(e, !0);
      });
    }

    _createClass(wa, [{
      key: "destroy",
      value: function destroy() {
        var _iteratorNormalCompletion54 = true;
        var _didIteratorError54 = false;
        var _iteratorError54 = undefined;

        try {
          for (var _iterator54 = this.scrollCaches[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
            var _e75 = _step54.value;

            _e75.destroy();
          }
        } catch (err) {
          _didIteratorError54 = true;
          _iteratorError54 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion54 && _iterator54["return"] != null) {
              _iterator54["return"]();
            }
          } finally {
            if (_didIteratorError54) {
              throw _iteratorError54;
            }
          }
        }
      }
    }, {
      key: "computeLeft",
      value: function computeLeft() {
        var e = this.origRect.left;
        var _iteratorNormalCompletion55 = true;
        var _didIteratorError55 = false;
        var _iteratorError55 = undefined;

        try {
          for (var _iterator55 = this.scrollCaches[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
            var _t43 = _step55.value;
            e += _t43.origScrollLeft - _t43.getScrollLeft();
          }
        } catch (err) {
          _didIteratorError55 = true;
          _iteratorError55 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion55 && _iterator55["return"] != null) {
              _iterator55["return"]();
            }
          } finally {
            if (_didIteratorError55) {
              throw _iteratorError55;
            }
          }
        }

        return e;
      }
    }, {
      key: "computeTop",
      value: function computeTop() {
        var e = this.origRect.top;
        var _iteratorNormalCompletion56 = true;
        var _didIteratorError56 = false;
        var _iteratorError56 = undefined;

        try {
          for (var _iterator56 = this.scrollCaches[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
            var _t44 = _step56.value;
            e += _t44.origScrollTop - _t44.getScrollTop();
          }
        } catch (err) {
          _didIteratorError56 = true;
          _iteratorError56 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion56 && _iterator56["return"] != null) {
              _iterator56["return"]();
            }
          } finally {
            if (_didIteratorError56) {
              throw _iteratorError56;
            }
          }
        }

        return e;
      }
    }, {
      key: "isWithinClipping",
      value: function isWithinClipping(e, t) {
        var n = {
          left: e,
          top: t
        };
        var _iteratorNormalCompletion57 = true;
        var _didIteratorError57 = false;
        var _iteratorError57 = undefined;

        try {
          for (var _iterator57 = this.scrollCaches[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
            var _e76 = _step57.value;
            if (!Ca(_e76.getEventTarget()) && !bi(n, _e76.clientRect)) return !1;
          }
        } catch (err) {
          _didIteratorError57 = true;
          _iteratorError57 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion57 && _iterator57["return"] != null) {
              _iterator57["return"]();
            }
          } finally {
            if (_didIteratorError57) {
              throw _iteratorError57;
            }
          }
        }

        return !0;
      }
    }]);

    return wa;
  }();

  function Ca(e) {
    var t = e.tagName;
    return "HTML" === t || "BODY" === t;
  }

  var Ra =
  /*#__PURE__*/
  function () {
    function Ra(e, t) {
      var _this42 = this;

      _classCallCheck(this, Ra);

      this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
        var t = _this42.dragging;
        _this42.initialHit = null, _this42.movingHit = null, _this42.finalHit = null, _this42.prepareHits(), _this42.processFirstCoord(e), _this42.initialHit || !_this42.requireInitial ? (t.setIgnoreMove(!1), _this42.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0);
      }, this.handleDragStart = function (e) {
        _this42.emitter.trigger("dragstart", e), _this42.handleMove(e, !0);
      }, this.handleDragMove = function (e) {
        _this42.emitter.trigger("dragmove", e), _this42.handleMove(e);
      }, this.handlePointerUp = function (e) {
        _this42.releaseHits(), _this42.emitter.trigger("pointerup", e);
      }, this.handleDragEnd = function (e) {
        _this42.movingHit && _this42.emitter.trigger("hitupdate", null, !0, e), _this42.finalHit = _this42.movingHit, _this42.movingHit = null, _this42.emitter.trigger("dragend", e);
      }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Tr();
    }

    _createClass(Ra, [{
      key: "processFirstCoord",
      value: function processFirstCoord(e) {
        var t,
            n = {
          left: e.pageX,
          top: e.pageY
        },
            r = n,
            i = e.subjectEl;
        i instanceof HTMLElement && (t = ji(i), r = Ei(r, t));
        var s = this.initialHit = this.queryHitForOffset(r.left, r.top);

        if (s) {
          if (this.useSubjectCenter && t) {
            var _e77 = yi(t, s.rect);

            _e77 && (r = Ai(_e77));
          }

          this.coordAdjust = Di(r, n);
        } else this.coordAdjust = {
          left: 0,
          top: 0
        };
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
        !t && xa(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
      }
    }, {
      key: "prepareHits",
      value: function prepareHits() {
        this.offsetTrackers = we(this.droppableStore, function (e) {
          return e.component.prepareHits(), new wa(e.el);
        });
      }
    }, {
      key: "releaseHits",
      value: function releaseHits() {
        var e = this.offsetTrackers;

        for (var _t45 in e) {
          e[_t45].destroy();
        }

        this.offsetTrackers = {};
      }
    }, {
      key: "queryHitForOffset",
      value: function queryHitForOffset(e, t) {
        var n = this.droppableStore,
            r = this.offsetTrackers,
            i = null;

        for (var _s26 in n) {
          var _o21 = n[_s26].component,
              _a14 = r[_s26];

          if (_a14 && _a14.isWithinClipping(e, t)) {
            var _n54 = _a14.computeLeft(),
                _r45 = _a14.computeTop(),
                _l9 = e - _n54,
                _c5 = t - _r45,
                _d5 = _a14.origRect,
                _u4 = _d5.right - _d5.left,
                _h3 = _d5.bottom - _d5.top;

            if (_l9 >= 0 && _l9 < _u4 && _c5 >= 0 && _c5 < _h3) {
              var _e78 = _o21.queryHit(_l9, _c5, _u4, _h3);

              _e78 && qn(_e78.dateProfile.activeRange, _e78.dateSpan.range) && (!i || _e78.layer > i.layer) && (_e78.componentId = _s26, _e78.context = _o21.context, _e78.rect.left += _n54, _e78.rect.right += _n54, _e78.rect.top += _r45, _e78.rect.bottom += _r45, i = _e78);
            }
          }
        }

        return i;
      }
    }]);

    return Ra;
  }();

  function xa(e, t) {
    return !e && !t || Boolean(e) === Boolean(t) && si(e.dateSpan, t.dateSpan);
  }

  function _a(e, t) {
    var n = {};
    var _iteratorNormalCompletion58 = true;
    var _didIteratorError58 = false;
    var _iteratorError58 = undefined;

    try {
      for (var _iterator58 = t.pluginHooks.datePointTransforms[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
        var _r46 = _step58.value;
        Object.assign(n, _r46(e, t));
      }
    } catch (err) {
      _didIteratorError58 = true;
      _iteratorError58 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion58 && _iterator58["return"] != null) {
          _iterator58["return"]();
        }
      } finally {
        if (_didIteratorError58) {
          throw _iteratorError58;
        }
      }
    }

    var r, i;
    return Object.assign(n, (r = e, {
      date: (i = t.dateEnv).toDate(r.range.start),
      dateStr: i.formatIso(r.range.start, {
        omitTime: r.allDay
      }),
      allDay: r.allDay
    })), n;
  }

  var Ta =
  /*#__PURE__*/
  function (_gi3) {
    _inherits(Ta, _gi3);

    function Ta(e) {
      var _this43;

      _classCallCheck(this, Ta);

      _this43 = _possibleConstructorReturn(this, _getPrototypeOf(Ta).call(this, e)), _this43.subjectEl = null, _this43.subjectSeg = null, _this43.isDragging = !1, _this43.eventRange = null, _this43.relevantEvents = null, _this43.receivingContext = null, _this43.validMutation = null, _this43.mutatedRelevantEvents = null, _this43.handlePointerDown = function (e) {
        var t = e.origEvent.target,
            _assertThisInitialize3 = _assertThisInitialized(_this43),
            n = _assertThisInitialize3.component,
            r = _assertThisInitialize3.dragging,
            i = r.mirror,
            s = n.context.options,
            o = n.context;

        _this43.subjectEl = e.subjectEl;
        var a = _this43.subjectSeg = Vr(e.subjectEl),
            l = (_this43.eventRange = a.eventRange).instance.instanceId;
        _this43.relevantEvents = fr(o.getCurrentData().eventStore, l), r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, r.delay = e.isTouch && l !== n.props.eventSelection ? function (e) {
          var t = e.context.options,
              n = t.eventLongPressDelay;
          null == n && (n = t.longPressDelay);
          return n;
        }(n) : null, s.fixedMirrorParent ? i.parentNode = s.fixedMirrorParent : i.parentNode = He(t, ".fc"), i.revertDuration = s.dragRevertDuration;
        var c = n.isValidSegDownEl(t) && !He(t, ".fc-event-resizer");
        r.setIgnoreMove(!c), _this43.isDragging = c && e.subjectEl.classList.contains("fc-event-draggable");
      }, _this43.handleDragStart = function (e) {
        var t = _this43.component.context,
            n = _this43.eventRange,
            r = n.instance.instanceId;
        e.isTouch ? r !== _this43.component.props.eventSelection && t.dispatch({
          type: "SELECT_EVENT",
          eventInstanceId: r
        }) : t.dispatch({
          type: "UNSELECT_EVENT"
        }), _this43.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
          el: _this43.subjectEl,
          event: new zr(t, n.def, n.instance),
          jsEvent: e.origEvent,
          view: t.viewApi
        }));
      }, _this43.handleHitUpdate = function (e, t) {
        if (!_this43.isDragging) return;
        var n = _this43.relevantEvents,
            r = _this43.hitDragging.initialHit,
            i = _this43.component.context,
            s = null,
            o = null,
            a = null,
            l = !1,
            c = {
          affectedEvents: n,
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: !0
        };

        if (e) {
          s = e.context;
          var _t46 = s.options;
          i === s || _t46.editable && _t46.droppable ? (o = function (e, t, n) {
            var r = e.dateSpan,
                i = t.dateSpan,
                s = r.range.start,
                o = i.range.start,
                a = {};
            r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = t.context.options.allDayMaintainDuration, i.allDay && (s = wt(s)));
            var l = $n(s, o, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
            l.milliseconds && (a.allDay = !1);
            var c = {
              datesDelta: l,
              standardProps: a
            };
            var _iteratorNormalCompletion59 = true;
            var _didIteratorError59 = false;
            var _iteratorError59 = undefined;

            try {
              for (var _iterator59 = n[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
                var _r47 = _step59.value;

                _r47(c, e, t);
              }
            } catch (err) {
              _didIteratorError59 = true;
              _iteratorError59 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion59 && _iterator59["return"] != null) {
                  _iterator59["return"]();
                }
              } finally {
                if (_didIteratorError59) {
                  throw _iteratorError59;
                }
              }
            }

            return c;
          }(r, e, s.getCurrentData().pluginHooks.eventDragMutationMassagers), o && (a = Pr(n, s.getCurrentData().eventUiBases, o, s), c.mutatedEvents = a, ms(c, e.dateProfile, s) || (l = !0, o = null, a = null, c.mutatedEvents = {
            defs: {},
            instances: {}
          }))) : s = null;
        }

        _this43.displayDrag(s, c), l ? et() : tt(), t || (i === s && xa(r, e) && (o = null), _this43.dragging.setMirrorNeedsRevert(!o), _this43.dragging.setMirrorIsVisible(!e || !Fe(_this43.subjectEl).querySelector(".fc-event-mirror")), _this43.receivingContext = s, _this43.validMutation = o, _this43.mutatedRelevantEvents = a);
      }, _this43.handlePointerUp = function () {
        _this43.isDragging || _this43.cleanup();
      }, _this43.handleDragEnd = function (e) {
        if (_this43.isDragging) {
          var _t47 = _this43.component.context,
              _n55 = _t47.viewApi,
              _assertThisInitialize4 = _assertThisInitialized(_this43),
              _r48 = _assertThisInitialize4.receivingContext,
              _i29 = _assertThisInitialize4.validMutation,
              _s27 = _this43.eventRange.def,
              _o22 = _this43.eventRange.instance,
              _a15 = new zr(_t47, _s27, _o22),
              _l10 = _this43.relevantEvents,
              _c6 = _this43.mutatedRelevantEvents,
              _d6 = _this43.hitDragging.finalHit;

          if (_this43.clearDrag(), _t47.emitter.trigger("eventDragStop", {
            el: _this43.subjectEl,
            event: _a15,
            jsEvent: e.origEvent,
            view: _n55
          }), _i29) {
            if (_r48 === _t47) {
              var _r49 = new zr(_t47, _c6.defs[_s27.defId], _o22 ? _c6.instances[_o22.instanceId] : null);

              _t47.dispatch({
                type: "MERGE_EVENTS",
                eventStore: _c6
              });

              var _d7 = {
                oldEvent: _a15,
                event: _r49,
                relatedEvents: Lr(_c6, _t47, _o22),
                revert: function revert() {
                  _t47.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: _l10
                  });
                }
              },
                  _u5 = {};
              var _iteratorNormalCompletion60 = true;
              var _didIteratorError60 = false;
              var _iteratorError60 = undefined;

              try {
                for (var _iterator60 = _t47.getCurrentData().pluginHooks.eventDropTransformers[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
                  var _e79 = _step60.value;
                  Object.assign(_u5, _e79(_i29, _t47));
                }
              } catch (err) {
                _didIteratorError60 = true;
                _iteratorError60 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion60 && _iterator60["return"] != null) {
                    _iterator60["return"]();
                  }
                } finally {
                  if (_didIteratorError60) {
                    throw _iteratorError60;
                  }
                }
              }

              _t47.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, _d7), _u5), {
                el: e.subjectEl,
                delta: _i29.datesDelta,
                jsEvent: e.origEvent,
                view: _n55
              })), _t47.emitter.trigger("eventChange", _d7);
            } else if (_r48) {
              var _i30 = {
                event: _a15,
                relatedEvents: Lr(_l10, _t47, _o22),
                revert: function revert() {
                  _t47.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: _l10
                  });
                }
              };
              _t47.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _i30), {
                draggedEl: e.subjectEl,
                view: _n55
              })), _t47.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: _l10
              }), _t47.emitter.trigger("eventRemove", _i30);

              var _u6 = _c6.defs[_s27.defId],
                  _h4 = _c6.instances[_o22.instanceId],
                  _f3 = new zr(_r48, _u6, _h4);

              _r48.dispatch({
                type: "MERGE_EVENTS",
                eventStore: _c6
              });

              var _g4 = {
                event: _f3,
                relatedEvents: Lr(_c6, _r48, _h4),
                revert: function revert() {
                  _r48.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: _c6
                  });
                }
              };
              _r48.emitter.trigger("eventAdd", _g4), e.isTouch && _r48.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: _o22.instanceId
              }), _r48.emitter.trigger("drop", Object.assign(Object.assign({}, _a(_d6.dateSpan, _r48)), {
                draggedEl: e.subjectEl,
                jsEvent: e.origEvent,
                view: _d6.context.viewApi
              })), _r48.emitter.trigger("eventReceive", Object.assign(Object.assign({}, _g4), {
                draggedEl: e.subjectEl,
                view: _d6.context.viewApi
              }));
            }
          } else _t47.emitter.trigger("_noEventDrop");
        }

        _this43.cleanup();
      };

      var _assertThisInitialize5 = _assertThisInitialized(_this43),
          t = _assertThisInitialize5.component,
          n = t.context.options,
          r = _this43.dragging = new Sa(e.el);

      r.pointer.selector = Ta.SELECTOR, r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.dragScroll;
      var i = _this43.hitDragging = new Ra(_this43.dragging, mi);
      i.useSubjectCenter = e.useEventCenter, i.emitter.on("pointerdown", _this43.handlePointerDown), i.emitter.on("dragstart", _this43.handleDragStart), i.emitter.on("hitupdate", _this43.handleHitUpdate), i.emitter.on("pointerup", _this43.handlePointerUp), i.emitter.on("dragend", _this43.handleDragEnd);
      return _this43;
    }

    _createClass(Ta, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }, {
      key: "displayDrag",
      value: function displayDrag(e, t) {
        var n = this.component.context,
            r = this.receivingContext;
        r && r !== e && (r === n ? r.dispatch({
          type: "SET_EVENT_DRAG",
          state: {
            affectedEvents: t.affectedEvents,
            mutatedEvents: {
              defs: {},
              instances: {}
            },
            isEvent: !0
          }
        }) : r.dispatch({
          type: "UNSET_EVENT_DRAG"
        })), e && e.dispatch({
          type: "SET_EVENT_DRAG",
          state: t
        });
      }
    }, {
      key: "clearDrag",
      value: function clearDrag() {
        var e = this.component.context,
            t = this.receivingContext;
        t && t.dispatch({
          type: "UNSET_EVENT_DRAG"
        }), e !== t && e.dispatch({
          type: "UNSET_EVENT_DRAG"
        });
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
      }
    }]);

    return Ta;
  }(gi);

  Ta.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  var ka = {
    fixedMirrorParent: wn
  },
      Ma = {
    dateClick: wn,
    eventDragStart: wn,
    eventDragStop: wn,
    eventDrop: wn,
    eventResizeStart: wn,
    eventResizeStop: wn,
    eventResize: wn,
    drop: wn,
    eventReceive: wn,
    eventLeave: wn
  };

  var Ia =
  /*#__PURE__*/
  function () {
    function Ia(e, t) {
      var _this44 = this;

      _classCallCheck(this, Ia);

      this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
        _this44.dragMeta = _this44.buildDragMeta(e.subjectEl);
      }, this.handleHitUpdate = function (e, t, n) {
        var r = _this44.hitDragging.dragging,
            i = null,
            s = null,
            o = !1,
            a = {
          affectedEvents: {
            defs: {},
            instances: {}
          },
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: _this44.dragMeta.create
        };
        e && (i = e.context, _this44.canDropElOnCalendar(n.subjectEl, i) && (s = function (e, t, n) {
          var r = Object.assign({}, t.leftoverProps);
          var _iteratorNormalCompletion61 = true;
          var _didIteratorError61 = false;
          var _iteratorError61 = undefined;

          try {
            for (var _iterator61 = n.pluginHooks.externalDefTransforms[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
              var _i31 = _step61.value;
              Object.assign(r, _i31(e, t));
            }
          } catch (err) {
            _didIteratorError61 = true;
            _iteratorError61 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion61 && _iterator61["return"] != null) {
                _iterator61["return"]();
              }
            } finally {
              if (_didIteratorError61) {
                throw _iteratorError61;
              }
            }
          }

          var _lr2 = lr(r, n),
              i = _lr2.refined,
              s = _lr2.extra,
              o = dr(i, s, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
              a = e.range.start;

          e.allDay && t.startTime && (a = n.dateEnv.add(a, t.startTime));
          var l = t.duration ? n.dateEnv.add(a, t.duration) : Nr(e.allDay, a, n),
              c = tr(o.defId, {
            start: a,
            end: l
          });
          return {
            def: o,
            instance: c
          };
        }(e.dateSpan, _this44.dragMeta, i), a.mutatedEvents = hr(s), o = !ms(a, e.dateProfile, i), o && (a.mutatedEvents = {
          defs: {},
          instances: {}
        }, s = null))), _this44.displayDrag(i, a), r.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), o ? et() : tt(), t || (r.setMirrorNeedsRevert(!s), _this44.receivingContext = i, _this44.droppableEvent = s);
      }, this.handleDragEnd = function (e) {
        var t = _this44.receivingContext,
            n = _this44.droppableEvent;

        if (_this44.clearDrag(), t && n) {
          var _r50 = _this44.hitDragging.finalHit,
              _i32 = _r50.context.viewApi,
              _s28 = _this44.dragMeta;

          if (t.emitter.trigger("drop", Object.assign(Object.assign({}, _a(_r50.dateSpan, t)), {
            draggedEl: e.subjectEl,
            jsEvent: e.origEvent,
            view: _i32
          })), _s28.create) {
            var _r51 = hr(n);

            t.dispatch({
              type: "MERGE_EVENTS",
              eventStore: _r51
            }), e.isTouch && t.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: n.instance.instanceId
            }), t.emitter.trigger("eventReceive", {
              event: new zr(t, n.def, n.instance),
              relatedEvents: [],
              revert: function revert() {
                t.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: _r51
                });
              },
              draggedEl: e.subjectEl,
              view: _i32
            });
          }
        }

        _this44.receivingContext = null, _this44.droppableEvent = null;
      };
      var n = this.hitDragging = new Ra(e, mi);
      n.requireInitial = !1, n.emitter.on("dragstart", this.handleDragStart), n.emitter.on("hitupdate", this.handleHitUpdate), n.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
    }

    _createClass(Ia, [{
      key: "buildDragMeta",
      value: function buildDragMeta(e) {
        return "object" == _typeof(this.suppliedDragMeta) ? ts(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? ts(this.suppliedDragMeta(e)) : function (e) {
          var t = function (e, t) {
            var n = Ki.dataAttrPrefix,
                r = (n ? n + "-" : "") + t;
            return e.getAttribute("data-" + r) || "";
          }(e, "event");

          return ts(t ? JSON.parse(t) : {
            create: !1
          });
        }(e);
      }
    }, {
      key: "displayDrag",
      value: function displayDrag(e, t) {
        var n = this.receivingContext;
        n && n !== e && n.dispatch({
          type: "UNSET_EVENT_DRAG"
        }), e && e.dispatch({
          type: "SET_EVENT_DRAG",
          state: t
        });
      }
    }, {
      key: "clearDrag",
      value: function clearDrag() {
        this.receivingContext && this.receivingContext.dispatch({
          type: "UNSET_EVENT_DRAG"
        });
      }
    }, {
      key: "canDropElOnCalendar",
      value: function canDropElOnCalendar(e, t) {
        var n = t.options.dropAccept;
        return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(Be(e, n));
      }
    }]);

    return Ia;
  }();

  Ki.dataAttrPrefix = "";

  var Oa =
  /*#__PURE__*/
  function (_$i2) {
    _inherits(Oa, _$i2);

    function Oa(e) {
      var _this45;

      _classCallCheck(this, Oa);

      _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Oa).call(this, e)), _this45.shouldIgnoreMove = !1, _this45.mirrorSelector = "", _this45.currentMirrorEl = null, _this45.handlePointerDown = function (e) {
        _this45.emitter.trigger("pointerdown", e), _this45.shouldIgnoreMove || _this45.emitter.trigger("dragstart", e);
      }, _this45.handlePointerMove = function (e) {
        _this45.shouldIgnoreMove || _this45.emitter.trigger("dragmove", e);
      }, _this45.handlePointerUp = function (e) {
        _this45.emitter.trigger("pointerup", e), _this45.shouldIgnoreMove || _this45.emitter.trigger("dragend", e);
      };
      var t = _this45.pointer = new pa(e);
      t.emitter.on("pointerdown", _this45.handlePointerDown), t.emitter.on("pointermove", _this45.handlePointerMove), t.emitter.on("pointerup", _this45.handlePointerUp);
      return _this45;
    }

    _createClass(Oa, [{
      key: "destroy",
      value: function destroy() {
        this.pointer.destroy();
      }
    }, {
      key: "setIgnoreMove",
      value: function setIgnoreMove(e) {
        this.shouldIgnoreMove = e;
      }
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {
        if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);else {
          var _e80 = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;

          _e80 && (this.currentMirrorEl = _e80, _e80.style.visibility = "hidden");
        }
      }
    }]);

    return Oa;
  }($i);

  var Na = mo({
    name: "@fullcalendar/interaction",
    componentInteractions: [
    /*#__PURE__*/
    function (_gi4) {
      _inherits(_class2, _gi4);

      function _class2(e) {
        var _this46;

        _classCallCheck(this, _class2);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, e)), _this46.handlePointerDown = function (e) {
          var _assertThisInitialize6 = _assertThisInitialized(_this46),
              t = _assertThisInitialize6.dragging,
              n = e.origEvent.target;

          t.setIgnoreMove(!_this46.component.isValidDateDownEl(n));
        }, _this46.handleDragEnd = function (e) {
          var _assertThisInitialize7 = _assertThisInitialized(_this46),
              t = _assertThisInitialize7.component,
              n = _this46.dragging.pointer;

          if (!n.wasTouchScroll) {
            var _this46$hitDragging = _this46.hitDragging,
                _n56 = _this46$hitDragging.initialHit,
                _r52 = _this46$hitDragging.finalHit;

            if (_n56 && _r52 && xa(_n56, _r52)) {
              var _r53 = t.context,
                  _i33 = Object.assign(Object.assign({}, _a(_n56.dateSpan, _r53)), {
                dayEl: _n56.dayEl,
                jsEvent: e.origEvent,
                view: _r53.viewApi || _r53.calendarApi.view
              });

              _r53.emitter.trigger("dateClick", _i33);
            }
          }
        }, _this46.dragging = new Sa(e.el), _this46.dragging.autoScroller.isEnabled = !1;
        var t = _this46.hitDragging = new Ra(_this46.dragging, pi(e));
        t.emitter.on("pointerdown", _this46.handlePointerDown), t.emitter.on("dragend", _this46.handleDragEnd);
        return _this46;
      }

      _createClass(_class2, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }]);

      return _class2;
    }(gi),
    /*#__PURE__*/
    function (_gi5) {
      _inherits(_class3, _gi5);

      function _class3(e) {
        var _this47;

        _classCallCheck(this, _class3);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this, e)), _this47.dragSelection = null, _this47.handlePointerDown = function (e) {
          var _assertThisInitialize8 = _assertThisInitialized(_this47),
              t = _assertThisInitialize8.component,
              n = _assertThisInitialize8.dragging,
              r = t.context.options,
              i = r.selectable && t.isValidDateDownEl(e.origEvent.target);

          n.setIgnoreMove(!i), n.delay = e.isTouch ? function (e) {
            var t = e.context.options,
                n = t.selectLongPressDelay;
            null == n && (n = t.longPressDelay);
            return n;
          }(t) : null;
        }, _this47.handleDragStart = function (e) {
          _this47.component.context.calendarApi.unselect(e);
        }, _this47.handleHitUpdate = function (e, t) {
          var n = _this47.component.context,
              r = null,
              i = !1;

          if (e) {
            var _t48 = _this47.hitDragging.initialHit;
            e.componentId === _t48.componentId && _this47.isHitComboAllowed && !_this47.isHitComboAllowed(_t48, e) || (r = function (e, t, n) {
              var r = e.dateSpan,
                  i = t.dateSpan,
                  s = [r.range.start, r.range.end, i.range.start, i.range.end];
              s.sort(ht);
              var o = {};
              var _iteratorNormalCompletion62 = true;
              var _didIteratorError62 = false;
              var _iteratorError62 = undefined;

              try {
                for (var _iterator62 = n[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
                  var _r54 = _step62.value;

                  var _n57 = _r54(e, t);

                  if (!1 === _n57) return null;
                  _n57 && Object.assign(o, _n57);
                }
              } catch (err) {
                _didIteratorError62 = true;
                _iteratorError62 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion62 && _iterator62["return"] != null) {
                    _iterator62["return"]();
                  }
                } finally {
                  if (_didIteratorError62) {
                    throw _iteratorError62;
                  }
                }
              }

              return o.range = {
                start: s[0],
                end: s[3]
              }, o.allDay = r.allDay, o;
            }(_t48, e, n.pluginHooks.dateSelectionTransformers)), r && vs(r, e.dateProfile, n) || (i = !0, r = null);
          }

          r ? n.dispatch({
            type: "SELECT_DATES",
            selection: r
          }) : t || n.dispatch({
            type: "UNSELECT_DATES"
          }), i ? et() : tt(), t || (_this47.dragSelection = r);
        }, _this47.handlePointerUp = function (e) {
          _this47.dragSelection && (Ir(_this47.dragSelection, e, _this47.component.context), _this47.dragSelection = null);
        };
        var t = e.component,
            n = t.context.options,
            r = _this47.dragging = new Sa(e.el);
        r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
        var i = _this47.hitDragging = new Ra(_this47.dragging, pi(e));
        i.emitter.on("pointerdown", _this47.handlePointerDown), i.emitter.on("dragstart", _this47.handleDragStart), i.emitter.on("hitupdate", _this47.handleHitUpdate), i.emitter.on("pointerup", _this47.handlePointerUp);
        return _this47;
      }

      _createClass(_class3, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }]);

      return _class3;
    }(gi), Ta,
    /*#__PURE__*/
    function (_gi6) {
      _inherits(_class4, _gi6);

      function _class4(e) {
        var _this48;

        _classCallCheck(this, _class4);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(_class4).call(this, e)), _this48.draggingSegEl = null, _this48.draggingSeg = null, _this48.eventRange = null, _this48.relevantEvents = null, _this48.validMutation = null, _this48.mutatedRelevantEvents = null, _this48.handlePointerDown = function (e) {
          var _assertThisInitialize9 = _assertThisInitialized(_this48),
              t = _assertThisInitialize9.component,
              n = Vr(_this48.querySegEl(e)),
              r = _this48.eventRange = n.eventRange;

          _this48.dragging.minDistance = t.context.options.eventDragMinDistance, _this48.dragging.setIgnoreMove(!_this48.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && _this48.component.props.eventSelection !== r.instance.instanceId);
        }, _this48.handleDragStart = function (e) {
          var t = _this48.component.context,
              n = _this48.eventRange;
          _this48.relevantEvents = fr(t.getCurrentData().eventStore, _this48.eventRange.instance.instanceId);

          var r = _this48.querySegEl(e);

          _this48.draggingSegEl = r, _this48.draggingSeg = Vr(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
            el: r,
            event: new zr(t, n.def, n.instance),
            jsEvent: e.origEvent,
            view: t.viewApi
          });
        }, _this48.handleHitUpdate = function (e, t, n) {
          var r = _this48.component.context,
              i = _this48.relevantEvents,
              s = _this48.hitDragging.initialHit,
              o = _this48.eventRange.instance,
              a = null,
              l = null,
              c = !1,
              d = {
            affectedEvents: i,
            mutatedEvents: {
              defs: {},
              instances: {}
            },
            isEvent: !0
          };

          if (e) {
            e.componentId === s.componentId && _this48.isHitComboAllowed && !_this48.isHitComboAllowed(s, e) || (a = function (e, t, n, r) {
              var i = e.context.dateEnv,
                  s = e.dateSpan.range.start,
                  o = t.dateSpan.range.start,
                  a = $n(s, o, i, e.largeUnit);

              if (n) {
                if (i.add(r.start, a) < r.end) return {
                  startDelta: a
                };
              } else if (i.add(r.end, a) > r.start) return {
                endDelta: a
              };

              return null;
            }(s, e, n.subjectEl.classList.contains("fc-event-resizer-start"), o.range));
          }

          a && (l = Pr(i, r.getCurrentData().eventUiBases, a, r), d.mutatedEvents = l, ms(d, e.dateProfile, r) || (c = !0, a = null, l = null, d.mutatedEvents = null)), l ? r.dispatch({
            type: "SET_EVENT_RESIZE",
            state: d
          }) : r.dispatch({
            type: "UNSET_EVENT_RESIZE"
          }), c ? et() : tt(), t || (a && xa(s, e) && (a = null), _this48.validMutation = a, _this48.mutatedRelevantEvents = l);
        }, _this48.handleDragEnd = function (e) {
          var t = _this48.component.context,
              n = _this48.eventRange.def,
              r = _this48.eventRange.instance,
              i = new zr(t, n, r),
              s = _this48.relevantEvents,
              o = _this48.mutatedRelevantEvents;

          if (t.emitter.trigger("eventResizeStop", {
            el: _this48.draggingSegEl,
            event: i,
            jsEvent: e.origEvent,
            view: t.viewApi
          }), _this48.validMutation) {
            var _a16 = new zr(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);

            t.dispatch({
              type: "MERGE_EVENTS",
              eventStore: o
            });
            var _l11 = {
              oldEvent: i,
              event: _a16,
              relatedEvents: Lr(o, t, r),
              revert: function revert() {
                t.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: s
                });
              }
            };
            t.emitter.trigger("eventResize", Object.assign(Object.assign({}, _l11), {
              el: _this48.draggingSegEl,
              startDelta: _this48.validMutation.startDelta || jt(0),
              endDelta: _this48.validMutation.endDelta || jt(0),
              jsEvent: e.origEvent,
              view: t.viewApi
            })), t.emitter.trigger("eventChange", _l11);
          } else t.emitter.trigger("_noEventResize");

          _this48.draggingSeg = null, _this48.relevantEvents = null, _this48.validMutation = null;
        };
        var t = e.component,
            n = _this48.dragging = new Sa(e.el);
        n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
        var r = _this48.hitDragging = new Ra(_this48.dragging, pi(e));
        r.emitter.on("pointerdown", _this48.handlePointerDown), r.emitter.on("dragstart", _this48.handleDragStart), r.emitter.on("hitupdate", _this48.handleHitUpdate), r.emitter.on("dragend", _this48.handleDragEnd);
        return _this48;
      }

      _createClass(_class4, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }, {
        key: "querySegEl",
        value: function querySegEl(e) {
          return He(e.subjectEl, ".fc-event");
        }
      }]);

      return _class4;
    }(gi)],
    calendarInteractions: [
    /*#__PURE__*/
    function () {
      function _class5(e) {
        var _this49 = this;

        _classCallCheck(this, _class5);

        this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
          e.jsEvent && (_this49.isRecentPointerDateSelect = !0);
        }, this.onDocumentPointerDown = function (e) {
          var t = _this49.context.options.unselectCancel,
              n = We(e.origEvent);
          _this49.matchesCancel = !!He(n, t), _this49.matchesEvent = !!He(n, Ta.SELECTOR);
        }, this.onDocumentPointerUp = function (e) {
          var t = _this49.context,
              n = _this49.documentPointer,
              r = t.getCurrentData();

          if (!n.wasTouchScroll) {
            if (r.dateSelection && !_this49.isRecentPointerDateSelect) {
              var _n58 = t.options.unselectAuto;
              !_n58 || _n58 && _this49.matchesCancel || t.calendarApi.unselect(e);
            }

            r.eventSelection && !_this49.matchesEvent && t.dispatch({
              type: "UNSELECT_EVENT"
            });
          }

          _this49.isRecentPointerDateSelect = !1;
        };
        var t = this.documentPointer = new pa(document);
        t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
      }

      _createClass(_class5, [{
        key: "destroy",
        value: function destroy() {
          this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
        }
      }]);

      return _class5;
    }()],
    elementDraggingImpl: Sa,
    optionRefiners: ka,
    listenerRefiners: Ma
  });

  var Pa =
  /*#__PURE__*/
  function (_Vi2) {
    _inherits(Pa, _Vi2);

    function Pa() {
      var _this50;

      _classCallCheck(this, Pa);

      _this50 = _possibleConstructorReturn(this, _getPrototypeOf(Pa).apply(this, arguments)), _this50.headerElRef = {
        current: null
      };
      return _this50;
    }

    _createClass(Pa, [{
      key: "renderSimpleLayout",
      value: function renderSimpleLayout(e, t) {
        var n = this.props,
            r = this.context,
            i = [],
            s = js(r.options);
        return e && i.push({
          type: "header",
          key: "header",
          isSticky: s,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        }), i.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunk: {
            content: t
          }
        }), f(Un, {
          elClasses: ["fc-daygrid"],
          viewSpec: r.viewSpec
        }, f(Us, {
          liquid: !n.isHeightAuto && !n.forPrint,
          collapsibleWidth: n.forPrint,
          cols: [],
          sections: i
        }));
      }
    }, {
      key: "renderHScrollLayout",
      value: function renderHScrollLayout(e, t, n, r) {
        var i = this.context.pluginHooks.scrollGridImpl;
        if (!i) throw new Error("No ScrollGrid implementation");
        var s = this.props,
            o = this.context,
            a = !s.forPrint && js(o.options),
            l = !s.forPrint && zs(o.options),
            c = [];
        return e && c.push({
          type: "header",
          key: "header",
          isSticky: a,
          chunks: [{
            key: "main",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }]
        }), c.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunks: [{
            key: "main",
            content: t
          }]
        }), l && c.push({
          type: "footer",
          key: "footer",
          isSticky: !0,
          chunks: [{
            key: "main",
            content: Bs
          }]
        }), f(Un, {
          elClasses: ["fc-daygrid"],
          viewSpec: o.viewSpec
        }, f(i, {
          liquid: !s.isHeightAuto && !s.forPrint,
          collapsibleWidth: s.forPrint,
          colGroups: [{
            cols: [{
              span: n,
              minWidth: r
            }]
          }],
          sections: c
        }));
      }
    }]);

    return Pa;
  }(Vi);

  function Ha(e, t) {
    var n = [];

    for (var _e81 = 0; _e81 < t; _e81 += 1) {
      n[_e81] = [];
    }

    var _iteratorNormalCompletion63 = true;
    var _didIteratorError63 = false;
    var _iteratorError63 = undefined;

    try {
      for (var _iterator63 = e[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
        var _t49 = _step63.value;

        n[_t49.row].push(_t49);
      }
    } catch (err) {
      _didIteratorError63 = true;
      _iteratorError63 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion63 && _iterator63["return"] != null) {
          _iterator63["return"]();
        }
      } finally {
        if (_didIteratorError63) {
          throw _iteratorError63;
        }
      }
    }

    return n;
  }

  function Ba(e, t) {
    var n = [];

    for (var _e82 = 0; _e82 < t; _e82 += 1) {
      n[_e82] = [];
    }

    var _iteratorNormalCompletion64 = true;
    var _didIteratorError64 = false;
    var _iteratorError64 = undefined;

    try {
      for (var _iterator64 = e[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
        var _t50 = _step64.value;

        n[_t50.firstCol].push(_t50);
      }
    } catch (err) {
      _didIteratorError64 = true;
      _iteratorError64 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion64 && _iterator64["return"] != null) {
          _iterator64["return"]();
        }
      } finally {
        if (_didIteratorError64) {
          throw _iteratorError64;
        }
      }
    }

    return n;
  }

  function ja(e, t) {
    var n = [];

    if (e) {
      for (var _r55 = 0; _r55 < t; _r55 += 1) {
        n[_r55] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      var _iteratorNormalCompletion65 = true;
      var _didIteratorError65 = false;
      var _iteratorError65 = undefined;

      try {
        for (var _iterator65 = e.segs[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
          var _t51 = _step65.value;

          n[_t51.row].segs.push(_t51);
        }
      } catch (err) {
        _didIteratorError65 = true;
        _iteratorError65 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion65 && _iterator65["return"] != null) {
            _iterator65["return"]();
          }
        } finally {
          if (_didIteratorError65) {
            throw _iteratorError65;
          }
        }
      }
    } else for (var _e83 = 0; _e83 < t; _e83 += 1) {
      n[_e83] = null;
    }

    return n;
  }

  var za = gn({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow"
  });

  function Ua(e) {
    var t = e.eventRange.ui.display;
    return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
  }

  var La =
  /*#__PURE__*/
  function (_In19) {
    _inherits(La, _In19);

    function La() {
      _classCallCheck(this, La);

      return _possibleConstructorReturn(this, _getPrototypeOf(La).apply(this, arguments));
    }

    _createClass(La, [{
      key: "render",
      value: function render() {
        var e = this.props;
        return f(Ws, Object.assign({}, e, {
          elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
          defaultTimeFormat: za,
          defaultDisplayEventEnd: e.defaultDisplayEventEnd,
          disableResizing: !e.seg.eventRange.def.allDay
        }));
      }
    }]);

    return La;
  }(In);

  var Wa =
  /*#__PURE__*/
  function (_In20) {
    _inherits(Wa, _In20);

    function Wa() {
      _classCallCheck(this, Wa);

      return _possibleConstructorReturn(this, _getPrototypeOf(Wa).apply(this, arguments));
    }

    _createClass(Wa, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = $r(r, n.eventTimeFormat || za, t, !0, e.defaultDisplayEventEnd);
        return f(Ls, Object.assign({}, e, {
          elTag: "a",
          elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
          elAttrs: ni(e.seg, t),
          defaultGenerator: Fa,
          timeText: i,
          isResizing: !1,
          isDateSelecting: !1
        }));
      }
    }]);

    return Wa;
  }(In);

  function Fa(e) {
    return f(p, null, f("div", {
      className: "fc-daygrid-event-dot",
      style: {
        borderColor: e.borderColor || e.backgroundColor
      }
    }), e.timeText && f("div", {
      className: "fc-event-time"
    }, e.timeText), f("div", {
      className: "fc-event-title"
    }, e.event.title || f(p, null, " ")));
  }

  var Va =
  /*#__PURE__*/
  function (_In21) {
    _inherits(Va, _In21);

    function Va() {
      var _this51;

      _classCallCheck(this, Va);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(Va).apply(this, arguments)), _this51.compileSegs = Oe(Ga);
      return _this51;
    }

    _createClass(Va, [{
      key: "render",
      value: function render() {
        var e = this.props,
            _this$compileSegs = this.compileSegs(e.singlePlacements),
            t = _this$compileSegs.allSegs,
            n = _this$compileSegs.invisibleSegs;

        return f(no, {
          elClasses: ["fc-daygrid-more-link"],
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          allDayDate: e.allDayDate,
          moreCnt: e.moreCnt,
          allSegs: t,
          hiddenSegs: n,
          alignmentElRef: e.alignmentElRef,
          alignGridTop: e.alignGridTop,
          extraDateSpan: e.extraDateSpan,
          popoverContent: function popoverContent() {
            var n = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
            return f(p, null, t.map(function (t) {
              var r = t.eventRange.instance.instanceId;
              return f("div", {
                className: "fc-daygrid-event-harness",
                key: r,
                style: {
                  visibility: n[r] ? "hidden" : ""
                }
              }, Ua(t) ? f(Wa, Object.assign({
                seg: t,
                isDragging: !1,
                isSelected: r === e.eventSelection,
                defaultDisplayEventEnd: !1
              }, Kr(t, e.todayRange))) : f(La, Object.assign({
                seg: t,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: r === e.eventSelection,
                defaultDisplayEventEnd: !1
              }, Kr(t, e.todayRange))));
            }));
          }
        });
      }
    }]);

    return Va;
  }(In);

  function Ga(e) {
    var t = [],
        n = [];
    var _iteratorNormalCompletion66 = true;
    var _didIteratorError66 = false;
    var _iteratorError66 = undefined;

    try {
      for (var _iterator66 = e[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
        var _r56 = _step66.value;
        t.push(_r56.seg), _r56.isVisible || n.push(_r56.seg);
      }
    } catch (err) {
      _didIteratorError66 = true;
      _iteratorError66 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion66 && _iterator66["return"] != null) {
          _iterator66["return"]();
        }
      } finally {
        if (_didIteratorError66) {
          throw _iteratorError66;
        }
      }
    }

    return {
      allSegs: t,
      invisibleSegs: n
    };
  }

  var Qa = gn({
    week: "narrow"
  });

  var qa =
  /*#__PURE__*/
  function (_Vi3) {
    _inherits(qa, _Vi3);

    function qa() {
      var _this52;

      _classCallCheck(this, qa);

      _this52 = _possibleConstructorReturn(this, _getPrototypeOf(qa).apply(this, arguments)), _this52.rootElRef = {
        current: null
      }, _this52.state = {
        dayNumberId: Ge()
      }, _this52.handleRootEl = function (e) {
        On(_this52.rootElRef, e), On(_this52.props.elRef, e);
      };
      return _this52;
    }

    _createClass(qa, [{
      key: "render",
      value: function render() {
        var e = this.context,
            t = this.props,
            n = this.state,
            r = this.rootElRef,
            i = e.options,
            s = t.date,
            o = t.dateProfile;
        return f(Qs, {
          elTag: "td",
          elRef: this.handleRootEl,
          elClasses: ["fc-daygrid-day"].concat(_toConsumableArray(t.extraClassNames || [])),
          elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? {
            "aria-labelledby": n.dayNumberId
          } : {}), {
            role: "gridcell"
          }),
          defaultGenerator: Ya,
          date: s,
          dateProfile: o,
          todayRange: t.todayRange,
          showDayNumber: t.showDayNumber,
          extraRenderProps: t.extraRenderProps
        }, function (o, a) {
          return f("div", {
            className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
            ref: t.innerElRef
          }, t.showWeekNumber && f($s, {
            elTag: "a",
            elClasses: ["fc-daygrid-week-number"],
            elAttrs: ki(e, s, "week"),
            date: s,
            defaultFormat: Qa
          }), Boolean(!a.isDisabled && (t.showDayNumber || qs(i) || t.forceDayTop)) && f("div", {
            className: "fc-daygrid-day-top"
          }, f(o, {
            elTag: "a",
            elClasses: ["fc-daygrid-day-number"],
            elAttrs: Object.assign(Object.assign({}, ki(e, s)), {
              id: n.dayNumberId
            })
          })), f("div", {
            className: "fc-daygrid-day-events",
            ref: t.fgContentElRef
          }, t.fgContent, f("div", {
            className: "fc-daygrid-day-bottom",
            style: {
              marginTop: t.moreMarginTop
            }
          }, f(Va, {
            allDayDate: s,
            singlePlacements: t.singlePlacements,
            moreCnt: t.moreCnt,
            alignmentElRef: r,
            alignGridTop: !t.showDayNumber,
            extraDateSpan: t.extraDateSpan,
            dateProfile: t.dateProfile,
            eventSelection: t.eventSelection,
            eventDrag: t.eventDrag,
            eventResize: t.eventResize,
            todayRange: t.todayRange
          }))), f("div", {
            className: "fc-daygrid-day-bg"
          }, t.bgContent));
        });
      }
    }]);

    return qa;
  }(Vi);

  function Ya(e) {
    return e.dayNumberText || f(p, null, " ");
  }

  function Za(e, t, n, r, i, s, o) {
    var a = new Ja();
    a.allowReslicing = !0, a.strictOrder = r, !0 === t || !0 === n ? (a.maxCoord = s, a.hiddenConsumes = !0) : "number" == typeof t ? a.maxStackCnt = t : "number" == typeof n && (a.maxStackCnt = n, a.hiddenConsumes = !0);
    var l = [],
        c = [];

    for (var _t52 = 0; _t52 < e.length; _t52 += 1) {
      var _n59 = e[_t52],
          _r57 = _n59.eventRange.instance.instanceId,
          _s29 = i[_r57];
      null != _s29 ? l.push({
        index: _t52,
        thickness: _s29,
        span: {
          start: _n59.firstCol,
          end: _n59.lastCol + 1
        }
      }) : c.push(_n59);
    }

    var d = a.addSegs(l),
        u = a.toRects(),
        _ref7 = function (e, t, n) {
      var r = function (e, t) {
        var n = [];

        for (var _e84 = 0; _e84 < t; _e84 += 1) {
          n.push([]);
        }

        var _iteratorNormalCompletion67 = true;
        var _didIteratorError67 = false;
        var _iteratorError67 = undefined;

        try {
          for (var _iterator67 = e[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
            var _t53 = _step67.value;

            for (var _e85 = _t53.span.start; _e85 < _t53.span.end; _e85 += 1) {
              n[_e85].push(_t53);
            }
          }
        } catch (err) {
          _didIteratorError67 = true;
          _iteratorError67 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion67 && _iterator67["return"] != null) {
              _iterator67["return"]();
            }
          } finally {
            if (_didIteratorError67) {
              throw _iteratorError67;
            }
          }
        }

        return n;
      }(e, n.length),
          i = [],
          s = [],
          o = [];

      for (var _e86 = 0; _e86 < n.length; _e86 += 1) {
        var _a17 = r[_e86],
            _l12 = [],
            _c7 = 0,
            _d8 = 0;
        var _iteratorNormalCompletion68 = true;
        var _didIteratorError68 = false;
        var _iteratorError68 = undefined;

        try {
          for (var _iterator68 = _a17[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
            var _r58 = _step68.value;
            var _i34 = t[_r58.index];
            _l12.push({
              seg: Xa(_i34, _e86, _e86 + 1, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: _r58.levelCoord,
              marginTop: _r58.levelCoord - _c7
            }), _c7 = _r58.levelCoord + _r58.thickness;
          }
        } catch (err) {
          _didIteratorError68 = true;
          _iteratorError68 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion68 && _iterator68["return"] != null) {
              _iterator68["return"]();
            }
          } finally {
            if (_didIteratorError68) {
              throw _iteratorError68;
            }
          }
        }

        var _u7 = [];
        _c7 = 0, _d8 = 0;
        var _iteratorNormalCompletion69 = true;
        var _didIteratorError69 = false;
        var _iteratorError69 = undefined;

        try {
          for (var _iterator69 = _a17[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
            var _r59 = _step69.value;

            var _i35 = t[_r59.index],
                _s30 = _r59.span.end - _r59.span.start > 1,
                _o23 = _r59.span.start === _e86;

            _d8 += _r59.levelCoord - _c7, _c7 = _r59.levelCoord + _r59.thickness, _s30 ? (_d8 += _r59.thickness, _o23 && _u7.push({
              seg: Xa(_i35, _r59.span.start, _r59.span.end, n),
              isVisible: !0,
              isAbsolute: !0,
              absoluteTop: _r59.levelCoord,
              marginTop: 0
            })) : _o23 && (_u7.push({
              seg: Xa(_i35, _r59.span.start, _r59.span.end, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: _r59.levelCoord,
              marginTop: _d8
            }), _d8 = 0);
          }
        } catch (err) {
          _didIteratorError69 = true;
          _iteratorError69 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion69 && _iterator69["return"] != null) {
              _iterator69["return"]();
            }
          } finally {
            if (_didIteratorError69) {
              throw _iteratorError69;
            }
          }
        }

        i.push(_l12), s.push(_u7), o.push(_d8);
      }

      return {
        singleColPlacements: i,
        multiColPlacements: s,
        leftoverMargins: o
      };
    }(u, e, o),
        h = _ref7.singleColPlacements,
        f = _ref7.multiColPlacements,
        g = _ref7.leftoverMargins,
        p = [],
        m = [];

    for (var _i36 = 0, _c8 = c; _i36 < _c8.length; _i36++) {
      var _e89 = _c8[_i36];

      f[_e89.firstCol].push({
        seg: _e89,
        isVisible: !1,
        isAbsolute: !0,
        absoluteTop: 0,
        marginTop: 0
      });

      for (var _t54 = _e89.firstCol; _t54 <= _e89.lastCol; _t54 += 1) {
        h[_t54].push({
          seg: Xa(_e89, _t54, _t54 + 1, o),
          isVisible: !1,
          isAbsolute: !1,
          absoluteTop: 0,
          marginTop: 0
        });
      }
    }

    for (var _e87 = 0; _e87 < o.length; _e87 += 1) {
      p.push(0);
    }

    var _iteratorNormalCompletion70 = true;
    var _didIteratorError70 = false;
    var _iteratorError70 = undefined;

    try {
      for (var _iterator70 = d[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
        var _t55 = _step70.value;
        var _n60 = e[_t55.index],
            _r60 = _t55.span;

        f[_r60.start].push({
          seg: Xa(_n60, _r60.start, _r60.end, o),
          isVisible: !1,
          isAbsolute: !0,
          absoluteTop: 0,
          marginTop: 0
        });

        for (var _e90 = _r60.start; _e90 < _r60.end; _e90 += 1) {
          p[_e90] += 1, h[_e90].push({
            seg: Xa(_n60, _e90, _e90 + 1, o),
            isVisible: !1,
            isAbsolute: !1,
            absoluteTop: 0,
            marginTop: 0
          });
        }
      }
    } catch (err) {
      _didIteratorError70 = true;
      _iteratorError70 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion70 && _iterator70["return"] != null) {
          _iterator70["return"]();
        }
      } finally {
        if (_didIteratorError70) {
          throw _iteratorError70;
        }
      }
    }

    for (var _e88 = 0; _e88 < o.length; _e88 += 1) {
      m.push(g[_e88]);
    }

    return {
      singleColPlacements: h,
      multiColPlacements: f,
      moreCnts: p,
      moreMarginTops: m
    };
  }

  function Xa(e, t, n, r) {
    if (e.firstCol === t && e.lastCol === n - 1) return e;
    var i = e.eventRange,
        s = i.range,
        o = Vn(s, {
      start: r[t].date,
      end: vt(r[n - 1].date, 1)
    });
    return Object.assign(Object.assign({}, e), {
      firstCol: t,
      lastCol: n - 1,
      eventRange: {
        def: i.def,
        ui: Object.assign(Object.assign({}, i.ui), {
          durationEditable: !1
        }),
        instance: i.instance,
        range: o
      },
      isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
      isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf()
    });
  }

  var Ja =
  /*#__PURE__*/
  function (_Gi) {
    _inherits(Ja, _Gi);

    function Ja() {
      var _this53;

      _classCallCheck(this, Ja);

      _this53 = _possibleConstructorReturn(this, _getPrototypeOf(Ja).apply(this, arguments)), _this53.hiddenConsumes = !1, _this53.forceHidden = {};
      return _this53;
    }

    _createClass(Ja, [{
      key: "addSegs",
      value: function addSegs(e) {
        var _this54 = this;

        var t = _get(_getPrototypeOf(Ja.prototype), "addSegs", this).call(this, e),
            n = this.entriesByLevel,
            r = function r(e) {
          return !_this54.forceHidden[qi(e)];
        };

        for (var _e91 = 0; _e91 < n.length; _e91 += 1) {
          n[_e91] = n[_e91].filter(r);
        }

        return t;
      }
    }, {
      key: "handleInvalidInsertion",
      value: function handleInvalidInsertion(e, t, n) {
        var r = this.entriesByLevel,
            i = this.forceHidden,
            s = e.touchingEntry,
            o = e.touchingLevel,
            a = e.touchingLateral;

        if (this.hiddenConsumes && s) {
          var _e92 = qi(s);

          if (!i[_e92]) if (this.allowReslicing) {
            var _e93 = Object.assign(Object.assign({}, s), {
              span: Zi(s.span, t.span)
            });

            i[qi(_e93)] = !0, r[o][a] = _e93, this.splitEntry(s, t, n);
          } else i[_e92] = !0, n.push(s);
        }

        return _get(_getPrototypeOf(Ja.prototype), "handleInvalidInsertion", this).call(this, e, t, n);
      }
    }]);

    return Ja;
  }(Gi);

  var $a =
  /*#__PURE__*/
  function (_Vi4) {
    _inherits($a, _Vi4);

    function $a() {
      var _this55;

      _classCallCheck(this, $a);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf($a).apply(this, arguments)), _this55.cellElRefs = new Rs(), _this55.frameElRefs = new Rs(), _this55.fgElRefs = new Rs(), _this55.segHarnessRefs = new Rs(), _this55.rootElRef = {
        current: null
      }, _this55.state = {
        framePositions: null,
        maxContentHeight: null,
        eventInstanceHeights: {}
      }, _this55.handleResize = function (e) {
        e && _this55.updateSizing(!0);
      };
      return _this55;
    }

    _createClass($a, [{
      key: "render",
      value: function render() {
        var _this56 = this;

        var e = this.props,
            t = this.state,
            n = this.context,
            r = n.options,
            i = e.cells.length,
            s = Ba(e.businessHourSegs, i),
            o = Ba(e.bgEventSegs, i),
            a = Ba(this.getHighlightSegs(), i),
            l = Ba(this.getMirrorSegs(), i),
            _Za = Za(qr(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.eventInstanceHeights, t.maxContentHeight, e.cells),
            c = _Za.singleColPlacements,
            d = _Za.multiColPlacements,
            u = _Za.moreCnts,
            h = _Za.moreMarginTops,
            g = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};

        return f("tr", {
          ref: this.rootElRef,
          role: "row"
        }, e.renderIntro && e.renderIntro(), e.cells.map(function (t, n) {
          var r = _this56.renderFgSegs(n, e.forPrint ? c[n] : d[n], e.todayRange, g),
              i = _this56.renderFgSegs(n, function (e, t) {
            if (!e.length) return [];

            var n = function (e) {
              var t = {};
              var _iteratorNormalCompletion71 = true;
              var _didIteratorError71 = false;
              var _iteratorError71 = undefined;

              try {
                for (var _iterator71 = e[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
                  var _n61 = _step71.value;
                  var _iteratorNormalCompletion72 = true;
                  var _didIteratorError72 = false;
                  var _iteratorError72 = undefined;

                  try {
                    for (var _iterator72 = _n61[Symbol.iterator](), _step72; !(_iteratorNormalCompletion72 = (_step72 = _iterator72.next()).done); _iteratorNormalCompletion72 = true) {
                      var _e94 = _step72.value;
                      t[_e94.seg.eventRange.instance.instanceId] = _e94.absoluteTop;
                    }
                  } catch (err) {
                    _didIteratorError72 = true;
                    _iteratorError72 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion72 && _iterator72["return"] != null) {
                        _iterator72["return"]();
                      }
                    } finally {
                      if (_didIteratorError72) {
                        throw _iteratorError72;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError71 = true;
                _iteratorError71 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion71 && _iterator71["return"] != null) {
                    _iterator71["return"]();
                  }
                } finally {
                  if (_didIteratorError71) {
                    throw _iteratorError71;
                  }
                }
              }

              return t;
            }(t);

            return e.map(function (e) {
              return {
                seg: e,
                isVisible: !0,
                isAbsolute: !0,
                absoluteTop: n[e.eventRange.instance.instanceId],
                marginTop: 0
              };
            });
          }(l[n], d), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);

          return f(qa, {
            key: t.key,
            elRef: _this56.cellElRefs.createRef(t.key),
            innerElRef: _this56.frameElRefs.createRef(t.key),
            dateProfile: e.dateProfile,
            date: t.date,
            showDayNumber: e.showDayNumbers,
            showWeekNumber: e.showWeekNumbers && 0 === n,
            forceDayTop: e.showWeekNumbers,
            todayRange: e.todayRange,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            extraRenderProps: t.extraRenderProps,
            extraDataAttrs: t.extraDataAttrs,
            extraClassNames: t.extraClassNames,
            extraDateSpan: t.extraDateSpan,
            moreCnt: u[n],
            moreMarginTop: h[n],
            singlePlacements: c[n],
            fgContentElRef: _this56.fgElRefs.createRef(t.key),
            fgContent: f(p, null, f(p, null, r), f(p, null, i)),
            bgContent: f(p, null, _this56.renderFillSegs(a[n], "highlight"), _this56.renderFillSegs(s[n], "non-business"), _this56.renderFillSegs(o[n], "bg-event"))
          });
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e, t) {
        var n = this.props;
        this.updateSizing(!xe(e, n));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
      }
    }, {
      key: "getHighlightSegs",
      value: function getHighlightSegs() {
        var e = this.props;
        return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
      }
    }, {
      key: "getMirrorSegs",
      value: function getMirrorSegs() {
        var e = this.props;
        return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
      }
    }, {
      key: "renderFgSegs",
      value: function renderFgSegs(e, t, n, r, i, s, o) {
        var a = this.context,
            l = this.props.eventSelection,
            c = this.state.framePositions,
            d = 1 === this.props.cells.length,
            u = i || s || o,
            h = [];

        if (c) {
          var _iteratorNormalCompletion73 = true;
          var _didIteratorError73 = false;
          var _iteratorError73 = undefined;

          try {
            for (var _iterator73 = t[Symbol.iterator](), _step73; !(_iteratorNormalCompletion73 = (_step73 = _iterator73.next()).done); _iteratorNormalCompletion73 = true) {
              var _g5 = _step73.value;

              var _t56 = _g5.seg,
                  _p3 = _t56.eventRange.instance.instanceId,
                  _m6 = _p3 + ":" + e,
                  _v2 = _g5.isVisible && !r[_p3],
                  _b2 = _g5.isAbsolute,
                  _y2 = "",
                  _E = "";

              _b2 && (a.isRtl ? (_E = 0, _y2 = c.lefts[_t56.lastCol] - c.lefts[_t56.firstCol]) : (_y2 = 0, _E = c.rights[_t56.firstCol] - c.rights[_t56.lastCol])), h.push(f("div", {
                className: "fc-daygrid-event-harness" + (_b2 ? " fc-daygrid-event-harness-abs" : ""),
                key: _m6,
                ref: u ? null : this.segHarnessRefs.createRef(_m6),
                style: {
                  visibility: _v2 ? "" : "hidden",
                  marginTop: _b2 ? "" : _g5.marginTop,
                  top: _b2 ? _g5.absoluteTop : "",
                  left: _y2,
                  right: _E
                }
              }, Ua(_t56) ? f(Wa, Object.assign({
                seg: _t56,
                isDragging: i,
                isSelected: _p3 === l,
                defaultDisplayEventEnd: d
              }, Kr(_t56, n))) : f(La, Object.assign({
                seg: _t56,
                isDragging: i,
                isResizing: s,
                isDateSelecting: o,
                isSelected: _p3 === l,
                defaultDisplayEventEnd: d
              }, Kr(_t56, n)))));
            }
          } catch (err) {
            _didIteratorError73 = true;
            _iteratorError73 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion73 && _iterator73["return"] != null) {
                _iterator73["return"]();
              }
            } finally {
              if (_didIteratorError73) {
                throw _iteratorError73;
              }
            }
          }
        }

        return h;
      }
    }, {
      key: "renderFillSegs",
      value: function renderFillSegs(e, t) {
        var n = this.context.isRtl,
            r = this.props.todayRange,
            i = this.state.framePositions,
            s = [];

        if (i) {
          var _iteratorNormalCompletion74 = true;
          var _didIteratorError74 = false;
          var _iteratorError74 = undefined;

          try {
            for (var _iterator74 = e[Symbol.iterator](), _step74; !(_iteratorNormalCompletion74 = (_step74 = _iterator74.next()).done); _iteratorNormalCompletion74 = true) {
              var _o24 = _step74.value;

              var _e95 = n ? {
                right: 0,
                left: i.lefts[_o24.lastCol] - i.lefts[_o24.firstCol]
              } : {
                left: 0,
                right: i.rights[_o24.firstCol] - i.rights[_o24.lastCol]
              };

              s.push(f("div", {
                key: ti(_o24.eventRange),
                className: "fc-daygrid-bg-harness",
                style: _e95
              }, "bg-event" === t ? f(Zs, Object.assign({
                seg: _o24
              }, Kr(_o24, r))) : Js(t)));
            }
          } catch (err) {
            _didIteratorError74 = true;
            _iteratorError74 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion74 && _iterator74["return"] != null) {
                _iterator74["return"]();
              }
            } finally {
              if (_didIteratorError74) {
                throw _iteratorError74;
              }
            }
          }
        }

        return f.apply(void 0, [p, {}].concat(s));
      }
    }, {
      key: "updateSizing",
      value: function updateSizing(e) {
        var t = this.props,
            n = this.frameElRefs;

        if (!t.forPrint && null !== t.clientWidth) {
          if (e) {
            var _e96 = t.cells.map(function (e) {
              return n.currentMap[e.key];
            });

            if (_e96.length) {
              var _t57 = this.rootElRef.current;
              this.setState({
                framePositions: new Ui(_t57, _e96, !0, !1)
              });
            }
          }

          var _r61 = this.state.eventInstanceHeights,
              _i37 = this.queryEventInstanceHeights(),
              _s31 = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;

          this.safeSetState({
            eventInstanceHeights: Object.assign(Object.assign({}, _r61), _i37),
            maxContentHeight: _s31 ? this.computeMaxContentHeight() : null
          });
        }
      }
    }, {
      key: "queryEventInstanceHeights",
      value: function queryEventInstanceHeights() {
        var e = this.segHarnessRefs.currentMap,
            t = {};

        for (var _n62 in e) {
          var _r62 = Math.round(e[_n62].getBoundingClientRect().height),
              _i38 = _n62.split(":")[0];

          t[_i38] = Math.max(t[_i38] || 0, _r62);
        }

        return t;
      }
    }, {
      key: "computeMaxContentHeight",
      value: function computeMaxContentHeight() {
        var e = this.props.cells[0].key,
            t = this.cellElRefs.currentMap[e],
            n = this.fgElRefs.currentMap[e];
        return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
      }
    }, {
      key: "getCellEls",
      value: function getCellEls() {
        var e = this.cellElRefs.currentMap;
        return this.props.cells.map(function (t) {
          return e[t.key];
        });
      }
    }]);

    return $a;
  }(Vi);

  $a.addStateEquality({
    eventInstanceHeights: xe
  });

  var Ka =
  /*#__PURE__*/
  function (_Vi5) {
    _inherits(Ka, _Vi5);

    function Ka() {
      var _this57;

      _classCallCheck(this, Ka);

      _this57 = _possibleConstructorReturn(this, _getPrototypeOf(Ka).apply(this, arguments)), _this57.splitBusinessHourSegs = Oe(Ha), _this57.splitBgEventSegs = Oe(Ha), _this57.splitFgEventSegs = Oe(Ha), _this57.splitDateSelectionSegs = Oe(Ha), _this57.splitEventDrag = Oe(ja), _this57.splitEventResize = Oe(ja), _this57.rowRefs = new Rs(), _this57.handleRootEl = function (e) {
        _this57.rootEl = e, e ? _this57.context.registerInteractiveComponent(_assertThisInitialized(_this57), {
          el: e,
          isHitComboAllowed: _this57.props.isHitComboAllowed
        }) : _this57.context.unregisterInteractiveComponent(_assertThisInitialized(_this57));
      };
      return _this57;
    }

    _createClass(Ka, [{
      key: "render",
      value: function render() {
        var _this58 = this;

        var e = this.props,
            t = e.dateProfile,
            n = e.dayMaxEventRows,
            r = e.dayMaxEvents,
            i = e.expandRows,
            s = e.cells.length,
            o = this.splitBusinessHourSegs(e.businessHourSegs, s),
            a = this.splitBgEventSegs(e.bgEventSegs, s),
            l = this.splitFgEventSegs(e.fgEventSegs, s),
            c = this.splitDateSelectionSegs(e.dateSelectionSegs, s),
            d = this.splitEventDrag(e.eventDrag, s),
            u = this.splitEventResize(e.eventResize, s),
            h = !0 === r || !0 === n;
        return h && !i && (h = !1, n = null, r = null), f("div", {
          className: ["fc-daygrid-body", h ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
          ref: this.handleRootEl,
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth
          }
        }, f(ls, {
          unit: "day"
        }, function (h, g) {
          return f(p, null, f("table", {
            role: "presentation",
            className: "fc-scrollgrid-sync-table",
            style: {
              width: e.clientWidth,
              minWidth: e.tableMinWidth,
              height: i ? e.clientHeight : ""
            }
          }, e.colGroupNode, f("tbody", {
            role: "presentation"
          }, e.cells.map(function (i, h) {
            return f($a, {
              ref: _this58.rowRefs.createRef(h),
              key: i.length ? i[0].date.toISOString() : h,
              showDayNumbers: s > 1,
              showWeekNumbers: e.showWeekNumbers,
              todayRange: g,
              dateProfile: t,
              cells: i,
              renderIntro: e.renderRowIntro,
              businessHourSegs: o[h],
              eventSelection: e.eventSelection,
              bgEventSegs: a[h].filter(el),
              fgEventSegs: l[h],
              dateSelectionSegs: c[h],
              eventDrag: d[h],
              eventResize: u[h],
              dayMaxEvents: r,
              dayMaxEventRows: n,
              clientWidth: e.clientWidth,
              clientHeight: e.clientHeight,
              forPrint: e.forPrint
            });
          }))));
        }));
      }
    }, {
      key: "prepareHits",
      value: function prepareHits() {
        this.rowPositions = new Ui(this.rootEl, this.rowRefs.collect().map(function (e) {
          return e.getCellEls()[0];
        }), !1, !0), this.colPositions = new Ui(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1);
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t) {
        var n = this.colPositions,
            r = this.rowPositions,
            i = n.leftToIndex(e),
            s = r.topToIndex(t);

        if (null != s && null != i) {
          var _e97 = this.props.cells[s][i];
          return {
            dateProfile: this.props.dateProfile,
            dateSpan: Object.assign({
              range: this.getCellRange(s, i),
              allDay: !0
            }, _e97.extraDateSpan),
            dayEl: this.getCellEl(s, i),
            rect: {
              left: n.lefts[i],
              right: n.rights[i],
              top: r.tops[s],
              bottom: r.bottoms[s]
            },
            layer: 0
          };
        }

        return null;
      }
    }, {
      key: "getCellEl",
      value: function getCellEl(e, t) {
        return this.rowRefs.currentMap[e].getCellEls()[t];
      }
    }, {
      key: "getCellRange",
      value: function getCellRange(e, t) {
        var n = this.props.cells[e][t].date;
        return {
          start: n,
          end: vt(n, 1)
        };
      }
    }]);

    return Ka;
  }(Vi);

  function el(e) {
    return e.eventRange.def.allDay;
  }

  var tl =
  /*#__PURE__*/
  function (_gs) {
    _inherits(tl, _gs);

    function tl() {
      var _this59;

      _classCallCheck(this, tl);

      _this59 = _possibleConstructorReturn(this, _getPrototypeOf(tl).apply(this, arguments)), _this59.forceDayIfListItem = !0;
      return _this59;
    }

    _createClass(tl, [{
      key: "sliceRange",
      value: function sliceRange(e, t) {
        return t.sliceRange(e);
      }
    }]);

    return tl;
  }(gs);

  var nl =
  /*#__PURE__*/
  function (_Vi6) {
    _inherits(nl, _Vi6);

    function nl() {
      var _this60;

      _classCallCheck(this, nl);

      _this60 = _possibleConstructorReturn(this, _getPrototypeOf(nl).apply(this, arguments)), _this60.slicer = new tl(), _this60.tableRef = {
        current: null
      };
      return _this60;
    }

    _createClass(nl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context;
        return f(Ka, Object.assign({
          ref: this.tableRef
        }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
          dateProfile: e.dateProfile,
          cells: e.dayTableModel.cells,
          colGroupNode: e.colGroupNode,
          tableMinWidth: e.tableMinWidth,
          renderRowIntro: e.renderRowIntro,
          dayMaxEvents: e.dayMaxEvents,
          dayMaxEventRows: e.dayMaxEventRows,
          showWeekNumbers: e.showWeekNumbers,
          expandRows: e.expandRows,
          headerAlignElRef: e.headerAlignElRef,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          forPrint: e.forPrint
        }));
      }
    }]);

    return nl;
  }(Vi);

  function rl(e, t) {
    var n = new hs(e.renderRange, t);
    return new fs(n, /year|month|week/.test(e.currentRangeUnit));
  }

  ye(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{cursor:pointer;position:relative;z-index:4}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');
  var il = mo({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component:
        /*#__PURE__*/
        function (_Pa) {
          _inherits(component, _Pa);

          function component() {
            var _this61;

            _classCallCheck(this, component);

            _this61 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this61.buildDayTableModel = Oe(rl), _this61.headerRef = {
              current: null
            }, _this61.tableRef = {
              current: null
            };
            return _this61;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var _this62 = this;

              var _this$context5 = this.context,
                  e = _this$context5.options,
                  t = _this$context5.dateProfileGenerator,
                  n = this.props,
                  r = this.buildDayTableModel(n.dateProfile, t),
                  i = e.dayHeaders && f(ds, {
                ref: this.headerRef,
                dateProfile: n.dateProfile,
                dates: r.headerDates,
                datesRepDistinctDays: 1 === r.rowCnt
              }),
                  s = function s(t) {
                return f(nl, {
                  ref: _this62.tableRef,
                  dateProfile: n.dateProfile,
                  dayTableModel: r,
                  businessHours: n.businessHours,
                  dateSelection: n.dateSelection,
                  eventStore: n.eventStore,
                  eventUiBases: n.eventUiBases,
                  eventSelection: n.eventSelection,
                  eventDrag: n.eventDrag,
                  eventResize: n.eventResize,
                  nextDayThreshold: e.nextDayThreshold,
                  colGroupNode: t.tableColGroupNode,
                  tableMinWidth: t.tableMinWidth,
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  showWeekNumbers: e.weekNumbers,
                  expandRows: !n.isHeightAuto,
                  headerAlignElRef: _this62.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: n.forPrint
                });
              };

              return e.dayMinWidth ? this.renderHScrollLayout(i, s, r.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, s);
            }
          }]);

          return component;
        }(Pa),
        dateProfileGeneratorClass:
        /*#__PURE__*/
        function (_er) {
          _inherits(dateProfileGeneratorClass, _er);

          function dateProfileGeneratorClass() {
            _classCallCheck(this, dateProfileGeneratorClass);

            return _possibleConstructorReturn(this, _getPrototypeOf(dateProfileGeneratorClass).apply(this, arguments));
          }

          _createClass(dateProfileGeneratorClass, [{
            key: "buildRenderRange",
            value: function buildRenderRange(e, t, n) {
              var r,
                  i = this.props.dateEnv,
                  s = _get(_getPrototypeOf(dateProfileGeneratorClass.prototype), "buildRenderRange", this).call(this, e, t, n),
                  o = s.start,
                  a = s.end;

              if (/^(year|month)$/.test(t) && (o = i.startOfWeek(o), r = i.startOfWeek(a), r.valueOf() !== a.valueOf() && (a = mt(r, 1))), this.props.monthMode && this.props.fixedWeekCount) {
                a = mt(a, 6 - Math.ceil(yt(o, a)));
              }

              return {
                start: o,
                end: a
              };
            }
          }]);

          return dateProfileGeneratorClass;
        }(er)
      },
      dayGridDay: {
        type: "dayGrid",
        duration: {
          days: 1
        }
      },
      dayGridWeek: {
        type: "dayGrid",
        duration: {
          weeks: 1
        }
      },
      dayGridMonth: {
        type: "dayGrid",
        duration: {
          months: 1
        },
        monthMode: !0,
        fixedWeekCount: !0
      }
    }
  });

  var sl =
  /*#__PURE__*/
  function (_wi) {
    _inherits(sl, _wi);

    function sl() {
      _classCallCheck(this, sl);

      return _possibleConstructorReturn(this, _getPrototypeOf(sl).apply(this, arguments));
    }

    _createClass(sl, [{
      key: "getKeyInfo",
      value: function getKeyInfo() {
        return {
          allDay: {},
          timed: {}
        };
      }
    }, {
      key: "getKeysForDateSpan",
      value: function getKeysForDateSpan(e) {
        return e.allDay ? ["allDay"] : ["timed"];
      }
    }, {
      key: "getKeysForEventDef",
      value: function getKeysForEventDef(e) {
        return e.allDay ? Fr(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
      }
    }]);

    return sl;
  }(wi);

  var ol = gn({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short"
  });

  function al(e) {
    var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
    return f(Tn.Consumer, null, function (n) {
      if (!e.isLabeled) return f("td", {
        className: t.join(" "),
        "data-time": e.isoTimeStr
      });
      var r = n.dateEnv,
          i = n.options,
          s = n.viewApi,
          o = null == i.slotLabelFormat ? ol : Array.isArray(i.slotLabelFormat) ? gn(i.slotLabelFormat[0]) : gn(i.slotLabelFormat),
          a = {
        level: 0,
        time: e.time,
        date: r.toDate(e.date),
        view: s,
        text: r.format(e.date, o)
      };
      return f(jn, {
        elTag: "td",
        elClasses: t,
        elAttrs: {
          "data-time": e.isoTimeStr
        },
        renderProps: a,
        generatorName: "slotLabelContent",
        generator: i.slotLabelContent || ll,
        classNameGenerator: i.slotLabelClassNames,
        didMount: i.slotLabelDidMount,
        willUnmount: i.slotLabelWillUnmount
      }, function (e) {
        return f("div", {
          className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
        }, f(e, {
          elTag: "div",
          elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
        }));
      });
    });
  }

  function ll(e) {
    return e.text;
  }

  var cl =
  /*#__PURE__*/
  function (_In22) {
    _inherits(cl, _In22);

    function cl() {
      _classCallCheck(this, cl);

      return _possibleConstructorReturn(this, _getPrototypeOf(cl).apply(this, arguments));
    }

    _createClass(cl, [{
      key: "render",
      value: function render() {
        return this.props.slatMetas.map(function (e) {
          return f("tr", {
            key: e.key
          }, f(al, Object.assign({}, e)));
        });
      }
    }]);

    return cl;
  }(In);

  var dl = gn({
    week: "short"
  });

  var ul =
  /*#__PURE__*/
  function (_Vi7) {
    _inherits(ul, _Vi7);

    function ul() {
      var _this63;

      _classCallCheck(this, ul);

      _this63 = _possibleConstructorReturn(this, _getPrototypeOf(ul).apply(this, arguments)), _this63.allDaySplitter = new sl(), _this63.headerElRef = {
        current: null
      }, _this63.rootElRef = {
        current: null
      }, _this63.scrollerElRef = {
        current: null
      }, _this63.state = {
        slatCoords: null
      }, _this63.handleScrollTopRequest = function (e) {
        var t = _this63.scrollerElRef.current;
        t && (t.scrollTop = e);
      }, _this63.renderHeadAxis = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var n = _this63.context.options,
            r = _this63.props.dateProfile,
            i = r.renderRange,
            s = 1 === Et(i.start, i.end) ? ki(_this63.context, i.start, "week") : {};
        return n.weekNumbers && "day" === e ? f($s, {
          elTag: "th",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": !0
          },
          date: i.start,
          defaultFormat: dl
        }, function (e) {
          return f("div", {
            className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
            style: {
              height: t
            }
          }, f(e, {
            elTag: "a",
            elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
            elAttrs: s
          }));
        }) : f("th", {
          "aria-hidden": !0,
          className: "fc-timegrid-axis"
        }, f("div", {
          className: "fc-timegrid-axis-frame",
          style: {
            height: t
          }
        }));
      }, _this63.renderTableRowAxis = function (e) {
        var _this63$context = _this63.context,
            t = _this63$context.options,
            n = _this63$context.viewApi,
            r = {
          text: t.allDayText,
          view: n
        };
        return f(jn, {
          elTag: "td",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": !0
          },
          renderProps: r,
          generatorName: "allDayContent",
          generator: t.allDayContent || hl,
          classNameGenerator: t.allDayClassNames,
          didMount: t.allDayDidMount,
          willUnmount: t.allDayWillUnmount
        }, function (t) {
          return f("div", {
            className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", null == e ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
            style: {
              height: e
            }
          }, f(t, {
            elTag: "span",
            elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
          }));
        });
      }, _this63.handleSlatCoords = function (e) {
        _this63.setState({
          slatCoords: e
        });
      };
      return _this63;
    }

    _createClass(ul, [{
      key: "renderSimpleLayout",
      value: function renderSimpleLayout(e, t, n) {
        var r = this.context,
            i = this.props,
            s = [],
            o = js(r.options);
        return e && s.push({
          type: "header",
          key: "header",
          isSticky: o,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        }), t && (s.push({
          type: "body",
          key: "all-day",
          chunk: {
            content: t
          }
        }), s.push({
          type: "body",
          key: "all-day-divider",
          outerContent: f("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, f("td", {
            className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
          }))
        })), s.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(r.options.expandRows),
          chunk: {
            scrollerElRef: this.scrollerElRef,
            content: n
          }
        }), f(Un, {
          elRef: this.rootElRef,
          elClasses: ["fc-timegrid"],
          viewSpec: r.viewSpec
        }, f(Us, {
          liquid: !i.isHeightAuto && !i.forPrint,
          collapsibleWidth: i.forPrint,
          cols: [{
            width: "shrink"
          }],
          sections: s
        }));
      }
    }, {
      key: "renderHScrollLayout",
      value: function renderHScrollLayout(e, t, n, r, i, s, o) {
        var _this64 = this;

        var a = this.context.pluginHooks.scrollGridImpl;
        if (!a) throw new Error("No ScrollGrid implementation");
        var l = this.context,
            c = this.props,
            d = !c.forPrint && js(l.options),
            u = !c.forPrint && zs(l.options),
            h = [];
        e && h.push({
          type: "header",
          key: "header",
          isSticky: d,
          syncRowHeights: !0,
          chunks: [{
            key: "axis",
            rowContent: function rowContent(e) {
              return f("tr", {
                role: "presentation"
              }, _this64.renderHeadAxis("day", e.rowSyncHeights[0]));
            }
          }, {
            key: "cols",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }]
        }), t && (h.push({
          type: "body",
          key: "all-day",
          syncRowHeights: !0,
          chunks: [{
            key: "axis",
            rowContent: function rowContent(e) {
              return f("tr", {
                role: "presentation"
              }, _this64.renderTableRowAxis(e.rowSyncHeights[0]));
            }
          }, {
            key: "cols",
            content: t
          }]
        }), h.push({
          key: "all-day-divider",
          type: "body",
          outerContent: f("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, f("td", {
            colSpan: 2,
            className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded")
          }))
        }));
        var g = l.options.nowIndicator;
        return h.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(l.options.expandRows),
          chunks: [{
            key: "axis",
            content: function content(e) {
              return f("div", {
                className: "fc-timegrid-axis-chunk"
              }, f("table", {
                "aria-hidden": !0,
                style: {
                  height: e.expandRows ? e.clientHeight : ""
                }
              }, e.tableColGroupNode, f("tbody", null, f(cl, {
                slatMetas: s
              }))), f("div", {
                className: "fc-timegrid-now-indicator-container"
              }, f(ls, {
                unit: g ? "minute" : "day"
              }, function (e) {
                var t = g && o && o.safeComputeTop(e);
                return "number" == typeof t ? f(Vs, {
                  elClasses: ["fc-timegrid-now-indicator-arrow"],
                  elStyle: {
                    top: t
                  },
                  isAxis: !0,
                  date: e
                }) : null;
              })));
            }
          }, {
            key: "cols",
            scrollerElRef: this.scrollerElRef,
            content: n
          }]
        }), u && h.push({
          key: "footer",
          type: "footer",
          isSticky: !0,
          chunks: [{
            key: "axis",
            content: Bs
          }, {
            key: "cols",
            content: Bs
          }]
        }), f(Un, {
          elRef: this.rootElRef,
          elClasses: ["fc-timegrid"],
          viewSpec: l.viewSpec
        }, f(a, {
          liquid: !c.isHeightAuto && !c.forPrint,
          collapsibleWidth: !1,
          colGroups: [{
            width: "shrink",
            cols: [{
              width: "shrink"
            }]
          }, {
            cols: [{
              span: r,
              minWidth: i
            }]
          }],
          sections: h
        }));
      }
    }, {
      key: "getAllDayMaxEventProps",
      value: function getAllDayMaxEventProps() {
        var _this$context$options = this.context.options,
            e = _this$context$options.dayMaxEvents,
            t = _this$context$options.dayMaxEventRows;
        return !0 !== e && !0 !== t || (e = void 0, t = 5), {
          dayMaxEvents: e,
          dayMaxEventRows: t
        };
      }
    }]);

    return ul;
  }(Vi);

  function hl(e) {
    return e.text;
  }

  var fl =
  /*#__PURE__*/
  function () {
    function fl(e, t, n) {
      _classCallCheck(this, fl);

      this.positions = e, this.dateProfile = t, this.slotDuration = n;
    }

    _createClass(fl, [{
      key: "safeComputeTop",
      value: function safeComputeTop(e) {
        var t = this.dateProfile;

        if (Yn(t.currentRange, e)) {
          var _n63 = wt(e),
              _r63 = e.valueOf() - _n63.valueOf();

          if (_r63 >= Ft(t.slotMinTime) && _r63 < Ft(t.slotMaxTime)) return this.computeTimeTop(jt(_r63));
        }

        return null;
      }
    }, {
      key: "computeDateTop",
      value: function computeDateTop(e, t) {
        return t || (t = wt(e)), this.computeTimeTop(jt(e.valueOf() - t.valueOf()));
      }
    }, {
      key: "computeTimeTop",
      value: function computeTimeTop(e) {
        var t,
            n,
            r = this.positions,
            i = this.dateProfile,
            s = r.els.length,
            o = (e.milliseconds - Ft(i.slotMinTime)) / Ft(this.slotDuration);
        return o = Math.max(0, o), o = Math.min(s, o), t = Math.floor(o), t = Math.min(t, s - 1), n = o - t, r.tops[t] + r.getHeight(t) * n;
      }
    }]);

    return fl;
  }();

  var gl =
  /*#__PURE__*/
  function (_In23) {
    _inherits(gl, _In23);

    function gl() {
      _classCallCheck(this, gl);

      return _possibleConstructorReturn(this, _getPrototypeOf(gl).apply(this, arguments));
    }

    _createClass(gl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.slatElRefs;
        return f("tbody", null, e.slatMetas.map(function (i, s) {
          var o = {
            time: i.time,
            date: t.dateEnv.toDate(i.date),
            view: t.viewApi
          };
          return f("tr", {
            key: i.key,
            ref: r.createRef(i.key)
          }, e.axis && f(al, Object.assign({}, i)), f(jn, {
            elTag: "td",
            elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !i.isLabeled && "fc-timegrid-slot-minor"],
            elAttrs: {
              "data-time": i.isoTimeStr
            },
            renderProps: o,
            generatorName: "slotLaneContent",
            generator: n.slotLaneContent,
            classNameGenerator: n.slotLaneClassNames,
            didMount: n.slotLaneDidMount,
            willUnmount: n.slotLaneWillUnmount
          }));
        }));
      }
    }]);

    return gl;
  }(In);

  var pl =
  /*#__PURE__*/
  function (_In24) {
    _inherits(pl, _In24);

    function pl() {
      var _this65;

      _classCallCheck(this, pl);

      _this65 = _possibleConstructorReturn(this, _getPrototypeOf(pl).apply(this, arguments)), _this65.rootElRef = {
        current: null
      }, _this65.slatElRefs = new Rs();
      return _this65;
    }

    _createClass(pl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context;
        return f("div", {
          ref: this.rootElRef,
          className: "fc-timegrid-slots"
        }, f("table", {
          "aria-hidden": !0,
          className: t.theme.getClass("table"),
          style: {
            minWidth: e.tableMinWidth,
            width: e.clientWidth,
            height: e.minHeight
          }
        }, e.tableColGroupNode, f(gl, {
          slatElRefs: this.slatElRefs,
          axis: e.axis,
          slatMetas: e.slatMetas
        })));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateSizing();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateSizing();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.onCoords && this.props.onCoords(null);
      }
    }, {
      key: "updateSizing",
      value: function updateSizing() {
        var e = this.context,
            t = this.props;

        if (t.onCoords && null !== t.clientWidth) {
          this.rootElRef.current.offsetHeight && t.onCoords(new fl(new Ui(this.rootElRef.current, (n = this.slatElRefs.currentMap, t.slatMetas.map(function (e) {
            return n[e.key];
          })), !1, !0), this.props.dateProfile, e.options.slotDuration));
        }

        var n;
      }
    }]);

    return pl;
  }(In);

  function ml(e, t) {
    var n,
        r = [];

    for (n = 0; n < t; n += 1) {
      r.push([]);
    }

    if (e) for (n = 0; n < e.length; n += 1) {
      r[e[n].col].push(e[n]);
    }
    return r;
  }

  function vl(e, t) {
    var n = [];

    if (e) {
      for (var _r64 = 0; _r64 < t; _r64 += 1) {
        n[_r64] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      var _iteratorNormalCompletion75 = true;
      var _didIteratorError75 = false;
      var _iteratorError75 = undefined;

      try {
        for (var _iterator75 = e.segs[Symbol.iterator](), _step75; !(_iteratorNormalCompletion75 = (_step75 = _iterator75.next()).done); _iteratorNormalCompletion75 = true) {
          var _t58 = _step75.value;

          n[_t58.col].segs.push(_t58);
        }
      } catch (err) {
        _didIteratorError75 = true;
        _iteratorError75 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion75 && _iterator75["return"] != null) {
            _iterator75["return"]();
          }
        } finally {
          if (_didIteratorError75) {
            throw _iteratorError75;
          }
        }
      }
    } else for (var _e98 = 0; _e98 < t; _e98 += 1) {
      n[_e98] = null;
    }

    return n;
  }

  var bl =
  /*#__PURE__*/
  function (_In25) {
    _inherits(bl, _In25);

    function bl() {
      _classCallCheck(this, bl);

      return _possibleConstructorReturn(this, _getPrototypeOf(bl).apply(this, arguments));
    }

    _createClass(bl, [{
      key: "render",
      value: function render() {
        var e = this.props;
        return f(no, {
          elClasses: ["fc-timegrid-more-link"],
          elStyle: {
            top: e.top,
            bottom: e.bottom
          },
          allDayDate: null,
          moreCnt: e.hiddenSegs.length,
          allSegs: e.hiddenSegs,
          hiddenSegs: e.hiddenSegs,
          extraDateSpan: e.extraDateSpan,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          popoverContent: function popoverContent() {
            return Tl(e.hiddenSegs, e);
          },
          defaultGenerator: yl
        }, function (e) {
          return f(e, {
            elTag: "div",
            elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
          });
        });
      }
    }]);

    return bl;
  }(In);

  function yl(e) {
    return e.shortText;
  }

  function El(e, t, n) {
    var r = new Gi();
    null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);

    var i = Yi(r.addSegs(e)),
        s = function (e) {
      var t = e.entriesByLevel,
          n = wl(function (e, t) {
        return e + ":" + t;
      }, function (r, i) {
        var s = Al(function (e, t, n) {
          var r = e.levelCoords,
              i = e.entriesByLevel,
              s = i[t][n],
              o = r[t] + s.thickness,
              a = r.length,
              l = t;

          for (; l < a && r[l] < o; l += 1) {
            ;
          }

          for (; l < a; l += 1) {
            var _e99 = void 0,
                _t59 = i[l],
                _n64 = Ji(_t59, s.span.start, Qi),
                _r65 = _n64[0] + _n64[1],
                _o25 = _r65;

            for (; (_e99 = _t59[_o25]) && _e99.span.start < s.span.end;) {
              _o25 += 1;
            }

            if (_r65 < _o25) return {
              level: l,
              lateralStart: _r65,
              lateralEnd: _o25
            };
          }

          return null;
        }(e, r, i), n),
            o = t[r][i];
        return [Object.assign(Object.assign({}, o), {
          nextLevelNodes: s[0]
        }), o.thickness + s[1]];
      });
      return Al(t.length ? {
        level: 0,
        lateralStart: 0,
        lateralEnd: t[0].length
      } : null, n)[0];
    }(r);

    return s = function (e, t) {
      var n = wl(function (e, t, n) {
        return qi(e);
      }, function (e, r, i) {
        var s,
            o = e.nextLevelNodes,
            a = e.thickness,
            l = a + i,
            c = a / l,
            d = [];

        if (o.length) {
          var _iteratorNormalCompletion76 = true;
          var _didIteratorError76 = false;
          var _iteratorError76 = undefined;

          try {
            for (var _iterator76 = o[Symbol.iterator](), _step76; !(_iteratorNormalCompletion76 = (_step76 = _iterator76.next()).done); _iteratorNormalCompletion76 = true) {
              var _e100 = _step76.value;

              if (void 0 === s) {
                var _t60 = n(_e100, r, l);

                s = _t60[0], d.push(_t60[1]);
              } else {
                var _t61 = n(_e100, s, 0);

                d.push(_t61[1]);
              }
            }
          } catch (err) {
            _didIteratorError76 = true;
            _iteratorError76 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion76 && _iterator76["return"] != null) {
                _iterator76["return"]();
              }
            } finally {
              if (_didIteratorError76) {
                throw _iteratorError76;
              }
            }
          }
        } else s = t;

        var u = (s - r) * c;
        return [s - u, Object.assign(Object.assign({}, e), {
          thickness: u,
          nextLevelNodes: d
        })];
      });
      return e.map(function (e) {
        return n(e, 0, 0)[1];
      });
    }(s, 1), {
      segRects: function (e) {
        var t = [];
        var n = wl(function (e, t, n) {
          return qi(e);
        }, function (e, n, i) {
          var s = Object.assign(Object.assign({}, e), {
            levelCoord: n,
            stackDepth: i,
            stackForward: 0
          });
          return t.push(s), s.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1;
        });

        function r(e, t, r) {
          var i = 0;
          var _iteratorNormalCompletion77 = true;
          var _didIteratorError77 = false;
          var _iteratorError77 = undefined;

          try {
            for (var _iterator77 = e[Symbol.iterator](), _step77; !(_iteratorNormalCompletion77 = (_step77 = _iterator77.next()).done); _iteratorNormalCompletion77 = true) {
              var _s32 = _step77.value;
              i = Math.max(n(_s32, t, r), i);
            }
          } catch (err) {
            _didIteratorError77 = true;
            _iteratorError77 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion77 && _iterator77["return"] != null) {
                _iterator77["return"]();
              }
            } finally {
              if (_didIteratorError77) {
                throw _iteratorError77;
              }
            }
          }

          return i;
        }

        return r(e, 0, 0), t;
      }(s),
      hiddenGroups: i
    };
  }

  function Al(e, t) {
    if (!e) return [[], 0];
    var n = e.level,
        r = e.lateralStart,
        i = e.lateralEnd,
        s = r,
        o = [];

    for (; s < i;) {
      o.push(t(n, s)), s += 1;
    }

    return o.sort(Dl), [o.map(Sl), o[0][1]];
  }

  function Dl(e, t) {
    return t[1] - e[1];
  }

  function Sl(e) {
    return e[0];
  }

  function wl(e, t) {
    var n = {};
    return function () {
      var i = e.apply(void 0, arguments);
      return i in n ? n[i] : n[i] = t.apply(void 0, arguments);
    };
  }

  function Cl(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var i = [];
    if (n) for (var _s33 = 0; _s33 < e.length; _s33 += 1) {
      var _o26 = e[_s33],
          _a18 = n.computeDateTop(_o26.start, t),
          _l13 = Math.max(_a18 + (r || 0), n.computeDateTop(_o26.end, t));

      i.push({
        start: Math.round(_a18),
        end: Math.round(_l13)
      });
    }
    return i;
  }

  var Rl = gn({
    hour: "numeric",
    minute: "2-digit",
    meridiem: !1
  });

  var xl =
  /*#__PURE__*/
  function (_In26) {
    _inherits(xl, _In26);

    function xl() {
      _classCallCheck(this, xl);

      return _possibleConstructorReturn(this, _getPrototypeOf(xl).apply(this, arguments));
    }

    _createClass(xl, [{
      key: "render",
      value: function render() {
        return f(Ws, Object.assign({}, this.props, {
          elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
          defaultTimeFormat: Rl
        }));
      }
    }]);

    return xl;
  }(In);

  var _l =
  /*#__PURE__*/
  function (_In27) {
    _inherits(_l, _In27);

    function _l() {
      var _this66;

      _classCallCheck(this, _l);

      _this66 = _possibleConstructorReturn(this, _getPrototypeOf(_l).apply(this, arguments)), _this66.sortEventSegs = Oe(qr);
      return _this66;
    }

    _createClass(_l, [{
      key: "render",
      value: function render() {
        var _this67 = this;

        var e = this.props,
            t = this.context,
            n = t.options,
            r = n.selectMirror,
            i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || [],
            s = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {},
            o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
        return f(Qs, {
          elTag: "td",
          elRef: e.elRef,
          elClasses: ["fc-timegrid-col"].concat(_toConsumableArray(e.extraClassNames || [])),
          elAttrs: Object.assign({
            role: "gridcell"
          }, e.extraDataAttrs),
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraRenderProps: e.extraRenderProps
        }, function (t) {
          return f("div", {
            className: "fc-timegrid-col-frame"
          }, f("div", {
            className: "fc-timegrid-col-bg"
          }, _this67.renderFillSegs(e.businessHourSegs, "non-business"), _this67.renderFillSegs(e.bgEventSegs, "bg-event"), _this67.renderFillSegs(e.dateSelectionSegs, "highlight")), f("div", {
            className: "fc-timegrid-col-events"
          }, _this67.renderFgSegs(o, s, !1, !1, !1)), f("div", {
            className: "fc-timegrid-col-events"
          }, _this67.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(r))), f("div", {
            className: "fc-timegrid-now-indicator-container"
          }, _this67.renderNowIndicator(e.nowIndicatorSegs)), qs(n) && f(t, {
            elTag: "div",
            elClasses: ["fc-timegrid-col-misc"]
          }));
        });
      }
    }, {
      key: "renderFgSegs",
      value: function renderFgSegs(e, t, n, r, i) {
        var s = this.props;
        return s.forPrint ? Tl(e, s) : this.renderPositionedFgSegs(e, t, n, r, i);
      }
    }, {
      key: "renderPositionedFgSegs",
      value: function renderPositionedFgSegs(e, t, n, r, i) {
        var _this68 = this;

        var _this$context$options2 = this.context.options,
            s = _this$context$options2.eventMaxStack,
            o = _this$context$options2.eventShortHeight,
            a = _this$context$options2.eventOrderStrict,
            l = _this$context$options2.eventMinHeight,
            _this$props7 = this.props,
            c = _this$props7.date,
            d = _this$props7.slatCoords,
            u = _this$props7.eventSelection,
            h = _this$props7.todayRange,
            g = _this$props7.nowDate,
            m = n || r || i,
            v = Cl(e, c, d, l),
            _ref8 = function (e, t, n, r) {
          var i = [],
              s = [];

          for (var _n65 = 0; _n65 < e.length; _n65 += 1) {
            var _r66 = t[_n65];
            _r66 ? i.push({
              index: _n65,
              thickness: 1,
              span: _r66
            }) : s.push(e[_n65]);
          }

          var _El = El(i, n, r),
              o = _El.segRects,
              a = _El.hiddenGroups,
              l = [];

          var _iteratorNormalCompletion78 = true;
          var _didIteratorError78 = false;
          var _iteratorError78 = undefined;

          try {
            for (var _iterator78 = o[Symbol.iterator](), _step78; !(_iteratorNormalCompletion78 = (_step78 = _iterator78.next()).done); _iteratorNormalCompletion78 = true) {
              var _t62 = _step78.value;
              l.push({
                seg: e[_t62.index],
                rect: _t62
              });
            }
          } catch (err) {
            _didIteratorError78 = true;
            _iteratorError78 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion78 && _iterator78["return"] != null) {
                _iterator78["return"]();
              }
            } finally {
              if (_didIteratorError78) {
                throw _iteratorError78;
              }
            }
          }

          for (var _i39 = 0, _s34 = s; _i39 < _s34.length; _i39++) {
            var _e101 = _s34[_i39];
            l.push({
              seg: _e101,
              rect: null
            });
          }

          return {
            segPlacements: l,
            hiddenGroups: a
          };
        }(e, v, a, s),
            b = _ref8.segPlacements,
            y = _ref8.hiddenGroups;

        return f(p, null, this.renderHiddenGroups(y, e), b.map(function (e) {
          var s = e.seg,
              a = e.rect,
              l = s.eventRange.instance.instanceId,
              c = m || Boolean(!t[l] && a),
              d = kl(a && a.span),
              p = !m && a ? _this68.computeSegHStyle(a) : {
            left: 0,
            right: 0
          },
              v = Boolean(a) && a.stackForward > 0,
              b = Boolean(a) && a.span.end - a.span.start < o;
          return f("div", {
            className: "fc-timegrid-event-harness" + (v ? " fc-timegrid-event-harness-inset" : ""),
            key: l,
            style: Object.assign(Object.assign({
              visibility: c ? "" : "hidden"
            }, d), p)
          }, f(xl, Object.assign({
            seg: s,
            isDragging: n,
            isResizing: r,
            isDateSelecting: i,
            isSelected: l === u,
            isShort: b
          }, Kr(s, h, g))));
        }));
      }
    }, {
      key: "renderHiddenGroups",
      value: function renderHiddenGroups(e, t) {
        var _this$props8 = this.props,
            n = _this$props8.extraDateSpan,
            r = _this$props8.dateProfile,
            i = _this$props8.todayRange,
            s = _this$props8.nowDate,
            o = _this$props8.eventSelection,
            a = _this$props8.eventDrag,
            l = _this$props8.eventResize;
        return f(p, null, e.map(function (e) {
          var c = kl(e.span),
              d = (u = e.entries, h = t, u.map(function (e) {
            return h[e.index];
          }));
          var u, h;
          return f(bl, {
            key: Qt(so(d)),
            hiddenSegs: d,
            top: c.top,
            bottom: c.bottom,
            extraDateSpan: n,
            dateProfile: r,
            todayRange: i,
            nowDate: s,
            eventSelection: o,
            eventDrag: a,
            eventResize: l
          });
        }));
      }
    }, {
      key: "renderFillSegs",
      value: function renderFillSegs(e, t) {
        var n = this.props,
            r = this.context,
            i = Cl(e, n.date, n.slatCoords, r.options.eventMinHeight).map(function (r, i) {
          var s = e[i];
          return f("div", {
            key: ti(s.eventRange),
            className: "fc-timegrid-bg-harness",
            style: kl(r)
          }, "bg-event" === t ? f(Zs, Object.assign({
            seg: s
          }, Kr(s, n.todayRange, n.nowDate))) : Js(t));
        });
        return f(p, null, i);
      }
    }, {
      key: "renderNowIndicator",
      value: function renderNowIndicator(e) {
        var _this$props9 = this.props,
            t = _this$props9.slatCoords,
            n = _this$props9.date;
        return t ? e.map(function (e, r) {
          return f(Vs, {
            key: r,
            elClasses: ["fc-timegrid-now-indicator-line"],
            elStyle: {
              top: t.computeDateTop(e.start, n)
            },
            isAxis: !1,
            date: n
          });
        }) : null;
      }
    }, {
      key: "computeSegHStyle",
      value: function computeSegHStyle(e) {
        var t,
            n,
            _this$context6 = this.context,
            r = _this$context6.isRtl,
            i = _this$context6.options,
            s = i.slotEventOverlap,
            o = e.levelCoord,
            a = e.levelCoord + e.thickness;
        s && (a = Math.min(1, o + 2 * (a - o))), r ? (t = 1 - a, n = o) : (t = o, n = 1 - a);
        var l = {
          zIndex: e.stackDepth + 1,
          left: 100 * t + "%",
          right: 100 * n + "%"
        };
        return s && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20), l;
      }
    }]);

    return _l;
  }(In);

  function Tl(e, _ref9) {
    var t = _ref9.todayRange,
        n = _ref9.nowDate,
        r = _ref9.eventSelection,
        i = _ref9.eventDrag,
        s = _ref9.eventResize;
    var o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
    return f(p, null, e.map(function (e) {
      var i = e.eventRange.instance.instanceId;
      return f("div", {
        key: i,
        style: {
          visibility: o[i] ? "hidden" : ""
        }
      }, f(xl, Object.assign({
        seg: e,
        isDragging: !1,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: i === r,
        isShort: !1
      }, Kr(e, t, n))));
    }));
  }

  function kl(e) {
    return e ? {
      top: e.start,
      bottom: -e.end
    } : {
      top: "",
      bottom: ""
    };
  }

  var Ml =
  /*#__PURE__*/
  function (_In28) {
    _inherits(Ml, _In28);

    function Ml() {
      var _this69;

      _classCallCheck(this, Ml);

      _this69 = _possibleConstructorReturn(this, _getPrototypeOf(Ml).apply(this, arguments)), _this69.splitFgEventSegs = Oe(ml), _this69.splitBgEventSegs = Oe(ml), _this69.splitBusinessHourSegs = Oe(ml), _this69.splitNowIndicatorSegs = Oe(ml), _this69.splitDateSelectionSegs = Oe(ml), _this69.splitEventDrag = Oe(vl), _this69.splitEventResize = Oe(vl), _this69.rootElRef = {
        current: null
      }, _this69.cellElRefs = new Rs();
      return _this69;
    }

    _createClass(Ml, [{
      key: "render",
      value: function render() {
        var _this70 = this;

        var e = this.props,
            t = this.context,
            n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate),
            r = e.cells.length,
            i = this.splitFgEventSegs(e.fgEventSegs, r),
            s = this.splitBgEventSegs(e.bgEventSegs, r),
            o = this.splitBusinessHourSegs(e.businessHourSegs, r),
            a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r),
            l = this.splitDateSelectionSegs(e.dateSelectionSegs, r),
            c = this.splitEventDrag(e.eventDrag, r),
            d = this.splitEventResize(e.eventResize, r);
        return f("div", {
          className: "fc-timegrid-cols",
          ref: this.rootElRef
        }, f("table", {
          role: "presentation",
          style: {
            minWidth: e.tableMinWidth,
            width: e.clientWidth
          }
        }, e.tableColGroupNode, f("tbody", {
          role: "presentation"
        }, f("tr", {
          role: "row"
        }, e.axis && f("td", {
          "aria-hidden": !0,
          className: "fc-timegrid-col fc-timegrid-axis"
        }, f("div", {
          className: "fc-timegrid-col-frame"
        }, f("div", {
          className: "fc-timegrid-now-indicator-container"
        }, "number" == typeof n && f(Vs, {
          elClasses: ["fc-timegrid-now-indicator-arrow"],
          elStyle: {
            top: n
          },
          isAxis: !0,
          date: e.nowDate
        })))), e.cells.map(function (t, n) {
          return f(_l, {
            key: t.key,
            elRef: _this70.cellElRefs.createRef(t.key),
            dateProfile: e.dateProfile,
            date: t.date,
            nowDate: e.nowDate,
            todayRange: e.todayRange,
            extraRenderProps: t.extraRenderProps,
            extraDataAttrs: t.extraDataAttrs,
            extraClassNames: t.extraClassNames,
            extraDateSpan: t.extraDateSpan,
            fgEventSegs: i[n],
            bgEventSegs: s[n],
            businessHourSegs: o[n],
            nowIndicatorSegs: a[n],
            dateSelectionSegs: l[n],
            eventDrag: c[n],
            eventResize: d[n],
            slatCoords: e.slatCoords,
            eventSelection: e.eventSelection,
            forPrint: e.forPrint
          });
        })))));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateCoords();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateCoords();
      }
    }, {
      key: "updateCoords",
      value: function updateCoords() {
        var e = this.props;
        var t;
        e.onColCoords && null !== e.clientWidth && e.onColCoords(new Ui(this.rootElRef.current, (t = this.cellElRefs.currentMap, e.cells.map(function (e) {
          return t[e.key];
        })), !0, !1));
      }
    }]);

    return Ml;
  }(In);

  var Il =
  /*#__PURE__*/
  function (_Vi8) {
    _inherits(Il, _Vi8);

    function Il() {
      var _this71;

      _classCallCheck(this, Il);

      _this71 = _possibleConstructorReturn(this, _getPrototypeOf(Il).apply(this, arguments)), _this71.processSlotOptions = Oe(Ol), _this71.state = {
        slatCoords: null
      }, _this71.handleRootEl = function (e) {
        e ? _this71.context.registerInteractiveComponent(_assertThisInitialized(_this71), {
          el: e,
          isHitComboAllowed: _this71.props.isHitComboAllowed
        }) : _this71.context.unregisterInteractiveComponent(_assertThisInitialized(_this71));
      }, _this71.handleScrollRequest = function (e) {
        var t = _this71.props.onScrollTopRequest,
            n = _this71.state.slatCoords;

        if (t && n) {
          if (e.time) {
            var _r67 = n.computeTimeTop(e.time);

            _r67 = Math.ceil(_r67), _r67 && (_r67 += 1), t(_r67);
          }

          return !0;
        }

        return !1;
      }, _this71.handleColCoords = function (e) {
        _this71.colCoords = e;
      }, _this71.handleSlatCoords = function (e) {
        _this71.setState({
          slatCoords: e
        }), _this71.props.onSlatCoords && _this71.props.onSlatCoords(e);
      };
      return _this71;
    }

    _createClass(Il, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state;
        return f("div", {
          className: "fc-timegrid-body",
          ref: this.handleRootEl,
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth
          }
        }, f(pl, {
          axis: e.axis,
          dateProfile: e.dateProfile,
          slatMetas: e.slatMetas,
          clientWidth: e.clientWidth,
          minHeight: e.expandRows ? e.clientHeight : "",
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.axis ? e.tableColGroupNode : null,
          onCoords: this.handleSlatCoords
        }), f(Ml, {
          cells: e.cells,
          axis: e.axis,
          dateProfile: e.dateProfile,
          businessHourSegs: e.businessHourSegs,
          bgEventSegs: e.bgEventSegs,
          fgEventSegs: e.fgEventSegs,
          dateSelectionSegs: e.dateSelectionSegs,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          todayRange: e.todayRange,
          nowDate: e.nowDate,
          nowIndicatorSegs: e.nowIndicatorSegs,
          clientWidth: e.clientWidth,
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.tableColGroupNode,
          slatCoords: t.slatCoords,
          onColCoords: this.handleColCoords,
          forPrint: e.forPrint
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.scrollResponder.detach();
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t) {
        var _this$context7 = this.context,
            n = _this$context7.dateEnv,
            r = _this$context7.options,
            i = this.colCoords,
            s = this.props.dateProfile,
            o = this.state.slatCoords,
            _this$processSlotOpti = this.processSlotOptions(this.props.slotDuration, r.snapDuration),
            a = _this$processSlotOpti.snapDuration,
            l = _this$processSlotOpti.snapsPerSlot,
            c = i.leftToIndex(e),
            d = o.positions.topToIndex(t);

        if (null != c && null != d) {
          var _e102 = this.props.cells[c],
              _r68 = o.positions.tops[d],
              _u8 = o.positions.getHeight(d),
              _h5 = (t - _r68) / _u8,
              _f4 = d * l + Math.floor(_h5 * l),
              _g6 = this.props.cells[c].date,
              _p4 = Ut(s.slotMinTime, Lt(a, _f4)),
              _m7 = n.add(_g6, _p4),
              _v3 = n.add(_m7, a);

          return {
            dateProfile: s,
            dateSpan: Object.assign({
              range: {
                start: _m7,
                end: _v3
              },
              allDay: !1
            }, _e102.extraDateSpan),
            dayEl: i.els[c],
            rect: {
              left: i.lefts[c],
              right: i.rights[c],
              top: _r68,
              bottom: _r68 + _u8
            },
            layer: 0
          };
        }

        return null;
      }
    }]);

    return Il;
  }(Vi);

  function Ol(e, t) {
    var n = t || e,
        r = Vt(e, n);
    return null === r && (n = e, r = 1), {
      snapDuration: n,
      snapsPerSlot: r
    };
  }

  var Nl =
  /*#__PURE__*/
  function (_gs2) {
    _inherits(Nl, _gs2);

    function Nl() {
      _classCallCheck(this, Nl);

      return _possibleConstructorReturn(this, _getPrototypeOf(Nl).apply(this, arguments));
    }

    _createClass(Nl, [{
      key: "sliceRange",
      value: function sliceRange(e, t) {
        var n = [];

        for (var _r69 = 0; _r69 < t.length; _r69 += 1) {
          var _i40 = Vn(e, t[_r69]);

          _i40 && n.push({
            start: _i40.start,
            end: _i40.end,
            isStart: _i40.start.valueOf() === e.start.valueOf(),
            isEnd: _i40.end.valueOf() === e.end.valueOf(),
            col: _r69
          });
        }

        return n;
      }
    }]);

    return Nl;
  }(gs);

  var Pl =
  /*#__PURE__*/
  function (_Vi9) {
    _inherits(Pl, _Vi9);

    function Pl() {
      var _this72;

      _classCallCheck(this, Pl);

      _this72 = _possibleConstructorReturn(this, _getPrototypeOf(Pl).apply(this, arguments)), _this72.buildDayRanges = Oe(Hl), _this72.slicer = new Nl(), _this72.timeColsRef = {
        current: null
      };
      return _this72;
    }

    _createClass(Pl, [{
      key: "render",
      value: function render() {
        var _this73 = this;

        var e = this.props,
            t = this.context,
            n = e.dateProfile,
            r = e.dayTableModel,
            i = t.options.nowIndicator,
            s = this.buildDayRanges(r, n, t.dateEnv);
        return f(ls, {
          unit: i ? "minute" : "day"
        }, function (o, a) {
          return f(Il, Object.assign({
            ref: _this73.timeColsRef
          }, _this73.slicer.sliceProps(e, n, null, t, s), {
            forPrint: e.forPrint,
            axis: e.axis,
            dateProfile: n,
            slatMetas: e.slatMetas,
            slotDuration: e.slotDuration,
            cells: r.cells[0],
            tableColGroupNode: e.tableColGroupNode,
            tableMinWidth: e.tableMinWidth,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            expandRows: e.expandRows,
            nowDate: o,
            nowIndicatorSegs: i && _this73.slicer.sliceNowDate(o, t, s),
            todayRange: a,
            onScrollTopRequest: e.onScrollTopRequest,
            onSlatCoords: e.onSlatCoords
          }));
        });
      }
    }]);

    return Pl;
  }(Vi);

  function Hl(e, t, n) {
    var r = [];
    var _iteratorNormalCompletion79 = true;
    var _didIteratorError79 = false;
    var _iteratorError79 = undefined;

    try {
      for (var _iterator79 = e.headerDates[Symbol.iterator](), _step79; !(_iteratorNormalCompletion79 = (_step79 = _iterator79.next()).done); _iteratorNormalCompletion79 = true) {
        var _i41 = _step79.value;
        r.push({
          start: n.add(_i41, t.slotMinTime),
          end: n.add(_i41, t.slotMaxTime)
        });
      }
    } catch (err) {
      _didIteratorError79 = true;
      _iteratorError79 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion79 && _iterator79["return"] != null) {
          _iterator79["return"]();
        }
      } finally {
        if (_didIteratorError79) {
          throw _iteratorError79;
        }
      }
    }

    return r;
  }

  var Bl = [{
    hours: 1
  }, {
    minutes: 30
  }, {
    minutes: 15
  }, {
    seconds: 30
  }, {
    seconds: 15
  }];

  function jl(e, t, n, r, i) {
    var s = new Date(0),
        o = e,
        a = jt(0),
        l = n || function (e) {
      var t, n, r;

      for (t = Bl.length - 1; t >= 0; t -= 1) {
        if (n = jt(Bl[t]), r = Vt(n, e), null !== r && r > 1) return n;
      }

      return e;
    }(r),
        c = [];

    for (; Ft(o) < Ft(t);) {
      var _e103 = i.add(s, o),
          _t63 = null !== Vt(a, l);

      c.push({
        date: _e103,
        time: o,
        key: _e103.toISOString(),
        isoTimeStr: Yt(_e103),
        isLabeled: _t63
      }), o = Ut(o, r), a = Ut(a, r);
    }

    return c;
  }

  function zl(e, t) {
    var n = new hs(e.renderRange, t);
    return new fs(n, !1);
  }

  var Ul = {
    allDaySlot: Boolean
  };
  ye('.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}');
  var Ll = mo({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: Ul,
    views: {
      timeGrid: {
        component:
        /*#__PURE__*/
        function (_ul) {
          _inherits(component, _ul);

          function component() {
            var _this74;

            _classCallCheck(this, component);

            _this74 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this74.buildTimeColsModel = Oe(zl), _this74.buildSlatMetas = Oe(jl);
            return _this74;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var _this75 = this;

              var _this$context8 = this.context,
                  e = _this$context8.options,
                  t = _this$context8.dateEnv,
                  n = _this$context8.dateProfileGenerator,
                  r = this.props,
                  i = r.dateProfile,
                  s = this.buildTimeColsModel(i, n),
                  o = this.allDaySplitter.splitProps(r),
                  a = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t),
                  l = e.dayMinWidth,
                  c = !l,
                  d = l,
                  u = e.dayHeaders && f(ds, {
                dates: s.headerDates,
                dateProfile: i,
                datesRepDistinctDays: !0,
                renderIntro: c ? this.renderHeadAxis : null
              }),
                  h = !1 !== e.allDaySlot && function (t) {
                return f(nl, Object.assign({}, o.allDay, {
                  dateProfile: i,
                  dayTableModel: s,
                  nextDayThreshold: e.nextDayThreshold,
                  tableMinWidth: t.tableMinWidth,
                  colGroupNode: t.tableColGroupNode,
                  renderRowIntro: c ? _this75.renderTableRowAxis : null,
                  showWeekNumbers: !1,
                  expandRows: !1,
                  headerAlignElRef: _this75.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: r.forPrint
                }, _this75.getAllDayMaxEventProps()));
              },
                  g = function g(t) {
                return f(Pl, Object.assign({}, o.timed, {
                  dayTableModel: s,
                  dateProfile: i,
                  axis: c,
                  slotDuration: e.slotDuration,
                  slatMetas: a,
                  forPrint: r.forPrint,
                  tableColGroupNode: t.tableColGroupNode,
                  tableMinWidth: t.tableMinWidth,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  onSlatCoords: _this75.handleSlatCoords,
                  expandRows: t.expandRows,
                  onScrollTopRequest: _this75.handleScrollTopRequest
                }));
              };

              return d ? this.renderHScrollLayout(u, h, g, s.colCnt, l, a, this.state.slatCoords) : this.renderSimpleLayout(u, h, g);
            }
          }]);

          return component;
        }(ul),
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: "00:30:00",
        slotEventOverlap: !0
      },
      timeGridDay: {
        type: "timeGrid",
        duration: {
          days: 1
        }
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: {
          weeks: 1
        }
      }
    }
  });

  var Wl =
  /*#__PURE__*/
  function (_In29) {
    _inherits(Wl, _In29);

    function Wl() {
      var _this76;

      _classCallCheck(this, Wl);

      _this76 = _possibleConstructorReturn(this, _getPrototypeOf(Wl).apply(this, arguments)), _this76.state = {
        textId: Ge()
      };
      return _this76;
    }

    _createClass(Wl, [{
      key: "render",
      value: function render() {
        var _this$context9 = this.context,
            e = _this$context9.theme,
            t = _this$context9.dateEnv,
            n = _this$context9.options,
            r = _this$context9.viewApi,
            _this$props10 = this.props,
            i = _this$props10.cellId,
            s = _this$props10.dayDate,
            o = _this$props10.todayRange,
            a = this.state.textId,
            l = Ri(s, o),
            c = n.listDayFormat ? t.format(s, n.listDayFormat) : "",
            d = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : "",
            u = Object.assign({
          date: t.toDate(s),
          view: r,
          textId: a,
          text: c,
          sideText: d,
          navLinkAttrs: ki(this.context, s),
          sideNavLinkAttrs: ki(this.context, s, "day", !1)
        }, l);
        return f(jn, {
          elTag: "tr",
          elClasses: ["fc-list-day"].concat(_toConsumableArray(xi(l, e))),
          elAttrs: {
            "data-date": qt(s)
          },
          renderProps: u,
          generatorName: "dayHeaderContent",
          generator: n.dayHeaderContent || Fl,
          classNameGenerator: n.dayHeaderClassNames,
          didMount: n.dayHeaderDidMount,
          willUnmount: n.dayHeaderWillUnmount
        }, function (t) {
          return f("th", {
            scope: "colgroup",
            colSpan: 3,
            id: i,
            "aria-labelledby": a
          }, f(t, {
            elTag: "div",
            elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
          }));
        });
      }
    }]);

    return Wl;
  }(In);

  function Fl(e) {
    return f(p, null, e.text && f("a", Object.assign({
      id: e.textId,
      className: "fc-list-day-text"
    }, e.navLinkAttrs), e.text), e.sideText && f("a", Object.assign({
      "aria-hidden": !0,
      className: "fc-list-day-side-text"
    }, e.sideNavLinkAttrs), e.sideText));
  }

  var Vl = gn({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
  });

  var Gl =
  /*#__PURE__*/
  function (_In30) {
    _inherits(Gl, _In30);

    function Gl() {
      _classCallCheck(this, Gl);

      return _possibleConstructorReturn(this, _getPrototypeOf(Gl).apply(this, arguments));
    }

    _createClass(Gl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = e.timeHeaderId,
            s = e.eventHeaderId,
            o = e.dateHeaderId,
            a = n.eventTimeFormat || Vl;
        return f(Ls, Object.assign({}, e, {
          elTag: "tr",
          elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
          defaultGenerator: function defaultGenerator() {
            return function (e, t) {
              var n = ni(e, t);
              return f("a", Object.assign({}, n), e.eventRange.def.title);
            }(r, t);
          },
          seg: r,
          timeText: "",
          disableDragging: !0,
          disableResizing: !0
        }), function (e, n) {
          return f(p, null, function (e, t, n, r, i) {
            var s = n.options;

            if (!1 !== s.displayEventTime) {
              var _o27,
                  _a19 = e.eventRange.def,
                  _l14 = e.eventRange.instance,
                  _c9 = !1;

              if (_a19.allDay ? _c9 = !0 : Jn(e.eventRange.range) ? e.isStart ? _o27 = $r(e, t, n, null, null, _l14.range.start, e.end) : e.isEnd ? _o27 = $r(e, t, n, null, null, e.start, _l14.range.end) : _c9 = !0 : _o27 = $r(e, t, n), _c9) {
                var _e104 = {
                  text: n.options.allDayText,
                  view: n.viewApi
                };
                return f(jn, {
                  elTag: "td",
                  elClasses: ["fc-list-event-time"],
                  elAttrs: {
                    headers: "".concat(r, " ").concat(i)
                  },
                  renderProps: _e104,
                  generatorName: "allDayContent",
                  generator: s.allDayContent || Ql,
                  classNameGenerator: s.allDayClassNames,
                  didMount: s.allDayDidMount,
                  willUnmount: s.allDayWillUnmount
                });
              }

              return f("td", {
                className: "fc-list-event-time"
              }, _o27);
            }

            return null;
          }(r, a, t, i, o), f("td", {
            "aria-hidden": !0,
            className: "fc-list-event-graphic"
          }, f("span", {
            className: "fc-list-event-dot",
            style: {
              borderColor: n.borderColor || n.backgroundColor
            }
          })), f(e, {
            elTag: "td",
            elClasses: ["fc-list-event-title"],
            elAttrs: {
              headers: "".concat(s, " ").concat(o)
            }
          }));
        });
      }
    }]);

    return Gl;
  }(In);

  function Ql(e) {
    return e.text;
  }

  function ql(e) {
    return e.text;
  }

  function Yl(e) {
    var t = wt(e.renderRange.start),
        n = e.renderRange.end,
        r = [],
        i = [];

    for (; t < n;) {
      r.push(t), i.push({
        start: t,
        end: vt(t, 1)
      }), t = vt(t, 1);
    }

    return {
      dayDates: r,
      dayRanges: i
    };
  }

  var Zl = {
    listDayFormat: Xl,
    listDaySideFormat: Xl,
    noEventsClassNames: wn,
    noEventsContent: wn,
    noEventsDidMount: wn,
    noEventsWillUnmount: wn
  };

  function Xl(e) {
    return !1 === e ? null : gn(e);
  }

  ye(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');
  var Jl = mo({
    name: "@fullcalendar/list",
    optionRefiners: Zl,
    views: {
      list: {
        component:
        /*#__PURE__*/
        function (_Vi10) {
          _inherits(component, _Vi10);

          function component() {
            var _this77;

            _classCallCheck(this, component);

            _this77 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this77.computeDateVars = Oe(Yl), _this77.eventStoreToSegs = Oe(_this77._eventStoreToSegs), _this77.state = {
              timeHeaderId: Ge(),
              eventHeaderId: Ge(),
              dateHeaderIdRoot: Ge()
            }, _this77.setRootEl = function (e) {
              e ? _this77.context.registerInteractiveComponent(_assertThisInitialized(_this77), {
                el: e
              }) : _this77.context.unregisterInteractiveComponent(_assertThisInitialized(_this77));
            };
            return _this77;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var e = this.props,
                  t = this.context,
                  _this$computeDateVars = this.computeDateVars(e.dateProfile),
                  n = _this$computeDateVars.dayDates,
                  r = _this$computeDateVars.dayRanges,
                  i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);

              return f(Un, {
                elRef: this.setRootEl,
                elClasses: ["fc-list", t.theme.getClass("table"), !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                viewSpec: t.viewSpec
              }, f(Cs, {
                liquid: !e.isHeightAuto,
                overflowX: e.isHeightAuto ? "visible" : "hidden",
                overflowY: e.isHeightAuto ? "visible" : "auto"
              }, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()));
            }
          }, {
            key: "renderEmptyMessage",
            value: function renderEmptyMessage() {
              var _this$context10 = this.context,
                  e = _this$context10.options,
                  t = _this$context10.viewApi,
                  n = {
                text: e.noEventsText,
                view: t
              };
              return f(jn, {
                elTag: "div",
                elClasses: ["fc-list-empty"],
                renderProps: n,
                generatorName: "noEventsContent",
                generator: e.noEventsContent || ql,
                classNameGenerator: e.noEventsClassNames,
                didMount: e.noEventsDidMount,
                willUnmount: e.noEventsWillUnmount
              }, function (e) {
                return f(e, {
                  elTag: "div",
                  elClasses: ["fc-list-empty-cushion"]
                });
              });
            }
          }, {
            key: "renderSegList",
            value: function renderSegList(e, t) {
              var _this$context11 = this.context,
                  n = _this$context11.theme,
                  r = _this$context11.options,
                  _this$state2 = this.state,
                  i = _this$state2.timeHeaderId,
                  s = _this$state2.eventHeaderId,
                  o = _this$state2.dateHeaderIdRoot,
                  a = function (e) {
                var t,
                    n,
                    r = [];

                for (t = 0; t < e.length; t += 1) {
                  n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                }

                return r;
              }(e);

              return f(ls, {
                unit: "day"
              }, function (e, l) {
                var c = [];

                for (var _n66 = 0; _n66 < a.length; _n66 += 1) {
                  var _d9 = a[_n66];

                  if (_d9) {
                    var _a20 = qt(t[_n66]),
                        _u9 = o + "-" + _a20;

                    c.push(f(Wl, {
                      key: _a20,
                      cellId: _u9,
                      dayDate: t[_n66],
                      todayRange: l
                    })), _d9 = qr(_d9, r.eventOrder);
                    var _iteratorNormalCompletion80 = true;
                    var _didIteratorError80 = false;
                    var _iteratorError80 = undefined;

                    try {
                      for (var _iterator80 = _d9[Symbol.iterator](), _step80; !(_iteratorNormalCompletion80 = (_step80 = _iterator80.next()).done); _iteratorNormalCompletion80 = true) {
                        var _t64 = _step80.value;
                        c.push(f(Gl, Object.assign({
                          key: _a20 + ":" + _t64.eventRange.instance.instanceId,
                          seg: _t64,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: !1,
                          timeHeaderId: i,
                          eventHeaderId: s,
                          dateHeaderId: _u9
                        }, Kr(_t64, l, e))));
                      }
                    } catch (err) {
                      _didIteratorError80 = true;
                      _iteratorError80 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion80 && _iterator80["return"] != null) {
                          _iterator80["return"]();
                        }
                      } finally {
                        if (_didIteratorError80) {
                          throw _iteratorError80;
                        }
                      }
                    }
                  }
                }

                return f("table", {
                  className: "fc-list-table " + n.getClass("table")
                }, f("thead", null, f("tr", null, f("th", {
                  scope: "col",
                  id: i
                }, r.timeHint), f("th", {
                  scope: "col",
                  "aria-hidden": !0
                }), f("th", {
                  scope: "col",
                  id: s
                }, r.eventHint))), f("tbody", null, c));
              });
            }
          }, {
            key: "_eventStoreToSegs",
            value: function _eventStoreToSegs(e, t, n) {
              return this.eventRangesToSegs(Wr(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
            }
          }, {
            key: "eventRangesToSegs",
            value: function eventRangesToSegs(e, t) {
              var n = [];
              var _iteratorNormalCompletion81 = true;
              var _didIteratorError81 = false;
              var _iteratorError81 = undefined;

              try {
                for (var _iterator81 = e[Symbol.iterator](), _step81; !(_iteratorNormalCompletion81 = (_step81 = _iterator81.next()).done); _iteratorNormalCompletion81 = true) {
                  var _r70 = _step81.value;
                  n.push.apply(n, _toConsumableArray(this.eventRangeToSegs(_r70, t)));
                }
              } catch (err) {
                _didIteratorError81 = true;
                _iteratorError81 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion81 && _iterator81["return"] != null) {
                    _iterator81["return"]();
                  }
                } finally {
                  if (_didIteratorError81) {
                    throw _iteratorError81;
                  }
                }
              }

              return n;
            }
          }, {
            key: "eventRangeToSegs",
            value: function eventRangeToSegs(e, t) {
              var n,
                  r,
                  i,
                  s = this.context.dateEnv,
                  o = this.context.options.nextDayThreshold,
                  a = e.range,
                  l = e.def.allDay,
                  c = [];

              for (n = 0; n < t.length; n += 1) {
                if (r = Vn(a, t[n]), r && (i = {
                  component: this,
                  eventRange: e,
                  start: r.start,
                  end: r.end,
                  isStart: e.isStart && r.start.valueOf() === a.start.valueOf(),
                  isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                  dayIndex: n
                }, c.push(i), !i.isEnd && !l && n + 1 < t.length && a.end < s.add(t[n + 1].start, o))) {
                  i.end = a.end, i.isEnd = !0;
                  break;
                }
              }

              return c;
            }
          }]);

          return component;
        }(Vi),
        buttonTextKey: "list",
        listDayFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listDay: {
        type: "list",
        duration: {
          days: 1
        },
        listDayFormat: {
          weekday: "long"
        }
      },
      listWeek: {
        type: "list",
        duration: {
          weeks: 1
        },
        listDayFormat: {
          weekday: "long"
        },
        listDaySideFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listMonth: {
        type: "list",
        duration: {
          month: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      },
      listYear: {
        type: "list",
        duration: {
          year: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      }
    }
  });
  return Fo.push(Na, il, Ll, Jl), e.Calendar =
  /*#__PURE__*/
  function (_vi) {
    _inherits(_class6, _vi);

    function _class6(e) {
      var _this78;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _class6);

      _this78 = _possibleConstructorReturn(this, _getPrototypeOf(_class6).call(this)), _this78.isRendering = !1, _this78.isRendered = !1, _this78.currentClassNames = [], _this78.customContentRenderId = 0, _this78.handleAction = function (e) {
        switch (e.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            _this78.renderRunner.tryDrain();

        }
      }, _this78.handleData = function (e) {
        _this78.currentData = e, _this78.renderRunner.request(e.calendarOptions.rerenderDelay);
      }, _this78.handleRenderRequest = function () {
        if (_this78.isRendering) {
          _this78.isRendered = !0;

          var _assertThisInitialize10 = _assertThisInitialized(_this78),
              _e105 = _assertThisInitialize10.currentData;

          Cn(function () {
            P(f(fi, {
              options: _e105.calendarOptions,
              theme: _e105.theme,
              emitter: _e105.emitter
            }, function (t, n, r, i) {
              return _this78.setClassNames(t), _this78.setHeight(n), f(Bn.Provider, {
                value: _this78.customContentRenderId
              }, f(la, Object.assign({
                isHeightAuto: r,
                forPrint: i
              }, _e105)));
            }), _this78.el);
          });
        } else _this78.isRendered && (_this78.isRendered = !1, P(null, _this78.el), _this78.setClassNames([]), _this78.setHeight(""));
      }, _this78.el = e, _this78.renderRunner = new Ee(_this78.handleRenderRequest), new Qo({
        optionOverrides: t,
        calendarApi: _assertThisInitialized(_this78),
        onAction: _this78.handleAction,
        onData: _this78.handleData
      });
      return _this78;
    }

    _createClass(_class6, [{
      key: "render",
      value: function render() {
        var e = this.isRendering;
        e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isRendering && (this.isRendering = !1, this.renderRunner.request());
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var _this79 = this;

        Cn(function () {
          _get(_getPrototypeOf(_class6.prototype), "updateSize", _this79).call(_this79);
        });
      }
    }, {
      key: "batchRendering",
      value: function batchRendering(e) {
        this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
      }
    }, {
      key: "pauseRendering",
      value: function pauseRendering() {
        this.renderRunner.pause("pauseRendering");
      }
    }, {
      key: "resumeRendering",
      value: function resumeRendering() {
        this.renderRunner.resume("pauseRendering", !0);
      }
    }, {
      key: "resetOptions",
      value: function resetOptions(e, t) {
        this.currentDataManager.resetOptions(e, t);
      }
    }, {
      key: "setClassNames",
      value: function setClassNames(e) {
        if (!Ie(e, this.currentClassNames)) {
          var _t65 = this.el.classList;
          var _iteratorNormalCompletion82 = true;
          var _didIteratorError82 = false;
          var _iteratorError82 = undefined;

          try {
            for (var _iterator82 = this.currentClassNames[Symbol.iterator](), _step82; !(_iteratorNormalCompletion82 = (_step82 = _iterator82.next()).done); _iteratorNormalCompletion82 = true) {
              var _e106 = _step82.value;

              _t65.remove(_e106);
            }
          } catch (err) {
            _didIteratorError82 = true;
            _iteratorError82 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion82 && _iterator82["return"] != null) {
                _iterator82["return"]();
              }
            } finally {
              if (_didIteratorError82) {
                throw _iteratorError82;
              }
            }
          }

          var _iteratorNormalCompletion83 = true;
          var _didIteratorError83 = false;
          var _iteratorError83 = undefined;

          try {
            for (var _iterator83 = e[Symbol.iterator](), _step83; !(_iteratorNormalCompletion83 = (_step83 = _iterator83.next()).done); _iteratorNormalCompletion83 = true) {
              var _n67 = _step83.value;

              _t65.add(_n67);
            }
          } catch (err) {
            _didIteratorError83 = true;
            _iteratorError83 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion83 && _iterator83["return"] != null) {
                _iterator83["return"]();
              }
            } finally {
              if (_didIteratorError83) {
                throw _iteratorError83;
              }
            }
          }

          this.currentClassNames = e;
        }
      }
    }, {
      key: "setHeight",
      value: function setHeight(e) {
        Le(this.el, "height", e);
      }
    }]);

    return _class6;
  }(vi), e.Draggable =
  /*#__PURE__*/
  function () {
    function _class7(e) {
      var _this80 = this;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _class7);

      this.handlePointerDown = function (e) {
        var t = _this80.dragging,
            _this80$settings = _this80.settings,
            n = _this80$settings.minDistance,
            r = _this80$settings.longPressDelay;
        t.minDistance = null != n ? n : e.isTouch ? 0 : mn.eventDragMinDistance, t.delay = e.isTouch ? null != r ? r : mn.longPressDelay : 0;
      }, this.handleDragStart = function (e) {
        e.isTouch && _this80.dragging.delay && e.subjectEl.classList.contains("fc-event") && _this80.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
      }, this.settings = t;
      var n = this.dragging = new Sa(e);
      n.touchScrollAllowed = !1, null != t.itemSelector && (n.pointer.selector = t.itemSelector), null != t.appendTo && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new Ia(n, t.eventData);
    }

    _createClass(_class7, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }]);

    return _class7;
  }(), e.Internal = lo, e.JsonRequestError = ci, e.ThirdPartyDraggable =
  /*#__PURE__*/
  function () {
    function _class8(e, t) {
      _classCallCheck(this, _class8);

      var n = document;
      e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
      var r = this.dragging = new Oa(n);
      "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Ia(r, t.eventData);
    }

    _createClass(_class8, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }]);

    return _class8;
  }(), e.createPlugin = mo, e.formatDate = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = ua(t),
        r = gn(t),
        i = n.createMarkerMeta(e);
    return i ? n.format(i.marker, r, {
      forcedTzo: i.forcedTzo
    }) : "";
  }, e.formatRange = function (e, t, n) {
    var r = ua("object" == _typeof(n) && n ? n : {}),
        i = gn(n),
        s = r.createMarkerMeta(e),
        o = r.createMarkerMeta(t);
    return s && o ? r.formatRange(s.marker, o.marker, i, {
      forcedStartTzo: s.forcedTzo,
      forcedEndTzo: o.forcedTzo,
      isEndExclusive: n.isEndExclusive,
      defaultSeparator: mn.defaultRangeSeparator
    }) : "";
  }, e.globalLocales = co, e.globalPlugins = Fo, e.sliceEvents = function (e, t) {
    return Wr(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg;
  }, e.version = "6.0.1", Object.defineProperty(e, "__esModule", {
    value: !0
  }), e;
}({});