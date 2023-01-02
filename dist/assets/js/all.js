/*!
FullCalendar Standard Bundle v6.0.1
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2022 Adam Shaw
*/
var FullCalendar = (function (e) {
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
    for (var n in t) e[n] = t[n];
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
    for (o in n)
      "key" == o ? (i = n[o]) : "ref" == o ? (s = n[o]) : (a[o] = n[o]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? t.call(arguments, 2) : r),
      "function" == typeof e && null != e.defaultProps)
    )
      for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
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
      __v: null == o ? ++r : o,
    };
    return null == o && null != n.vnode && n.vnode(a), a;
  }
  function p(e) {
    return e.children;
  }
  function m(e, t) {
    (this.props = e), (this.context = t);
  }
  function v(e, t) {
    if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? v(e) : null;
  }
  function b(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return b(e);
    }
  }
  function y(e) {
    ((!e.__d && (e.__d = !0) && s.push(e) && !E.__r++) ||
      o !== n.debounceRendering) &&
      ((o = n.debounceRendering) || setTimeout)(E);
  }
  function E() {
    for (var e; (E.__r = s.length); )
      (e = s.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (s = []),
        e.some(function (e) {
          var t, n, r, i, s, o;
          e.__d &&
            ((s = (i = (t = e).__v).__e),
            (o = t.__P) &&
              ((n = []),
              ((r = u({}, i)).__v = i.__v + 1),
              T(
                o,
                i,
                r,
                t.__n,
                void 0 !== o.ownerSVGElement,
                null != i.__h ? [s] : null,
                n,
                null == s ? v(i) : s,
                i.__h
              ),
              k(n, i),
              i.__e != s && b(i)));
        });
  }
  function A(e, t, n, r, i, s, o, a, d, u) {
    var h,
      f,
      m,
      b,
      y,
      E,
      A,
      S = (r && r.__k) || c,
      C = S.length;
    for (n.__k = [], h = 0; h < t.length; h++)
      if (
        null !=
        (b = n.__k[h] =
          null == (b = t[h]) || "boolean" == typeof b
            ? null
            : "string" == typeof b ||
              "number" == typeof b ||
              "bigint" == typeof b
            ? g(null, b, null, null, b)
            : Array.isArray(b)
            ? g(p, { children: b }, null, null, null)
            : b.__b > 0
            ? g(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v)
            : b)
      ) {
        if (
          ((b.__ = n),
          (b.__b = n.__b + 1),
          null === (m = S[h]) || (m && b.key == m.key && b.type === m.type))
        )
          S[h] = void 0;
        else
          for (f = 0; f < C; f++) {
            if ((m = S[f]) && b.key == m.key && b.type === m.type) {
              S[f] = void 0;
              break;
            }
            m = null;
          }
        T(e, b, (m = m || l), i, s, o, a, d, u),
          (y = b.__e),
          (f = b.ref) &&
            m.ref != f &&
            (A || (A = []),
            m.ref && A.push(m.ref, null, b),
            A.push(f, b.__c || y, b)),
          null != y
            ? (null == E && (E = y),
              "function" == typeof b.type && b.__k === m.__k
                ? (b.__d = d = D(b, d, e))
                : (d = w(e, b, m, S, y, d)),
              "function" == typeof n.type && (n.__d = d))
            : d && m.__e == d && d.parentNode != e && (d = v(m));
      }
    for (n.__e = E, h = C; h--; ) null != S[h] && O(S[h], S[h]);
    if (A) for (h = 0; h < A.length; h++) I(A[h], A[++h], A[++h]);
  }
  function D(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++)
      (r = i[s]) &&
        ((r.__ = e),
        (t =
          "function" == typeof r.type ? D(r, t, n) : w(n, r, r, i, r.__e, t)));
    return t;
  }
  function S(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (Array.isArray(e)
          ? e.some(function (e) {
              S(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function w(e, t, n, r, i, s) {
    var o, a, l;
    if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
    else if (null == n || i != s || null == i.parentNode)
      e: if (null == s || s.parentNode !== e) e.appendChild(i), (o = null);
      else {
        for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 1)
          if (a == i) break e;
        e.insertBefore(i, s), (o = s);
      }
    return void 0 !== o ? o : i.nextSibling;
  }
  function C(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px");
  }
  function R(e, t, n, r, i) {
    var s;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || C(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || C(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (s = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + s] = n),
        n
          ? r || e.addEventListener(t, s ? _ : x, s)
          : e.removeEventListener(t, s ? _ : x, s);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" == typeof n ||
        (null == n || (!1 === n && -1 == t.indexOf("-"))
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
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
    null != r.__h &&
      ((c = r.__h), (l = t.__e = r.__e), (t.__h = null), (o = [l])),
      (d = n.__b) && d(t);
    try {
      e: if ("function" == typeof T) {
        if (
          ((E = t.props),
          (D = (d = T.contextType) && i[d.__c]),
          (S = d ? (D ? D.props.value : d.__) : i),
          r.__c
            ? (y = (h = t.__c = r.__c).__ = h.__E)
            : ("prototype" in T && T.prototype.render
                ? (t.__c = h = new T(E, S))
                : ((t.__c = h = new m(E, S)),
                  (h.constructor = T),
                  (h.render = N)),
              D && D.sub(h),
              (h.props = E),
              h.state || (h.state = {}),
              (h.context = S),
              (h.__n = i),
              (f = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          null == h.__s && (h.__s = h.state),
          null != T.getDerivedStateFromProps &&
            (h.__s == h.state && (h.__s = u({}, h.__s)),
            u(h.__s, T.getDerivedStateFromProps(E, h.__s))),
          (g = h.props),
          (v = h.state),
          f)
        )
          null == T.getDerivedStateFromProps &&
            null != h.componentWillMount &&
            h.componentWillMount(),
            null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
          if (
            (null == T.getDerivedStateFromProps &&
              E !== g &&
              null != h.componentWillReceiveProps &&
              h.componentWillReceiveProps(E, S),
            (!h.__e &&
              null != h.shouldComponentUpdate &&
              !1 === h.shouldComponentUpdate(E, h.__s, S)) ||
              t.__v === r.__v)
          ) {
            for (
              h.props = E,
                h.state = h.__s,
                t.__v !== r.__v && (h.__d = !1),
                h.__v = t,
                t.__e = r.__e,
                t.__k = r.__k,
                t.__k.forEach(function (e) {
                  e && (e.__ = t);
                }),
                w = 0;
              w < h._sb.length;
              w++
            )
              h.__h.push(h._sb[w]);
            (h._sb = []), h.__h.length && a.push(h);
            break e;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(E, h.__s, S),
            null != h.componentDidUpdate &&
              h.__h.push(function () {
                h.componentDidUpdate(g, v, b);
              });
        }
        if (
          ((h.context = S),
          (h.props = E),
          (h.__v = t),
          (h.__P = e),
          (C = n.__r),
          (R = 0),
          "prototype" in T && T.prototype.render)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              C && C(t),
              d = h.render(h.props, h.state, h.context),
              x = 0;
            x < h._sb.length;
            x++
          )
            h.__h.push(h._sb[x]);
          h._sb = [];
        } else
          do {
            (h.__d = !1),
              C && C(t),
              (d = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          } while (h.__d && ++R < 25);
        (h.state = h.__s),
          null != h.getChildContext && (i = u(u({}, i), h.getChildContext())),
          f ||
            null == h.getSnapshotBeforeUpdate ||
            (b = h.getSnapshotBeforeUpdate(g, v)),
          (_ =
            null != d && d.type === p && null == d.key ? d.props.children : d),
          A(e, Array.isArray(_) ? _ : [_], t, r, i, s, o, a, l, c),
          (h.base = t.__e),
          (t.__h = null),
          h.__h.length && a.push(h),
          y && (h.__E = h.__ = null),
          (h.__e = !1);
      } else
        null == o && t.__v === r.__v
          ? ((t.__k = r.__k), (t.__e = r.__e))
          : (t.__e = M(r.__e, t, r, i, s, o, a, c));
      (d = n.diffed) && d(t);
    } catch (e) {
      (t.__v = null),
        (c || null != o) &&
          ((t.__e = l), (t.__h = !!c), (o[o.indexOf(l)] = null)),
        n.__e(e, t, r);
    }
  }
  function k(e, t) {
    n.__c && n.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
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
    if (("svg" === m && (s = !0), null != o))
      for (; b < o.length; b++)
        if (
          (d = o[b]) &&
          "setAttribute" in d == !!m &&
          (m ? d.localName === m : 3 === d.nodeType)
        ) {
          (e = d), (o[b] = null);
          break;
        }
    if (null == e) {
      if (null === m) return document.createTextNode(p);
      (e = s
        ? document.createElementNS("http://www.w3.org/2000/svg", m)
        : document.createElement(m, p.is && p)),
        (o = null),
        (c = !1);
    }
    if (null === m) g === p || (c && e.data === p) || (e.data = p);
    else {
      if (
        ((o = o && t.call(e.childNodes)),
        (u = (g = r.props || l).dangerouslySetInnerHTML),
        (f = p.dangerouslySetInnerHTML),
        !c)
      ) {
        if (null != o)
          for (g = {}, b = 0; b < e.attributes.length; b++)
            g[e.attributes[b].name] = e.attributes[b].value;
        (f || u) &&
          ((f && ((u && f.__html == u.__html) || f.__html === e.innerHTML)) ||
            (e.innerHTML = (f && f.__html) || ""));
      }
      if (
        ((function (e, t, n, r, i) {
          var s;
          for (s in n)
            "children" === s || "key" === s || s in t || R(e, s, null, n[s], r);
          for (s in t)
            (i && "function" != typeof t[s]) ||
              "children" === s ||
              "key" === s ||
              "value" === s ||
              "checked" === s ||
              n[s] === t[s] ||
              R(e, s, t[s], n[s], r);
        })(e, p, g, s, c),
        f)
      )
        n.__k = [];
      else if (
        ((b = n.props.children),
        A(
          e,
          Array.isArray(b) ? b : [b],
          n,
          r,
          i,
          s && "foreignObject" !== m,
          o,
          a,
          o ? o[0] : r.__k && v(r, 0),
          c
        ),
        null != o)
      )
        for (b = o.length; b--; ) null != o[b] && h(o[b]);
      c ||
        ("value" in p &&
          void 0 !== (b = p.value) &&
          (b !== e.value ||
            ("progress" === m && !b) ||
            ("option" === m && b !== g.value)) &&
          R(e, "value", b, g.value, !1),
        "checked" in p &&
          void 0 !== (b = p.checked) &&
          b !== e.checked &&
          R(e, "checked", b, g.checked, !1));
    }
    return e;
  }
  function I(e, t, r) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      n.__e(e, r);
    }
  }
  function O(e, t, r) {
    var i, s;
    if (
      (n.unmount && n.unmount(e),
      (i = e.ref) && ((i.current && i.current !== e.__e) || I(i, null, t)),
      null != (i = e.__c))
    ) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (e) {
          n.__e(e, t);
        }
      (i.base = i.__P = null), (e.__c = void 0);
    }
    if ((i = e.__k))
      for (s = 0; s < i.length; s++)
        i[s] && O(i[s], t, r || "function" != typeof e.type);
    r || null == e.__e || h(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function N(e, t, n) {
    return this.constructor(e, n);
  }
  function P(e, r, i) {
    var s, o, a;
    n.__ && n.__(e, r),
      (o = (s = "function" == typeof i) ? null : (i && i.__k) || r.__k),
      (a = []),
      T(
        r,
        (e = ((!s && i) || r).__k = f(p, null, [e])),
        o || l,
        l,
        void 0 !== r.ownerSVGElement,
        !s && i ? [i] : o ? null : r.firstChild ? t.call(r.childNodes) : null,
        a,
        !s && i ? i : o ? o.__e : r.firstChild,
        s
      ),
      k(a, e);
  }
  (t = c.slice),
    (n = {
      __e: function (e, t, n, r) {
        for (var i, s, o; (t = t.__); )
          if ((i = t.__c) && !i.__)
            try {
              if (
                ((s = i.constructor) &&
                  null != s.getDerivedStateFromError &&
                  (i.setState(s.getDerivedStateFromError(e)), (o = i.__d)),
                null != i.componentDidCatch &&
                  (i.componentDidCatch(e, r || {}), (o = i.__d)),
                o)
              )
                return (i.__E = i);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (r = 0),
    (i = function (e) {
      return null != e && void 0 === e.constructor;
    }),
    (m.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = u({}, this.state))),
        "function" == typeof e && (e = e(u({}, n), this.props)),
        e && u(n, e),
        null != e && this.__v && (t && this._sb.push(t), y(this));
    }),
    (m.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), y(this));
    }),
    (m.prototype.render = p),
    (s = []),
    (E.__r = 0),
    (a = 0);
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
    for (var e; (e = z.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Z), e.__H.__h.forEach(X), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), n.__e(t, e.__v);
        }
  }
  (n.__b = function (e) {
    (H = null), L && L(e);
  }),
    (n.__r = function (e) {
      W && W(e);
      var t = (H = e.__c).__H;
      t &&
        (B === H
          ? ((t.__h = []),
            (H.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.__V = U), (e.__N = e.i = void 0);
            }))
          : (t.__h.forEach(Z), t.__h.forEach(X), (t.__h = []))),
        (B = H);
    }),
    (n.diffed = function (e) {
      F && F(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== z.push(t) && j === n.requestAnimationFrame) ||
            ((j = n.requestAnimationFrame) || Y)(Q)),
        t.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i),
            e.__V !== U && (e.__ = e.__V),
            (e.i = void 0),
            (e.__V = U);
        })),
        (B = H = null);
    }),
    (n.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Z),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || X(e);
            }));
        } catch (r) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            n.__e(r, e.__v);
        }
      }),
        V && V(e, t);
    }),
    (n.unmount = function (e) {
      G && G(e);
      var t,
        r = e.__c;
      r &&
        r.__H &&
        (r.__H.__.forEach(function (e) {
          try {
            Z(e);
          } catch (e) {
            t = e;
          }
        }),
        (r.__H = void 0),
        t && n.__e(t, r.__v));
    });
  var q = "function" == typeof requestAnimationFrame;
  function Y(e) {
    var t,
      n = function () {
        clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    q && (t = requestAnimationFrame(n));
  }
  function Z(e) {
    var t = H,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (H = t);
  }
  function X(e) {
    var t = H;
    (e.__c = e.__()), (H = t);
  }
  function J(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
  }
  function $(e) {
    this.props = e;
  }
  (($.prototype = new m()).isPureReactComponent = !0),
    ($.prototype.shouldComponentUpdate = function (e, t) {
      return J(this.props, e) || J(this.state, t);
    });
  var K = n.__b;
  n.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      K && K(e);
  };
  var ee = n.__e;
  n.__e = function (e, t, n, r) {
    if (e.then)
      for (var i, s = t; (s = s.__); )
        if ((i = s.__c) && i.__c)
          return (
            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t)
          );
    ee(e, t, n, r);
  };
  var te = n.unmount;
  function ne() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function re(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function ie() {
    (this.u = null), (this.o = null);
  }
  (n.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), te && te(e);
  }),
    ((ne.prototype = new m()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      null == r.t && (r.t = []), r.t.push(n);
      var i = re(r.__v),
        s = !1,
        o = function () {
          s || ((s = !0), (n.__R = null), i ? i(a) : a());
        };
      n.__R = o;
      var a = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var e = r.state.__a;
              r.__v.__k[0] = (function e(t, n, r) {
                return (
                  t &&
                    ((t.__v = null),
                    (t.__k =
                      t.__k &&
                      t.__k.map(function (t) {
                        return e(t, n, r);
                      })),
                    t.__c &&
                      t.__c.__P === n &&
                      (t.__e && r.insertBefore(t.__e, t.__d),
                      (t.__c.__e = !0),
                      (t.__c.__P = r))),
                  t
                );
              })(e, e.__c.__P, e.__c.__O);
            }
            var t;
            for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
              t.forceUpdate();
          }
        },
        l = !0 === t.__h;
      r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(o, o);
    }),
    (ne.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (ne.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = (function e(t, n, r) {
            return (
              t &&
                (t.__c &&
                  t.__c.__H &&
                  (t.__c.__H.__.forEach(function (e) {
                    "function" == typeof e.__c && e.__c();
                  }),
                  (t.__c.__H = null)),
                null !=
                  (t = (function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  })({}, t)).__c &&
                  (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                (t.__k =
                  t.__k &&
                  t.__k.map(function (t) {
                    return e(t, n, r);
                  }))),
              t
            );
          })(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var i = t.__a && f(p, null, e.fallback);
      return i && (i.__h = null), [f(p, null, t.__a ? null : e.children), i];
    });
  var se = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function oe(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function ae(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      P(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                  t.i.removeChild(e);
              },
            })),
          P(f(oe, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  ((ie.prototype = new m()).__a = function (e) {
    var t = this,
      n = re(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (i) {
        var s = function () {
          t.props.revealOrder ? (r.push(i), se(t, e, r)) : i();
        };
        n ? n(s) : s();
      }
    );
  }),
    (ie.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = S(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (ie.prototype.componentDidUpdate = ie.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          se(e, n, t);
        });
      });
  var le =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    ce =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    de = "undefined" != typeof document,
    ue = function (e) {
      return (
        "undefined" != typeof Symbol && "symbol" == typeof Symbol()
          ? /fil|che|rad/i
          : /fil|che|ra/i
      ).test(e);
    };
  (m.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(m.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
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
    return (
      he && (e = he(e)),
      (e.persist = fe),
      (e.isPropagationStopped = ge),
      (e.isDefaultPrevented = pe),
      (e.nativeEvent = e)
    );
  };
  var me = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    ve = n.vnode;
  n.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if ("string" == typeof t) {
      var i = -1 === t.indexOf("-");
      for (var s in ((r = {}), n)) {
        var o = n[s];
        (de && "children" === s && "noscript" === t) ||
          ("value" === s && "defaultValue" in n && null == o) ||
          ("defaultValue" === s && "value" in n && null == n.value
            ? (s = "value")
            : "download" === s && !0 === o
            ? (o = "")
            : /ondoubleclick/i.test(s)
            ? (s = "ondblclick")
            : /^onchange(textarea|input)/i.test(s + t) && !ue(n.type)
            ? (s = "oninput")
            : /^onfocus$/i.test(s)
            ? (s = "onfocusin")
            : /^onblur$/i.test(s)
            ? (s = "onfocusout")
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
            ? (s = s.toLowerCase())
            : i && ce.test(s)
            ? (s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
            : null === o && (o = void 0),
          /^oninput$/i.test(s) &&
            ((s = s.toLowerCase()), r[s] && (s = "oninputCapture")),
          (r[s] = o));
      }
      "select" == t &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = S(n.children).forEach(function (e) {
          e.props.selected = -1 != r.value.indexOf(e.props.value);
        })),
        "select" == t &&
          null != r.defaultValue &&
          (r.value = S(n.children).forEach(function (e) {
            e.props.selected = r.multiple
              ? -1 != r.defaultValue.indexOf(e.props.value)
              : r.defaultValue == e.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((me.enumerable = "className" in n),
          null != n.className && (r.class = n.className),
          Object.defineProperty(r, "className", me));
    }
    (e.$$typeof = le), ve && ve(e);
  };
  var be = n.__r;
  function ye(e) {
    if (!e || "undefined" == typeof document) return;
    const t = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    (n.type = "text/css"),
      t.appendChild(n),
      n.styleSheet
        ? (n.styleSheet.cssText = e)
        : n.appendChild(document.createTextNode(e));
  }
  n.__r = function (e) {
    be && be(e), e.__c;
  };
  class Ee {
    constructor(e) {
      (this.drainedOption = e),
        (this.isRunning = !1),
        (this.isDirty = !1),
        (this.pauseDepths = {}),
        (this.timeoutId = 0);
    }
    request(e) {
      (this.isDirty = !0),
        this.isPaused() ||
          (this.clearTimeout(),
          null == e
            ? this.tryDrain()
            : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
    }
    pause(e = "") {
      let { pauseDepths: t } = this;
      (t[e] = (t[e] || 0) + 1), this.clearTimeout();
    }
    resume(e = "", t) {
      let { pauseDepths: n } = this;
      if (e in n) {
        if (t) delete n[e];
        else {
          (n[e] -= 1), n[e] <= 0 && delete n[e];
        }
        this.tryDrain();
      }
    }
    isPaused() {
      return Object.keys(this.pauseDepths).length;
    }
    tryDrain() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty; )
          (this.isDirty = !1), this.drained();
        this.isRunning = !1;
      }
    }
    clear() {
      this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
    }
    clearTimeout() {
      this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
    }
    drained() {
      this.drainedOption && this.drainedOption();
    }
  }
  const { hasOwnProperty: Ae } = Object.prototype;
  function De(e, t) {
    let n = {};
    if (t)
      for (let r in t) {
        let t = [];
        for (let i = e.length - 1; i >= 0; i -= 1) {
          let s = e[i][r];
          if ("object" == typeof s && s) t.unshift(s);
          else if (void 0 !== s) {
            n[r] = s;
            break;
          }
        }
        t.length && (n[r] = De(t));
      }
    for (let t = e.length - 1; t >= 0; t -= 1) {
      let r = e[t];
      for (let e in r) e in n || (n[e] = r[e]);
    }
    return n;
  }
  function Se(e, t) {
    let n = {};
    for (let r in e) t(e[r], r) && (n[r] = e[r]);
    return n;
  }
  function we(e, t) {
    let n = {};
    for (let r in e) n[r] = t(e[r], r);
    return n;
  }
  function Ce(e) {
    let t = {};
    for (let n of e) t[n] = !0;
    return t;
  }
  function Re(e) {
    let t = [];
    for (let n in e) t.push(e[n]);
    return t;
  }
  function xe(e, t) {
    if (e === t) return !0;
    for (let n in e) if (Ae.call(e, n) && !(n in t)) return !1;
    for (let n in t) if (Ae.call(t, n) && e[n] !== t[n]) return !1;
    return !0;
  }
  function _e(e, t) {
    let n = [];
    for (let r in e) Ae.call(e, r) && (r in t || n.push(r));
    for (let r in t) Ae.call(t, r) && e[r] !== t[r] && n.push(r);
    return n;
  }
  function Te(e, t, n = {}) {
    if (e === t) return !0;
    for (let r in t) if (!(r in e) || !ke(e[r], t[r], n[r])) return !1;
    for (let n in e) if (!(n in t)) return !1;
    return !0;
  }
  function ke(e, t, n) {
    return e === t || !0 === n || (!!n && n(e, t));
  }
  function Me(e, t = 0, n, r = 1) {
    let i = [];
    null == n && (n = Object.keys(e).length);
    for (let s = t; s < n; s += r) {
      let t = e[s];
      void 0 !== t && i.push(t);
    }
    return i;
  }
  function Ie(e, t, n) {
    if (e === t) return !0;
    let r,
      i = e.length;
    if (i !== t.length) return !1;
    for (r = 0; r < i; r += 1)
      if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    return !0;
  }
  function Oe(e, t, n) {
    let r, i;
    return function (...s) {
      if (r) {
        if (!Ie(r, s)) {
          n && n(i);
          let r = e.apply(this, s);
          (t && t(r, i)) || (i = r);
        }
      } else i = e.apply(this, s);
      return (r = s), i;
    };
  }
  function Ne(e, t, n) {
    let r, i;
    return (s) => {
      if (r) {
        if (!xe(r, s)) {
          n && n(i);
          let r = e.call(this, s);
          (t && t(r, i)) || (i = r);
        }
      } else i = e.call(this, s);
      return (r = s), i;
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
    let n = e instanceof HTMLElement ? [e] : e,
      r = [];
    for (let e = 0; e < n.length; e += 1) {
      let i = n[e].querySelectorAll(t);
      for (let e = 0; e < i.length; e += 1) r.push(i[e]);
    }
    return r;
  }
  const ze = /(top|left|right|bottom|width|height)$/i;
  function Ue(e, t) {
    for (let n in t) Le(e, n, t[n]);
  }
  function Le(e, t, n) {
    null == n
      ? (e.style[t] = "")
      : "number" == typeof n && ze.test(t)
      ? (e.style[t] = n + "px")
      : (e.style[t] = n);
  }
  function We(e) {
    var t, n;
    return null !==
      (n =
        null === (t = e.composedPath) || void 0 === t
          ? void 0
          : t.call(e)[0]) && void 0 !== n
      ? n
      : e.target;
  }
  function Fe(e) {
    return e.getRootNode ? e.getRootNode() : document;
  }
  let Ve = 0;
  function Ge() {
    return (Ve += 1), "fc-dom-" + Ve;
  }
  function Qe(e) {
    e.preventDefault();
  }
  function qe(e, t, n, r) {
    let i = (function (e, t) {
      return (n) => {
        let r = He(n.target, e);
        r && t.call(r, n, r);
      };
    })(n, r);
    return (
      e.addEventListener(t, i),
      () => {
        e.removeEventListener(t, i);
      }
    );
  }
  const Ye = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend",
  ];
  function Ze(e, t) {
    let n = (r) => {
      t(r),
        Ye.forEach((t) => {
          e.removeEventListener(t, n);
        });
    };
    Ye.forEach((t) => {
      e.addEventListener(t, n);
    });
  }
  function Xe(e) {
    return Object.assign({ onClick: e }, Je(e));
  }
  function Je(e) {
    return {
      tabIndex: 0,
      onKeyDown(t) {
        ("Enter" !== t.key && " " !== t.key) || (e(t), t.preventDefault());
      },
    };
  }
  let $e = 0;
  function Ke() {
    return ($e += 1), String($e);
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
    e.classList.remove("fc-unselectable"),
      e.removeEventListener("selectstart", Qe);
  }
  function it(e) {
    e.addEventListener("contextmenu", Qe);
  }
  function st(e) {
    e.removeEventListener("contextmenu", Qe);
  }
  function ot(e) {
    let t,
      n,
      r = [],
      i = [];
    for (
      "string" == typeof e
        ? (i = e.split(/\s*,\s*/))
        : "function" == typeof e
        ? (i = [e])
        : Array.isArray(e) && (i = e),
        t = 0;
      t < i.length;
      t += 1
    )
      (n = i[t]),
        "string" == typeof n
          ? r.push(
              "-" === n.charAt(0)
                ? { field: n.substring(1), order: -1 }
                : { field: n, order: 1 }
            )
          : "function" == typeof n && r.push({ func: n });
    return r;
  }
  function at(e, t, n) {
    let r, i;
    for (r = 0; r < n.length; r += 1) if (((i = lt(e, t, n[r])), i)) return i;
    return 0;
  }
  function lt(e, t, n) {
    return n.func ? n.func(e, t) : ct(e[n.field], t[n.field]) * (n.order || 1);
  }
  function ct(e, t) {
    return e || t
      ? null == t
        ? -1
        : null == e
        ? 1
        : "string" == typeof e || "string" == typeof t
        ? String(e).localeCompare(String(t))
        : e - t
      : 0;
  }
  function dt(e, t) {
    let n = String(e);
    return "000".substr(0, t - n.length) + n;
  }
  function ut(e, t, n) {
    return "function" == typeof e
      ? e(...t)
      : "string" == typeof e
      ? t.reduce((e, t, n) => e.replace("$" + n, t || ""), e)
      : n;
  }
  function ht(e, t) {
    return e - t;
  }
  function ft(e) {
    return e % 1 == 0;
  }
  function gt(e) {
    let t = e.querySelector(".fc-scrollgrid-shrink-frame"),
      n = e.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return (
      e.getBoundingClientRect().width -
      t.getBoundingClientRect().width +
      n.getBoundingClientRect().width
    );
  }
  const pt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function mt(e, t) {
    let n = Tt(e);
    return (n[2] += 7 * t), kt(n);
  }
  function vt(e, t) {
    let n = Tt(e);
    return (n[2] += t), kt(n);
  }
  function bt(e, t) {
    let n = Tt(e);
    return (n[6] += t), kt(n);
  }
  function yt(e, t) {
    return Et(e, t) / 7;
  }
  function Et(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }
  function At(e, t) {
    let n = wt(e),
      r = wt(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(Et(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
    };
  }
  function Dt(e, t) {
    let n = St(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }
  function St(e, t) {
    return It(e) === It(t) ? Math.round(Et(e, t)) : null;
  }
  function wt(e) {
    return kt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }
  function Ct(e, t, n, r) {
    let i = kt([t, 0, 1 + Rt(t, n, r)]),
      s = wt(e),
      o = Math.round(Et(i, s));
    return Math.floor(o / 7) + 1;
  }
  function Rt(e, t, n) {
    let r = 7 + t - n;
    return -((7 + kt([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }
  function xt(e) {
    return [
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ];
  }
  function _t(e) {
    return new Date(
      e[0],
      e[1] || 0,
      null == e[2] ? 1 : e[2],
      e[3] || 0,
      e[4] || 0,
      e[5] || 0
    );
  }
  function Tt(e) {
    return [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds(),
    ];
  }
  function kt(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC(...e));
  }
  function Mt(e) {
    return !isNaN(e.valueOf());
  }
  function It(e) {
    return (
      1e3 * e.getUTCHours() * 60 * 60 +
      1e3 * e.getUTCMinutes() * 60 +
      1e3 * e.getUTCSeconds() +
      e.getUTCMilliseconds()
    );
  }
  let Ot = {};
  var Nt, Pt;
  (Nt = "gregory"),
    (Pt = class {
      getMarkerYear(e) {
        return e.getUTCFullYear();
      }
      getMarkerMonth(e) {
        return e.getUTCMonth();
      }
      getMarkerDay(e) {
        return e.getUTCDate();
      }
      arrayToMarker(e) {
        return kt(e);
      }
      markerToArray(e) {
        return Tt(e);
      }
    }),
    (Ot[Nt] = Pt);
  const Ht = ["years", "months", "days", "milliseconds"],
    Bt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function jt(e, t) {
    return "string" == typeof e
      ? (function (e) {
          let t = Bt.exec(e);
          if (t) {
            let e = t[1] ? -1 : 1;
            return {
              years: 0,
              months: 0,
              days: e * (t[2] ? parseInt(t[2], 10) : 0),
              milliseconds:
                e *
                (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                  (t[6] ? parseInt(t[6], 10) : 0)),
            };
          }
          return null;
        })(e)
      : "object" == typeof e && e
      ? zt(e)
      : "number" == typeof e
      ? zt({ [t || "milliseconds"]: e })
      : null;
  }
  function zt(e) {
    let t = {
        years: e.years || e.year || 0,
        months: e.months || e.month || 0,
        days: e.days || e.day || 0,
        milliseconds:
          60 * (e.hours || e.hour || 0) * 60 * 1e3 +
          60 * (e.minutes || e.minute || 0) * 1e3 +
          1e3 * (e.seconds || e.second || 0) +
          (e.milliseconds || e.millisecond || e.ms || 0),
      },
      n = e.weeks || e.week;
    return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
  }
  function Ut(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds,
    };
  }
  function Lt(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t,
    };
  }
  function Wt(e) {
    return Ft(e) / 864e5;
  }
  function Ft(e) {
    return (
      31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    );
  }
  function Vt(e, t) {
    let n = null;
    for (let r = 0; r < Ht.length; r += 1) {
      let i = Ht[r];
      if (t[i]) {
        let r = e[i] / t[i];
        if (!ft(r) || (null !== n && n !== r)) return null;
        n = r;
      } else if (e[i]) return null;
    }
    return n;
  }
  function Gt(e) {
    let t = e.milliseconds;
    if (t) {
      if (t % 1e3 != 0) return { unit: "millisecond", value: t };
      if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
      if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
      if (t) return { unit: "hour", value: t / 36e5 };
    }
    return e.days
      ? e.specifiedWeeks && e.days % 7 == 0
        ? { unit: "week", value: e.days / 7 }
        : { unit: "day", value: e.days }
      : e.months
      ? { unit: "month", value: e.months }
      : e.years
      ? { unit: "year", value: e.years }
      : { unit: "millisecond", value: 0 };
  }
  function Qt(e, t, n = !1) {
    let r = e.toISOString();
    return (
      (r = r.replace(".000", "")),
      n && (r = r.replace("T00:00:00Z", "")),
      r.length > 10 &&
        (null == t
          ? (r = r.replace("Z", ""))
          : 0 !== t && (r = r.replace("Z", Zt(t, !0)))),
      r
    );
  }
  function qt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }
  function Yt(e) {
    return (
      dt(e.getUTCHours(), 2) +
      ":" +
      dt(e.getUTCMinutes(), 2) +
      ":" +
      dt(e.getUTCSeconds(), 2)
    );
  }
  function Zt(e, t = !1) {
    let n = e < 0 ? "-" : "+",
      r = Math.abs(e),
      i = Math.floor(r / 60),
      s = Math.round(r % 60);
    return t
      ? `${n + dt(i, 2)}:${dt(s, 2)}`
      : `GMT${n}${i}${s ? ":" + dt(s, 2) : ""}`;
  }
  const Xt =
    /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function Jt(e) {
    let t = Xt.exec(e);
    if (t) {
      let e = new Date(
        Date.UTC(
          Number(t[1]),
          t[3] ? Number(t[3]) - 1 : 0,
          Number(t[5] || 1),
          Number(t[7] || 0),
          Number(t[8] || 0),
          Number(t[10] || 0),
          t[12] ? 1e3 * Number("0." + t[12]) : 0
        )
      );
      if (Mt(e)) {
        let n = null;
        return (
          t[13] &&
            (n =
              ("-" === t[15] ? -1 : 1) *
              (60 * Number(t[16] || 0) + Number(t[18] || 0))),
          { marker: e, isTimeUnspecified: !t[6], timeZoneOffset: n }
        );
      }
    }
    return null;
  }
  class $t {
    constructor(e) {
      let t = (this.timeZone = e.timeZone),
        n = "local" !== t && "UTC" !== t;
      e.namedTimeZoneImpl &&
        n &&
        (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
        (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
        (this.calendarSystem = (function (e) {
          return new Ot[e]();
        })(e.calendarSystem)),
        (this.locale = e.locale),
        (this.weekDow = e.locale.week.dow),
        (this.weekDoy = e.locale.week.doy),
        "ISO" === e.weekNumberCalculation &&
          ((this.weekDow = 1), (this.weekDoy = 4)),
        "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
        "function" == typeof e.weekNumberCalculation &&
          (this.weekNumberFunc = e.weekNumberCalculation),
        (this.weekText =
          null != e.weekText ? e.weekText : e.locale.options.weekText),
        (this.weekTextLong =
          (null != e.weekTextLong
            ? e.weekTextLong
            : e.locale.options.weekTextLong) || this.weekText),
        (this.cmdFormatter = e.cmdFormatter),
        (this.defaultSeparator = e.defaultSeparator);
    }
    createMarker(e) {
      let t = this.createMarkerMeta(e);
      return null === t ? null : t.marker;
    }
    createNowMarker() {
      return this.canComputeOffset
        ? this.timestampToMarker(new Date().valueOf())
        : kt(xt(new Date()));
    }
    createMarkerMeta(e) {
      if ("string" == typeof e) return this.parse(e);
      let t = null;
      return (
        "number" == typeof e
          ? (t = this.timestampToMarker(e))
          : e instanceof Date
          ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e)))
          : Array.isArray(e) && (t = kt(e)),
        null !== t && Mt(t)
          ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
          : null
      );
    }
    parse(e) {
      let t = Jt(e);
      if (null === t) return null;
      let { marker: n } = t,
        r = null;
      return (
        null !== t.timeZoneOffset &&
          (this.canComputeOffset
            ? (n = this.timestampToMarker(
                n.valueOf() - 60 * t.timeZoneOffset * 1e3
              ))
            : (r = t.timeZoneOffset)),
        { marker: n, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: r }
      );
    }
    getYear(e) {
      return this.calendarSystem.getMarkerYear(e);
    }
    getMonth(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }
    add(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (
        (n[0] += t.years),
        (n[1] += t.months),
        (n[2] += t.days),
        (n[6] += t.milliseconds),
        this.calendarSystem.arrayToMarker(n)
      );
    }
    subtract(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (
        (n[0] -= t.years),
        (n[1] -= t.months),
        (n[2] -= t.days),
        (n[6] -= t.milliseconds),
        this.calendarSystem.arrayToMarker(n)
      );
    }
    addYears(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (n[0] += t), this.calendarSystem.arrayToMarker(n);
    }
    addMonths(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (n[1] += t), this.calendarSystem.arrayToMarker(n);
    }
    diffWholeYears(e, t) {
      let { calendarSystem: n } = this;
      return It(e) === It(t) &&
        n.getMarkerDay(e) === n.getMarkerDay(t) &&
        n.getMarkerMonth(e) === n.getMarkerMonth(t)
        ? n.getMarkerYear(t) - n.getMarkerYear(e)
        : null;
    }
    diffWholeMonths(e, t) {
      let { calendarSystem: n } = this;
      return It(e) === It(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
        ? n.getMarkerMonth(t) -
            n.getMarkerMonth(e) +
            12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
        : null;
    }
    greatestWholeUnit(e, t) {
      let n = this.diffWholeYears(e, t);
      return null !== n
        ? { unit: "year", value: n }
        : ((n = this.diffWholeMonths(e, t)),
          null !== n
            ? { unit: "month", value: n }
            : ((n = Dt(e, t)),
              null !== n
                ? { unit: "week", value: n }
                : ((n = St(e, t)),
                  null !== n
                    ? { unit: "day", value: n }
                    : ((n = (function (e, t) {
                        return (t.valueOf() - e.valueOf()) / 36e5;
                      })(e, t)),
                      ft(n)
                        ? { unit: "hour", value: n }
                        : ((n = (function (e, t) {
                            return (t.valueOf() - e.valueOf()) / 6e4;
                          })(e, t)),
                          ft(n)
                            ? { unit: "minute", value: n }
                            : ((n = (function (e, t) {
                                return (t.valueOf() - e.valueOf()) / 1e3;
                              })(e, t)),
                              ft(n)
                                ? { unit: "second", value: n }
                                : {
                                    unit: "millisecond",
                                    value: t.valueOf() - e.valueOf(),
                                  }))))));
    }
    countDurationsBetween(e, t, n) {
      let r;
      return n.years && ((r = this.diffWholeYears(e, t)), null !== r)
        ? r / (Wt(n) / 365)
        : n.months && ((r = this.diffWholeMonths(e, t)), null !== r)
        ? r /
          (function (e) {
            return Wt(e) / 30;
          })(n)
        : n.days && ((r = St(e, t)), null !== r)
        ? r / Wt(n)
        : (t.valueOf() - e.valueOf()) / Ft(n);
    }
    startOf(e, t) {
      return "year" === t
        ? this.startOfYear(e)
        : "month" === t
        ? this.startOfMonth(e)
        : "week" === t
        ? this.startOfWeek(e)
        : "day" === t
        ? wt(e)
        : "hour" === t
        ? (function (e) {
            return kt([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
            ]);
          })(e)
        : "minute" === t
        ? (function (e) {
            return kt([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
            ]);
          })(e)
        : "second" === t
        ? (function (e) {
            return kt([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
            ]);
          })(e)
        : null;
    }
    startOfYear(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
      ]);
    }
    startOfMonth(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
      ]);
    }
    startOfWeek(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
      ]);
    }
    computeWeekNumber(e) {
      return this.weekNumberFunc
        ? this.weekNumberFunc(this.toDate(e))
        : (function (e, t, n) {
            let r = e.getUTCFullYear(),
              i = Ct(e, r, t, n);
            if (i < 1) return Ct(e, r - 1, t, n);
            let s = Ct(e, r + 1, t, n);
            return s >= 1 ? Math.min(i, s) : i;
          })(e, this.weekDow, this.weekDoy);
    }
    format(e, t, n = {}) {
      return t.format(
        {
          marker: e,
          timeZoneOffset:
            null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e),
        },
        this
      );
    }
    formatRange(e, t, n, r = {}) {
      return (
        r.isEndExclusive && (t = bt(t, -1)),
        n.formatRange(
          {
            marker: e,
            timeZoneOffset:
              null != r.forcedStartTzo
                ? r.forcedStartTzo
                : this.offsetForMarker(e),
          },
          {
            marker: t,
            timeZoneOffset:
              null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t),
          },
          this,
          r.defaultSeparator
        )
      );
    }
    formatIso(e, t = {}) {
      let n = null;
      return (
        t.omitTimeZoneOffset ||
          (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
        Qt(e, n, t.omitTime)
      );
    }
    timestampToMarker(e) {
      return "local" === this.timeZone
        ? kt(xt(new Date(e)))
        : "UTC" !== this.timeZone && this.namedTimeZoneImpl
        ? kt(this.namedTimeZoneImpl.timestampToArray(e))
        : new Date(e);
    }
    offsetForMarker(e) {
      return "local" === this.timeZone
        ? -_t(Tt(e)).getTimezoneOffset()
        : "UTC" === this.timeZone
        ? 0
        : this.namedTimeZoneImpl
        ? this.namedTimeZoneImpl.offsetForArray(Tt(e))
        : null;
    }
    toDate(e, t) {
      return "local" === this.timeZone
        ? _t(Tt(e))
        : "UTC" === this.timeZone
        ? new Date(e.valueOf())
        : this.namedTimeZoneImpl
        ? new Date(
            e.valueOf() -
              1e3 * this.namedTimeZoneImpl.offsetForArray(Tt(e)) * 60
          )
        : new Date(e.valueOf() - (t || 0));
    }
  }
  class Kt {
    constructor(e) {
      this.iconOverrideOption &&
        this.setIconOverride(e[this.iconOverrideOption]);
    }
    setIconOverride(e) {
      let t, n;
      if ("object" == typeof e && e) {
        for (n in ((t = Object.assign({}, this.iconClasses)), e))
          t[n] = this.applyIconOverridePrefix(e[n]);
        this.iconClasses = t;
      } else !1 === e && (this.iconClasses = {});
    }
    applyIconOverridePrefix(e) {
      let t = this.iconOverridePrefix;
      return t && 0 !== e.indexOf(t) && (e = t + e), e;
    }
    getClass(e) {
      return this.classes[e] || "";
    }
    getIconClass(e, t) {
      let n;
      return (
        (n =
          (t && this.rtlIconClasses && this.rtlIconClasses[e]) ||
          this.iconClasses[e]),
        n ? `${this.baseIconClass} ${n}` : ""
      );
    }
    getCustomButtonIconClass(e) {
      let t;
      return this.iconOverrideCustomButtonOption &&
        ((t = e[this.iconOverrideCustomButtonOption]), t)
        ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}`
        : "";
    }
  }
  (Kt.prototype.classes = {}),
    (Kt.prototype.iconClasses = {}),
    (Kt.prototype.baseIconClass = ""),
    (Kt.prototype.iconOverridePrefix = "");
  const en = {
      week: 3,
      separator: 0,
      omitZeroMinute: 0,
      meridiem: 0,
      omitCommas: 0,
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
      second: 1,
    },
    nn = /\s*([ap])\.?m\.?/i,
    rn = /,/g,
    sn = /\s+/g,
    on = /\u200e/g,
    an = /UTC|GMT/;
  class ln {
    constructor(e) {
      let t = {},
        n = {},
        r = 0;
      for (let i in e)
        i in en
          ? ((n[i] = e[i]), (r = Math.max(en[i], r)))
          : ((t[i] = e[i]), i in tn && (r = Math.max(tn[i], r)));
      (this.standardDateProps = t),
        (this.extendedSettings = n),
        (this.severity = r),
        (this.buildFormattingFunc = Oe(cn));
    }
    format(e, t) {
      return this.buildFormattingFunc(
        this.standardDateProps,
        this.extendedSettings,
        t
      )(e);
    }
    formatRange(e, t, n, r) {
      let { standardDateProps: i, extendedSettings: s } = this,
        o = (function (e, t, n) {
          if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
          if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
          if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
          if (It(e) !== It(t)) return 1;
          return 0;
        })(e.marker, t.marker, n.calendarSystem);
      if (!o) return this.format(e, n);
      let a = o;
      !(a > 1) ||
        ("numeric" !== i.year && "2-digit" !== i.year) ||
        ("numeric" !== i.month && "2-digit" !== i.month) ||
        ("numeric" !== i.day && "2-digit" !== i.day) ||
        (a = 1);
      let l = this.format(e, n),
        c = this.format(t, n);
      if (l === c) return l;
      let d = cn(
          (function (e, t) {
            let n = {};
            for (let r in e) (!(r in tn) || tn[r] <= t) && (n[r] = e[r]);
            return n;
          })(i, a),
          s,
          n
        ),
        u = d(e),
        h = d(t),
        f = (function (e, t, n, r) {
          let i = 0;
          for (; i < e.length; ) {
            let s = e.indexOf(t, i);
            if (-1 === s) break;
            let o = e.substr(0, s);
            i = s + t.length;
            let a = e.substr(i),
              l = 0;
            for (; l < n.length; ) {
              let e = n.indexOf(r, l);
              if (-1 === e) break;
              let t = n.substr(0, e);
              l = e + r.length;
              let i = n.substr(l);
              if (o === t && a === i) return { before: o, after: a };
            }
          }
          return null;
        })(l, u, c, h),
        g = s.separator || r || n.defaultSeparator || "";
      return f ? f.before + u + g + h + f.after : l + g + c;
    }
    getLargestUnit() {
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
  }
  function cn(e, t, n) {
    let r = Object.keys(e).length;
    return 1 === r && "short" === e.timeZoneName
      ? (e) => Zt(e.timeZoneOffset)
      : 0 === r && t.week
      ? (e) =>
          (function (e, t, n, r, i) {
            let s = [];
            "long" === i
              ? s.push(n)
              : ("short" !== i && "narrow" !== i) || s.push(t);
            ("long" !== i && "short" !== i) || s.push(" ");
            s.push(r.simpleNumberFormat.format(e)),
              "rtl" === r.options.direction && s.reverse();
            return s.join("");
          })(
            n.computeWeekNumber(e.marker),
            n.weekText,
            n.weekTextLong,
            n.locale,
            t.week
          )
      : (function (e, t, n) {
          (e = Object.assign({}, e)),
            (t = Object.assign({}, t)),
            (function (e, t) {
              e.timeZoneName &&
                (e.hour || (e.hour = "2-digit"),
                e.minute || (e.minute = "2-digit"));
              "long" === e.timeZoneName && (e.timeZoneName = "short");
              t.omitZeroMinute &&
                (e.second || e.millisecond) &&
                delete t.omitZeroMinute;
            })(e, t),
            (e.timeZone = "UTC");
          let r,
            i = new Intl.DateTimeFormat(n.locale.codes, e);
          if (t.omitZeroMinute) {
            let t = Object.assign({}, e);
            delete t.minute, (r = new Intl.DateTimeFormat(n.locale.codes, t));
          }
          return (s) => {
            let o,
              { marker: a } = s;
            return (
              (o = r && !a.getUTCMinutes() ? r : i),
              (function (e, t, n, r, i) {
                (e = e.replace(on, "")),
                  "short" === n.timeZoneName &&
                    (e = (function (e, t) {
                      let n = !1;
                      (e = e.replace(an, () => ((n = !0), t))),
                        n || (e += " " + t);
                      return e;
                    })(
                      e,
                      "UTC" === i.timeZone || null == t.timeZoneOffset
                        ? "UTC"
                        : Zt(t.timeZoneOffset)
                    ));
                r.omitCommas && (e = e.replace(rn, "").trim());
                r.omitZeroMinute && (e = e.replace(":00", ""));
                !1 === r.meridiem
                  ? (e = e.replace(nn, "").trim())
                  : "narrow" === r.meridiem
                  ? (e = e.replace(nn, (e, t) => t.toLocaleLowerCase()))
                  : "short" === r.meridiem
                  ? (e = e.replace(nn, (e, t) => t.toLocaleLowerCase() + "m"))
                  : "lowercase" === r.meridiem &&
                    (e = e.replace(nn, (e) => e.toLocaleLowerCase()));
                return (e = (e = e.replace(sn, " ")).trim());
              })(o.format(a), s, e, t, n)
            );
          };
        })(e, t, n);
  }
  function dn(e, t) {
    let n = t.markerToArray(e.marker);
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
      millisecond: n[6],
    };
  }
  function un(e, t, n, r) {
    let i = dn(e, n.calendarSystem);
    return {
      date: i,
      start: i,
      end: t ? dn(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator,
    };
  }
  class hn {
    constructor(e) {
      this.cmdStr = e;
    }
    format(e, t, n) {
      return t.cmdFormatter(this.cmdStr, un(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return n.cmdFormatter(this.cmdStr, un(e, t, n, r));
    }
  }
  class fn {
    constructor(e) {
      this.func = e;
    }
    format(e, t, n) {
      return this.func(un(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return this.func(un(e, t, n, r));
    }
  }
  function gn(e) {
    return "object" == typeof e && e
      ? new ln(e)
      : "string" == typeof e
      ? new hn(e)
      : "function" == typeof e
      ? new fn(e)
      : null;
  }
  const pn = {
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
      customRenderingReplacesEl: Boolean,
    },
    mn = {
      eventDisplay: "auto",
      defaultRangeSeparator: " - ",
      titleRangeSeparator: " – ",
      defaultTimedEventDuration: "01:00:00",
      defaultAllDayEventDuration: { day: 1 },
      forceEventDuration: !1,
      nextDayThreshold: "00:00:00",
      dayHeaders: !0,
      initialView: "",
      aspectRatio: 1.35,
      headerToolbar: { start: "title", center: "", end: "today prev,next" },
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
      dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
      handleWindowResize: !0,
      windowResizeDelay: 100,
      longPressDelay: 1e3,
      eventDragMinDistance: 5,
      expandRows: !1,
      navLinks: !1,
      selectable: !1,
      eventMinHeight: 15,
      eventMinWidth: 30,
      eventShortHeight: 30,
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
      _scrollRequest: wn,
    },
    bn = {
      buttonText: wn,
      buttonHints: wn,
      views: wn,
      plugins: wn,
      initialEvents: wn,
      events: wn,
      eventSources: wn,
    },
    yn = {
      headerToolbar: En,
      footerToolbar: En,
      buttonText: En,
      buttonHints: En,
      buttonIcons: En,
      dateIncrement: En,
    };
  function En(e, t) {
    return "object" == typeof e && "object" == typeof t && e && t
      ? xe(e, t)
      : e === t;
  }
  const An = {
    type: String,
    component: wn,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: wn,
    usesMinMaxTime: Boolean,
    classNames: wn,
    content: wn,
    didMount: wn,
    willUnmount: wn,
  };
  function Dn(e) {
    return De(e, yn);
  }
  function Sn(e, t) {
    let n = {},
      r = {};
    for (let r in t) r in e && (n[r] = t[r](e[r]));
    for (let n in e) n in t || (r[n] = e[n]);
    return { refined: n, extra: r };
  }
  function wn(e) {
    return e;
  }
  function Cn(e) {
    e();
    let t = n.debounceRendering,
      r = [];
    for (
      n.debounceRendering = function (e) {
        r.push(e);
      },
        P(f(Rn, {}), document.createElement("div"));
      r.length;

    )
      r.shift()();
    n.debounceRendering = t;
  }
  class Rn extends m {
    render() {
      return f("div", {});
    }
    componentDidMount() {
      this.setState({});
    }
  }
  function xn(e) {
    let t = (function (e, t) {
        var n = {
          __c: (t = "__cC" + a++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[t] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value && n.some(y);
                }),
                (this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n.splice(n.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      })(e),
      n = t.Provider;
    return (
      (t.Provider = function () {
        let e = !this.getChildContext,
          t = n.apply(this, arguments);
        if (e) {
          let e = [];
          (this.shouldComponentUpdate = (t) => {
            this.props.value !== t.value &&
              e.forEach((e) => {
                (e.context = t.value), e.forceUpdate();
              });
          }),
            (this.sub = (t) => {
              e.push(t);
              let n = t.componentWillUnmount;
              t.componentWillUnmount = () => {
                e.splice(e.indexOf(t), 1), n && n.call(t);
              };
            });
        }
        return t;
      }),
      t
    );
  }
  class _n {
    constructor(e, t, n, r) {
      (this.execFunc = e),
        (this.emitter = t),
        (this.scrollTime = n),
        (this.scrollTimeReset = r),
        (this.handleScrollRequest = (e) => {
          (this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e)),
            this.drain();
        }),
        t.on("_scrollRequest", this.handleScrollRequest),
        this.fireInitialScroll();
    }
    detach() {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }
    update(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }
    fireInitialScroll() {
      this.handleScrollRequest({ time: this.scrollTime });
    }
    drain() {
      this.queuedRequest &&
        this.execFunc(this.queuedRequest) &&
        (this.queuedRequest = null);
    }
  }
  const Tn = xn({});
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
      addResizeHandler(e) {
        c.on("_resize", e);
      },
      removeResizeHandler(e) {
        c.off("_resize", e);
      },
      createScrollResponder: (e) =>
        new _n(e, c, jt(n.scrollTime), n.scrollTimeReset),
      registerInteractiveComponent: u,
      unregisterInteractiveComponent: h,
    };
  }
  class Mn extends m {
    shouldComponentUpdate(e, t) {
      return (
        this.debug && console.log(_e(e, this.props), _e(t, this.state)),
        !Te(this.props, e, this.propEquality) ||
          !Te(this.state, t, this.stateEquality)
      );
    }
    safeSetState(e) {
      Te(
        this.state,
        Object.assign(Object.assign({}, this.state), e),
        this.stateEquality
      ) || this.setState(e);
    }
  }
  (Mn.addPropsEquality = function (e) {
    let t = Object.create(this.prototype.propEquality);
    Object.assign(t, e), (this.prototype.propEquality = t);
  }),
    (Mn.addStateEquality = function (e) {
      let t = Object.create(this.prototype.stateEquality);
      Object.assign(t, e), (this.prototype.stateEquality = t);
    }),
    (Mn.contextType = Tn),
    (Mn.prototype.propEquality = {}),
    (Mn.prototype.stateEquality = {});
  class In extends Mn {}
  function On(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }
  In.contextType = Tn;
  class Nn extends In {
    constructor() {
      super(...arguments),
        (this.id = Ke()),
        (this.currentDomNodes = []),
        (this.queuedDomNodes = []),
        (this.handleEl = (e) => {
          this.props.elRef && On(this.props.elRef, e);
        });
    }
    render() {
      const { props: e, context: t } = this,
        { options: n } = t,
        { generator: r, renderProps: s } = e,
        o = Hn(e);
      let a,
        l = [];
      if (Pn(e.generatorName, n)) n.customRenderingReplacesEl && delete o.elRef;
      else {
        const e = "function" == typeof r ? r(s, f) : r;
        "string" == typeof e || i(e) || Array.isArray(e)
          ? (a = e)
          : "object" == typeof e &&
            ("html" in e
              ? (o.dangerouslySetInnerHTML = { __html: e.html })
              : "domNodes" in e &&
                (l = Array.prototype.slice.call(e.domNodes)));
      }
      return (this.queuedDomNodes = l), f(e.elTag, o, a);
    }
    componentDidMount() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentDidUpdate() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentWillUnmount() {
      this.triggerCustomRendering(!1);
    }
    triggerCustomRendering(e) {
      const { props: t, context: n } = this,
        { handleCustomRendering: r, customRenderingMetaMap: i } = n.options;
      if (r) {
        const n = null == i ? void 0 : i[t.generatorName];
        n &&
          r(
            Object.assign(
              {
                id: this.id,
                isActive: e,
                containerEl: this.base,
                reportNewContainerEl: this.handleEl,
                generatorMeta: n,
              },
              t
            )
          );
      }
    }
    applyQueueudDomNodes() {
      const { queuedDomNodes: e, currentDomNodes: t } = this,
        n = this.base;
      if (!Ie(e, t)) {
        t.forEach(Pe);
        for (let t of e) n.appendChild(t);
        this.currentDomNodes = e;
      }
    }
  }
  function Pn(e, t) {
    var n;
    return Boolean(
      t.handleCustomRendering &&
        e &&
        (null === (n = t.customRenderingMetaMap) || void 0 === n
          ? void 0
          : n[e])
    );
  }
  function Hn(e, t) {
    const n = Object.assign(Object.assign({}, e.elAttrs), { ref: e.elRef });
    return (
      (e.elClasses || t) &&
        (n.className = (e.elClasses || [])
          .concat(t || [])
          .concat(n.className || [])
          .filter(Boolean)
          .join(" ")),
      e.elStyle && (n.style = e.elStyle),
      n
    );
  }
  Nn.addPropsEquality({
    elClasses: Ie,
    elStyle: xe,
    elAttrs: xe,
    renderProps: xe,
  });
  const Bn = xn(0);
  class jn extends m {
    constructor() {
      super(...arguments), (this.InnerContent = zn.bind(void 0, this));
    }
    render() {
      const { props: e } = this,
        t = (function (e, t) {
          const n = "function" == typeof e ? e(t) : e || [];
          return "string" == typeof n ? [n] : n;
        })(e.classNameGenerator, e.renderProps);
      if (e.children) {
        const n = Hn(e, t),
          r = e.children(this.InnerContent, e.renderProps, n);
        return e.elTag ? f(e.elTag, n, r) : r;
      }
      return f(
        Nn,
        Object.assign(Object.assign({}, e), {
          elTag: e.elTag || "div",
          elClasses: (e.elClasses || []).concat(t),
          renderId: this.context,
        })
      );
    }
    componentDidMount() {
      var e, t;
      null === (t = (e = this.props).didMount) ||
        void 0 === t ||
        t.call(
          e,
          Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.base,
          })
        );
    }
    componentWillUnmount() {
      var e, t;
      null === (t = (e = this.props).willUnmount) ||
        void 0 === t ||
        t.call(
          e,
          Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.base,
          })
        );
    }
  }
  function zn(e, t) {
    const n = e.props;
    return f(
      Nn,
      Object.assign(
        {
          renderProps: n.renderProps,
          generatorName: n.generatorName,
          generator: n.generator,
          renderId: e.context,
        },
        t
      )
    );
  }
  jn.contextType = Bn;
  class Un extends In {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = { view: t.viewApi };
      return f(
        jn,
        Object.assign({}, e, {
          elTag: e.elTag || "div",
          elClasses: [...Ln(e.viewSpec), ...(e.elClasses || [])],
          renderProps: r,
          classNameGenerator: n.viewClassNames,
          generatorName: void 0,
          generator: void 0,
          didMount: n.viewDidMount,
          willUnmount: n.viewWillUnmount,
        }),
        () => e.children
      );
    }
  }
  function Ln(e) {
    return [`fc-${e.type}-view`, "fc-view"];
  }
  function Wn(e, t) {
    let n,
      r,
      i = [],
      { start: s } = t;
    for (e.sort(Fn), n = 0; n < e.length; n += 1)
      (r = e[n]),
        r.start > s && i.push({ start: s, end: r.start }),
        r.end > s && (s = r.end);
    return s < t.end && i.push({ start: s, end: t.end }), i;
  }
  function Fn(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }
  function Vn(e, t) {
    let { start: n, end: r } = e,
      i = null;
    return (
      null !== t.start &&
        (n =
          null === n
            ? t.start
            : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
      null != t.end &&
        (r =
          null === r
            ? t.end
            : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
      (null === n || null === r || n < r) && (i = { start: n, end: r }),
      i
    );
  }
  function Gn(e, t) {
    return (
      (null === e.start ? null : e.start.valueOf()) ===
        (null === t.start ? null : t.start.valueOf()) &&
      (null === e.end ? null : e.end.valueOf()) ===
        (null === t.end ? null : t.end.valueOf())
    );
  }
  function Qn(e, t) {
    return (
      (null === e.end || null === t.start || e.end > t.start) &&
      (null === e.start || null === t.end || e.start < t.end)
    );
  }
  function qn(e, t) {
    return (
      (null === e.start || (null !== t.start && t.start >= e.start)) &&
      (null === e.end || (null !== t.end && t.end <= e.end))
    );
  }
  function Yn(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }
  function Zn(e) {
    let t = Math.floor(Et(e.start, e.end)) || 1,
      n = wt(e.start);
    return { start: n, end: vt(n, t) };
  }
  function Xn(e, t = jt(0)) {
    let n = null,
      r = null;
    if (e.end) {
      r = wt(e.end);
      let n = e.end.valueOf() - r.valueOf();
      n && n >= Ft(t) && (r = vt(r, 1));
    }
    return (
      e.start && ((n = wt(e.start)), r && r <= n && (r = vt(n, 1))),
      { start: n, end: r }
    );
  }
  function Jn(e) {
    let t = Xn(e);
    return Et(t.start, t.end) > 1;
  }
  function $n(e, t, n, r) {
    return "year" === r
      ? jt(n.diffWholeYears(e, t), "year")
      : "month" === r
      ? jt(n.diffWholeMonths(e, t), "month")
      : At(e, t);
  }
  function Kn(e, t) {
    return (
      "function" == typeof e && (e = e()),
      null == e ? t.createNowMarker() : t.createMarker(e)
    );
  }
  class er {
    constructor(e) {
      (this.props = e),
        (this.nowDate = Kn(e.nowInput, e.dateEnv)),
        this.initHiddenDays();
    }
    buildPrev(e, t, n) {
      let { dateEnv: r } = this.props,
        i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, -1, n);
    }
    buildNext(e, t, n) {
      let { dateEnv: r } = this.props,
        i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, 1, n);
    }
    build(e, t, n = !0) {
      let r,
        i,
        s,
        o,
        a,
        l,
        { props: c } = this;
      var d, u;
      return (
        (r = this.buildValidRange()),
        (r = this.trimHiddenDays(r)),
        n &&
          ((d = e),
          (e =
            null != (u = r).start && d < u.start
              ? u.start
              : null != u.end && d >= u.end
              ? new Date(u.end.valueOf() - 1)
              : d)),
        (i = this.buildCurrentRangeInfo(e, t)),
        (s = /^(year|month|week|day)$/.test(i.unit)),
        (o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s)),
        (o = this.trimHiddenDays(o)),
        (a = o),
        c.showNonCurrentDates || (a = Vn(a, i.range)),
        (a = this.adjustActiveRange(a)),
        (a = Vn(a, r)),
        (l = Qn(i.range, r)),
        {
          validRange: r,
          currentRange: i.range,
          currentRangeUnit: i.unit,
          isRangeAllDay: s,
          activeRange: a,
          renderRange: o,
          slotMinTime: c.slotMinTime,
          slotMaxTime: c.slotMaxTime,
          isValid: l,
          dateIncrement: this.buildDateIncrement(i.duration),
        }
      );
    }
    buildValidRange() {
      let e = this.props.validRangeInput,
        t =
          "function" == typeof e
            ? e.call(this.props.calendarApi, this.nowDate)
            : e;
      return this.refineRange(t) || { start: null, end: null };
    }
    buildCurrentRangeInfo(e, t) {
      let n,
        { props: r } = this,
        i = null,
        s = null,
        o = null;
      return (
        r.duration
          ? ((i = r.duration),
            (s = r.durationUnit),
            (o = this.buildRangeFromDuration(e, t, i, s)))
          : (n = this.props.dayCount)
          ? ((s = "day"), (o = this.buildRangeFromDayCount(e, t, n)))
          : (o = this.buildCustomVisibleRange(e))
          ? (s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit)
          : ((i = this.getFallbackDuration()),
            (s = Gt(i).unit),
            (o = this.buildRangeFromDuration(e, t, i, s))),
        { duration: i, unit: s, range: o }
      );
    }
    getFallbackDuration() {
      return jt({ day: 1 });
    }
    adjustActiveRange(e) {
      let {
          dateEnv: t,
          usesMinMaxTime: n,
          slotMinTime: r,
          slotMaxTime: i,
        } = this.props,
        { start: s, end: o } = e;
      return (
        n &&
          (Wt(r) < 0 && ((s = wt(s)), (s = t.add(s, r))),
          Wt(i) > 1 && ((o = wt(o)), (o = vt(o, -1)), (o = t.add(o, i)))),
        { start: s, end: o }
      );
    }
    buildRangeFromDuration(e, t, n, r) {
      let i,
        s,
        o,
        { dateEnv: a, dateAlignment: l } = this.props;
      if (!l) {
        let { dateIncrement: e } = this.props;
        l = e && Ft(e) < Ft(n) ? Gt(e).unit : r;
      }
      function c() {
        (i = a.startOf(e, l)), (s = a.add(i, n)), (o = { start: i, end: s });
      }
      return (
        Wt(n) <= 1 &&
          this.isHiddenDay(i) &&
          ((i = this.skipHiddenDays(i, t)), (i = wt(i))),
        c(),
        this.trimHiddenDays(o) || ((e = this.skipHiddenDays(e, t)), c()),
        o
      );
    }
    buildRangeFromDayCount(e, t, n) {
      let r,
        { dateEnv: i, dateAlignment: s } = this.props,
        o = 0,
        a = e;
      s && (a = i.startOf(a, s)),
        (a = wt(a)),
        (a = this.skipHiddenDays(a, t)),
        (r = a);
      do {
        (r = vt(r, 1)), this.isHiddenDay(r) || (o += 1);
      } while (o < n);
      return { start: a, end: r };
    }
    buildCustomVisibleRange(e) {
      let { props: t } = this,
        n = t.visibleRangeInput,
        r =
          "function" == typeof n
            ? n.call(t.calendarApi, t.dateEnv.toDate(e))
            : n,
        i = this.refineRange(r);
      return !i || (null != i.start && null != i.end) ? i : null;
    }
    buildRenderRange(e, t, n) {
      return e;
    }
    buildDateIncrement(e) {
      let t,
        { dateIncrement: n } = this.props;
      return (
        n || ((t = this.props.dateAlignment) ? jt(1, t) : e || jt({ days: 1 }))
      );
    }
    refineRange(e) {
      if (e) {
        let t = (function (e, t) {
          let n = null,
            r = null;
          return (
            e.start && (n = t.createMarker(e.start)),
            e.end && (r = t.createMarker(e.end)),
            n || r ? (n && r && r < n ? null : { start: n, end: r }) : null
          );
        })(e, this.props.dateEnv);
        return t && (t = Xn(t)), t;
      }
      return null;
    }
    initHiddenDays() {
      let e,
        t = this.props.hiddenDays || [],
        n = [],
        r = 0;
      for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)
        (n[e] = -1 !== t.indexOf(e)) || (r += 1);
      if (!r) throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = n;
    }
    trimHiddenDays(e) {
      let { start: t, end: n } = e;
      return (
        t && (t = this.skipHiddenDays(t)),
        n && (n = this.skipHiddenDays(n, -1, !0)),
        null == t || null == n || t < n ? { start: t, end: n } : null
      );
    }
    isHiddenDay(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }
    skipHiddenDays(e, t = 1, n = !1) {
      for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; )
        e = vt(e, t);
      return e;
    }
  }
  function tr(e, t, n, r) {
    return {
      instanceId: Ke(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r,
    };
  }
  function nr(e, t, n) {
    let { dateEnv: r, pluginHooks: i, options: s } = n,
      { defs: o, instances: a } = e;
    a = Se(a, (e) => !o[e.defId].recurringDef);
    for (let e in o) {
      let n = o[e];
      if (n.recurringDef) {
        let { duration: o } = n.recurringDef;
        o ||
          (o = n.allDay
            ? s.defaultAllDayEventDuration
            : s.defaultTimedEventDuration);
        let l = rr(n, o, t, r, i.recurringTypes);
        for (let t of l) {
          let n = tr(e, { start: t, end: r.add(t, o) });
          a[n.instanceId] = n;
        }
      }
    }
    return { defs: o, instances: a };
  }
  function rr(e, t, n, r, i) {
    let s = i[e.recurringDef.typeId].expand(
      e.recurringDef.typeData,
      { start: r.subtract(n.start, t), end: n.end },
      r
    );
    return e.allDay && (s = s.map(wt)), s;
  }
  const ir = {
      id: String,
      groupId: String,
      title: String,
      url: String,
      interactive: Boolean,
    },
    sr = { start: wn, end: wn, date: wn, allDay: Boolean },
    or = Object.assign(Object.assign(Object.assign({}, ir), sr), {
      extendedProps: wn,
    });
  function ar(e, t, n, r, i = cr(n)) {
    let { refined: s, extra: o } = lr(e, n, i),
      a = (function (e, t) {
        let n = null;
        e && (n = e.defaultAllDay);
        null == n && (n = t.options.defaultAllDay);
        return n;
      })(t, n),
      l = (function (e, t, n, r) {
        for (let i = 0; i < r.length; i += 1) {
          let s = r[i].parse(e, n);
          if (s) {
            let { allDay: n } = e;
            return (
              null == n &&
                ((n = t),
                null == n && ((n = s.allDayGuess), null == n && (n = !1))),
              {
                allDay: n,
                duration: s.duration,
                typeData: s.typeData,
                typeId: i,
              }
            );
          }
        }
        return null;
      })(s, a, n.dateEnv, n.pluginHooks.recurringTypes);
    if (l) {
      let e = dr(s, o, t ? t.sourceId : "", l.allDay, Boolean(l.duration), n);
      return (
        (e.recurringDef = {
          typeId: l.typeId,
          typeData: l.typeData,
          duration: l.duration,
        }),
        { def: e, instance: null }
      );
    }
    let c = (function (e, t, n, r) {
      let i,
        s,
        { allDay: o } = e,
        a = null,
        l = !1,
        c = null,
        d = null != e.start ? e.start : e.date;
      if (((i = n.dateEnv.createMarkerMeta(d)), i)) a = i.marker;
      else if (!r) return null;
      null != e.end && (s = n.dateEnv.createMarkerMeta(e.end));
      null == o &&
        (o =
          null != t
            ? t
            : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified));
      o && a && (a = wt(a));
      s && ((c = s.marker), o && (c = wt(c)), a && c <= a && (c = null));
      c
        ? (l = !0)
        : r ||
          ((l = n.options.forceEventDuration || !1),
          (c = n.dateEnv.add(
            a,
            o
              ? n.options.defaultAllDayEventDuration
              : n.options.defaultTimedEventDuration
          )));
      return {
        allDay: o,
        hasEnd: l,
        range: { start: a, end: c },
        forcedStartTzo: i ? i.forcedTzo : null,
        forcedEndTzo: s ? s.forcedTzo : null,
      };
    })(s, a, n, r);
    if (c) {
      let e = dr(s, o, t ? t.sourceId : "", c.allDay, c.hasEnd, n);
      return {
        def: e,
        instance: tr(e.defId, c.range, c.forcedStartTzo, c.forcedEndTzo),
      };
    }
    return null;
  }
  function lr(e, t, n = cr(t)) {
    return Sn(e, n);
  }
  function cr(e) {
    return Object.assign(
      Object.assign(Object.assign({}, br), or),
      e.pluginHooks.eventRefiners
    );
  }
  function dr(e, t, n, r, i, s) {
    let o = {
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
      extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t),
    };
    for (let t of s.pluginHooks.eventDefMemberAdders) Object.assign(o, t(e));
    return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
  }
  function ur(e, t, n, r) {
    let i = { defs: {}, instances: {} },
      s = cr(n);
    for (let o of e) {
      let e = ar(o, t, n, r, s);
      e && hr(e, i);
    }
    return i;
  }
  function hr(e, t = { defs: {}, instances: {} }) {
    return (
      (t.defs[e.def.defId] = e.def),
      e.instance && (t.instances[e.instance.instanceId] = e.instance),
      t
    );
  }
  function fr(e, t) {
    let n = e.instances[t];
    if (n) {
      let t = e.defs[n.defId],
        r = mr(e, (e) => {
          return (
            (n = t), (r = e), Boolean(n.groupId && n.groupId === r.groupId)
          );
          var n, r;
        });
      return (r.defs[t.defId] = t), (r.instances[n.instanceId] = n), r;
    }
    return { defs: {}, instances: {} };
  }
  function gr() {
    return { defs: {}, instances: {} };
  }
  function pr(e, t) {
    return {
      defs: Object.assign(Object.assign({}, e.defs), t.defs),
      instances: Object.assign(Object.assign({}, e.instances), t.instances),
    };
  }
  function mr(e, t) {
    let n = Se(e.defs, t),
      r = Se(e.instances, (e) => n[e.defId]);
    return { defs: n, instances: r };
  }
  function vr(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }
  const br = {
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
      textColor: String,
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
      classNames: [],
    };
  function Er(e, t) {
    let n = (function (e, t) {
      return Array.isArray(e)
        ? ur(e, null, t, !0)
        : "object" == typeof e && e
        ? ur([e], null, t, !0)
        : null != e
        ? String(e)
        : null;
    })(e.constraint, t);
    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable:
        null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || []),
    };
  }
  function Ar(e) {
    return e.reduce(Dr, yr);
  }
  function Dr(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable:
        null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable:
        null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames),
    };
  }
  const Sr = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: wn,
    eventDataTransform: wn,
    success: wn,
    failure: wn,
  };
  function wr(e, t, n = Cr(t)) {
    let r;
    if (
      ("string" == typeof e
        ? (r = { url: e })
        : "function" == typeof e || Array.isArray(e)
        ? (r = { events: e })
        : "object" == typeof e && e && (r = e),
      r)
    ) {
      let { refined: i, extra: s } = Sn(r, n),
        o = (function (e, t) {
          let n = t.pluginHooks.eventSourceDefs;
          for (let t = n.length - 1; t >= 0; t -= 1) {
            let r = n[t].parseMeta(e);
            if (r) return { sourceDefId: t, meta: r };
          }
          return null;
        })(i, t);
      if (o)
        return {
          _raw: e,
          isFetching: !1,
          latestFetchId: "",
          fetchRange: null,
          defaultAllDay: i.defaultAllDay,
          eventDataTransform: i.eventDataTransform,
          success: i.success,
          failure: i.failure,
          publicId: i.id || "",
          sourceId: Ke(),
          sourceDefId: o.sourceDefId,
          meta: o.meta,
          ui: Er(i, t),
          extendedProps: s,
        };
    }
    return null;
  }
  function Cr(e) {
    return Object.assign(
      Object.assign(Object.assign({}, br), Sr),
      e.pluginHooks.eventSourceRefiners
    );
  }
  function Rr(e, t, n, r, i) {
    switch (t.type) {
      case "RECEIVE_EVENTS":
        return (function (e, t, n, r, i, s) {
          if (t && n === t.latestFetchId) {
            let n = ur(
              (function (e, t, n) {
                let r = n.options.eventDataTransform,
                  i = t ? t.eventDataTransform : null;
                i && (e = xr(e, i));
                r && (e = xr(e, r));
                return e;
              })(i, t, s),
              t,
              s
            );
            return r && (n = nr(n, r, s)), pr(_r(e, t.sourceId), n);
          }
          return e;
        })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
      case "ADD_EVENTS":
        return (function (e, t, n, r) {
          n && (t = nr(t, n, r));
          return pr(e, t);
        })(e, t.eventStore, r ? r.activeRange : null, i);
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
        return (function (e, t) {
          let { defs: n, instances: r } = e,
            i = {},
            s = {};
          for (let e in n) t.defs[e] || (i[e] = n[e]);
          for (let e in r) !t.instances[e] && i[r[e].defId] && (s[e] = r[e]);
          return { defs: i, instances: s };
        })(e, t.eventStore);
      case "REMOVE_EVENT_SOURCE":
        return _r(e, t.sourceId);
      case "REMOVE_ALL_EVENT_SOURCES":
        return mr(e, (e) => !e.sourceId);
      case "REMOVE_ALL_EVENTS":
        return { defs: {}, instances: {} };
      default:
        return e;
    }
  }
  function xr(e, t) {
    let n;
    if (t) {
      n = [];
      for (let r of e) {
        let e = t(r);
        e ? n.push(e) : null == e && n.push(r);
      }
    } else n = e;
    return n;
  }
  function _r(e, t) {
    return mr(e, (e) => e.sourceId !== t);
  }
  class Tr {
    constructor() {
      (this.handlers = {}), (this.thisContext = null);
    }
    setThisContext(e) {
      this.thisContext = e;
    }
    setOptions(e) {
      this.options = e;
    }
    on(e, t) {
      !(function (e, t, n) {
        (e[t] || (e[t] = [])).push(n);
      })(this.handlers, e, t);
    }
    off(e, t) {
      !(function (e, t, n) {
        n ? e[t] && (e[t] = e[t].filter((e) => e !== n)) : delete e[t];
      })(this.handlers, e, t);
    }
    trigger(e, ...t) {
      let n = this.handlers[e] || [],
        r = this.options && this.options[e],
        i = [].concat(r || [], n);
      for (let e of i) e.apply(this.thisContext, t);
    }
    hasHandlers(e) {
      return Boolean(
        (this.handlers[e] && this.handlers[e].length) ||
          (this.options && this.options[e])
      );
    }
  }
  const kr = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours",
  };
  function Mr(e, t) {
    return ur(
      (function (e) {
        let t;
        t =
          !0 === e
            ? [{}]
            : Array.isArray(e)
            ? e.filter((e) => e.daysOfWeek)
            : "object" == typeof e && e
            ? [e]
            : [];
        return (t = t.map((e) => Object.assign(Object.assign({}, kr), e))), t;
      })(e),
      null,
      t
    );
  }
  function Ir(e, t, n) {
    n.emitter.trigger(
      "select",
      Object.assign(Object.assign({}, Or(e, n)), {
        jsEvent: t ? t.origEvent : null,
        view: n.viewApi || n.calendarApi.view,
      })
    );
  }
  function Or(e, t) {
    let n = {};
    for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
    var r, i;
    return (
      Object.assign(
        n,
        ((r = e),
        (i = t.dateEnv),
        Object.assign(Object.assign({}, ai(r.range, i, r.allDay)), {
          allDay: r.allDay,
        }))
      ),
      n
    );
  }
  function Nr(e, t, n) {
    let { dateEnv: r, options: i } = n,
      s = t;
    return (
      e
        ? ((s = wt(s)), (s = r.add(s, i.defaultAllDayEventDuration)))
        : (s = r.add(s, i.defaultTimedEventDuration)),
      s
    );
  }
  function Pr(e, t, n, r) {
    let i = Gr(e.defs, t),
      s = { defs: {}, instances: {} };
    for (let t in e.defs) {
      let o = e.defs[t];
      s.defs[t] = Hr(o, i[t], n, r);
    }
    for (let t in e.instances) {
      let o = e.instances[t],
        a = s.defs[o.defId];
      s.instances[t] = Br(o, a, i[o.defId], n, r);
    }
    return s;
  }
  function Hr(e, t, n, r) {
    let i = n.standardProps || {};
    null == i.hasEnd &&
      t.durationEditable &&
      (n.startDelta || n.endDelta) &&
      (i.hasEnd = !0);
    let s = Object.assign(Object.assign(Object.assign({}, e), i), {
      ui: Object.assign(Object.assign({}, e.ui), i.ui),
    });
    n.extendedProps &&
      (s.extendedProps = Object.assign(
        Object.assign({}, s.extendedProps),
        n.extendedProps
      ));
    for (let e of r.pluginHooks.eventDefMutationAppliers) e(s, n, r);
    return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
  }
  function Br(e, t, n, r, i) {
    let { dateEnv: s } = i,
      o = r.standardProps && !0 === r.standardProps.allDay,
      a = r.standardProps && !1 === r.standardProps.hasEnd,
      l = Object.assign({}, e);
    return (
      o && (l.range = Zn(l.range)),
      r.datesDelta &&
        n.startEditable &&
        (l.range = {
          start: s.add(l.range.start, r.datesDelta),
          end: s.add(l.range.end, r.datesDelta),
        }),
      r.startDelta &&
        n.durationEditable &&
        (l.range = {
          start: s.add(l.range.start, r.startDelta),
          end: l.range.end,
        }),
      r.endDelta &&
        n.durationEditable &&
        (l.range = {
          start: l.range.start,
          end: s.add(l.range.end, r.endDelta),
        }),
      a &&
        (l.range = {
          start: l.range.start,
          end: Nr(t.allDay, l.range.start, i),
        }),
      t.allDay &&
        (l.range = { start: wt(l.range.start), end: wt(l.range.end) }),
      l.range.end < l.range.start &&
        (l.range.end = Nr(t.allDay, l.range.start, i)),
      l
    );
  }
  class jr {
    constructor(e, t) {
      (this.context = e), (this.internalEventSource = t);
    }
    remove() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId,
      });
    }
    refetch() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: !0,
      });
    }
    get id() {
      return this.internalEventSource.publicId;
    }
    get url() {
      return this.internalEventSource.meta.url;
    }
    get format() {
      return this.internalEventSource.meta.format;
    }
  }
  class zr {
    constructor(e, t, n) {
      (this._context = e), (this._def = t), (this._instance = n || null);
    }
    setProp(e, t) {
      if (e in sr)
        console.warn(
          "Could not set date-related prop 'name'. Use one of the date-related methods instead."
        );
      else if ("id" === e)
        (t = ir[e](t)), this.mutate({ standardProps: { publicId: t } });
      else if (e in ir)
        (t = ir[e](t)), this.mutate({ standardProps: { [e]: t } });
      else if (e in br) {
        let n = br[e](t);
        (n =
          "color" === e
            ? { backgroundColor: t, borderColor: t }
            : "editable" === e
            ? { startEditable: t, durationEditable: t }
            : { [e]: t }),
          this.mutate({ standardProps: { ui: n } });
      } else
        console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
    }
    setExtendedProp(e, t) {
      this.mutate({ extendedProps: { [e]: t } });
    }
    setStart(e, t = {}) {
      let { dateEnv: n } = this._context,
        r = n.createMarker(e);
      if (r && this._instance) {
        let e = $n(this._instance.range.start, r, n, t.granularity);
        t.maintainDuration
          ? this.mutate({ datesDelta: e })
          : this.mutate({ startDelta: e });
      }
    }
    setEnd(e, t = {}) {
      let n,
        { dateEnv: r } = this._context;
      if ((null == e || ((n = r.createMarker(e)), n)) && this._instance)
        if (n) {
          let e = $n(this._instance.range.end, n, r, t.granularity);
          this.mutate({ endDelta: e });
        } else this.mutate({ standardProps: { hasEnd: !1 } });
    }
    setDates(e, t, n = {}) {
      let r,
        { dateEnv: i } = this._context,
        s = { allDay: n.allDay },
        o = i.createMarker(e);
      var a, l;
      if (o && (null == t || ((r = i.createMarker(t)), r)) && this._instance) {
        let e = this._instance.range;
        !0 === n.allDay && (e = Zn(e));
        let t = $n(e.start, o, i, n.granularity);
        if (r) {
          let o = $n(e.end, r, i, n.granularity);
          (l = o),
            (a = t).years === l.years &&
            a.months === l.months &&
            a.days === l.days &&
            a.milliseconds === l.milliseconds
              ? this.mutate({ datesDelta: t, standardProps: s })
              : this.mutate({ startDelta: t, endDelta: o, standardProps: s });
        } else
          (s.hasEnd = !1), this.mutate({ datesDelta: t, standardProps: s });
      }
    }
    moveStart(e) {
      let t = jt(e);
      t && this.mutate({ startDelta: t });
    }
    moveEnd(e) {
      let t = jt(e);
      t && this.mutate({ endDelta: t });
    }
    moveDates(e) {
      let t = jt(e);
      t && this.mutate({ datesDelta: t });
    }
    setAllDay(e, t = {}) {
      let n = { allDay: e },
        { maintainDuration: r } = t;
      null == r && (r = this._context.options.allDayMaintainDuration),
        this._def.allDay !== e && (n.hasEnd = r),
        this.mutate({ standardProps: n });
    }
    formatRange(e) {
      let { dateEnv: t } = this._context,
        n = this._instance,
        r = gn(e);
      return this._def.hasEnd
        ? t.formatRange(n.range.start, n.range.end, r, {
            forcedStartTzo: n.forcedStartTzo,
            forcedEndTzo: n.forcedEndTzo,
          })
        : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
    }
    mutate(e) {
      let t = this._instance;
      if (t) {
        let n = this._def,
          r = this._context,
          { eventStore: i } = r.getCurrentData(),
          s = fr(i, t.instanceId);
        s = Pr(
          s,
          {
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
              classNames: [],
            },
          },
          e,
          r
        );
        let o = new zr(r, n, t);
        (this._def = s.defs[n.defId]),
          (this._instance = s.instances[t.instanceId]),
          r.dispatch({ type: "MERGE_EVENTS", eventStore: s }),
          r.emitter.trigger("eventChange", {
            oldEvent: o,
            event: this,
            relatedEvents: Lr(s, r, t),
            revert() {
              r.dispatch({ type: "RESET_EVENTS", eventStore: i });
            },
          });
      }
    }
    remove() {
      let e = this._context,
        t = Ur(this);
      e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
        e.emitter.trigger("eventRemove", {
          event: this,
          relatedEvents: [],
          revert() {
            e.dispatch({ type: "MERGE_EVENTS", eventStore: t });
          },
        });
    }
    get source() {
      let { sourceId: e } = this._def;
      return e
        ? new jr(this._context, this._context.getCurrentData().eventSources[e])
        : null;
    }
    get start() {
      return this._instance
        ? this._context.dateEnv.toDate(this._instance.range.start)
        : null;
    }
    get end() {
      return this._instance && this._def.hasEnd
        ? this._context.dateEnv.toDate(this._instance.range.end)
        : null;
    }
    get startStr() {
      let e = this._instance;
      return e
        ? this._context.dateEnv.formatIso(e.range.start, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedStartTzo,
          })
        : "";
    }
    get endStr() {
      let e = this._instance;
      return e && this._def.hasEnd
        ? this._context.dateEnv.formatIso(e.range.end, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedEndTzo,
          })
        : "";
    }
    get id() {
      return this._def.publicId;
    }
    get groupId() {
      return this._def.groupId;
    }
    get allDay() {
      return this._def.allDay;
    }
    get title() {
      return this._def.title;
    }
    get url() {
      return this._def.url;
    }
    get display() {
      return this._def.ui.display || "auto";
    }
    get startEditable() {
      return this._def.ui.startEditable;
    }
    get durationEditable() {
      return this._def.ui.durationEditable;
    }
    get constraint() {
      return this._def.ui.constraints[0] || null;
    }
    get overlap() {
      return this._def.ui.overlap;
    }
    get allow() {
      return this._def.ui.allows[0] || null;
    }
    get backgroundColor() {
      return this._def.ui.backgroundColor;
    }
    get borderColor() {
      return this._def.ui.borderColor;
    }
    get textColor() {
      return this._def.ui.textColor;
    }
    get classNames() {
      return this._def.ui.classNames;
    }
    get extendedProps() {
      return this._def.extendedProps;
    }
    toPlainObject(e = {}) {
      let t = this._def,
        { ui: n } = t,
        { startStr: r, endStr: i } = this,
        s = {};
      return (
        t.title && (s.title = t.title),
        r && (s.start = r),
        i && (s.end = i),
        t.publicId && (s.id = t.publicId),
        t.groupId && (s.groupId = t.groupId),
        t.url && (s.url = t.url),
        n.display && "auto" !== n.display && (s.display = n.display),
        e.collapseColor &&
        n.backgroundColor &&
        n.backgroundColor === n.borderColor
          ? (s.color = n.backgroundColor)
          : (n.backgroundColor && (s.backgroundColor = n.backgroundColor),
            n.borderColor && (s.borderColor = n.borderColor)),
        n.textColor && (s.textColor = n.textColor),
        n.classNames.length && (s.classNames = n.classNames),
        Object.keys(t.extendedProps).length &&
          (e.collapseExtendedProps
            ? Object.assign(s, t.extendedProps)
            : (s.extendedProps = t.extendedProps)),
        s
      );
    }
    toJSON() {
      return this.toPlainObject();
    }
  }
  function Ur(e) {
    let t = e._def,
      n = e._instance;
    return {
      defs: { [t.defId]: t },
      instances: n ? { [n.instanceId]: n } : {},
    };
  }
  function Lr(e, t, n) {
    let { defs: r, instances: i } = e,
      s = [],
      o = n ? n.instanceId : "";
    for (let e in i) {
      let n = i[e],
        a = r[n.defId];
      n.instanceId !== o && s.push(new zr(t, a, n));
    }
    return s;
  }
  function Wr(e, t, n, r) {
    let i = {},
      s = {},
      o = {},
      a = [],
      l = [],
      c = Gr(e.defs, t);
    for (let t in e.defs) {
      let n = e.defs[t];
      "inverse-background" === c[n.defId].display &&
        (n.groupId
          ? ((i[n.groupId] = []), o[n.groupId] || (o[n.groupId] = n))
          : (s[t] = []));
    }
    for (let t in e.instances) {
      let o = e.instances[t],
        d = e.defs[o.defId],
        u = c[d.defId],
        h = o.range,
        f = !d.allDay && r ? Xn(h, r) : h,
        g = Vn(f, n);
      g &&
        ("inverse-background" === u.display
          ? d.groupId
            ? i[d.groupId].push(g)
            : s[o.defId].push(g)
          : "none" !== u.display &&
            ("background" === u.display ? a : l).push({
              def: d,
              ui: u,
              instance: o,
              range: g,
              isStart: f.start && f.start.valueOf() === g.start.valueOf(),
              isEnd: f.end && f.end.valueOf() === g.end.valueOf(),
            }));
    }
    for (let e in i) {
      let t = Wn(i[e], n);
      for (let n of t) {
        let t = o[e],
          r = c[t.defId];
        a.push({
          def: t,
          ui: r,
          instance: null,
          range: n,
          isStart: !1,
          isEnd: !1,
        });
      }
    }
    for (let t in s) {
      let r = Wn(s[t], n);
      for (let n of r)
        a.push({
          def: e.defs[t],
          ui: c[t],
          instance: null,
          range: n,
          isStart: !1,
          isEnd: !1,
        });
    }
    return { bg: a, fg: l };
  }
  function Fr(e) {
    return (
      "background" === e.ui.display || "inverse-background" === e.ui.display
    );
  }
  function Vr(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }
  function Gr(e, t) {
    return we(e, (e) => Qr(e, t));
  }
  function Qr(e, t) {
    let n = [];
    return (
      t[""] && n.push(t[""]),
      t[e.defId] && n.push(t[e.defId]),
      n.push(e.ui),
      Ar(n)
    );
  }
  function qr(e, t) {
    let n = e.map(Yr);
    return n.sort((e, n) => at(e, n, t)), n.map((e) => e._seg);
  }
  function Yr(e) {
    let { eventRange: t } = e,
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
      _seg: e,
    });
  }
  function Zr(e, t) {
    let { pluginHooks: n } = t,
      r = n.isDraggableTransformers,
      { def: i, ui: s } = e.eventRange,
      o = s.startEditable;
    for (let e of r) o = e(o, i, s, t);
    return o;
  }
  function Xr(e, t) {
    return (
      e.isStart &&
      e.eventRange.ui.durationEditable &&
      t.options.eventResizableFromStart
    );
  }
  function Jr(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }
  function $r(e, t, n, r, i, s, o) {
    let { dateEnv: a, options: l } = n,
      { displayEventTime: c, displayEventEnd: d } = l,
      u = e.eventRange.def,
      h = e.eventRange.instance;
    null == c && (c = !1 !== r), null == d && (d = !1 !== i);
    let f = h.range.start,
      g = h.range.end,
      p = s || e.start || e.eventRange.range.start,
      m = o || e.end || e.eventRange.range.end,
      v = wt(f).valueOf() === wt(p).valueOf(),
      b = wt(bt(g, -1)).valueOf() === wt(bt(m, -1)).valueOf();
    return c && !u.allDay && (v || b)
      ? ((p = v ? f : p),
        (m = b ? g : m),
        d && u.hasEnd
          ? a.formatRange(p, m, t, {
              forcedStartTzo: s ? null : h.forcedStartTzo,
              forcedEndTzo: o ? null : h.forcedEndTzo,
            })
          : a.format(p, t, { forcedTzo: s ? null : h.forcedStartTzo }))
      : "";
  }
  function Kr(e, t, n) {
    let r = e.eventRange.range;
    return {
      isPast: r.end < (n || t.start),
      isFuture: r.start >= (n || t.end),
      isToday: t && Yn(t, r.start),
    };
  }
  function ei(e) {
    let t = ["fc-event"];
    return (
      e.isMirror && t.push("fc-event-mirror"),
      e.isDraggable && t.push("fc-event-draggable"),
      (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
      e.isDragging && t.push("fc-event-dragging"),
      e.isResizing && t.push("fc-event-resizing"),
      e.isSelected && t.push("fc-event-selected"),
      e.isStart && t.push("fc-event-start"),
      e.isEnd && t.push("fc-event-end"),
      e.isPast && t.push("fc-event-past"),
      e.isToday && t.push("fc-event-today"),
      e.isFuture && t.push("fc-event-future"),
      t
    );
  }
  function ti(e) {
    return e.instance
      ? e.instance.instanceId
      : `${e.def.defId}:${e.range.start.toISOString()}`;
  }
  function ni(e, t) {
    let { def: n, instance: r } = e.eventRange,
      { url: i } = n;
    if (i) return { href: i };
    let { emitter: s, options: o } = t,
      { eventInteractive: a } = o;
    return (
      null == a &&
        ((a = n.interactive),
        null == a && (a = Boolean(s.hasHandlers("eventClick")))),
      a
        ? Je((e) => {
            s.trigger("eventClick", {
              el: e.target,
              event: new zr(t, n, r),
              jsEvent: e,
              view: t.viewApi,
            });
          })
        : {}
    );
  }
  const ri = { start: wn, end: wn, allDay: Boolean };
  function ii(e, t, n) {
    let r = (function (e, t) {
        let { refined: n, extra: r } = Sn(e, ri),
          i = n.start ? t.createMarkerMeta(n.start) : null,
          s = n.end ? t.createMarkerMeta(n.end) : null,
          { allDay: o } = n;
        null == o &&
          (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified));
        return Object.assign(
          {
            range: { start: i ? i.marker : null, end: s ? s.marker : null },
            allDay: o,
          },
          r
        );
      })(e, t),
      { range: i } = r;
    if (!i.start) return null;
    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }
    return r;
  }
  function si(e, t) {
    return (
      Gn(e.range, t.range) &&
      e.allDay === t.allDay &&
      (function (e, t) {
        for (let n in t)
          if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
        for (let n in e) if (!(n in t)) return !1;
        return !0;
      })(e, t)
    );
  }
  function oi(e, t, n) {
    return Object.assign(Object.assign({}, ai(e, t, n)), {
      timeZone: t.timeZone,
    });
  }
  function ai(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, { omitTime: n }),
      endStr: t.formatIso(e.end, { omitTime: n }),
    };
  }
  function li(e, t, n) {
    let r = !1,
      i = function (e) {
        r || ((r = !0), t(e));
      },
      s = function (e) {
        r || ((r = !0), n(e));
      },
      o = e(i, s);
    o && "function" == typeof o.then && o.then(i, s);
  }
  class ci extends Error {
    constructor(e, t) {
      super(e), (this.response = t);
    }
  }
  function di(e, t, n) {
    const r = { method: (e = e.toUpperCase()) };
    return (
      "GET" === e
        ? (t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n))
        : ((r.body = new URLSearchParams(n)),
          (r.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
          })),
      fetch(t, r).then((e) => {
        if (e.ok)
          return e.json().then(
            (t) => [t, e],
            () => {
              throw new ci("Failure parsing JSON", e);
            }
          );
        throw new ci("Request failed", e);
      })
    );
  }
  let ui;
  function hi() {
    return (
      null == ui &&
        (ui = (function () {
          if ("undefined" == typeof document) return !0;
          let e = document.createElement("div");
          (e.style.position = "absolute"),
            (e.style.top = "0px"),
            (e.style.left = "0px"),
            (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
            (e.querySelector("table").style.height = "100px"),
            (e.querySelector("div").style.height = "100%"),
            document.body.appendChild(e);
          let t = e.querySelector("div").offsetHeight > 0;
          return document.body.removeChild(e), t;
        })()),
      ui
    );
  }
  class fi extends In {
    constructor() {
      super(...arguments),
        (this.state = { forPrint: !1 }),
        (this.handleBeforePrint = () => {
          this.setState({ forPrint: !0 });
        }),
        (this.handleAfterPrint = () => {
          this.setState({ forPrint: !1 });
        });
    }
    render() {
      let { props: e } = this,
        { options: t } = e,
        { forPrint: n } = this.state,
        r = n || "auto" === t.height || "auto" === t.contentHeight,
        i = r || null == t.height ? "" : t.height,
        s = [
          "fc",
          n ? "fc-media-print" : "fc-media-screen",
          "fc-direction-" + t.direction,
          e.theme.getClass("root"),
        ];
      return hi() || s.push("fc-liquid-hack"), e.children(s, i, r, n);
    }
    componentDidMount() {
      let { emitter: e } = this.props;
      e.on("_beforeprint", this.handleBeforePrint),
        e.on("_afterprint", this.handleAfterPrint);
    }
    componentWillUnmount() {
      let { emitter: e } = this.props;
      e.off("_beforeprint", this.handleBeforePrint),
        e.off("_afterprint", this.handleAfterPrint);
    }
  }
  class gi {
    constructor(e) {
      (this.component = e.component),
        (this.isHitComboAllowed = e.isHitComboAllowed || null);
    }
    destroy() {}
  }
  function pi(e) {
    return { [e.component.uid]: e };
  }
  const mi = {};
  class vi {
    getCurrentData() {
      return this.currentDataManager.getCurrentData();
    }
    dispatch(e) {
      this.currentDataManager.dispatch(e);
    }
    get view() {
      return this.getCurrentData().viewApi;
    }
    batchRendering(e) {
      e();
    }
    updateSize() {
      this.trigger("_resize", !0);
    }
    setOption(e, t) {
      this.dispatch({ type: "SET_OPTION", optionName: e, rawOptionValue: t });
    }
    getOption(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }
    getAvailableLocaleCodes() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }
    on(e, t) {
      let { currentDataManager: n } = this;
      n.currentCalendarOptionsRefiners[e]
        ? n.emitter.on(e, t)
        : console.warn(`Unknown listener name '${e}'`);
    }
    off(e, t) {
      this.currentDataManager.emitter.off(e, t);
    }
    trigger(e, ...t) {
      this.currentDataManager.emitter.trigger(e, ...t);
    }
    changeView(e, t) {
      this.batchRendering(() => {
        if ((this.unselect(), t))
          if (t.start && t.end)
            this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e }),
              this.dispatch({
                type: "SET_OPTION",
                optionName: "visibleRange",
                rawOptionValue: t,
              });
          else {
            let { dateEnv: n } = this.getCurrentData();
            this.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e,
              dateMarker: n.createMarker(t),
            });
          }
        else this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e });
      });
    }
    zoomTo(e, t) {
      let n;
      (t = t || "day"),
        (n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t)),
        this.unselect(),
        n
          ? this.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: n.type,
              dateMarker: e,
            })
          : this.dispatch({ type: "CHANGE_DATE", dateMarker: e });
    }
    getUnitViewSpec(e) {
      let t,
        n,
        { viewSpecs: r, toolbarConfig: i } = this.getCurrentData(),
        s = [].concat(
          i.header ? i.header.viewsWithButtons : [],
          i.footer ? i.footer.viewsWithButtons : []
        );
      for (let e in r) s.push(e);
      for (t = 0; t < s.length; t += 1)
        if (((n = r[s[t]]), n && n.singleUnit === e)) return n;
      return null;
    }
    prev() {
      this.unselect(), this.dispatch({ type: "PREV" });
    }
    next() {
      this.unselect(), this.dispatch({ type: "NEXT" });
    }
    prevYear() {
      let e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, -1),
        });
    }
    nextYear() {
      let e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, 1),
        });
    }
    today() {
      let e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: Kn(e.calendarOptions.now, e.dateEnv),
        });
    }
    gotoDate(e) {
      let t = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.createMarker(e),
        });
    }
    incrementDate(e) {
      let t = this.getCurrentData(),
        n = jt(e);
      n &&
        (this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.add(t.currentDate, n),
        }));
    }
    getDate() {
      let e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }
    formatDate(e, t) {
      let { dateEnv: n } = this.getCurrentData();
      return n.format(n.createMarker(e), gn(t));
    }
    formatRange(e, t, n) {
      let { dateEnv: r } = this.getCurrentData();
      return r.formatRange(r.createMarker(e), r.createMarker(t), gn(n), n);
    }
    formatIso(e, t) {
      let { dateEnv: n } = this.getCurrentData();
      return n.formatIso(n.createMarker(e), { omitTime: t });
    }
    select(e, t) {
      let n;
      n =
        null == t
          ? null != e.start
            ? e
            : { start: e, end: null }
          : { start: e, end: t };
      let r = this.getCurrentData(),
        i = ii(n, r.dateEnv, jt({ days: 1 }));
      i &&
        (this.dispatch({ type: "SELECT_DATES", selection: i }), Ir(i, null, r));
    }
    unselect(e) {
      let t = this.getCurrentData();
      t.dateSelection &&
        (this.dispatch({ type: "UNSELECT_DATES" }),
        (function (e, t) {
          t.emitter.trigger("unselect", {
            jsEvent: e ? e.origEvent : null,
            view: t.viewApi || t.calendarApi.view,
          });
        })(e, t));
    }
    addEvent(e, t) {
      if (e instanceof zr) {
        let t = e._def,
          n = e._instance;
        return (
          this.getCurrentData().eventStore.defs[t.defId] ||
            (this.dispatch({
              type: "ADD_EVENTS",
              eventStore: hr({ def: t, instance: n }),
            }),
            this.triggerEventAdd(e)),
          e
        );
      }
      let n,
        r = this.getCurrentData();
      if (t instanceof jr) n = t.internalEventSource;
      else if ("boolean" == typeof t) t && ([n] = Re(r.eventSources));
      else if (null != t) {
        let e = this.getEventSourceById(t);
        if (!e)
          return (
            console.warn(`Could not find an event source with ID "${t}"`), null
          );
        n = e.internalEventSource;
      }
      let i = ar(e, n, r, !1);
      if (i) {
        let e = new zr(r, i.def, i.def.recurringDef ? null : i.instance);
        return (
          this.dispatch({ type: "ADD_EVENTS", eventStore: hr(i) }),
          this.triggerEventAdd(e),
          e
        );
      }
      return null;
    }
    triggerEventAdd(e) {
      let { emitter: t } = this.getCurrentData();
      t.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: () => {
          this.dispatch({ type: "REMOVE_EVENTS", eventStore: Ur(e) });
        },
      });
    }
    getEventById(e) {
      let t = this.getCurrentData(),
        { defs: n, instances: r } = t.eventStore;
      e = String(e);
      for (let i in n) {
        let s = n[i];
        if (s.publicId === e) {
          if (s.recurringDef) return new zr(t, s, null);
          for (let e in r) {
            let n = r[e];
            if (n.defId === s.defId) return new zr(t, s, n);
          }
        }
      }
      return null;
    }
    getEvents() {
      let e = this.getCurrentData();
      return Lr(e.eventStore, e);
    }
    removeAllEvents() {
      this.dispatch({ type: "REMOVE_ALL_EVENTS" });
    }
    getEventSources() {
      let e = this.getCurrentData(),
        t = e.eventSources,
        n = [];
      for (let r in t) n.push(new jr(e, t[r]));
      return n;
    }
    getEventSourceById(e) {
      let t = this.getCurrentData(),
        n = t.eventSources;
      e = String(e);
      for (let r in n) if (n[r].publicId === e) return new jr(t, n[r]);
      return null;
    }
    addEventSource(e) {
      let t = this.getCurrentData();
      if (e instanceof jr)
        return (
          t.eventSources[e.internalEventSource.sourceId] ||
            this.dispatch({
              type: "ADD_EVENT_SOURCES",
              sources: [e.internalEventSource],
            }),
          e
        );
      let n = wr(e, t);
      return n
        ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }),
          new jr(t, n))
        : null;
    }
    removeAllEventSources() {
      this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
    }
    refetchEvents() {
      this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
    }
    scrollToTime(e) {
      let t = jt(e);
      t && this.trigger("_scrollRequest", { time: t });
    }
  }
  function bi(e, t) {
    return (
      e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    );
  }
  function yi(e, t) {
    let n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom),
    };
    return n.left < n.right && n.top < n.bottom && n;
  }
  function Ei(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom),
    };
  }
  function Ai(e) {
    return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
  }
  function Di(e, t) {
    return { left: e.left - t.left, top: e.top - t.top };
  }
  const Si = { defs: {}, instances: {} };
  class wi {
    constructor() {
      (this.getKeysForEventDefs = Oe(this._getKeysForEventDefs)),
        (this.splitDateSelection = Oe(this._splitDateSpan)),
        (this.splitEventStore = Oe(this._splitEventStore)),
        (this.splitIndividualUi = Oe(this._splitIndividualUi)),
        (this.splitEventDrag = Oe(this._splitInteraction)),
        (this.splitEventResize = Oe(this._splitInteraction)),
        (this.eventUiBuilders = {});
    }
    splitProps(e) {
      let t = this.getKeyInfo(e),
        n = this.getKeysForEventDefs(e.eventStore),
        r = this.splitDateSelection(e.dateSelection),
        i = this.splitIndividualUi(e.eventUiBases, n),
        s = this.splitEventStore(e.eventStore, n),
        o = this.splitEventDrag(e.eventDrag),
        a = this.splitEventResize(e.eventResize),
        l = {};
      this.eventUiBuilders = we(t, (e, t) => this.eventUiBuilders[t] || Oe(Ci));
      for (let n in t) {
        let c = t[n],
          d = s[n] || Si,
          u = this.eventUiBuilders[n];
        l[n] = {
          businessHours: c.businessHours || e.businessHours,
          dateSelection: r[n] || null,
          eventStore: d,
          eventUiBases: u(e.eventUiBases[""], c.ui, i[n]),
          eventSelection: d.instances[e.eventSelection] ? e.eventSelection : "",
          eventDrag: o[n] || null,
          eventResize: a[n] || null,
        };
      }
      return l;
    }
    _splitDateSpan(e) {
      let t = {};
      if (e) {
        let n = this.getKeysForDateSpan(e);
        for (let r of n) t[r] = e;
      }
      return t;
    }
    _getKeysForEventDefs(e) {
      return we(e.defs, (e) => this.getKeysForEventDef(e));
    }
    _splitEventStore(e, t) {
      let { defs: n, instances: r } = e,
        i = {};
      for (let e in n)
        for (let r of t[e])
          i[r] || (i[r] = { defs: {}, instances: {} }), (i[r].defs[e] = n[e]);
      for (let e in r) {
        let n = r[e];
        for (let r of t[n.defId]) i[r] && (i[r].instances[e] = n);
      }
      return i;
    }
    _splitIndividualUi(e, t) {
      let n = {};
      for (let r in e)
        if (r) for (let i of t[r]) n[i] || (n[i] = {}), (n[i][r] = e[r]);
      return n;
    }
    _splitInteraction(e) {
      let t = {};
      if (e) {
        let n = this._splitEventStore(
            e.affectedEvents,
            this._getKeysForEventDefs(e.affectedEvents)
          ),
          r = this._getKeysForEventDefs(e.mutatedEvents),
          i = this._splitEventStore(e.mutatedEvents, r),
          s = (r) => {
            t[r] ||
              (t[r] = {
                affectedEvents: n[r] || Si,
                mutatedEvents: i[r] || Si,
                isEvent: e.isEvent,
              });
          };
        for (let e in n) s(e);
        for (let e in i) s(e);
      }
      return t;
    }
  }
  function Ci(e, t, n) {
    let r = [];
    e && r.push(e), t && r.push(t);
    let i = { "": Ar(r) };
    return n && Object.assign(i, n), i;
  }
  function Ri(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !Yn(r.activeRange, e)),
      isOther: Boolean(r && !Yn(r.currentRange, e)),
      isToday: Boolean(t && Yn(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end),
    };
  }
  function xi(e, t) {
    let n = ["fc-day", "fc-day-" + pt[e.dow]];
    return (
      e.isDisabled
        ? n.push("fc-day-disabled")
        : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))),
          e.isPast && n.push("fc-day-past"),
          e.isFuture && n.push("fc-day-future"),
          e.isOther && n.push("fc-day-other")),
      n
    );
  }
  const _i = gn({ year: "numeric", month: "long", day: "numeric" }),
    Ti = gn({ week: "long" });
  function ki(e, t, n = "day", r = !0) {
    const { dateEnv: i, options: s, calendarApi: o } = e;
    let a = i.format(t, "week" === n ? Ti : _i);
    if (s.navLinks) {
      let e = i.toDate(t);
      const l = (e) => {
        let r =
          "day" === n
            ? s.navLinkDayClick
            : "week" === n
            ? s.navLinkWeekClick
            : null;
        "function" == typeof r
          ? r.call(o, i.toDate(t), e)
          : ("string" == typeof r && (n = r), o.zoomTo(t, n));
      };
      return Object.assign(
        { title: ut(s.navLinkHint, [a, e], a), "data-navlink": "" },
        r ? Xe(l) : { onClick: l }
      );
    }
    return { "aria-label": a };
  }
  let Mi,
    Ii = null;
  function Oi() {
    return (
      null === Ii &&
        (Ii = (function () {
          let e = document.createElement("div");
          Ue(e, {
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl",
          }),
            (e.innerHTML = "<div></div>"),
            document.body.appendChild(e);
          let t =
            e.firstChild.getBoundingClientRect().left >
            e.getBoundingClientRect().left;
          return Pe(e), t;
        })()),
      Ii
    );
  }
  function Ni() {
    return (
      Mi ||
        (Mi = (function () {
          let e = document.createElement("div");
          (e.style.overflow = "scroll"),
            (e.style.position = "absolute"),
            (e.style.top = "-9999px"),
            (e.style.left = "-9999px"),
            document.body.appendChild(e);
          let t = Pi(e);
          return document.body.removeChild(e), t;
        })()),
      Mi
    );
  }
  function Pi(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth,
    };
  }
  function Hi(e, t = !1) {
    let n = window.getComputedStyle(e),
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
        scrollbarRight: 0,
      };
    return (
      Oi() && "rtl" === n.direction
        ? (c.scrollbarLeft = l)
        : (c.scrollbarRight = l),
      t &&
        ((c.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
        (c.paddingRight = parseInt(n.paddingRight, 10) || 0),
        (c.paddingTop = parseInt(n.paddingTop, 10) || 0),
        (c.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
      c
    );
  }
  function Bi(e, t = !1, n) {
    let r = n ? e.getBoundingClientRect() : ji(e),
      i = Hi(e, t),
      s = {
        left: r.left + i.borderLeft + i.scrollbarLeft,
        right: r.right - i.borderRight - i.scrollbarRight,
        top: r.top + i.borderTop,
        bottom: r.bottom - i.borderBottom - i.scrollbarBottom,
      };
    return (
      t &&
        ((s.left += i.paddingLeft),
        (s.right -= i.paddingRight),
        (s.top += i.paddingTop),
        (s.bottom -= i.paddingBottom)),
      s
    );
  }
  function ji(e) {
    let t = e.getBoundingClientRect();
    return {
      left: t.left + window.pageXOffset,
      top: t.top + window.pageYOffset,
      right: t.right + window.pageXOffset,
      bottom: t.bottom + window.pageYOffset,
    };
  }
  function zi(e) {
    let t = [];
    for (; e instanceof HTMLElement; ) {
      let n = window.getComputedStyle(e);
      if ("fixed" === n.position) break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
        (e = e.parentNode);
    }
    return t;
  }
  class Ui {
    constructor(e, t, n, r) {
      this.els = t;
      let i = (this.originClientRect = e.getBoundingClientRect());
      n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
    }
    buildElHorizontals(e) {
      let t = [],
        n = [];
      for (let r of this.els) {
        let i = r.getBoundingClientRect();
        t.push(i.left - e), n.push(i.right - e);
      }
      (this.lefts = t), (this.rights = n);
    }
    buildElVerticals(e) {
      let t = [],
        n = [];
      for (let r of this.els) {
        let i = r.getBoundingClientRect();
        t.push(i.top - e), n.push(i.bottom - e);
      }
      (this.tops = t), (this.bottoms = n);
    }
    leftToIndex(e) {
      let t,
        { lefts: n, rights: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    topToIndex(e) {
      let t,
        { tops: n, bottoms: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    getWidth(e) {
      return this.rights[e] - this.lefts[e];
    }
    getHeight(e) {
      return this.bottoms[e] - this.tops[e];
    }
  }
  class Li {
    getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
    getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
    canScrollVertically() {
      return this.getMaxScrollTop() > 0;
    }
    canScrollHorizontally() {
      return this.getMaxScrollLeft() > 0;
    }
    canScrollUp() {
      return this.getScrollTop() > 0;
    }
    canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
    canScrollLeft() {
      return this.getScrollLeft() > 0;
    }
    canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  }
  class Wi extends Li {
    constructor(e) {
      super(), (this.el = e);
    }
    getScrollTop() {
      return this.el.scrollTop;
    }
    getScrollLeft() {
      return this.el.scrollLeft;
    }
    setScrollTop(e) {
      this.el.scrollTop = e;
    }
    setScrollLeft(e) {
      this.el.scrollLeft = e;
    }
    getScrollWidth() {
      return this.el.scrollWidth;
    }
    getScrollHeight() {
      return this.el.scrollHeight;
    }
    getClientHeight() {
      return this.el.clientHeight;
    }
    getClientWidth() {
      return this.el.clientWidth;
    }
  }
  class Fi extends Li {
    getScrollTop() {
      return window.pageYOffset;
    }
    getScrollLeft() {
      return window.pageXOffset;
    }
    setScrollTop(e) {
      window.scroll(window.pageXOffset, e);
    }
    setScrollLeft(e) {
      window.scroll(e, window.pageYOffset);
    }
    getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
    getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
    getClientHeight() {
      return document.documentElement.clientHeight;
    }
    getClientWidth() {
      return document.documentElement.clientWidth;
    }
  }
  class Vi extends In {
    constructor() {
      super(...arguments), (this.uid = Ke());
    }
    prepareHits() {}
    queryHit(e, t, n, r) {
      return null;
    }
    isValidSegDownEl(e) {
      return (
        !this.props.eventDrag &&
        !this.props.eventResize &&
        !He(e, ".fc-event-mirror")
      );
    }
    isValidDateDownEl(e) {
      return !(
        He(e, ".fc-event:not(.fc-bg-event)") ||
        He(e, ".fc-more-link") ||
        He(e, "a[data-navlink]") ||
        He(e, ".fc-popover")
      );
    }
  }
  class Gi {
    constructor() {
      (this.strictOrder = !1),
        (this.allowReslicing = !1),
        (this.maxCoord = -1),
        (this.maxStackCnt = -1),
        (this.levelCoords = []),
        (this.entriesByLevel = []),
        (this.stackCnts = {});
    }
    addSegs(e) {
      let t = [];
      for (let n of e) this.insertEntry(n, t);
      return t;
    }
    insertEntry(e, t) {
      let n = this.findInsertion(e);
      return this.isInsertionValid(n, e)
        ? (this.insertEntryAt(e, n), 1)
        : this.handleInvalidInsertion(n, e, t);
    }
    isInsertionValid(e, t) {
      return (
        (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) &&
        (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
      );
    }
    handleInvalidInsertion(e, t, n) {
      return this.allowReslicing && e.touchingEntry
        ? this.splitEntry(t, e.touchingEntry, n)
        : (n.push(t), 0);
    }
    splitEntry(e, t, n) {
      let r = 0,
        i = [],
        s = e.span,
        o = t.span;
      return (
        s.start < o.start &&
          (r += this.insertEntry(
            {
              index: e.index,
              thickness: e.thickness,
              span: { start: s.start, end: o.start },
            },
            i
          )),
        s.end > o.end &&
          (r += this.insertEntry(
            {
              index: e.index,
              thickness: e.thickness,
              span: { start: o.end, end: s.end },
            },
            i
          )),
        r
          ? (n.push(
              { index: e.index, thickness: e.thickness, span: Zi(o, s) },
              ...i
            ),
            r)
          : (n.push(e), 0)
      );
    }
    insertEntryAt(e, t) {
      let { entriesByLevel: n, levelCoords: r } = this;
      -1 === t.lateral
        ? (Xi(r, t.level, t.levelCoord), Xi(n, t.level, [e]))
        : Xi(n[t.level], t.lateral, e),
        (this.stackCnts[qi(e)] = t.stackCnt);
    }
    findInsertion(e) {
      let {
          levelCoords: t,
          entriesByLevel: n,
          strictOrder: r,
          stackCnts: i,
        } = this,
        s = t.length,
        o = 0,
        a = -1,
        l = -1,
        c = null,
        d = 0;
      for (let u = 0; u < s; u += 1) {
        let s = t[u];
        if (!r && s >= o + e.thickness) break;
        let h,
          f = n[u],
          g = Ji(f, e.span.start, Qi),
          p = g[0] + g[1];
        for (; (h = f[p]) && h.span.start < e.span.end; ) {
          let e = s + h.thickness;
          e > o && ((o = e), (c = h), (a = u), (l = p)),
            e === o && (d = Math.max(d, i[qi(h)] + 1)),
            (p += 1);
        }
      }
      let u = 0;
      if (c) for (u = a + 1; u < s && t[u] < o; ) u += 1;
      let h = -1;
      return (
        u < s && t[u] === o && (h = Ji(n[u], e.span.end, Qi)[0]),
        {
          touchingLevel: a,
          touchingLateral: l,
          touchingEntry: c,
          stackCnt: d,
          levelCoord: o,
          level: u,
          lateral: h,
        }
      );
    }
    toRects() {
      let { entriesByLevel: e, levelCoords: t } = this,
        n = e.length,
        r = [];
      for (let i = 0; i < n; i += 1) {
        let n = e[i],
          s = t[i];
        for (let e of n)
          r.push(Object.assign(Object.assign({}, e), { levelCoord: s }));
      }
      return r;
    }
  }
  function Qi(e) {
    return e.span.end;
  }
  function qi(e) {
    return e.index + ":" + e.span.start;
  }
  function Yi(e) {
    let t = [];
    for (let i of e) {
      let e = [],
        s = { span: i.span, entries: [i] };
      for (let i of t)
        Zi(i.span, s.span)
          ? (s = {
              entries: i.entries.concat(s.entries),
              span:
                ((n = i.span),
                (r = s.span),
                {
                  start: Math.min(n.start, r.start),
                  end: Math.max(n.end, r.end),
                }),
            })
          : e.push(i);
      e.push(s), (t = e);
    }
    var n, r;
    return t;
  }
  function Zi(e, t) {
    let n = Math.max(e.start, t.start),
      r = Math.min(e.end, t.end);
    return n < r ? { start: n, end: r } : null;
  }
  function Xi(e, t, n) {
    e.splice(t, 0, n);
  }
  function Ji(e, t, n) {
    let r = 0,
      i = e.length;
    if (!i || t < n(e[r])) return [0, 0];
    if (t > n(e[i - 1])) return [i, 0];
    for (; r < i; ) {
      let s = Math.floor(r + (i - r) / 2),
        o = n(e[s]);
      if (t < o) i = s;
      else {
        if (!(t > o)) return [s, 1];
        r = s + 1;
      }
    }
    return [r, 0];
  }
  class $i {
    constructor(e, t) {
      this.emitter = new Tr();
    }
    destroy() {}
    setMirrorIsVisible(e) {}
    setMirrorNeedsRevert(e) {}
    setAutoScrollEnabled(e) {}
  }
  const Ki = {},
    es = { startTime: jt, duration: jt, create: Boolean, sourceId: String };
  function ts(e) {
    let { refined: t, extra: n } = Sn(e, es);
    return {
      startTime: t.startTime || null,
      duration: t.duration || null,
      create: null == t.create || t.create,
      sourceId: t.sourceId,
      leftoverProps: n,
    };
  }
  function ns(e, t) {
    return gn(
      !e || t > 10
        ? { weekday: "short" }
        : t > 1
        ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }
        : { weekday: "long" }
    );
  }
  const rs = "fc-col-header-cell";
  function is(e) {
    return e.text;
  }
  class ss extends In {
    render() {
      let { dateEnv: e, options: t, theme: n, viewApi: r } = this.context,
        { props: i } = this,
        { date: s, dateProfile: o } = i,
        a = Ri(s, i.todayRange, null, o),
        l = [rs].concat(xi(a, n)),
        c = e.format(s, i.dayHeaderFormat),
        d = !a.isDisabled && i.colCnt > 1 ? ki(this.context, s) : {},
        u = Object.assign(
          Object.assign(
            Object.assign({ date: e.toDate(s), view: r }, i.extraRenderProps),
            { text: c }
          ),
          a
        );
      return f(
        jn,
        {
          elTag: "th",
          elClasses: l,
          elAttrs: Object.assign(
            {
              role: "columnheader",
              colSpan: i.colSpan,
              "data-date": a.isDisabled ? void 0 : qt(s),
            },
            i.extraDataAttrs
          ),
          renderProps: u,
          generatorName: "dayHeaderContent",
          generator: t.dayHeaderContent || is,
          classNameGenerator: t.dayHeaderClassNames,
          didMount: t.dayHeaderDidMount,
          willUnmount: t.dayHeaderWillUnmount,
        },
        (e) =>
          f(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            !a.isDisabled &&
              f(e, {
                elTag: "a",
                elAttrs: d,
                elClasses: [
                  "fc-col-header-cell-cushion",
                  i.isSticky && "fc-sticky",
                ],
              })
          )
      );
    }
  }
  const os = gn({ weekday: "long" });
  class as extends In {
    render() {
      let { props: e } = this,
        { dateEnv: t, theme: n, viewApi: r, options: i } = this.context,
        s = vt(new Date(2592e5), e.dow),
        o = {
          dow: e.dow,
          isDisabled: !1,
          isFuture: !1,
          isPast: !1,
          isToday: !1,
          isOther: !1,
        },
        a = t.format(s, e.dayHeaderFormat),
        l = Object.assign(
          Object.assign(
            Object.assign(Object.assign({ date: s }, o), { view: r }),
            e.extraRenderProps
          ),
          { text: a }
        );
      return f(
        jn,
        {
          elTag: "th",
          elClasses: [rs, ...xi(o, n), ...(e.extraClassNames || [])],
          elAttrs: Object.assign(
            { role: "columnheader", colSpan: e.colSpan },
            e.extraDataAttrs
          ),
          renderProps: l,
          generatorName: "dayHeaderContent",
          generator: i.dayHeaderContent || is,
          classNameGenerator: i.dayHeaderClassNames,
          didMount: i.dayHeaderDidMount,
          willUnmount: i.dayHeaderWillUnmount,
        },
        (n) =>
          f(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            f(n, {
              elTag: "a",
              elClasses: [
                "fc-col-header-cell-cushion",
                e.isSticky && "fc-sticky",
              ],
              elAttrs: { "aria-label": t.format(s, os) },
            })
          )
      );
    }
  }
  class ls extends m {
    constructor(e, t) {
      super(e, t),
        (this.initialNowDate = Kn(t.options.now, t.dateEnv)),
        (this.initialNowQueriedMs = new Date().valueOf()),
        (this.state = this.computeTiming().currentState);
    }
    render() {
      let { props: e, state: t } = this;
      return e.children(t.nowDate, t.todayRange);
    }
    componentDidMount() {
      this.setTimeout();
    }
    componentDidUpdate(e) {
      e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }
    componentWillUnmount() {
      this.clearTimeout();
    }
    computeTiming() {
      let { props: e, context: t } = this,
        n = bt(
          this.initialNowDate,
          new Date().valueOf() - this.initialNowQueriedMs
        ),
        r = t.dateEnv.startOf(n, e.unit),
        i = t.dateEnv.add(r, jt(1, e.unit)),
        s = i.valueOf() - n.valueOf();
      return (
        (s = Math.min(864e5, s)),
        {
          currentState: { nowDate: r, todayRange: cs(r) },
          nextState: { nowDate: i, todayRange: cs(i) },
          waitMs: s,
        }
      );
    }
    setTimeout() {
      let { nextState: e, waitMs: t } = this.computeTiming();
      this.timeoutId = setTimeout(() => {
        this.setState(e, () => {
          this.setTimeout();
        });
      }, t);
    }
    clearTimeout() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }
  }
  function cs(e) {
    let t = wt(e);
    return { start: t, end: vt(t, 1) };
  }
  ls.contextType = Tn;
  class ds extends In {
    constructor() {
      super(...arguments), (this.createDayHeaderFormatter = Oe(us));
    }
    render() {
      let { context: e } = this,
        {
          dates: t,
          dateProfile: n,
          datesRepDistinctDays: r,
          renderIntro: i,
        } = this.props,
        s = this.createDayHeaderFormatter(
          e.options.dayHeaderFormat,
          r,
          t.length
        );
      return f(ls, { unit: "day" }, (e, o) =>
        f(
          "tr",
          { role: "row" },
          i && i("day"),
          t.map((e) =>
            r
              ? f(ss, {
                  key: e.toISOString(),
                  date: e,
                  dateProfile: n,
                  todayRange: o,
                  colCnt: t.length,
                  dayHeaderFormat: s,
                })
              : f(as, {
                  key: e.getUTCDay(),
                  dow: e.getUTCDay(),
                  dayHeaderFormat: s,
                })
          )
        )
      );
    }
  }
  function us(e, t, n) {
    return e || ns(t, n);
  }
  class hs {
    constructor(e, t) {
      let n = e.start,
        { end: r } = e,
        i = [],
        s = [],
        o = -1;
      for (; n < r; )
        t.isHiddenDay(n) ? i.push(o + 0.5) : ((o += 1), i.push(o), s.push(n)),
          (n = vt(n, 1));
      (this.dates = s), (this.indices = i), (this.cnt = s.length);
    }
    sliceRange(e) {
      let t = this.getDateDayIndex(e.start),
        n = this.getDateDayIndex(vt(e.end, -1)),
        r = Math.max(0, t),
        i = Math.min(this.cnt - 1, n);
      return (
        (r = Math.ceil(r)),
        (i = Math.floor(i)),
        r <= i
          ? { firstIndex: r, lastIndex: i, isStart: t === r, isEnd: n === i }
          : null
      );
    }
    getDateDayIndex(e) {
      let { indices: t } = this,
        n = Math.floor(Et(this.dates[0], e));
      return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
    }
  }
  class fs {
    constructor(e, t) {
      let n,
        r,
        i,
        { dates: s } = e;
      if (t) {
        for (
          r = s[0].getUTCDay(), n = 1;
          n < s.length && s[n].getUTCDay() !== r;
          n += 1
        );
        i = Math.ceil(s.length / n);
      } else (i = 1), (n = s.length);
      (this.rowCnt = i),
        (this.colCnt = n),
        (this.daySeries = e),
        (this.cells = this.buildCells()),
        (this.headerDates = this.buildHeaderDates());
    }
    buildCells() {
      let e = [];
      for (let t = 0; t < this.rowCnt; t += 1) {
        let n = [];
        for (let e = 0; e < this.colCnt; e += 1) n.push(this.buildCell(t, e));
        e.push(n);
      }
      return e;
    }
    buildCell(e, t) {
      let n = this.daySeries.dates[e * this.colCnt + t];
      return { key: n.toISOString(), date: n };
    }
    buildHeaderDates() {
      let e = [];
      for (let t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
      return e;
    }
    sliceRange(e) {
      let { colCnt: t } = this,
        n = this.daySeries.sliceRange(e),
        r = [];
      if (n) {
        let { firstIndex: e, lastIndex: i } = n,
          s = e;
        for (; s <= i; ) {
          let o = Math.floor(s / t),
            a = Math.min((o + 1) * t, i + 1);
          r.push({
            row: o,
            firstCol: s % t,
            lastCol: (a - 1) % t,
            isStart: n.isStart && s === e,
            isEnd: n.isEnd && a - 1 === i,
          }),
            (s = a);
        }
      }
      return r;
    }
  }
  class gs {
    constructor() {
      (this.sliceBusinessHours = Oe(this._sliceBusinessHours)),
        (this.sliceDateSelection = Oe(this._sliceDateSpan)),
        (this.sliceEventStore = Oe(this._sliceEventStore)),
        (this.sliceEventDrag = Oe(this._sliceInteraction)),
        (this.sliceEventResize = Oe(this._sliceInteraction)),
        (this.forceDayIfListItem = !1);
    }
    sliceProps(e, t, n, r, ...i) {
      let { eventUiBases: s } = e,
        o = this.sliceEventStore(e.eventStore, s, t, n, ...i);
      return {
        dateSelectionSegs: this.sliceDateSelection(e.dateSelection, s, r, ...i),
        businessHourSegs: this.sliceBusinessHours(
          e.businessHours,
          t,
          n,
          r,
          ...i
        ),
        fgEventSegs: o.fg,
        bgEventSegs: o.bg,
        eventDrag: this.sliceEventDrag(e.eventDrag, s, t, n, ...i),
        eventResize: this.sliceEventResize(e.eventResize, s, t, n, ...i),
        eventSelection: e.eventSelection,
      };
    }
    sliceNowDate(e, t, ...n) {
      return this._sliceDateSpan(
        { range: { start: e, end: bt(e, 1) }, allDay: !1 },
        {},
        t,
        ...n
      );
    }
    _sliceBusinessHours(e, t, n, r, ...i) {
      return e
        ? this._sliceEventStore(nr(e, ps(t, Boolean(n)), r), {}, t, n, ...i).bg
        : [];
    }
    _sliceEventStore(e, t, n, r, ...i) {
      if (e) {
        let s = Wr(e, t, ps(n, Boolean(r)), r);
        return {
          bg: this.sliceEventRanges(s.bg, i),
          fg: this.sliceEventRanges(s.fg, i),
        };
      }
      return { bg: [], fg: [] };
    }
    _sliceInteraction(e, t, n, r, ...i) {
      if (!e) return null;
      let s = Wr(e.mutatedEvents, t, ps(n, Boolean(r)), r);
      return {
        segs: this.sliceEventRanges(s.fg, i),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent,
      };
    }
    _sliceDateSpan(e, t, n, ...r) {
      if (!e) return [];
      let i = (function (e, t, n) {
          let r = lr({ editable: !1 }, n),
            i = dr(r.refined, r.extra, "", e.allDay, !0, n);
          return {
            def: i,
            ui: Qr(i, t),
            instance: tr(i.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0,
          };
        })(e, t, n),
        s = this.sliceRange(e.range, ...r);
      for (let e of s) e.eventRange = i;
      return s;
    }
    sliceEventRanges(e, t) {
      let n = [];
      for (let r of e) n.push(...this.sliceEventRange(r, t));
      return n;
    }
    sliceEventRange(e, t) {
      let n = e.range;
      this.forceDayIfListItem &&
        "list-item" === e.ui.display &&
        (n = { start: n.start, end: vt(n.start, 1) });
      let r = this.sliceRange(n, ...t);
      for (let t of r)
        (t.eventRange = e),
          (t.isStart = e.isStart && t.isStart),
          (t.isEnd = e.isEnd && t.isEnd);
      return r;
    }
  }
  function ps(e, t) {
    let n = e.activeRange;
    return t
      ? n
      : {
          start: bt(n.start, e.slotMinTime.milliseconds),
          end: bt(n.end, e.slotMaxTime.milliseconds - 864e5),
        };
  }
  function ms(e, t, n) {
    let { instances: r } = e.mutatedEvents;
    for (let e in r) if (!qn(t.validRange, r[e].range)) return !1;
    return bs({ eventDrag: e }, n);
  }
  function vs(e, t, n) {
    return !!qn(t.validRange, e.range) && bs({ dateSelection: e }, n);
  }
  function bs(e, t) {
    let n = t.getCurrentData(),
      r = Object.assign(
        {
          businessHours: n.businessHours,
          dateSelection: "",
          eventStore: n.eventStore,
          eventUiBases: n.eventUiBases,
          eventSelection: "",
          eventDrag: null,
          eventResize: null,
        },
        e
      );
    return (t.pluginHooks.isPropsValid || ys)(r, t);
  }
  function ys(e, t, n = {}, r) {
    return (
      !(
        e.eventDrag &&
        !(function (e, t, n, r) {
          let i = t.getCurrentData(),
            s = e.eventDrag,
            o = s.mutatedEvents,
            a = o.defs,
            l = o.instances,
            c = Gr(a, s.isEvent ? e.eventUiBases : { "": i.selectionConfig });
          r && (c = we(c, r));
          let d =
              ((g = e.eventStore),
              (p = s.affectedEvents.instances),
              {
                defs: g.defs,
                instances: Se(g.instances, (e) => !p[e.instanceId]),
              }),
            u = d.defs,
            h = d.instances,
            f = Gr(u, e.eventUiBases);
          var g, p;
          for (let r in l) {
            let o = l[r],
              g = o.range,
              p = c[o.defId],
              m = a[o.defId];
            if (!Es(p.constraints, g, d, e.businessHours, t)) return !1;
            let { eventOverlap: v } = t.options,
              b = "function" == typeof v ? v : null;
            for (let e in h) {
              let n = h[e];
              if (Qn(g, n.range)) {
                if (!1 === f[n.defId].overlap && s.isEvent) return !1;
                if (!1 === p.overlap) return !1;
                if (b && !b(new zr(t, u[n.defId], n), new zr(t, m, o)))
                  return !1;
              }
            }
            let y = i.eventStore;
            for (let e of p.allows) {
              let i,
                s = Object.assign(Object.assign({}, n), {
                  range: o.range,
                  allDay: m.allDay,
                }),
                a = y.defs[m.defId],
                l = y.instances[r];
              if (((i = a ? new zr(t, a, l) : new zr(t, m)), !e(Or(s, t), i)))
                return !1;
            }
          }
          return !0;
        })(e, t, n, r)
      ) &&
      !(
        e.dateSelection &&
        !(function (e, t, n, r) {
          let i = e.eventStore,
            s = i.defs,
            o = i.instances,
            a = e.dateSelection,
            l = a.range,
            { selectionConfig: c } = t.getCurrentData();
          r && (c = r(c));
          if (!Es(c.constraints, l, i, e.businessHours, t)) return !1;
          let { selectOverlap: d } = t.options,
            u = "function" == typeof d ? d : null;
          for (let e in o) {
            let n = o[e];
            if (Qn(l, n.range)) {
              if (!1 === c.overlap) return !1;
              if (u && !u(new zr(t, s[n.defId], n), null)) return !1;
            }
          }
          for (let e of c.allows) {
            let r = Object.assign(Object.assign({}, n), a);
            if (!e(Or(r, t), null)) return !1;
          }
          return !0;
        })(e, t, n, r)
      )
    );
  }
  function Es(e, t, n, r, i) {
    for (let s of e) if (!Ss(As(s, t, n, r, i), t)) return !1;
    return !0;
  }
  function As(e, t, n, r, i) {
    return "businessHours" === e
      ? Ds(nr(r, t, i))
      : "string" == typeof e
      ? Ds(mr(n, (t) => t.groupId === e))
      : "object" == typeof e && e
      ? Ds(nr(e, t, i))
      : [];
  }
  function Ds(e) {
    let { instances: t } = e,
      n = [];
    for (let e in t) n.push(t[e].range);
    return n;
  }
  function Ss(e, t) {
    for (let n of e) if (qn(n, t)) return !0;
    return !1;
  }
  const ws = /^(visible|hidden)$/;
  class Cs extends In {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          (this.el = e), On(this.props.elRef, e);
        });
    }
    render() {
      let { props: e } = this,
        { liquid: t, liquidIsAbsolute: n } = e,
        r = t && n,
        i = ["fc-scroller"];
      return (
        t &&
          (n
            ? i.push("fc-scroller-liquid-absolute")
            : i.push("fc-scroller-liquid")),
        f(
          "div",
          {
            ref: this.handleEl,
            className: i.join(" "),
            style: {
              overflowX: e.overflowX,
              overflowY: e.overflowY,
              left: (r && -(e.overcomeLeft || 0)) || "",
              right: (r && -(e.overcomeRight || 0)) || "",
              bottom: (r && -(e.overcomeBottom || 0)) || "",
              marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
              marginRight: (!r && -(e.overcomeRight || 0)) || "",
              marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
              maxHeight: e.maxHeight || "",
            },
          },
          e.children
        )
      );
    }
    needsXScrolling() {
      if (ws.test(this.props.overflowX)) return !1;
      let { el: e } = this,
        t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
        { children: n } = e;
      for (let e = 0; e < n.length; e += 1) {
        if (n[e].getBoundingClientRect().width > t) return !0;
      }
      return !1;
    }
    needsYScrolling() {
      if (ws.test(this.props.overflowY)) return !1;
      let { el: e } = this,
        t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
        { children: n } = e;
      for (let e = 0; e < n.length; e += 1) {
        if (n[e].getBoundingClientRect().height > t) return !0;
      }
      return !1;
    }
    getXScrollbarWidth() {
      return ws.test(this.props.overflowX)
        ? 0
        : this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      return ws.test(this.props.overflowY)
        ? 0
        : this.el.offsetWidth - this.el.clientWidth;
    }
  }
  class Rs {
    constructor(e) {
      (this.masterCallback = e),
        (this.currentMap = {}),
        (this.depths = {}),
        (this.callbackMap = {}),
        (this.handleValue = (e, t) => {
          let { depths: n, currentMap: r } = this,
            i = !1,
            s = !1;
          null !== e
            ? ((i = t in r), (r[t] = e), (n[t] = (n[t] || 0) + 1), (s = !0))
            : ((n[t] -= 1),
              n[t] || (delete r[t], delete this.callbackMap[t], (i = !0))),
            this.masterCallback &&
              (i && this.masterCallback(null, String(t)),
              s && this.masterCallback(e, String(t)));
        });
    }
    createRef(e) {
      let t = this.callbackMap[e];
      return (
        t ||
          (t = this.callbackMap[e] =
            (t) => {
              this.handleValue(t, String(e));
            }),
        t
      );
    }
    collect(e, t, n) {
      return Me(this.currentMap, e, t, n);
    }
    getAll() {
      return Re(this.currentMap);
    }
  }
  function xs(e) {
    let t = je(e, ".fc-scrollgrid-shrink"),
      n = 0;
    for (let e of t) n = Math.max(n, gt(e));
    return Math.ceil(n);
  }
  function _s(e, t) {
    return e.liquid && t.liquid;
  }
  function Ts(e, t) {
    return null != t.maxHeight || _s(e, t);
  }
  function ks(e, t, n, r) {
    let { expandRows: i } = n;
    return "function" == typeof t.content
      ? t.content(n)
      : f(
          "table",
          {
            role: "presentation",
            className: [
              t.tableClassName,
              e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
            ].join(" "),
            style: {
              minWidth: n.tableMinWidth,
              width: n.clientWidth,
              height: i ? n.clientHeight : "",
            },
          },
          n.tableColGroupNode,
          f(
            r ? "thead" : "tbody",
            { role: "presentation" },
            "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent
          )
        );
  }
  function Ms(e, t) {
    return Ie(e, t, xe);
  }
  function Is(e, t) {
    let n = [];
    for (let r of e) {
      let e = r.span || 1;
      for (let i = 0; i < e; i += 1)
        n.push(
          f("col", {
            style: {
              width: "shrink" === r.width ? Os(t) : r.width || "",
              minWidth: r.minWidth || "",
            },
          })
        );
    }
    return f("colgroup", {}, ...n);
  }
  function Os(e) {
    return null == e ? 4 : e;
  }
  function Ns(e) {
    for (let t of e) if ("shrink" === t.width) return !0;
    return !1;
  }
  function Ps(e, t) {
    let n = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && n.push("fc-scrollgrid-liquid"), n;
  }
  function Hs(e, t) {
    let n = [
      "fc-scrollgrid-section",
      "fc-scrollgrid-section-" + e.type,
      e.className,
    ];
    return (
      t &&
        e.liquid &&
        null == e.maxHeight &&
        n.push("fc-scrollgrid-section-liquid"),
      e.isSticky && n.push("fc-scrollgrid-section-sticky"),
      n
    );
  }
  function Bs(e) {
    return f("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: { width: e.clientWidth, minWidth: e.tableMinWidth },
    });
  }
  function js(e) {
    let { stickyHeaderDates: t } = e;
    return (
      (null != t && "auto" !== t) ||
        (t = "auto" === e.height || "auto" === e.viewHeight),
      t
    );
  }
  function zs(e) {
    let { stickyFooterScrollbar: t } = e;
    return (
      (null != t && "auto" !== t) ||
        (t = "auto" === e.height || "auto" === e.viewHeight),
      t
    );
  }
  class Us extends In {
    constructor() {
      super(...arguments),
        (this.processCols = Oe((e) => e, Ms)),
        (this.renderMicroColGroup = Oe(Is)),
        (this.scrollerRefs = new Rs()),
        (this.scrollerElRefs = new Rs(this._handleScrollerEl.bind(this))),
        (this.state = {
          shrinkWidth: null,
          forceYScrollbars: !1,
          scrollerClientWidths: {},
          scrollerClientHeights: {},
        }),
        (this.handleSizing = () => {
          this.safeSetState(
            Object.assign(
              { shrinkWidth: this.computeShrinkWidth() },
              this.computeScrollerDims()
            )
          );
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        r = e.sections || [],
        i = this.processCols(e.cols),
        s = this.renderMicroColGroup(i, t.shrinkWidth),
        o = Ps(e.liquid, n);
      e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
      let a,
        l = r.length,
        c = 0,
        d = [],
        u = [],
        h = [];
      for (; c < l && "header" === (a = r[c]).type; )
        d.push(this.renderSection(a, s, !0)), (c += 1);
      for (; c < l && "body" === (a = r[c]).type; )
        u.push(this.renderSection(a, s, !1)), (c += 1);
      for (; c < l && "footer" === (a = r[c]).type; )
        h.push(this.renderSection(a, s, !0)), (c += 1);
      let g = !hi();
      const p = { role: "rowgroup" };
      return f(
        "table",
        { role: "grid", className: o.join(" "), style: { height: e.height } },
        Boolean(!g && d.length) && f("thead", p, ...d),
        Boolean(!g && u.length) && f("tbody", p, ...u),
        Boolean(!g && h.length) && f("tfoot", p, ...h),
        g && f("tbody", p, ...d, ...u, ...h)
      );
    }
    renderSection(e, t, n) {
      return "outerContent" in e
        ? f(p, { key: e.key }, e.outerContent)
        : f(
            "tr",
            {
              key: e.key,
              role: "presentation",
              className: Hs(e, this.props.liquid).join(" "),
            },
            this.renderChunkTd(e, t, e.chunk, n)
          );
    }
    renderChunkTd(e, t, n, r) {
      if ("outerContent" in n) return n.outerContent;
      let { props: i } = this,
        {
          forceYScrollbars: s,
          scrollerClientWidths: o,
          scrollerClientHeights: a,
        } = this.state,
        l = Ts(i, e),
        c = _s(i, e),
        d = i.liquid ? (s ? "scroll" : l ? "auto" : "hidden") : "visible",
        u = e.key,
        h = ks(
          e,
          n,
          {
            tableColGroupNode: t,
            tableMinWidth: "",
            clientWidth: i.collapsibleWidth || void 0 === o[u] ? null : o[u],
            clientHeight: void 0 !== a[u] ? a[u] : null,
            expandRows: e.expandRows,
            syncRowHeights: !1,
            rowSyncHeights: [],
            reportRowHeightChange: () => {},
          },
          r
        );
      return f(
        r ? "th" : "td",
        { ref: n.elRef, role: "presentation" },
        f(
          "div",
          {
            className:
              "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : ""),
          },
          f(
            Cs,
            {
              ref: this.scrollerRefs.createRef(u),
              elRef: this.scrollerElRefs.createRef(u),
              overflowY: d,
              overflowX: i.liquid ? "hidden" : "visible",
              maxHeight: e.maxHeight,
              liquid: c,
              liquidIsAbsolute: !0,
            },
            h
          )
        )
      );
    }
    _handleScrollerEl(e, t) {
      let n = (function (e, t) {
        for (let n of e) if (n.key === t) return n;
        return null;
      })(this.props.sections, t);
      n && On(n.chunk.scrollerElRef, e);
    }
    componentDidMount() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
      this.handleSizing();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
      return Ns(this.props.cols) ? xs(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let e = Ni(),
        { scrollerRefs: t, scrollerElRefs: n } = this,
        r = !1,
        i = {},
        s = {};
      for (let e in t.currentMap) {
        let n = t.currentMap[e];
        if (n && n.needsYScrolling()) {
          r = !0;
          break;
        }
      }
      for (let t of this.props.sections) {
        let o = t.key,
          a = n.currentMap[o];
        if (a) {
          let t = a.parentNode;
          (i[o] = Math.floor(t.getBoundingClientRect().width - (r ? e.y : 0))),
            (s[o] = Math.floor(t.getBoundingClientRect().height));
        }
      }
      return {
        forceYScrollbars: r,
        scrollerClientWidths: i,
        scrollerClientHeights: s,
      };
    }
  }
  Us.addStateEquality({ scrollerClientWidths: xe, scrollerClientHeights: xe });
  class Ls extends In {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          e &&
            (function (e, t) {
              e.fcSeg = t;
            })(e, this.props.seg);
        });
    }
    render() {
      const { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        { eventRange: i } = r,
        { ui: s } = i,
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
          isResizing: Boolean(e.isResizing),
        };
      return f(
        jn,
        Object.assign({}, e, {
          elRef: this.handleEl,
          elClasses: [
            ...ei(o),
            ...r.eventRange.ui.classNames,
            ...(e.elClasses || []),
          ],
          renderProps: o,
          generatorName: "eventContent",
          generator: n.eventContent || e.defaultGenerator,
          classNameGenerator: n.eventClassNames,
          didMount: n.eventDidMount,
          willUnmount: n.eventWillUnmount,
        })
      );
    }
  }
  class Ws extends In {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        { ui: i } = r.eventRange,
        s = $r(
          r,
          n.eventTimeFormat || e.defaultTimeFormat,
          t,
          e.defaultDisplayEventTime,
          e.defaultDisplayEventEnd
        );
      return f(
        Ls,
        Object.assign({}, e, {
          elTag: "a",
          elStyle: {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor,
          },
          elAttrs: ni(r, t),
          defaultGenerator: Fs,
          timeText: s,
        }),
        (e, t) =>
          f(
            p,
            null,
            f(e, {
              elTag: "div",
              elClasses: ["fc-event-main"],
              elStyle: { color: t.textColor },
            }),
            Boolean(t.isStartResizable) &&
              f("div", {
                className: "fc-event-resizer fc-event-resizer-start",
              }),
            Boolean(t.isEndResizable) &&
              f("div", { className: "fc-event-resizer fc-event-resizer-end" })
          )
      );
    }
  }
  function Fs(e) {
    return f(
      "div",
      { className: "fc-event-main-frame" },
      e.timeText && f("div", { className: "fc-event-time" }, e.timeText),
      f(
        "div",
        { className: "fc-event-title-container" },
        f(
          "div",
          { className: "fc-event-title fc-sticky" },
          e.event.title || f(p, null, " ")
        )
      )
    );
  }
  const Vs = (e) =>
      f(Tn.Consumer, null, (t) => {
        let { options: n } = t,
          r = {
            isAxis: e.isAxis,
            date: t.dateEnv.toDate(e.date),
            view: t.viewApi,
          };
        return f(
          jn,
          Object.assign({}, e, {
            elTag: e.elTag || "div",
            renderProps: r,
            generatorName: "nowIndicatorContent",
            generator: n.nowIndicatorContent,
            classNameGenerator: n.nowIndicatorClassNames,
            didMount: n.nowIndicatorDidMount,
            willUnmount: n.nowIndicatorWillUnmount,
          })
        );
      }),
    Gs = gn({ day: "numeric" });
  class Qs extends In {
    constructor() {
      super(...arguments), (this.refineRenderProps = Ne(Ys));
    }
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = this.refineRenderProps({
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          showDayNumber: e.showDayNumber,
          extraRenderProps: e.extraRenderProps,
          viewApi: t.viewApi,
          dateEnv: t.dateEnv,
        });
      return f(
        jn,
        Object.assign({}, e, {
          elClasses: [...xi(r, t.theme), ...(e.elClasses || [])],
          elAttrs: Object.assign(
            Object.assign({}, e.elAttrs),
            r.isDisabled ? {} : { "data-date": qt(e.date) }
          ),
          renderProps: r,
          generatorName: "dayCellContent",
          generator: n.dayCellContent || e.defaultGenerator,
          classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
          didMount: n.dayCellDidMount,
          willUnmount: n.dayCellWillUnmount,
        })
      );
    }
  }
  function qs(e) {
    return Boolean(e.dayCellContent || Pn("dayCellContent", e));
  }
  function Ys(e) {
    let { date: t, dateEnv: n } = e,
      r = Ri(t, e.todayRange, null, e.dateProfile);
    return Object.assign(
      Object.assign(Object.assign({ date: n.toDate(t), view: e.viewApi }, r), {
        dayNumberText: e.showDayNumber ? n.format(t, Gs) : "",
      }),
      e.extraRenderProps
    );
  }
  class Zs extends In {
    render() {
      let { props: e } = this,
        { seg: t } = e;
      return f(Ls, {
        elTag: "div",
        elClasses: ["fc-bg-event"],
        elStyle: { backgroundColor: t.eventRange.ui.backgroundColor },
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
        disableResizing: !0,
      });
    }
  }
  function Xs(e) {
    let { title: t } = e.event;
    return t && f("div", { className: "fc-event-title" }, e.event.title);
  }
  function Js(e) {
    return f("div", { className: "fc-" + e });
  }
  const $s = (e) =>
    f(Tn.Consumer, null, (t) => {
      let { dateEnv: n, options: r } = t,
        { date: i } = e,
        s = r.weekNumberFormat || e.defaultFormat,
        o = { num: n.computeWeekNumber(i), text: n.format(i, s), date: i };
      return f(
        jn,
        Object.assign({}, e, {
          renderProps: o,
          generatorName: "weekNumberContent",
          generator: r.weekNumberContent || Ks,
          classNameGenerator: r.weekNumberClassNames,
          didMount: r.weekNumberDidMount,
          willUnmount: r.weekNumberWillUnmount,
        })
      );
    });
  function Ks(e) {
    return e.text;
  }
  class eo extends In {
    constructor() {
      super(...arguments),
        (this.state = { titleId: Ge() }),
        (this.handleRootEl = (e) => {
          (this.rootEl = e), this.props.elRef && On(this.props.elRef, e);
        }),
        (this.handleDocumentMouseDown = (e) => {
          const t = We(e);
          this.rootEl.contains(t) || this.handleCloseClick();
        }),
        (this.handleDocumentKeyDown = (e) => {
          "Escape" === e.key && this.handleCloseClick();
        }),
        (this.handleCloseClick = () => {
          let { onClose: e } = this.props;
          e && e();
        });
    }
    render() {
      let { theme: e, options: t } = this.context,
        { props: n, state: r } = this,
        i = ["fc-popover", e.getClass("popover")].concat(
          n.extraClassNames || []
        );
      return (function (e, t) {
        var n = f(ae, { __v: e, i: t });
        return (n.containerInfo = t), n;
      })(
        f(
          "div",
          Object.assign({}, n.extraAttrs, {
            id: n.id,
            className: i.join(" "),
            "aria-labelledby": r.titleId,
            ref: this.handleRootEl,
          }),
          f(
            "div",
            { className: "fc-popover-header " + e.getClass("popoverHeader") },
            f(
              "span",
              { className: "fc-popover-title", id: r.titleId },
              n.title
            ),
            f("span", {
              className: "fc-popover-close " + e.getIconClass("close"),
              title: t.closeHint,
              onClick: this.handleCloseClick,
            })
          ),
          f(
            "div",
            { className: "fc-popover-body " + e.getClass("popoverContent") },
            n.children
          )
        ),
        n.parentEl
      );
    }
    componentDidMount() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown),
        document.addEventListener("keydown", this.handleDocumentKeyDown),
        this.updateSize();
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown),
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    updateSize() {
      let { isRtl: e } = this.context,
        { alignmentEl: t, alignGridTop: n } = this.props,
        { rootEl: r } = this,
        i = (function (e) {
          let t = zi(e),
            n = e.getBoundingClientRect();
          for (let e of t) {
            let t = yi(n, e.getBoundingClientRect());
            if (!t) return null;
            n = t;
          }
          return n;
        })(t);
      if (i) {
        let s = r.getBoundingClientRect(),
          o = n ? He(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
          a = e ? i.right - s.width : i.left;
        (o = Math.max(o, 10)),
          (a = Math.min(
            a,
            document.documentElement.clientWidth - 10 - s.width
          )),
          (a = Math.max(a, 10));
        let l = r.offsetParent.getBoundingClientRect();
        Ue(r, { top: o - l.top, left: a - l.left });
      }
    }
  }
  class to extends Vi {
    constructor() {
      super(...arguments),
        (this.handleRootEl = (e) => {
          (this.rootEl = e),
            e
              ? this.context.registerInteractiveComponent(this, {
                  el: e,
                  useEventCenter: !1,
                })
              : this.context.unregisterInteractiveComponent(this);
        });
    }
    render() {
      let { options: e, dateEnv: t } = this.context,
        { props: n } = this,
        { startDate: r, todayRange: i, dateProfile: s } = n,
        o = t.format(r, e.dayPopoverFormat);
      return f(
        Qs,
        { elRef: this.handleRootEl, date: r, dateProfile: s, todayRange: i },
        (t, r, i) =>
          f(
            eo,
            {
              elRef: i.ref,
              id: n.id,
              title: o,
              extraClassNames: ["fc-more-popover"].concat(i.className || []),
              extraAttrs: i,
              parentEl: n.parentEl,
              alignmentEl: n.alignmentEl,
              alignGridTop: n.alignGridTop,
              onClose: n.onClose,
            },
            qs(e) &&
              f(t, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
            n.children
          )
      );
    }
    queryHit(e, t, n, r) {
      let { rootEl: i, props: s } = this;
      return e >= 0 && e < n && t >= 0 && t < r
        ? {
            dateProfile: s.dateProfile,
            dateSpan: Object.assign(
              { allDay: !0, range: { start: s.startDate, end: s.endDate } },
              s.extraDateSpan
            ),
            dayEl: i,
            rect: { left: 0, top: 0, right: n, bottom: r },
            layer: 1,
          }
        : null;
    }
  }
  class no extends In {
    constructor() {
      super(...arguments),
        (this.linkElRef = { current: null }),
        (this.state = { isPopoverOpen: !1, popoverId: Ge() }),
        (this.handleClick = (e) => {
          let { props: t, context: n } = this,
            { moreLinkClick: r } = n.options,
            i = io(t).start;
          function s(e) {
            let { def: t, instance: r, range: i } = e.eventRange;
            return {
              event: new zr(n, t, r),
              start: n.dateEnv.toDate(i.start),
              end: n.dateEnv.toDate(i.end),
              isStart: e.isStart,
              isEnd: e.isEnd,
            };
          }
          "function" == typeof r &&
            (r = r({
              date: i,
              allDay: Boolean(t.allDayDate),
              allSegs: t.allSegs.map(s),
              hiddenSegs: t.hiddenSegs.map(s),
              jsEvent: e,
              view: n.viewApi,
            })),
            r && "popover" !== r
              ? "string" == typeof r && n.calendarApi.zoomTo(i, r)
              : this.setState({ isPopoverOpen: !0 });
        }),
        (this.handlePopoverClose = () => {
          this.setState({ isPopoverOpen: !1 });
        });
    }
    render() {
      let { props: e, state: t } = this;
      return f(Tn.Consumer, null, (n) => {
        let { viewApi: r, options: i, calendarApi: s } = n,
          { moreLinkText: o } = i,
          { moreCnt: a } = e,
          l = io(e),
          c = "function" == typeof o ? o.call(s, a) : `+${a} ${o}`,
          d = ut(i.moreLinkHint, [a], c),
          u = { num: a, shortText: "+" + a, text: c, view: r };
        return f(
          p,
          null,
          Boolean(e.moreCnt) &&
            f(
              jn,
              {
                elTag: e.elTag || "a",
                elRef: this.linkElRef,
                elClasses: [...(e.elClasses || []), "fc-more-link"],
                elAttrs: Object.assign(
                  Object.assign(
                    Object.assign({}, e.elAttrs),
                    Xe(this.handleClick)
                  ),
                  {
                    title: d,
                    "aria-expanded": t.isPopoverOpen,
                    "aria-controls": t.isPopoverOpen ? t.popoverId : "",
                  }
                ),
                renderProps: u,
                generatorName: "moreLinkContent",
                generator: i.moreLinkContent || e.defaultGenerator || ro,
                classNameGenerator: i.moreLinkClassNames,
                didMount: i.moreLinkDidMount,
                willUnmount: i.moreLinkWillUnmount,
              },
              e.children
            ),
          t.isPopoverOpen &&
            f(
              to,
              {
                id: t.popoverId,
                startDate: l.start,
                endDate: l.end,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraDateSpan: e.extraDateSpan,
                parentEl: this.parentEl,
                alignmentEl: e.alignmentElRef
                  ? e.alignmentElRef.current
                  : this.linkElRef.current,
                alignGridTop: e.alignGridTop,
                onClose: this.handlePopoverClose,
              },
              e.popoverContent()
            )
        );
      });
    }
    componentDidMount() {
      this.updateParentEl();
    }
    componentDidUpdate() {
      this.updateParentEl();
    }
    updateParentEl() {
      this.linkElRef.current &&
        (this.parentEl = He(this.linkElRef.current, ".fc-view-harness"));
    }
  }
  function ro(e) {
    return e.text;
  }
  function io(e) {
    if (e.allDayDate) return { start: e.allDayDate, end: vt(e.allDayDate, 1) };
    let { hiddenSegs: t } = e;
    return { start: so(t), end: ((n = t), n.reduce(ao).eventRange.range.end) };
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
    CustomRenderingStore: class extends class {
      constructor() {
        this.handlers = [];
      }
      set(e) {
        this.currentValue = e;
        for (let t of this.handlers) t(e);
      }
      subscribe(e) {
        this.handlers.push(e),
          void 0 !== this.currentValue && e(this.currentValue);
      }
    } {
      constructor() {
        super(...arguments), (this.map = new Map());
      }
      handle(e) {
        const { map: t } = this;
        let n = !1;
        e.isActive
          ? (t.set(e.id, e), (n = !0))
          : t.has(e.id) && (t.delete(e.id), (n = !0)),
          n && this.set(t);
      }
    },
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
    NamedTimeZoneImpl: class {
      constructor(e) {
        this.timeZoneName = e;
      }
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
    asCleanDays: function (e) {
      return e.years || e.months || e.milliseconds ? 0 : e.days;
    },
    asRoughMinutes: function (e) {
      return Ft(e) / 6e4;
    },
    asRoughMs: Ft,
    asRoughSeconds: function (e) {
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
    findDirectChildren: function (e, t) {
      let n = e instanceof HTMLElement ? [e] : e,
        r = [];
      for (let e = 0; e < n.length; e += 1) {
        let i = n[e].children;
        for (let e = 0; e < i.length; e += 1) {
          let n = i[e];
          (t && !Be(n, t)) || r.push(n);
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
    getSlotClassNames: function (e, t) {
      let n = ["fc-slot", "fc-slot-" + pt[e.dow]];
      return (
        e.isDisabled
          ? n.push("fc-slot-disabled")
          : (e.isToday &&
              (n.push("fc-slot-today"), n.push(t.getClass("today"))),
            e.isPast && n.push("fc-slot-past"),
            e.isFuture && n.push("fc-slot-future")),
        n
      );
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
    memoizeArraylike: function (e, t, n) {
      let r = [],
        i = [];
      return (s) => {
        let o = r.length,
          a = s.length,
          l = 0;
        for (; l < o; l += 1)
          if (s[l]) {
            if (!Ie(r[l], s[l])) {
              n && n(i[l]);
              let r = e.apply(this, s[l]);
              (t && t(r, i[l])) || (i[l] = r);
            }
          } else n && n(i[l]);
        for (; l < a; l += 1) i[l] = e.apply(this, s[l]);
        return (r = s), i.splice(a), i;
      };
    },
    memoizeHashlike: function (e, t, n) {
      let r = {},
        i = {};
      return (s) => {
        let o = {};
        for (let a in s)
          if (i[a])
            if (Ie(r[a], s[a])) o[a] = i[a];
            else {
              n && n(i[a]);
              let r = e.apply(this, s[a]);
              o[a] = t && t(r, i[a]) ? i[a] : r;
            }
          else o[a] = e.apply(this, s[a]);
        return (r = s), (i = o), o;
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
    removeExact: function (e, t) {
      let n = 0,
        r = 0;
      for (; r < e.length; ) e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
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
    translateRect: function (e, t, n) {
      return {
        left: e.left + t,
        right: e.right + t,
        top: e.top + n,
        bottom: e.bottom + n,
      };
    },
    triggerDateSelect: Ir,
    unpromisify: li,
    whenTransitionDone: Ze,
    wholeDivideDurations: Vt,
  };
  ye(
    ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;user-select:none}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{border-style:none;padding:0}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}'
  );
  const co = [],
    uo = {
      code: "en",
      week: { dow: 0, doy: 4 },
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
        list: "list",
      },
      weekText: "W",
      weekTextLong: "Week",
      closeHint: "Close",
      timeHint: "Time",
      eventHint: "Event",
      allDayText: "all-day",
      moreLinkText: "more",
      noEventsText: "No events to display",
    },
    ho = Object.assign(Object.assign({}, uo), {
      buttonHints: {
        prev: "Previous $0",
        next: "Next $0",
        today: (e, t) => ("day" === t ? "Today" : "This " + e),
      },
      viewHint: "$0 view",
      navLinkHint: "Go to $0",
      moreLinkHint: (e) => `Show ${e} more event${1 === e ? "" : "s"}`,
    });
  function fo(e) {
    let t = e.length > 0 ? e[0].code : "en",
      n = co.concat(e),
      r = { en: ho };
    for (let e of n) r[e.code] = e;
    return { map: r, defaultCode: t };
  }
  function go(e, t) {
    return "object" != typeof e || Array.isArray(e)
      ? (function (e, t) {
          let n = [].concat(e || []),
            r =
              (function (e, t) {
                for (let n = 0; n < e.length; n += 1) {
                  let r = e[n].toLocaleLowerCase().split("-");
                  for (let e = r.length; e > 0; e -= 1) {
                    let n = r.slice(0, e).join("-");
                    if (t[n]) return t[n];
                  }
                }
                return null;
              })(n, t) || ho;
          return po(e, n, r);
        })(e, t)
      : po(e.code, [e.code], e);
  }
  function po(e, t, n) {
    let r = De([uo, n], ["buttonText"]);
    delete r.code;
    let { week: i } = r;
    return (
      delete r.week,
      {
        codeArg: e,
        codes: t,
        week: i,
        simpleNumberFormat: new Intl.NumberFormat(e),
        options: r,
      }
    );
  }
  function mo(e) {
    return {
      id: Ke(),
      name: e.name,
      premiumReleaseDate: e.premiumReleaseDate
        ? new Date(e.premiumReleaseDate)
        : void 0,
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
      propSetHandlers: e.propSetHandlers || {},
    };
  }
  function vo() {
    let e,
      t = [],
      n = [];
    return (r, i) => (
      (e && Ie(r, t) && Ie(i, n)) ||
        (e = (function (e, t) {
          let n = {},
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
              propSetHandlers: {},
            };
          function i(e) {
            for (let o of e) {
              const e = o.name,
                a = n[e];
              void 0 === a
                ? ((n[e] = o.id),
                  i(o.deps),
                  (s = o),
                  (r = {
                    premiumReleaseDate: bo(
                      (t = r).premiumReleaseDate,
                      s.premiumReleaseDate
                    ),
                    reducers: t.reducers.concat(s.reducers),
                    isLoadingFuncs: t.isLoadingFuncs.concat(s.isLoadingFuncs),
                    contextInit: t.contextInit.concat(s.contextInit),
                    eventRefiners: Object.assign(
                      Object.assign({}, t.eventRefiners),
                      s.eventRefiners
                    ),
                    eventDefMemberAdders: t.eventDefMemberAdders.concat(
                      s.eventDefMemberAdders
                    ),
                    eventSourceRefiners: Object.assign(
                      Object.assign({}, t.eventSourceRefiners),
                      s.eventSourceRefiners
                    ),
                    isDraggableTransformers: t.isDraggableTransformers.concat(
                      s.isDraggableTransformers
                    ),
                    eventDragMutationMassagers:
                      t.eventDragMutationMassagers.concat(
                        s.eventDragMutationMassagers
                      ),
                    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(
                      s.eventDefMutationAppliers
                    ),
                    dateSelectionTransformers:
                      t.dateSelectionTransformers.concat(
                        s.dateSelectionTransformers
                      ),
                    datePointTransforms: t.datePointTransforms.concat(
                      s.datePointTransforms
                    ),
                    dateSpanTransforms: t.dateSpanTransforms.concat(
                      s.dateSpanTransforms
                    ),
                    views: Object.assign(Object.assign({}, t.views), s.views),
                    viewPropsTransformers: t.viewPropsTransformers.concat(
                      s.viewPropsTransformers
                    ),
                    isPropsValid: s.isPropsValid || t.isPropsValid,
                    externalDefTransforms: t.externalDefTransforms.concat(
                      s.externalDefTransforms
                    ),
                    viewContainerAppends: t.viewContainerAppends.concat(
                      s.viewContainerAppends
                    ),
                    eventDropTransformers: t.eventDropTransformers.concat(
                      s.eventDropTransformers
                    ),
                    calendarInteractions: t.calendarInteractions.concat(
                      s.calendarInteractions
                    ),
                    componentInteractions: t.componentInteractions.concat(
                      s.componentInteractions
                    ),
                    themeClasses: Object.assign(
                      Object.assign({}, t.themeClasses),
                      s.themeClasses
                    ),
                    eventSourceDefs: t.eventSourceDefs.concat(
                      s.eventSourceDefs
                    ),
                    cmdFormatter: s.cmdFormatter || t.cmdFormatter,
                    recurringTypes: t.recurringTypes.concat(s.recurringTypes),
                    namedTimeZonedImpl:
                      s.namedTimeZonedImpl || t.namedTimeZonedImpl,
                    initialView: t.initialView || s.initialView,
                    elementDraggingImpl:
                      t.elementDraggingImpl || s.elementDraggingImpl,
                    optionChangeHandlers: Object.assign(
                      Object.assign({}, t.optionChangeHandlers),
                      s.optionChangeHandlers
                    ),
                    scrollGridImpl: s.scrollGridImpl || t.scrollGridImpl,
                    listenerRefiners: Object.assign(
                      Object.assign({}, t.listenerRefiners),
                      s.listenerRefiners
                    ),
                    optionRefiners: Object.assign(
                      Object.assign({}, t.optionRefiners),
                      s.optionRefiners
                    ),
                    propSetHandlers: Object.assign(
                      Object.assign({}, t.propSetHandlers),
                      s.propSetHandlers
                    ),
                  }))
                : a !== o.id && console.warn(`Duplicate plugin '${e}'`);
            }
            var t, s;
          }
          return e && i(e), i(t), r;
        })(r, i)),
      (t = r),
      (n = i),
      e
    );
  }
  function bo(e, t) {
    return void 0 === e
      ? t
      : void 0 === t
      ? e
      : new Date(Math.max(e.valueOf(), t.valueOf()));
  }
  class yo extends Kt {}
  function Eo(e, t, n, r) {
    if (t[e]) return t[e];
    let i = (function (e, t, n, r) {
      let i = n[e],
        s = r[e],
        o = (e) =>
          i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null,
        a = o("component"),
        l = o("superType"),
        c = null;
      if (l) {
        if (l === e)
          throw new Error(
            "Can't have a custom view type that references itself"
          );
        c = Eo(l, t, n, r);
      }
      !a && c && (a = c.component);
      if (!a) return null;
      return {
        type: e,
        component: a,
        defaults: Object.assign(
          Object.assign({}, c ? c.defaults : {}),
          i ? i.rawOptions : {}
        ),
        overrides: Object.assign(
          Object.assign({}, c ? c.overrides : {}),
          s ? s.rawOptions : {}
        ),
      };
    })(e, t, n, r);
    return i && (t[e] = i), i;
  }
  function Ao(e) {
    return we(e, Do);
  }
  function Do(e) {
    let t = "function" == typeof e ? { component: e } : e,
      { component: n } = t;
    var r;
    return (
      t.content &&
        ((r = t),
        (n = (e) =>
          f(Tn.Consumer, null, (t) =>
            f(jn, {
              elTag: "div",
              elClasses: Ln(t.viewSpec),
              renderProps: Object.assign(Object.assign({}, e), {
                nextDayThreshold: t.options.nextDayThreshold,
              }),
              generatorName: void 0,
              generator: r.content,
              classNameGenerator: r.classNames,
              didMount: r.didMount,
              willUnmount: r.willUnmount,
            })
          ))),
      { superType: t.type, component: n, rawOptions: t }
    );
  }
  function So(e, t, n, r) {
    let i = Ao(e),
      s = Ao(t.views);
    return we(
      (function (e, t) {
        let n,
          r = {};
        for (n in e) Eo(n, r, e, t);
        for (n in t) Eo(n, r, e, t);
        return r;
      })(i, s),
      (e) =>
        (function (e, t, n, r, i) {
          let s =
              e.overrides.duration ||
              e.defaults.duration ||
              r.duration ||
              n.duration,
            o = null,
            a = "",
            l = "",
            c = {};
          if (
            s &&
            ((o = (function (e) {
              let t = JSON.stringify(e),
                n = wo[t];
              void 0 === n && ((n = jt(e)), (wo[t] = n));
              return n;
            })(s)),
            o)
          ) {
            let e = Gt(o);
            (a = e.unit),
              1 === e.value && ((l = a), (c = t[a] ? t[a].rawOptions : {}));
          }
          let d = (t) => {
              let n = t.buttonText || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r]
                ? n[r]
                : null != n[e.type]
                ? n[e.type]
                : null != n[l]
                ? n[l]
                : null;
            },
            u = (t) => {
              let n = t.buttonHints || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r]
                ? n[r]
                : null != n[e.type]
                ? n[e.type]
                : null != n[l]
                ? n[l]
                : null;
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
            buttonTitleDefault: u(i) || e.defaults.buttonHint || u(mn),
          };
        })(e, s, t, n, r)
    );
  }
  (yo.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active",
  }),
    (yo.prototype.baseIconClass = "fc-icon"),
    (yo.prototype.iconClasses = {
      close: "fc-icon-x",
      prev: "fc-icon-chevron-left",
      next: "fc-icon-chevron-right",
      prevYear: "fc-icon-chevrons-left",
      nextYear: "fc-icon-chevrons-right",
    }),
    (yo.prototype.rtlIconClasses = {
      prev: "fc-icon-chevron-right",
      next: "fc-icon-chevron-left",
      prevYear: "fc-icon-chevrons-right",
      nextYear: "fc-icon-chevrons-left",
    }),
    (yo.prototype.iconOverrideOption = "buttonIcons"),
    (yo.prototype.iconOverrideCustomButtonOption = "icon"),
    (yo.prototype.iconOverridePrefix = "fc-icon-");
  let wo = {};
  function Co(e, t, n) {
    let r = t ? t.activeRange : null;
    return _o(
      {},
      (function (e, t) {
        let n = Cr(t),
          r = [].concat(e.eventSources || []),
          i = [];
        e.initialEvents && r.unshift(e.initialEvents);
        e.events && r.unshift(e.events);
        for (let e of r) {
          let r = wr(e, t, n);
          r && i.push(r);
        }
        return i;
      })(e, n),
      r,
      n
    );
  }
  function Ro(e, t, n, r) {
    let i = n ? n.activeRange : null;
    switch (t.type) {
      case "ADD_EVENT_SOURCES":
        return _o(e, t.sources, i, r);
      case "REMOVE_EVENT_SOURCE":
        return (s = e), (o = t.sourceId), Se(s, (e) => e.sourceId !== o);
      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? To(e, i, r) : e;
      case "FETCH_EVENT_SOURCES":
        return ko(
          e,
          t.sourceIds ? Ce(t.sourceIds) : Io(e, r),
          i,
          t.isRefetch || !1,
          r
        );
      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return (function (e, t, n, r) {
          let i = e[t];
          if (i && n === i.latestFetchId)
            return Object.assign(Object.assign({}, e), {
              [t]: Object.assign(Object.assign({}, i), {
                isFetching: !1,
                fetchRange: r,
              }),
            });
          return e;
        })(e, t.sourceId, t.fetchId, t.fetchRange);
      case "REMOVE_ALL_EVENT_SOURCES":
        return {};
      default:
        return e;
    }
    var s, o;
  }
  function xo(e) {
    for (let t in e) if (e[t].isFetching) return !0;
    return !1;
  }
  function _o(e, t, n, r) {
    let i = {};
    for (let e of t) i[e.sourceId] = e;
    return n && (i = To(i, n, r)), Object.assign(Object.assign({}, e), i);
  }
  function To(e, t, n) {
    return ko(
      e,
      Se(e, (e) =>
        (function (e, t, n) {
          if (!Oo(e, n)) return !e.latestFetchId;
          return (
            !n.options.lazyFetching ||
            !e.fetchRange ||
            e.isFetching ||
            t.start < e.fetchRange.start ||
            t.end > e.fetchRange.end
          );
        })(e, t, n)
      ),
      t,
      !1,
      n
    );
  }
  function ko(e, t, n, r, i) {
    let s = {};
    for (let o in e) {
      let a = e[o];
      t[o] ? (s[o] = Mo(a, n, r, i)) : (s[o] = a);
    }
    return s;
  }
  function Mo(e, t, n, r) {
    let { options: i, calendarApi: s } = r,
      o = r.pluginHooks.eventSourceDefs[e.sourceDefId],
      a = Ke();
    return (
      o.fetch(
        { eventSource: e, range: t, isRefetch: n, context: r },
        (n) => {
          let { rawEvents: o } = n;
          i.eventSourceSuccess &&
            (o = i.eventSourceSuccess.call(s, o, n.response) || o),
            e.success && (o = e.success.call(s, o, n.response) || o),
            r.dispatch({
              type: "RECEIVE_EVENTS",
              sourceId: e.sourceId,
              fetchId: a,
              fetchRange: t,
              rawEvents: o,
            });
        },
        (n) => {
          let o = !1;
          i.eventSourceFailure && (i.eventSourceFailure.call(s, n), (o = !0)),
            e.failure && (e.failure(n), (o = !0)),
            o || console.warn(n.message, n),
            r.dispatch({
              type: "RECEIVE_EVENT_ERROR",
              sourceId: e.sourceId,
              fetchId: a,
              fetchRange: t,
              error: n,
            });
        }
      ),
      Object.assign(Object.assign({}, e), { isFetching: !0, latestFetchId: a })
    );
  }
  function Io(e, t) {
    return Se(e, (e) => Oo(e, t));
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
    let n;
    switch (t.type) {
      case "UNSET_EVENT_DRAG":
        return null;
      case "SET_EVENT_DRAG":
        return (
          (n = t.state),
          {
            affectedEvents: n.affectedEvents,
            mutatedEvents: n.mutatedEvents,
            isEvent: n.isEvent,
          }
        );
      default:
        return e;
    }
  }
  function Bo(e, t) {
    let n;
    switch (t.type) {
      case "UNSET_EVENT_RESIZE":
        return null;
      case "SET_EVENT_RESIZE":
        return (
          (n = t.state),
          {
            affectedEvents: n.affectedEvents,
            mutatedEvents: n.mutatedEvents,
            isEvent: n.isEvent,
          }
        );
      default:
        return e;
    }
  }
  function jo(e, t, n, r, i) {
    return {
      header: e.headerToolbar ? zo(e.headerToolbar, e, t, n, r, i) : null,
      footer: e.footerToolbar ? zo(e.footerToolbar, e, t, n, r, i) : null,
    };
  }
  function zo(e, t, n, r, i, s) {
    let o = {},
      a = [],
      l = !1;
    for (let c in e) {
      let d = Uo(e[c], t, n, r, i, s);
      (o[c] = d.widgets), a.push(...d.viewsWithButtons), (l = l || d.hasTitle);
    }
    return { sectionWidgets: o, viewsWithButtons: a, hasTitle: l };
  }
  function Uo(e, t, n, r, i, s) {
    let o = "rtl" === t.direction,
      a = t.customButtons || {},
      l = n.buttonText || {},
      c = t.buttonText || {},
      d = n.buttonHints || {},
      u = t.buttonHints || {},
      h = e ? e.split(" ") : [],
      f = [],
      g = !1;
    return {
      widgets: h.map((e) =>
        e.split(",").map((e) => {
          if ("title" === e) return (g = !0), { buttonName: e };
          let n, h, p, m, v, b;
          if ((n = a[e]))
            (p = (e) => {
              n.click && n.click.call(e.target, e, e.target);
            }),
              (m = r.getCustomButtonIconClass(n)) ||
                (m = r.getIconClass(e, o)) ||
                (v = n.text),
              (b = n.hint || n.text);
          else if ((h = i[e])) {
            f.push(e),
              (p = () => {
                s.changeView(e);
              }),
              (v = h.buttonTextOverride) ||
                (m = r.getIconClass(e, o)) ||
                (v = h.buttonTextDefault);
            let n = h.buttonTextOverride || h.buttonTextDefault;
            b = ut(
              h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint,
              [n, e],
              n
            );
          } else if (s[e])
            if (
              ((p = () => {
                s[e]();
              }),
              (v = l[e]) || (m = r.getIconClass(e, o)) || (v = c[e]),
              "prevYear" === e || "nextYear" === e)
            ) {
              let t = "prevYear" === e ? "prev" : "next";
              b = ut(d[t] || u[t], [c.year || "year", "year"], c[e]);
            } else b = (t) => ut(d[e] || u[e], [c[t] || t, t], c[e]);
          return {
            buttonName: e,
            buttonClick: p,
            buttonIcon: m,
            buttonText: v,
            buttonHint: b,
          };
        })
      ),
      viewsWithButtons: f,
      hasTitle: g,
    };
  }
  class Lo {
    constructor(e, t, n) {
      (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
    }
    get calendar() {
      return this.getCurrentData().calendarApi;
    }
    get title() {
      return this.getCurrentData().viewTitle;
    }
    get activeStart() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.activeRange.start
      );
    }
    get activeEnd() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.activeRange.end
      );
    }
    get currentStart() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.currentRange.start
      );
    }
    get currentEnd() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.currentRange.end
      );
    }
    getOption(e) {
      return this.getCurrentData().options[e];
    }
  }
  function Wo(e, t) {
    let n = Re(t.getCurrentData().eventSources),
      r = [];
    for (let t of e) {
      let e = !1;
      for (let r = 0; r < n.length; r += 1)
        if (n[r]._raw === t) {
          n.splice(r, 1), (e = !0);
          break;
        }
      e || r.push(t);
    }
    for (let e of n)
      t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: e.sourceId });
    for (let e of r) t.calendarApi.addEventSource(e);
  }
  const Fo = [
    mo({
      name: "array-event-source",
      eventSourceDefs: [
        {
          ignoreRange: !0,
          parseMeta: (e) => (Array.isArray(e.events) ? e.events : null),
          fetch(e, t) {
            t({ rawEvents: e.eventSource.meta });
          },
        },
      ],
    }),
    mo({
      name: "func-event-source",
      eventSourceDefs: [
        {
          parseMeta: (e) => ("function" == typeof e.events ? e.events : null),
          fetch(e, t, n) {
            const { dateEnv: r } = e.context;
            li(
              e.eventSource.meta.bind(null, oi(e.range, r)),
              (e) => t({ rawEvents: e }),
              n
            );
          },
        },
      ],
    }),
    mo({
      name: "json-event-source",
      eventSourceRefiners: {
        method: String,
        extraParams: wn,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
      },
      eventSourceDefs: [
        {
          parseMeta: (e) =>
            !e.url || ("json" !== e.format && e.format)
              ? null
              : {
                  url: e.url,
                  format: "json",
                  method: (e.method || "GET").toUpperCase(),
                  extraParams: e.extraParams,
                  startParam: e.startParam,
                  endParam: e.endParam,
                  timeZoneParam: e.timeZoneParam,
                },
          fetch(e, t, n) {
            const { meta: r } = e.eventSource,
              i = (function (e, t, n) {
                let r,
                  i,
                  s,
                  o,
                  { dateEnv: a, options: l } = n,
                  c = {};
                (r = e.startParam), null == r && (r = l.startParam);
                (i = e.endParam), null == i && (i = l.endParam);
                (s = e.timeZoneParam), null == s && (s = l.timeZoneParam);
                o =
                  "function" == typeof e.extraParams
                    ? e.extraParams()
                    : e.extraParams || {};
                Object.assign(c, o),
                  (c[r] = a.formatIso(t.start)),
                  (c[i] = a.formatIso(t.end)),
                  "local" !== a.timeZone && (c[s] = a.timeZone);
                return c;
              })(r, e.range, e.context);
            di(r.method, r.url, i).then(([e, n]) => {
              t({ rawEvents: e, response: n });
            }, n);
          },
        },
      ],
    }),
    mo({
      name: "simple-recurring-event",
      recurringTypes: [
        {
          parse(e, t) {
            if (
              e.daysOfWeek ||
              e.startTime ||
              e.endTime ||
              e.startRecur ||
              e.endRecur
            ) {
              let i,
                s = {
                  daysOfWeek: e.daysOfWeek || null,
                  startTime: e.startTime || null,
                  endTime: e.endTime || null,
                  startRecur: e.startRecur
                    ? t.createMarker(e.startRecur)
                    : null,
                  endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                };
              return (
                e.duration && (i = e.duration),
                !i &&
                  e.startTime &&
                  e.endTime &&
                  ((n = e.endTime),
                  (r = e.startTime),
                  (i = {
                    years: n.years - r.years,
                    months: n.months - r.months,
                    days: n.days - r.days,
                    milliseconds: n.milliseconds - r.milliseconds,
                  })),
                {
                  allDayGuess: Boolean(!e.startTime && !e.endTime),
                  duration: i,
                  typeData: s,
                }
              );
            }
            var n, r;
            return null;
          },
          expand(e, t, n) {
            let r = Vn(t, { start: e.startRecur, end: e.endRecur });
            return r
              ? (function (e, t, n, r) {
                  let i = e ? Ce(e) : null,
                    s = wt(n.start),
                    o = n.end,
                    a = [];
                  for (; s < o; ) {
                    let e;
                    (i && !i[s.getUTCDay()]) ||
                      ((e = t ? r.add(s, t) : s), a.push(e)),
                      (s = vt(s, 1));
                  }
                  return a;
                })(e.daysOfWeek, e.startTime, r, n)
              : [];
          },
        },
      ],
      eventRefiners: {
        daysOfWeek: wn,
        startTime: jt,
        endTime: jt,
        duration: jt,
        startRecur: wn,
        endRecur: wn,
      },
    }),
    mo({
      name: "change-handler",
      optionChangeHandlers: {
        events(e, t) {
          Wo([e], t);
        },
        eventSources: Wo,
      },
    }),
    mo({
      name: "misc",
      isLoadingFuncs: [(e) => xo(e.eventSources)],
      propSetHandlers: {
        dateProfile: function (e, t) {
          t.emitter.trigger(
            "datesSet",
            Object.assign(Object.assign({}, oi(e.activeRange, t.dateEnv)), {
              view: t.viewApi,
            })
          );
        },
        eventStore: function (e, t) {
          let { emitter: n } = t;
          n.hasHandlers("eventsSet") && n.trigger("eventsSet", Lr(e, t));
        },
      },
    }),
  ];
  class Vo {
    constructor(e, t) {
      (this.runTaskOption = e),
        (this.drainedOption = t),
        (this.queue = []),
        (this.delayedRunner = new Ee(this.drain.bind(this)));
    }
    request(e, t) {
      this.queue.push(e), this.delayedRunner.request(t);
    }
    pause(e) {
      this.delayedRunner.pause(e);
    }
    resume(e, t) {
      this.delayedRunner.resume(e, t);
    }
    drain() {
      let { queue: e } = this;
      for (; e.length; ) {
        let t,
          n = [];
        for (; (t = e.shift()); ) this.runTask(t), n.push(t);
        this.drained(n);
      }
    }
    runTask(e) {
      this.runTaskOption && this.runTaskOption(e);
    }
    drained(e) {
      this.drainedOption && this.drainedOption(e);
    }
  }
  function Go(e, t, n) {
    let r;
    return (
      (r = /^(year|month)$/.test(e.currentRangeUnit)
        ? e.currentRange
        : e.activeRange),
      n.formatRange(
        r.start,
        r.end,
        gn(
          t.titleFormat ||
            (function (e) {
              let { currentRangeUnit: t } = e;
              if ("year" === t) return { year: "numeric" };
              if ("month" === t) return { year: "numeric", month: "long" };
              let n = St(e.currentRange.start, e.currentRange.end);
              if (null !== n && n > 1)
                return { year: "numeric", month: "short", day: "numeric" };
              return { year: "numeric", month: "long", day: "numeric" };
            })(e)
        ),
        {
          isEndExclusive: e.isRangeAllDay,
          defaultSeparator: t.titleRangeSeparator,
        }
      )
    );
  }
  class Qo {
    constructor(e) {
      (this.computeOptionsData = Oe(this._computeOptionsData)),
        (this.computeCurrentViewData = Oe(this._computeCurrentViewData)),
        (this.organizeRawLocales = Oe(fo)),
        (this.buildLocale = Oe(go)),
        (this.buildPluginHooks = vo()),
        (this.buildDateEnv = Oe(qo)),
        (this.buildTheme = Oe(Yo)),
        (this.parseToolbars = Oe(jo)),
        (this.buildViewSpecs = Oe(So)),
        (this.buildDateProfileGenerator = Ne(Zo)),
        (this.buildViewApi = Oe(Xo)),
        (this.buildViewUiProps = Ne(Ko)),
        (this.buildEventUiBySource = Oe(Jo, xe)),
        (this.buildEventUiBases = Oe($o)),
        (this.parseContextBusinessHours = Ne(ta)),
        (this.buildTitle = Oe(Go)),
        (this.emitter = new Tr()),
        (this.actionRunner = new Vo(
          this._handleAction.bind(this),
          this.updateData.bind(this)
        )),
        (this.currentCalendarOptionsInput = {}),
        (this.currentCalendarOptionsRefined = {}),
        (this.currentViewOptionsInput = {}),
        (this.currentViewOptionsRefined = {}),
        (this.currentCalendarOptionsRefiners = {}),
        (this.getCurrentData = () => this.data),
        (this.dispatch = (e) => {
          this.actionRunner.request(e);
        }),
        (this.props = e),
        this.actionRunner.pause();
      let t = {},
        n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
        r = n.calendarOptions.initialView || n.pluginHooks.initialView,
        i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
      (e.calendarApi.currentDataManager = this),
        this.emitter.setThisContext(e.calendarApi),
        this.emitter.setOptions(i.options);
      let s = (function (e, t) {
          let n = e.initialDate;
          return null != n ? t.createMarker(n) : Kn(e.now, t);
        })(n.calendarOptions, n.dateEnv),
        o = i.dateProfileGenerator.build(s);
      Yn(o.activeRange, s) || (s = o.currentRange.start);
      let a = {
        dateEnv: n.dateEnv,
        options: n.calendarOptions,
        pluginHooks: n.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData,
      };
      for (let e of n.pluginHooks.contextInit) e(a);
      let l = Co(n.calendarOptions, o, a),
        c = {
          dynamicOptionOverrides: t,
          currentViewType: r,
          currentDate: s,
          dateProfile: o,
          businessHours: this.parseContextBusinessHours(a),
          eventSources: l,
          eventUiBases: {},
          eventStore: { defs: {}, instances: {} },
          renderableEventStore: { defs: {}, instances: {} },
          dateSelection: null,
          eventSelection: "",
          eventDrag: null,
          eventResize: null,
          selectionConfig: this.buildViewUiProps(a).selectionConfig,
        },
        d = Object.assign(Object.assign({}, a), c);
      for (let e of n.pluginHooks.reducers) Object.assign(c, e(null, null, d));
      ea(c, a) && this.emitter.trigger("loading", !0),
        (this.state = c),
        this.updateData(),
        this.actionRunner.resume();
    }
    resetOptions(e, t) {
      let { props: n } = this;
      (n.optionOverrides = t
        ? Object.assign(Object.assign({}, n.optionOverrides), e)
        : e),
        this.actionRunner.request({ type: "NOTHING" });
    }
    _handleAction(e) {
      let { props: t, state: n, emitter: r } = this,
        i = (function (e, t) {
          switch (t.type) {
            case "SET_OPTION":
              return Object.assign(Object.assign({}, e), {
                [t.optionName]: t.rawOptionValue,
              });
            default:
              return e;
          }
        })(n.dynamicOptionOverrides, e),
        s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
        o = (function (e, t) {
          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              e = t.viewType;
          }
          return e;
        })(n.currentViewType, e),
        a = this.computeCurrentViewData(o, s, t.optionOverrides, i);
      (t.calendarApi.currentDataManager = this),
        r.setThisContext(t.calendarApi),
        r.setOptions(a.options);
      let l = {
          dateEnv: s.dateEnv,
          options: s.calendarOptions,
          pluginHooks: s.pluginHooks,
          calendarApi: t.calendarApi,
          dispatch: this.dispatch,
          emitter: r,
          getCurrentData: this.getCurrentData,
        },
        { currentDate: c, dateProfile: d } = n;
      this.data &&
        this.data.dateProfileGenerator !== a.dateProfileGenerator &&
        (d = a.dateProfileGenerator.build(c)),
        (c = (function (e, t) {
          switch (t.type) {
            case "CHANGE_DATE":
              return t.dateMarker;
            default:
              return e;
          }
        })(c, e)),
        (d = (function (e, t, n, r) {
          let i;
          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              return r.build(t.dateMarker || n);
            case "CHANGE_DATE":
              return r.build(t.dateMarker);
            case "PREV":
              if (((i = r.buildPrev(e, n)), i.isValid)) return i;
              break;
            case "NEXT":
              if (((i = r.buildNext(e, n)), i.isValid)) return i;
          }
          return e;
        })(d, e, c, a.dateProfileGenerator)),
        ("PREV" !== e.type && "NEXT" !== e.type && Yn(d.currentRange, c)) ||
          (c = d.currentRange.start);
      let u = Ro(n.eventSources, e, d, l),
        h = Rr(n.eventStore, e, u, d, l),
        f =
          (xo(u) &&
            !a.options.progressiveEventRendering &&
            n.renderableEventStore) ||
          h,
        { eventUiSingleBase: g, selectionConfig: p } = this.buildViewUiProps(l),
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
          eventResize: Bo(n.eventResize, e),
        },
        b = Object.assign(Object.assign({}, l), v);
      for (let t of s.pluginHooks.reducers) Object.assign(v, t(n, e, b));
      let y = ea(n, l),
        E = ea(v, l);
      !y && E ? r.trigger("loading", !0) : y && !E && r.trigger("loading", !1),
        (this.state = v),
        t.onAction && t.onAction(e);
    }
    updateData() {
      let { props: e, state: t } = this,
        n = this.data,
        r = this.computeOptionsData(
          e.optionOverrides,
          t.dynamicOptionOverrides,
          e.calendarApi
        ),
        i = this.computeCurrentViewData(
          t.currentViewType,
          r,
          e.optionOverrides,
          t.dynamicOptionOverrides
        ),
        s = (this.data = Object.assign(
          Object.assign(
            Object.assign(
              {
                viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData,
              },
              r
            ),
            i
          ),
          t
        )),
        o = r.pluginHooks.optionChangeHandlers,
        a = n && n.calendarOptions,
        l = r.calendarOptions;
      if (a && a !== l) {
        a.timeZone !== l.timeZone &&
          ((t.eventSources = s.eventSources =
            (function (e, t, n) {
              let r = t ? t.activeRange : null;
              return ko(e, Io(e, n), r, !0, n);
            })(s.eventSources, t.dateProfile, s)),
          (t.eventStore = s.eventStore =
            (function (e, t, n) {
              let { defs: r } = e,
                i = we(e.instances, (e) => {
                  let i = r[e.defId];
                  return i.allDay || i.recurringDef
                    ? e
                    : Object.assign(Object.assign({}, e), {
                        range: {
                          start: n.createMarker(
                            t.toDate(e.range.start, e.forcedStartTzo)
                          ),
                          end: n.createMarker(
                            t.toDate(e.range.end, e.forcedEndTzo)
                          ),
                        },
                        forcedStartTzo: n.canComputeOffset
                          ? null
                          : e.forcedStartTzo,
                        forcedEndTzo: n.canComputeOffset
                          ? null
                          : e.forcedEndTzo,
                      });
                });
              return { defs: r, instances: i };
            })(s.eventStore, n.dateEnv, s.dateEnv)));
        for (let e in o) a[e] !== l[e] && o[e](l[e], s);
      }
      e.onData && e.onData(s);
    }
    _computeOptionsData(e, t, n) {
      let {
        refinedOptions: r,
        pluginHooks: i,
        localeDefaults: s,
        availableLocaleData: o,
        extra: a,
      } = this.processRawCalendarOptions(e, t);
      na(a);
      let l = this.buildDateEnv(
          r.timeZone,
          r.locale,
          r.weekNumberCalculation,
          r.firstDay,
          r.weekText,
          i,
          o,
          r.defaultRangeSeparator
        ),
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
        availableRawLocales: o.map,
      };
    }
    processRawCalendarOptions(e, t) {
      let { locales: n, locale: r } = Dn([mn, e, t]),
        i = this.organizeRawLocales(n),
        s = i.map,
        o = this.buildLocale(r || i.defaultCode, s).options,
        a = this.buildPluginHooks(e.plugins || [], Fo),
        l = (this.currentCalendarOptionsRefiners = Object.assign(
          Object.assign(
            Object.assign(Object.assign(Object.assign({}, pn), vn), bn),
            a.listenerRefiners
          ),
          a.optionRefiners
        )),
        c = {},
        d = Dn([mn, o, e, t]),
        u = {},
        h = this.currentCalendarOptionsInput,
        f = this.currentCalendarOptionsRefined,
        g = !1;
      for (let e in d)
        "plugins" !== e &&
          (d[e] === h[e] || (yn[e] && e in h && yn[e](h[e], d[e]))
            ? (u[e] = f[e])
            : l[e]
            ? ((u[e] = l[e](d[e])), (g = !0))
            : (c[e] = h[e]));
      return (
        g &&
          ((this.currentCalendarOptionsInput = d),
          (this.currentCalendarOptionsRefined = u)),
        {
          rawOptions: this.currentCalendarOptionsInput,
          refinedOptions: this.currentCalendarOptionsRefined,
          pluginHooks: a,
          availableLocaleData: i,
          localeDefaults: o,
          extra: c,
        }
      );
    }
    _computeCurrentViewData(e, t, n, r) {
      let i = t.viewSpecs[e];
      if (!i)
        throw new Error(
          `viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`
        );
      let { refinedOptions: s, extra: o } = this.processRawViewOptions(
        i,
        t.pluginHooks,
        t.localeDefaults,
        n,
        r
      );
      return (
        na(o),
        {
          viewSpec: i,
          options: s,
          dateProfileGenerator: this.buildDateProfileGenerator({
            dateProfileGeneratorClass:
              i.optionDefaults.dateProfileGeneratorClass,
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
            fixedWeekCount: s.fixedWeekCount,
          }),
          viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
        }
      );
    }
    processRawViewOptions(e, t, n, r, i) {
      let s = Dn([mn, e.optionDefaults, n, r, e.optionOverrides, i]),
        o = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign(Object.assign({}, pn), vn), bn),
              An
            ),
            t.listenerRefiners
          ),
          t.optionRefiners
        ),
        a = {},
        l = this.currentViewOptionsInput,
        c = this.currentViewOptionsRefined,
        d = !1,
        u = {};
      for (let e in s)
        s[e] === l[e] || (yn[e] && yn[e](s[e], l[e]))
          ? (a[e] = c[e])
          : (s[e] === this.currentCalendarOptionsInput[e] ||
            (yn[e] && yn[e](s[e], this.currentCalendarOptionsInput[e]))
              ? e in this.currentCalendarOptionsRefined &&
                (a[e] = this.currentCalendarOptionsRefined[e])
              : o[e]
              ? (a[e] = o[e](s[e]))
              : (u[e] = s[e]),
            (d = !0));
      return (
        d &&
          ((this.currentViewOptionsInput = s),
          (this.currentViewOptionsRefined = a)),
        {
          rawOptions: this.currentViewOptionsInput,
          refinedOptions: this.currentViewOptionsRefined,
          extra: u,
        }
      );
    }
  }
  function qo(e, t, n, r, i, s, o, a) {
    let l = go(t || o.defaultCode, o.map);
    return new $t({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: s.namedTimeZonedImpl,
      locale: l,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: i,
      cmdFormatter: s.cmdFormatter,
      defaultSeparator: a,
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
    return we(e, (e) => e.ui);
  }
  function $o(e, t, n) {
    let r = { "": t };
    for (let t in e) {
      let i = e[t];
      i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId]);
    }
    return r;
  }
  function Ko(e) {
    let { options: t } = e;
    return {
      eventUiSingleBase: Er(
        {
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
          color: t.eventColor,
        },
        e
      ),
      selectionConfig: Er(
        {
          constraint: t.selectConstraint,
          overlap:
            "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
          allow: t.selectAllow,
        },
        e
      ),
    };
  }
  function ea(e, t) {
    for (let n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
    return !1;
  }
  function ta(e) {
    return Mr(e.options.businessHours, e);
  }
  function na(e, t) {
    for (let n in e)
      console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""));
  }
  class ra extends In {
    render() {
      return f(
        "div",
        { className: "fc-toolbar-chunk" },
        ...this.props.widgetGroups.map((e) => this.renderWidgetGroup(e))
      );
    }
    renderWidgetGroup(e) {
      let { props: t } = this,
        { theme: n } = this.context,
        r = [],
        i = !0;
      for (let s of e) {
        let {
          buttonName: e,
          buttonClick: o,
          buttonText: a,
          buttonIcon: l,
          buttonHint: c,
        } = s;
        if ("title" === e)
          (i = !1),
            r.push(
              f("h2", { className: "fc-toolbar-title", id: t.titleId }, t.title)
            );
        else {
          let i = e === t.activeButton,
            s =
              (!t.isTodayEnabled && "today" === e) ||
              (!t.isPrevEnabled && "prev" === e) ||
              (!t.isNextEnabled && "next" === e),
            d = [`fc-${e}-button`, n.getClass("button")];
          i && d.push(n.getClass("buttonActive")),
            r.push(
              f(
                "button",
                {
                  type: "button",
                  title: "function" == typeof c ? c(t.navUnit) : c,
                  disabled: s,
                  "aria-pressed": i,
                  className: d.join(" "),
                  onClick: o,
                },
                a || (l ? f("span", { className: l }) : "")
              )
            );
        }
      }
      if (r.length > 1) {
        return f(
          "div",
          { className: (i && n.getClass("buttonGroup")) || "" },
          ...r
        );
      }
      return r[0];
    }
  }
  class ia extends In {
    render() {
      let e,
        t,
        { model: n, extraClassName: r } = this.props,
        i = !1,
        s = n.sectionWidgets,
        o = s.center;
      return (
        s.left ? ((i = !0), (e = s.left)) : (e = s.start),
        s.right ? ((i = !0), (t = s.right)) : (t = s.end),
        f(
          "div",
          {
            className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(
              " "
            ),
          },
          this.renderSection("start", e || []),
          this.renderSection("center", o || []),
          this.renderSection("end", t || [])
        )
      );
    }
    renderSection(e, t) {
      let { props: n } = this;
      return f(ra, {
        key: e,
        widgetGroups: t,
        title: n.title,
        navUnit: n.navUnit,
        activeButton: n.activeButton,
        isTodayEnabled: n.isTodayEnabled,
        isPrevEnabled: n.isPrevEnabled,
        isNextEnabled: n.isNextEnabled,
        titleId: n.titleId,
      });
    }
  }
  class sa extends In {
    constructor() {
      super(...arguments),
        (this.state = { availableWidth: null }),
        (this.handleEl = (e) => {
          (this.el = e), On(this.props.elRef, e), this.updateAvailableWidth();
        }),
        (this.handleResize = () => {
          this.updateAvailableWidth();
        });
    }
    render() {
      let { props: e, state: t } = this,
        { aspectRatio: n } = e,
        r = [
          "fc-view-harness",
          n || e.liquid || e.height
            ? "fc-view-harness-active"
            : "fc-view-harness-passive",
        ],
        i = "",
        s = "";
      return (
        n
          ? null !== t.availableWidth
            ? (i = t.availableWidth / n)
            : (s = (1 / n) * 100 + "%")
          : (i = e.height || ""),
        f(
          "div",
          {
            "aria-labelledby": e.labeledById,
            ref: this.handleEl,
            className: r.join(" "),
            style: { height: i, paddingBottom: s },
          },
          e.children
        )
      );
    }
    componentDidMount() {
      this.context.addResizeHandler(this.handleResize);
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    updateAvailableWidth() {
      this.el &&
        this.props.aspectRatio &&
        this.setState({ availableWidth: this.el.offsetWidth });
    }
  }
  class oa extends gi {
    constructor(e) {
      super(e),
        (this.handleSegClick = (e, t) => {
          let { component: n } = this,
            { context: r } = n,
            i = Vr(t);
          if (i && n.isValidSegDownEl(e.target)) {
            let s = He(e.target, ".fc-event-forced-url"),
              o = s ? s.querySelector("a[href]").href : "";
            r.emitter.trigger("eventClick", {
              el: t,
              event: new zr(n.context, i.eventRange.def, i.eventRange.instance),
              jsEvent: e,
              view: r.viewApi,
            }),
              o && !e.defaultPrevented && (window.location.href = o);
          }
        }),
        (this.destroy = qe(e.el, "click", ".fc-event", this.handleSegClick));
    }
  }
  class aa extends gi {
    constructor(e) {
      super(e),
        (this.handleEventElRemove = (e) => {
          e === this.currentSegEl &&
            this.handleSegLeave(null, this.currentSegEl);
        }),
        (this.handleSegEnter = (e, t) => {
          Vr(t) &&
            ((this.currentSegEl = t),
            this.triggerEvent("eventMouseEnter", e, t));
        }),
        (this.handleSegLeave = (e, t) => {
          this.currentSegEl &&
            ((this.currentSegEl = null),
            this.triggerEvent("eventMouseLeave", e, t));
        }),
        (this.removeHoverListeners = (function (e, t, n, r) {
          let i;
          return qe(e, "mouseover", t, (e, t) => {
            if (t !== i) {
              (i = t), n(e, t);
              let s = (e) => {
                (i = null), r(e, t), t.removeEventListener("mouseleave", s);
              };
              t.addEventListener("mouseleave", s);
            }
          });
        })(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave));
    }
    destroy() {
      this.removeHoverListeners();
    }
    triggerEvent(e, t, n) {
      let { component: r } = this,
        { context: i } = r,
        s = Vr(n);
      (t && !r.isValidSegDownEl(t.target)) ||
        i.emitter.trigger(e, {
          el: n,
          event: new zr(i, s.eventRange.def, s.eventRange.instance),
          jsEvent: t,
          view: i.viewApi,
        });
    }
  }
  class la extends Mn {
    constructor() {
      super(...arguments),
        (this.buildViewContext = Oe(kn)),
        (this.buildViewPropTransformers = Oe(da)),
        (this.buildToolbarProps = Oe(ca)),
        (this.headerRef = { current: null }),
        (this.footerRef = { current: null }),
        (this.interactionsStore = {}),
        (this.state = { viewLabelId: Ge() }),
        (this.registerInteractiveComponent = (e, t) => {
          let n = (function (e, t) {
              return {
                component: e,
                el: t.el,
                useEventCenter: null == t.useEventCenter || t.useEventCenter,
                isHitComboAllowed: t.isHitComboAllowed || null,
              };
            })(e, t),
            r = [oa, aa]
              .concat(this.props.pluginHooks.componentInteractions)
              .map((e) => new e(n));
          (this.interactionsStore[e.uid] = r), (mi[e.uid] = n);
        }),
        (this.unregisterInteractiveComponent = (e) => {
          let t = this.interactionsStore[e.uid];
          if (t) {
            for (let e of t) e.destroy();
            delete this.interactionsStore[e.uid];
          }
          delete mi[e.uid];
        }),
        (this.resizeRunner = new Ee(() => {
          this.props.emitter.trigger("_resize", !0),
            this.props.emitter.trigger("windowResize", {
              view: this.props.viewApi,
            });
        })),
        (this.handleWindowResize = (e) => {
          let { options: t } = this.props;
          t.handleWindowResize &&
            e.target === window &&
            this.resizeRunner.request(t.windowResizeDelay);
        });
    }
    render() {
      let e,
        { props: t } = this,
        { toolbarConfig: n, options: r } = t,
        i = this.buildToolbarProps(
          t.viewSpec,
          t.dateProfile,
          t.dateProfileGenerator,
          t.currentDate,
          Kn(t.options.now, t.dateEnv),
          t.viewTitle
        ),
        s = !1,
        o = "";
      t.isHeightAuto || t.forPrint
        ? (o = "")
        : null != r.height
        ? (s = !0)
        : null != r.contentHeight
        ? (o = r.contentHeight)
        : (e = Math.max(r.aspectRatio, 0.5));
      let a = this.buildViewContext(
          t.viewSpec,
          t.viewApi,
          t.options,
          t.dateProfileGenerator,
          t.dateEnv,
          t.theme,
          t.pluginHooks,
          t.dispatch,
          t.getCurrentData,
          t.emitter,
          t.calendarApi,
          this.registerInteractiveComponent,
          this.unregisterInteractiveComponent
        ),
        l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
      return f(
        Tn.Provider,
        { value: a },
        n.header &&
          f(
            ia,
            Object.assign(
              {
                ref: this.headerRef,
                extraClassName: "fc-header-toolbar",
                model: n.header,
                titleId: l,
              },
              i
            )
          ),
        f(
          sa,
          { liquid: s, height: o, aspectRatio: e, labeledById: l },
          this.renderView(t),
          this.buildAppendContent()
        ),
        n.footer &&
          f(
            ia,
            Object.assign(
              {
                ref: this.footerRef,
                extraClassName: "fc-footer-toolbar",
                model: n.footer,
                titleId: "",
              },
              i
            )
          )
      );
    }
    componentDidMount() {
      let { props: e } = this;
      (this.calendarInteractions = e.pluginHooks.calendarInteractions.map(
        (t) => new t(e)
      )),
        window.addEventListener("resize", this.handleWindowResize);
      let { propSetHandlers: t } = e.pluginHooks;
      for (let n in t) t[n](e[n], e);
    }
    componentDidUpdate(e) {
      let { props: t } = this,
        { propSetHandlers: n } = t.pluginHooks;
      for (let r in n) t[r] !== e[r] && n[r](t[r], t);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize),
        this.resizeRunner.clear();
      for (let e of this.calendarInteractions) e.destroy();
      this.props.emitter.trigger("_unmount");
    }
    buildAppendContent() {
      let { props: e } = this;
      return f(p, {}, ...e.pluginHooks.viewContainerAppends.map((t) => t(e)));
    }
    renderView(e) {
      let { pluginHooks: t } = e,
        { viewSpec: n } = e,
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
          forPrint: e.forPrint,
        },
        i = this.buildViewPropTransformers(t.viewPropsTransformers);
      for (let t of i) Object.assign(r, t.transform(r, e));
      return f(n.component, Object.assign({}, r));
    }
  }
  function ca(e, t, n, r, i, s) {
    let o = n.build(i, void 0, !1),
      a = n.buildPrev(t, r, !1),
      l = n.buildNext(t, r, !1);
    return {
      title: s,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: o.isValid && !Yn(t.currentRange, i),
      isPrevEnabled: a.isValid,
      isNextEnabled: l.isValid,
    };
  }
  function da(e) {
    return e.map((e) => new e());
  }
  function ua(e) {
    let t = go(e.locale || "en", fo([]).map);
    return new $t(
      Object.assign(
        Object.assign({ timeZone: mn.timeZone, calendarSystem: "gregory" }, e),
        { locale: t }
      )
    );
  }
  Ki.touchMouseIgnoreWait = 500;
  let ha = 0,
    fa = 0,
    ga = !1;
  class pa {
    constructor(e) {
      (this.subjectEl = null),
        (this.selector = ""),
        (this.handleSelector = ""),
        (this.shouldIgnoreMove = !1),
        (this.shouldWatchScroll = !0),
        (this.isDragging = !1),
        (this.isTouchDragging = !1),
        (this.wasTouchScroll = !1),
        (this.handleMouseDown = (e) => {
          if (
            !this.shouldIgnoreMouse() &&
            (function (e) {
              return 0 === e.button && !e.ctrlKey;
            })(e) &&
            this.tryStart(e)
          ) {
            let t = this.createEventFromMouse(e, !0);
            this.emitter.trigger("pointerdown", t),
              this.initScrollWatch(t),
              this.shouldIgnoreMove ||
                document.addEventListener("mousemove", this.handleMouseMove),
              document.addEventListener("mouseup", this.handleMouseUp);
          }
        }),
        (this.handleMouseMove = (e) => {
          let t = this.createEventFromMouse(e);
          this.recordCoords(t), this.emitter.trigger("pointermove", t);
        }),
        (this.handleMouseUp = (e) => {
          document.removeEventListener("mousemove", this.handleMouseMove),
            document.removeEventListener("mouseup", this.handleMouseUp),
            this.emitter.trigger("pointerup", this.createEventFromMouse(e)),
            this.cleanup();
        }),
        (this.handleTouchStart = (e) => {
          if (this.tryStart(e)) {
            this.isTouchDragging = !0;
            let t = this.createEventFromTouch(e, !0);
            this.emitter.trigger("pointerdown", t), this.initScrollWatch(t);
            let n = e.target;
            this.shouldIgnoreMove ||
              n.addEventListener("touchmove", this.handleTouchMove),
              n.addEventListener("touchend", this.handleTouchEnd),
              n.addEventListener("touchcancel", this.handleTouchEnd),
              window.addEventListener("scroll", this.handleTouchScroll, !0);
          }
        }),
        (this.handleTouchMove = (e) => {
          let t = this.createEventFromTouch(e);
          this.recordCoords(t), this.emitter.trigger("pointermove", t);
        }),
        (this.handleTouchEnd = (e) => {
          if (this.isDragging) {
            let t = e.target;
            t.removeEventListener("touchmove", this.handleTouchMove),
              t.removeEventListener("touchend", this.handleTouchEnd),
              t.removeEventListener("touchcancel", this.handleTouchEnd),
              window.removeEventListener("scroll", this.handleTouchScroll, !0),
              this.emitter.trigger("pointerup", this.createEventFromTouch(e)),
              this.cleanup(),
              (this.isTouchDragging = !1),
              (ha += 1),
              setTimeout(() => {
                ha -= 1;
              }, Ki.touchMouseIgnoreWait);
          }
        }),
        (this.handleTouchScroll = () => {
          this.wasTouchScroll = !0;
        }),
        (this.handleScroll = (e) => {
          if (!this.shouldIgnoreMove) {
            let t = window.pageXOffset - this.prevScrollX + this.prevPageX,
              n = window.pageYOffset - this.prevScrollY + this.prevPageY;
            this.emitter.trigger("pointermove", {
              origEvent: e,
              isTouch: this.isTouchDragging,
              subjectEl: this.subjectEl,
              pageX: t,
              pageY: n,
              deltaX: t - this.origPageX,
              deltaY: n - this.origPageY,
            });
          }
        }),
        (this.containerEl = e),
        (this.emitter = new Tr()),
        e.addEventListener("mousedown", this.handleMouseDown),
        e.addEventListener("touchstart", this.handleTouchStart, {
          passive: !0,
        }),
        (fa += 1),
        1 === fa && window.addEventListener("touchmove", ma, { passive: !1 });
    }
    destroy() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
        this.containerEl.removeEventListener(
          "touchstart",
          this.handleTouchStart,
          { passive: !0 }
        ),
        (fa -= 1),
        fa || window.removeEventListener("touchmove", ma, { passive: !1 });
    }
    tryStart(e) {
      let t = this.querySubjectEl(e),
        n = e.target;
      return (
        !(!t || (this.handleSelector && !He(n, this.handleSelector))) &&
        ((this.subjectEl = t),
        (this.isDragging = !0),
        (this.wasTouchScroll = !1),
        !0)
      );
    }
    cleanup() {
      (ga = !1),
        (this.isDragging = !1),
        (this.subjectEl = null),
        this.destroyScrollWatch();
    }
    querySubjectEl(e) {
      return this.selector ? He(e.target, this.selector) : this.containerEl;
    }
    shouldIgnoreMouse() {
      return ha || this.isTouchDragging;
    }
    cancelTouchScroll() {
      this.isDragging && (ga = !0);
    }
    initScrollWatch(e) {
      this.shouldWatchScroll &&
        (this.recordCoords(e),
        window.addEventListener("scroll", this.handleScroll, !0));
    }
    recordCoords(e) {
      this.shouldWatchScroll &&
        ((this.prevPageX = e.pageX),
        (this.prevPageY = e.pageY),
        (this.prevScrollX = window.pageXOffset),
        (this.prevScrollY = window.pageYOffset));
    }
    destroyScrollWatch() {
      this.shouldWatchScroll &&
        window.removeEventListener("scroll", this.handleScroll, !0);
    }
    createEventFromMouse(e, t) {
      let n = 0,
        r = 0;
      return (
        t
          ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
          : ((n = e.pageX - this.origPageX), (r = e.pageY - this.origPageY)),
        {
          origEvent: e,
          isTouch: !1,
          subjectEl: this.subjectEl,
          pageX: e.pageX,
          pageY: e.pageY,
          deltaX: n,
          deltaY: r,
        }
      );
    }
    createEventFromTouch(e, t) {
      let n,
        r,
        i = e.touches,
        s = 0,
        o = 0;
      return (
        i && i.length
          ? ((n = i[0].pageX), (r = i[0].pageY))
          : ((n = e.pageX), (r = e.pageY)),
        t
          ? ((this.origPageX = n), (this.origPageY = r))
          : ((s = n - this.origPageX), (o = r - this.origPageY)),
        {
          origEvent: e,
          isTouch: !0,
          subjectEl: this.subjectEl,
          pageX: n,
          pageY: r,
          deltaX: s,
          deltaY: o,
        }
      );
    }
  }
  function ma(e) {
    ga && e.preventDefault();
  }
  class va {
    constructor() {
      (this.isVisible = !1),
        (this.sourceEl = null),
        (this.mirrorEl = null),
        (this.sourceElRect = null),
        (this.parentNode = document.body),
        (this.zIndex = 9999),
        (this.revertDuration = 0);
    }
    start(e, t, n) {
      (this.sourceEl = e),
        (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
        (this.origScreenX = t - window.pageXOffset),
        (this.origScreenY = n - window.pageYOffset),
        (this.deltaX = 0),
        (this.deltaY = 0),
        this.updateElPosition();
    }
    handleMove(e, t) {
      (this.deltaX = e - window.pageXOffset - this.origScreenX),
        (this.deltaY = t - window.pageYOffset - this.origScreenY),
        this.updateElPosition();
    }
    setIsVisible(e) {
      e
        ? this.isVisible ||
          (this.mirrorEl && (this.mirrorEl.style.display = ""),
          (this.isVisible = e),
          this.updateElPosition())
        : this.isVisible &&
          (this.mirrorEl && (this.mirrorEl.style.display = "none"),
          (this.isVisible = e));
    }
    stop(e, t) {
      let n = () => {
        this.cleanup(), t();
      };
      e &&
      this.mirrorEl &&
      this.isVisible &&
      this.revertDuration &&
      (this.deltaX || this.deltaY)
        ? this.doRevertAnimation(n, this.revertDuration)
        : setTimeout(n, 0);
    }
    doRevertAnimation(e, t) {
      let n = this.mirrorEl,
        r = this.sourceEl.getBoundingClientRect();
      (n.style.transition = "top " + t + "ms,left " + t + "ms"),
        Ue(n, { left: r.left, top: r.top }),
        Ze(n, () => {
          (n.style.transition = ""), e();
        });
    }
    cleanup() {
      this.mirrorEl && (Pe(this.mirrorEl), (this.mirrorEl = null)),
        (this.sourceEl = null);
    }
    updateElPosition() {
      this.sourceEl &&
        this.isVisible &&
        Ue(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY,
        });
    }
    getMirrorEl() {
      let e = this.sourceElRect,
        t = this.mirrorEl;
      return (
        t ||
          ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)),
          t.classList.add("fc-unselectable"),
          t.classList.add("fc-event-dragging"),
          Ue(t, {
            position: "fixed",
            zIndex: this.zIndex,
            visibility: "",
            boxSizing: "border-box",
            width: e.right - e.left,
            height: e.bottom - e.top,
            right: "auto",
            bottom: "auto",
            margin: 0,
          }),
          this.parentNode.appendChild(t)),
        t
      );
    }
  }
  class ba extends Li {
    constructor(e, t) {
      super(),
        (this.handleScroll = () => {
          (this.scrollTop = this.scrollController.getScrollTop()),
            (this.scrollLeft = this.scrollController.getScrollLeft()),
            this.handleScrollChange();
        }),
        (this.scrollController = e),
        (this.doesListening = t),
        (this.scrollTop = this.origScrollTop = e.getScrollTop()),
        (this.scrollLeft = this.origScrollLeft = e.getScrollLeft()),
        (this.scrollWidth = e.getScrollWidth()),
        (this.scrollHeight = e.getScrollHeight()),
        (this.clientWidth = e.getClientWidth()),
        (this.clientHeight = e.getClientHeight()),
        (this.clientRect = this.computeClientRect()),
        this.doesListening &&
          this.getEventTarget().addEventListener("scroll", this.handleScroll);
    }
    destroy() {
      this.doesListening &&
        this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
    getScrollTop() {
      return this.scrollTop;
    }
    getScrollLeft() {
      return this.scrollLeft;
    }
    setScrollTop(e) {
      this.scrollController.setScrollTop(e),
        this.doesListening ||
          ((this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0)),
          this.handleScrollChange());
    }
    setScrollLeft(e) {
      this.scrollController.setScrollLeft(e),
        this.doesListening ||
          ((this.scrollLeft = Math.max(
            Math.min(e, this.getMaxScrollLeft()),
            0
          )),
          this.handleScrollChange());
    }
    getClientWidth() {
      return this.clientWidth;
    }
    getClientHeight() {
      return this.clientHeight;
    }
    getScrollWidth() {
      return this.scrollWidth;
    }
    getScrollHeight() {
      return this.scrollHeight;
    }
    handleScrollChange() {}
  }
  class ya extends ba {
    constructor(e, t) {
      super(new Wi(e), t);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return Bi(this.scrollController.el);
    }
  }
  class Ea extends ba {
    constructor(e) {
      super(new Fi(), e);
    }
    getEventTarget() {
      return window;
    }
    computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight,
      };
    }
    handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  }
  const Aa = "function" == typeof performance ? performance.now : Date.now;
  class Da {
    constructor() {
      (this.isEnabled = !0),
        (this.scrollQuery = [window, ".fc-scroller"]),
        (this.edgeThreshold = 50),
        (this.maxVelocity = 300),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.isAnimating = !1),
        (this.scrollCaches = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        (this.animate = () => {
          if (this.isAnimating) {
            let e = this.computeBestEdge(
              this.pointerScreenX + window.pageXOffset,
              this.pointerScreenY + window.pageYOffset
            );
            if (e) {
              let t = Aa();
              this.handleSide(e, (t - this.msSinceRequest) / 1e3),
                this.requestAnimation(t);
            } else this.isAnimating = !1;
          }
        });
    }
    start(e, t, n) {
      this.isEnabled &&
        ((this.scrollCaches = this.buildCaches(n)),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        this.handleMove(e, t));
    }
    handleMove(e, t) {
      if (this.isEnabled) {
        let n = e - window.pageXOffset,
          r = t - window.pageYOffset,
          i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
          s = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
        i < 0 ? (this.everMovedUp = !0) : i > 0 && (this.everMovedDown = !0),
          s < 0
            ? (this.everMovedLeft = !0)
            : s > 0 && (this.everMovedRight = !0),
          (this.pointerScreenX = n),
          (this.pointerScreenY = r),
          this.isAnimating ||
            ((this.isAnimating = !0), this.requestAnimation(Aa()));
      }
    }
    stop() {
      if (this.isEnabled) {
        this.isAnimating = !1;
        for (let e of this.scrollCaches) e.destroy();
        this.scrollCaches = null;
      }
    }
    requestAnimation(e) {
      (this.msSinceRequest = e), requestAnimationFrame(this.animate);
    }
    handleSide(e, t) {
      let { scrollCache: n } = e,
        { edgeThreshold: r } = this,
        i = r - e.distance,
        s = ((i * i) / (r * r)) * this.maxVelocity * t,
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
    computeBestEdge(e, t) {
      let { edgeThreshold: n } = this,
        r = null,
        i = this.scrollCaches || [];
      for (let s of i) {
        let i = s.clientRect,
          o = e - i.left,
          a = i.right - e,
          l = t - i.top,
          c = i.bottom - t;
        o >= 0 &&
          a >= 0 &&
          l >= 0 &&
          c >= 0 &&
          (l <= n &&
            this.everMovedUp &&
            s.canScrollUp() &&
            (!r || r.distance > l) &&
            (r = { scrollCache: s, name: "top", distance: l }),
          c <= n &&
            this.everMovedDown &&
            s.canScrollDown() &&
            (!r || r.distance > c) &&
            (r = { scrollCache: s, name: "bottom", distance: c }),
          o <= n &&
            this.everMovedLeft &&
            s.canScrollLeft() &&
            (!r || r.distance > o) &&
            (r = { scrollCache: s, name: "left", distance: o }),
          a <= n &&
            this.everMovedRight &&
            s.canScrollRight() &&
            (!r || r.distance > a) &&
            (r = { scrollCache: s, name: "right", distance: a }));
      }
      return r;
    }
    buildCaches(e) {
      return this.queryScrollEls(e).map((e) =>
        e === window ? new Ea(!1) : new ya(e, !1)
      );
    }
    queryScrollEls(e) {
      let t = [];
      for (let n of this.scrollQuery)
        "object" == typeof n
          ? t.push(n)
          : t.push(...Array.prototype.slice.call(Fe(e).querySelectorAll(n)));
      return t;
    }
  }
  class Sa extends $i {
    constructor(e, t) {
      super(e),
        (this.containerEl = e),
        (this.delay = null),
        (this.minDistance = 0),
        (this.touchScrollAllowed = !0),
        (this.mirrorNeedsRevert = !1),
        (this.isInteracting = !1),
        (this.isDragging = !1),
        (this.isDelayEnded = !1),
        (this.isDistanceSurpassed = !1),
        (this.delayTimeoutId = null),
        (this.onPointerDown = (e) => {
          this.isDragging ||
            ((this.isInteracting = !0),
            (this.isDelayEnded = !1),
            (this.isDistanceSurpassed = !1),
            nt(document.body),
            it(document.body),
            e.isTouch || e.origEvent.preventDefault(),
            this.emitter.trigger("pointerdown", e),
            this.isInteracting &&
              !this.pointer.shouldIgnoreMove &&
              (this.mirror.setIsVisible(!1),
              this.mirror.start(e.subjectEl, e.pageX, e.pageY),
              this.startDelay(e),
              this.minDistance || this.handleDistanceSurpassed(e)));
        }),
        (this.onPointerMove = (e) => {
          if (this.isInteracting) {
            if (
              (this.emitter.trigger("pointermove", e),
              !this.isDistanceSurpassed)
            ) {
              let t,
                n = this.minDistance,
                { deltaX: r, deltaY: i } = e;
              (t = r * r + i * i),
                t >= n * n && this.handleDistanceSurpassed(e);
            }
            this.isDragging &&
              ("scroll" !== e.origEvent.type &&
                (this.mirror.handleMove(e.pageX, e.pageY),
                this.autoScroller.handleMove(e.pageX, e.pageY)),
              this.emitter.trigger("dragmove", e));
          }
        }),
        (this.onPointerUp = (e) => {
          this.isInteracting &&
            ((this.isInteracting = !1),
            rt(document.body),
            st(document.body),
            this.emitter.trigger("pointerup", e),
            this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)),
            this.delayTimeoutId &&
              (clearTimeout(this.delayTimeoutId),
              (this.delayTimeoutId = null)));
        });
      let n = (this.pointer = new pa(e));
      n.emitter.on("pointerdown", this.onPointerDown),
        n.emitter.on("pointermove", this.onPointerMove),
        n.emitter.on("pointerup", this.onPointerUp),
        t && (n.selector = t),
        (this.mirror = new va()),
        (this.autoScroller = new Da());
    }
    destroy() {
      this.pointer.destroy(), this.onPointerUp({});
    }
    startDelay(e) {
      "number" == typeof this.delay
        ? (this.delayTimeoutId = setTimeout(() => {
            (this.delayTimeoutId = null), this.handleDelayEnd(e);
          }, this.delay))
        : this.handleDelayEnd(e);
    }
    handleDelayEnd(e) {
      (this.isDelayEnded = !0), this.tryStartDrag(e);
    }
    handleDistanceSurpassed(e) {
      (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
    }
    tryStartDrag(e) {
      this.isDelayEnded &&
        this.isDistanceSurpassed &&
        ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
          ((this.isDragging = !0),
          (this.mirrorNeedsRevert = !1),
          this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
          this.emitter.trigger("dragstart", e),
          !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
    }
    tryStopDrag(e) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
    }
    stopDrag(e) {
      (this.isDragging = !1), this.emitter.trigger("dragend", e);
    }
    setIgnoreMove(e) {
      this.pointer.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      this.mirror.setIsVisible(e);
    }
    setMirrorNeedsRevert(e) {
      this.mirrorNeedsRevert = e;
    }
    setAutoScrollEnabled(e) {
      this.autoScroller.isEnabled = e;
    }
  }
  class wa {
    constructor(e) {
      (this.origRect = ji(e)),
        (this.scrollCaches = zi(e).map((e) => new ya(e, !0)));
    }
    destroy() {
      for (let e of this.scrollCaches) e.destroy();
    }
    computeLeft() {
      let e = this.origRect.left;
      for (let t of this.scrollCaches)
        e += t.origScrollLeft - t.getScrollLeft();
      return e;
    }
    computeTop() {
      let e = this.origRect.top;
      for (let t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop();
      return e;
    }
    isWithinClipping(e, t) {
      let n = { left: e, top: t };
      for (let e of this.scrollCaches)
        if (!Ca(e.getEventTarget()) && !bi(n, e.clientRect)) return !1;
      return !0;
    }
  }
  function Ca(e) {
    let t = e.tagName;
    return "HTML" === t || "BODY" === t;
  }
  class Ra {
    constructor(e, t) {
      (this.useSubjectCenter = !1),
        (this.requireInitial = !0),
        (this.initialHit = null),
        (this.movingHit = null),
        (this.finalHit = null),
        (this.handlePointerDown = (e) => {
          let { dragging: t } = this;
          (this.initialHit = null),
            (this.movingHit = null),
            (this.finalHit = null),
            this.prepareHits(),
            this.processFirstCoord(e),
            this.initialHit || !this.requireInitial
              ? (t.setIgnoreMove(!1), this.emitter.trigger("pointerdown", e))
              : t.setIgnoreMove(!0);
        }),
        (this.handleDragStart = (e) => {
          this.emitter.trigger("dragstart", e), this.handleMove(e, !0);
        }),
        (this.handleDragMove = (e) => {
          this.emitter.trigger("dragmove", e), this.handleMove(e);
        }),
        (this.handlePointerUp = (e) => {
          this.releaseHits(), this.emitter.trigger("pointerup", e);
        }),
        (this.handleDragEnd = (e) => {
          this.movingHit && this.emitter.trigger("hitupdate", null, !0, e),
            (this.finalHit = this.movingHit),
            (this.movingHit = null),
            this.emitter.trigger("dragend", e);
        }),
        (this.droppableStore = t),
        e.emitter.on("pointerdown", this.handlePointerDown),
        e.emitter.on("dragstart", this.handleDragStart),
        e.emitter.on("dragmove", this.handleDragMove),
        e.emitter.on("pointerup", this.handlePointerUp),
        e.emitter.on("dragend", this.handleDragEnd),
        (this.dragging = e),
        (this.emitter = new Tr());
    }
    processFirstCoord(e) {
      let t,
        n = { left: e.pageX, top: e.pageY },
        r = n,
        i = e.subjectEl;
      i instanceof HTMLElement && ((t = ji(i)), (r = Ei(r, t)));
      let s = (this.initialHit = this.queryHitForOffset(r.left, r.top));
      if (s) {
        if (this.useSubjectCenter && t) {
          let e = yi(t, s.rect);
          e && (r = Ai(e));
        }
        this.coordAdjust = Di(r, n);
      } else this.coordAdjust = { left: 0, top: 0 };
    }
    handleMove(e, t) {
      let n = this.queryHitForOffset(
        e.pageX + this.coordAdjust.left,
        e.pageY + this.coordAdjust.top
      );
      (!t && xa(this.movingHit, n)) ||
        ((this.movingHit = n), this.emitter.trigger("hitupdate", n, !1, e));
    }
    prepareHits() {
      this.offsetTrackers = we(
        this.droppableStore,
        (e) => (e.component.prepareHits(), new wa(e.el))
      );
    }
    releaseHits() {
      let { offsetTrackers: e } = this;
      for (let t in e) e[t].destroy();
      this.offsetTrackers = {};
    }
    queryHitForOffset(e, t) {
      let { droppableStore: n, offsetTrackers: r } = this,
        i = null;
      for (let s in n) {
        let o = n[s].component,
          a = r[s];
        if (a && a.isWithinClipping(e, t)) {
          let n = a.computeLeft(),
            r = a.computeTop(),
            l = e - n,
            c = t - r,
            { origRect: d } = a,
            u = d.right - d.left,
            h = d.bottom - d.top;
          if (l >= 0 && l < u && c >= 0 && c < h) {
            let e = o.queryHit(l, c, u, h);
            e &&
              qn(e.dateProfile.activeRange, e.dateSpan.range) &&
              (!i || e.layer > i.layer) &&
              ((e.componentId = s),
              (e.context = o.context),
              (e.rect.left += n),
              (e.rect.right += n),
              (e.rect.top += r),
              (e.rect.bottom += r),
              (i = e));
          }
        }
      }
      return i;
    }
  }
  function xa(e, t) {
    return (
      (!e && !t) || (Boolean(e) === Boolean(t) && si(e.dateSpan, t.dateSpan))
    );
  }
  function _a(e, t) {
    let n = {};
    for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
    var r, i;
    return (
      Object.assign(
        n,
        ((r = e),
        {
          date: (i = t.dateEnv).toDate(r.range.start),
          dateStr: i.formatIso(r.range.start, { omitTime: r.allDay }),
          allDay: r.allDay,
        })
      ),
      n
    );
  }
  class Ta extends gi {
    constructor(e) {
      super(e),
        (this.subjectEl = null),
        (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null),
        (this.handlePointerDown = (e) => {
          let t = e.origEvent.target,
            { component: n, dragging: r } = this,
            { mirror: i } = r,
            { options: s } = n.context,
            o = n.context;
          this.subjectEl = e.subjectEl;
          let a = (this.subjectSeg = Vr(e.subjectEl)),
            l = (this.eventRange = a.eventRange).instance.instanceId;
          (this.relevantEvents = fr(o.getCurrentData().eventStore, l)),
            (r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance),
            (r.delay =
              e.isTouch && l !== n.props.eventSelection
                ? (function (e) {
                    let { options: t } = e.context,
                      n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n;
                  })(n)
                : null),
            s.fixedMirrorParent
              ? (i.parentNode = s.fixedMirrorParent)
              : (i.parentNode = He(t, ".fc")),
            (i.revertDuration = s.dragRevertDuration);
          let c = n.isValidSegDownEl(t) && !He(t, ".fc-event-resizer");
          r.setIgnoreMove(!c),
            (this.isDragging =
              c && e.subjectEl.classList.contains("fc-event-draggable"));
        }),
        (this.handleDragStart = (e) => {
          let t = this.component.context,
            n = this.eventRange,
            r = n.instance.instanceId;
          e.isTouch
            ? r !== this.component.props.eventSelection &&
              t.dispatch({ type: "SELECT_EVENT", eventInstanceId: r })
            : t.dispatch({ type: "UNSELECT_EVENT" }),
            this.isDragging &&
              (t.calendarApi.unselect(e),
              t.emitter.trigger("eventDragStart", {
                el: this.subjectEl,
                event: new zr(t, n.def, n.instance),
                jsEvent: e.origEvent,
                view: t.viewApi,
              }));
        }),
        (this.handleHitUpdate = (e, t) => {
          if (!this.isDragging) return;
          let n = this.relevantEvents,
            r = this.hitDragging.initialHit,
            i = this.component.context,
            s = null,
            o = null,
            a = null,
            l = !1,
            c = {
              affectedEvents: n,
              mutatedEvents: { defs: {}, instances: {} },
              isEvent: !0,
            };
          if (e) {
            s = e.context;
            let t = s.options;
            i === s || (t.editable && t.droppable)
              ? ((o = (function (e, t, n) {
                  let r = e.dateSpan,
                    i = t.dateSpan,
                    s = r.range.start,
                    o = i.range.start,
                    a = {};
                  r.allDay !== i.allDay &&
                    ((a.allDay = i.allDay),
                    (a.hasEnd = t.context.options.allDayMaintainDuration),
                    i.allDay && (s = wt(s)));
                  let l = $n(
                    s,
                    o,
                    e.context.dateEnv,
                    e.componentId === t.componentId ? e.largeUnit : null
                  );
                  l.milliseconds && (a.allDay = !1);
                  let c = { datesDelta: l, standardProps: a };
                  for (let r of n) r(c, e, t);
                  return c;
                })(
                  r,
                  e,
                  s.getCurrentData().pluginHooks.eventDragMutationMassagers
                )),
                o &&
                  ((a = Pr(n, s.getCurrentData().eventUiBases, o, s)),
                  (c.mutatedEvents = a),
                  ms(c, e.dateProfile, s) ||
                    ((l = !0),
                    (o = null),
                    (a = null),
                    (c.mutatedEvents = { defs: {}, instances: {} }))))
              : (s = null);
          }
          this.displayDrag(s, c),
            l ? et() : tt(),
            t ||
              (i === s && xa(r, e) && (o = null),
              this.dragging.setMirrorNeedsRevert(!o),
              this.dragging.setMirrorIsVisible(
                !e || !Fe(this.subjectEl).querySelector(".fc-event-mirror")
              ),
              (this.receivingContext = s),
              (this.validMutation = o),
              (this.mutatedRelevantEvents = a));
        }),
        (this.handlePointerUp = () => {
          this.isDragging || this.cleanup();
        }),
        (this.handleDragEnd = (e) => {
          if (this.isDragging) {
            let t = this.component.context,
              n = t.viewApi,
              { receivingContext: r, validMutation: i } = this,
              s = this.eventRange.def,
              o = this.eventRange.instance,
              a = new zr(t, s, o),
              l = this.relevantEvents,
              c = this.mutatedRelevantEvents,
              { finalHit: d } = this.hitDragging;
            if (
              (this.clearDrag(),
              t.emitter.trigger("eventDragStop", {
                el: this.subjectEl,
                event: a,
                jsEvent: e.origEvent,
                view: n,
              }),
              i)
            ) {
              if (r === t) {
                let r = new zr(
                  t,
                  c.defs[s.defId],
                  o ? c.instances[o.instanceId] : null
                );
                t.dispatch({ type: "MERGE_EVENTS", eventStore: c });
                let d = {
                    oldEvent: a,
                    event: r,
                    relatedEvents: Lr(c, t, o),
                    revert() {
                      t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                    },
                  },
                  u = {};
                for (let e of t.getCurrentData().pluginHooks
                  .eventDropTransformers)
                  Object.assign(u, e(i, t));
                t.emitter.trigger(
                  "eventDrop",
                  Object.assign(Object.assign(Object.assign({}, d), u), {
                    el: e.subjectEl,
                    delta: i.datesDelta,
                    jsEvent: e.origEvent,
                    view: n,
                  })
                ),
                  t.emitter.trigger("eventChange", d);
              } else if (r) {
                let i = {
                  event: a,
                  relatedEvents: Lr(l, t, o),
                  revert() {
                    t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                  },
                };
                t.emitter.trigger(
                  "eventLeave",
                  Object.assign(Object.assign({}, i), {
                    draggedEl: e.subjectEl,
                    view: n,
                  })
                ),
                  t.dispatch({ type: "REMOVE_EVENTS", eventStore: l }),
                  t.emitter.trigger("eventRemove", i);
                let u = c.defs[s.defId],
                  h = c.instances[o.instanceId],
                  f = new zr(r, u, h);
                r.dispatch({ type: "MERGE_EVENTS", eventStore: c });
                let g = {
                  event: f,
                  relatedEvents: Lr(c, r, h),
                  revert() {
                    r.dispatch({ type: "REMOVE_EVENTS", eventStore: c });
                  },
                };
                r.emitter.trigger("eventAdd", g),
                  e.isTouch &&
                    r.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: o.instanceId,
                    }),
                  r.emitter.trigger(
                    "drop",
                    Object.assign(Object.assign({}, _a(d.dateSpan, r)), {
                      draggedEl: e.subjectEl,
                      jsEvent: e.origEvent,
                      view: d.context.viewApi,
                    })
                  ),
                  r.emitter.trigger(
                    "eventReceive",
                    Object.assign(Object.assign({}, g), {
                      draggedEl: e.subjectEl,
                      view: d.context.viewApi,
                    })
                  );
              }
            } else t.emitter.trigger("_noEventDrop");
          }
          this.cleanup();
        });
      let { component: t } = this,
        { options: n } = t.context,
        r = (this.dragging = new Sa(e.el));
      (r.pointer.selector = Ta.SELECTOR),
        (r.touchScrollAllowed = !1),
        (r.autoScroller.isEnabled = n.dragScroll);
      let i = (this.hitDragging = new Ra(this.dragging, mi));
      (i.useSubjectCenter = e.useEventCenter),
        i.emitter.on("pointerdown", this.handlePointerDown),
        i.emitter.on("dragstart", this.handleDragStart),
        i.emitter.on("hitupdate", this.handleHitUpdate),
        i.emitter.on("pointerup", this.handlePointerUp),
        i.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    displayDrag(e, t) {
      let n = this.component.context,
        r = this.receivingContext;
      r &&
        r !== e &&
        (r === n
          ? r.dispatch({
              type: "SET_EVENT_DRAG",
              state: {
                affectedEvents: t.affectedEvents,
                mutatedEvents: { defs: {}, instances: {} },
                isEvent: !0,
              },
            })
          : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
    }
    clearDrag() {
      let e = this.component.context,
        { receivingContext: t } = this;
      t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
        e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    cleanup() {
      (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null);
    }
  }
  Ta.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  const ka = { fixedMirrorParent: wn },
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
      eventLeave: wn,
    };
  class Ia {
    constructor(e, t) {
      (this.receivingContext = null),
        (this.droppableEvent = null),
        (this.suppliedDragMeta = null),
        (this.dragMeta = null),
        (this.handleDragStart = (e) => {
          this.dragMeta = this.buildDragMeta(e.subjectEl);
        }),
        (this.handleHitUpdate = (e, t, n) => {
          let { dragging: r } = this.hitDragging,
            i = null,
            s = null,
            o = !1,
            a = {
              affectedEvents: { defs: {}, instances: {} },
              mutatedEvents: { defs: {}, instances: {} },
              isEvent: this.dragMeta.create,
            };
          e &&
            ((i = e.context),
            this.canDropElOnCalendar(n.subjectEl, i) &&
              ((s = (function (e, t, n) {
                let r = Object.assign({}, t.leftoverProps);
                for (let i of n.pluginHooks.externalDefTransforms)
                  Object.assign(r, i(e, t));
                let { refined: i, extra: s } = lr(r, n),
                  o = dr(
                    i,
                    s,
                    t.sourceId,
                    e.allDay,
                    n.options.forceEventDuration || Boolean(t.duration),
                    n
                  ),
                  a = e.range.start;
                e.allDay && t.startTime && (a = n.dateEnv.add(a, t.startTime));
                let l = t.duration
                    ? n.dateEnv.add(a, t.duration)
                    : Nr(e.allDay, a, n),
                  c = tr(o.defId, { start: a, end: l });
                return { def: o, instance: c };
              })(e.dateSpan, this.dragMeta, i)),
              (a.mutatedEvents = hr(s)),
              (o = !ms(a, e.dateProfile, i)),
              o &&
                ((a.mutatedEvents = { defs: {}, instances: {} }), (s = null)))),
            this.displayDrag(i, a),
            r.setMirrorIsVisible(
              t || !s || !document.querySelector(".fc-event-mirror")
            ),
            o ? et() : tt(),
            t ||
              (r.setMirrorNeedsRevert(!s),
              (this.receivingContext = i),
              (this.droppableEvent = s));
        }),
        (this.handleDragEnd = (e) => {
          let { receivingContext: t, droppableEvent: n } = this;
          if ((this.clearDrag(), t && n)) {
            let r = this.hitDragging.finalHit,
              i = r.context.viewApi,
              s = this.dragMeta;
            if (
              (t.emitter.trigger(
                "drop",
                Object.assign(Object.assign({}, _a(r.dateSpan, t)), {
                  draggedEl: e.subjectEl,
                  jsEvent: e.origEvent,
                  view: i,
                })
              ),
              s.create)
            ) {
              let r = hr(n);
              t.dispatch({ type: "MERGE_EVENTS", eventStore: r }),
                e.isTouch &&
                  t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: n.instance.instanceId,
                  }),
                t.emitter.trigger("eventReceive", {
                  event: new zr(t, n.def, n.instance),
                  relatedEvents: [],
                  revert() {
                    t.dispatch({ type: "REMOVE_EVENTS", eventStore: r });
                  },
                  draggedEl: e.subjectEl,
                  view: i,
                });
            }
          }
          (this.receivingContext = null), (this.droppableEvent = null);
        });
      let n = (this.hitDragging = new Ra(e, mi));
      (n.requireInitial = !1),
        n.emitter.on("dragstart", this.handleDragStart),
        n.emitter.on("hitupdate", this.handleHitUpdate),
        n.emitter.on("dragend", this.handleDragEnd),
        (this.suppliedDragMeta = t);
    }
    buildDragMeta(e) {
      return "object" == typeof this.suppliedDragMeta
        ? ts(this.suppliedDragMeta)
        : "function" == typeof this.suppliedDragMeta
        ? ts(this.suppliedDragMeta(e))
        : (function (e) {
            let t = (function (e, t) {
              let n = Ki.dataAttrPrefix,
                r = (n ? n + "-" : "") + t;
              return e.getAttribute("data-" + r) || "";
            })(e, "event");
            return ts(t ? JSON.parse(t) : { create: !1 });
          })(e);
    }
    displayDrag(e, t) {
      let n = this.receivingContext;
      n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
    }
    clearDrag() {
      this.receivingContext &&
        this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    canDropElOnCalendar(e, t) {
      let n = t.options.dropAccept;
      return "function" == typeof n
        ? n.call(t.calendarApi, e)
        : "string" != typeof n || !n || Boolean(Be(e, n));
    }
  }
  Ki.dataAttrPrefix = "";
  class Oa extends $i {
    constructor(e) {
      super(e),
        (this.shouldIgnoreMove = !1),
        (this.mirrorSelector = ""),
        (this.currentMirrorEl = null),
        (this.handlePointerDown = (e) => {
          this.emitter.trigger("pointerdown", e),
            this.shouldIgnoreMove || this.emitter.trigger("dragstart", e);
        }),
        (this.handlePointerMove = (e) => {
          this.shouldIgnoreMove || this.emitter.trigger("dragmove", e);
        }),
        (this.handlePointerUp = (e) => {
          this.emitter.trigger("pointerup", e),
            this.shouldIgnoreMove || this.emitter.trigger("dragend", e);
        });
      let t = (this.pointer = new pa(e));
      t.emitter.on("pointerdown", this.handlePointerDown),
        t.emitter.on("pointermove", this.handlePointerMove),
        t.emitter.on("pointerup", this.handlePointerUp);
    }
    destroy() {
      this.pointer.destroy();
    }
    setIgnoreMove(e) {
      this.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      if (e)
        this.currentMirrorEl &&
          ((this.currentMirrorEl.style.visibility = ""),
          (this.currentMirrorEl = null));
      else {
        let e = this.mirrorSelector
          ? document.querySelector(this.mirrorSelector)
          : null;
        e && ((this.currentMirrorEl = e), (e.style.visibility = "hidden"));
      }
    }
  }
  var Na = mo({
    name: "@fullcalendar/interaction",
    componentInteractions: [
      class extends gi {
        constructor(e) {
          super(e),
            (this.handlePointerDown = (e) => {
              let { dragging: t } = this,
                n = e.origEvent.target;
              t.setIgnoreMove(!this.component.isValidDateDownEl(n));
            }),
            (this.handleDragEnd = (e) => {
              let { component: t } = this,
                { pointer: n } = this.dragging;
              if (!n.wasTouchScroll) {
                let { initialHit: n, finalHit: r } = this.hitDragging;
                if (n && r && xa(n, r)) {
                  let { context: r } = t,
                    i = Object.assign(Object.assign({}, _a(n.dateSpan, r)), {
                      dayEl: n.dayEl,
                      jsEvent: e.origEvent,
                      view: r.viewApi || r.calendarApi.view,
                    });
                  r.emitter.trigger("dateClick", i);
                }
              }
            }),
            (this.dragging = new Sa(e.el)),
            (this.dragging.autoScroller.isEnabled = !1);
          let t = (this.hitDragging = new Ra(this.dragging, pi(e)));
          t.emitter.on("pointerdown", this.handlePointerDown),
            t.emitter.on("dragend", this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      class extends gi {
        constructor(e) {
          super(e),
            (this.dragSelection = null),
            (this.handlePointerDown = (e) => {
              let { component: t, dragging: n } = this,
                { options: r } = t.context,
                i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
              n.setIgnoreMove(!i),
                (n.delay = e.isTouch
                  ? (function (e) {
                      let { options: t } = e.context,
                        n = t.selectLongPressDelay;
                      null == n && (n = t.longPressDelay);
                      return n;
                    })(t)
                  : null);
            }),
            (this.handleDragStart = (e) => {
              this.component.context.calendarApi.unselect(e);
            }),
            (this.handleHitUpdate = (e, t) => {
              let { context: n } = this.component,
                r = null,
                i = !1;
              if (e) {
                let t = this.hitDragging.initialHit;
                (e.componentId === t.componentId &&
                  this.isHitComboAllowed &&
                  !this.isHitComboAllowed(t, e)) ||
                  (r = (function (e, t, n) {
                    let r = e.dateSpan,
                      i = t.dateSpan,
                      s = [
                        r.range.start,
                        r.range.end,
                        i.range.start,
                        i.range.end,
                      ];
                    s.sort(ht);
                    let o = {};
                    for (let r of n) {
                      let n = r(e, t);
                      if (!1 === n) return null;
                      n && Object.assign(o, n);
                    }
                    return (
                      (o.range = { start: s[0], end: s[3] }),
                      (o.allDay = r.allDay),
                      o
                    );
                  })(t, e, n.pluginHooks.dateSelectionTransformers)),
                  (r && vs(r, e.dateProfile, n)) || ((i = !0), (r = null));
              }
              r
                ? n.dispatch({ type: "SELECT_DATES", selection: r })
                : t || n.dispatch({ type: "UNSELECT_DATES" }),
                i ? et() : tt(),
                t || (this.dragSelection = r);
            }),
            (this.handlePointerUp = (e) => {
              this.dragSelection &&
                (Ir(this.dragSelection, e, this.component.context),
                (this.dragSelection = null));
            });
          let { component: t } = e,
            { options: n } = t.context,
            r = (this.dragging = new Sa(e.el));
          (r.touchScrollAllowed = !1),
            (r.minDistance = n.selectMinDistance || 0),
            (r.autoScroller.isEnabled = n.dragScroll);
          let i = (this.hitDragging = new Ra(this.dragging, pi(e)));
          i.emitter.on("pointerdown", this.handlePointerDown),
            i.emitter.on("dragstart", this.handleDragStart),
            i.emitter.on("hitupdate", this.handleHitUpdate),
            i.emitter.on("pointerup", this.handlePointerUp);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      Ta,
      class extends gi {
        constructor(e) {
          super(e),
            (this.draggingSegEl = null),
            (this.draggingSeg = null),
            (this.eventRange = null),
            (this.relevantEvents = null),
            (this.validMutation = null),
            (this.mutatedRelevantEvents = null),
            (this.handlePointerDown = (e) => {
              let { component: t } = this,
                n = Vr(this.querySegEl(e)),
                r = (this.eventRange = n.eventRange);
              (this.dragging.minDistance =
                t.context.options.eventDragMinDistance),
                this.dragging.setIgnoreMove(
                  !this.component.isValidSegDownEl(e.origEvent.target) ||
                    (e.isTouch &&
                      this.component.props.eventSelection !==
                        r.instance.instanceId)
                );
            }),
            (this.handleDragStart = (e) => {
              let { context: t } = this.component,
                n = this.eventRange;
              this.relevantEvents = fr(
                t.getCurrentData().eventStore,
                this.eventRange.instance.instanceId
              );
              let r = this.querySegEl(e);
              (this.draggingSegEl = r),
                (this.draggingSeg = Vr(r)),
                t.calendarApi.unselect(),
                t.emitter.trigger("eventResizeStart", {
                  el: r,
                  event: new zr(t, n.def, n.instance),
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                });
            }),
            (this.handleHitUpdate = (e, t, n) => {
              let { context: r } = this.component,
                i = this.relevantEvents,
                s = this.hitDragging.initialHit,
                o = this.eventRange.instance,
                a = null,
                l = null,
                c = !1,
                d = {
                  affectedEvents: i,
                  mutatedEvents: { defs: {}, instances: {} },
                  isEvent: !0,
                };
              if (e) {
                (e.componentId === s.componentId &&
                  this.isHitComboAllowed &&
                  !this.isHitComboAllowed(s, e)) ||
                  (a = (function (e, t, n, r) {
                    let i = e.context.dateEnv,
                      s = e.dateSpan.range.start,
                      o = t.dateSpan.range.start,
                      a = $n(s, o, i, e.largeUnit);
                    if (n) {
                      if (i.add(r.start, a) < r.end) return { startDelta: a };
                    } else if (i.add(r.end, a) > r.start)
                      return { endDelta: a };
                    return null;
                  })(
                    s,
                    e,
                    n.subjectEl.classList.contains("fc-event-resizer-start"),
                    o.range
                  ));
              }
              a &&
                ((l = Pr(i, r.getCurrentData().eventUiBases, a, r)),
                (d.mutatedEvents = l),
                ms(d, e.dateProfile, r) ||
                  ((c = !0), (a = null), (l = null), (d.mutatedEvents = null))),
                l
                  ? r.dispatch({ type: "SET_EVENT_RESIZE", state: d })
                  : r.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                c ? et() : tt(),
                t ||
                  (a && xa(s, e) && (a = null),
                  (this.validMutation = a),
                  (this.mutatedRelevantEvents = l));
            }),
            (this.handleDragEnd = (e) => {
              let { context: t } = this.component,
                n = this.eventRange.def,
                r = this.eventRange.instance,
                i = new zr(t, n, r),
                s = this.relevantEvents,
                o = this.mutatedRelevantEvents;
              if (
                (t.emitter.trigger("eventResizeStop", {
                  el: this.draggingSegEl,
                  event: i,
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                }),
                this.validMutation)
              ) {
                let a = new zr(
                  t,
                  o.defs[n.defId],
                  r ? o.instances[r.instanceId] : null
                );
                t.dispatch({ type: "MERGE_EVENTS", eventStore: o });
                let l = {
                  oldEvent: i,
                  event: a,
                  relatedEvents: Lr(o, t, r),
                  revert() {
                    t.dispatch({ type: "MERGE_EVENTS", eventStore: s });
                  },
                };
                t.emitter.trigger(
                  "eventResize",
                  Object.assign(Object.assign({}, l), {
                    el: this.draggingSegEl,
                    startDelta: this.validMutation.startDelta || jt(0),
                    endDelta: this.validMutation.endDelta || jt(0),
                    jsEvent: e.origEvent,
                    view: t.viewApi,
                  })
                ),
                  t.emitter.trigger("eventChange", l);
              } else t.emitter.trigger("_noEventResize");
              (this.draggingSeg = null),
                (this.relevantEvents = null),
                (this.validMutation = null);
            });
          let { component: t } = e,
            n = (this.dragging = new Sa(e.el));
          (n.pointer.selector = ".fc-event-resizer"),
            (n.touchScrollAllowed = !1),
            (n.autoScroller.isEnabled = t.context.options.dragScroll);
          let r = (this.hitDragging = new Ra(this.dragging, pi(e)));
          r.emitter.on("pointerdown", this.handlePointerDown),
            r.emitter.on("dragstart", this.handleDragStart),
            r.emitter.on("hitupdate", this.handleHitUpdate),
            r.emitter.on("dragend", this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
        querySegEl(e) {
          return He(e.subjectEl, ".fc-event");
        }
      },
    ],
    calendarInteractions: [
      class {
        constructor(e) {
          (this.context = e),
            (this.isRecentPointerDateSelect = !1),
            (this.matchesCancel = !1),
            (this.matchesEvent = !1),
            (this.onSelect = (e) => {
              e.jsEvent && (this.isRecentPointerDateSelect = !0);
            }),
            (this.onDocumentPointerDown = (e) => {
              let t = this.context.options.unselectCancel,
                n = We(e.origEvent);
              (this.matchesCancel = !!He(n, t)),
                (this.matchesEvent = !!He(n, Ta.SELECTOR));
            }),
            (this.onDocumentPointerUp = (e) => {
              let { context: t } = this,
                { documentPointer: n } = this,
                r = t.getCurrentData();
              if (!n.wasTouchScroll) {
                if (r.dateSelection && !this.isRecentPointerDateSelect) {
                  let n = t.options.unselectAuto;
                  !n || (n && this.matchesCancel) || t.calendarApi.unselect(e);
                }
                r.eventSelection &&
                  !this.matchesEvent &&
                  t.dispatch({ type: "UNSELECT_EVENT" });
              }
              this.isRecentPointerDateSelect = !1;
            });
          let t = (this.documentPointer = new pa(document));
          (t.shouldIgnoreMove = !0),
            (t.shouldWatchScroll = !1),
            t.emitter.on("pointerdown", this.onDocumentPointerDown),
            t.emitter.on("pointerup", this.onDocumentPointerUp),
            e.emitter.on("select", this.onSelect);
        }
        destroy() {
          this.context.emitter.off("select", this.onSelect),
            this.documentPointer.destroy();
        }
      },
    ],
    elementDraggingImpl: Sa,
    optionRefiners: ka,
    listenerRefiners: Ma,
  });
  class Pa extends Vi {
    constructor() {
      super(...arguments), (this.headerElRef = { current: null });
    }
    renderSimpleLayout(e, t) {
      let { props: n, context: r } = this,
        i = [],
        s = js(r.options);
      return (
        e &&
          i.push({
            type: "header",
            key: "header",
            isSticky: s,
            chunk: {
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          }),
        i.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunk: { content: t },
        }),
        f(
          Un,
          { elClasses: ["fc-daygrid"], viewSpec: r.viewSpec },
          f(Us, {
            liquid: !n.isHeightAuto && !n.forPrint,
            collapsibleWidth: n.forPrint,
            cols: [],
            sections: i,
          })
        )
      );
    }
    renderHScrollLayout(e, t, n, r) {
      let i = this.context.pluginHooks.scrollGridImpl;
      if (!i) throw new Error("No ScrollGrid implementation");
      let { props: s, context: o } = this,
        a = !s.forPrint && js(o.options),
        l = !s.forPrint && zs(o.options),
        c = [];
      return (
        e &&
          c.push({
            type: "header",
            key: "header",
            isSticky: a,
            chunks: [
              {
                key: "main",
                elRef: this.headerElRef,
                tableClassName: "fc-col-header",
                rowContent: e,
              },
            ],
          }),
        c.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunks: [{ key: "main", content: t }],
        }),
        l &&
          c.push({
            type: "footer",
            key: "footer",
            isSticky: !0,
            chunks: [{ key: "main", content: Bs }],
          }),
        f(
          Un,
          { elClasses: ["fc-daygrid"], viewSpec: o.viewSpec },
          f(i, {
            liquid: !s.isHeightAuto && !s.forPrint,
            collapsibleWidth: s.forPrint,
            colGroups: [{ cols: [{ span: n, minWidth: r }] }],
            sections: c,
          })
        )
      );
    }
  }
  function Ha(e, t) {
    let n = [];
    for (let e = 0; e < t; e += 1) n[e] = [];
    for (let t of e) n[t.row].push(t);
    return n;
  }
  function Ba(e, t) {
    let n = [];
    for (let e = 0; e < t; e += 1) n[e] = [];
    for (let t of e) n[t.firstCol].push(t);
    return n;
  }
  function ja(e, t) {
    let n = [];
    if (e) {
      for (let r = 0; r < t; r += 1)
        n[r] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: [],
        };
      for (let t of e.segs) n[t.row].segs.push(t);
    } else for (let e = 0; e < t; e += 1) n[e] = null;
    return n;
  }
  const za = gn({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow",
  });
  function Ua(e) {
    let { display: t } = e.eventRange.ui;
    return (
      "list-item" === t ||
      ("auto" === t &&
        !e.eventRange.def.allDay &&
        e.firstCol === e.lastCol &&
        e.isStart &&
        e.isEnd)
    );
  }
  class La extends In {
    render() {
      let { props: e } = this;
      return f(
        Ws,
        Object.assign({}, e, {
          elClasses: [
            "fc-daygrid-event",
            "fc-daygrid-block-event",
            "fc-h-event",
          ],
          defaultTimeFormat: za,
          defaultDisplayEventEnd: e.defaultDisplayEventEnd,
          disableResizing: !e.seg.eventRange.def.allDay,
        })
      );
    }
  }
  class Wa extends In {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        i = $r(r, n.eventTimeFormat || za, t, !0, e.defaultDisplayEventEnd);
      return f(
        Ls,
        Object.assign({}, e, {
          elTag: "a",
          elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
          elAttrs: ni(e.seg, t),
          defaultGenerator: Fa,
          timeText: i,
          isResizing: !1,
          isDateSelecting: !1,
        })
      );
    }
  }
  function Fa(e) {
    return f(
      p,
      null,
      f("div", {
        className: "fc-daygrid-event-dot",
        style: { borderColor: e.borderColor || e.backgroundColor },
      }),
      e.timeText && f("div", { className: "fc-event-time" }, e.timeText),
      f(
        "div",
        { className: "fc-event-title" },
        e.event.title || f(p, null, " ")
      )
    );
  }
  class Va extends In {
    constructor() {
      super(...arguments), (this.compileSegs = Oe(Ga));
    }
    render() {
      let { props: e } = this,
        { allSegs: t, invisibleSegs: n } = this.compileSegs(e.singlePlacements);
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
        popoverContent: () => {
          let n =
            (e.eventDrag ? e.eventDrag.affectedInstances : null) ||
            (e.eventResize ? e.eventResize.affectedInstances : null) ||
            {};
          return f(
            p,
            null,
            t.map((t) => {
              let r = t.eventRange.instance.instanceId;
              return f(
                "div",
                {
                  className: "fc-daygrid-event-harness",
                  key: r,
                  style: { visibility: n[r] ? "hidden" : "" },
                },
                Ua(t)
                  ? f(
                      Wa,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: !1,
                          isSelected: r === e.eventSelection,
                          defaultDisplayEventEnd: !1,
                        },
                        Kr(t, e.todayRange)
                      )
                    )
                  : f(
                      La,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: r === e.eventSelection,
                          defaultDisplayEventEnd: !1,
                        },
                        Kr(t, e.todayRange)
                      )
                    )
              );
            })
          );
        },
      });
    }
  }
  function Ga(e) {
    let t = [],
      n = [];
    for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
    return { allSegs: t, invisibleSegs: n };
  }
  const Qa = gn({ week: "narrow" });
  class qa extends Vi {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.state = { dayNumberId: Ge() }),
        (this.handleRootEl = (e) => {
          On(this.rootElRef, e), On(this.props.elRef, e);
        });
    }
    render() {
      let { context: e, props: t, state: n, rootElRef: r } = this,
        { options: i } = e,
        { date: s, dateProfile: o } = t;
      return f(
        Qs,
        {
          elTag: "td",
          elRef: this.handleRootEl,
          elClasses: ["fc-daygrid-day", ...(t.extraClassNames || [])],
          elAttrs: Object.assign(
            Object.assign(
              Object.assign({}, t.extraDataAttrs),
              t.showDayNumber ? { "aria-labelledby": n.dayNumberId } : {}
            ),
            { role: "gridcell" }
          ),
          defaultGenerator: Ya,
          date: s,
          dateProfile: o,
          todayRange: t.todayRange,
          showDayNumber: t.showDayNumber,
          extraRenderProps: t.extraRenderProps,
        },
        (o, a) =>
          f(
            "div",
            {
              className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
              ref: t.innerElRef,
            },
            t.showWeekNumber &&
              f($s, {
                elTag: "a",
                elClasses: ["fc-daygrid-week-number"],
                elAttrs: ki(e, s, "week"),
                date: s,
                defaultFormat: Qa,
              }),
            Boolean(
              !a.isDisabled && (t.showDayNumber || qs(i) || t.forceDayTop)
            ) &&
              f(
                "div",
                { className: "fc-daygrid-day-top" },
                f(o, {
                  elTag: "a",
                  elClasses: ["fc-daygrid-day-number"],
                  elAttrs: Object.assign(Object.assign({}, ki(e, s)), {
                    id: n.dayNumberId,
                  }),
                })
              ),
            f(
              "div",
              { className: "fc-daygrid-day-events", ref: t.fgContentElRef },
              t.fgContent,
              f(
                "div",
                {
                  className: "fc-daygrid-day-bottom",
                  style: { marginTop: t.moreMarginTop },
                },
                f(Va, {
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
                  todayRange: t.todayRange,
                })
              )
            ),
            f("div", { className: "fc-daygrid-day-bg" }, t.bgContent)
          )
      );
    }
  }
  function Ya(e) {
    return e.dayNumberText || f(p, null, " ");
  }
  function Za(e, t, n, r, i, s, o) {
    let a = new Ja();
    (a.allowReslicing = !0),
      (a.strictOrder = r),
      !0 === t || !0 === n
        ? ((a.maxCoord = s), (a.hiddenConsumes = !0))
        : "number" == typeof t
        ? (a.maxStackCnt = t)
        : "number" == typeof n &&
          ((a.maxStackCnt = n), (a.hiddenConsumes = !0));
    let l = [],
      c = [];
    for (let t = 0; t < e.length; t += 1) {
      let n = e[t],
        { instanceId: r } = n.eventRange.instance,
        s = i[r];
      null != s
        ? l.push({
            index: t,
            thickness: s,
            span: { start: n.firstCol, end: n.lastCol + 1 },
          })
        : c.push(n);
    }
    let d = a.addSegs(l),
      u = a.toRects(),
      {
        singleColPlacements: h,
        multiColPlacements: f,
        leftoverMargins: g,
      } = (function (e, t, n) {
        let r = (function (e, t) {
            let n = [];
            for (let e = 0; e < t; e += 1) n.push([]);
            for (let t of e)
              for (let e = t.span.start; e < t.span.end; e += 1) n[e].push(t);
            return n;
          })(e, n.length),
          i = [],
          s = [],
          o = [];
        for (let e = 0; e < n.length; e += 1) {
          let a = r[e],
            l = [],
            c = 0,
            d = 0;
          for (let r of a) {
            let i = t[r.index];
            l.push({
              seg: Xa(i, e, e + 1, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: r.levelCoord,
              marginTop: r.levelCoord - c,
            }),
              (c = r.levelCoord + r.thickness);
          }
          let u = [];
          (c = 0), (d = 0);
          for (let r of a) {
            let i = t[r.index],
              s = r.span.end - r.span.start > 1,
              o = r.span.start === e;
            (d += r.levelCoord - c),
              (c = r.levelCoord + r.thickness),
              s
                ? ((d += r.thickness),
                  o &&
                    u.push({
                      seg: Xa(i, r.span.start, r.span.end, n),
                      isVisible: !0,
                      isAbsolute: !0,
                      absoluteTop: r.levelCoord,
                      marginTop: 0,
                    }))
                : o &&
                  (u.push({
                    seg: Xa(i, r.span.start, r.span.end, n),
                    isVisible: !0,
                    isAbsolute: !1,
                    absoluteTop: r.levelCoord,
                    marginTop: d,
                  }),
                  (d = 0));
          }
          i.push(l), s.push(u), o.push(d);
        }
        return {
          singleColPlacements: i,
          multiColPlacements: s,
          leftoverMargins: o,
        };
      })(u, e, o),
      p = [],
      m = [];
    for (let e of c) {
      f[e.firstCol].push({
        seg: e,
        isVisible: !1,
        isAbsolute: !0,
        absoluteTop: 0,
        marginTop: 0,
      });
      for (let t = e.firstCol; t <= e.lastCol; t += 1)
        h[t].push({
          seg: Xa(e, t, t + 1, o),
          isVisible: !1,
          isAbsolute: !1,
          absoluteTop: 0,
          marginTop: 0,
        });
    }
    for (let e = 0; e < o.length; e += 1) p.push(0);
    for (let t of d) {
      let n = e[t.index],
        r = t.span;
      f[r.start].push({
        seg: Xa(n, r.start, r.end, o),
        isVisible: !1,
        isAbsolute: !0,
        absoluteTop: 0,
        marginTop: 0,
      });
      for (let e = r.start; e < r.end; e += 1)
        (p[e] += 1),
          h[e].push({
            seg: Xa(n, e, e + 1, o),
            isVisible: !1,
            isAbsolute: !1,
            absoluteTop: 0,
            marginTop: 0,
          });
    }
    for (let e = 0; e < o.length; e += 1) m.push(g[e]);
    return {
      singleColPlacements: h,
      multiColPlacements: f,
      moreCnts: p,
      moreMarginTops: m,
    };
  }
  function Xa(e, t, n, r) {
    if (e.firstCol === t && e.lastCol === n - 1) return e;
    let i = e.eventRange,
      s = i.range,
      o = Vn(s, { start: r[t].date, end: vt(r[n - 1].date, 1) });
    return Object.assign(Object.assign({}, e), {
      firstCol: t,
      lastCol: n - 1,
      eventRange: {
        def: i.def,
        ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
        instance: i.instance,
        range: o,
      },
      isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
      isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf(),
    });
  }
  class Ja extends Gi {
    constructor() {
      super(...arguments), (this.hiddenConsumes = !1), (this.forceHidden = {});
    }
    addSegs(e) {
      const t = super.addSegs(e),
        { entriesByLevel: n } = this,
        r = (e) => !this.forceHidden[qi(e)];
      for (let e = 0; e < n.length; e += 1) n[e] = n[e].filter(r);
      return t;
    }
    handleInvalidInsertion(e, t, n) {
      const { entriesByLevel: r, forceHidden: i } = this,
        { touchingEntry: s, touchingLevel: o, touchingLateral: a } = e;
      if (this.hiddenConsumes && s) {
        const e = qi(s);
        if (!i[e])
          if (this.allowReslicing) {
            const e = Object.assign(Object.assign({}, s), {
              span: Zi(s.span, t.span),
            });
            (i[qi(e)] = !0), (r[o][a] = e), this.splitEntry(s, t, n);
          } else (i[e] = !0), n.push(s);
      }
      return super.handleInvalidInsertion(e, t, n);
    }
  }
  class $a extends Vi {
    constructor() {
      super(...arguments),
        (this.cellElRefs = new Rs()),
        (this.frameElRefs = new Rs()),
        (this.fgElRefs = new Rs()),
        (this.segHarnessRefs = new Rs()),
        (this.rootElRef = { current: null }),
        (this.state = {
          framePositions: null,
          maxContentHeight: null,
          eventInstanceHeights: {},
        }),
        (this.handleResize = (e) => {
          e && this.updateSizing(!0);
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r } = n,
        i = e.cells.length,
        s = Ba(e.businessHourSegs, i),
        o = Ba(e.bgEventSegs, i),
        a = Ba(this.getHighlightSegs(), i),
        l = Ba(this.getMirrorSegs(), i),
        {
          singleColPlacements: c,
          multiColPlacements: d,
          moreCnts: u,
          moreMarginTops: h,
        } = Za(
          qr(e.fgEventSegs, r.eventOrder),
          e.dayMaxEvents,
          e.dayMaxEventRows,
          r.eventOrderStrict,
          t.eventInstanceHeights,
          t.maxContentHeight,
          e.cells
        ),
        g =
          (e.eventDrag && e.eventDrag.affectedInstances) ||
          (e.eventResize && e.eventResize.affectedInstances) ||
          {};
      return f(
        "tr",
        { ref: this.rootElRef, role: "row" },
        e.renderIntro && e.renderIntro(),
        e.cells.map((t, n) => {
          let r = this.renderFgSegs(
              n,
              e.forPrint ? c[n] : d[n],
              e.todayRange,
              g
            ),
            i = this.renderFgSegs(
              n,
              (function (e, t) {
                if (!e.length) return [];
                let n = (function (e) {
                  let t = {};
                  for (let n of e)
                    for (let e of n)
                      t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
                  return t;
                })(t);
                return e.map((e) => ({
                  seg: e,
                  isVisible: !0,
                  isAbsolute: !0,
                  absoluteTop: n[e.eventRange.instance.instanceId],
                  marginTop: 0,
                }));
              })(l[n], d),
              e.todayRange,
              {},
              Boolean(e.eventDrag),
              Boolean(e.eventResize),
              !1
            );
          return f(qa, {
            key: t.key,
            elRef: this.cellElRefs.createRef(t.key),
            innerElRef: this.frameElRefs.createRef(t.key),
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
            fgContentElRef: this.fgElRefs.createRef(t.key),
            fgContent: f(p, null, f(p, null, r), f(p, null, i)),
            bgContent: f(
              p,
              null,
              this.renderFillSegs(a[n], "highlight"),
              this.renderFillSegs(s[n], "non-business"),
              this.renderFillSegs(o[n], "bg-event")
            ),
          });
        })
      );
    }
    componentDidMount() {
      this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, t) {
      let n = this.props;
      this.updateSizing(!xe(e, n));
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
      let { props: e } = this;
      return e.eventDrag && e.eventDrag.segs.length
        ? e.eventDrag.segs
        : e.eventResize && e.eventResize.segs.length
        ? e.eventResize.segs
        : e.dateSelectionSegs;
    }
    getMirrorSegs() {
      let { props: e } = this;
      return e.eventResize && e.eventResize.segs.length
        ? e.eventResize.segs
        : [];
    }
    renderFgSegs(e, t, n, r, i, s, o) {
      let { context: a } = this,
        { eventSelection: l } = this.props,
        { framePositions: c } = this.state,
        d = 1 === this.props.cells.length,
        u = i || s || o,
        h = [];
      if (c)
        for (let g of t) {
          let { seg: t } = g,
            { instanceId: p } = t.eventRange.instance,
            m = p + ":" + e,
            v = g.isVisible && !r[p],
            b = g.isAbsolute,
            y = "",
            E = "";
          b &&
            (a.isRtl
              ? ((E = 0), (y = c.lefts[t.lastCol] - c.lefts[t.firstCol]))
              : ((y = 0), (E = c.rights[t.firstCol] - c.rights[t.lastCol]))),
            h.push(
              f(
                "div",
                {
                  className:
                    "fc-daygrid-event-harness" +
                    (b ? " fc-daygrid-event-harness-abs" : ""),
                  key: m,
                  ref: u ? null : this.segHarnessRefs.createRef(m),
                  style: {
                    visibility: v ? "" : "hidden",
                    marginTop: b ? "" : g.marginTop,
                    top: b ? g.absoluteTop : "",
                    left: y,
                    right: E,
                  },
                },
                Ua(t)
                  ? f(
                      Wa,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: i,
                          isSelected: p === l,
                          defaultDisplayEventEnd: d,
                        },
                        Kr(t, n)
                      )
                    )
                  : f(
                      La,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: i,
                          isResizing: s,
                          isDateSelecting: o,
                          isSelected: p === l,
                          defaultDisplayEventEnd: d,
                        },
                        Kr(t, n)
                      )
                    )
              )
            );
        }
      return h;
    }
    renderFillSegs(e, t) {
      let { isRtl: n } = this.context,
        { todayRange: r } = this.props,
        { framePositions: i } = this.state,
        s = [];
      if (i)
        for (let o of e) {
          let e = n
            ? { right: 0, left: i.lefts[o.lastCol] - i.lefts[o.firstCol] }
            : { left: 0, right: i.rights[o.firstCol] - i.rights[o.lastCol] };
          s.push(
            f(
              "div",
              {
                key: ti(o.eventRange),
                className: "fc-daygrid-bg-harness",
                style: e,
              },
              "bg-event" === t
                ? f(Zs, Object.assign({ seg: o }, Kr(o, r)))
                : Js(t)
            )
          );
        }
      return f(p, {}, ...s);
    }
    updateSizing(e) {
      let { props: t, frameElRefs: n } = this;
      if (!t.forPrint && null !== t.clientWidth) {
        if (e) {
          let e = t.cells.map((e) => n.currentMap[e.key]);
          if (e.length) {
            let t = this.rootElRef.current;
            this.setState({ framePositions: new Ui(t, e, !0, !1) });
          }
        }
        const r = this.state.eventInstanceHeights,
          i = this.queryEventInstanceHeights(),
          s = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
        this.safeSetState({
          eventInstanceHeights: Object.assign(Object.assign({}, r), i),
          maxContentHeight: s ? this.computeMaxContentHeight() : null,
        });
      }
    }
    queryEventInstanceHeights() {
      let e = this.segHarnessRefs.currentMap,
        t = {};
      for (let n in e) {
        let r = Math.round(e[n].getBoundingClientRect().height),
          i = n.split(":")[0];
        t[i] = Math.max(t[i] || 0, r);
      }
      return t;
    }
    computeMaxContentHeight() {
      let e = this.props.cells[0].key,
        t = this.cellElRefs.currentMap[e],
        n = this.fgElRefs.currentMap[e];
      return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
    }
    getCellEls() {
      let e = this.cellElRefs.currentMap;
      return this.props.cells.map((t) => e[t.key]);
    }
  }
  $a.addStateEquality({ eventInstanceHeights: xe });
  class Ka extends Vi {
    constructor() {
      super(...arguments),
        (this.splitBusinessHourSegs = Oe(Ha)),
        (this.splitBgEventSegs = Oe(Ha)),
        (this.splitFgEventSegs = Oe(Ha)),
        (this.splitDateSelectionSegs = Oe(Ha)),
        (this.splitEventDrag = Oe(ja)),
        (this.splitEventResize = Oe(ja)),
        (this.rowRefs = new Rs()),
        (this.handleRootEl = (e) => {
          (this.rootEl = e),
            e
              ? this.context.registerInteractiveComponent(this, {
                  el: e,
                  isHitComboAllowed: this.props.isHitComboAllowed,
                })
              : this.context.unregisterInteractiveComponent(this);
        });
    }
    render() {
      let { props: e } = this,
        {
          dateProfile: t,
          dayMaxEventRows: n,
          dayMaxEvents: r,
          expandRows: i,
        } = e,
        s = e.cells.length,
        o = this.splitBusinessHourSegs(e.businessHourSegs, s),
        a = this.splitBgEventSegs(e.bgEventSegs, s),
        l = this.splitFgEventSegs(e.fgEventSegs, s),
        c = this.splitDateSelectionSegs(e.dateSelectionSegs, s),
        d = this.splitEventDrag(e.eventDrag, s),
        u = this.splitEventResize(e.eventResize, s),
        h = !0 === r || !0 === n;
      return (
        h && !i && ((h = !1), (n = null), (r = null)),
        f(
          "div",
          {
            className: [
              "fc-daygrid-body",
              h ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
              i ? "" : "fc-daygrid-body-natural",
            ].join(" "),
            ref: this.handleRootEl,
            style: { width: e.clientWidth, minWidth: e.tableMinWidth },
          },
          f(ls, { unit: "day" }, (h, g) =>
            f(
              p,
              null,
              f(
                "table",
                {
                  role: "presentation",
                  className: "fc-scrollgrid-sync-table",
                  style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth,
                    height: i ? e.clientHeight : "",
                  },
                },
                e.colGroupNode,
                f(
                  "tbody",
                  { role: "presentation" },
                  e.cells.map((i, h) =>
                    f($a, {
                      ref: this.rowRefs.createRef(h),
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
                      forPrint: e.forPrint,
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
    prepareHits() {
      (this.rowPositions = new Ui(
        this.rootEl,
        this.rowRefs.collect().map((e) => e.getCellEls()[0]),
        !1,
        !0
      )),
        (this.colPositions = new Ui(
          this.rootEl,
          this.rowRefs.currentMap[0].getCellEls(),
          !0,
          !1
        ));
    }
    queryHit(e, t) {
      let { colPositions: n, rowPositions: r } = this,
        i = n.leftToIndex(e),
        s = r.topToIndex(t);
      if (null != s && null != i) {
        let e = this.props.cells[s][i];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: Object.assign(
            { range: this.getCellRange(s, i), allDay: !0 },
            e.extraDateSpan
          ),
          dayEl: this.getCellEl(s, i),
          rect: {
            left: n.lefts[i],
            right: n.rights[i],
            top: r.tops[s],
            bottom: r.bottoms[s],
          },
          layer: 0,
        };
      }
      return null;
    }
    getCellEl(e, t) {
      return this.rowRefs.currentMap[e].getCellEls()[t];
    }
    getCellRange(e, t) {
      let n = this.props.cells[e][t].date;
      return { start: n, end: vt(n, 1) };
    }
  }
  function el(e) {
    return e.eventRange.def.allDay;
  }
  class tl extends gs {
    constructor() {
      super(...arguments), (this.forceDayIfListItem = !0);
    }
    sliceRange(e, t) {
      return t.sliceRange(e);
    }
  }
  class nl extends Vi {
    constructor() {
      super(...arguments),
        (this.slicer = new tl()),
        (this.tableRef = { current: null });
    }
    render() {
      let { props: e, context: t } = this;
      return f(
        Ka,
        Object.assign(
          { ref: this.tableRef },
          this.slicer.sliceProps(
            e,
            e.dateProfile,
            e.nextDayThreshold,
            t,
            e.dayTableModel
          ),
          {
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
            forPrint: e.forPrint,
          }
        )
      );
    }
  }
  function rl(e, t) {
    let n = new hs(e.renderRange, t);
    return new fs(n, /year|month|week/.test(e.currentRangeUnit));
  }
  ye(
    ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{cursor:pointer;position:relative;z-index:4}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}'
  );
  var il = mo({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component: class extends Pa {
          constructor() {
            super(...arguments),
              (this.buildDayTableModel = Oe(rl)),
              (this.headerRef = { current: null }),
              (this.tableRef = { current: null });
          }
          render() {
            let { options: e, dateProfileGenerator: t } = this.context,
              { props: n } = this,
              r = this.buildDayTableModel(n.dateProfile, t),
              i =
                e.dayHeaders &&
                f(ds, {
                  ref: this.headerRef,
                  dateProfile: n.dateProfile,
                  dates: r.headerDates,
                  datesRepDistinctDays: 1 === r.rowCnt,
                }),
              s = (t) =>
                f(nl, {
                  ref: this.tableRef,
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
                  headerAlignElRef: this.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: n.forPrint,
                });
            return e.dayMinWidth
              ? this.renderHScrollLayout(i, s, r.colCnt, e.dayMinWidth)
              : this.renderSimpleLayout(i, s);
          }
        },
        dateProfileGeneratorClass: class extends er {
          buildRenderRange(e, t, n) {
            let r,
              { dateEnv: i } = this.props,
              s = super.buildRenderRange(e, t, n),
              o = s.start,
              a = s.end;
            if (
              (/^(year|month)$/.test(t) &&
                ((o = i.startOfWeek(o)),
                (r = i.startOfWeek(a)),
                r.valueOf() !== a.valueOf() && (a = mt(r, 1))),
              this.props.monthMode && this.props.fixedWeekCount)
            ) {
              a = mt(a, 6 - Math.ceil(yt(o, a)));
            }
            return { start: o, end: a };
          }
        },
      },
      dayGridDay: { type: "dayGrid", duration: { days: 1 } },
      dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
      dayGridMonth: {
        type: "dayGrid",
        duration: { months: 1 },
        monthMode: !0,
        fixedWeekCount: !0,
      },
    },
  });
  class sl extends wi {
    getKeyInfo() {
      return { allDay: {}, timed: {} };
    }
    getKeysForDateSpan(e) {
      return e.allDay ? ["allDay"] : ["timed"];
    }
    getKeysForEventDef(e) {
      return e.allDay ? (Fr(e) ? ["timed", "allDay"] : ["allDay"]) : ["timed"];
    }
  }
  const ol = gn({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short",
  });
  function al(e) {
    let t = [
      "fc-timegrid-slot",
      "fc-timegrid-slot-label",
      e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
    ];
    return f(Tn.Consumer, null, (n) => {
      if (!e.isLabeled)
        return f("td", { className: t.join(" "), "data-time": e.isoTimeStr });
      let { dateEnv: r, options: i, viewApi: s } = n,
        o =
          null == i.slotLabelFormat
            ? ol
            : Array.isArray(i.slotLabelFormat)
            ? gn(i.slotLabelFormat[0])
            : gn(i.slotLabelFormat),
        a = {
          level: 0,
          time: e.time,
          date: r.toDate(e.date),
          view: s,
          text: r.format(e.date, o),
        };
      return f(
        jn,
        {
          elTag: "td",
          elClasses: t,
          elAttrs: { "data-time": e.isoTimeStr },
          renderProps: a,
          generatorName: "slotLabelContent",
          generator: i.slotLabelContent || ll,
          classNameGenerator: i.slotLabelClassNames,
          didMount: i.slotLabelDidMount,
          willUnmount: i.slotLabelWillUnmount,
        },
        (e) =>
          f(
            "div",
            {
              className:
                "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
            },
            f(e, {
              elTag: "div",
              elClasses: [
                "fc-timegrid-slot-label-cushion",
                "fc-scrollgrid-shrink-cushion",
              ],
            })
          )
      );
    });
  }
  function ll(e) {
    return e.text;
  }
  class cl extends In {
    render() {
      return this.props.slatMetas.map((e) =>
        f("tr", { key: e.key }, f(al, Object.assign({}, e)))
      );
    }
  }
  const dl = gn({ week: "short" });
  class ul extends Vi {
    constructor() {
      super(...arguments),
        (this.allDaySplitter = new sl()),
        (this.headerElRef = { current: null }),
        (this.rootElRef = { current: null }),
        (this.scrollerElRef = { current: null }),
        (this.state = { slatCoords: null }),
        (this.handleScrollTopRequest = (e) => {
          let t = this.scrollerElRef.current;
          t && (t.scrollTop = e);
        }),
        (this.renderHeadAxis = (e, t = "") => {
          let { options: n } = this.context,
            { dateProfile: r } = this.props,
            i = r.renderRange,
            s =
              1 === Et(i.start, i.end) ? ki(this.context, i.start, "week") : {};
          return n.weekNumbers && "day" === e
            ? f(
                $s,
                {
                  elTag: "th",
                  elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                  elAttrs: { "aria-hidden": !0 },
                  date: i.start,
                  defaultFormat: dl,
                },
                (e) =>
                  f(
                    "div",
                    {
                      className: [
                        "fc-timegrid-axis-frame",
                        "fc-scrollgrid-shrink-frame",
                        "fc-timegrid-axis-frame-liquid",
                      ].join(" "),
                      style: { height: t },
                    },
                    f(e, {
                      elTag: "a",
                      elClasses: [
                        "fc-timegrid-axis-cushion",
                        "fc-scrollgrid-shrink-cushion",
                        "fc-scrollgrid-sync-inner",
                      ],
                      elAttrs: s,
                    })
                  )
              )
            : f(
                "th",
                { "aria-hidden": !0, className: "fc-timegrid-axis" },
                f("div", {
                  className: "fc-timegrid-axis-frame",
                  style: { height: t },
                })
              );
        }),
        (this.renderTableRowAxis = (e) => {
          let { options: t, viewApi: n } = this.context,
            r = { text: t.allDayText, view: n };
          return f(
            jn,
            {
              elTag: "td",
              elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
              elAttrs: { "aria-hidden": !0 },
              renderProps: r,
              generatorName: "allDayContent",
              generator: t.allDayContent || hl,
              classNameGenerator: t.allDayClassNames,
              didMount: t.allDayDidMount,
              willUnmount: t.allDayWillUnmount,
            },
            (t) =>
              f(
                "div",
                {
                  className: [
                    "fc-timegrid-axis-frame",
                    "fc-scrollgrid-shrink-frame",
                    null == e ? " fc-timegrid-axis-frame-liquid" : "",
                  ].join(" "),
                  style: { height: e },
                },
                f(t, {
                  elTag: "span",
                  elClasses: [
                    "fc-timegrid-axis-cushion",
                    "fc-scrollgrid-shrink-cushion",
                    "fc-scrollgrid-sync-inner",
                  ],
                })
              )
          );
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e });
        });
    }
    renderSimpleLayout(e, t, n) {
      let { context: r, props: i } = this,
        s = [],
        o = js(r.options);
      return (
        e &&
          s.push({
            type: "header",
            key: "header",
            isSticky: o,
            chunk: {
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          }),
        t &&
          (s.push({ type: "body", key: "all-day", chunk: { content: t } }),
          s.push({
            type: "body",
            key: "all-day-divider",
            outerContent: f(
              "tr",
              { role: "presentation", className: "fc-scrollgrid-section" },
              f("td", {
                className:
                  "fc-timegrid-divider " + r.theme.getClass("tableCellShaded"),
              })
            ),
          })),
        s.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(r.options.expandRows),
          chunk: { scrollerElRef: this.scrollerElRef, content: n },
        }),
        f(
          Un,
          {
            elRef: this.rootElRef,
            elClasses: ["fc-timegrid"],
            viewSpec: r.viewSpec,
          },
          f(Us, {
            liquid: !i.isHeightAuto && !i.forPrint,
            collapsibleWidth: i.forPrint,
            cols: [{ width: "shrink" }],
            sections: s,
          })
        )
      );
    }
    renderHScrollLayout(e, t, n, r, i, s, o) {
      let a = this.context.pluginHooks.scrollGridImpl;
      if (!a) throw new Error("No ScrollGrid implementation");
      let { context: l, props: c } = this,
        d = !c.forPrint && js(l.options),
        u = !c.forPrint && zs(l.options),
        h = [];
      e &&
        h.push({
          type: "header",
          key: "header",
          isSticky: d,
          syncRowHeights: !0,
          chunks: [
            {
              key: "axis",
              rowContent: (e) =>
                f(
                  "tr",
                  { role: "presentation" },
                  this.renderHeadAxis("day", e.rowSyncHeights[0])
                ),
            },
            {
              key: "cols",
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          ],
        }),
        t &&
          (h.push({
            type: "body",
            key: "all-day",
            syncRowHeights: !0,
            chunks: [
              {
                key: "axis",
                rowContent: (e) =>
                  f(
                    "tr",
                    { role: "presentation" },
                    this.renderTableRowAxis(e.rowSyncHeights[0])
                  ),
              },
              { key: "cols", content: t },
            ],
          }),
          h.push({
            key: "all-day-divider",
            type: "body",
            outerContent: f(
              "tr",
              { role: "presentation", className: "fc-scrollgrid-section" },
              f("td", {
                colSpan: 2,
                className:
                  "fc-timegrid-divider " + l.theme.getClass("tableCellShaded"),
              })
            ),
          }));
      let g = l.options.nowIndicator;
      return (
        h.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(l.options.expandRows),
          chunks: [
            {
              key: "axis",
              content: (e) =>
                f(
                  "div",
                  { className: "fc-timegrid-axis-chunk" },
                  f(
                    "table",
                    {
                      "aria-hidden": !0,
                      style: { height: e.expandRows ? e.clientHeight : "" },
                    },
                    e.tableColGroupNode,
                    f("tbody", null, f(cl, { slatMetas: s }))
                  ),
                  f(
                    "div",
                    { className: "fc-timegrid-now-indicator-container" },
                    f(ls, { unit: g ? "minute" : "day" }, (e) => {
                      let t = g && o && o.safeComputeTop(e);
                      return "number" == typeof t
                        ? f(Vs, {
                            elClasses: ["fc-timegrid-now-indicator-arrow"],
                            elStyle: { top: t },
                            isAxis: !0,
                            date: e,
                          })
                        : null;
                    })
                  )
                ),
            },
            { key: "cols", scrollerElRef: this.scrollerElRef, content: n },
          ],
        }),
        u &&
          h.push({
            key: "footer",
            type: "footer",
            isSticky: !0,
            chunks: [
              { key: "axis", content: Bs },
              { key: "cols", content: Bs },
            ],
          }),
        f(
          Un,
          {
            elRef: this.rootElRef,
            elClasses: ["fc-timegrid"],
            viewSpec: l.viewSpec,
          },
          f(a, {
            liquid: !c.isHeightAuto && !c.forPrint,
            collapsibleWidth: !1,
            colGroups: [
              { width: "shrink", cols: [{ width: "shrink" }] },
              { cols: [{ span: r, minWidth: i }] },
            ],
            sections: h,
          })
        )
      );
    }
    getAllDayMaxEventProps() {
      let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options;
      return (
        (!0 !== e && !0 !== t) || ((e = void 0), (t = 5)),
        { dayMaxEvents: e, dayMaxEventRows: t }
      );
    }
  }
  function hl(e) {
    return e.text;
  }
  class fl {
    constructor(e, t, n) {
      (this.positions = e), (this.dateProfile = t), (this.slotDuration = n);
    }
    safeComputeTop(e) {
      let { dateProfile: t } = this;
      if (Yn(t.currentRange, e)) {
        let n = wt(e),
          r = e.valueOf() - n.valueOf();
        if (r >= Ft(t.slotMinTime) && r < Ft(t.slotMaxTime))
          return this.computeTimeTop(jt(r));
      }
      return null;
    }
    computeDateTop(e, t) {
      return (
        t || (t = wt(e)), this.computeTimeTop(jt(e.valueOf() - t.valueOf()))
      );
    }
    computeTimeTop(e) {
      let t,
        n,
        { positions: r, dateProfile: i } = this,
        s = r.els.length,
        o = (e.milliseconds - Ft(i.slotMinTime)) / Ft(this.slotDuration);
      return (
        (o = Math.max(0, o)),
        (o = Math.min(s, o)),
        (t = Math.floor(o)),
        (t = Math.min(t, s - 1)),
        (n = o - t),
        r.tops[t] + r.getHeight(t) * n
      );
    }
  }
  class gl extends In {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { slatElRefs: r } = e;
      return f(
        "tbody",
        null,
        e.slatMetas.map((i, s) => {
          let o = {
            time: i.time,
            date: t.dateEnv.toDate(i.date),
            view: t.viewApi,
          };
          return f(
            "tr",
            { key: i.key, ref: r.createRef(i.key) },
            e.axis && f(al, Object.assign({}, i)),
            f(jn, {
              elTag: "td",
              elClasses: [
                "fc-timegrid-slot",
                "fc-timegrid-slot-lane",
                !i.isLabeled && "fc-timegrid-slot-minor",
              ],
              elAttrs: { "data-time": i.isoTimeStr },
              renderProps: o,
              generatorName: "slotLaneContent",
              generator: n.slotLaneContent,
              classNameGenerator: n.slotLaneClassNames,
              didMount: n.slotLaneDidMount,
              willUnmount: n.slotLaneWillUnmount,
            })
          );
        })
      );
    }
  }
  class pl extends In {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.slatElRefs = new Rs());
    }
    render() {
      let { props: e, context: t } = this;
      return f(
        "div",
        { ref: this.rootElRef, className: "fc-timegrid-slots" },
        f(
          "table",
          {
            "aria-hidden": !0,
            className: t.theme.getClass("table"),
            style: {
              minWidth: e.tableMinWidth,
              width: e.clientWidth,
              height: e.minHeight,
            },
          },
          e.tableColGroupNode,
          f(gl, {
            slatElRefs: this.slatElRefs,
            axis: e.axis,
            slatMetas: e.slatMetas,
          })
        )
      );
    }
    componentDidMount() {
      this.updateSizing();
    }
    componentDidUpdate() {
      this.updateSizing();
    }
    componentWillUnmount() {
      this.props.onCoords && this.props.onCoords(null);
    }
    updateSizing() {
      let { context: e, props: t } = this;
      if (t.onCoords && null !== t.clientWidth) {
        this.rootElRef.current.offsetHeight &&
          t.onCoords(
            new fl(
              new Ui(
                this.rootElRef.current,
                ((n = this.slatElRefs.currentMap),
                t.slatMetas.map((e) => n[e.key])),
                !1,
                !0
              ),
              this.props.dateProfile,
              e.options.slotDuration
            )
          );
      }
      var n;
    }
  }
  function ml(e, t) {
    let n,
      r = [];
    for (n = 0; n < t; n += 1) r.push([]);
    if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
    return r;
  }
  function vl(e, t) {
    let n = [];
    if (e) {
      for (let r = 0; r < t; r += 1)
        n[r] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: [],
        };
      for (let t of e.segs) n[t.col].segs.push(t);
    } else for (let e = 0; e < t; e += 1) n[e] = null;
    return n;
  }
  class bl extends In {
    render() {
      let { props: e } = this;
      return f(
        no,
        {
          elClasses: ["fc-timegrid-more-link"],
          elStyle: { top: e.top, bottom: e.bottom },
          allDayDate: null,
          moreCnt: e.hiddenSegs.length,
          allSegs: e.hiddenSegs,
          hiddenSegs: e.hiddenSegs,
          extraDateSpan: e.extraDateSpan,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          popoverContent: () => Tl(e.hiddenSegs, e),
          defaultGenerator: yl,
        },
        (e) =>
          f(e, {
            elTag: "div",
            elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"],
          })
      );
    }
  }
  function yl(e) {
    return e.shortText;
  }
  function El(e, t, n) {
    let r = new Gi();
    null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);
    let i = Yi(r.addSegs(e)),
      s = (function (e) {
        const { entriesByLevel: t } = e,
          n = wl(
            (e, t) => e + ":" + t,
            (r, i) => {
              let s = Al(
                  (function (e, t, n) {
                    let { levelCoords: r, entriesByLevel: i } = e,
                      s = i[t][n],
                      o = r[t] + s.thickness,
                      a = r.length,
                      l = t;
                    for (; l < a && r[l] < o; l += 1);
                    for (; l < a; l += 1) {
                      let e,
                        t = i[l],
                        n = Ji(t, s.span.start, Qi),
                        r = n[0] + n[1],
                        o = r;
                      for (; (e = t[o]) && e.span.start < s.span.end; ) o += 1;
                      if (r < o)
                        return { level: l, lateralStart: r, lateralEnd: o };
                    }
                    return null;
                  })(e, r, i),
                  n
                ),
                o = t[r][i];
              return [
                Object.assign(Object.assign({}, o), { nextLevelNodes: s[0] }),
                o.thickness + s[1],
              ];
            }
          );
        return Al(
          t.length
            ? { level: 0, lateralStart: 0, lateralEnd: t[0].length }
            : null,
          n
        )[0];
      })(r);
    return (
      (s = (function (e, t) {
        const n = wl(
          (e, t, n) => qi(e),
          (e, r, i) => {
            let s,
              { nextLevelNodes: o, thickness: a } = e,
              l = a + i,
              c = a / l,
              d = [];
            if (o.length)
              for (let e of o)
                if (void 0 === s) {
                  let t = n(e, r, l);
                  (s = t[0]), d.push(t[1]);
                } else {
                  let t = n(e, s, 0);
                  d.push(t[1]);
                }
            else s = t;
            let u = (s - r) * c;
            return [
              s - u,
              Object.assign(Object.assign({}, e), {
                thickness: u,
                nextLevelNodes: d,
              }),
            ];
          }
        );
        return e.map((e) => n(e, 0, 0)[1]);
      })(s, 1)),
      {
        segRects: (function (e) {
          let t = [];
          const n = wl(
            (e, t, n) => qi(e),
            (e, n, i) => {
              let s = Object.assign(Object.assign({}, e), {
                levelCoord: n,
                stackDepth: i,
                stackForward: 0,
              });
              return (
                t.push(s),
                (s.stackForward =
                  r(e.nextLevelNodes, n + e.thickness, i + 1) + 1)
              );
            }
          );
          function r(e, t, r) {
            let i = 0;
            for (let s of e) i = Math.max(n(s, t, r), i);
            return i;
          }
          return r(e, 0, 0), t;
        })(s),
        hiddenGroups: i,
      }
    );
  }
  function Al(e, t) {
    if (!e) return [[], 0];
    let { level: n, lateralStart: r, lateralEnd: i } = e,
      s = r,
      o = [];
    for (; s < i; ) o.push(t(n, s)), (s += 1);
    return o.sort(Dl), [o.map(Sl), o[0][1]];
  }
  function Dl(e, t) {
    return t[1] - e[1];
  }
  function Sl(e) {
    return e[0];
  }
  function wl(e, t) {
    const n = {};
    return (...r) => {
      let i = e(...r);
      return i in n ? n[i] : (n[i] = t(...r));
    };
  }
  function Cl(e, t, n = null, r = 0) {
    let i = [];
    if (n)
      for (let s = 0; s < e.length; s += 1) {
        let o = e[s],
          a = n.computeDateTop(o.start, t),
          l = Math.max(a + (r || 0), n.computeDateTop(o.end, t));
        i.push({ start: Math.round(a), end: Math.round(l) });
      }
    return i;
  }
  const Rl = gn({ hour: "numeric", minute: "2-digit", meridiem: !1 });
  class xl extends In {
    render() {
      return f(
        Ws,
        Object.assign({}, this.props, {
          elClasses: [
            "fc-timegrid-event",
            "fc-v-event",
            this.props.isShort && "fc-timegrid-event-short",
          ],
          defaultTimeFormat: Rl,
        })
      );
    }
  }
  class _l extends In {
    constructor() {
      super(...arguments), (this.sortEventSegs = Oe(qr));
    }
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = n.selectMirror,
        i =
          (e.eventDrag && e.eventDrag.segs) ||
          (e.eventResize && e.eventResize.segs) ||
          (r && e.dateSelectionSegs) ||
          [],
        s =
          (e.eventDrag && e.eventDrag.affectedInstances) ||
          (e.eventResize && e.eventResize.affectedInstances) ||
          {},
        o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
      return f(
        Qs,
        {
          elTag: "td",
          elRef: e.elRef,
          elClasses: ["fc-timegrid-col", ...(e.extraClassNames || [])],
          elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs),
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraRenderProps: e.extraRenderProps,
        },
        (t) =>
          f(
            "div",
            { className: "fc-timegrid-col-frame" },
            f(
              "div",
              { className: "fc-timegrid-col-bg" },
              this.renderFillSegs(e.businessHourSegs, "non-business"),
              this.renderFillSegs(e.bgEventSegs, "bg-event"),
              this.renderFillSegs(e.dateSelectionSegs, "highlight")
            ),
            f(
              "div",
              { className: "fc-timegrid-col-events" },
              this.renderFgSegs(o, s, !1, !1, !1)
            ),
            f(
              "div",
              { className: "fc-timegrid-col-events" },
              this.renderFgSegs(
                i,
                {},
                Boolean(e.eventDrag),
                Boolean(e.eventResize),
                Boolean(r)
              )
            ),
            f(
              "div",
              { className: "fc-timegrid-now-indicator-container" },
              this.renderNowIndicator(e.nowIndicatorSegs)
            ),
            qs(n) && f(t, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
          )
      );
    }
    renderFgSegs(e, t, n, r, i) {
      let { props: s } = this;
      return s.forPrint ? Tl(e, s) : this.renderPositionedFgSegs(e, t, n, r, i);
    }
    renderPositionedFgSegs(e, t, n, r, i) {
      let {
          eventMaxStack: s,
          eventShortHeight: o,
          eventOrderStrict: a,
          eventMinHeight: l,
        } = this.context.options,
        {
          date: c,
          slatCoords: d,
          eventSelection: u,
          todayRange: h,
          nowDate: g,
        } = this.props,
        m = n || r || i,
        v = Cl(e, c, d, l),
        { segPlacements: b, hiddenGroups: y } = (function (e, t, n, r) {
          let i = [],
            s = [];
          for (let n = 0; n < e.length; n += 1) {
            let r = t[n];
            r ? i.push({ index: n, thickness: 1, span: r }) : s.push(e[n]);
          }
          let { segRects: o, hiddenGroups: a } = El(i, n, r),
            l = [];
          for (let t of o) l.push({ seg: e[t.index], rect: t });
          for (let e of s) l.push({ seg: e, rect: null });
          return { segPlacements: l, hiddenGroups: a };
        })(e, v, a, s);
      return f(
        p,
        null,
        this.renderHiddenGroups(y, e),
        b.map((e) => {
          let { seg: s, rect: a } = e,
            l = s.eventRange.instance.instanceId,
            c = m || Boolean(!t[l] && a),
            d = kl(a && a.span),
            p = !m && a ? this.computeSegHStyle(a) : { left: 0, right: 0 },
            v = Boolean(a) && a.stackForward > 0,
            b = Boolean(a) && a.span.end - a.span.start < o;
          return f(
            "div",
            {
              className:
                "fc-timegrid-event-harness" +
                (v ? " fc-timegrid-event-harness-inset" : ""),
              key: l,
              style: Object.assign(
                Object.assign({ visibility: c ? "" : "hidden" }, d),
                p
              ),
            },
            f(
              xl,
              Object.assign(
                {
                  seg: s,
                  isDragging: n,
                  isResizing: r,
                  isDateSelecting: i,
                  isSelected: l === u,
                  isShort: b,
                },
                Kr(s, h, g)
              )
            )
          );
        })
      );
    }
    renderHiddenGroups(e, t) {
      let {
        extraDateSpan: n,
        dateProfile: r,
        todayRange: i,
        nowDate: s,
        eventSelection: o,
        eventDrag: a,
        eventResize: l,
      } = this.props;
      return f(
        p,
        null,
        e.map((e) => {
          let c = kl(e.span),
            d = ((u = e.entries), (h = t), u.map((e) => h[e.index]));
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
            eventResize: l,
          });
        })
      );
    }
    renderFillSegs(e, t) {
      let { props: n, context: r } = this,
        i = Cl(e, n.date, n.slatCoords, r.options.eventMinHeight).map(
          (r, i) => {
            let s = e[i];
            return f(
              "div",
              {
                key: ti(s.eventRange),
                className: "fc-timegrid-bg-harness",
                style: kl(r),
              },
              "bg-event" === t
                ? f(
                    Zs,
                    Object.assign({ seg: s }, Kr(s, n.todayRange, n.nowDate))
                  )
                : Js(t)
            );
          }
        );
      return f(p, null, i);
    }
    renderNowIndicator(e) {
      let { slatCoords: t, date: n } = this.props;
      return t
        ? e.map((e, r) =>
            f(Vs, {
              key: r,
              elClasses: ["fc-timegrid-now-indicator-line"],
              elStyle: { top: t.computeDateTop(e.start, n) },
              isAxis: !1,
              date: n,
            })
          )
        : null;
    }
    computeSegHStyle(e) {
      let t,
        n,
        { isRtl: r, options: i } = this.context,
        s = i.slotEventOverlap,
        o = e.levelCoord,
        a = e.levelCoord + e.thickness;
      s && (a = Math.min(1, o + 2 * (a - o))),
        r ? ((t = 1 - a), (n = o)) : ((t = o), (n = 1 - a));
      let l = {
        zIndex: e.stackDepth + 1,
        left: 100 * t + "%",
        right: 100 * n + "%",
      };
      return (
        s && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20), l
      );
    }
  }
  function Tl(
    e,
    {
      todayRange: t,
      nowDate: n,
      eventSelection: r,
      eventDrag: i,
      eventResize: s,
    }
  ) {
    let o =
      (i ? i.affectedInstances : null) ||
      (s ? s.affectedInstances : null) ||
      {};
    return f(
      p,
      null,
      e.map((e) => {
        let i = e.eventRange.instance.instanceId;
        return f(
          "div",
          { key: i, style: { visibility: o[i] ? "hidden" : "" } },
          f(
            xl,
            Object.assign(
              {
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: i === r,
                isShort: !1,
              },
              Kr(e, t, n)
            )
          )
        );
      })
    );
  }
  function kl(e) {
    return e ? { top: e.start, bottom: -e.end } : { top: "", bottom: "" };
  }
  class Ml extends In {
    constructor() {
      super(...arguments),
        (this.splitFgEventSegs = Oe(ml)),
        (this.splitBgEventSegs = Oe(ml)),
        (this.splitBusinessHourSegs = Oe(ml)),
        (this.splitNowIndicatorSegs = Oe(ml)),
        (this.splitDateSelectionSegs = Oe(ml)),
        (this.splitEventDrag = Oe(vl)),
        (this.splitEventResize = Oe(vl)),
        (this.rootElRef = { current: null }),
        (this.cellElRefs = new Rs());
    }
    render() {
      let { props: e, context: t } = this,
        n =
          t.options.nowIndicator &&
          e.slatCoords &&
          e.slatCoords.safeComputeTop(e.nowDate),
        r = e.cells.length,
        i = this.splitFgEventSegs(e.fgEventSegs, r),
        s = this.splitBgEventSegs(e.bgEventSegs, r),
        o = this.splitBusinessHourSegs(e.businessHourSegs, r),
        a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r),
        l = this.splitDateSelectionSegs(e.dateSelectionSegs, r),
        c = this.splitEventDrag(e.eventDrag, r),
        d = this.splitEventResize(e.eventResize, r);
      return f(
        "div",
        { className: "fc-timegrid-cols", ref: this.rootElRef },
        f(
          "table",
          {
            role: "presentation",
            style: { minWidth: e.tableMinWidth, width: e.clientWidth },
          },
          e.tableColGroupNode,
          f(
            "tbody",
            { role: "presentation" },
            f(
              "tr",
              { role: "row" },
              e.axis &&
                f(
                  "td",
                  {
                    "aria-hidden": !0,
                    className: "fc-timegrid-col fc-timegrid-axis",
                  },
                  f(
                    "div",
                    { className: "fc-timegrid-col-frame" },
                    f(
                      "div",
                      { className: "fc-timegrid-now-indicator-container" },
                      "number" == typeof n &&
                        f(Vs, {
                          elClasses: ["fc-timegrid-now-indicator-arrow"],
                          elStyle: { top: n },
                          isAxis: !0,
                          date: e.nowDate,
                        })
                    )
                  )
                ),
              e.cells.map((t, n) =>
                f(_l, {
                  key: t.key,
                  elRef: this.cellElRefs.createRef(t.key),
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
                  forPrint: e.forPrint,
                })
              )
            )
          )
        )
      );
    }
    componentDidMount() {
      this.updateCoords();
    }
    componentDidUpdate() {
      this.updateCoords();
    }
    updateCoords() {
      let { props: e } = this;
      var t;
      e.onColCoords &&
        null !== e.clientWidth &&
        e.onColCoords(
          new Ui(
            this.rootElRef.current,
            ((t = this.cellElRefs.currentMap), e.cells.map((e) => t[e.key])),
            !0,
            !1
          )
        );
    }
  }
  class Il extends Vi {
    constructor() {
      super(...arguments),
        (this.processSlotOptions = Oe(Ol)),
        (this.state = { slatCoords: null }),
        (this.handleRootEl = (e) => {
          e
            ? this.context.registerInteractiveComponent(this, {
                el: e,
                isHitComboAllowed: this.props.isHitComboAllowed,
              })
            : this.context.unregisterInteractiveComponent(this);
        }),
        (this.handleScrollRequest = (e) => {
          let { onScrollTopRequest: t } = this.props,
            { slatCoords: n } = this.state;
          if (t && n) {
            if (e.time) {
              let r = n.computeTimeTop(e.time);
              (r = Math.ceil(r)), r && (r += 1), t(r);
            }
            return !0;
          }
          return !1;
        }),
        (this.handleColCoords = (e) => {
          this.colCoords = e;
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e }),
            this.props.onSlatCoords && this.props.onSlatCoords(e);
        });
    }
    render() {
      let { props: e, state: t } = this;
      return f(
        "div",
        {
          className: "fc-timegrid-body",
          ref: this.handleRootEl,
          style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        },
        f(pl, {
          axis: e.axis,
          dateProfile: e.dateProfile,
          slatMetas: e.slatMetas,
          clientWidth: e.clientWidth,
          minHeight: e.expandRows ? e.clientHeight : "",
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.axis ? e.tableColGroupNode : null,
          onCoords: this.handleSlatCoords,
        }),
        f(Ml, {
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
          forPrint: e.forPrint,
        })
      );
    }
    componentDidMount() {
      this.scrollResponder = this.context.createScrollResponder(
        this.handleScrollRequest
      );
    }
    componentDidUpdate(e) {
      this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
      this.scrollResponder.detach();
    }
    queryHit(e, t) {
      let { dateEnv: n, options: r } = this.context,
        { colCoords: i } = this,
        { dateProfile: s } = this.props,
        { slatCoords: o } = this.state,
        { snapDuration: a, snapsPerSlot: l } = this.processSlotOptions(
          this.props.slotDuration,
          r.snapDuration
        ),
        c = i.leftToIndex(e),
        d = o.positions.topToIndex(t);
      if (null != c && null != d) {
        let e = this.props.cells[c],
          r = o.positions.tops[d],
          u = o.positions.getHeight(d),
          h = (t - r) / u,
          f = d * l + Math.floor(h * l),
          g = this.props.cells[c].date,
          p = Ut(s.slotMinTime, Lt(a, f)),
          m = n.add(g, p),
          v = n.add(m, a);
        return {
          dateProfile: s,
          dateSpan: Object.assign(
            { range: { start: m, end: v }, allDay: !1 },
            e.extraDateSpan
          ),
          dayEl: i.els[c],
          rect: { left: i.lefts[c], right: i.rights[c], top: r, bottom: r + u },
          layer: 0,
        };
      }
      return null;
    }
  }
  function Ol(e, t) {
    let n = t || e,
      r = Vt(e, n);
    return (
      null === r && ((n = e), (r = 1)), { snapDuration: n, snapsPerSlot: r }
    );
  }
  class Nl extends gs {
    sliceRange(e, t) {
      let n = [];
      for (let r = 0; r < t.length; r += 1) {
        let i = Vn(e, t[r]);
        i &&
          n.push({
            start: i.start,
            end: i.end,
            isStart: i.start.valueOf() === e.start.valueOf(),
            isEnd: i.end.valueOf() === e.end.valueOf(),
            col: r,
          });
      }
      return n;
    }
  }
  class Pl extends Vi {
    constructor() {
      super(...arguments),
        (this.buildDayRanges = Oe(Hl)),
        (this.slicer = new Nl()),
        (this.timeColsRef = { current: null });
    }
    render() {
      let { props: e, context: t } = this,
        { dateProfile: n, dayTableModel: r } = e,
        i = t.options.nowIndicator,
        s = this.buildDayRanges(r, n, t.dateEnv);
      return f(ls, { unit: i ? "minute" : "day" }, (o, a) =>
        f(
          Il,
          Object.assign(
            { ref: this.timeColsRef },
            this.slicer.sliceProps(e, n, null, t, s),
            {
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
              nowIndicatorSegs: i && this.slicer.sliceNowDate(o, t, s),
              todayRange: a,
              onScrollTopRequest: e.onScrollTopRequest,
              onSlatCoords: e.onSlatCoords,
            }
          )
        )
      );
    }
  }
  function Hl(e, t, n) {
    let r = [];
    for (let i of e.headerDates)
      r.push({ start: n.add(i, t.slotMinTime), end: n.add(i, t.slotMaxTime) });
    return r;
  }
  const Bl = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
  ];
  function jl(e, t, n, r, i) {
    let s = new Date(0),
      o = e,
      a = jt(0),
      l =
        n ||
        (function (e) {
          let t, n, r;
          for (t = Bl.length - 1; t >= 0; t -= 1)
            if (((n = jt(Bl[t])), (r = Vt(n, e)), null !== r && r > 1))
              return n;
          return e;
        })(r),
      c = [];
    for (; Ft(o) < Ft(t); ) {
      let e = i.add(s, o),
        t = null !== Vt(a, l);
      c.push({
        date: e,
        time: o,
        key: e.toISOString(),
        isoTimeStr: Yt(e),
        isLabeled: t,
      }),
        (o = Ut(o, r)),
        (a = Ut(a, r));
    }
    return c;
  }
  function zl(e, t) {
    let n = new hs(e.renderRange, t);
    return new fs(n, !1);
  }
  const Ul = { allDaySlot: Boolean };
  ye(
    '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}'
  );
  var Ll = mo({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: Ul,
    views: {
      timeGrid: {
        component: class extends ul {
          constructor() {
            super(...arguments),
              (this.buildTimeColsModel = Oe(zl)),
              (this.buildSlatMetas = Oe(jl));
          }
          render() {
            let {
                options: e,
                dateEnv: t,
                dateProfileGenerator: n,
              } = this.context,
              { props: r } = this,
              { dateProfile: i } = r,
              s = this.buildTimeColsModel(i, n),
              o = this.allDaySplitter.splitProps(r),
              a = this.buildSlatMetas(
                i.slotMinTime,
                i.slotMaxTime,
                e.slotLabelInterval,
                e.slotDuration,
                t
              ),
              { dayMinWidth: l } = e,
              c = !l,
              d = l,
              u =
                e.dayHeaders &&
                f(ds, {
                  dates: s.headerDates,
                  dateProfile: i,
                  datesRepDistinctDays: !0,
                  renderIntro: c ? this.renderHeadAxis : null,
                }),
              h =
                !1 !== e.allDaySlot &&
                ((t) =>
                  f(
                    nl,
                    Object.assign(
                      {},
                      o.allDay,
                      {
                        dateProfile: i,
                        dayTableModel: s,
                        nextDayThreshold: e.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: c ? this.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: this.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: r.forPrint,
                      },
                      this.getAllDayMaxEventProps()
                    )
                  )),
              g = (t) =>
                f(
                  Pl,
                  Object.assign({}, o.timed, {
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
                    onSlatCoords: this.handleSlatCoords,
                    expandRows: t.expandRows,
                    onScrollTopRequest: this.handleScrollTopRequest,
                  })
                );
            return d
              ? this.renderHScrollLayout(
                  u,
                  h,
                  g,
                  s.colCnt,
                  l,
                  a,
                  this.state.slatCoords
                )
              : this.renderSimpleLayout(u, h, g);
          }
        },
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: "00:30:00",
        slotEventOverlap: !0,
      },
      timeGridDay: { type: "timeGrid", duration: { days: 1 } },
      timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
    },
  });
  class Wl extends In {
    constructor() {
      super(...arguments), (this.state = { textId: Ge() });
    }
    render() {
      let { theme: e, dateEnv: t, options: n, viewApi: r } = this.context,
        { cellId: i, dayDate: s, todayRange: o } = this.props,
        { textId: a } = this.state,
        l = Ri(s, o),
        c = n.listDayFormat ? t.format(s, n.listDayFormat) : "",
        d = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : "",
        u = Object.assign(
          {
            date: t.toDate(s),
            view: r,
            textId: a,
            text: c,
            sideText: d,
            navLinkAttrs: ki(this.context, s),
            sideNavLinkAttrs: ki(this.context, s, "day", !1),
          },
          l
        );
      return f(
        jn,
        {
          elTag: "tr",
          elClasses: ["fc-list-day", ...xi(l, e)],
          elAttrs: { "data-date": qt(s) },
          renderProps: u,
          generatorName: "dayHeaderContent",
          generator: n.dayHeaderContent || Fl,
          classNameGenerator: n.dayHeaderClassNames,
          didMount: n.dayHeaderDidMount,
          willUnmount: n.dayHeaderWillUnmount,
        },
        (t) =>
          f(
            "th",
            { scope: "colgroup", colSpan: 3, id: i, "aria-labelledby": a },
            f(t, {
              elTag: "div",
              elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")],
            })
          )
      );
    }
  }
  function Fl(e) {
    return f(
      p,
      null,
      e.text &&
        f(
          "a",
          Object.assign(
            { id: e.textId, className: "fc-list-day-text" },
            e.navLinkAttrs
          ),
          e.text
        ),
      e.sideText &&
        f(
          "a",
          Object.assign(
            { "aria-hidden": !0, className: "fc-list-day-side-text" },
            e.sideNavLinkAttrs
          ),
          e.sideText
        )
    );
  }
  const Vl = gn({ hour: "numeric", minute: "2-digit", meridiem: "short" });
  class Gl extends In {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r, timeHeaderId: i, eventHeaderId: s, dateHeaderId: o } = e,
        a = n.eventTimeFormat || Vl;
      return f(
        Ls,
        Object.assign({}, e, {
          elTag: "tr",
          elClasses: [
            "fc-list-event",
            r.eventRange.def.url && "fc-event-forced-url",
          ],
          defaultGenerator: () =>
            (function (e, t) {
              let n = ni(e, t);
              return f("a", Object.assign({}, n), e.eventRange.def.title);
            })(r, t),
          seg: r,
          timeText: "",
          disableDragging: !0,
          disableResizing: !0,
        }),
        (e, n) =>
          f(
            p,
            null,
            (function (e, t, n, r, i) {
              let { options: s } = n;
              if (!1 !== s.displayEventTime) {
                let o,
                  a = e.eventRange.def,
                  l = e.eventRange.instance,
                  c = !1;
                if (
                  (a.allDay
                    ? (c = !0)
                    : Jn(e.eventRange.range)
                    ? e.isStart
                      ? (o = $r(e, t, n, null, null, l.range.start, e.end))
                      : e.isEnd
                      ? (o = $r(e, t, n, null, null, e.start, l.range.end))
                      : (c = !0)
                    : (o = $r(e, t, n)),
                  c)
                ) {
                  let e = { text: n.options.allDayText, view: n.viewApi };
                  return f(jn, {
                    elTag: "td",
                    elClasses: ["fc-list-event-time"],
                    elAttrs: { headers: `${r} ${i}` },
                    renderProps: e,
                    generatorName: "allDayContent",
                    generator: s.allDayContent || Ql,
                    classNameGenerator: s.allDayClassNames,
                    didMount: s.allDayDidMount,
                    willUnmount: s.allDayWillUnmount,
                  });
                }
                return f("td", { className: "fc-list-event-time" }, o);
              }
              return null;
            })(r, a, t, i, o),
            f(
              "td",
              { "aria-hidden": !0, className: "fc-list-event-graphic" },
              f("span", {
                className: "fc-list-event-dot",
                style: { borderColor: n.borderColor || n.backgroundColor },
              })
            ),
            f(e, {
              elTag: "td",
              elClasses: ["fc-list-event-title"],
              elAttrs: { headers: `${s} ${o}` },
            })
          )
      );
    }
  }
  function Ql(e) {
    return e.text;
  }
  function ql(e) {
    return e.text;
  }
  function Yl(e) {
    let t = wt(e.renderRange.start),
      n = e.renderRange.end,
      r = [],
      i = [];
    for (; t < n; )
      r.push(t), i.push({ start: t, end: vt(t, 1) }), (t = vt(t, 1));
    return { dayDates: r, dayRanges: i };
  }
  const Zl = {
    listDayFormat: Xl,
    listDaySideFormat: Xl,
    noEventsClassNames: wn,
    noEventsContent: wn,
    noEventsDidMount: wn,
    noEventsWillUnmount: wn,
  };
  function Xl(e) {
    return !1 === e ? null : gn(e);
  }
  ye(
    ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}'
  );
  var Jl = mo({
    name: "@fullcalendar/list",
    optionRefiners: Zl,
    views: {
      list: {
        component: class extends Vi {
          constructor() {
            super(...arguments),
              (this.computeDateVars = Oe(Yl)),
              (this.eventStoreToSegs = Oe(this._eventStoreToSegs)),
              (this.state = {
                timeHeaderId: Ge(),
                eventHeaderId: Ge(),
                dateHeaderIdRoot: Ge(),
              }),
              (this.setRootEl = (e) => {
                e
                  ? this.context.registerInteractiveComponent(this, { el: e })
                  : this.context.unregisterInteractiveComponent(this);
              });
          }
          render() {
            let { props: e, context: t } = this,
              { dayDates: n, dayRanges: r } = this.computeDateVars(
                e.dateProfile
              ),
              i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
            return f(
              Un,
              {
                elRef: this.setRootEl,
                elClasses: [
                  "fc-list",
                  t.theme.getClass("table"),
                  !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : "",
                ],
                viewSpec: t.viewSpec,
              },
              f(
                Cs,
                {
                  liquid: !e.isHeightAuto,
                  overflowX: e.isHeightAuto ? "visible" : "hidden",
                  overflowY: e.isHeightAuto ? "visible" : "auto",
                },
                i.length > 0
                  ? this.renderSegList(i, n)
                  : this.renderEmptyMessage()
              )
            );
          }
          renderEmptyMessage() {
            let { options: e, viewApi: t } = this.context,
              n = { text: e.noEventsText, view: t };
            return f(
              jn,
              {
                elTag: "div",
                elClasses: ["fc-list-empty"],
                renderProps: n,
                generatorName: "noEventsContent",
                generator: e.noEventsContent || ql,
                classNameGenerator: e.noEventsClassNames,
                didMount: e.noEventsDidMount,
                willUnmount: e.noEventsWillUnmount,
              },
              (e) =>
                f(e, { elTag: "div", elClasses: ["fc-list-empty-cushion"] })
            );
          }
          renderSegList(e, t) {
            let { theme: n, options: r } = this.context,
              {
                timeHeaderId: i,
                eventHeaderId: s,
                dateHeaderIdRoot: o,
              } = this.state,
              a = (function (e) {
                let t,
                  n,
                  r = [];
                for (t = 0; t < e.length; t += 1)
                  (n = e[t]), (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r;
              })(e);
            return f(ls, { unit: "day" }, (e, l) => {
              let c = [];
              for (let n = 0; n < a.length; n += 1) {
                let d = a[n];
                if (d) {
                  let a = qt(t[n]),
                    u = o + "-" + a;
                  c.push(
                    f(Wl, { key: a, cellId: u, dayDate: t[n], todayRange: l })
                  ),
                    (d = qr(d, r.eventOrder));
                  for (let t of d)
                    c.push(
                      f(
                        Gl,
                        Object.assign(
                          {
                            key: a + ":" + t.eventRange.instance.instanceId,
                            seg: t,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: !1,
                            timeHeaderId: i,
                            eventHeaderId: s,
                            dateHeaderId: u,
                          },
                          Kr(t, l, e)
                        )
                      )
                    );
                }
              }
              return f(
                "table",
                { className: "fc-list-table " + n.getClass("table") },
                f(
                  "thead",
                  null,
                  f(
                    "tr",
                    null,
                    f("th", { scope: "col", id: i }, r.timeHint),
                    f("th", { scope: "col", "aria-hidden": !0 }),
                    f("th", { scope: "col", id: s }, r.eventHint)
                  )
                ),
                f("tbody", null, c)
              );
            });
          }
          _eventStoreToSegs(e, t, n) {
            return this.eventRangesToSegs(
              Wr(
                e,
                t,
                this.props.dateProfile.activeRange,
                this.context.options.nextDayThreshold
              ).fg,
              n
            );
          }
          eventRangesToSegs(e, t) {
            let n = [];
            for (let r of e) n.push(...this.eventRangeToSegs(r, t));
            return n;
          }
          eventRangeToSegs(e, t) {
            let n,
              r,
              i,
              { dateEnv: s } = this.context,
              { nextDayThreshold: o } = this.context.options,
              a = e.range,
              l = e.def.allDay,
              c = [];
            for (n = 0; n < t.length; n += 1)
              if (
                ((r = Vn(a, t[n])),
                r &&
                  ((i = {
                    component: this,
                    eventRange: e,
                    start: r.start,
                    end: r.end,
                    isStart:
                      e.isStart && r.start.valueOf() === a.start.valueOf(),
                    isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                    dayIndex: n,
                  }),
                  c.push(i),
                  !i.isEnd &&
                    !l &&
                    n + 1 < t.length &&
                    a.end < s.add(t[n + 1].start, o)))
              ) {
                (i.end = a.end), (i.isEnd = !0);
                break;
              }
            return c;
          }
        },
        buttonTextKey: "list",
        listDayFormat: { month: "long", day: "numeric", year: "numeric" },
      },
      listDay: {
        type: "list",
        duration: { days: 1 },
        listDayFormat: { weekday: "long" },
      },
      listWeek: {
        type: "list",
        duration: { weeks: 1 },
        listDayFormat: { weekday: "long" },
        listDaySideFormat: { month: "long", day: "numeric", year: "numeric" },
      },
      listMonth: {
        type: "list",
        duration: { month: 1 },
        listDaySideFormat: { weekday: "long" },
      },
      listYear: {
        type: "list",
        duration: { year: 1 },
        listDaySideFormat: { weekday: "long" },
      },
    },
  });
  return (
    Fo.push(Na, il, Ll, Jl),
    (e.Calendar = class extends vi {
      constructor(e, t = {}) {
        super(),
          (this.isRendering = !1),
          (this.isRendered = !1),
          (this.currentClassNames = []),
          (this.customContentRenderId = 0),
          (this.handleAction = (e) => {
            switch (e.type) {
              case "SET_EVENT_DRAG":
              case "SET_EVENT_RESIZE":
                this.renderRunner.tryDrain();
            }
          }),
          (this.handleData = (e) => {
            (this.currentData = e),
              this.renderRunner.request(e.calendarOptions.rerenderDelay);
          }),
          (this.handleRenderRequest = () => {
            if (this.isRendering) {
              this.isRendered = !0;
              let { currentData: e } = this;
              Cn(() => {
                P(
                  f(
                    fi,
                    {
                      options: e.calendarOptions,
                      theme: e.theme,
                      emitter: e.emitter,
                    },
                    (t, n, r, i) => (
                      this.setClassNames(t),
                      this.setHeight(n),
                      f(
                        Bn.Provider,
                        { value: this.customContentRenderId },
                        f(
                          la,
                          Object.assign({ isHeightAuto: r, forPrint: i }, e)
                        )
                      )
                    )
                  ),
                  this.el
                );
              });
            } else
              this.isRendered &&
                ((this.isRendered = !1),
                P(null, this.el),
                this.setClassNames([]),
                this.setHeight(""));
          }),
          (this.el = e),
          (this.renderRunner = new Ee(this.handleRenderRequest)),
          new Qo({
            optionOverrides: t,
            calendarApi: this,
            onAction: this.handleAction,
            onData: this.handleData,
          });
      }
      render() {
        let e = this.isRendering;
        e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
          this.renderRunner.request(),
          e && this.updateSize();
      }
      destroy() {
        this.isRendering &&
          ((this.isRendering = !1), this.renderRunner.request());
      }
      updateSize() {
        Cn(() => {
          super.updateSize();
        });
      }
      batchRendering(e) {
        this.renderRunner.pause("batchRendering"),
          e(),
          this.renderRunner.resume("batchRendering");
      }
      pauseRendering() {
        this.renderRunner.pause("pauseRendering");
      }
      resumeRendering() {
        this.renderRunner.resume("pauseRendering", !0);
      }
      resetOptions(e, t) {
        this.currentDataManager.resetOptions(e, t);
      }
      setClassNames(e) {
        if (!Ie(e, this.currentClassNames)) {
          let { classList: t } = this.el;
          for (let e of this.currentClassNames) t.remove(e);
          for (let n of e) t.add(n);
          this.currentClassNames = e;
        }
      }
      setHeight(e) {
        Le(this.el, "height", e);
      }
    }),
    (e.Draggable = class {
      constructor(e, t = {}) {
        (this.handlePointerDown = (e) => {
          let { dragging: t } = this,
            { minDistance: n, longPressDelay: r } = this.settings;
          (t.minDistance =
            null != n ? n : e.isTouch ? 0 : mn.eventDragMinDistance),
            (t.delay = e.isTouch ? (null != r ? r : mn.longPressDelay) : 0);
        }),
          (this.handleDragStart = (e) => {
            e.isTouch &&
              this.dragging.delay &&
              e.subjectEl.classList.contains("fc-event") &&
              this.dragging.mirror
                .getMirrorEl()
                .classList.add("fc-event-selected");
          }),
          (this.settings = t);
        let n = (this.dragging = new Sa(e));
        (n.touchScrollAllowed = !1),
          null != t.itemSelector && (n.pointer.selector = t.itemSelector),
          null != t.appendTo && (n.mirror.parentNode = t.appendTo),
          n.emitter.on("pointerdown", this.handlePointerDown),
          n.emitter.on("dragstart", this.handleDragStart),
          new Ia(n, t.eventData);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.Internal = lo),
    (e.JsonRequestError = ci),
    (e.ThirdPartyDraggable = class {
      constructor(e, t) {
        let n = document;
        e === document || e instanceof Element
          ? ((n = e), (t = t || {}))
          : (t = e || {});
        let r = (this.dragging = new Oa(n));
        "string" == typeof t.itemSelector
          ? (r.pointer.selector = t.itemSelector)
          : n === document && (r.pointer.selector = "[data-event]"),
          "string" == typeof t.mirrorSelector &&
            (r.mirrorSelector = t.mirrorSelector),
          new Ia(r, t.eventData);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.createPlugin = mo),
    (e.formatDate = function (e, t = {}) {
      let n = ua(t),
        r = gn(t),
        i = n.createMarkerMeta(e);
      return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : "";
    }),
    (e.formatRange = function (e, t, n) {
      let r = ua("object" == typeof n && n ? n : {}),
        i = gn(n),
        s = r.createMarkerMeta(e),
        o = r.createMarkerMeta(t);
      return s && o
        ? r.formatRange(s.marker, o.marker, i, {
            forcedStartTzo: s.forcedTzo,
            forcedEndTzo: o.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: mn.defaultRangeSeparator,
          })
        : "";
    }),
    (e.globalLocales = co),
    (e.globalPlugins = Fo),
    (e.sliceEvents = function (e, t) {
      return Wr(
        e.eventStore,
        e.eventUiBases,
        e.dateProfile.activeRange,
        t ? e.nextDayThreshold : null
      ).fg;
    }),
    (e.version = "6.0.1"),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});

/**
 * Swiper 7.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 24, 2021
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";

  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }

  function t(s = {}, a = {}) {
    Object.keys(a).forEach((i) => {
      void 0 === s[i]
        ? (s[i] = a[i])
        : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };

  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };

  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  class n extends Array {
    constructor(e) {
      super(...(e || [])),
        (function (e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }

  function l(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }),
      t
    );
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    const s = r(),
      i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          l.push(t.childNodes[e]);
      } else
        l = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(l)
    );
  }
  d.fn = n.prototype;
  const c = {
    addClass: function (...e) {
      const t = l(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = l(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = l(e.map((e) => e.split(" ")));
      return (
        o(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = l(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, a, i] = e;

      function r(e) {
        const t = e.target;
        if (!t) return;
        const i = e.target.dom7EventData || [];
        if ((i.indexOf(e) < 0 && i.unshift(e), d(t).is(s))) a.apply(t, i);
        else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1)
            d(e[t]).is(s) && a.apply(e[t], i);
        }
      }

      function n(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
      }
      "function" == typeof e[1] && (([t, a, i] = e), (s = void 0)),
        i || (i = !1);
      const l = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: a, proxyListener: r }),
              t.addEventListener(e, r, i);
          }
        else
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: a, proxyListener: n }),
              t.addEventListener(e, n, i);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, a, i] = e;
      "function" == typeof e[1] && (([t, a, i] = e), (s = void 0)),
        i || (i = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let n;
          if (
            (!s && r.dom7Listeners
              ? (n = r.dom7Listeners[t])
              : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]),
            n && n.length)
          )
            for (let e = n.length - 1; e >= 0; e -= 1) {
              const s = n[e];
              (a && s.listener === a) ||
              (a &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === a)
                ? (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1))
                : a ||
                  (r.removeEventListener(t, s.proxyListener, i),
                  n.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = r(),
        s = e[0].split(" "),
        a = e[1];
      for (let i = 0; i < s.length; i += 1) {
        const r = s[i];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(r, {
              detail: a,
              bubbles: !0,
              cancelable: !0,
            });
            (i.dom7EventData = e.filter((e, t) => t > 0)),
              i.dispatchEvent(s),
              (i.dom7EventData = []),
              delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(a) {
            a.target === this && (e.call(this, a), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          c = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = r(),
        s = a(),
        i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
          if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = a();
      for (let a = 0; a < e.length; a += 1) {
        t = e[a];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const a = s.createElement("div");
            for (a.innerHTML = t; a.firstChild; )
              this[e].appendChild(a.firstChild);
          } else if (t instanceof n)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const a = t.createElement("div");
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
          ? d([this[0].nextElementSibling])
          : d([])
        : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && d(t.previousElementSibling).is(e)
            ? d([t.previousElementSibling])
            : d([])
          : t.previousElementSibling
          ? d([t.previousElementSibling])
          : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }
      return d(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1)
          (e && !d(a[s]).is(e)) || t.push(a[s]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };

  function p(e, t = 0) {
    return setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e, t = "x") {
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }

  function m(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }

  function f(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      const r = e[i];
      if (
        null != r &&
        ((a = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? a instanceof HTMLElement
          : a && (1 === a.nodeType || 11 === a.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, a = e.length; s < a; s += 1) {
          const a = e[s],
            i = Object.getOwnPropertyDescriptor(r, a);
          void 0 !== i &&
            i.enumerable &&
            (m(t[a]) && m(r[a])
              ? r[a].__swiper__
                ? (t[a] = r[a])
                : f(t[a], r[a])
              : !m(t[a]) && m(r[a])
              ? ((t[a] = {}), r[a].__swiper__ ? (t[a] = r[a]) : f(t[a], r[a]))
              : (t[a] = r[a]));
        }
      }
    }
    var a;
    return t;
  }

  function g(e, t, s) {
    e.style.setProperty(t, s);
  }

  function v({ swiper: e, targetPosition: t, side: s }) {
    const a = r(),
      i = -e.translate;
    let n,
      l = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      a.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > i ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (n = new Date().getTime()), null === l && (l = n);
        const r = Math.max(Math.min((n - l) / o, 1), 0),
          d = 0.5 - Math.cos(r * Math.PI) / 2;
        let u = i + d * (t - i);
        if (
          (c(u, t) && (u = t),
          e.wrapperEl.scrollTo({
            [s]: u,
          }),
          c(u, t))
        )
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({
                  [s]: u,
                });
            }),
            void a.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = a.requestAnimationFrame(p);
      };
    p();
  }
  let w, b, x;

  function y() {
    return (
      w ||
        (w = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      w
    );
  }

  function E(e = {}) {
    return (
      b ||
        (b = (function ({ userAgent: e } = {}) {
          const t = y(),
            s = r(),
            a = s.navigator.platform,
            i = e || s.navigator.userAgent,
            n = { ios: !1, android: !1 },
            l = s.screen.width,
            o = s.screen.height,
            d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = i.match(/(iPad).*OS\s([\d_]+)/);
          const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === a;
          let m = "MacIntel" === a;
          return (
            !c &&
              m &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${o}`) >= 0 &&
              ((c = i.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !h && ((n.os = "android"), (n.android = !0)),
            (c || u || p) && ((n.os = "ios"), (n.ios = !0)),
            n
          );
        })(e)),
      b
    );
  }

  function T() {
    return (
      x ||
        (x = (function () {
          const e = r();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      x
    );
  }
  Object.keys(c).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
  });
  var C = {
    on(e, t, s) {
      const a = this;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if ("function" != typeof t) return a;

      function i(...s) {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, a, i;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (a = e.slice(1, e.length)), (i = t))
        : ((s = e[0].events), (a = e[0].data), (i = e[0].context || t)),
        a.unshift(i);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(i, [e, ...a]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(i, a);
              });
        }),
        t
      );
    },
  };

  function $({ swiper: e, runCallbacks: t, direction: s, step: a }) {
    const { activeIndex: i, previousIndex: r } = e;
    let n = s;
    if (
      (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
      e.emit(`transition${a}`),
      t && i !== r)
    ) {
      if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
      e.emit(`slideChangeTransition${a}`),
        "next" === n
          ? e.emit(`slideNextTransition${a}`)
          : e.emit(`slidePrevTransition${a}`);
    }
  }

  function S(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      { params: l, touches: o, enabled: c } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === p.type),
      !n.isTouchEvent && "which" in p && 3 === p.which)
    )
      return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass &&
      "" !== l.noSwipingClass &&
      p.target &&
      p.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (h = d(e.path[0]));
    const m = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      f = !(!p.target || !p.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== a() && s !== r()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(m, p.target)
        : h.closest(m)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
      (o.currentY =
        "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
    const g = o.currentX,
      v = o.currentY,
      w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = v),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== p.type)
    ) {
      let e = !0;
      h.is(n.focusableElements) && (e = !1),
        s.activeElement &&
          d(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== h[0] &&
          s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !a) ||
        h[0].isContentEditable ||
        p.preventDefault();
    }
    t.emit("touchStart", p);
  }

  function M(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
    if (!o) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    const p =
        "touchmove" === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      h = "touchmove" === c.type ? p.pageX : c.pageX,
      m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }),
          (i.touchStartTime = u()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (h < n.startX && s.translate <= s.maxTranslate()) ||
        (h > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      d(c.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = h), (n.currentY = m);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
      s.emit("sliderMove", c),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (n.diff = v),
      (v *= r.touchRatio),
      l && (v = -v),
      (s.swipeDirection = v > 0 ? "prev" : "next"),
      (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + v) ** b))
        : v < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }

  function P(e) {
    const t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = u(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = u()),
      p(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < n.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t]
        ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
        : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
    }
    const g = (h - n[m]) / f,
      v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(m + v)
          : t.slideTo(m)
        : ("next" === t.swipeDirection && t.slideTo(m + v),
          "prev" === t.swipeDirection && t.slideTo(m));
    }
  }

  function k() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function z(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function O() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let I = !1;

  function L() {}
  const A = (e, t) => {
    const s = a(),
      {
        params: i,
        touchEvents: r,
        el: n,
        wrapperEl: l,
        device: o,
        support: d,
      } = e,
      c = !!i.nested,
      p = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (d.touch) {
      const t = !(
        "touchstart" !== r.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      n[p](r.start, e.onTouchStart, t),
        n[p](
          r.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        n[p](r.end, e.onTouchEnd, t),
        r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else
      n[p](r.start, e.onTouchStart, !1),
        s[p](r.move, e.onTouchMove, c),
        s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      n[p]("click", e.onClick, !0),
      i.cssMode && l[p]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            k,
            !0
          )
        : e[u]("observerUpdate", k, !0);
  };
  const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var G = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };

  function N(e, t) {
    return function (s = {}) {
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
            !0 === e[a] &&
            (e[a] = { auto: !0 }),
          a in e && "enabled" in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              "object" != typeof e[a] ||
                "enabled" in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              f(t, s))
            : f(t, s))
        : f(t, s);
    };
  }
  const B = {
      eventsEmitter: C,
      update: {
        updateSize: function () {
          const e = this;
          let t, s;
          const a = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : a[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : a[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(a.css("padding-left") || 0, 10) -
                parseInt(a.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(a.css("padding-top") || 0, 10) -
                parseInt(a.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;

          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }

          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const a = e.params,
            { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            c = i.children(`.${e.params.slideClass}`),
            p = o ? e.virtual.slides.length : c.length;
          let u = [];
          const h = [],
            m = [];
          let f = a.slidesOffsetBefore;
          "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
          let v = a.slidesOffsetAfter;
          "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let x = a.spaceBetween,
            y = -f,
            E = 0,
            T = 0;
          if (void 0 === r) return;
          "string" == typeof x &&
            x.indexOf("%") >= 0 &&
            (x = (parseFloat(x.replace("%", "")) / 100) * r),
            (e.virtualSize = -x),
            n
              ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            a.centeredSlides &&
              a.cssMode &&
              (g(e.wrapperEl, "--swiper-centered-offset-before", ""),
              g(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = a.grid && a.grid.rows > 1 && e.grid;
          let $;
          C && e.grid.initSlides(p);
          const S =
            "auto" === a.slidesPerView &&
            a.breakpoints &&
            Object.keys(a.breakpoints).filter(
              (e) => void 0 !== a.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < p; i += 1) {
            $ = 0;
            const n = c.eq(i);
            if (
              (C && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display"))
            ) {
              if ("auto" === a.slidesPerView) {
                S && (c[i].style[t("width")] = "");
                const r = getComputedStyle(n[0]),
                  l = n[0].style.transform,
                  o = n[0].style.webkitTransform;
                if (
                  (l && (n[0].style.transform = "none"),
                  o && (n[0].style.webkitTransform = "none"),
                  a.roundLengths)
                )
                  $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                else {
                  const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    a = s(r, "padding-right"),
                    i = s(r, "margin-left"),
                    l = s(r, "margin-right"),
                    o = r.getPropertyValue("box-sizing");
                  if (o && "border-box" === o) $ = e + i + l;
                  else {
                    const { clientWidth: s, offsetWidth: r } = n[0];
                    $ = e + t + a + i + l + (r - s);
                  }
                }
                l && (n[0].style.transform = l),
                  o && (n[0].style.webkitTransform = o),
                  a.roundLengths && ($ = Math.floor($));
              } else
                ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
                  a.roundLengths && ($ = Math.floor($)),
                  c[i] && (c[i].style[t("width")] = `${$}px`);
              c[i] && (c[i].swiperSlideSize = $),
                m.push($),
                a.centeredSlides
                  ? ((y = y + $ / 2 + E / 2 + x),
                    0 === E && 0 !== i && (y = y - r / 2 - x),
                    0 === i && (y = y - r / 2 - x),
                    Math.abs(y) < 0.001 && (y = 0),
                    a.roundLengths && (y = Math.floor(y)),
                    T % a.slidesPerGroup == 0 && u.push(y),
                    h.push(y))
                  : (a.roundLengths && (y = Math.floor(y)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ==
                      0 && u.push(y),
                    h.push(y),
                    (y = y + $ + x)),
                (e.virtualSize += $ + x),
                (E = $),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + v),
            n &&
              l &&
              ("slide" === a.effect || "coverflow" === a.effect) &&
              i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
            a.setWrapperSize &&
              i.css({
                [t("width")]: `${e.virtualSize + a.spaceBetween}px`,
              }),
            C && e.grid.updateWrapperSize($, u, t),
            !a.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < u.length; s += 1) {
              let i = u[s];
              a.roundLengths && (i = Math.floor(i)),
                u[s] <= e.virtualSize - r && t.push(i);
            }
            (u = t),
              Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(e.virtualSize - r);
          }
          if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
            const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
            c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
              [s]: `${x}px`,
            });
          }
          if (a.centeredSlides && a.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (a.spaceBetween ? a.spaceBetween : 0);
            }),
              (e -= a.spaceBetween);
            const t = e - r;
            u = u.map((e) => (e < 0 ? -f : e > t ? t + v : e));
          }
          if (a.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((t) => {
                e += t + (a.spaceBetween ? a.spaceBetween : 0);
              }),
              (e -= a.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              u.forEach((e, s) => {
                u[s] = e - t;
              }),
                h.forEach((e, s) => {
                  h[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: h,
              slidesSizesGrid: m,
            }),
            a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
          ) {
            g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              g(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - m[m.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          p !== d && e.emit("slidesLengthChange"),
            u.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            a.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            a = t.virtual && t.params.virtual.enabled;
          let i,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const n = (e) =>
            a
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                s.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e));
              }
          else s.push(n(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              r = e > r ? e : r;
            }
          r && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: a, rtlTranslate: i, snapGrid: r } = t;
          if (0 === a.length) return;
          void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
          let n = -e;
          i && (n = e),
            a.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < a.length; e += 1) {
            const l = a[e];
            let o = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
            const d =
                (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                (l.swiperSlideSize + s.spaceBetween),
              c =
                (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                (l.swiperSlideSize + s.spaceBetween),
              p = -(n - o),
              u = p + t.slidesSizesGrid[e];
            ((p >= 0 && p < t.size - 1) ||
              (u > 1 && u <= t.size) ||
              (p <= 0 && u >= t.size)) &&
              (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(e),
              a.eq(e).addClass(s.slideVisibleClass)),
              (l.progress = i ? -d : d),
              (l.originalProgress = i ? -c : c);
          }
          t.visibleSlides = d(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            a = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: r, isEnd: n } = t;
          const l = r,
            o = n;
          0 === a
            ? ((i = 0), (r = !0), (n = !0))
            : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !l && t.emit("reachBeginning toEdge"),
            n && !o && t.emit("reachEnd toEdge"),
            ((l && !r) || (o && !n)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: a,
              activeIndex: i,
              realIndex: r,
            } = e,
            n = e.virtual && s.virtual.enabled;
          let l;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (l = n
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            l.addClass(s.slideActiveClass),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : a
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let o = l
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === o.length &&
            ((o = t.eq(0)), o.addClass(s.slideNextClass));
          let d = l
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === d.length &&
            ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : a
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : a
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: a,
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: l,
              snapIndex: o,
            } = t;
          let d,
            c = e;
          if (void 0 === c) {
            for (let e = 0; e < a.length; e += 1)
              void 0 !== a[e + 1]
                ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                  ? (c = e)
                  : s >= a[e] && s < a[e + 1] && (c = e + 1)
                : s >= a[e] && (c = e);
            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (i.indexOf(s) >= 0) d = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            d = e + Math.floor((c - e) / r.slidesPerGroup);
          }
          if ((d >= i.length && (d = i.length - 1), c === n))
            return void (
              d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
            );
          const p = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          Object.assign(t, {
            snapIndex: d,
            realIndex: p,
            previousIndex: n,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            l !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            a = d(e).closest(`.${s.slideClass}`)[0];
          let i,
            r = !1;
          if (a)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === a) {
                (r = !0), (i = e);
                break;
              }
          if (!a || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = a),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  d(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: s,
            translate: a,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          let r = h(i[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            {
              rtlTranslate: a,
              params: i,
              $wrapperEl: r,
              wrapperEl: n,
              progress: l,
            } = s;
          let o,
            d = 0,
            c = 0;
          s.isHorizontal() ? (d = a ? -e : e) : (c = e),
            i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
            i.cssMode
              ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -d : -c)
              : i.virtualTranslate ||
                r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? d : c);
          const p = s.maxTranslate() - s.minTranslate();
          (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
            o !== l && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          s = !0,
          a = !0,
          i
        ) {
          const r = this,
            { params: n, wrapperEl: l } = r;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          const o = r.minTranslate(),
            d = r.maxTranslate();
          let c;
          if (
            ((c = a && e > o ? o : a && e < d ? d : e),
            r.updateProgress(c),
            n.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return (
                  v({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              l.scrollTo({
                [e ? "left" : "top"]: -c,
                behavior: "smooth",
              });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            $({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              $({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: {
        slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let n = e;
          n < 0 && (n = 0);
          const {
            params: l,
            snapGrid: o,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: h,
            enabled: m,
          } = r;
          if (
            (r.animating && l.preventInteractionOnTransition) ||
            (!m && !a && !i)
          )
            return !1;
          const f = Math.min(r.params.slidesPerGroupSkip, n);
          let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
          g >= o.length && (g = o.length - 1),
            (p || l.initialSlide || 0) === (c || 0) &&
              s &&
              r.emit("beforeSlideChangeStart");
          const w = -o[g];
          if ((r.updateProgress(w), l.normalizeSlideIndex))
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * w),
                s = Math.floor(100 * d[e]),
                a = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= s && t < a - (a - s) / 2
                  ? (n = e)
                  : t >= s && t < a && (n = e + 1)
                : t >= s && (n = e);
            }
          if (r.initialized && n !== p) {
            if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              w > r.translate &&
              w > r.maxTranslate() &&
              (p || 0) !== n
            )
              return !1;
          }
          let b;
          if (
            ((b = n > p ? "next" : n < p ? "prev" : "reset"),
            (u && -w === r.translate) || (!u && w === r.translate))
          )
            return (
              r.updateActiveIndex(n),
              l.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== l.effect && r.setTranslate(w),
              "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
              !1
            );
          if (l.cssMode) {
            const e = r.isHorizontal(),
              s = u ? w : -w;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  v({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth",
              });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                r.transitionEnd(s, b))
              : (r.setTransition(t),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(s, b));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const a = this,
            { animating: i, enabled: r, params: n } = a;
          if (!r) return a;
          let l = n.slidesPerGroup;
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
          if (n.loop) {
            if (i && n.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const a = this,
            {
              params: i,
              animating: r,
              snapGrid: n,
              slidesGrid: l,
              rtlTranslate: o,
              enabled: d,
            } = a;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }

          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = c(o ? a.translate : -a.translate),
            u = n.map((e) => c(e));
          let h = n[u.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            n.forEach((t, s) => {
              p >= t && (e = s);
            }),
              void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          return (
            void 0 !== h &&
              ((m = l.indexOf(h)),
              m < 0 && (m = a.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            a.slideTo(m, e, t, s)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, a = 0.5) {
          const i = this;
          let r = i.activeIndex;
          const n = Math.min(i.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;
          if (o >= i.snapGrid[l]) {
            const e = i.snapGrid[l];
            o - e > (i.snapGrid[l + 1] - e) * a &&
              (r += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[l - 1];
            o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, i.slidesGrid.length - 1)),
            i.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            a =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              d(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - a / 2 ||
                  r > e.slides.length - e.loopedSlides + a / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    p(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - a
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  p(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          const e = this,
            t = a(),
            { params: s, $wrapperEl: i } = e,
            r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
          r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let n = r.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let a = 0; a < e; a += 1) {
                const e = d(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                r.append(e);
              }
              n = r.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = n.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > n.length && (e.loopedSlides = n.length);
          const l = [],
            o = [];
          n.each((t, s) => {
            const a = d(t);
            s < e.loopedSlides && o.push(t),
              s < n.length && s >= n.length - e.loopedSlides && l.push(t),
              a.attr("data-swiper-slide-index", s);
          });
          for (let e = 0; e < o.length; e += 1)
            r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = l.length - 1; e >= 0; e -= 1)
            r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: a,
            allowSlidePrev: i,
            allowSlideNext: r,
            snapGrid: n,
            rtlTranslate: l,
          } = e;
          let o;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const d = -n[t] - e.getTranslate();
          if (t < a) {
            (o = s.length - 3 * a + t), (o += a);
            e.slideTo(o, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((l ? -e.translate : e.translate) - d);
          } else if (t >= s.length - a) {
            (o = -s.length + t + a), (o += a);
            e.slideTo(o, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: s, support: i } = e;
          (e.onTouchStart = S.bind(e)),
            (e.onTouchMove = M.bind(e)),
            (e.onTouchEnd = P.bind(e)),
            s.cssMode && (e.onScroll = O.bind(e)),
            (e.onClick = z.bind(e)),
            i.touch && !I && (t.addEventListener("touchstart", L), (I = !0)),
            A(e, "on");
        },
        detachEvents: function () {
          A(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: a = 0,
              params: i,
              $el: r,
            } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
            d = D(e, i),
            c = D(e, o),
            p = i.enabled;
          d && !c
            ? (r.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), f(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            p && !m ? e.disable() : !p && m && e.enable(),
            (e.currentBreakpoint = l),
            e.emit("_beforeBreakpoint", o),
            h &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            "window" === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: a,
              $el: i,
              device: r,
              support: n,
            } = e,
            l = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((a) => {
                        e[a] && s.push(t + a);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !n.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: a },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
              ],
              s.containerModifierClass
            );
          t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;

          function c() {
            n && n();
          }
          d(e).parent("picture")[0] || (e.complete && i)
            ? c()
            : t
            ? ((o = new l.Image()),
              (o.onload = c),
              (o.onerror = c),
              a && (o.sizes = a),
              s && (o.srcset = s),
              t && (o.src = t))
            : c();
        },
        preloadImages: function () {
          const e = this;

          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    X = {};
  class H {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = f({}, s)),
        t && !s.el && (s.el = t),
        s.el && d(s.el).length > 1)
      ) {
        const e = [];
        return (
          d(s.el).each((t) => {
            const a = f({}, s, { el: t });
            e.push(new H(a));
          }),
          e
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = y()),
        (a.device = E({ userAgent: s.userAgent })),
        (a.browser = T()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
      const i = {};
      a.modules.forEach((e) => {
        e({
          swiper: a,
          extendParams: N(s, i),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const r = f({}, G, i);
      return (
        (a.params = f({}, r, X, s)),
        (a.originalParams = f({}, a.params)),
        (a.passedParams = f({}, s)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        (a.$ = d),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: t,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (a.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (a.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              a.support.touch || !a.params.simulateTouch
                ? a.touchEventsTouch
                : a.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;

      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || a()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement("div");
        (r = d(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      f(X, e);
    }
    static get extendedDefaults() {
      return X;
    }
    static get defaults() {
      return G;
    }
    static installModule(e) {
      H.prototype.__modules__ || (H.prototype.__modules__ = []);
      const t = H.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => H.installModule(e)), H)
        : (H.installModule(e), H);
    }
  }

  function Y(e, t, s, i) {
    const r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let n = e.$el.children(`.${i[a]}`)[0];
            n ||
              ((n = r.createElement("div")),
              (n.className = i[a]),
              e.$el.append(n)),
              (s[a] = n),
              (t[a] = n);
          }
        }),
      s
    );
  }

  function W(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }

  function R(e) {
    const t = this,
      { $wrapperEl: s, params: a } = t;
    if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
      for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
    else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function j(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function _(e, t) {
    const s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s;
    let n = r;
    i.loop &&
      ((n -= s.loopedSlides),
      s.loopDestroy(),
      (s.slides = a.children(`.${i.slideClass}`)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function V(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    let r = i;
    s.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = a.children(`.${s.slideClass}`)));
    let n,
      l = r;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
    s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function q() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }

  function F(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
    } = e;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      });
  }

  function U(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }

  function K({ swiper: e, duration: t, transformEl: s, allSlides: a }) {
    const { slides: i, activeIndex: r, $wrapperEl: n } = e;
    if (e.params.virtualTranslate && 0 !== t) {
      let t,
        l = !1;
      (t = a ? (s ? i.find(s) : i) : s ? i.eq(r).find(s) : i.eq(r)),
        t.transitionEnd(() => {
          if (l) return;
          if (!e || e.destroyed) return;
          (l = !0), (e.animating = !1);
          const t = ["webkitTransitionEnd", "transitionend"];
          for (let e = 0; e < t.length; e += 1) n.trigger(t[e]);
        });
    }
  }

  function Z(e, t, s) {
    const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(B).forEach((e) => {
    Object.keys(B[e]).forEach((t) => {
      H.prototype[t] = B[e][t];
    });
  }),
    H.use([
      function ({ swiper: e, on: t, emit: s }) {
        const a = r();
        let i = null;
        const n = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== a.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((i = new ResizeObserver((t) => {
                const { width: s, height: a } = e;
                let i = s,
                  r = a;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: a }) => {
                    (a && a !== e.el) ||
                      ((i = s ? s.width : (t[0] || t).inlineSize),
                      (r = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (i === s && r === a) || n();
              })),
              i.observe(e.el))
            : (a.addEventListener("resize", n),
              a.addEventListener("orientationchange", l));
        }),
          t("destroy", () => {
            i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
              a.removeEventListener("resize", n),
              a.removeEventListener("orientationchange", l);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: a }) {
        const i = [],
          n = r(),
          l = (e, t = {}) => {
            const s = new (n.MutationObserver || n.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void a("observerUpdate", e[0]);
                const t = function () {
                  a("observerUpdate", e[0]);
                };
                n.requestAnimationFrame
                  ? n.requestAnimationFrame(t)
                  : n.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) l(t[e]);
              }
              l(e.$el[0], { childList: e.params.observeSlideChildren }),
                l(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            i.forEach((e) => {
              e.disconnect();
            }),
              i.splice(0, i.length);
          });
      },
    ]);
  const J = [
    function ({ swiper: e, extendParams: t, on: s }) {
      let a;
      function i(t, s) {
        const a = e.params.virtual;
        if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
        const i = a.renderSlide
          ? d(a.renderSlide.call(e, t, s))
          : d(
              `<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`
            );
        return (
          i.attr("data-swiper-slide-index") ||
            i.attr("data-swiper-slide-index", s),
          a.cache && (e.virtual.cache[s] = i),
          i
        );
      }
      function r(t) {
        const {
            slidesPerView: s,
            slidesPerGroup: a,
            centeredSlides: r,
          } = e.params,
          { addSlidesBefore: n, addSlidesAfter: l } = e.params.virtual,
          { from: o, to: d, slides: c, slidesGrid: p, offset: u } = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        const h = e.activeIndex || 0;
        let m, f, g;
        (m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"),
          r
            ? ((f = Math.floor(s / 2) + a + l), (g = Math.floor(s / 2) + a + n))
            : ((f = s + (a - 1) + l), (g = a + n));
        const v = Math.max((h || 0) - g, 0),
          w = Math.min((h || 0) + f, c.length - 1),
          b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
        function x() {
          e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.lazy && e.params.lazy.enabled && e.lazy.load();
        }
        if (
          (Object.assign(e.virtual, {
            from: v,
            to: w,
            offset: b,
            slidesGrid: e.slidesGrid,
          }),
          o === v && d === w && !t)
        )
          return (
            e.slidesGrid !== p && b !== u && e.slides.css(m, `${b}px`),
            void e.updateProgress()
          );
        if (e.params.virtual.renderExternal)
          return (
            e.params.virtual.renderExternal.call(e, {
              offset: b,
              from: v,
              to: w,
              slides: (function () {
                const e = [];
                for (let t = v; t <= w; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void (e.params.virtual.renderExternalUpdate && x())
          );
        const y = [],
          E = [];
        if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
        else
          for (let t = o; t <= d; t += 1)
            (t < v || t > w) &&
              e.$wrapperEl
                .find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`)
                .remove();
        for (let e = 0; e < c.length; e += 1)
          e >= v &&
            e <= w &&
            (void 0 === d || t
              ? E.push(e)
              : (e > d && E.push(e), e < o && y.push(e)));
        E.forEach((t) => {
          e.$wrapperEl.append(i(c[t], t));
        }),
          y
            .sort((e, t) => t - e)
            .forEach((t) => {
              e.$wrapperEl.prepend(i(c[t], t));
            }),
          e.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
          x();
      }
      t({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (e.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        s("beforeInit", () => {
          e.params.virtual.enabled &&
            ((e.virtual.slides = e.params.virtual.slides),
            e.classNames.push(`${e.params.containerModifierClass}virtual`),
            (e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0),
            e.params.initialSlide || r());
        }),
        s("setTranslate", () => {
          e.params.virtual.enabled &&
            (e.params.cssMode && !e._immediateVirtual
              ? (clearTimeout(a),
                (a = setTimeout(() => {
                  r();
                }, 100)))
              : r());
        }),
        s("init update resize", () => {
          e.params.virtual.enabled &&
            e.params.cssMode &&
            g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
        }),
        Object.assign(e.virtual, {
          appendSlide: function (t) {
            if ("object" == typeof t && "length" in t)
              for (let s = 0; s < t.length; s += 1)
                t[s] && e.virtual.slides.push(t[s]);
            else e.virtual.slides.push(t);
            r(!0);
          },
          prependSlide: function (t) {
            const s = e.activeIndex;
            let a = s + 1,
              i = 1;
            if (Array.isArray(t)) {
              for (let s = 0; s < t.length; s += 1)
                t[s] && e.virtual.slides.unshift(t[s]);
              (a = s + t.length), (i = t.length);
            } else e.virtual.slides.unshift(t);
            if (e.params.virtual.cache) {
              const t = e.virtual.cache,
                s = {};
              Object.keys(t).forEach((e) => {
                const a = t[e],
                  r = a.attr("data-swiper-slide-index");
                r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                  (s[parseInt(e, 10) + i] = a);
              }),
                (e.virtual.cache = s);
            }
            r(!0), e.slideTo(a, 0);
          },
          removeSlide: function (t) {
            if (null == t) return;
            let s = e.activeIndex;
            if (Array.isArray(t))
              for (let a = t.length - 1; a >= 0; a -= 1)
                e.virtual.slides.splice(t[a], 1),
                  e.params.virtual.cache && delete e.virtual.cache[t[a]],
                  t[a] < s && (s -= 1),
                  (s = Math.max(s, 0));
            else
              e.virtual.slides.splice(t, 1),
                e.params.virtual.cache && delete e.virtual.cache[t],
                t < s && (s -= 1),
                (s = Math.max(s, 0));
            r(!0), e.slideTo(s, 0);
          },
          removeAllSlides: function () {
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              r(!0),
              e.slideTo(0, 0);
          },
          update: r,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = a(),
        l = r();
      function o(t) {
        if (!e.enabled) return;
        const { rtlTranslate: s } = e;
        let a = t;
        a.originalEvent && (a = a.originalEvent);
        const r = a.keyCode || a.charCode,
          o = e.params.keyboard.pageUpDown,
          d = o && 33 === r,
          c = o && 34 === r,
          p = 37 === r,
          u = 39 === r,
          h = 38 === r,
          m = 40 === r;
        if (
          !e.allowSlideNext &&
          ((e.isHorizontal() && u) || (e.isVertical() && m) || c)
        )
          return !1;
        if (
          !e.allowSlidePrev &&
          ((e.isHorizontal() && p) || (e.isVertical() && h) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (n.activeElement &&
              n.activeElement.nodeName &&
              ("input" === n.activeElement.nodeName.toLowerCase() ||
                "textarea" === n.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            e.params.keyboard.onlyInViewport &&
            (d || c || p || u || h || m)
          ) {
            let t = !1;
            if (
              e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
              0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
            )
              return;
            const a = e.$el,
              i = a[0].clientWidth,
              r = a[0].clientHeight,
              n = l.innerWidth,
              o = l.innerHeight,
              d = e.$el.offset();
            s && (d.left -= e.$el[0].scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let e = 0; e < c.length; e += 1) {
              const s = c[e];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                if (0 === s[0] && 0 === s[1]) continue;
                t = !0;
              }
            }
            if (!t) return;
          }
          e.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && e.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && e.slidePrev())
            : ((d || c || h || m) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || m) && e.slideNext(),
              (d || h) && e.slidePrev()),
            i("keyPress", r);
        }
      }
      function c() {
        e.keyboard.enabled ||
          (d(n).on("keydown", o), (e.keyboard.enabled = !0));
      }
      function p() {
        e.keyboard.enabled &&
          (d(n).off("keydown", o), (e.keyboard.enabled = !1));
      }
      (e.keyboard = { enabled: !1 }),
        t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        s("init", () => {
          e.params.keyboard.enabled && c();
        }),
        s("destroy", () => {
          e.keyboard.enabled && p();
        }),
        Object.assign(e.keyboard, { enable: c, disable: p });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      const i = r();
      let n;
      t({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (e.mousewheel = { enabled: !1 });
      let l,
        o = u();
      const c = [];
      function h() {
        e.enabled && (e.mouseEntered = !0);
      }
      function m() {
        e.enabled && (e.mouseEntered = !1);
      }
      function f(t) {
        return (
          !(
            e.params.mousewheel.thresholdDelta &&
            t.delta < e.params.mousewheel.thresholdDelta
          ) &&
          !(
            e.params.mousewheel.thresholdTime &&
            u() - o < e.params.mousewheel.thresholdTime
          ) &&
          ((t.delta >= 6 && u() - o < 60) ||
            (t.direction < 0
              ? (e.isEnd && !e.params.loop) ||
                e.animating ||
                (e.slideNext(), a("scroll", t.raw))
              : (e.isBeginning && !e.params.loop) ||
                e.animating ||
                (e.slidePrev(), a("scroll", t.raw)),
            (o = new i.Date().getTime()),
            !1))
        );
      }
      function g(t) {
        let s = t,
          i = !0;
        if (!e.enabled) return;
        const r = e.params.mousewheel;
        e.params.cssMode && s.preventDefault();
        let o = e.$el;
        if (
          ("container" !== e.params.mousewheel.eventsTarget &&
            (o = d(e.params.mousewheel.eventsTarget)),
          !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges)
        )
          return !0;
        s.originalEvent && (s = s.originalEvent);
        let h = 0;
        const m = e.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (e.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            h = -g.pixelX * m;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            h = -g.pixelY;
          }
        else
          h =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
        if (0 === h) return !0;
        r.invert && (h = -h);
        let v = e.getTranslate() + h * r.sensitivity;
        if (
          (v >= e.minTranslate() && (v = e.minTranslate()),
          v <= e.maxTranslate() && (v = e.maxTranslate()),
          (i =
            !!e.params.loop ||
            !(v === e.minTranslate() || v === e.maxTranslate())),
          i && e.params.nested && s.stopPropagation(),
          e.params.freeMode && e.params.freeMode.enabled)
        ) {
          const t = { time: u(), delta: Math.abs(h), direction: Math.sign(h) },
            i =
              l &&
              t.time < l.time + 500 &&
              t.delta <= l.delta &&
              t.direction === l.direction;
          if (!i) {
            (l = void 0), e.params.loop && e.loopFix();
            let o = e.getTranslate() + h * r.sensitivity;
            const d = e.isBeginning,
              u = e.isEnd;
            if (
              (o >= e.minTranslate() && (o = e.minTranslate()),
              o <= e.maxTranslate() && (o = e.maxTranslate()),
              e.setTransition(0),
              e.setTranslate(o),
              e.updateProgress(),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              ((!d && e.isBeginning) || (!u && e.isEnd)) &&
                e.updateSlidesClasses(),
              e.params.freeMode.sticky)
            ) {
              clearTimeout(n), (n = void 0), c.length >= 15 && c.shift();
              const s = c.length ? c[c.length - 1] : void 0,
                a = c[0];
              if (
                (c.push(t),
                s && (t.delta > s.delta || t.direction !== s.direction))
              )
                c.splice(0);
              else if (
                c.length >= 15 &&
                t.time - a.time < 500 &&
                a.delta - t.delta >= 1 &&
                t.delta <= 6
              ) {
                const s = h > 0 ? 0.8 : 0.2;
                (l = t),
                  c.splice(0),
                  (n = p(() => {
                    e.slideToClosest(e.params.speed, !0, void 0, s);
                  }, 0));
              }
              n ||
                (n = p(() => {
                  (l = t),
                    c.splice(0),
                    e.slideToClosest(e.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (i || a("scroll", s),
              e.params.autoplay &&
                e.params.autoplayDisableOnInteraction &&
                e.autoplay.stop(),
              o === e.minTranslate() || o === e.maxTranslate())
            )
              return !0;
          }
        } else {
          const s = {
            time: u(),
            delta: Math.abs(h),
            direction: Math.sign(h),
            raw: t,
          };
          c.length >= 2 && c.shift();
          const a = c.length ? c[c.length - 1] : void 0;
          if (
            (c.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                f(s)
              : f(s),
            (function (t) {
              const s = e.params.mousewheel;
              if (t.direction < 0) {
                if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
              } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(t) {
        let s = e.$el;
        "container" !== e.params.mousewheel.eventsTarget &&
          (s = d(e.params.mousewheel.eventsTarget)),
          s[t]("mouseenter", h),
          s[t]("mouseleave", m),
          s[t]("wheel", g);
      }
      function w() {
        return e.params.cssMode
          ? (e.wrapperEl.removeEventListener("wheel", g), !0)
          : !e.mousewheel.enabled && (v("on"), (e.mousewheel.enabled = !0), !0);
      }
      function b() {
        return e.params.cssMode
          ? (e.wrapperEl.addEventListener(event, g), !0)
          : !!e.mousewheel.enabled &&
              (v("off"), (e.mousewheel.enabled = !1), !0);
      }
      s("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && b(),
          e.params.mousewheel.enabled && w();
      }),
        s("destroy", () => {
          e.params.cssMode && w(), e.mousewheel.enabled && b();
        }),
        Object.assign(e.mousewheel, { enable: w, disable: b });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      function i(t) {
        let s;
        return (
          t &&
            ((s = d(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function r(t, s) {
        const a = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](a.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
      }
      function n() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        r(s, e.isBeginning), r(t, e.isEnd);
      }
      function l(t) {
        t.preventDefault(), (e.isBeginning && !e.params.loop) || e.slidePrev();
      }
      function o(t) {
        t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = Y(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = i(t.nextEl),
          a = i(t.prevEl);
        s && s.length > 0 && s.on("click", o),
          a && a.length > 0 && a.on("click", l),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: a,
            prevEl: a && a[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
      }
      function p() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", l),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          c(), n();
        }),
        s("toEdge fromEdge lock unlock", () => {
          n();
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: i, $prevEl: r } = e.navigation,
            n = s.target;
          if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === n || e.pagination.el.contains(n))
            )
              return;
            let t;
            i
              ? (t = i.hasClass(e.params.navigation.hiddenClass))
              : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
              a(!0 === t ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: n, init: c, destroy: p });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      const i = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let n = 0;
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function o(t, s) {
        const { bulletActiveClass: a } = e.params.pagination;
        t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function c() {
        const t = e.rtl,
          s = e.params.pagination;
        if (l()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let p;
        const u = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((p = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides),
              p > u - 1 && (p -= u),
              p < 0 && "bullets" !== e.params.paginationType && (p = u + p))
            : (p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const a = e.pagination.bullets;
          let i, l, u;
          if (
            (s.dynamicBullets &&
              ((r = a
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((n += p - e.previousIndex),
                n > s.dynamicMainBullets - 1
                  ? (n = s.dynamicMainBullets - 1)
                  : n < 0 && (n = 0)),
              (i = p - n),
              (l = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (l + i) / 2)),
            a.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            a.each((e) => {
              const t = d(e),
                a = t.index();
              a === p && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= i &&
                    a <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  a === i && o(t, "prev"),
                  a === l && o(t, "next"));
            });
          else {
            const t = a.eq(p),
              r = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = a.eq(i),
                n = a.eq(l);
              for (let e = i; e <= l; e += 1)
                a.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (r >= a.length - s.dynamicMainBullets) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else o(t, "prev"), o(n, "next");
              else o(t, "prev"), o(n, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              n = (r * i - r) / 2 - u * r,
              l = t ? "right" : "left";
            a.css(e.isHorizontal() ? l : "top", `${n}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            c.find(W(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const a = (p + 1) / u;
          let i = 1,
            r = 1;
          "horizontal" === t ? (i = a) : (r = a),
            c
              .find(W(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (c.html(s.renderCustom(e, p + 1, u)), a("paginationRender", c[0]))
          : a("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function p() {
        const t = e.params.pagination;
        if (l()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let r = "";
        if ("bullets" === t.type) {
          let a = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            a > s &&
            (a = s);
          for (let s = 0; s < a; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(r), (e.pagination.bullets = i.find(W(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== t.type && a("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = Y(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = d(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => d(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (n = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", W(t.bulletClass), function (t) {
              t.preventDefault();
              let s = d(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function h() {
        const t = e.params.pagination;
        if (l()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", W(t.bulletClass));
      }
      s("init", () => {
        u(), p(), c();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        s("snapIndexChange", () => {
          e.params.loop || c();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (p(), c());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (p(), c());
        }),
        s("destroy", () => {
          h();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          c();
        }),
        s("click", (t, s) => {
          const i = s.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r.length > 0 &&
            !d(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = r.hasClass(e.params.pagination.hiddenClass);
            a(!0 === t ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: p,
          update: c,
          init: u,
          destroy: h,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      const r = a();
      let n,
        l,
        o,
        c,
        u = !1,
        h = null,
        m = null;
      function f() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: s, progress: a } = e,
          { $dragEl: i, $el: r } = t,
          n = e.params.scrollbar;
        let d = l,
          c = (o - l) * a;
        s
          ? ((c = -c),
            c > 0 ? ((d = l - c), (c = 0)) : -c + l > o && (d = o + c))
          : c < 0
          ? ((d = l + c), (c = 0))
          : c + l > o && (d = o - c),
          e.isHorizontal()
            ? (i.transform(`translate3d(${c}px, 0, 0)`),
              (i[0].style.width = `${d}px`))
            : (i.transform(`translate3d(0px, ${c}px, 0)`),
              (i[0].style.height = `${d}px`)),
          n.hide &&
            (clearTimeout(h),
            (r[0].style.opacity = 1),
            (h = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function g() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { $dragEl: s, $el: a } = t;
        (s[0].style.width = ""),
          (s[0].style.height = ""),
          (o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (c =
            e.size /
            (e.virtualSize +
              e.params.slidesOffsetBefore -
              (e.params.centeredSlides ? e.snapGrid[0] : 0))),
          (l =
            "auto" === e.params.scrollbar.dragSize
              ? o * c
              : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (s[0].style.width = `${l}px`)
            : (s[0].style.height = `${l}px`),
          (a[0].style.display = c >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (a[0].style.opacity = 0),
          e.params.watchOverflow &&
            e.enabled &&
            t.$el[e.isLocked ? "addClass" : "removeClass"](
              e.params.scrollbar.lockClass
            );
      }
      function v(t) {
        return e.isHorizontal()
          ? "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientX
            : t.clientX
          : "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].clientY
          : t.clientY;
      }
      function w(t) {
        const { scrollbar: s, rtlTranslate: a } = e,
          { $el: i } = s;
        let r;
        (r =
          (v(t) -
            i.offset()[e.isHorizontal() ? "left" : "top"] -
            (null !== n ? n : l / 2)) /
          (o - l)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
        e.updateProgress(d),
          e.setTranslate(d),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      function b(t) {
        const s = e.params.scrollbar,
          { scrollbar: a, $wrapperEl: r } = e,
          { $el: l, $dragEl: o } = a;
        (u = !0),
          (n =
            t.target === o[0] || t.target === o
              ? v(t) -
                t.target.getBoundingClientRect()[
                  e.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          r.transition(100),
          o.transition(100),
          w(t),
          clearTimeout(m),
          l.transition(0),
          s.hide && l.css("opacity", 1),
          e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
          i("scrollbarDragStart", t);
      }
      function x(t) {
        const { scrollbar: s, $wrapperEl: a } = e,
          { $el: r, $dragEl: n } = s;
        u &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          w(t),
          a.transition(0),
          r.transition(0),
          n.transition(0),
          i("scrollbarDragMove", t));
      }
      function y(t) {
        const s = e.params.scrollbar,
          { scrollbar: a, $wrapperEl: r } = e,
          { $el: n } = a;
        u &&
          ((u = !1),
          e.params.cssMode &&
            (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          s.hide &&
            (clearTimeout(m),
            (m = p(() => {
              n.css("opacity", 0), n.transition(400);
            }, 1e3))),
          i("scrollbarDragEnd", t),
          s.snapOnRelease && e.slideToClosest());
      }
      function E(t) {
        const {
            scrollbar: s,
            touchEventsTouch: a,
            touchEventsDesktop: i,
            params: n,
            support: l,
          } = e,
          o = s.$el[0],
          d = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          c = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!o) return;
        const p = "on" === t ? "addEventListener" : "removeEventListener";
        l.touch
          ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c))
          : (o[p](i.start, b, d), r[p](i.move, x, d), r[p](i.end, y, c));
      }
      function T() {
        const { scrollbar: t, $el: s } = e;
        e.params.scrollbar = Y(
          e,
          e.originalParams.scrollbar,
          e.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const a = e.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        e.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.find(a.el).length &&
          (i = s.find(a.el));
        let r = i.find(`.${e.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(t, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && e.params.scrollbar.el && E("on"),
          i &&
            i[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
      }
      function C() {
        e.params.scrollbar.el && E("off");
      }
      t({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      }),
        (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        s("init", () => {
          T(), g(), f();
        }),
        s("update resize observerUpdate lock unlock", () => {
          g();
        }),
        s("setTranslate", () => {
          f();
        }),
        s("setTransition", (t, s) => {
          !(function (t) {
            e.params.scrollbar.el &&
              e.scrollbar.el &&
              e.scrollbar.$dragEl.transition(t);
          })(s);
        }),
        s("enable disable", () => {
          const { $el: t } = e.scrollbar;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
        }),
        s("destroy", () => {
          C();
        }),
        Object.assign(e.scrollbar, {
          updateSize: g,
          setTranslate: f,
          init: T,
          destroy: C,
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ parallax: { enabled: !1 } });
      const a = (t, s) => {
          const { rtl: a } = e,
            i = d(t),
            r = a ? -1 : 1,
            n = i.attr("data-swiper-parallax") || "0";
          let l = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y");
          const c = i.attr("data-swiper-parallax-scale"),
            p = i.attr("data-swiper-parallax-opacity");
          if (
            (l || o
              ? ((l = l || "0"), (o = o || "0"))
              : e.isHorizontal()
              ? ((l = n), (o = "0"))
              : ((o = n), (l = "0")),
            (l =
              l.indexOf("%") >= 0
                ? parseInt(l, 10) * s * r + "%"
                : l * s * r + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
            null != p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        i = () => {
          const { $el: t, slides: s, progress: i, snapGrid: r } = e;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              a(e, i);
            }),
            s.each((t, s) => {
              let n = t.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (n += Math.ceil(s / 2) - i * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                d(t)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    a(e, n);
                  });
            });
        };
      s("beforeInit", () => {
        e.params.parallax.enabled &&
          ((e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0));
      }),
        s("init", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTranslate", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTransition", (t, s) => {
          e.params.parallax.enabled &&
            ((t = e.params.speed) => {
              const { $el: s } = e;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((e) => {
                const s = d(e);
                let a =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                0 === t && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      const i = r();
      t({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (e.zoom = { enabled: !1 });
      let n,
        l,
        o,
        c = 1,
        p = !1;
      const u = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        m = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        f = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let g = 1;
      function v(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function w(t) {
        const s = e.support,
          a = e.params.zoom;
        if (((l = !1), (o = !1), !s.gestures)) {
          if (
            "touchstart" !== t.type ||
            ("touchstart" === t.type && t.targetTouches.length < 2)
          )
            return;
          (l = !0), (u.scaleStart = v(t));
        }
        (u.$slideEl && u.$slideEl.length) ||
        ((u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
        0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${a.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)),
        (u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== u.$imageWrapEl.length)
          ? (u.$imageEl && u.$imageEl.transition(0), (p = !0))
          : (u.$imageEl = void 0);
      }
      function b(t) {
        const s = e.support,
          a = e.params.zoom,
          i = e.zoom;
        if (!s.gestures) {
          if (
            "touchmove" !== t.type ||
            ("touchmove" === t.type && t.targetTouches.length < 2)
          )
            return;
          (o = !0), (u.scaleMove = v(t));
        }
        u.$imageEl && 0 !== u.$imageEl.length
          ? (s.gestures
              ? (i.scale = t.scale * c)
              : (i.scale = (u.scaleMove / u.scaleStart) * c),
            i.scale > u.maxRatio &&
              (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio &&
              (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : "gesturechange" === t.type && w(t);
      }
      function x(t) {
        const s = e.device,
          a = e.support,
          i = e.params.zoom,
          r = e.zoom;
        if (!a.gestures) {
          if (!l || !o) return;
          if (
            "touchend" !== t.type ||
            ("touchend" === t.type && t.changedTouches.length < 2 && !s.android)
          )
            return;
          (l = !1), (o = !1);
        }
        u.$imageEl &&
          0 !== u.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio)),
          u.$imageEl
            .transition(e.params.speed)
            .transform(`translate3d(0,0,0) scale(${r.scale})`),
          (c = r.scale),
          (p = !1),
          1 === r.scale && (u.$slideEl = void 0));
      }
      function y(t) {
        const s = e.zoom;
        if (!u.$imageEl || 0 === u.$imageEl.length) return;
        if (((e.allowClick = !1), !m.isTouched || !u.$slideEl)) return;
        m.isMoved ||
          ((m.width = u.$imageEl[0].offsetWidth),
          (m.height = u.$imageEl[0].offsetHeight),
          (m.startX = h(u.$imageWrapEl[0], "x") || 0),
          (m.startY = h(u.$imageWrapEl[0], "y") || 0),
          (u.slideWidth = u.$slideEl[0].offsetWidth),
          (u.slideHeight = u.$slideEl[0].offsetHeight),
          u.$imageWrapEl.transition(0));
        const a = m.width * s.scale,
          i = m.height * s.scale;
        if (!(a < u.slideWidth && i < u.slideHeight)) {
          if (
            ((m.minX = Math.min(u.slideWidth / 2 - a / 2, 0)),
            (m.maxX = -m.minX),
            (m.minY = Math.min(u.slideHeight / 2 - i / 2, 0)),
            (m.maxY = -m.minY),
            (m.touchesCurrent.x =
              "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
            (m.touchesCurrent.y =
              "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
            !m.isMoved && !p)
          ) {
            if (
              e.isHorizontal() &&
              ((Math.floor(m.minX) === Math.floor(m.startX) &&
                m.touchesCurrent.x < m.touchesStart.x) ||
                (Math.floor(m.maxX) === Math.floor(m.startX) &&
                  m.touchesCurrent.x > m.touchesStart.x))
            )
              return void (m.isTouched = !1);
            if (
              !e.isHorizontal() &&
              ((Math.floor(m.minY) === Math.floor(m.startY) &&
                m.touchesCurrent.y < m.touchesStart.y) ||
                (Math.floor(m.maxY) === Math.floor(m.startY) &&
                  m.touchesCurrent.y > m.touchesStart.y))
            )
              return void (m.isTouched = !1);
          }
          t.cancelable && t.preventDefault(),
            t.stopPropagation(),
            (m.isMoved = !0),
            (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
            (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
            m.currentX < m.minX &&
              (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
            m.currentX > m.maxX &&
              (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
            m.currentY < m.minY &&
              (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
            m.currentY > m.maxY &&
              (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
            f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x),
            f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y),
            f.prevTime || (f.prevTime = Date.now()),
            (f.x =
              (m.touchesCurrent.x - f.prevPositionX) /
              (Date.now() - f.prevTime) /
              2),
            (f.y =
              (m.touchesCurrent.y - f.prevPositionY) /
              (Date.now() - f.prevTime) /
              2),
            Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
            Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
            (f.prevPositionX = m.touchesCurrent.x),
            (f.prevPositionY = m.touchesCurrent.y),
            (f.prevTime = Date.now()),
            u.$imageWrapEl.transform(
              `translate3d(${m.currentX}px, ${m.currentY}px,0)`
            );
        }
      }
      function E() {
        const t = e.zoom;
        u.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (c = 1),
          (u.$slideEl = void 0),
          (u.$imageEl = void 0),
          (u.$imageWrapEl = void 0));
      }
      function T(t) {
        const s = e.zoom,
          a = e.params.zoom;
        if (
          (u.$slideEl ||
            (t &&
              t.target &&
              (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
            u.$slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (u.$slideEl = e.$wrapperEl.children(
                    `.${e.params.slideActiveClass}`
                  ))
                : (u.$slideEl = e.slides.eq(e.activeIndex))),
            (u.$imageEl = u.$slideEl
              .find(`.${a.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`))),
          !u.$imageEl ||
            0 === u.$imageEl.length ||
            !u.$imageWrapEl ||
            0 === u.$imageWrapEl.length)
        )
          return;
        let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
        e.params.cssMode &&
          ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.touchAction = "none")),
          u.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === m.touchesStart.x && t
            ? ((r =
                "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
              (n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
            : ((r = m.touchesStart.x), (n = m.touchesStart.y)),
          (s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          (c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          t
            ? (($ = u.$slideEl[0].offsetWidth),
              (S = u.$slideEl[0].offsetHeight),
              (l = u.$slideEl.offset().left + i.scrollX),
              (o = u.$slideEl.offset().top + i.scrollY),
              (p = l + $ / 2 - r),
              (h = o + S / 2 - n),
              (v = u.$imageEl[0].offsetWidth),
              (w = u.$imageEl[0].offsetHeight),
              (b = v * s.scale),
              (x = w * s.scale),
              (y = Math.min($ / 2 - b / 2, 0)),
              (E = Math.min(S / 2 - x / 2, 0)),
              (T = -y),
              (C = -E),
              (f = p * s.scale),
              (g = h * s.scale),
              f < y && (f = y),
              f > T && (f = T),
              g < E && (g = E),
              g > C && (g = C))
            : ((f = 0), (g = 0)),
          u.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${f}px, ${g}px,0)`),
          u.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function C() {
        const t = e.zoom,
          s = e.params.zoom;
        u.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (u.$slideEl = e.$wrapperEl.children(
                `.${e.params.slideActiveClass}`
              ))
            : (u.$slideEl = e.slides.eq(e.activeIndex)),
          (u.$imageEl = u.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`))),
          u.$imageEl &&
            0 !== u.$imageEl.length &&
            u.$imageWrapEl &&
            0 !== u.$imageWrapEl.length &&
            (e.params.cssMode &&
              ((e.wrapperEl.style.overflow = ""),
              (e.wrapperEl.style.touchAction = "")),
            (t.scale = 1),
            (c = 1),
            u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            u.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (u.$slideEl = void 0));
      }
      function $(t) {
        const s = e.zoom;
        s.scale && 1 !== s.scale ? C() : T(t);
      }
      function S() {
        const t = e.support;
        return {
          passiveListener: !(
            "touchstart" !== e.touchEvents.start ||
            !t.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !t.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function M() {
        return `.${e.params.slideClass}`;
      }
      function P(t) {
        const { passiveListener: s } = S(),
          a = M();
        e.$wrapperEl[t]("gesturestart", a, w, s),
          e.$wrapperEl[t]("gesturechange", a, b, s),
          e.$wrapperEl[t]("gestureend", a, x, s);
      }
      function k() {
        n || ((n = !0), P("on"));
      }
      function z() {
        n && ((n = !1), P("off"));
      }
      function O() {
        const t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const s = e.support,
          { passiveListener: a, activeListenerWithCapture: i } = S(),
          r = M();
        s.gestures
          ? (e.$wrapperEl.on(e.touchEvents.start, k, a),
            e.$wrapperEl.on(e.touchEvents.end, z, a))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.on(e.touchEvents.start, r, w, a),
            e.$wrapperEl.on(e.touchEvents.move, r, b, i),
            e.$wrapperEl.on(e.touchEvents.end, r, x, a),
            e.touchEvents.cancel &&
              e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)),
          e.$wrapperEl.on(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            y,
            i
          );
      }
      function I() {
        const t = e.zoom;
        if (!t.enabled) return;
        const s = e.support;
        t.enabled = !1;
        const { passiveListener: a, activeListenerWithCapture: i } = S(),
          r = M();
        s.gestures
          ? (e.$wrapperEl.off(e.touchEvents.start, k, a),
            e.$wrapperEl.off(e.touchEvents.end, z, a))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.off(e.touchEvents.start, r, w, a),
            e.$wrapperEl.off(e.touchEvents.move, r, b, i),
            e.$wrapperEl.off(e.touchEvents.end, r, x, a),
            e.touchEvents.cancel &&
              e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)),
          e.$wrapperEl.off(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            y,
            i
          );
      }
      Object.defineProperty(e.zoom, "scale", {
        get: () => g,
        set(e) {
          if (g !== e) {
            const t = u.$imageEl ? u.$imageEl[0] : void 0,
              s = u.$slideEl ? u.$slideEl[0] : void 0;
            a("zoomChange", e, t, s);
          }
          g = e;
        },
      }),
        s("init", () => {
          e.params.zoom.enabled && O();
        }),
        s("destroy", () => {
          I();
        }),
        s("touchStart", (t, s) => {
          e.zoom.enabled &&
            (function (t) {
              const s = e.device;
              u.$imageEl &&
                0 !== u.$imageEl.length &&
                (m.isTouched ||
                  (s.android && t.cancelable && t.preventDefault(),
                  (m.isTouched = !0),
                  (m.touchesStart.x =
                    "touchstart" === t.type
                      ? t.targetTouches[0].pageX
                      : t.pageX),
                  (m.touchesStart.y =
                    "touchstart" === t.type
                      ? t.targetTouches[0].pageY
                      : t.pageY)));
            })(s);
        }),
        s("touchEnd", (t, s) => {
          e.zoom.enabled &&
            (function () {
              const t = e.zoom;
              if (!u.$imageEl || 0 === u.$imageEl.length) return;
              if (!m.isTouched || !m.isMoved)
                return (m.isTouched = !1), void (m.isMoved = !1);
              (m.isTouched = !1), (m.isMoved = !1);
              let s = 300,
                a = 300;
              const i = f.x * s,
                r = m.currentX + i,
                n = f.y * a,
                l = m.currentY + n;
              0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)),
                0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
              const o = Math.max(s, a);
              (m.currentX = r), (m.currentY = l);
              const d = m.width * t.scale,
                c = m.height * t.scale;
              (m.minX = Math.min(u.slideWidth / 2 - d / 2, 0)),
                (m.maxX = -m.minX),
                (m.minY = Math.min(u.slideHeight / 2 - c / 2, 0)),
                (m.maxY = -m.minY),
                (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                u.$imageWrapEl
                  .transition(o)
                  .transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
            })();
        }),
        s("doubleTap", (t, s) => {
          !e.animating &&
            e.params.zoom.enabled &&
            e.zoom.enabled &&
            e.params.zoom.toggle &&
            $(s);
        }),
        s("transitionEnd", () => {
          e.zoom.enabled && e.params.zoom.enabled && E();
        }),
        s("slideChange", () => {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E();
        }),
        Object.assign(e.zoom, {
          enable: O,
          disable: I,
          in: T,
          out: C,
          toggle: $,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      t({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (e.lazy = {});
      let i = !1,
        n = !1;
      function l(t, s = !0) {
        const i = e.params.lazy;
        if (void 0 === t) return;
        if (0 === e.slides.length) return;
        const r =
            e.virtual && e.params.virtual.enabled
              ? e.$wrapperEl.children(
                  `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                )
              : e.slides.eq(t),
          n = r.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !r.hasClass(i.elementClass) ||
          r.hasClass(i.loadedClass) ||
          r.hasClass(i.loadingClass) ||
          n.push(r[0]),
          0 !== n.length &&
            n.each((t) => {
              const n = d(t);
              n.addClass(i.loadingClass);
              const o = n.attr("data-background"),
                c = n.attr("data-src"),
                p = n.attr("data-srcset"),
                u = n.attr("data-sizes"),
                h = n.parent("picture");
              e.loadImage(n[0], c || o, p, u, !1, () => {
                if (null != e && e && (!e || e.params) && !e.destroyed) {
                  if (
                    (o
                      ? (n.css("background-image", `url("${o}")`),
                        n.removeAttr("data-background"))
                      : (p &&
                          (n.attr("srcset", p), n.removeAttr("data-srcset")),
                        u && (n.attr("sizes", u), n.removeAttr("data-sizes")),
                        h.length &&
                          h.children("source").each((e) => {
                            const t = d(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (n.attr("src", c), n.removeAttr("data-src"))),
                    n.addClass(i.loadedClass).removeClass(i.loadingClass),
                    r.find(`.${i.preloaderClass}`).remove(),
                    e.params.loop && s)
                  ) {
                    const t = r.attr("data-swiper-slide-index");
                    if (r.hasClass(e.params.slideDuplicateClass)) {
                      l(
                        e.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      l(
                        e.$wrapperEl
                          .children(
                            `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  a("lazyImageReady", r[0], n[0]),
                    e.params.autoHeight && e.updateAutoHeight();
                }
              }),
                a("lazyImageLoad", r[0], n[0]);
            });
      }
      function o() {
        const { $wrapperEl: t, params: s, slides: a, activeIndex: i } = e,
          r = e.virtual && s.virtual.enabled,
          o = s.lazy;
        let c = s.slidesPerView;
        function p(e) {
          if (r) {
            if (
              t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
        }
        if (
          ("auto" === c && (c = 0), n || (n = !0), e.params.watchSlidesProgress)
        )
          t.children(`.${s.slideVisibleClass}`).each((e) => {
            l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && l(e);
        else l(i);
        if (o.loadPrevNext)
          if (c > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            const e = o.loadPrevNextAmount,
              t = c,
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + c; e < s; e += 1) p(e) && l(e);
            for (let e = r; e < i; e += 1) p(e) && l(e);
          } else {
            const e = t.children(`.${s.slideNextClass}`);
            e.length > 0 && l(u(e));
            const a = t.children(`.${s.slidePrevClass}`);
            a.length > 0 && l(u(a));
          }
      }
      function c() {
        const t = r();
        if (!e || e.destroyed) return;
        const s = e.params.lazy.scrollingElement
            ? d(e.params.lazy.scrollingElement)
            : d(t),
          a = s[0] === t,
          n = a ? t.innerWidth : s[0].offsetWidth,
          l = a ? t.innerHeight : s[0].offsetHeight,
          p = e.$el.offset(),
          { rtlTranslate: u } = e;
        let h = !1;
        u && (p.left -= e.$el[0].scrollLeft);
        const m = [
          [p.left, p.top],
          [p.left + e.width, p.top],
          [p.left, p.top + e.height],
          [p.left + e.width, p.top + e.height],
        ];
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }
        const f = !(
          "touchstart" !== e.touchEvents.start ||
          !e.support.passiveListener ||
          !e.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        h
          ? (o(), s.off("scroll", c, f))
          : i || ((i = !0), s.on("scroll", c, f));
      }
      s("beforeInit", () => {
        e.params.lazy.enabled &&
          e.params.preloadImages &&
          (e.params.preloadImages = !1);
      }),
        s("init", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
        }),
        s("scroll", () => {
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.freeMode.sticky &&
            o();
        }),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
        }),
        s("transitionStart", () => {
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart && !n)) &&
            (e.params.lazy.checkInView ? c() : o());
        }),
        s("transitionEnd", () => {
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            (e.params.lazy.checkInView ? c() : o());
        }),
        s("slideChange", () => {
          const {
            lazy: t,
            cssMode: s,
            watchSlidesProgress: a,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = e.params;
          t.enabled && (s || (a && (i || 0 === r))) && o();
        }),
        Object.assign(e.lazy, { load: o, loadInSlide: l });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      function a(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function i() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        s("beforeInit", () => {
          e.controller.control = e.params.controller.control;
        }),
        s("update", () => {
          i();
        }),
        s("resize", () => {
          i();
        }),
        s("observerUpdate", () => {
          i();
        }),
        s("setTranslate", (t, s, a) => {
          e.controller.control && e.controller.setTranslate(s, a);
        }),
        s("setTransition", (t, s, a) => {
          e.controller.control && e.controller.setTransition(s, a);
        }),
        Object.assign(e.controller, {
          setTranslate: function (t, s) {
            const i = e.controller.control;
            let r, n;
            const l = e.constructor;
            function o(t) {
              const s = e.rtlTranslate ? -e.translate : e.translate;
              "slide" === e.params.controller.by &&
                (!(function (t) {
                  e.controller.spline ||
                    (e.controller.spline = e.params.loop
                      ? new a(e.slidesGrid, t.slidesGrid)
                      : new a(e.snapGrid, t.snapGrid));
                })(t),
                (n = -e.controller.spline.interpolate(-s))),
                (n && "container" !== e.params.controller.by) ||
                  ((r =
                    (t.maxTranslate() - t.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (n = (s - e.minTranslate()) * r + t.minTranslate())),
                e.params.controller.inverse && (n = t.maxTranslate() - n),
                t.updateProgress(n),
                t.setTranslate(n, e),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let e = 0; e < i.length; e += 1)
                i[e] !== s && i[e] instanceof l && o(i[e]);
            else i instanceof l && s !== i && o(i);
          },
          setTransition: function (t, s) {
            const a = e.constructor,
              i = e.controller.control;
            let r;
            function n(s) {
              s.setTransition(t, e),
                0 !== t &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    p(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        "slide" === e.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
        },
      });
      let a = null;
      function i(e) {
        const t = a;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function r(e) {
        e.attr("tabIndex", "0");
      }
      function n(e) {
        e.attr("tabIndex", "-1");
      }
      function l(e, t) {
        e.attr("role", t);
      }
      function o(e, t) {
        e.attr("aria-roledescription", t);
      }
      function c(e, t) {
        e.attr("aria-label", t);
      }
      function p(e) {
        e.attr("aria-disabled", !0);
      }
      function u(e) {
        e.attr("aria-disabled", !1);
      }
      function h(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const s = e.params.a11y,
          a = d(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          a.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            a.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
          e.pagination &&
            a.is(W(e.params.pagination.bulletClass)) &&
            a[0].click();
      }
      function m() {
        if (e.params.loop || !e.navigation) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        s && s.length > 0 && (e.isBeginning ? (p(s), n(s)) : (u(s), r(s))),
          t && t.length > 0 && (e.isEnd ? (p(t), n(t)) : (u(t), r(t)));
      }
      function f() {
        return (
          e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length
        );
      }
      const g = (e, t, s) => {
        r(e),
          "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)),
          c(e, s),
          (function (e, t) {
            e.attr("aria-controls", t);
          })(e, t);
      };
      function v() {
        const t = e.params.a11y;
        e.$el.append(a);
        const s = e.$el;
        t.containerRoleDescriptionMessage &&
          o(s, t.containerRoleDescriptionMessage),
          t.containerMessage && c(s, t.containerMessage);
        const i = e.$wrapperEl,
          r =
            i.attr("id") ||
            `swiper-wrapper-${(function (e = 16) {
              return "x"
                .repeat(e)
                .replace(/x/g, () =>
                  Math.round(16 * Math.random()).toString(16)
                );
            })(16)}`,
          n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        var p;
        (p = r),
          i.attr("id", p),
          (function (e, t) {
            e.attr("aria-live", t);
          })(i, n),
          t.itemRoleDescriptionMessage &&
            o(d(e.slides), t.itemRoleDescriptionMessage),
          l(d(e.slides), t.slideRole);
        const u = e.params.loop
          ? e.slides.filter(
              (t) => !t.classList.contains(e.params.slideDuplicateClass)
            ).length
          : e.slides.length;
        let m, v;
        e.slides.each((s, a) => {
          const i = d(s),
            r = e.params.loop
              ? parseInt(i.attr("data-swiper-slide-index"), 10)
              : a;
          c(
            i,
            t.slideLabelMessage
              .replace(/\{\{index\}\}/, r + 1)
              .replace(/\{\{slidesLength\}\}/, u)
          );
        }),
          e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl),
          m && m.length && g(m, r, t.nextSlideMessage),
          v && v.length && g(v, r, t.prevSlideMessage),
          f() &&
            e.pagination.$el.on(
              "keydown",
              W(e.params.pagination.bulletClass),
              h
            );
      }
      s("beforeInit", () => {
        a = d(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        s("afterInit", () => {
          e.params.a11y.enabled && (v(), m());
        }),
        s("toEdge", () => {
          e.params.a11y.enabled && m();
        }),
        s("fromEdge", () => {
          e.params.a11y.enabled && m();
        }),
        s("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              f() &&
                e.pagination.bullets.each((s) => {
                  const a = d(s);
                  r(a),
                    e.params.pagination.renderBullet ||
                      (l(a, "button"),
                      c(
                        a,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          a.index() + 1
                        )
                      ));
                });
            })();
        }),
        s("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              let t, s;
              a && a.length > 0 && a.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (s = e.navigation.$prevEl),
                t && t.off("keydown", h),
                s && s.off("keydown", h),
                f() &&
                  e.pagination.$el.off(
                    "keydown",
                    W(e.params.pagination.bulletClass),
                    h
                  );
            })();
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
      });
      let a = !1,
        i = {};
      const n = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        l = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        o = (t, s) => {
          const i = r();
          if (!a || !e.params.history.enabled) return;
          let l;
          l = e.params.url ? new URL(e.params.url) : i.location;
          const o = e.slides.eq(s);
          let d = n(o.attr("data-history"));
          if (e.params.history.root.length > 0) {
            let s = e.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${t}/${d}`);
          } else l.pathname.includes(t) || (d = `${t}/${d}`);
          const c = i.history.state;
          (c && c.value === d) ||
            (e.params.history.replaceState
              ? i.history.replaceState({ value: d }, null, d)
              : i.history.pushState({ value: d }, null, d));
        },
        d = (t, s, a) => {
          if (s)
            for (let i = 0, r = e.slides.length; i < r; i += 1) {
              const r = e.slides.eq(i);
              if (
                n(r.attr("data-history")) === s &&
                !r.hasClass(e.params.slideDuplicateClass)
              ) {
                const s = r.index();
                e.slideTo(s, t, a);
              }
            }
          else e.slideTo(0, t, a);
        },
        c = () => {
          (i = l(e.params.url)), d(e.params.speed, e.paths.value, !1);
        };
      s("init", () => {
        e.params.history.enabled &&
          (() => {
            const t = r();
            if (e.params.history) {
              if (!t.history || !t.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              (a = !0),
                (i = l(e.params.url)),
                (i.key || i.value) &&
                  (d(0, i.value, e.params.runCallbacksOnInit),
                  e.params.history.replaceState ||
                    t.addEventListener("popstate", c));
            }
          })();
      }),
        s("destroy", () => {
          e.params.history.enabled &&
            (() => {
              const t = r();
              e.params.history.replaceState ||
                t.removeEventListener("popstate", c);
            })();
        }),
        s("transitionEnd _freeModeNoMomentumRelease", () => {
          a && o(e.params.history.key, e.activeIndex);
        }),
        s("slideChange", () => {
          a && e.params.cssMode && o(e.params.history.key, e.activeIndex);
        });
    },
    function ({ swiper: e, extendParams: t, emit: s, on: i }) {
      let n = !1;
      const l = a(),
        o = r();
      t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const c = () => {
          s("hashChange");
          const t = l.location.hash.replace("#", "");
          if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            const s = e.$wrapperEl
              .children(`.${e.params.slideClass}[data-hash="${t}"]`)
              .index();
            if (void 0 === s) return;
            e.slideTo(s);
          }
        },
        p = () => {
          if (n && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              o.history &&
              o.history.replaceState
            )
              o.history.replaceState(
                null,
                null,
                `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
              ),
                s("hashSet");
            else {
              const t = e.slides.eq(e.activeIndex),
                a = t.attr("data-hash") || t.attr("data-history");
              (l.location.hash = a || ""), s("hashSet");
            }
        };
      i("init", () => {
        e.params.hashNavigation.enabled &&
          (() => {
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            n = !0;
            const t = l.location.hash.replace("#", "");
            if (t) {
              const s = 0;
              for (let a = 0, i = e.slides.length; a < i; a += 1) {
                const i = e.slides.eq(a);
                if (
                  (i.attr("data-hash") || i.attr("data-history")) === t &&
                  !i.hasClass(e.params.slideDuplicateClass)
                ) {
                  const t = i.index();
                  e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                }
              }
            }
            e.params.hashNavigation.watchState && d(o).on("hashchange", c);
          })();
      }),
        i("destroy", () => {
          e.params.hashNavigation.enabled &&
            e.params.hashNavigation.watchState &&
            d(o).off("hashchange", c);
        }),
        i("transitionEnd _freeModeNoMomentumRelease", () => {
          n && p();
        }),
        i("slideChange", () => {
          n && e.params.cssMode && p();
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      let r;
      function n() {
        const t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(r),
          (r = p(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    i("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && n();
          }, s));
      }
      function l() {
        return (
          void 0 === r &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), i("autoplayStart"), n(), !0)
        );
      }
      function o() {
        return (
          !!e.autoplay.running &&
          void 0 !== r &&
          (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          i("autoplayStop"),
          !0)
        );
      }
      function d(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (r && clearTimeout(r),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, u);
                })
              : ((e.autoplay.paused = !1), n())));
      }
      function c() {
        const t = a();
        "hidden" === t.visibilityState && e.autoplay.running && d(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (n(), (e.autoplay.paused = !1));
      }
      function u(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? n() : o());
      }
      function h() {
        e.params.autoplay.disableOnInteraction ? o() : d(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          });
      }
      function m() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), n());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (e.params.autoplay.enabled) {
            l();
            a().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
          }
        }),
        s("beforeTransitionStart", (t, s, a) => {
          e.autoplay.running &&
            (a || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(s)
              : o());
        }),
        s("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? o() : d());
        }),
        s("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            n();
        }),
        s("destroy", () => {
          e.$el.off("mouseenter", h),
            e.$el.off("mouseleave", m),
            e.autoplay.running && o();
          a().removeEventListener("visibilitychange", c);
        }),
        Object.assign(e.autoplay, { pause: d, run: n, start: l, stop: o });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let a = !1,
        i = !1;
      function r() {
        const t = e.thumbs.swiper;
        if (!t) return;
        const s = t.clickedIndex,
          a = t.clickedSlide;
        if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (
          ((i = t.params.loop
            ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const s = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            a = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s;
        }
        e.slideTo(i);
      }
      function n() {
        const { thumbs: t } = e.params;
        if (a) return !1;
        a = !0;
        const s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (m(t.swiper)) {
          const a = Object.assign({}, t.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(a)),
            (i = !0);
        }
        return (
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", r),
          !0
        );
      }
      function l(t) {
        const s = e.thumbs.swiper;
        if (!s) return;
        const a =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          i = e.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;
        if (e.realIndex !== s.realIndex || r) {
          let n,
            l,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            const t = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index(),
              a = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index();
            (n =
              void 0 === t
                ? a
                : void 0 === a
                ? t
                : a - o == o - t
                ? s.params.slidesPerGroup > 1
                  ? a
                  : o
                : a - o < o - t
                ? a
                : t),
              (l = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (n = e.realIndex), (l = n > e.previousIndex ? "next" : "prev");
          r && (n += "next" === l ? i : -1 * i),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(n) < 0 &&
              (s.params.centeredSlides
                ? (n =
                    n > o
                      ? n - Math.floor(a / 2) + 1
                      : n + Math.floor(a / 2) - 1)
                : n > o && s.params.slidesPerGroup,
              s.slideTo(n, t ? 0 : void 0));
        }
        let n = 1;
        const l = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (n = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.removeClass(l),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let t = 0; t < n; t += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
              .addClass(l);
        else
          for (let t = 0; t < n; t += 1)
            s.slides.eq(e.realIndex + t).addClass(l);
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: t } = e.params;
          t && t.swiper && (n(), l(!0));
        }),
        s("slideChange update resize observerUpdate", () => {
          e.thumbs.swiper && l();
        }),
        s("setTransition", (t, s) => {
          const a = e.thumbs.swiper;
          a && a.setTransition(s);
        }),
        s("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && i && t && t.destroy();
        }),
        Object.assign(e.thumbs, { init: n, update: l });
    },
    function ({ swiper: e, extendParams: t, emit: s, once: a }) {
      t({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(e, {
          freeMode: {
            onTouchMove: function () {
              const { touchEventsData: t, touches: s } = e;
              0 === t.velocities.length &&
                t.velocities.push({
                  position: s[e.isHorizontal() ? "startX" : "startY"],
                  time: t.touchStartTime,
                }),
                t.velocities.push({
                  position: s[e.isHorizontal() ? "currentX" : "currentY"],
                  time: u(),
                });
            },
            onTouchEnd: function ({ currentPos: t }) {
              const {
                  params: i,
                  $wrapperEl: r,
                  rtlTranslate: n,
                  snapGrid: l,
                  touchEventsData: o,
                } = e,
                d = u() - o.touchStartTime;
              if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (t > -e.maxTranslate())
                e.slides.length < l.length
                  ? e.slideTo(l.length - 1)
                  : e.slideTo(e.slides.length - 1);
              else {
                if (i.freeMode.momentum) {
                  if (o.velocities.length > 1) {
                    const t = o.velocities.pop(),
                      s = o.velocities.pop(),
                      a = t.position - s.position,
                      r = t.time - s.time;
                    (e.velocity = a / r),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < i.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (r > 150 || u() - t.time > 300) && (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= i.freeMode.momentumVelocityRatio),
                    (o.velocities.length = 0);
                  let t = 1e3 * i.freeMode.momentumRatio;
                  const d = e.velocity * t;
                  let c = e.translate + d;
                  n && (c = -c);
                  let p,
                    h = !1;
                  const m =
                    20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                  let f;
                  if (c < e.maxTranslate())
                    i.freeMode.momentumBounce
                      ? (c + e.maxTranslate() < -m &&
                          (c = e.maxTranslate() - m),
                        (p = e.maxTranslate()),
                        (h = !0),
                        (o.allowMomentumBounce = !0))
                      : (c = e.maxTranslate()),
                      i.loop && i.centeredSlides && (f = !0);
                  else if (c > e.minTranslate())
                    i.freeMode.momentumBounce
                      ? (c - e.minTranslate() > m && (c = e.minTranslate() + m),
                        (p = e.minTranslate()),
                        (h = !0),
                        (o.allowMomentumBounce = !0))
                      : (c = e.minTranslate()),
                      i.loop && i.centeredSlides && (f = !0);
                  else if (i.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < l.length; e += 1)
                      if (l[e] > -c) {
                        t = e;
                        break;
                      }
                    (c =
                      Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) ||
                      "next" === e.swipeDirection
                        ? l[t]
                        : l[t - 1]),
                      (c = -c);
                  }
                  if (
                    (f &&
                      a("transitionEnd", () => {
                        e.loopFix();
                      }),
                    0 !== e.velocity)
                  ) {
                    if (
                      ((t = n
                        ? Math.abs((-c - e.translate) / e.velocity)
                        : Math.abs((c - e.translate) / e.velocity)),
                      i.freeMode.sticky)
                    ) {
                      const s = Math.abs((n ? -c : c) - e.translate),
                        a = e.slidesSizesGrid[e.activeIndex];
                      t =
                        s < a
                          ? i.speed
                          : s < 2 * a
                          ? 1.5 * i.speed
                          : 2.5 * i.speed;
                    }
                  } else if (i.freeMode.sticky) return void e.slideToClosest();
                  i.freeMode.momentumBounce && h
                    ? (e.updateProgress(p),
                      e.setTransition(t),
                      e.setTranslate(c),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      r.transitionEnd(() => {
                        e &&
                          !e.destroyed &&
                          o.allowMomentumBounce &&
                          (s("momentumBounce"),
                          e.setTransition(i.speed),
                          setTimeout(() => {
                            e.setTranslate(p),
                              r.transitionEnd(() => {
                                e && !e.destroyed && e.transitionEnd();
                              });
                          }, 0));
                      }))
                    : e.velocity
                    ? (s("_freeModeNoMomentumRelease"),
                      e.updateProgress(c),
                      e.setTransition(t),
                      e.setTranslate(c),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        r.transitionEnd(() => {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress(c),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else {
                  if (i.freeMode.sticky) return void e.slideToClosest();
                  i.freeMode && s("_freeModeNoMomentumRelease");
                }
                (!i.freeMode.momentum || d >= i.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              }
            },
          },
        });
    },
    function ({ swiper: e, extendParams: t }) {
      let s, a, i;
      t({ grid: { rows: 1, fill: "column" } }),
        (e.grid = {
          initSlides: (t) => {
            const { slidesPerView: r } = e.params,
              { rows: n, fill: l } = e.params.grid;
            (a = s / n),
              (i = Math.floor(t / n)),
              (s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n),
              "auto" !== r && "row" === l && (s = Math.max(s, r * n));
          },
          updateSlide: (t, r, n, l) => {
            const { slidesPerGroup: o, spaceBetween: d } = e.params,
              { rows: c, fill: p } = e.params.grid;
            let u, h, m;
            if ("row" === p && o > 1) {
              const e = Math.floor(t / (o * c)),
                a = t - c * o * e,
                i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
              (m = Math.floor(a / i)),
                (h = a - m * i + e * o),
                (u = h + (m * s) / c),
                r.css({ "-webkit-order": u, order: u });
            } else
              "column" === p
                ? ((h = Math.floor(t / c)),
                  (m = t - h * c),
                  (h > i || (h === i && m === c - 1)) &&
                    ((m += 1), m >= c && ((m = 0), (h += 1))))
                : ((m = Math.floor(t / a)), (h = t - m * a));
            r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
          },
          updateWrapperSize: (t, a, i) => {
            const {
                spaceBetween: r,
                centeredSlides: n,
                roundLengths: l,
              } = e.params,
              { rows: o } = e.params.grid;
            if (
              ((e.virtualSize = (t + r) * s),
              (e.virtualSize = Math.ceil(e.virtualSize / o) - r),
              e.$wrapperEl.css({ [i("width")]: `${e.virtualSize + r}px` }),
              n)
            ) {
              a.splice(0, a.length);
              const t = [];
              for (let s = 0; s < a.length; s += 1) {
                let i = a[s];
                l && (i = Math.floor(i)),
                  a[s] < e.virtualSize + a[0] && t.push(i);
              }
              a.push(...t);
            }
          },
        });
    },
    function ({ swiper: e }) {
      Object.assign(e, {
        appendSlide: R.bind(e),
        prependSlide: j.bind(e),
        addSlide: _.bind(e),
        removeSlide: V.bind(e),
        removeAllSlides: q.bind(e),
      });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } }),
        F({
          effect: "fade",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t } = e,
              s = e.params.fadeEffect;
            for (let a = 0; a < t.length; a += 1) {
              const t = e.slides.eq(a);
              let i = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (i -= e.translate);
              let r = 0;
              e.isHorizontal() || ((r = i), (i = 0));
              const n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              U(s, t)
                .css({ opacity: n })
                .transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.fadeEffect;
            (s ? e.slides.find(s) : e.slides).transition(t),
              K({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      }),
        F({
          effect: "cube",
          swiper: e,
          on: s,
          setTranslate: () => {
            const {
                $el: t,
                $wrapperEl: s,
                slides: a,
                width: i,
                height: r,
                rtlTranslate: n,
                size: l,
                browser: o,
              } = e,
              c = e.params.cubeEffect,
              p = e.isHorizontal(),
              u = e.virtual && e.params.virtual.enabled;
            let h,
              m = 0;
            c.shadow &&
              (p
                ? ((h = s.find(".swiper-cube-shadow")),
                  0 === h.length &&
                    ((h = d('<div class="swiper-cube-shadow"></div>')),
                    s.append(h)),
                  h.css({ height: `${i}px` }))
                : ((h = t.find(".swiper-cube-shadow")),
                  0 === h.length &&
                    ((h = d('<div class="swiper-cube-shadow"></div>')),
                    t.append(h))));
            for (let e = 0; e < a.length; e += 1) {
              const t = a.eq(e);
              let s = e;
              u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
              let i = 90 * s,
                r = Math.floor(i / 360);
              n && ((i = -i), (r = Math.floor(-i / 360)));
              const o = Math.max(Math.min(t[0].progress, 1), -1);
              let h = 0,
                f = 0,
                g = 0;
              s % 4 == 0
                ? ((h = 4 * -r * l), (g = 0))
                : (s - 1) % 4 == 0
                ? ((h = 0), (g = 4 * -r * l))
                : (s - 2) % 4 == 0
                ? ((h = l + 4 * r * l), (g = l))
                : (s - 3) % 4 == 0 && ((h = -l), (g = 3 * l + 4 * l * r)),
                n && (h = -h),
                p || ((f = h), (h = 0));
              const v = `rotateX(${p ? 0 : -i}deg) rotateY(${
                p ? i : 0
              }deg) translate3d(${h}px, ${f}px, ${g}px)`;
              if (
                (o <= 1 &&
                  o > -1 &&
                  ((m = 90 * s + 90 * o), n && (m = 90 * -s - 90 * o)),
                t.transform(v),
                c.slideShadows)
              ) {
                let e = p
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  s = p
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = d(
                    `<div class="swiper-slide-shadow-${
                      p ? "left" : "top"
                    }"></div>`
                  )),
                  t.append(e)),
                  0 === s.length &&
                    ((s = d(
                      `<div class="swiper-slide-shadow-${
                        p ? "right" : "bottom"
                      }"></div>`
                    )),
                    t.append(s)),
                  e.length && (e[0].style.opacity = Math.max(-o, 0)),
                  s.length && (s[0].style.opacity = Math.max(o, 0));
              }
            }
            if (
              (s.css({
                "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                "transform-origin": `50% 50% -${l / 2}px`,
              }),
              c.shadow)
            )
              if (p)
                h.transform(
                  `translate3d(0px, ${i / 2 + c.shadowOffset}px, ${
                    -i / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`
                );
              else {
                const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  s = c.shadowScale,
                  a = c.shadowScale / t,
                  i = c.shadowOffset;
                h.transform(
                  `scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${
                    -r / 2 / a
                  }px) rotateX(-90deg)`
                );
              }
            const f = o.isSafari || o.isWebView ? -l / 2 : 0;
            s.transform(
              `translate3d(0px,0,${f}px) rotateX(${
                e.isHorizontal() ? 0 : m
              }deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`
            );
          },
          setTransition: (t) => {
            const { $el: s, slides: a } = e;
            a
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              e.params.cubeEffect.shadow &&
                !e.isHorizontal() &&
                s.find(".swiper-cube-shadow").transition(t);
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      }),
        F({
          effect: "flip",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t, rtlTranslate: s } = e,
              a = e.params.flipEffect;
            for (let i = 0; i < t.length; i += 1) {
              const r = t.eq(i);
              let n = r[0].progress;
              e.params.flipEffect.limitRotation &&
                (n = Math.max(Math.min(r[0].progress, 1), -1));
              const l = r[0].swiperSlideOffset;
              let o = -180 * n,
                d = 0,
                c = e.params.cssMode ? -l - e.translate : -l,
                p = 0;
              if (
                (e.isHorizontal()
                  ? s && (o = -o)
                  : ((p = c), (c = 0), (d = -o), (o = 0)),
                (r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
                a.slideShadows)
              ) {
                let t = e.isHorizontal()
                    ? r.find(".swiper-slide-shadow-left")
                    : r.find(".swiper-slide-shadow-top"),
                  s = e.isHorizontal()
                    ? r.find(".swiper-slide-shadow-right")
                    : r.find(".swiper-slide-shadow-bottom");
                0 === t.length &&
                  (t = Z(a, r, e.isHorizontal() ? "left" : "top")),
                  0 === s.length &&
                    (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")),
                  t.length && (t[0].style.opacity = Math.max(-n, 0)),
                  s.length && (s[0].style.opacity = Math.max(n, 0));
              }
              const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
              U(a, r).transform(u);
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.flipEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              K({ swiper: e, duration: t, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        F({
          effect: "coverflow",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { width: t, height: s, slides: a, slidesSizesGrid: i } = e,
              r = e.params.coverflowEffect,
              n = e.isHorizontal(),
              l = e.translate,
              o = n ? t / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a.eq(e),
                s = i[e],
                l = ((o - t[0].swiperSlideOffset - s / 2) / s) * r.modifier;
              let p = n ? d * l : 0,
                u = n ? 0 : d * l,
                h = -c * Math.abs(l),
                m = r.stretch;
              "string" == typeof m &&
                -1 !== m.indexOf("%") &&
                (m = (parseFloat(r.stretch) / 100) * s);
              let f = n ? 0 : m * l,
                g = n ? m * l : 0,
                v = 1 - (1 - r.scale) * Math.abs(l);
              Math.abs(g) < 0.001 && (g = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(p) < 0.001 && (p = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(v) < 0.001 && (v = 0);
              const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
              if (
                (U(r, t).transform(w),
                (t[0].style.zIndex = 1 - Math.abs(Math.round(l))),
                r.slideShadows)
              ) {
                let e = n
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  s = n
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length && (e = Z(r, t, n ? "left" : "top")),
                  0 === s.length && (s = Z(r, t, n ? "right" : "bottom")),
                  e.length && (e[0].style.opacity = l > 0 ? l : 0),
                  s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
              }
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.coverflowEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const a = (e) => ("string" == typeof e ? e : `${e}px`);
      F({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t, $wrapperEl: s, slidesSizesGrid: i } = e,
            r = e.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = e.params.centeredSlides;
          if (l) {
            const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${t}px))`);
          }
          for (let s = 0; s < t.length; s += 1) {
            const i = t.eq(s),
              o = i[0].progress,
              d = Math.min(
                Math.max(i[0].progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(i[0].originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = i[0].swiperSlideOffset,
              u = [e.params.cssMode ? -p - e.translate : -p, 0, 0],
              h = [0, 0, 0];
            let m = !1;
            e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (m = !0))
              : d > 0 && ((f = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              h.forEach((e, t) => {
                h[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length);
            const g = u.join(", "),
              v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              x = `translate3d(${g}) ${v} ${w}`;
            if ((m && f.shadow) || !m) {
              let e = i.children(".swiper-slide-shadow");
              if ((0 === e.length && f.shadow && (e = Z(r, i)), e.length)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const y = U(r, i);
            y.transform(x).css({ opacity: b }),
              f.origin && y.css("transform-origin", f.origin);
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.creativeEffect;
          (s ? e.slides.find(s) : e.slides)
            .transition(t)
            .find(".swiper-slide-shadow")
            .transition(t),
            K({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
        },
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ cardsEffect: { slideShadows: !0, transformEl: null } }),
        F({
          effect: "cards",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t, activeIndex: s } = e,
              a = e.params.cardsEffect,
              { startTranslate: i, isTouched: r } = e.touchEventsData,
              n = e.translate;
            for (let l = 0; l < t.length; l += 1) {
              const o = t.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
              let p = o[0].swiperSlideOffset;
              e.params.centeredSlides &&
                !e.params.cssMode &&
                e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides &&
                  e.params.cssMode &&
                  (p -= t[0].swiperSlideOffset);
              let u = e.params.cssMode ? -p - e.translate : -p,
                h = 0;
              const m = -100 * Math.abs(c);
              let f = 1,
                g = -2 * c,
                v = 8 - 0.75 * Math.abs(c);
              const w =
                  (l === s || l === s - 1) &&
                  c > 0 &&
                  c < 1 &&
                  (r || e.params.cssMode) &&
                  n < i,
                b =
                  (l === s || l === s + 1) &&
                  c < 0 &&
                  c > -1 &&
                  (r || e.params.cssMode) &&
                  n > i;
              if (w || b) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * c * e),
                  (f += -0.5 * e),
                  (v += 96 * e),
                  (h = -25 * e * Math.abs(c) + "%");
              }
              if (
                ((u =
                  c < 0
                    ? `calc(${u}px + (${v * Math.abs(c)}%))`
                    : c > 0
                    ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                    : `${u}px`),
                !e.isHorizontal())
              ) {
                const e = h;
                (h = u), (u = e);
              }
              const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${
                c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)
              })\n      `;
              if (a.slideShadows) {
                let e = o.find(".swiper-slide-shadow");
                0 === e.length && (e = Z(a, o)),
                  e.length &&
                    (e[0].style.opacity = Math.min(
                      Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
              U(a, o).transform(x);
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.cardsEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(".swiper-slide-shadow")
              .transition(t),
              K({ swiper: e, duration: t, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
  ];
  return H.use(J), H;
});

const banner_swiper = new Swiper(".swiper-banner", {
  slidesPerView: 1,
  SlidesPerGroup: 1,
  autoplay: true,
  loop: true
});

const team_swiper = new Swiper(".swiper-team", {
  slidesPerView: 3,
  spaceBetween: 16,
  SlidesPerGroup: 1,
  autoplay: false,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: ".next-member",
    prevEl: ".prev-member",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    810: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

const partner_swiper = new Swiper(".swiper-partner", {
  slidesPerView: 5,
  SlidesPerGroup: 1,
  spaceBetween: 60,
  autoplay: true,
  loop: true,
});

const login_swiper = new Swiper(".swiper-login", {
  slidesPerView: 1,
  spaceBetween: 64,
  SlidesPerGroup: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 64,
    },
    810: {
      slidesPerView: 1,
      spaceBetween: 64,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 64,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = jQuery("#calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "fr",
    initialView: "dayGridMonth",
    selectable: true,
    headerToolbar: {
      center: "title",
    },
    dateClick: function (info) {
      alert("clicked " + info.dateStr);
    },
    // select: function (info) {
    //   alert("selected " + info.startStr + " to " + info.endStr);
    // },
  });
  calendar.render();
});

jQuery(".to-student-information").on("click", function (event) {
  event.preventDefault();
  jQuery("#professor-student").css("display", "none");
  jQuery("#informations-student-parent").css("display", "flex");
});

jQuery(".to-professor-information").on("click", function (event) {
  event.preventDefault();
  jQuery("#professor-student").css("display", "none");
  jQuery("#informations-professor").css("display", "flex");
});



jQuery(".signup-professor").on("click", function (event) {
  event.preventDefault();
  jQuery("#informations-professor").css("display", "none");
  jQuery("#choix-cours").css("display", "flex");
});

jQuery(".signup-student").on("click", function (event) {
  event.preventDefault();
  jQuery("#informations-student-parent").css("display", "none");
  jQuery("#cours-type").css("display", "flex");
});

jQuery(".to-success-registration").on("click", function (event) {
  event.preventDefault();
  jQuery("#choix-cours-student").css("display", "none");
  jQuery(".success-registration").css("display", "flex");
});

jQuery(".to-choix-cours").on("click", function (event) {
  event.preventDefault();
  jQuery("#cours-type").css("display", "none");
  jQuery("#choix-cours-student").css("display", "flex");
});