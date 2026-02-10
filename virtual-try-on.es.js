var Cf = { exports: {} }, Dn = {};
var Jd;
function dv() {
  if (Jd) return Dn;
  Jd = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(f, d, h) {
    var S = null;
    if (h !== void 0 && (S = "" + h), d.key !== void 0 && (S = "" + d.key), "key" in d) {
      h = {};
      for (var C in d)
        C !== "key" && (h[C] = d[C]);
    } else h = d;
    return d = h.ref, {
      $$typeof: c,
      type: f,
      key: S,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return Dn.Fragment = o, Dn.jsx = s, Dn.jsxs = s, Dn;
}
var kd;
function mv() {
  return kd || (kd = 1, Cf.exports = dv()), Cf.exports;
}
var j = mv(), _f = { exports: {} }, I = {};
var $d;
function hv() {
  if ($d) return I;
  $d = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), M = Symbol.iterator;
  function B(p) {
    return p === null || typeof p != "object" ? null : (p = M && p[M] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var X = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, V = Object.assign, q = {};
  function Y(p, H, G) {
    this.props = p, this.context = H, this.refs = q, this.updater = G || X;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(p, H) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, H, "setState");
  }, Y.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function L() {
  }
  L.prototype = Y.prototype;
  function J(p, H, G) {
    this.props = p, this.context = H, this.refs = q, this.updater = G || X;
  }
  var ot = J.prototype = new L();
  ot.constructor = J, V(ot, Y.prototype), ot.isPureReactComponent = !0;
  var mt = Array.isArray;
  function xt() {
  }
  var F = { H: null, A: null, T: null, S: null }, Dt = Object.prototype.hasOwnProperty;
  function wt(p, H, G) {
    var Z = G.ref;
    return {
      $$typeof: c,
      type: p,
      key: H,
      ref: Z !== void 0 ? Z : null,
      props: G
    };
  }
  function me(p, H) {
    return wt(p.type, H, p.props);
  }
  function Oe(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function $t(p) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(G) {
      return H[G];
    });
  }
  var Rl = /\/+/g;
  function He(p, H) {
    return typeof p == "object" && p !== null && p.key != null ? $t("" + p.key) : H.toString(36);
  }
  function Ae(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(xt, xt) : (p.status = "pending", p.then(
          function(H) {
            p.status === "pending" && (p.status = "fulfilled", p.value = H);
          },
          function(H) {
            p.status === "pending" && (p.status = "rejected", p.reason = H);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function O(p, H, G, Z, P) {
    var lt = typeof p;
    (lt === "undefined" || lt === "boolean") && (p = null);
    var dt = !1;
    if (p === null) dt = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case o:
              dt = !0;
              break;
            case _:
              return dt = p._init, O(
                dt(p._payload),
                H,
                G,
                Z,
                P
              );
          }
      }
    if (dt)
      return P = P(p), dt = Z === "" ? "." + He(p, 0) : Z, mt(P) ? (G = "", dt != null && (G = dt.replace(Rl, "$&/") + "/"), O(P, H, G, "", function(ja) {
        return ja;
      })) : P != null && (Oe(P) && (P = me(
        P,
        G + (P.key == null || p && p.key === P.key ? "" : ("" + P.key).replace(
          Rl,
          "$&/"
        ) + "/") + dt
      )), H.push(P)), 1;
    dt = 0;
    var Jt = Z === "" ? "." : Z + ":";
    if (mt(p))
      for (var Rt = 0; Rt < p.length; Rt++)
        Z = p[Rt], lt = Jt + He(Z, Rt), dt += O(
          Z,
          H,
          G,
          lt,
          P
        );
    else if (Rt = B(p), typeof Rt == "function")
      for (p = Rt.call(p), Rt = 0; !(Z = p.next()).done; )
        Z = Z.value, lt = Jt + He(Z, Rt++), dt += O(
          Z,
          H,
          G,
          lt,
          P
        );
    else if (lt === "object") {
      if (typeof p.then == "function")
        return O(
          Ae(p),
          H,
          G,
          Z,
          P
        );
      throw H = String(p), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return dt;
  }
  function w(p, H, G) {
    if (p == null) return p;
    var Z = [], P = 0;
    return O(p, Z, "", "", function(lt) {
      return H.call(G, lt, P++);
    }), Z;
  }
  function W(p) {
    if (p._status === -1) {
      var H = p._result;
      H = H(), H.then(
        function(G) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = G);
        },
        function(G) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = G);
        }
      ), p._status === -1 && (p._status = 0, p._result = H);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var vt = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, bt = {
    map: w,
    forEach: function(p, H, G) {
      w(
        p,
        function() {
          H.apply(this, arguments);
        },
        G
      );
    },
    count: function(p) {
      var H = 0;
      return w(p, function() {
        H++;
      }), H;
    },
    toArray: function(p) {
      return w(p, function(H) {
        return H;
      }) || [];
    },
    only: function(p) {
      if (!Oe(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return I.Activity = E, I.Children = bt, I.Component = Y, I.Fragment = s, I.Profiler = d, I.PureComponent = J, I.StrictMode = f, I.Suspense = g, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, I.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return F.H.useMemoCache(p);
    }
  }, I.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, I.cacheSignal = function() {
    return null;
  }, I.cloneElement = function(p, H, G) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var Z = V({}, p.props), P = p.key;
    if (H != null)
      for (lt in H.key !== void 0 && (P = "" + H.key), H)
        !Dt.call(H, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && H.ref === void 0 || (Z[lt] = H[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) Z.children = G;
    else if (1 < lt) {
      for (var dt = Array(lt), Jt = 0; Jt < lt; Jt++)
        dt[Jt] = arguments[Jt + 2];
      Z.children = dt;
    }
    return wt(p.type, P, Z);
  }, I.createContext = function(p) {
    return p = {
      $$typeof: S,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: h,
      _context: p
    }, p;
  }, I.createElement = function(p, H, G) {
    var Z, P = {}, lt = null;
    if (H != null)
      for (Z in H.key !== void 0 && (lt = "" + H.key), H)
        Dt.call(H, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (P[Z] = H[Z]);
    var dt = arguments.length - 2;
    if (dt === 1) P.children = G;
    else if (1 < dt) {
      for (var Jt = Array(dt), Rt = 0; Rt < dt; Rt++)
        Jt[Rt] = arguments[Rt + 2];
      P.children = Jt;
    }
    if (p && p.defaultProps)
      for (Z in dt = p.defaultProps, dt)
        P[Z] === void 0 && (P[Z] = dt[Z]);
    return wt(p, lt, P);
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(p) {
    return { $$typeof: C, render: p };
  }, I.isValidElement = Oe, I.lazy = function(p) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: p },
      _init: W
    };
  }, I.memo = function(p, H) {
    return {
      $$typeof: y,
      type: p,
      compare: H === void 0 ? null : H
    };
  }, I.startTransition = function(p) {
    var H = F.T, G = {};
    F.T = G;
    try {
      var Z = p(), P = F.S;
      P !== null && P(G, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(xt, vt);
    } catch (lt) {
      vt(lt);
    } finally {
      H !== null && G.types !== null && (H.types = G.types), F.T = H;
    }
  }, I.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, I.use = function(p) {
    return F.H.use(p);
  }, I.useActionState = function(p, H, G) {
    return F.H.useActionState(p, H, G);
  }, I.useCallback = function(p, H) {
    return F.H.useCallback(p, H);
  }, I.useContext = function(p) {
    return F.H.useContext(p);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(p, H) {
    return F.H.useDeferredValue(p, H);
  }, I.useEffect = function(p, H) {
    return F.H.useEffect(p, H);
  }, I.useEffectEvent = function(p) {
    return F.H.useEffectEvent(p);
  }, I.useId = function() {
    return F.H.useId();
  }, I.useImperativeHandle = function(p, H, G) {
    return F.H.useImperativeHandle(p, H, G);
  }, I.useInsertionEffect = function(p, H) {
    return F.H.useInsertionEffect(p, H);
  }, I.useLayoutEffect = function(p, H) {
    return F.H.useLayoutEffect(p, H);
  }, I.useMemo = function(p, H) {
    return F.H.useMemo(p, H);
  }, I.useOptimistic = function(p, H) {
    return F.H.useOptimistic(p, H);
  }, I.useReducer = function(p, H, G) {
    return F.H.useReducer(p, H, G);
  }, I.useRef = function(p) {
    return F.H.useRef(p);
  }, I.useState = function(p) {
    return F.H.useState(p);
  }, I.useSyncExternalStore = function(p, H, G) {
    return F.H.useSyncExternalStore(
      p,
      H,
      G
    );
  }, I.useTransition = function() {
    return F.H.useTransition();
  }, I.version = "19.2.4", I;
}
var Wd;
function qf() {
  return Wd || (Wd = 1, _f.exports = hv()), _f.exports;
}
var z = qf(), Df = { exports: {} }, Rn = {}, Rf = { exports: {} }, Of = {};
var Fd;
function yv() {
  return Fd || (Fd = 1, (function(c) {
    function o(O, w) {
      var W = O.length;
      O.push(w);
      t: for (; 0 < W; ) {
        var vt = W - 1 >>> 1, bt = O[vt];
        if (0 < d(bt, w))
          O[vt] = w, O[W] = bt, W = vt;
        else break t;
      }
    }
    function s(O) {
      return O.length === 0 ? null : O[0];
    }
    function f(O) {
      if (O.length === 0) return null;
      var w = O[0], W = O.pop();
      if (W !== w) {
        O[0] = W;
        t: for (var vt = 0, bt = O.length, p = bt >>> 1; vt < p; ) {
          var H = 2 * (vt + 1) - 1, G = O[H], Z = H + 1, P = O[Z];
          if (0 > d(G, W))
            Z < bt && 0 > d(P, G) ? (O[vt] = P, O[Z] = W, vt = Z) : (O[vt] = G, O[H] = W, vt = H);
          else if (Z < bt && 0 > d(P, W))
            O[vt] = P, O[Z] = W, vt = Z;
          else break t;
        }
      }
      return w;
    }
    function d(O, w) {
      var W = O.sortIndex - w.sortIndex;
      return W !== 0 ? W : O.id - w.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      c.unstable_now = function() {
        return h.now();
      };
    } else {
      var S = Date, C = S.now();
      c.unstable_now = function() {
        return S.now() - C;
      };
    }
    var g = [], y = [], _ = 1, E = null, M = 3, B = !1, X = !1, V = !1, q = !1, Y = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function ot(O) {
      for (var w = s(y); w !== null; ) {
        if (w.callback === null) f(y);
        else if (w.startTime <= O)
          f(y), w.sortIndex = w.expirationTime, o(g, w);
        else break;
        w = s(y);
      }
    }
    function mt(O) {
      if (V = !1, ot(O), !X)
        if (s(g) !== null)
          X = !0, xt || (xt = !0, $t());
        else {
          var w = s(y);
          w !== null && Ae(mt, w.startTime - O);
        }
    }
    var xt = !1, F = -1, Dt = 5, wt = -1;
    function me() {
      return q ? !0 : !(c.unstable_now() - wt < Dt);
    }
    function Oe() {
      if (q = !1, xt) {
        var O = c.unstable_now();
        wt = O;
        var w = !0;
        try {
          t: {
            X = !1, V && (V = !1, L(F), F = -1), B = !0;
            var W = M;
            try {
              e: {
                for (ot(O), E = s(g); E !== null && !(E.expirationTime > O && me()); ) {
                  var vt = E.callback;
                  if (typeof vt == "function") {
                    E.callback = null, M = E.priorityLevel;
                    var bt = vt(
                      E.expirationTime <= O
                    );
                    if (O = c.unstable_now(), typeof bt == "function") {
                      E.callback = bt, ot(O), w = !0;
                      break e;
                    }
                    E === s(g) && f(g), ot(O);
                  } else f(g);
                  E = s(g);
                }
                if (E !== null) w = !0;
                else {
                  var p = s(y);
                  p !== null && Ae(
                    mt,
                    p.startTime - O
                  ), w = !1;
                }
              }
              break t;
            } finally {
              E = null, M = W, B = !1;
            }
            w = void 0;
          }
        } finally {
          w ? $t() : xt = !1;
        }
      }
    }
    var $t;
    if (typeof J == "function")
      $t = function() {
        J(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var Rl = new MessageChannel(), He = Rl.port2;
      Rl.port1.onmessage = Oe, $t = function() {
        He.postMessage(null);
      };
    } else
      $t = function() {
        Y(Oe, 0);
      };
    function Ae(O, w) {
      F = Y(function() {
        O(c.unstable_now());
      }, w);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, c.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Dt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, c.unstable_next = function(O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var w = 3;
          break;
        default:
          w = M;
      }
      var W = M;
      M = w;
      try {
        return O();
      } finally {
        M = W;
      }
    }, c.unstable_requestPaint = function() {
      q = !0;
    }, c.unstable_runWithPriority = function(O, w) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var W = M;
      M = O;
      try {
        return w();
      } finally {
        M = W;
      }
    }, c.unstable_scheduleCallback = function(O, w, W) {
      var vt = c.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? vt + W : vt) : W = vt, O) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = W + bt, O = {
        id: _++,
        callback: w,
        priorityLevel: O,
        startTime: W,
        expirationTime: bt,
        sortIndex: -1
      }, W > vt ? (O.sortIndex = W, o(y, O), s(g) === null && O === s(y) && (V ? (L(F), F = -1) : V = !0, Ae(mt, W - vt))) : (O.sortIndex = bt, o(g, O), X || B || (X = !0, xt || (xt = !0, $t()))), O;
    }, c.unstable_shouldYield = me, c.unstable_wrapCallback = function(O) {
      var w = M;
      return function() {
        var W = M;
        M = w;
        try {
          return O.apply(this, arguments);
        } finally {
          M = W;
        }
      };
    };
  })(Of)), Of;
}
var Id;
function vv() {
  return Id || (Id = 1, Rf.exports = yv()), Rf.exports;
}
var Mf = { exports: {} }, Kt = {};
var Pd;
function gv() {
  if (Pd) return Kt;
  Pd = 1;
  var c = qf();
  function o(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        y += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var f = {
    d: {
      f: s,
      r: function() {
        throw Error(o(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function h(g, y, _) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: E == null ? null : "" + E,
      children: g,
      containerInfo: y,
      implementation: _
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(g, y) {
    if (g === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Kt.createPortal = function(g, y) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(o(299));
    return h(g, y, null, _);
  }, Kt.flushSync = function(g) {
    var y = S.T, _ = f.p;
    try {
      if (S.T = null, f.p = 2, g) return g();
    } finally {
      S.T = y, f.p = _, f.d.f();
    }
  }, Kt.preconnect = function(g, y) {
    typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, f.d.C(g, y));
  }, Kt.prefetchDNS = function(g) {
    typeof g == "string" && f.d.D(g);
  }, Kt.preinit = function(g, y) {
    if (typeof g == "string" && y && typeof y.as == "string") {
      var _ = y.as, E = C(_, y.crossOrigin), M = typeof y.integrity == "string" ? y.integrity : void 0, B = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      _ === "style" ? f.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: M,
          fetchPriority: B
        }
      ) : _ === "script" && f.d.X(g, {
        crossOrigin: E,
        integrity: M,
        fetchPriority: B,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Kt.preinitModule = function(g, y) {
    if (typeof g == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var _ = C(
            y.as,
            y.crossOrigin
          );
          f.d.M(g, {
            crossOrigin: _,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && f.d.M(g);
  }, Kt.preload = function(g, y) {
    if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var _ = y.as, E = C(_, y.crossOrigin);
      f.d.L(g, _, {
        crossOrigin: E,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Kt.preloadModule = function(g, y) {
    if (typeof g == "string")
      if (y) {
        var _ = C(y.as, y.crossOrigin);
        f.d.m(g, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: _,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else f.d.m(g);
  }, Kt.requestFormReset = function(g) {
    f.d.r(g);
  }, Kt.unstable_batchedUpdates = function(g, y) {
    return g(y);
  }, Kt.useFormState = function(g, y, _) {
    return S.H.useFormState(g, y, _);
  }, Kt.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, Kt.version = "19.2.4", Kt;
}
var tm;
function rm() {
  if (tm) return Mf.exports;
  tm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Mf.exports = gv(), Mf.exports;
}
var em;
function pv() {
  if (em) return Rn;
  em = 1;
  var c = vv(), o = qf(), s = rm();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (h(t) !== t)
      throw Error(f(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return g(n), t;
          if (u === a) return g(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, r = n.child; r; ) {
          if (r === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (r === a) {
            i = !0, a = n, l = u;
            break;
          }
          r = r.sibling;
        }
        if (!i) {
          for (r = u.child; r; ) {
            if (r === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (r === a) {
              i = !0, a = u, l = n;
              break;
            }
            r = r.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = _(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign, M = /* @__PURE__ */ Symbol.for("react.element"), B = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), mt = /* @__PURE__ */ Symbol.for("react.suspense"), xt = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), Dt = /* @__PURE__ */ Symbol.for("react.lazy"), wt = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function $t(t) {
    return t === null || typeof t != "object" ? null : (t = Oe && t[Oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Rl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function He(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Rl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case V:
        return "Fragment";
      case Y:
        return "Profiler";
      case q:
        return "StrictMode";
      case mt:
        return "Suspense";
      case xt:
        return "SuspenseList";
      case wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case X:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case L:
          return (t._context.displayName || "Context") + ".Consumer";
        case ot:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case F:
          return e = t.displayName || null, e !== null ? e : He(t.type) || "Memo";
        case Dt:
          e = t._payload, t = t._init;
          try {
            return He(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ae = Array.isArray, O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vt = [], bt = -1;
  function p(t) {
    return { current: t };
  }
  function H(t) {
    0 > bt || (t.current = vt[bt], vt[bt] = null, bt--);
  }
  function G(t, e) {
    bt++, vt[bt] = t.current, t.current = e;
  }
  var Z = p(null), P = p(null), lt = p(null), dt = p(null);
  function Jt(t, e) {
    switch (G(lt, e), G(P, t), G(Z, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? vd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = vd(e), t = gd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    H(Z), G(Z, t);
  }
  function Rt() {
    H(Z), H(P), H(lt);
  }
  function ja(t) {
    t.memoizedState !== null && G(dt, t);
    var e = Z.current, l = gd(e, t.type);
    e !== l && (G(P, t), G(Z, l));
  }
  function Hn(t) {
    P.current === t && (H(Z), H(P)), dt.current === t && (H(dt), zn._currentValue = W);
  }
  var ci, Zf;
  function Ol(t) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ci = e && e[1] || "", Zf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ci + t + Zf;
  }
  var fi = !1;
  function ri(t, e) {
    if (!t || fi) return "";
    fi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (D) {
                  var A = D;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (D) {
                  A = D;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                A = D;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (D) {
            if (D && A && typeof D.stack == "string")
              return [D.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], r = u[1];
      if (i && r) {
        var m = i.split(`
`), T = r.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < T.length && !T[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === T.length)
          for (a = m.length - 1, n = T.length - 1; 1 <= a && 0 <= n && m[a] !== T[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== T[n]) {
                  var R = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      fi = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Ol(l) : "";
  }
  function Qm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ol(t.type);
      case 16:
        return Ol("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ol("Suspense Fallback") : Ol("Suspense");
      case 19:
        return Ol("SuspenseList");
      case 0:
      case 15:
        return ri(t.type, !1);
      case 11:
        return ri(t.type.render, !1);
      case 1:
        return ri(t.type, !0);
      case 31:
        return Ol("Activity");
      default:
        return "";
    }
  }
  function Kf(t) {
    try {
      var e = "", l = null;
      do
        e += Qm(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var si = Object.prototype.hasOwnProperty, oi = c.unstable_scheduleCallback, di = c.unstable_cancelCallback, Vm = c.unstable_shouldYield, Zm = c.unstable_requestPaint, ae = c.unstable_now, Km = c.unstable_getCurrentPriorityLevel, Jf = c.unstable_ImmediatePriority, kf = c.unstable_UserBlockingPriority, Bn = c.unstable_NormalPriority, Jm = c.unstable_LowPriority, $f = c.unstable_IdlePriority, km = c.log, $m = c.unstable_setDisableYieldValue, Ha = null, ne = null;
  function al(t) {
    if (typeof km == "function" && $m(t), ne && typeof ne.setStrictMode == "function")
      try {
        ne.setStrictMode(Ha, t);
      } catch {
      }
  }
  var ue = Math.clz32 ? Math.clz32 : Im, Wm = Math.log, Fm = Math.LN2;
  function Im(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Wm(t) / Fm | 0) | 0;
  }
  var qn = 256, Ln = 262144, Yn = 4194304;
  function Ml(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function wn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~u, a !== 0 ? n = Ml(a) : (i &= r, i !== 0 ? n = Ml(i) : l || (l = r & ~t, l !== 0 && (n = Ml(l))))) : (r = a & ~u, r !== 0 ? n = Ml(r) : i !== 0 ? n = Ml(i) : l || (l = a & ~t, l !== 0 && (n = Ml(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Ba(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Pm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wf() {
    var t = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), t;
  }
  function mi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function qa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function th(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var r = t.entanglements, m = t.expirationTimes, T = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var R = 31 - ue(l), N = 1 << R;
      r[R] = 0, m[R] = -1;
      var A = T[R];
      if (A !== null)
        for (T[R] = null, R = 0; R < A.length; R++) {
          var D = A[R];
          D !== null && (D.lane &= -536870913);
        }
      l &= ~N;
    }
    a !== 0 && Ff(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function Ff(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ue(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function If(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ue(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Pf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : hi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function hi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tr() {
    var t = w.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wd(t.type));
  }
  function er(t, e) {
    var l = w.p;
    try {
      return w.p = t, e();
    } finally {
      w.p = l;
    }
  }
  var nl = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + nl, Wt = "__reactProps$" + nl, $l = "__reactContainer$" + nl, vi = "__reactEvents$" + nl, eh = "__reactListeners$" + nl, lh = "__reactHandles$" + nl, lr = "__reactResources$" + nl, La = "__reactMarker$" + nl;
  function gi(t) {
    delete t[Gt], delete t[Wt], delete t[vi], delete t[eh], delete t[lh];
  }
  function Wl(t) {
    var e = t[Gt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[$l] || l[Gt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = zd(t); t !== null; ) {
            if (l = t[Gt]) return l;
            t = zd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Fl(t) {
    if (t = t[Gt] || t[$l]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ya(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Il(t) {
    var e = t[lr];
    return e || (e = t[lr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Lt(t) {
    t[La] = !0;
  }
  var ar = /* @__PURE__ */ new Set(), nr = {};
  function Ul(t, e) {
    Pl(t, e), Pl(t + "Capture", e);
  }
  function Pl(t, e) {
    for (nr[t] = e, t = 0; t < e.length; t++)
      ar.add(e[t]);
  }
  var ah = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ur = {}, ir = {};
  function nh(t) {
    return si.call(ir, t) ? !0 : si.call(ur, t) ? !1 : ah.test(t) ? ir[t] = !0 : (ur[t] = !0, !1);
  }
  function Gn(t, e, l) {
    if (nh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Xn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Be(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function he(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function cr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function uh(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function pi(t) {
    if (!t._valueTracker) {
      var e = cr(t) ? "checked" : "value";
      t._valueTracker = uh(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function fr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = cr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Qn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ih = /[\n"\\]/g;
  function ye(t) {
    return t.replace(
      ih,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Si(t, e, l, a, n, u, i, r) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + he(e)) : t.value !== "" + he(e) && (t.value = "" + he(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? bi(t, i, he(e)) : l != null ? bi(t, i, he(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + he(r) : t.removeAttribute("name");
  }
  function rr(t, e, l, a, n, u, i, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        pi(t);
        return;
      }
      l = l != null ? "" + he(l) : "", e = e != null ? "" + he(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = r ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), pi(t);
  }
  function bi(t, e, l) {
    e === "number" && Qn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function ta(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function sr(t, e, l) {
    if (e != null && (e = "" + he(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function or(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ae(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = he(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), pi(t);
  }
  function ea(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ch = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function dr(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || ch.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function mr(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && dr(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && dr(t, u, e[u]);
  }
  function Ei(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var fh = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), rh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vn(t) {
    return rh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function qe() {
  }
  var xi = null;
  function Ti(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var la = null, aa = null;
  function hr(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Si(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + ye(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Wt] || null;
                if (!n) throw Error(f(90));
                Si(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && fr(a);
          }
          break t;
        case "textarea":
          sr(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ta(t, !!l.multiple, e, !1);
      }
    }
  }
  var zi = !1;
  function yr(t, e, l) {
    if (zi) return t(e, l);
    zi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (zi = !1, (la !== null || aa !== null) && (Mu(), la && (e = la, t = aa, aa = la = null, hr(e), t)))
        for (e = 0; e < t.length; e++) hr(t[e]);
    }
  }
  function wa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var Le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ai = !1;
  if (Le)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          Ai = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      Ai = !1;
    }
  var ul = null, Ci = null, Zn = null;
  function vr() {
    if (Zn) return Zn;
    var t, e = Ci, l = e.length, a, n = "value" in ul ? ul.value : ul.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Zn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Kn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Jn() {
    return !0;
  }
  function gr() {
    return !1;
  }
  function Ft(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var r in t)
        t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Jn : gr, this.isPropagationStopped = gr, this;
    }
    return E(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function() {
      },
      isPersistent: Jn
    }), e;
  }
  var Nl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = Ft(Nl), Xa = E({}, Nl, { view: 0, detail: 0 }), sh = Ft(Xa), _i, Di, Qa, $n = E({}, Xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Oi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (_i = t.screenX - Qa.screenX, Di = t.screenY - Qa.screenY) : Di = _i = 0, Qa = t), _i);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Di;
    }
  }), pr = Ft($n), oh = E({}, $n, { dataTransfer: 0 }), dh = Ft(oh), mh = E({}, Xa, { relatedTarget: 0 }), Ri = Ft(mh), hh = E({}, Nl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yh = Ft(hh), vh = E({}, Nl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), gh = Ft(vh), ph = E({}, Nl, { data: 0 }), Sr = Ft(ph), Sh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, bh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Eh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xh(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Eh[t]) ? !!e[t] : !1;
  }
  function Oi() {
    return xh;
  }
  var Th = E({}, Xa, {
    key: function(t) {
      if (t.key) {
        var e = Sh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Kn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oi,
    charCode: function(t) {
      return t.type === "keypress" ? Kn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Kn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), zh = Ft(Th), Ah = E({}, $n, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), br = Ft(Ah), Ch = E({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oi
  }), _h = Ft(Ch), Dh = E({}, Nl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rh = Ft(Dh), Oh = E({}, $n, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mh = Ft(Oh), Uh = E({}, Nl, {
    newState: 0,
    oldState: 0
  }), Nh = Ft(Uh), jh = [9, 13, 27, 32], Mi = Le && "CompositionEvent" in window, Va = null;
  Le && "documentMode" in document && (Va = document.documentMode);
  var Hh = Le && "TextEvent" in window && !Va, Er = Le && (!Mi || Va && 8 < Va && 11 >= Va), xr = " ", Tr = !1;
  function zr(t, e) {
    switch (t) {
      case "keyup":
        return jh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ar(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var na = !1;
  function Bh(t, e) {
    switch (t) {
      case "compositionend":
        return Ar(e);
      case "keypress":
        return e.which !== 32 ? null : (Tr = !0, xr);
      case "textInput":
        return t = e.data, t === xr && Tr ? null : t;
      default:
        return null;
    }
  }
  function qh(t, e) {
    if (na)
      return t === "compositionend" || !Mi && zr(t, e) ? (t = vr(), Zn = Ci = ul = null, na = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Er && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Lh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Cr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Lh[t.type] : e === "textarea";
  }
  function _r(t, e, l, a) {
    la ? aa ? aa.push(a) : aa = [a] : la = a, e = Lu(e, "onChange"), 0 < e.length && (l = new kn(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var Za = null, Ka = null;
  function Yh(t) {
    sd(t, 0);
  }
  function Wn(t) {
    var e = Ya(t);
    if (fr(e)) return t;
  }
  function Dr(t, e) {
    if (t === "change") return e;
  }
  var Rr = !1;
  if (Le) {
    var Ui;
    if (Le) {
      var Ni = "oninput" in document;
      if (!Ni) {
        var Or = document.createElement("div");
        Or.setAttribute("oninput", "return;"), Ni = typeof Or.oninput == "function";
      }
      Ui = Ni;
    } else Ui = !1;
    Rr = Ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Mr() {
    Za && (Za.detachEvent("onpropertychange", Ur), Ka = Za = null);
  }
  function Ur(t) {
    if (t.propertyName === "value" && Wn(Ka)) {
      var e = [];
      _r(
        e,
        Ka,
        t,
        Ti(t)
      ), yr(Yh, e);
    }
  }
  function wh(t, e, l) {
    t === "focusin" ? (Mr(), Za = e, Ka = l, Za.attachEvent("onpropertychange", Ur)) : t === "focusout" && Mr();
  }
  function Gh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wn(Ka);
  }
  function Xh(t, e) {
    if (t === "click") return Wn(e);
  }
  function Qh(t, e) {
    if (t === "input" || t === "change")
      return Wn(e);
  }
  function Vh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ie = typeof Object.is == "function" ? Object.is : Vh;
  function Ja(t, e) {
    if (ie(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!si.call(e, n) || !ie(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Nr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jr(t, e) {
    var l = Nr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Nr(l);
    }
  }
  function Hr(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Br(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Qn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Qn(t.document);
    }
    return e;
  }
  function ji(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Zh = Le && "documentMode" in document && 11 >= document.documentMode, ua = null, Hi = null, ka = null, Bi = !1;
  function qr(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Bi || ua == null || ua !== Qn(a) || (a = ua, "selectionStart" in a && ji(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ka && Ja(ka, a) || (ka = a, a = Lu(Hi, "onSelect"), 0 < a.length && (e = new kn(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ua)));
  }
  function jl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ia = {
    animationend: jl("Animation", "AnimationEnd"),
    animationiteration: jl("Animation", "AnimationIteration"),
    animationstart: jl("Animation", "AnimationStart"),
    transitionrun: jl("Transition", "TransitionRun"),
    transitionstart: jl("Transition", "TransitionStart"),
    transitioncancel: jl("Transition", "TransitionCancel"),
    transitionend: jl("Transition", "TransitionEnd")
  }, qi = {}, Lr = {};
  Le && (Lr = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
  function Hl(t) {
    if (qi[t]) return qi[t];
    if (!ia[t]) return t;
    var e = ia[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Lr)
        return qi[t] = e[l];
    return t;
  }
  var Yr = Hl("animationend"), wr = Hl("animationiteration"), Gr = Hl("animationstart"), Kh = Hl("transitionrun"), Jh = Hl("transitionstart"), kh = Hl("transitioncancel"), Xr = Hl("transitionend"), Qr = /* @__PURE__ */ new Map(), Li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Li.push("scrollEnd");
  function Ce(t, e) {
    Qr.set(t, e), Ul(e, [t]);
  }
  var Fn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ve = [], ca = 0, Yi = 0;
  function In() {
    for (var t = ca, e = Yi = ca = 0; e < t; ) {
      var l = ve[e];
      ve[e++] = null;
      var a = ve[e];
      ve[e++] = null;
      var n = ve[e];
      ve[e++] = null;
      var u = ve[e];
      if (ve[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Vr(l, n, u);
    }
  }
  function Pn(t, e, l, a) {
    ve[ca++] = t, ve[ca++] = e, ve[ca++] = l, ve[ca++] = a, Yi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function wi(t, e, l, a) {
    return Pn(t, e, l, a), tu(t);
  }
  function Bl(t, e) {
    return Pn(t, null, null, e), tu(t);
  }
  function Vr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ue(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function tu(t) {
    if (50 < gn)
      throw gn = 0, $c = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function $h(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ce(t, e, l, a) {
    return new $h(t, e, l, a);
  }
  function Gi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ye(t, e) {
    var l = t.alternate;
    return l === null ? (l = ce(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Zr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function eu(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Gi(t) && (i = 1);
    else if (typeof t == "string")
      i = tv(
        t,
        l,
        Z.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case wt:
          return t = ce(31, l, e, n), t.elementType = wt, t.lanes = u, t;
        case V:
          return ql(l.children, n, u, e);
        case q:
          i = 8, n |= 24;
          break;
        case Y:
          return t = ce(12, l, e, n | 2), t.elementType = Y, t.lanes = u, t;
        case mt:
          return t = ce(13, l, e, n), t.elementType = mt, t.lanes = u, t;
        case xt:
          return t = ce(19, l, e, n), t.elementType = xt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case J:
                i = 10;
                break t;
              case L:
                i = 9;
                break t;
              case ot:
                i = 11;
                break t;
              case F:
                i = 14;
                break t;
              case Dt:
                i = 16, a = null;
                break t;
            }
          i = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ce(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function ql(t, e, l, a) {
    return t = ce(7, t, a, e), t.lanes = l, t;
  }
  function Xi(t, e, l) {
    return t = ce(6, t, null, e), t.lanes = l, t;
  }
  function Kr(t) {
    var e = ce(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Qi(t, e, l) {
    return e = ce(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Jr = /* @__PURE__ */ new WeakMap();
  function ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Jr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Kf(e)
      }, Jr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Kf(e)
    };
  }
  var ra = [], sa = 0, lu = null, $a = 0, pe = [], Se = 0, il = null, Me = 1, Ue = "";
  function we(t, e) {
    ra[sa++] = $a, ra[sa++] = lu, lu = t, $a = e;
  }
  function kr(t, e, l) {
    pe[Se++] = Me, pe[Se++] = Ue, pe[Se++] = il, il = t;
    var a = Me;
    t = Ue;
    var n = 32 - ue(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ue(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Me = 1 << 32 - ue(e) + n | l << n | a, Ue = u + t;
    } else
      Me = 1 << u | l << n | a, Ue = t;
  }
  function Vi(t) {
    t.return !== null && (we(t, 1), kr(t, 1, 0));
  }
  function Zi(t) {
    for (; t === lu; )
      lu = ra[--sa], ra[sa] = null, $a = ra[--sa], ra[sa] = null;
    for (; t === il; )
      il = pe[--Se], pe[Se] = null, Ue = pe[--Se], pe[Se] = null, Me = pe[--Se], pe[Se] = null;
  }
  function $r(t, e) {
    pe[Se++] = Me, pe[Se++] = Ue, pe[Se++] = il, Me = e.id, Ue = e.overflow, il = t;
  }
  var Xt = null, Tt = null, ct = !1, cl = null, be = !1, Ki = Error(f(519));
  function fl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(ge(e, t)), Ki;
  }
  function Wr(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Gt] = t, e[Wt] = a, l) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Sn.length; l++)
          nt(Sn[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e), rr(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), or(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || hd(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)), a.onScroll != null && nt("scroll", e), a.onScrollEnd != null && nt("scrollend", e), a.onClick != null && (e.onclick = qe), e = !0) : e = !1, e || fl(t, !0);
  }
  function Fr(t) {
    for (Xt = t.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 31:
        case 13:
          be = !1;
          return;
        case 27:
        case 3:
          be = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function oa(t) {
    if (t !== Xt) return !1;
    if (!ct) return Fr(t), ct = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || of(t.type, t.memoizedProps)), l = !l), l && Tt && fl(t), Fr(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = Td(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = Td(t);
    } else
      e === 27 ? (e = Tt, xl(t.type) ? (t = vf, vf = null, Tt = t) : Tt = e) : Tt = Xt ? xe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ll() {
    Tt = Xt = null, ct = !1;
  }
  function Ji() {
    var t = cl;
    return t !== null && (ee === null ? ee = t : ee.push.apply(
      ee,
      t
    ), cl = null), t;
  }
  function Wa(t) {
    cl === null ? cl = [t] : cl.push(t);
  }
  var ki = p(null), Yl = null, Ge = null;
  function rl(t, e, l) {
    G(ki, e._currentValue), e._currentValue = l;
  }
  function Xe(t) {
    t._currentValue = ki.current, H(ki);
  }
  function $i(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Wi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (r.context === e[m]) {
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), $i(
                u.return,
                l,
                t
              ), a || (i = null);
              break t;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), $i(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function da(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var r = n.type;
          ie(n.pendingProps.value, i.value) || (t !== null ? t.push(r) : t = [r]);
        }
      } else if (n === dt.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(zn) : t = [zn]);
      }
      n = n.return;
    }
    t !== null && Wi(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function au(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ie(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function wl(t) {
    Yl = t, Ge = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Qt(t) {
    return Ir(Yl, t);
  }
  function nu(t, e) {
    return Yl === null && wl(t), Ir(t, e);
  }
  function Ir(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Ge === null) {
      if (t === null) throw Error(f(308));
      Ge = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ge = Ge.next = e;
    return l;
  }
  var Wh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Fh = c.unstable_scheduleCallback, Ih = c.unstable_NormalPriority, Ut = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fi() {
    return {
      controller: new Wh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fa(t) {
    t.refCount--, t.refCount === 0 && Fh(Ih, function() {
      t.controller.abort();
    });
  }
  var Ia = null, Ii = 0, ma = 0, ha = null;
  function Ph(t, e) {
    if (Ia === null) {
      var l = Ia = [];
      Ii = 0, ma = ef(), ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Ii++, e.then(Pr, Pr), e;
  }
  function Pr() {
    if (--Ii === 0 && Ia !== null) {
      ha !== null && (ha.status = "fulfilled");
      var t = Ia;
      Ia = null, ma = 0, ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ty(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var ts = O.S;
  O.S = function(t, e) {
    Lo = ae(), typeof e == "object" && e !== null && typeof e.then == "function" && Ph(t, e), ts !== null && ts(t, e);
  };
  var Gl = p(null);
  function Pi() {
    var t = Gl.current;
    return t !== null ? t : Et.pooledCache;
  }
  function uu(t, e) {
    e === null ? G(Gl, Gl.current) : G(Gl, e.pool);
  }
  function es() {
    var t = Pi();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var ya = Error(f(460)), tc = Error(f(474)), iu = Error(f(542)), cu = { then: function() {
  } };
  function ls(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function as(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(qe, qe), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, us(t), t;
      default:
        if (typeof e.status == "string") e.then(qe, qe);
        else {
          if (t = Et, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, us(t), t;
        }
        throw Ql = e, ya;
    }
  }
  function Xl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ql = l, ya) : l;
    }
  }
  var Ql = null;
  function ns() {
    if (Ql === null) throw Error(f(459));
    var t = Ql;
    return Ql = null, t;
  }
  function us(t) {
    if (t === ya || t === iu)
      throw Error(f(483));
  }
  var va = null, Pa = 0;
  function fu(t) {
    var e = Pa;
    return Pa += 1, va === null && (va = []), as(va, t, e);
  }
  function tn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ru(t, e) {
    throw e.$$typeof === M ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function is(t) {
    function e(b, v) {
      if (t) {
        var x = b.deletions;
        x === null ? (b.deletions = [v], b.flags |= 16) : x.push(v);
      }
    }
    function l(b, v) {
      if (!t) return null;
      for (; v !== null; )
        e(b, v), v = v.sibling;
      return null;
    }
    function a(b) {
      for (var v = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? v.set(b.key, b) : v.set(b.index, b), b = b.sibling;
      return v;
    }
    function n(b, v) {
      return b = Ye(b, v), b.index = 0, b.sibling = null, b;
    }
    function u(b, v, x) {
      return b.index = x, t ? (x = b.alternate, x !== null ? (x = x.index, x < v ? (b.flags |= 67108866, v) : x) : (b.flags |= 67108866, v)) : (b.flags |= 1048576, v);
    }
    function i(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function r(b, v, x, U) {
      return v === null || v.tag !== 6 ? (v = Xi(x, b.mode, U), v.return = b, v) : (v = n(v, x), v.return = b, v);
    }
    function m(b, v, x, U) {
      var k = x.type;
      return k === V ? R(
        b,
        v,
        x.props.children,
        U,
        x.key
      ) : v !== null && (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && Xl(k) === v.type) ? (v = n(v, x.props), tn(v, x), v.return = b, v) : (v = eu(
        x.type,
        x.key,
        x.props,
        null,
        b.mode,
        U
      ), tn(v, x), v.return = b, v);
    }
    function T(b, v, x, U) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== x.containerInfo || v.stateNode.implementation !== x.implementation ? (v = Qi(x, b.mode, U), v.return = b, v) : (v = n(v, x.children || []), v.return = b, v);
    }
    function R(b, v, x, U, k) {
      return v === null || v.tag !== 7 ? (v = ql(
        x,
        b.mode,
        U,
        k
      ), v.return = b, v) : (v = n(v, x), v.return = b, v);
    }
    function N(b, v, x) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Xi(
          "" + v,
          b.mode,
          x
        ), v.return = b, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case B:
            return x = eu(
              v.type,
              v.key,
              v.props,
              null,
              b.mode,
              x
            ), tn(x, v), x.return = b, x;
          case X:
            return v = Qi(
              v,
              b.mode,
              x
            ), v.return = b, v;
          case Dt:
            return v = Xl(v), N(b, v, x);
        }
        if (Ae(v) || $t(v))
          return v = ql(
            v,
            b.mode,
            x,
            null
          ), v.return = b, v;
        if (typeof v.then == "function")
          return N(b, fu(v), x);
        if (v.$$typeof === J)
          return N(
            b,
            nu(b, v),
            x
          );
        ru(b, v);
      }
      return null;
    }
    function A(b, v, x, U) {
      var k = v !== null ? v.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return k !== null ? null : r(b, v, "" + x, U);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case B:
            return x.key === k ? m(b, v, x, U) : null;
          case X:
            return x.key === k ? T(b, v, x, U) : null;
          case Dt:
            return x = Xl(x), A(b, v, x, U);
        }
        if (Ae(x) || $t(x))
          return k !== null ? null : R(b, v, x, U, null);
        if (typeof x.then == "function")
          return A(
            b,
            v,
            fu(x),
            U
          );
        if (x.$$typeof === J)
          return A(
            b,
            v,
            nu(b, x),
            U
          );
        ru(b, x);
      }
      return null;
    }
    function D(b, v, x, U, k) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return b = b.get(x) || null, r(v, b, "" + U, k);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case B:
            return b = b.get(
              U.key === null ? x : U.key
            ) || null, m(v, b, U, k);
          case X:
            return b = b.get(
              U.key === null ? x : U.key
            ) || null, T(v, b, U, k);
          case Dt:
            return U = Xl(U), D(
              b,
              v,
              x,
              U,
              k
            );
        }
        if (Ae(U) || $t(U))
          return b = b.get(x) || null, R(v, b, U, k, null);
        if (typeof U.then == "function")
          return D(
            b,
            v,
            x,
            fu(U),
            k
          );
        if (U.$$typeof === J)
          return D(
            b,
            v,
            x,
            nu(v, U),
            k
          );
        ru(v, U);
      }
      return null;
    }
    function Q(b, v, x, U) {
      for (var k = null, ft = null, K = v, et = v = 0, it = null; K !== null && et < x.length; et++) {
        K.index > et ? (it = K, K = null) : it = K.sibling;
        var rt = A(
          b,
          K,
          x[et],
          U
        );
        if (rt === null) {
          K === null && (K = it);
          break;
        }
        t && K && rt.alternate === null && e(b, K), v = u(rt, v, et), ft === null ? k = rt : ft.sibling = rt, ft = rt, K = it;
      }
      if (et === x.length)
        return l(b, K), ct && we(b, et), k;
      if (K === null) {
        for (; et < x.length; et++)
          K = N(b, x[et], U), K !== null && (v = u(
            K,
            v,
            et
          ), ft === null ? k = K : ft.sibling = K, ft = K);
        return ct && we(b, et), k;
      }
      for (K = a(K); et < x.length; et++)
        it = D(
          K,
          b,
          et,
          x[et],
          U
        ), it !== null && (t && it.alternate !== null && K.delete(
          it.key === null ? et : it.key
        ), v = u(
          it,
          v,
          et
        ), ft === null ? k = it : ft.sibling = it, ft = it);
      return t && K.forEach(function(_l) {
        return e(b, _l);
      }), ct && we(b, et), k;
    }
    function $(b, v, x, U) {
      if (x == null) throw Error(f(151));
      for (var k = null, ft = null, K = v, et = v = 0, it = null, rt = x.next(); K !== null && !rt.done; et++, rt = x.next()) {
        K.index > et ? (it = K, K = null) : it = K.sibling;
        var _l = A(b, K, rt.value, U);
        if (_l === null) {
          K === null && (K = it);
          break;
        }
        t && K && _l.alternate === null && e(b, K), v = u(_l, v, et), ft === null ? k = _l : ft.sibling = _l, ft = _l, K = it;
      }
      if (rt.done)
        return l(b, K), ct && we(b, et), k;
      if (K === null) {
        for (; !rt.done; et++, rt = x.next())
          rt = N(b, rt.value, U), rt !== null && (v = u(rt, v, et), ft === null ? k = rt : ft.sibling = rt, ft = rt);
        return ct && we(b, et), k;
      }
      for (K = a(K); !rt.done; et++, rt = x.next())
        rt = D(K, b, et, rt.value, U), rt !== null && (t && rt.alternate !== null && K.delete(rt.key === null ? et : rt.key), v = u(rt, v, et), ft === null ? k = rt : ft.sibling = rt, ft = rt);
      return t && K.forEach(function(ov) {
        return e(b, ov);
      }), ct && we(b, et), k;
    }
    function St(b, v, x, U) {
      if (typeof x == "object" && x !== null && x.type === V && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case B:
            t: {
              for (var k = x.key; v !== null; ) {
                if (v.key === k) {
                  if (k = x.type, k === V) {
                    if (v.tag === 7) {
                      l(
                        b,
                        v.sibling
                      ), U = n(
                        v,
                        x.props.children
                      ), U.return = b, b = U;
                      break t;
                    }
                  } else if (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && Xl(k) === v.type) {
                    l(
                      b,
                      v.sibling
                    ), U = n(v, x.props), tn(U, x), U.return = b, b = U;
                    break t;
                  }
                  l(b, v);
                  break;
                } else e(b, v);
                v = v.sibling;
              }
              x.type === V ? (U = ql(
                x.props.children,
                b.mode,
                U,
                x.key
              ), U.return = b, b = U) : (U = eu(
                x.type,
                x.key,
                x.props,
                null,
                b.mode,
                U
              ), tn(U, x), U.return = b, b = U);
            }
            return i(b);
          case X:
            t: {
              for (k = x.key; v !== null; ) {
                if (v.key === k)
                  if (v.tag === 4 && v.stateNode.containerInfo === x.containerInfo && v.stateNode.implementation === x.implementation) {
                    l(
                      b,
                      v.sibling
                    ), U = n(v, x.children || []), U.return = b, b = U;
                    break t;
                  } else {
                    l(b, v);
                    break;
                  }
                else e(b, v);
                v = v.sibling;
              }
              U = Qi(x, b.mode, U), U.return = b, b = U;
            }
            return i(b);
          case Dt:
            return x = Xl(x), St(
              b,
              v,
              x,
              U
            );
        }
        if (Ae(x))
          return Q(
            b,
            v,
            x,
            U
          );
        if ($t(x)) {
          if (k = $t(x), typeof k != "function") throw Error(f(150));
          return x = k.call(x), $(
            b,
            v,
            x,
            U
          );
        }
        if (typeof x.then == "function")
          return St(
            b,
            v,
            fu(x),
            U
          );
        if (x.$$typeof === J)
          return St(
            b,
            v,
            nu(b, x),
            U
          );
        ru(b, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, v !== null && v.tag === 6 ? (l(b, v.sibling), U = n(v, x), U.return = b, b = U) : (l(b, v), U = Xi(x, b.mode, U), U.return = b, b = U), i(b)) : l(b, v);
    }
    return function(b, v, x, U) {
      try {
        Pa = 0;
        var k = St(
          b,
          v,
          x,
          U
        );
        return va = null, k;
      } catch (K) {
        if (K === ya || K === iu) throw K;
        var ft = ce(29, K, null, b.mode);
        return ft.lanes = U, ft.return = b, ft;
      }
    };
  }
  var Vl = is(!0), cs = is(!1), sl = !1;
  function ec(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function lc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ol(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (st & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = tu(t), Vr(t, null, l), e;
    }
    return Pn(t, a, e, l), tu(t);
  }
  function en(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, If(t, l);
    }
  }
  function ac(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var nc = !1;
  function ln() {
    if (nc) {
      var t = ha;
      if (t !== null) throw t;
    }
  }
  function an(t, e, l, a) {
    nc = !1;
    var n = t.updateQueue;
    sl = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var m = r, T = m.next;
      m.next = null, i === null ? u = T : i.next = T, i = m;
      var R = t.alternate;
      R !== null && (R = R.updateQueue, r = R.lastBaseUpdate, r !== i && (r === null ? R.firstBaseUpdate = T : r.next = T, R.lastBaseUpdate = m));
    }
    if (u !== null) {
      var N = n.baseState;
      i = 0, R = T = m = null, r = u;
      do {
        var A = r.lane & -536870913, D = A !== r.lane;
        if (D ? (ut & A) === A : (a & A) === A) {
          A !== 0 && A === ma && (nc = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, $ = r;
            A = e;
            var St = l;
            switch ($.tag) {
              case 1:
                if (Q = $.payload, typeof Q == "function") {
                  N = Q.call(St, N, A);
                  break t;
                }
                N = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = $.payload, A = typeof Q == "function" ? Q.call(St, N, A) : Q, A == null) break t;
                N = E({}, N, A);
                break t;
              case 2:
                sl = !0;
            }
          }
          A = r.callback, A !== null && (t.flags |= 64, D && (t.flags |= 8192), D = n.callbacks, D === null ? n.callbacks = [A] : D.push(A));
        } else
          D = {
            lane: A,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, R === null ? (T = R = D, m = N) : R = R.next = D, i |= A;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          D = r, r = D.next, D.next = null, n.lastBaseUpdate = D, n.shared.pending = null;
        }
      } while (!0);
      R === null && (m = N), n.baseState = m, n.firstBaseUpdate = T, n.lastBaseUpdate = R, u === null && (n.shared.lanes = 0), gl |= i, t.lanes = i, t.memoizedState = N;
    }
  }
  function fs(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function rs(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        fs(l[t], e);
  }
  var ga = p(null), su = p(0);
  function ss(t, e) {
    t = Fe, G(su, t), G(ga, e), Fe = t | e.baseLanes;
  }
  function uc() {
    G(su, Fe), G(ga, ga.current);
  }
  function ic() {
    Fe = su.current, H(ga), H(su);
  }
  var fe = p(null), Ee = null;
  function ml(t) {
    var e = t.alternate;
    G(Ot, Ot.current & 1), G(fe, t), Ee === null && (e === null || ga.current !== null || e.memoizedState !== null) && (Ee = t);
  }
  function cc(t) {
    G(Ot, Ot.current), G(fe, t), Ee === null && (Ee = t);
  }
  function os(t) {
    t.tag === 22 ? (G(Ot, Ot.current), G(fe, t), Ee === null && (Ee = t)) : hl();
  }
  function hl() {
    G(Ot, Ot.current), G(fe, fe.current);
  }
  function re(t) {
    H(fe), Ee === t && (Ee = null), H(Ot);
  }
  var Ot = p(0);
  function ou(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || hf(l) || yf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Qe = 0, tt = null, gt = null, Nt = null, du = !1, pa = !1, Zl = !1, mu = 0, nn = 0, Sa = null, ey = 0;
  function Ct() {
    throw Error(f(321));
  }
  function fc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ie(t[l], e[l])) return !1;
    return !0;
  }
  function rc(t, e, l, a, n, u) {
    return Qe = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? ks : zc, Zl = !1, u = l(a, n), Zl = !1, pa && (u = ms(
      e,
      l,
      a,
      n
    )), ds(t), u;
  }
  function ds(t) {
    O.H = fn;
    var e = gt !== null && gt.next !== null;
    if (Qe = 0, Nt = gt = tt = null, du = !1, nn = 0, Sa = null, e) throw Error(f(300));
    t === null || jt || (t = t.dependencies, t !== null && au(t) && (jt = !0));
  }
  function ms(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if (pa && (Sa = null), nn = 0, pa = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Nt = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      O.H = $s, u = e(l, a);
    } while (pa);
    return u;
  }
  function ly() {
    var t = O.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? un(e) : e, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (tt.flags |= 1024), e;
  }
  function sc() {
    var t = mu !== 0;
    return mu = 0, t;
  }
  function oc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function dc(t) {
    if (du) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      du = !1;
    }
    Qe = 0, Nt = gt = tt = null, pa = !1, nn = mu = 0, Sa = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nt === null ? tt.memoizedState = Nt = t : Nt = Nt.next = t, Nt;
  }
  function Mt() {
    if (gt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Nt === null ? tt.memoizedState : Nt.next;
    if (e !== null)
      Nt = e, gt = t;
    else {
      if (t === null)
        throw tt.alternate === null ? Error(f(467)) : Error(f(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Nt === null ? tt.memoizedState = Nt = t : Nt = Nt.next = t;
    }
    return Nt;
  }
  function hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function un(t) {
    var e = nn;
    return nn += 1, Sa === null && (Sa = []), t = as(Sa, t, e), e = tt, (Nt === null ? e.memoizedState : Nt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? ks : zc), t;
  }
  function yu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return un(t);
      if (t.$$typeof === J) return Qt(t);
    }
    throw Error(f(438, String(t)));
  }
  function mc(t) {
    var e = null, l = tt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = tt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = hu(), tt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = me;
    return e.index++, l;
  }
  function Ve(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function vu(t) {
    var e = Mt();
    return hc(e, gt, t);
  }
  function hc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var r = i = null, m = null, T = e, R = !1;
      do {
        var N = T.lane & -536870913;
        if (N !== T.lane ? (ut & N) === N : (Qe & N) === N) {
          var A = T.revertLane;
          if (A === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), N === ma && (R = !0);
          else if ((Qe & A) === A) {
            T = T.next, A === ma && (R = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, m === null ? (r = m = N, i = u) : m = m.next = N, tt.lanes |= A, gl |= A;
          N = T.action, Zl && l(u, N), u = T.hasEagerState ? T.eagerState : l(u, N);
        } else
          A = {
            lane: N,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, m === null ? (r = m = A, i = u) : m = m.next = A, tt.lanes |= N, gl |= N;
        T = T.next;
      } while (T !== null && T !== e);
      if (m === null ? i = u : m.next = r, !ie(u, t.memoizedState) && (jt = !0, R && (l = ha, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function yc(t) {
    var e = Mt(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ie(u, e.memoizedState) || (jt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function hs(t, e, l) {
    var a = tt, n = Mt(), u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ie(
      (gt || n).memoizedState,
      l
    );
    if (i && (n.memoizedState = l, jt = !0), n = n.queue, pc(gs.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || Nt !== null && Nt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        vs.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Et === null) throw Error(f(349));
      u || (Qe & 127) !== 0 || ys(a, e, l);
    }
    return l;
  }
  function ys(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = tt.updateQueue, e === null ? (e = hu(), tt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function vs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, ps(e) && Ss(t);
  }
  function gs(t, e, l) {
    return l(function() {
      ps(e) && Ss(t);
    });
  }
  function ps(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ie(t, l);
    } catch {
      return !0;
    }
  }
  function Ss(t) {
    var e = Bl(t, 2);
    e !== null && le(e, t, 2);
  }
  function vc(t) {
    var e = kt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Zl) {
        al(!0);
        try {
          l();
        } finally {
          al(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ve,
      lastRenderedState: t
    }, e;
  }
  function bs(t, e, l, a) {
    return t.baseState = l, hc(
      t,
      gt,
      typeof a == "function" ? a : Ve
    );
  }
  function ay(t, e, l, a, n) {
    if (Su(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      O.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Es(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Es(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = O.T, i = {};
      O.T = i;
      try {
        var r = l(n, a), m = O.S;
        m !== null && m(i, r), xs(t, e, r);
      } catch (T) {
        gc(t, e, T);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), O.T = u;
      }
    } else
      try {
        u = l(n, a), xs(t, e, u);
      } catch (T) {
        gc(t, e, T);
      }
  }
  function xs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Ts(t, e, a);
      },
      function(a) {
        return gc(t, e, a);
      }
    ) : Ts(t, e, l);
  }
  function Ts(t, e, l) {
    e.status = "fulfilled", e.value = l, zs(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Es(t, l)));
  }
  function gc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, zs(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function zs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function As(t, e) {
    return e;
  }
  function Cs(t, e) {
    if (ct) {
      var l = Et.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ct) {
            if (Tt) {
              e: {
                for (var n = Tt, u = be; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = xe(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Tt = xe(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            fl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = kt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: As,
      lastRenderedState: e
    }, l.queue = a, l = Zs.bind(
      null,
      tt,
      a
    ), a.dispatch = l, a = vc(!1), u = Tc.bind(
      null,
      tt,
      !1,
      a.queue
    ), a = kt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = ay.bind(
      null,
      tt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function _s(t) {
    var e = Mt();
    return Ds(e, gt, t);
  }
  function Ds(t, e, l) {
    if (e = hc(
      t,
      e,
      As
    )[0], t = vu(Ve)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = un(e);
      } catch (i) {
        throw i === ya ? iu : i;
      }
    else a = e;
    e = Mt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (tt.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      ny.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function ny(t, e) {
    t.action = e;
  }
  function Rs(t) {
    var e = Mt(), l = gt;
    if (l !== null)
      return Ds(e, l, t);
    Mt(), e = e.memoizedState, l = Mt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function ba(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = tt.updateQueue, e === null && (e = hu(), tt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Os() {
    return Mt().memoizedState;
  }
  function gu(t, e, l, a) {
    var n = kt();
    tt.flags |= t, n.memoizedState = ba(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function pu(t, e, l, a) {
    var n = Mt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && fc(a, gt.memoizedState.deps) ? n.memoizedState = ba(e, u, l, a) : (tt.flags |= t, n.memoizedState = ba(
      1 | e,
      u,
      l,
      a
    ));
  }
  function Ms(t, e) {
    gu(8390656, 8, t, e);
  }
  function pc(t, e) {
    pu(2048, 8, t, e);
  }
  function uy(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null)
      e = hu(), tt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Us(t) {
    var e = Mt().memoizedState;
    return uy({ ref: e, nextImpl: t }), function() {
      if ((st & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ns(t, e) {
    return pu(4, 2, t, e);
  }
  function js(t, e) {
    return pu(4, 4, t, e);
  }
  function Hs(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Bs(t, e, l) {
    l = l != null ? l.concat([t]) : null, pu(4, 4, Hs.bind(null, e, t), l);
  }
  function Sc() {
  }
  function qs(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && fc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Ls(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && fc(e, a[1]))
      return a[0];
    if (a = t(), Zl) {
      al(!0);
      try {
        t();
      } finally {
        al(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function bc(t, e, l) {
    return l === void 0 || (Qe & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = wo(), tt.lanes |= t, gl |= t, l);
  }
  function Ys(t, e, l, a) {
    return ie(l, e) ? l : ga.current !== null ? (t = bc(t, l, a), ie(t, e) || (jt = !0), t) : (Qe & 42) === 0 || (Qe & 1073741824) !== 0 && (ut & 261930) === 0 ? (jt = !0, t.memoizedState = l) : (t = wo(), tt.lanes |= t, gl |= t, e);
  }
  function ws(t, e, l, a, n) {
    var u = w.p;
    w.p = u !== 0 && 8 > u ? u : 8;
    var i = O.T, r = {};
    O.T = r, Tc(t, !1, e, l);
    try {
      var m = n(), T = O.S;
      if (T !== null && T(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var R = ty(
          m,
          a
        );
        cn(
          t,
          e,
          R,
          de(t)
        );
      } else
        cn(
          t,
          e,
          a,
          de(t)
        );
    } catch (N) {
      cn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        de()
      );
    } finally {
      w.p = u, i !== null && r.types !== null && (i.types = r.types), O.T = i;
    }
  }
  function iy() {
  }
  function Ec(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Gs(t).queue;
    ws(
      t,
      n,
      e,
      W,
      l === null ? iy : function() {
        return Xs(t), l(a);
      }
    );
  }
  function Gs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ve,
        lastRenderedState: W
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ve,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Xs(t) {
    var e = Gs(t);
    e.next === null && (e = t.alternate.memoizedState), cn(
      t,
      e.next.queue,
      {},
      de()
    );
  }
  function xc() {
    return Qt(zn);
  }
  function Qs() {
    return Mt().memoizedState;
  }
  function Vs() {
    return Mt().memoizedState;
  }
  function cy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = de();
          t = ol(l);
          var a = dl(e, t, l);
          a !== null && (le(a, e, l), en(a, e, l)), e = { cache: Fi() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function fy(t, e, l) {
    var a = de();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t) ? Ks(e, l) : (l = wi(t, e, l, a), l !== null && (le(l, t, a), Js(l, e, a)));
  }
  function Zs(t, e, l) {
    var a = de();
    cn(t, e, l, a);
  }
  function cn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Su(t)) Ks(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, r = u(i, l);
          if (n.hasEagerState = !0, n.eagerState = r, ie(r, i))
            return Pn(t, e, n, 0), Et === null && In(), !1;
        } catch {
        }
      if (l = wi(t, e, n, a), l !== null)
        return le(l, t, a), Js(l, e, a), !0;
    }
    return !1;
  }
  function Tc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: ef(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t)) {
      if (e) throw Error(f(479));
    } else
      e = wi(
        t,
        l,
        a,
        2
      ), e !== null && le(e, t, 2);
  }
  function Su(t) {
    var e = t.alternate;
    return t === tt || e !== null && e === tt;
  }
  function Ks(t, e) {
    pa = du = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Js(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, If(t, l);
    }
  }
  var fn = {
    readContext: Qt,
    use: yu,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useLayoutEffect: Ct,
    useInsertionEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    useHostTransitionStatus: Ct,
    useFormState: Ct,
    useActionState: Ct,
    useOptimistic: Ct,
    useMemoCache: Ct,
    useCacheRefresh: Ct
  };
  fn.useEffectEvent = Ct;
  var ks = {
    readContext: Qt,
    use: yu,
    useCallback: function(t, e) {
      return kt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Qt,
    useEffect: Ms,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, gu(
        4194308,
        4,
        Hs.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return gu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      gu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = kt();
      e = e === void 0 ? null : e;
      var a = t();
      if (Zl) {
        al(!0);
        try {
          t();
        } finally {
          al(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = kt();
      if (l !== void 0) {
        var n = l(e);
        if (Zl) {
          al(!0);
          try {
            l(e);
          } finally {
            al(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = fy.bind(
        null,
        tt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = kt();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vc(t);
      var e = t.queue, l = Zs.bind(null, tt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = kt();
      return bc(l, t, e);
    },
    useTransition: function() {
      var t = vc(!1);
      return t = ws.bind(
        null,
        tt,
        t.queue,
        !0,
        !1
      ), kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = tt, n = kt();
      if (ct) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), Et === null)
          throw Error(f(349));
        (ut & 127) !== 0 || ys(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, Ms(gs.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        vs.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = kt(), e = Et.identifierPrefix;
      if (ct) {
        var l = Ue, a = Me;
        l = (a & ~(1 << 32 - ue(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = mu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = ey++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: xc,
    useFormState: Cs,
    useActionState: Cs,
    useOptimistic: function(t) {
      var e = kt();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Tc.bind(
        null,
        tt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: mc,
    useCacheRefresh: function() {
      return kt().memoizedState = cy.bind(
        null,
        tt
      );
    },
    useEffectEvent: function(t) {
      var e = kt(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((st & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, zc = {
    readContext: Qt,
    use: yu,
    useCallback: qs,
    useContext: Qt,
    useEffect: pc,
    useImperativeHandle: Bs,
    useInsertionEffect: Ns,
    useLayoutEffect: js,
    useMemo: Ls,
    useReducer: vu,
    useRef: Os,
    useState: function() {
      return vu(Ve);
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return Ys(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = vu(Ve)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : un(t),
        e
      ];
    },
    useSyncExternalStore: hs,
    useId: Qs,
    useHostTransitionStatus: xc,
    useFormState: _s,
    useActionState: _s,
    useOptimistic: function(t, e) {
      var l = Mt();
      return bs(l, gt, t, e);
    },
    useMemoCache: mc,
    useCacheRefresh: Vs
  };
  zc.useEffectEvent = Us;
  var $s = {
    readContext: Qt,
    use: yu,
    useCallback: qs,
    useContext: Qt,
    useEffect: pc,
    useImperativeHandle: Bs,
    useInsertionEffect: Ns,
    useLayoutEffect: js,
    useMemo: Ls,
    useReducer: yc,
    useRef: Os,
    useState: function() {
      return yc(Ve);
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return gt === null ? bc(l, t, e) : Ys(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = yc(Ve)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : un(t),
        e
      ];
    },
    useSyncExternalStore: hs,
    useId: Qs,
    useHostTransitionStatus: xc,
    useFormState: Rs,
    useActionState: Rs,
    useOptimistic: function(t, e) {
      var l = Mt();
      return gt !== null ? bs(l, gt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: mc,
    useCacheRefresh: Vs
  };
  $s.useEffectEvent = Us;
  function Ac(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Cc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = de(), n = ol(a);
      n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (le(e, t, a), en(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = de(), n = ol(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (le(e, t, a), en(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = de(), a = ol(l);
      a.tag = 2, e != null && (a.callback = e), e = dl(t, a, l), e !== null && (le(e, t, l), en(e, t, l));
    }
  };
  function Ws(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Ja(l, a) || !Ja(n, u) : !0;
  }
  function Fs(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Cc.enqueueReplaceState(e, e.state, null);
  }
  function Kl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = E({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Is(t) {
    Fn(t);
  }
  function Ps(t) {
    console.error(t);
  }
  function to(t) {
    Fn(t);
  }
  function bu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function eo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function _c(t, e, l) {
    return l = ol(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      bu(t, e);
    }, l;
  }
  function lo(t) {
    return t = ol(t), t.tag = 3, t;
  }
  function ao(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        eo(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      eo(e, l, a), typeof n != "function" && (pl === null ? pl = /* @__PURE__ */ new Set([this]) : pl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function ry(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && da(
        e,
        l,
        n,
        !0
      ), l = fe.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ee === null ? Uu() : l.alternate === null && _t === 0 && (_t = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Ic(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Ic(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Ic(t, a, n), Uu(), !1;
    }
    if (ct)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Ki && (t = Error(f(422), { cause: a }), Wa(ge(t, l)))) : (a !== Ki && (e = Error(f(423), {
        cause: a
      }), Wa(
        ge(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = ge(a, l), n = _c(
        t.stateNode,
        a,
        n
      ), ac(t, n), _t !== 4 && (_t = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = ge(u, l), vn === null ? vn = [u] : vn.push(u), _t !== 4 && (_t = 2), e === null) return !0;
    a = ge(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = _c(l.stateNode, a, t), ac(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pl === null || !pl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = lo(n), ao(
              n,
              t,
              l,
              a
            ), ac(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dc = Error(f(461)), jt = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? cs(e, null, l, a) : Vl(
      e,
      t.child,
      l,
      a
    );
  }
  function no(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var r in a)
        r !== "ref" && (i[r] = a[r]);
    } else i = a;
    return wl(e), a = rc(
      t,
      e,
      l,
      i,
      u,
      n
    ), r = sc(), t !== null && !jt ? (oc(t, e, n), Ze(t, e, n)) : (ct && r && Vi(e), e.flags |= 1, Vt(t, e, a, n), e.child);
  }
  function uo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Gi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, io(
        t,
        e,
        u,
        a,
        n
      )) : (t = eu(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Bc(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ja, l(i, a) && t.ref === e.ref)
        return Ze(t, e, n);
    }
    return e.flags |= 1, t = Ye(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function io(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ja(u, a) && t.ref === e.ref)
        if (jt = !1, e.pendingProps = a = u, Bc(t, n))
          (t.flags & 131072) !== 0 && (jt = !0);
        else
          return e.lanes = t.lanes, Ze(t, e, n);
    }
    return Rc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function co(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return fo(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && uu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? ss(e, u) : uc(), os(e);
      else
        return a = e.lanes = 536870912, fo(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (uu(e, u.cachePool), ss(e, u), hl(), e.memoizedState = null) : (t !== null && uu(e, null), uc(), hl());
    return Vt(t, e, n, l), e.child;
  }
  function rn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function fo(t, e, l, a, n) {
    var u = Pi();
    return u = u === null ? null : { parent: Ut._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && uu(e, null), uc(), os(e), t !== null && da(t, e, a, !0), e.childLanes = n, null;
  }
  function Eu(t, e) {
    return e = Tu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ro(t, e, l) {
    return Vl(e, t.child, null, l), t = Eu(e, e.pendingProps), t.flags |= 2, re(e), e.memoizedState = null, t;
  }
  function sy(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (a.mode === "hidden")
          return t = Eu(e, a), e.lanes = 536870912, rn(null, t);
        if (cc(e), (t = Tt) ? (t = xd(
          t,
          be
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: il !== null ? { id: Me, overflow: Ue } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Kr(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw fl(e);
        return e.lanes = 536870912, null;
      }
      return Eu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (cc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = ro(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (jt || da(t, e, l, !1), n = (l & t.childLanes) !== 0, jt || n) {
        if (a = Et, a !== null && (i = Pf(a, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Bl(t, i), le(a, t, i), Dc;
        Uu(), e = ro(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Tt = xe(i.nextSibling), Xt = e, ct = !0, cl = null, be = !1, t !== null && $r(e, t), e = Eu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ye(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function xu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Rc(t, e, l, a, n) {
    return wl(e), l = rc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = sc(), t !== null && !jt ? (oc(t, e, n), Ze(t, e, n)) : (ct && a && Vi(e), e.flags |= 1, Vt(t, e, l, n), e.child);
  }
  function so(t, e, l, a, n, u) {
    return wl(e), e.updateQueue = null, l = ms(
      e,
      a,
      l,
      n
    ), ds(t), a = sc(), t !== null && !jt ? (oc(t, e, u), Ze(t, e, u)) : (ct && a && Vi(e), e.flags |= 1, Vt(t, e, l, u), e.child);
  }
  function oo(t, e, l, a, n) {
    if (wl(e), e.stateNode === null) {
      var u = fa, i = l.contextType;
      typeof i == "object" && i !== null && (u = Qt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Cc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ec(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Qt(i) : fa, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Ac(
        e,
        l,
        i,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Cc.enqueueReplaceState(u, u.state, null), an(e, a, u, n), ln(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var r = e.memoizedProps, m = Kl(l, r);
      u.props = m;
      var T = u.context, R = l.contextType;
      i = fa, typeof R == "object" && R !== null && (i = Qt(R));
      var N = l.getDerivedStateFromProps;
      R = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== i) && Fs(
        e,
        u,
        a,
        i
      ), sl = !1;
      var A = e.memoizedState;
      u.state = A, an(e, a, u, n), ln(), T = e.memoizedState, r || A !== T || sl ? (typeof N == "function" && (Ac(
        e,
        l,
        N,
        a
      ), T = e.memoizedState), (m = sl || Ws(
        e,
        l,
        m,
        a,
        A,
        T,
        i
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = T), u.props = a, u.state = T, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, lc(t, e), i = e.memoizedProps, R = Kl(l, i), u.props = R, N = e.pendingProps, A = u.context, T = l.contextType, m = fa, typeof T == "object" && T !== null && (m = Qt(T)), r = l.getDerivedStateFromProps, (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || A !== m) && Fs(
        e,
        u,
        a,
        m
      ), sl = !1, A = e.memoizedState, u.state = A, an(e, a, u, n), ln();
      var D = e.memoizedState;
      i !== N || A !== D || sl || t !== null && t.dependencies !== null && au(t.dependencies) ? (typeof r == "function" && (Ac(
        e,
        l,
        r,
        a
      ), D = e.memoizedState), (R = sl || Ws(
        e,
        l,
        R,
        a,
        A,
        D,
        m
      ) || t !== null && t.dependencies !== null && au(t.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, D, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        D,
        m
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = D), u.props = a, u.state = D, u.context = m, a = R) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, xu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Vl(
      e,
      t.child,
      null,
      n
    ), e.child = Vl(
      e,
      null,
      l,
      n
    )) : Vt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Ze(
      t,
      e,
      n
    ), t;
  }
  function mo(t, e, l, a) {
    return Ll(), e.flags |= 256, Vt(t, e, l, a), e.child;
  }
  var Oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(t) {
    return { baseLanes: t, cachePool: es() };
  }
  function Uc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= oe), t;
  }
  function ho(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Ot.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (n ? ml(e) : hl(), (t = Tt) ? (t = xd(
          t,
          be
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: il !== null ? { id: Me, overflow: Ue } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Kr(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw fl(e);
        return yf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, n ? (hl(), n = e.mode, r = Tu(
        { mode: "hidden", children: r },
        n
      ), a = ql(
        a,
        n,
        l,
        null
      ), r.return = e, a.return = e, r.sibling = a, e.child = r, a = e.child, a.memoizedState = Mc(l), a.childLanes = Uc(
        t,
        i,
        l
      ), e.memoizedState = Oc, rn(null, a)) : (ml(e), Nc(e, r));
    }
    var m = t.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        e.flags & 256 ? (ml(e), e.flags &= -257, e = jc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (hl(), e.child = t.child, e.flags |= 128, e = null) : (hl(), r = a.fallback, n = e.mode, a = Tu(
          { mode: "visible", children: a.children },
          n
        ), r = ql(
          r,
          n,
          l,
          null
        ), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, Vl(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Mc(l), a.childLanes = Uc(
          t,
          i,
          l
        ), e.memoizedState = Oc, e = rn(null, a));
      else if (ml(e), yf(r)) {
        if (i = r.nextSibling && r.nextSibling.dataset, i) var T = i.dgst;
        i = T, a = Error(f(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), e = jc(
          t,
          e,
          l
        );
      } else if (jt || da(t, e, l, !1), i = (l & t.childLanes) !== 0, jt || i) {
        if (i = Et, i !== null && (a = Pf(i, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Bl(t, a), le(i, t, a), Dc;
        hf(r) || Uu(), e = jc(
          t,
          e,
          l
        );
      } else
        hf(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Tt = xe(
          r.nextSibling
        ), Xt = e, ct = !0, cl = null, be = !1, t !== null && $r(e, t), e = Nc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (hl(), r = a.fallback, n = e.mode, m = t.child, T = m.sibling, a = Ye(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, T !== null ? r = Ye(
      T,
      r
    ) : (r = ql(
      r,
      n,
      l,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, rn(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = Mc(l) : (n = r.cachePool, n !== null ? (m = Ut._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = es(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: n
    }), a.memoizedState = r, a.childLanes = Uc(
      t,
      i,
      l
    ), e.memoizedState = Oc, rn(t.child, a)) : (ml(e), l = t.child, t = l.sibling, l = Ye(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Nc(t, e) {
    return e = Tu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Tu(t, e) {
    return t = ce(22, t, null, e), t.lanes = 0, t;
  }
  function jc(t, e, l) {
    return Vl(e, t.child, null, l), t = Nc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function yo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), $i(t.return, e, l);
  }
  function Hc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function vo(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Ot.current, r = (i & 2) !== 0;
    if (r ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, G(Ot, i), Vt(t, e, a, l), a = ct ? $a : 0, !r && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && yo(t, l, e);
        else if (t.tag === 19)
          yo(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && ou(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Hc(
          e,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && ou(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Hc(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Hc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ze(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), gl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (da(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Ye(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ye(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Bc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && au(t)));
  }
  function oy(t, e, l) {
    switch (e.tag) {
      case 3:
        Jt(e, e.stateNode.containerInfo), rl(e, Ut, t.memoizedState.cache), Ll();
        break;
      case 27:
      case 5:
        ja(e);
        break;
      case 4:
        Jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        rl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, cc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ml(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ho(t, e, l) : (ml(e), t = Ze(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        ml(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (da(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return vo(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), G(Ot, Ot.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, co(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        rl(e, Ut, t.memoizedState.cache);
    }
    return Ze(t, e, l);
  }
  function go(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        jt = !0;
      else {
        if (!Bc(t, l) && (e.flags & 128) === 0)
          return jt = !1, oy(
            t,
            e,
            l
          );
        jt = (t.flags & 131072) !== 0;
      }
    else
      jt = !1, ct && (e.flags & 1048576) !== 0 && kr(e, $a, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Xl(e.elementType), e.type = t, typeof t == "function")
            Gi(t) ? (a = Kl(t, a), e.tag = 1, e = oo(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Rc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === ot) {
                e.tag = 11, e = no(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === F) {
                e.tag = 14, e = uo(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = He(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Rc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = Kl(
          a,
          e.pendingProps
        ), oo(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Jt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, lc(t, e), an(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, rl(e, Ut, a), a !== u.cache && Wi(
            e,
            [Ut],
            l,
            !0
          ), ln(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = mo(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = ge(
                Error(f(424)),
                e
              ), Wa(n), e = mo(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Tt = xe(t.firstChild), Xt = e, ct = !0, cl = null, be = !0, l = cs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), a === n) {
              e = Ze(
                t,
                e,
                l
              );
              break t;
            }
            Vt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return xu(t, e), t === null ? (l = Dd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = Yu(
          lt.current
        ).createElement(l), a[Gt] = e, a[Wt] = t, Zt(a, l, t), Lt(a), e.stateNode = a) : e.memoizedState = Dd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ja(e), t === null && ct && (a = e.stateNode = Ad(
          e.type,
          e.pendingProps,
          lt.current
        ), Xt = e, be = !0, n = Tt, xl(e.type) ? (vf = n, Tt = xe(a.firstChild)) : Tt = n), Vt(
          t,
          e,
          e.pendingProps.children,
          l
        ), xu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((n = a = Tt) && (a = Gy(
          a,
          e.type,
          e.pendingProps,
          be
        ), a !== null ? (e.stateNode = a, Xt = e, Tt = xe(a.firstChild), be = !1, n = !0) : n = !1), n || fl(e)), ja(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, of(n, u) ? a = null : i !== null && of(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = rc(
          t,
          e,
          ly,
          null,
          null,
          l
        ), zn._currentValue = n), xu(t, e), Vt(t, e, a, l), e.child;
      case 6:
        return t === null && ct && ((t = l = Tt) && (l = Xy(
          l,
          e.pendingProps,
          be
        ), l !== null ? (e.stateNode = l, Xt = e, Tt = null, t = !0) : t = !1), t || fl(e)), null;
      case 13:
        return ho(t, e, l);
      case 4:
        return Jt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Vl(
          e,
          null,
          a,
          l
        ) : Vt(t, e, a, l), e.child;
      case 11:
        return no(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Vt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Vt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Vt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, rl(e, e.type, a.value), Vt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, wl(e), n = Qt(n), a = a(n), e.flags |= 1, Vt(t, e, a, l), e.child;
      case 14:
        return uo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return io(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return vo(t, e, l);
      case 31:
        return sy(t, e, l);
      case 22:
        return co(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return wl(e), a = Qt(Ut), t === null ? (n = Pi(), n === null && (n = Et, u = Fi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, ec(e), rl(e, Ut, n)) : ((t.lanes & l) !== 0 && (lc(t, e), an(e, null, null, l), ln()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), rl(e, Ut, a)) : (a = u.cache, rl(e, Ut, a), a !== n.cache && Wi(
          e,
          [Ut],
          l,
          !0
        ))), Vt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Ke(t) {
    t.flags |= 4;
  }
  function qc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Vo()) t.flags |= 8192;
        else
          throw Ql = cu, tc;
    } else t.flags &= -16777217;
  }
  function po(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Nd(e))
      if (Vo()) t.flags |= 8192;
      else
        throw Ql = cu, tc;
  }
  function zu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Wf() : 536870912, t.lanes |= e, za |= e);
  }
  function sn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function dy(t, e, l) {
    var a = e.pendingProps;
    switch (Zi(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(e), null;
      case 1:
        return zt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xe(Ut), Rt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (oa(e) ? Ke(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ji())), zt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Ke(e), u !== null ? (zt(e), po(e, u)) : (zt(e), qc(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (Ke(e), zt(e), po(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ke(e), zt(e), qc(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (Hn(e), l = lt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return zt(e), null;
          }
          t = Z.current, oa(e) ? Wr(e) : (t = Ad(n, a, l), e.stateNode = t, Ke(e));
        }
        return zt(e), null;
      case 5:
        if (Hn(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return zt(e), null;
          }
          if (u = Z.current, oa(e))
            Wr(e);
          else {
            var i = Yu(
              lt.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[Gt] = e, u[Wt] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Zt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ke(e);
          }
        }
        return zt(e), qc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = lt.current, oa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Xt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Gt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || hd(t.nodeValue, l)), t || fl(e, !0);
          } else
            t = Yu(t).createTextNode(
              a
            ), t[Gt] = e, e.stateNode = t;
        }
        return zt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = oa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[Gt] = e;
            } else
              Ll(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), t = !1;
          } else
            l = Ji(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return zt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = oa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[Gt] = e;
            } else
              Ll(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), n = !1;
          } else
            n = Ji(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return re(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), zu(e, e.updateQueue), zt(e), null);
      case 4:
        return Rt(), t === null && uf(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return Xe(e.type), zt(e), null;
      case 19:
        if (H(Ot), a = e.memoizedState, a === null) return zt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) sn(a, !1);
          else {
            if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = ou(t), u !== null) {
                  for (e.flags |= 128, sn(a, !1), t = u.updateQueue, e.updateQueue = t, zu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Zr(l, t), l = l.sibling;
                  return G(
                    Ot,
                    Ot.current & 1 | 2
                  ), ct && we(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ae() > Ru && (e.flags |= 128, n = !0, sn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = ou(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, zu(e, t), sn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct)
                return zt(e), null;
            } else
              2 * ae() - a.renderingStartTime > Ru && l !== 536870912 && (e.flags |= 128, n = !0, sn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ae(), t.sibling = null, l = Ot.current, G(
          Ot,
          n ? l & 1 | 2 : l & 1
        ), ct && we(e, a.treeForkCount), t) : (zt(e), null);
      case 22:
      case 23:
        return re(e), ic(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && zu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && H(Gl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Xe(Ut), zt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function my(t, e) {
    switch (Zi(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Xe(Ut), Rt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Hn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (re(e), e.alternate === null)
            throw Error(f(340));
          Ll();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          Ll();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return H(Ot), null;
      case 4:
        return Rt(), null;
      case 10:
        return Xe(e.type), null;
      case 22:
      case 23:
        return re(e), ic(), t !== null && H(Gl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Xe(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function So(t, e) {
    switch (Zi(e), e.tag) {
      case 3:
        Xe(Ut), Rt();
        break;
      case 26:
      case 27:
      case 5:
        Hn(e);
        break;
      case 4:
        Rt();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        H(Ot);
        break;
      case 10:
        Xe(e.type);
        break;
      case 22:
      case 23:
        re(e), ic(), t !== null && H(Gl);
        break;
      case 24:
        Xe(Ut);
    }
  }
  function on(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      yt(e, e.return, r);
    }
  }
  function yl(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, r = i.destroy;
            if (r !== void 0) {
              i.destroy = void 0, n = e;
              var m = l, T = r;
              try {
                T();
              } catch (R) {
                yt(
                  n,
                  m,
                  R
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (R) {
      yt(e, e.return, R);
    }
  }
  function bo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        rs(e, l);
      } catch (a) {
        yt(t, t.return, a);
      }
    }
  }
  function Eo(t, e, l) {
    l.props = Kl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      yt(t, e, a);
    }
  }
  function dn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      yt(t, e, n);
    }
  }
  function Ne(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          yt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          yt(t, e, n);
        }
      else l.current = null;
  }
  function xo(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function Lc(t, e, l) {
    try {
      var a = t.stateNode;
      Hy(a, t.type, l, e), a[Wt] = e;
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function To(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && xl(t.type) || t.tag === 4;
  }
  function Yc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || To(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && xl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function wc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = qe));
    else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (wc(t, e, l), t = t.sibling; t !== null; )
        wc(t, e, l), t = t.sibling;
  }
  function Au(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Au(t, e, l), t = t.sibling; t !== null; )
        Au(t, e, l), t = t.sibling;
  }
  function zo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Zt(e, a, l), e[Gt] = t, e[Wt] = l;
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  var Je = !1, Ht = !1, Gc = !1, Ao = typeof WeakSet == "function" ? WeakSet : Set, Yt = null;
  function hy(t, e) {
    if (t = t.containerInfo, rf = Ku, t = Br(t), ji(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0, r = -1, m = -1, T = 0, R = 0, N = t, A = null;
            e: for (; ; ) {
              for (var D; N !== l || n !== 0 && N.nodeType !== 3 || (r = i + n), N !== u || a !== 0 && N.nodeType !== 3 || (m = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (D = N.firstChild) !== null; )
                A = N, N = D;
              for (; ; ) {
                if (N === t) break e;
                if (A === l && ++T === n && (r = i), A === u && ++R === a && (m = i), (D = N.nextSibling) !== null) break;
                N = A, A = N.parentNode;
              }
              N = D;
            }
            l = r === -1 || m === -1 ? null : { start: r, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (sf = { focusedElem: t, selectionRange: l }, Ku = !1, Yt = e; Yt !== null; )
      if (e = Yt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Yt = t;
      else
        for (; Yt !== null; ) {
          switch (e = Yt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var Q = Kl(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch ($) {
                  yt(
                    l,
                    l.return,
                    $
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  mf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Yt = t;
            break;
          }
          Yt = e.return;
        }
  }
  function Co(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $e(t, l), a & 4 && on(5, l);
        break;
      case 1:
        if ($e(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              yt(l, l.return, i);
            }
          else {
            var n = Kl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              yt(
                l,
                l.return,
                i
              );
            }
          }
        a & 64 && bo(l), a & 512 && dn(l, l.return);
        break;
      case 3:
        if ($e(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            rs(t, e);
          } catch (i) {
            yt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && zo(l);
      case 26:
      case 5:
        $e(t, l), e === null && a & 4 && xo(l), a & 512 && dn(l, l.return);
        break;
      case 12:
        $e(t, l);
        break;
      case 31:
        $e(t, l), a & 4 && Ro(t, l);
        break;
      case 13:
        $e(t, l), a & 4 && Oo(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Ty.bind(
          null,
          l
        ), Qy(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Je, !a) {
          e = e !== null && e.memoizedState !== null || Ht, n = Je;
          var u = Ht;
          Je = a, (Ht = e) && !u ? We(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : $e(t, l), Je = n, Ht = u;
        }
        break;
      case 30:
        break;
      default:
        $e(t, l);
    }
  }
  function _o(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _o(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && gi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, It = !1;
  function ke(t, e, l) {
    for (l = l.child; l !== null; )
      Do(t, e, l), l = l.sibling;
  }
  function Do(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(Ha, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ht || Ne(l, e), ke(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ht || Ne(l, e);
        var a = At, n = It;
        xl(l.type) && (At = l.stateNode, It = !1), ke(
          t,
          e,
          l
        ), En(l.stateNode), At = a, It = n;
        break;
      case 5:
        Ht || Ne(l, e);
      case 6:
        if (a = At, n = It, At = null, ke(
          t,
          e,
          l
        ), At = a, It = n, At !== null)
          if (It)
            try {
              (At.nodeType === 9 ? At.body : At.nodeName === "HTML" ? At.ownerDocument.body : At).removeChild(l.stateNode);
            } catch (u) {
              yt(
                l,
                e,
                u
              );
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (u) {
              yt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        At !== null && (It ? (t = At, bd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ua(t)) : bd(At, l.stateNode));
        break;
      case 4:
        a = At, n = It, At = l.stateNode.containerInfo, It = !0, ke(
          t,
          e,
          l
        ), At = a, It = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl(2, l, e), Ht || yl(4, l, e), ke(
          t,
          e,
          l
        );
        break;
      case 1:
        Ht || (Ne(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Eo(
          l,
          e,
          a
        )), ke(
          t,
          e,
          l
        );
        break;
      case 21:
        ke(
          t,
          e,
          l
        );
        break;
      case 22:
        Ht = (a = Ht) || l.memoizedState !== null, ke(
          t,
          e,
          l
        ), Ht = a;
        break;
      default:
        ke(
          t,
          e,
          l
        );
    }
  }
  function Ro(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ua(t);
      } catch (l) {
        yt(e, e.return, l);
      }
    }
  }
  function Oo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ua(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function yy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ao()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ao()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Cu(t, e) {
    var l = yy(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = zy.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, r = i;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (xl(r.type)) {
                At = r.stateNode, It = !1;
                break t;
              }
              break;
            case 5:
              At = r.stateNode, It = !1;
              break t;
            case 3:
            case 4:
              At = r.stateNode.containerInfo, It = !0;
              break t;
          }
          r = r.return;
        }
        if (At === null) throw Error(f(160));
        Do(u, i, n), At = null, It = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Mo(e, t), e = e.sibling;
  }
  var _e = null;
  function Mo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(e, t), te(t), a & 4 && (yl(3, t, t.return), on(3, t), yl(5, t, t.return));
        break;
      case 1:
        Pt(e, t), te(t), a & 512 && (Ht || l === null || Ne(l, l.return)), a & 64 && Je && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = _e;
        if (Pt(e, t), te(t), a & 512 && (Ht || l === null || Ne(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[La] || u[Gt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Zt(u, a, l), u[Gt] = t, Lt(u), a = u;
                      break t;
                    case "link":
                      var i = Md(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (i) {
                        for (var r = 0; r < i.length; r++)
                          if (u = i[r], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(r, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Zt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Md(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (r = 0; r < i.length; r++)
                          if (u = i[r], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(r, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Zt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[Gt] = t, Lt(u), a = u;
                }
                t.stateNode = a;
              } else
                Ud(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Od(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Ud(
              n,
              t.type,
              t.stateNode
            ) : Od(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Lc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Pt(e, t), te(t), a & 512 && (Ht || l === null || Ne(l, l.return)), l !== null && a & 4 && Lc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Pt(e, t), te(t), a & 512 && (Ht || l === null || Ne(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            ea(n, "");
          } catch (Q) {
            yt(t, t.return, Q);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Lc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Gc = !0);
        break;
      case 6:
        if (Pt(e, t), te(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (Q) {
            yt(t, t.return, Q);
          }
        }
        break;
      case 3:
        if (Xu = null, n = _e, _e = wu(e.containerInfo), Pt(e, t), _e = n, te(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ua(e.containerInfo);
          } catch (Q) {
            yt(t, t.return, Q);
          }
        Gc && (Gc = !1, Uo(t));
        break;
      case 4:
        a = _e, _e = wu(
          t.stateNode.containerInfo
        ), Pt(e, t), te(t), _e = a;
        break;
      case 12:
        Pt(e, t), te(t);
        break;
      case 31:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Cu(t, a)));
        break;
      case 13:
        Pt(e, t), te(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Du = ae()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Cu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, T = Je, R = Ht;
        if (Je = T || n, Ht = R || m, Pt(e, t), Ht = R, Je = T, te(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || Je || Ht || Jl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    r = m.stateNode;
                    var N = m.memoizedProps.style, A = N != null && N.hasOwnProperty("display") ? N.display : null;
                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Q) {
                  yt(m, m.return, Q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (Q) {
                  yt(m, m.return, Q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var D = m.stateNode;
                  n ? Ed(D, !0) : Ed(m.stateNode, !1);
                } catch (Q) {
                  yt(m, m.return, Q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Cu(t, l))));
        break;
      case 19:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Cu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(e, t), te(t);
    }
  }
  function te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (To(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Yc(t);
            Au(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ea(i, ""), l.flags &= -33);
            var r = Yc(t);
            Au(t, r, i);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, T = Yc(t);
            wc(
              t,
              T,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (R) {
        yt(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Uo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Uo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function $e(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Co(t, e.alternate, e), e = e.sibling;
  }
  function Jl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yl(4, e, e.return), Jl(e);
          break;
        case 1:
          Ne(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Eo(
            e,
            e.return,
            l
          ), Jl(e);
          break;
        case 27:
          En(e.stateNode);
        case 26:
        case 5:
          Ne(e, e.return), Jl(e);
          break;
        case 22:
          e.memoizedState === null && Jl(e);
          break;
        case 30:
          Jl(e);
          break;
        default:
          Jl(e);
      }
      t = t.sibling;
    }
  }
  function We(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          We(
            n,
            u,
            l
          ), on(4, u);
          break;
        case 1:
          if (We(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (T) {
              yt(a, a.return, T);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var r = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  fs(m[n], r);
            } catch (T) {
              yt(a, a.return, T);
            }
          }
          l && i & 64 && bo(u), dn(u, u.return);
          break;
        case 27:
          zo(u);
        case 26:
        case 5:
          We(
            n,
            u,
            l
          ), l && a === null && i & 4 && xo(u), dn(u, u.return);
          break;
        case 12:
          We(
            n,
            u,
            l
          );
          break;
        case 31:
          We(
            n,
            u,
            l
          ), l && i & 4 && Ro(n, u);
          break;
        case 13:
          We(
            n,
            u,
            l
          ), l && i & 4 && Oo(n, u);
          break;
        case 22:
          u.memoizedState === null && We(
            n,
            u,
            l
          ), dn(u, u.return);
          break;
        case 30:
          break;
        default:
          We(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Xc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Fa(l));
  }
  function Qc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        No(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function No(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(
          t,
          e,
          l,
          a
        ), n & 2048 && on(9, e);
        break;
      case 1:
        De(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        De(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t)));
        break;
      case 12:
        if (n & 2048) {
          De(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            yt(e, e.return, m);
          }
        } else
          De(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        De(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        De(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? De(
          t,
          e,
          l,
          a
        ) : mn(t, e) : u._visibility & 2 ? De(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, Ea(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Xc(i, e);
        break;
      case 24:
        De(
          t,
          e,
          l,
          a
        ), n & 2048 && Qc(e.alternate, e);
        break;
      default:
        De(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ea(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, r = l, m = a, T = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ea(
            u,
            i,
            r,
            m,
            n
          ), on(8, i);
          break;
        case 23:
          break;
        case 22:
          var R = i.stateNode;
          i.memoizedState !== null ? R._visibility & 2 ? Ea(
            u,
            i,
            r,
            m,
            n
          ) : mn(
            u,
            i
          ) : (R._visibility |= 2, Ea(
            u,
            i,
            r,
            m,
            n
          )), n && T & 2048 && Xc(
            i.alternate,
            i
          );
          break;
        case 24:
          Ea(
            u,
            i,
            r,
            m,
            n
          ), n && T & 2048 && Qc(i.alternate, i);
          break;
        default:
          Ea(
            u,
            i,
            r,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function mn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            mn(l, a), n & 2048 && Xc(
              a.alternate,
              a
            );
            break;
          case 24:
            mn(l, a), n & 2048 && Qc(a.alternate, a);
            break;
          default:
            mn(l, a);
        }
        e = e.sibling;
      }
  }
  var hn = 8192;
  function xa(t, e, l) {
    if (t.subtreeFlags & hn)
      for (t = t.child; t !== null; )
        jo(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function jo(t, e, l) {
    switch (t.tag) {
      case 26:
        xa(
          t,
          e,
          l
        ), t.flags & hn && t.memoizedState !== null && ev(
          l,
          _e,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        xa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = _e;
        _e = wu(t.stateNode.containerInfo), xa(
          t,
          e,
          l
        ), _e = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = hn, hn = 16777216, xa(
          t,
          e,
          l
        ), hn = a) : xa(
          t,
          e,
          l
        ));
        break;
      default:
        xa(
          t,
          e,
          l
        );
    }
  }
  function Ho(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function yn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Yt = a, qo(
            a,
            t
          );
        }
      Ho(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bo(t), t = t.sibling;
  }
  function Bo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yn(t), t.flags & 2048 && yl(9, t, t.return);
        break;
      case 3:
        yn(t);
        break;
      case 12:
        yn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, _u(t)) : yn(t);
        break;
      default:
        yn(t);
    }
  }
  function _u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Yt = a, qo(
            a,
            t
          );
        }
      Ho(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, e, e.return), _u(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, _u(e));
          break;
        default:
          _u(e);
      }
      t = t.sibling;
    }
  }
  function qo(t, e) {
    for (; Yt !== null; ) {
      var l = Yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Yt = a;
      else
        t: for (l = t; Yt !== null; ) {
          a = Yt;
          var n = a.sibling, u = a.return;
          if (_o(a), a === l) {
            Yt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Yt = n;
            break t;
          }
          Yt = u;
        }
    }
  }
  var vy = {
    getCacheForType: function(t) {
      var e = Qt(Ut), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Qt(Ut).controller.signal;
    }
  }, gy = typeof WeakMap == "function" ? WeakMap : Map, st = 0, Et = null, at = null, ut = 0, ht = 0, se = null, vl = !1, Ta = !1, Vc = !1, Fe = 0, _t = 0, gl = 0, kl = 0, Zc = 0, oe = 0, za = 0, vn = null, ee = null, Kc = !1, Du = 0, Lo = 0, Ru = 1 / 0, Ou = null, pl = null, Bt = 0, Sl = null, Aa = null, Ie = 0, Jc = 0, kc = null, Yo = null, gn = 0, $c = null;
  function de() {
    return (st & 2) !== 0 && ut !== 0 ? ut & -ut : O.T !== null ? ef() : tr();
  }
  function wo() {
    if (oe === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Ln;
        Ln <<= 1, (Ln & 3932160) === 0 && (Ln = 262144), oe = t;
      } else oe = 536870912;
    return t = fe.current, t !== null && (t.flags |= 32), oe;
  }
  function le(t, e, l) {
    (t === Et && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0), bl(
      t,
      ut,
      oe,
      !1
    )), qa(t, l), ((st & 2) === 0 || t !== Et) && (t === Et && ((st & 2) === 0 && (kl |= l), _t === 4 && bl(
      t,
      ut,
      oe,
      !1
    )), je(t));
  }
  function Go(t, e, l) {
    if ((st & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ba(t, e), n = a ? by(t, e) : Fc(t, e, !0), u = a;
    do {
      if (n === 0) {
        Ta && !a && bl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !py(l)) {
          n = Fc(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var r = t;
              n = vn;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (Ca(r, i).flags |= 256), i = Fc(
                r,
                i,
                !1
              ), i !== 2) {
                if (Vc && !m) {
                  r.errorRecoveryDisabledLanes |= u, kl |= u, n = 4;
                  break t;
                }
                u = ee, ee = n, u !== null && (ee === null ? ee = u : ee.push.apply(
                  ee,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ca(t, 0), bl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              bl(
                a,
                e,
                oe,
                !vl
              );
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = Du + 300 - ae(), 10 < n)) {
            if (bl(
              a,
              e,
              oe,
              !vl
            ), wn(a, 0, !0) !== 0) break t;
            Ie = e, a.timeoutHandle = pd(
              Xo.bind(
                null,
                a,
                l,
                ee,
                Ou,
                Kc,
                e,
                oe,
                kl,
                za,
                vl,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Xo(
            a,
            l,
            ee,
            Ou,
            Kc,
            e,
            oe,
            kl,
            za,
            vl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    je(t);
  }
  function Xo(t, e, l, a, n, u, i, r, m, T, R, N, A, D) {
    if (t.timeoutHandle = -1, N = e.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qe
      }, jo(
        e,
        u,
        N
      );
      var Q = (u & 62914560) === u ? Du - ae() : (u & 4194048) === u ? Lo - ae() : 0;
      if (Q = lv(
        N,
        Q
      ), Q !== null) {
        Ie = u, t.cancelPendingCommit = Q(
          Wo.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            i,
            r,
            m,
            R,
            N,
            null,
            A,
            D
          )
        ), bl(t, u, i, !T);
        return;
      }
    }
    Wo(
      t,
      e,
      u,
      l,
      a,
      n,
      i,
      r,
      m
    );
  }
  function py(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ie(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function bl(t, e, l, a) {
    e &= ~Zc, e &= ~kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ue(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && Ff(t, l, e);
  }
  function Mu() {
    return (st & 6) === 0 ? (pn(0), !1) : !0;
  }
  function Wc() {
    if (at !== null) {
      if (ht === 0)
        var t = at.return;
      else
        t = at, Ge = Yl = null, dc(t), va = null, Pa = 0, t = at;
      for (; t !== null; )
        So(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Ly(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ie = 0, Wc(), Et = t, at = l = Ye(t.current, null), ut = e, ht = 0, se = null, vl = !1, Ta = Ba(t, e), Vc = !1, za = oe = Zc = kl = gl = _t = 0, ee = vn = null, Kc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ue(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return Fe = e, In(), l;
  }
  function Qo(t, e) {
    tt = null, O.H = fn, e === ya || e === iu ? (e = ns(), ht = 3) : e === tc ? (e = ns(), ht = 4) : ht = e === Dc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, se = e, at === null && (_t = 1, bu(
      t,
      ge(e, t.current)
    ));
  }
  function Vo() {
    var t = fe.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Ee === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Ee : !1;
  }
  function Zo() {
    var t = O.H;
    return O.H = fn, t === null ? fn : t;
  }
  function Ko() {
    var t = O.A;
    return O.A = vy, t;
  }
  function Uu() {
    _t = 4, vl || (ut & 4194048) !== ut && fe.current !== null || (Ta = !0), (gl & 134217727) === 0 && (kl & 134217727) === 0 || Et === null || bl(
      Et,
      ut,
      oe,
      !1
    );
  }
  function Fc(t, e, l) {
    var a = st;
    st |= 2;
    var n = Zo(), u = Ko();
    (Et !== t || ut !== e) && (Ou = null, Ca(t, e)), e = !1;
    var i = _t;
    t: do
      try {
        if (ht !== 0 && at !== null) {
          var r = at, m = se;
          switch (ht) {
            case 8:
              Wc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var T = ht;
              if (ht = 0, se = null, _a(t, r, m, T), l && Ta) {
                i = 0;
                break t;
              }
              break;
            default:
              T = ht, ht = 0, se = null, _a(t, r, m, T);
          }
        }
        Sy(), i = _t;
        break;
      } catch (R) {
        Qo(t, R);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ge = Yl = null, st = a, O.H = n, O.A = u, at === null && (Et = null, ut = 0, In()), i;
  }
  function Sy() {
    for (; at !== null; ) Jo(at);
  }
  function by(t, e) {
    var l = st;
    st |= 2;
    var a = Zo(), n = Ko();
    Et !== t || ut !== e ? (Ou = null, Ru = ae() + 500, Ca(t, e)) : Ta = Ba(
      t,
      e
    );
    t: do
      try {
        if (ht !== 0 && at !== null) {
          e = at;
          var u = se;
          e: switch (ht) {
            case 1:
              ht = 0, se = null, _a(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ls(u)) {
                ht = 0, se = null, ko(e);
                break;
              }
              e = function() {
                ht !== 2 && ht !== 9 || Et !== t || (ht = 7), je(t);
              }, u.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              ls(u) ? (ht = 0, se = null, ko(e)) : (ht = 0, se = null, _a(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var r = at;
                  if (i ? Nd(i) : r.stateNode.complete) {
                    ht = 0, se = null;
                    var m = r.sibling;
                    if (m !== null) at = m;
                    else {
                      var T = r.return;
                      T !== null ? (at = T, Nu(T)) : at = null;
                    }
                    break e;
                  }
              }
              ht = 0, se = null, _a(t, e, u, 5);
              break;
            case 6:
              ht = 0, se = null, _a(t, e, u, 6);
              break;
            case 8:
              Wc(), _t = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Ey();
        break;
      } catch (R) {
        Qo(t, R);
      }
    while (!0);
    return Ge = Yl = null, O.H = a, O.A = n, st = l, at !== null ? 0 : (Et = null, ut = 0, In(), _t);
  }
  function Ey() {
    for (; at !== null && !Vm(); )
      Jo(at);
  }
  function Jo(t) {
    var e = go(t.alternate, t, Fe);
    t.memoizedProps = t.pendingProps, e === null ? Nu(t) : at = e;
  }
  function ko(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = so(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ut
        );
        break;
      case 11:
        e = so(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ut
        );
        break;
      case 5:
        dc(e);
      default:
        So(l, e), e = at = Zr(e, Fe), e = go(l, e, Fe);
    }
    t.memoizedProps = t.pendingProps, e === null ? Nu(t) : at = e;
  }
  function _a(t, e, l, a) {
    Ge = Yl = null, dc(e), va = null, Pa = 0;
    var n = e.return;
    try {
      if (ry(
        t,
        n,
        e,
        l,
        ut
      )) {
        _t = 1, bu(
          t,
          ge(l, t.current)
        ), at = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw at = n, u;
      _t = 1, bu(
        t,
        ge(l, t.current)
      ), at = null;
      return;
    }
    e.flags & 32768 ? (ct || a === 1 ? t = !0 : Ta || (ut & 536870912) !== 0 ? t = !1 : (vl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), $o(e, t)) : Nu(e);
  }
  function Nu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        $o(
          e,
          vl
        );
        return;
      }
      t = e.return;
      var l = dy(
        e.alternate,
        e,
        Fe
      );
      if (l !== null) {
        at = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function $o(t, e) {
    do {
      var l = my(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, at = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    _t = 6, at = null;
  }
  function Wo(t, e, l, a, n, u, i, r, m) {
    t.cancelPendingCommit = null;
    do
      ju();
    while (Bt !== 0);
    if ((st & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= Yi, th(
        t,
        l,
        u,
        i,
        r,
        m
      ), t === Et && (at = Et = null, ut = 0), Aa = e, Sl = t, Ie = l, Jc = u, kc = n, Yo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ay(Bn, function() {
        return ed(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = O.T, O.T = null, n = w.p, w.p = 2, i = st, st |= 4;
        try {
          hy(t, e, l);
        } finally {
          st = i, w.p = n, O.T = a;
        }
      }
      Bt = 1, Fo(), Io(), Po();
    }
  }
  function Fo() {
    if (Bt === 1) {
      Bt = 0;
      var t = Sl, e = Aa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null;
        var a = w.p;
        w.p = 2;
        var n = st;
        st |= 4;
        try {
          Mo(e, t);
          var u = sf, i = Br(t.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (i !== r && r && r.ownerDocument && Hr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && ji(r)) {
              var T = m.start, R = m.end;
              if (R === void 0 && (R = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  R,
                  r.value.length
                );
              else {
                var N = r.ownerDocument || document, A = N && N.defaultView || window;
                if (A.getSelection) {
                  var D = A.getSelection(), Q = r.textContent.length, $ = Math.min(m.start, Q), St = m.end === void 0 ? $ : Math.min(m.end, Q);
                  !D.extend && $ > St && (i = St, St = $, $ = i);
                  var b = jr(
                    r,
                    $
                  ), v = jr(
                    r,
                    St
                  );
                  if (b && v && (D.rangeCount !== 1 || D.anchorNode !== b.node || D.anchorOffset !== b.offset || D.focusNode !== v.node || D.focusOffset !== v.offset)) {
                    var x = N.createRange();
                    x.setStart(b.node, b.offset), D.removeAllRanges(), $ > St ? (D.addRange(x), D.extend(v.node, v.offset)) : (x.setEnd(v.node, v.offset), D.addRange(x));
                  }
                }
              }
            }
            for (N = [], D = r; D = D.parentNode; )
              D.nodeType === 1 && N.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < N.length; r++) {
              var U = N[r];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          Ku = !!rf, sf = rf = null;
        } finally {
          st = n, w.p = a, O.T = l;
        }
      }
      t.current = e, Bt = 2;
    }
  }
  function Io() {
    if (Bt === 2) {
      Bt = 0;
      var t = Sl, e = Aa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = O.T, O.T = null;
        var a = w.p;
        w.p = 2;
        var n = st;
        st |= 4;
        try {
          Co(t, e.alternate, e);
        } finally {
          st = n, w.p = a, O.T = l;
        }
      }
      Bt = 3;
    }
  }
  function Po() {
    if (Bt === 4 || Bt === 3) {
      Bt = 0, Zm();
      var t = Sl, e = Aa, l = Ie, a = Yo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Bt = 5 : (Bt = 0, Aa = Sl = null, td(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (pl = null), yi(l), e = e.stateNode, ne && typeof ne.onCommitFiberRoot == "function")
        try {
          ne.onCommitFiberRoot(
            Ha,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = O.T, n = w.p, w.p = 2, O.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var r = a[i];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          O.T = e, w.p = n;
        }
      }
      (Ie & 3) !== 0 && ju(), je(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === $c ? gn++ : (gn = 0, $c = t) : gn = 0, pn(0);
    }
  }
  function td(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Fa(e)));
  }
  function ju() {
    return Fo(), Io(), Po(), ed();
  }
  function ed() {
    if (Bt !== 5) return !1;
    var t = Sl, e = Jc;
    Jc = 0;
    var l = yi(Ie), a = O.T, n = w.p;
    try {
      w.p = 32 > l ? 32 : l, O.T = null, l = kc, kc = null;
      var u = Sl, i = Ie;
      if (Bt = 0, Aa = Sl = null, Ie = 0, (st & 6) !== 0) throw Error(f(331));
      var r = st;
      if (st |= 4, Bo(u.current), No(
        u,
        u.current,
        i,
        l
      ), st = r, pn(0, !1), ne && typeof ne.onPostCommitFiberRoot == "function")
        try {
          ne.onPostCommitFiberRoot(Ha, u);
        } catch {
        }
      return !0;
    } finally {
      w.p = n, O.T = a, td(t, e);
    }
  }
  function ld(t, e, l) {
    e = ge(l, e), e = _c(t.stateNode, e, 2), t = dl(t, e, 2), t !== null && (qa(t, 2), je(t));
  }
  function yt(t, e, l) {
    if (t.tag === 3)
      ld(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ld(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pl === null || !pl.has(a))) {
            t = ge(l, t), l = lo(2), a = dl(e, l, 2), a !== null && (ao(
              l,
              a,
              e,
              t
            ), qa(a, 2), je(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ic(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new gy();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Vc = !0, n.add(l), t = xy.bind(null, t, e, l), e.then(t, t));
  }
  function xy(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Et === t && (ut & l) === l && (_t === 4 || _t === 3 && (ut & 62914560) === ut && 300 > ae() - Du ? (st & 2) === 0 && Ca(t, 0) : Zc |= l, za === ut && (za = 0)), je(t);
  }
  function ad(t, e) {
    e === 0 && (e = Wf()), t = Bl(t, e), t !== null && (qa(t, e), je(t));
  }
  function Ty(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ad(t, l);
  }
  function zy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), ad(t, l);
  }
  function Ay(t, e) {
    return oi(t, e);
  }
  var Hu = null, Da = null, Pc = !1, Bu = !1, tf = !1, El = 0;
  function je(t) {
    t !== Da && t.next === null && (Da === null ? Hu = Da = t : Da = Da.next = t), Bu = !0, Pc || (Pc = !0, _y());
  }
  function pn(t, e) {
    if (!tf && Bu) {
      tf = !0;
      do
        for (var l = !1, a = Hu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, r = a.pingedLanes;
              u = (1 << 31 - ue(42 | t) + 1) - 1, u &= n & ~(i & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, cd(a, u));
          } else
            u = ut, u = wn(
              a,
              a === Et ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ba(a, u) || (l = !0, cd(a, u));
          a = a.next;
        }
      while (l);
      tf = !1;
    }
  }
  function Cy() {
    nd();
  }
  function nd() {
    Bu = Pc = !1;
    var t = 0;
    El !== 0 && qy() && (t = El);
    for (var e = ae(), l = null, a = Hu; a !== null; ) {
      var n = a.next, u = ud(a, e);
      u === 0 ? (a.next = null, l === null ? Hu = n : l.next = n, n === null && (Da = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Bu = !0)), a = n;
    }
    Bt !== 0 && Bt !== 5 || pn(t), El !== 0 && (El = 0);
  }
  function ud(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ue(u), r = 1 << i, m = n[i];
      m === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[i] = Pm(r, e)) : m <= e && (t.expiredLanes |= r), u &= ~r;
    }
    if (e = Et, l = ut, l = wn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && di(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ba(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && di(a), yi(l)) {
        case 2:
        case 8:
          l = kf;
          break;
        case 32:
          l = Bn;
          break;
        case 268435456:
          l = $f;
          break;
        default:
          l = Bn;
      }
      return a = id.bind(null, t), l = oi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && di(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function id(t, e) {
    if (Bt !== 0 && Bt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ju() && t.callbackNode !== l)
      return null;
    var a = ut;
    return a = wn(
      t,
      t === Et ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Go(t, a, e), ud(t, ae()), t.callbackNode != null && t.callbackNode === l ? id.bind(null, t) : null);
  }
  function cd(t, e) {
    if (ju()) return null;
    Go(t, e, !0);
  }
  function _y() {
    Yy(function() {
      (st & 6) !== 0 ? oi(
        Jf,
        Cy
      ) : nd();
    });
  }
  function ef() {
    if (El === 0) {
      var t = ma;
      t === 0 && (t = qn, qn <<= 1, (qn & 261888) === 0 && (qn = 256)), El = t;
    }
    return El;
  }
  function fd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Vn("" + t);
  }
  function rd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Dy(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = fd(
        (n[Wt] || null).action
      ), i = a.submitter;
      i && (e = (e = i[Wt] || null) ? fd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var r = new kn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (El !== 0) {
                  var m = i ? rd(n, i) : new FormData(n);
                  Ec(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (r.preventDefault(), m = i ? rd(n, i) : new FormData(n), Ec(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var lf = 0; lf < Li.length; lf++) {
    var af = Li[lf], Ry = af.toLowerCase(), Oy = af[0].toUpperCase() + af.slice(1);
    Ce(
      Ry,
      "on" + Oy
    );
  }
  Ce(Yr, "onAnimationEnd"), Ce(wr, "onAnimationIteration"), Ce(Gr, "onAnimationStart"), Ce("dblclick", "onDoubleClick"), Ce("focusin", "onFocus"), Ce("focusout", "onBlur"), Ce(Kh, "onTransitionRun"), Ce(Jh, "onTransitionStart"), Ce(kh, "onTransitionCancel"), Ce(Xr, "onTransitionEnd"), Pl("onMouseEnter", ["mouseout", "mouseover"]), Pl("onMouseLeave", ["mouseout", "mouseover"]), Pl("onPointerEnter", ["pointerout", "pointerover"]), Pl("onPointerLeave", ["pointerout", "pointerover"]), Ul(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ul(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ul("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ul(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ul(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ul(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), My = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn)
  );
  function sd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var r = a[i], m = r.instance, T = r.currentTarget;
            if (r = r.listener, m !== u && n.isPropagationStopped())
              break t;
            u = r, n.currentTarget = T;
            try {
              u(n);
            } catch (R) {
              Fn(R);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (r = a[i], m = r.instance, T = r.currentTarget, r = r.listener, m !== u && n.isPropagationStopped())
              break t;
            u = r, n.currentTarget = T;
            try {
              u(n);
            } catch (R) {
              Fn(R);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[vi];
    l === void 0 && (l = e[vi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (od(e, t, 2, !1), l.add(a));
  }
  function nf(t, e, l) {
    var a = 0;
    e && (a |= 4), od(
      l,
      t,
      a,
      e
    );
  }
  var qu = "_reactListening" + Math.random().toString(36).slice(2);
  function uf(t) {
    if (!t[qu]) {
      t[qu] = !0, ar.forEach(function(l) {
        l !== "selectionchange" && (My.has(l) || nf(l, !1, t), nf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qu] || (e[qu] = !0, nf("selectionchange", !1, e));
    }
  }
  function od(t, e, l, a) {
    switch (wd(e)) {
      case 2:
        var n = uv;
        break;
      case 8:
        n = iv;
        break;
      default:
        n = Ef;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Ai || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function cf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var m = i.tag;
              if ((m === 3 || m === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; r !== null; ) {
            if (i = Wl(r), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    yr(function() {
      var T = u, R = Ti(l), N = [];
      t: {
        var A = Qr.get(t);
        if (A !== void 0) {
          var D = kn, Q = t;
          switch (t) {
            case "keypress":
              if (Kn(l) === 0) break t;
            case "keydown":
            case "keyup":
              D = zh;
              break;
            case "focusin":
              Q = "focus", D = Ri;
              break;
            case "focusout":
              Q = "blur", D = Ri;
              break;
            case "beforeblur":
            case "afterblur":
              D = Ri;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = pr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = dh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = _h;
              break;
            case Yr:
            case wr:
            case Gr:
              D = yh;
              break;
            case Xr:
              D = Rh;
              break;
            case "scroll":
            case "scrollend":
              D = sh;
              break;
            case "wheel":
              D = Mh;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = gh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = br;
              break;
            case "toggle":
            case "beforetoggle":
              D = Nh;
          }
          var $ = (e & 4) !== 0, St = !$ && (t === "scroll" || t === "scrollend"), b = $ ? A !== null ? A + "Capture" : null : A;
          $ = [];
          for (var v = T, x; v !== null; ) {
            var U = v;
            if (x = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || x === null || b === null || (U = wa(v, b), U != null && $.push(
              bn(v, U, x)
            )), St) break;
            v = v.return;
          }
          0 < $.length && (A = new D(
            A,
            Q,
            null,
            l,
            R
          ), N.push({ event: A, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (A = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", A && l !== xi && (Q = l.relatedTarget || l.fromElement) && (Wl(Q) || Q[$l]))
            break t;
          if ((D || A) && (A = R.window === R ? R : (A = R.ownerDocument) ? A.defaultView || A.parentWindow : window, D ? (Q = l.relatedTarget || l.toElement, D = T, Q = Q ? Wl(Q) : null, Q !== null && (St = h(Q), $ = Q.tag, Q !== St || $ !== 5 && $ !== 27 && $ !== 6) && (Q = null)) : (D = null, Q = T), D !== Q)) {
            if ($ = pr, U = "onMouseLeave", b = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && ($ = br, U = "onPointerLeave", b = "onPointerEnter", v = "pointer"), St = D == null ? A : Ya(D), x = Q == null ? A : Ya(Q), A = new $(
              U,
              v + "leave",
              D,
              l,
              R
            ), A.target = St, A.relatedTarget = x, U = null, Wl(R) === T && ($ = new $(
              b,
              v + "enter",
              Q,
              l,
              R
            ), $.target = x, $.relatedTarget = St, U = $), St = U, D && Q)
              e: {
                for ($ = Uy, b = D, v = Q, x = 0, U = b; U; U = $(U))
                  x++;
                U = 0;
                for (var k = v; k; k = $(k))
                  U++;
                for (; 0 < x - U; )
                  b = $(b), x--;
                for (; 0 < U - x; )
                  v = $(v), U--;
                for (; x--; ) {
                  if (b === v || v !== null && b === v.alternate) {
                    $ = b;
                    break e;
                  }
                  b = $(b), v = $(v);
                }
                $ = null;
              }
            else $ = null;
            D !== null && dd(
              N,
              A,
              D,
              $,
              !1
            ), Q !== null && St !== null && dd(
              N,
              St,
              Q,
              $,
              !0
            );
          }
        }
        t: {
          if (A = T ? Ya(T) : window, D = A.nodeName && A.nodeName.toLowerCase(), D === "select" || D === "input" && A.type === "file")
            var ft = Dr;
          else if (Cr(A))
            if (Rr)
              ft = Qh;
            else {
              ft = Gh;
              var K = wh;
            }
          else
            D = A.nodeName, !D || D.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? T && Ei(T.elementType) && (ft = Dr) : ft = Xh;
          if (ft && (ft = ft(t, T))) {
            _r(
              N,
              ft,
              l,
              R
            );
            break t;
          }
          K && K(t, A, T), t === "focusout" && T && A.type === "number" && T.memoizedProps.value != null && bi(A, "number", A.value);
        }
        switch (K = T ? Ya(T) : window, t) {
          case "focusin":
            (Cr(K) || K.contentEditable === "true") && (ua = K, Hi = T, ka = null);
            break;
          case "focusout":
            ka = Hi = ua = null;
            break;
          case "mousedown":
            Bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bi = !1, qr(N, l, R);
            break;
          case "selectionchange":
            if (Zh) break;
          case "keydown":
          case "keyup":
            qr(N, l, R);
        }
        var et;
        if (Mi)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          na ? zr(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Er && l.locale !== "ko" && (na || it !== "onCompositionStart" ? it === "onCompositionEnd" && na && (et = vr()) : (ul = R, Ci = "value" in ul ? ul.value : ul.textContent, na = !0)), K = Lu(T, it), 0 < K.length && (it = new Sr(
          it,
          t,
          null,
          l,
          R
        ), N.push({ event: it, listeners: K }), et ? it.data = et : (et = Ar(l), et !== null && (it.data = et)))), (et = Hh ? Bh(t, l) : qh(t, l)) && (it = Lu(T, "onBeforeInput"), 0 < it.length && (K = new Sr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), N.push({
          event: K,
          listeners: it
        }), K.data = et)), Dy(
          N,
          t,
          T,
          l,
          R
        );
      }
      sd(N, e);
    });
  }
  function bn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Lu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = wa(t, l), n != null && a.unshift(
        bn(t, n, u)
      ), n = wa(t, e), n != null && a.push(
        bn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Uy(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function dd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var r = l, m = r.alternate, T = r.stateNode;
      if (r = r.tag, m !== null && m === a) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (m = T, n ? (T = wa(l, u), T != null && i.unshift(
        bn(l, T, m)
      )) : n || (T = wa(l, u), T != null && i.push(
        bn(l, T, m)
      ))), l = l.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Ny = /\r\n?/g, jy = /\u0000|\uFFFD/g;
  function md(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ny, `
`).replace(jy, "");
  }
  function hd(t, e) {
    return e = md(e), md(t) === e;
  }
  function pt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ea(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ea(t, "" + a);
        break;
      case "className":
        Xn(t, "class", a);
        break;
      case "tabIndex":
        Xn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xn(t, l, a);
        break;
      case "style":
        mr(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Xn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Vn("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && pt(t, e, "name", n.name, n, null), pt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), pt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), pt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (pt(t, e, "encType", n.encType, n, null), pt(t, e, "method", n.method, n, null), pt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Vn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = qe);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Vn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Gn(t, "popover", a);
        break;
      case "xlinkActuate":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Gn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = fh.get(l) || l, Gn(t, l, a));
    }
  }
  function ff(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        mr(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ea(t, a) : (typeof a == "number" || typeof a == "bigint") && ea(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = qe);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!nr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Wt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Gn(t, l, a);
          }
    }
  }
  function Zt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  pt(t, e, u, i, l, null);
              }
          }
        n && pt(t, e, "srcSet", l.srcSet, l, null), a && pt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var r = u = i = n = null, m = null, T = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case "name":
                  n = R;
                  break;
                case "type":
                  i = R;
                  break;
                case "checked":
                  m = R;
                  break;
                case "defaultChecked":
                  T = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  r = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(f(137, e));
                  break;
                default:
                  pt(t, e, a, R, l, null);
              }
          }
        rr(
          t,
          u,
          r,
          m,
          T,
          i,
          n,
          !1
        );
        return;
      case "select":
        nt("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (r = l[n], r != null))
            switch (n) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "multiple":
                a = r;
              default:
                pt(t, e, n, r, l, null);
            }
        e = u, l = i, t.multiple = !!a, e != null ? ta(t, !!a, e, !1) : l != null && ta(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (r = l[i], r != null))
            switch (i) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                pt(t, e, i, r, l, null);
            }
        or(t, a, n, u);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : pt(t, e, m, a, l, null));
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Sn.length; a++)
          nt(Sn[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in l)
          if (l.hasOwnProperty(T) && (a = l[T], a != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                pt(t, e, T, a, l, null);
            }
        return;
      default:
        if (Ei(e)) {
          for (R in l)
            l.hasOwnProperty(R) && (a = l[R], a !== void 0 && ff(
              t,
              e,
              R,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && (a = l[r], a != null && pt(t, e, r, a, l, null));
  }
  function Hy(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, r = null, m = null, T = null, R = null;
        for (D in l) {
          var N = l[D];
          if (l.hasOwnProperty(D) && N != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = N;
              default:
                a.hasOwnProperty(D) || pt(t, e, D, null, a, N);
            }
        }
        for (var A in a) {
          var D = a[A];
          if (N = l[A], a.hasOwnProperty(A) && (D != null || N != null))
            switch (A) {
              case "type":
                u = D;
                break;
              case "name":
                n = D;
                break;
              case "checked":
                T = D;
                break;
              case "defaultChecked":
                R = D;
                break;
              case "value":
                i = D;
                break;
              case "defaultValue":
                r = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(f(137, e));
                break;
              default:
                D !== N && pt(
                  t,
                  e,
                  A,
                  D,
                  a,
                  N
                );
            }
        }
        Si(
          t,
          i,
          r,
          m,
          T,
          R,
          u,
          n
        );
        return;
      case "select":
        D = i = r = A = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = m;
              default:
                a.hasOwnProperty(u) || pt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== m && pt(
                  t,
                  e,
                  n,
                  u,
                  a,
                  m
                );
            }
        e = r, l = i, a = D, A != null ? ta(t, !!l, A, !1) : !!a != !!l && (e != null ? ta(t, !!l, e, !0) : ta(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        D = A = null;
        for (r in l)
          if (n = l[r], l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                pt(t, e, r, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                D = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && pt(t, e, i, n, a, u);
            }
        sr(t, A, D);
        return;
      case "option":
        for (var Q in l)
          A = l[Q], l.hasOwnProperty(Q) && A != null && !a.hasOwnProperty(Q) && (Q === "selected" ? t.selected = !1 : pt(
            t,
            e,
            Q,
            null,
            a,
            A
          ));
        for (m in a)
          A = a[m], D = l[m], a.hasOwnProperty(m) && A !== D && (A != null || D != null) && (m === "selected" ? t.selected = A && typeof A != "function" && typeof A != "symbol" : pt(
            t,
            e,
            m,
            A,
            a,
            D
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in l)
          A = l[$], l.hasOwnProperty($) && A != null && !a.hasOwnProperty($) && pt(t, e, $, null, a, A);
        for (T in a)
          if (A = a[T], D = l[T], a.hasOwnProperty(T) && A !== D && (A != null || D != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(f(137, e));
                break;
              default:
                pt(
                  t,
                  e,
                  T,
                  A,
                  a,
                  D
                );
            }
        return;
      default:
        if (Ei(e)) {
          for (var St in l)
            A = l[St], l.hasOwnProperty(St) && A !== void 0 && !a.hasOwnProperty(St) && ff(
              t,
              e,
              St,
              void 0,
              a,
              A
            );
          for (R in a)
            A = a[R], D = l[R], !a.hasOwnProperty(R) || A === D || A === void 0 && D === void 0 || ff(
              t,
              e,
              R,
              A,
              a,
              D
            );
          return;
        }
    }
    for (var b in l)
      A = l[b], l.hasOwnProperty(b) && A != null && !a.hasOwnProperty(b) && pt(t, e, b, null, a, A);
    for (N in a)
      A = a[N], D = l[N], !a.hasOwnProperty(N) || A === D || A == null && D == null || pt(t, e, N, A, a, D);
  }
  function yd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function By() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, r = n.duration;
        if (u && r && yd(i)) {
          for (i = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], T = m.startTime;
            if (T > r) break;
            var R = m.transferSize, N = m.initiatorType;
            R && yd(N) && (m = m.responseEnd, i += R * (m < r ? 1 : (r - T) / (m - T)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var rf = null, sf = null;
  function Yu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function vd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function of(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var df = null;
  function qy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === df ? !1 : (df = t, !0) : (df = null, !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, Sd = typeof Promise == "function" ? Promise : void 0, Yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(t) {
    return Sd.resolve(null).then(t).catch(wy);
  } : pd;
  function wy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function xl(t) {
    return t === "head";
  }
  function bd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ua(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          En(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, En(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, r = u.nodeName;
            u[La] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && En(t.ownerDocument.body);
      l = n;
    } while (l);
    Ua(e);
  }
  function Ed(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function mf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mf(l), gi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Gy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[La])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = xe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Xy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = xe(t.nextSibling), t === null)) return null;
    return t;
  }
  function xd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xe(t.nextSibling), t === null)) return null;
    return t;
  }
  function hf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function yf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Qy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function xe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var vf = null;
  function Td(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return xe(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function zd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ad(t, e, l) {
    switch (e = Yu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function En(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    gi(t);
  }
  var Te = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Set();
  function wu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pe = w.d;
  w.d = {
    f: Vy,
    r: Zy,
    D: Ky,
    C: Jy,
    L: ky,
    m: $y,
    X: Fy,
    S: Wy,
    M: Iy
  };
  function Vy() {
    var t = Pe.f(), e = Mu();
    return t || e;
  }
  function Zy(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Xs(e) : Pe.r(t);
  }
  var Ra = typeof document > "u" ? null : document;
  function _d(t, e, l) {
    var a = Ra;
    if (a && typeof e == "string" && e) {
      var n = ye(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Cd.has(n) || (Cd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Zt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function Ky(t) {
    Pe.D(t), _d("dns-prefetch", t, null);
  }
  function Jy(t, e) {
    Pe.C(t, e), _d("preconnect", t, e);
  }
  function ky(t, e, l) {
    Pe.L(t, e, l);
    var a = Ra;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ye(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ye(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ye(
        l.imageSizes
      ) + '"]')) : n += '[href="' + ye(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Oa(t);
          break;
        case "script":
          u = Ma(t);
      }
      Te.has(u) || (t = E(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Te.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(xn(u)) || e === "script" && a.querySelector(Tn(u)) || (e = a.createElement("link"), Zt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function $y(t, e) {
    Pe.m(t, e);
    var l = Ra;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ye(a) + '"][href="' + ye(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ma(t);
      }
      if (!Te.has(u) && (t = E({ rel: "modulepreload", href: t }, e), Te.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Tn(u)))
              return;
        }
        a = l.createElement("link"), Zt(a, "link", t), Lt(a), l.head.appendChild(a);
      }
    }
  }
  function Wy(t, e, l) {
    Pe.S(t, e, l);
    var a = Ra;
    if (a && t) {
      var n = Il(a).hoistableStyles, u = Oa(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var r = { loading: 0, preload: null };
        if (i = a.querySelector(
          xn(u)
        ))
          r.loading = 5;
        else {
          t = E(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Te.get(u)) && gf(t, l);
          var m = i = a.createElement("link");
          Lt(m), Zt(m, "link", t), m._p = new Promise(function(T, R) {
            m.onload = T, m.onerror = R;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Gu(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: r
        }, n.set(u, i);
      }
    }
  }
  function Fy(t, e) {
    Pe.X(t, e);
    var l = Ra;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ma(t), u = a.get(n);
      u || (u = l.querySelector(Tn(n)), u || (t = E({ src: t, async: !0 }, e), (e = Te.get(n)) && pf(t, e), u = l.createElement("script"), Lt(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Iy(t, e) {
    Pe.M(t, e);
    var l = Ra;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ma(t), u = a.get(n);
      u || (u = l.querySelector(Tn(n)), u || (t = E({ src: t, async: !0, type: "module" }, e), (e = Te.get(n)) && pf(t, e), u = l.createElement("script"), Lt(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Dd(t, e, l, a) {
    var n = (n = lt.current) ? wu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Oa(l.href), l = Il(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Oa(l.href);
          var u = Il(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            xn(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Te.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Te.set(t, l), u || Py(
            n,
            t,
            l,
            i.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ma(l), l = Il(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Oa(t) {
    return 'href="' + ye(t) + '"';
  }
  function xn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Rd(t) {
    return E({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Py(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zt(e, "link", l), Lt(e), t.head.appendChild(e));
  }
  function Ma(t) {
    return '[src="' + ye(t) + '"]';
  }
  function Tn(t) {
    return "script[async]" + t;
  }
  function Od(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ye(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Lt(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(a), Zt(a, "style", n), Gu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Oa(l.href);
          var u = t.querySelector(
            xn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Lt(u), u;
          a = Rd(l), (n = Te.get(n)) && gf(a, n), u = (t.ownerDocument || t).createElement("link"), Lt(u);
          var i = u;
          return i._p = new Promise(function(r, m) {
            i.onload = r, i.onerror = m;
          }), Zt(u, "link", a), e.state.loading |= 4, Gu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ma(l.src), (n = t.querySelector(
            Tn(u)
          )) ? (e.instance = n, Lt(n), n) : (a = l, (n = Te.get(u)) && (a = E({}, l), pf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Lt(n), Zt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Gu(a, l.precedence, t));
    return e.instance;
  }
  function Gu(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var r = a[i];
      if (r.dataset.precedence === e) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function gf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function pf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Xu = null;
  function Md(t, e, l) {
    if (Xu === null) {
      var a = /* @__PURE__ */ new Map(), n = Xu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Xu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[La] || u[Gt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var r = a.get(i);
        r ? r.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Ud(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function tv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Nd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ev(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Oa(a.href), u = e.querySelector(
          xn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Qu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Lt(u);
          return;
        }
        u = e.ownerDocument || e, a = Rd(a), (n = Te.get(n)) && gf(a, n), u = u.createElement("link"), Lt(u);
        var i = u;
        i._p = new Promise(function(r, m) {
          i.onload = r, i.onerror = m;
        }), Zt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Qu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Sf = 0;
  function lv(t, e) {
    return t.stylesheets && t.count === 0 && Zu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Zu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Sf === 0 && (Sf = 62500 * By());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Zu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Sf ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Qu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Vu = null;
  function Zu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Vu = /* @__PURE__ */ new Map(), e.forEach(av, t), Vu = null, Qu.call(t));
  }
  function av(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Vu.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Vu.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Qu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var zn = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function nv(t, e, l, a, n, u, i, r, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mi(0), this.hiddenUpdates = mi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jd(t, e, l, a, n, u, i, r, m, T, R, N) {
    return t = new nv(
      t,
      e,
      l,
      i,
      m,
      T,
      R,
      N,
      r
    ), e = 1, u === !0 && (e |= 24), u = ce(3, null, null, e), t.current = u, u.stateNode = t, e = Fi(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, ec(u), t;
  }
  function Hd(t) {
    return t ? (t = fa, t) : fa;
  }
  function Bd(t, e, l, a, n, u) {
    n = Hd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ol(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = dl(t, a, e), l !== null && (le(l, t, e), en(l, t, e));
  }
  function qd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function bf(t, e) {
    qd(t, e), (t = t.alternate) && qd(t, e);
  }
  function Ld(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Bl(t, 67108864);
      e !== null && le(e, t, 67108864), bf(t, 67108864);
    }
  }
  function Yd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = de();
      e = hi(e);
      var l = Bl(t, e);
      l !== null && le(l, t, e), bf(t, e);
    }
  }
  var Ku = !0;
  function uv(t, e, l, a) {
    var n = O.T;
    O.T = null;
    var u = w.p;
    try {
      w.p = 2, Ef(t, e, l, a);
    } finally {
      w.p = u, O.T = n;
    }
  }
  function iv(t, e, l, a) {
    var n = O.T;
    O.T = null;
    var u = w.p;
    try {
      w.p = 8, Ef(t, e, l, a);
    } finally {
      w.p = u, O.T = n;
    }
  }
  function Ef(t, e, l, a) {
    if (Ku) {
      var n = xf(a);
      if (n === null)
        cf(
          t,
          e,
          a,
          Ju,
          l
        ), Gd(t, a);
      else if (fv(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Gd(t, a), e & 4 && -1 < cv.indexOf(t)) {
        for (; n !== null; ) {
          var u = Fl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ml(u.pendingLanes);
                  if (i !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - ue(i);
                      r.entanglements[1] |= m, i &= ~m;
                    }
                    je(u), (st & 6) === 0 && (Ru = ae() + 500, pn(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = Bl(u, 2), r !== null && le(r, u, 2), Mu(), bf(u, 2);
            }
          if (u = xf(a), u === null && cf(
            t,
            e,
            a,
            Ju,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        cf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function xf(t) {
    return t = Ti(t), Tf(t);
  }
  var Ju = null;
  function Tf(t) {
    if (Ju = null, t = Wl(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = S(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = C(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Ju = t, null;
  }
  function wd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Km()) {
          case Jf:
            return 2;
          case kf:
            return 8;
          case Bn:
          case Jm:
            return 32;
          case $f:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = !1, Tl = null, zl = null, Al = null, An = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Cl = [], cv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Tl = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        An.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(e.pointerId);
    }
  }
  function _n(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Fl(e), e !== null && Ld(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function fv(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Tl = _n(
          Tl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return zl = _n(
          zl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Al = _n(
          Al,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return An.set(
          u,
          _n(
            An.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Cn.set(
          u,
          _n(
            Cn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Xd(t) {
    var e = Wl(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, er(t.priority, function() {
              Yd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = C(l), e !== null) {
            t.blockedOn = e, er(t.priority, function() {
              Yd(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = xf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        xi = a, l.target.dispatchEvent(a), xi = null;
      } else
        return e = Fl(l), e !== null && Ld(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Qd(t, e, l) {
    ku(t) && l.delete(e);
  }
  function rv() {
    zf = !1, Tl !== null && ku(Tl) && (Tl = null), zl !== null && ku(zl) && (zl = null), Al !== null && ku(Al) && (Al = null), An.forEach(Qd), Cn.forEach(Qd);
  }
  function $u(t, e) {
    t.blockedOn === e && (t.blockedOn = null, zf || (zf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      rv
    )));
  }
  var Wu = null;
  function Vd(t) {
    Wu !== t && (Wu = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Wu === t && (Wu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Tf(a || l) === null)
              continue;
            break;
          }
          var u = Fl(l);
          u !== null && (t.splice(e, 3), e -= 3, Ec(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ua(t) {
    function e(m) {
      return $u(m, t);
    }
    Tl !== null && $u(Tl, t), zl !== null && $u(zl, t), Al !== null && $u(Al, t), An.forEach(e), Cn.forEach(e);
    for (var l = 0; l < Cl.length; l++) {
      var a = Cl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Cl.length && (l = Cl[0], l.blockedOn === null); )
      Xd(l), l.blockedOn === null && Cl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[Wt] || null;
        if (typeof u == "function")
          i || Vd(l);
        else if (i) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Wt] || null)
              r = i.formAction;
            else if (Tf(n) !== null) continue;
          } else r = i.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Vd(l);
        }
      }
  }
  function Zd() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Af(t) {
    this._internalRoot = t;
  }
  Fu.prototype.render = Af.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = de();
    Bd(l, a, t, e, null, null);
  }, Fu.prototype.unmount = Af.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Bd(t.current, 2, null, t, null, null), Mu(), e[$l] = null;
    }
  };
  function Fu(t) {
    this._internalRoot = t;
  }
  Fu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = tr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Cl.length && e !== 0 && e < Cl[l].priority; l++) ;
      Cl.splice(l, 0, t), l === 0 && Xd(t);
    }
  };
  var Kd = o.version;
  if (Kd !== "19.2.4")
    throw Error(
      f(
        527,
        Kd,
        "19.2.4"
      )
    );
  w.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = y(e), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var sv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber)
      try {
        Ha = Iu.inject(
          sv
        ), ne = Iu;
      } catch {
      }
  }
  return Rn.createRoot = function(t, e) {
    if (!d(t)) throw Error(f(299));
    var l = !1, a = "", n = Is, u = Ps, i = to;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = jd(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      i,
      Zd
    ), t[$l] = e.current, uf(t), new Af(e);
  }, Rn.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(f(299));
    var a = !1, n = "", u = Is, i = Ps, r = to, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = jd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      m,
      u,
      i,
      r,
      Zd
    ), e.context = Hd(null), l = e.current, a = de(), a = hi(a), n = ol(a), n.callback = null, dl(l, n, a), l = a, e.current.lanes = l, qa(e, l), je(e), t[$l] = e.current, uf(t), new Fu(e);
  }, Rn.version = "19.2.4", Rn;
}
var lm;
function Sv() {
  if (lm) return Df.exports;
  lm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Df.exports = pv(), Df.exports;
}
var bv = Sv();
var am = "popstate";
function Ev(c = {}) {
  function o(f, d) {
    let { pathname: h, search: S, hash: C } = f.location;
    return Hf(
      "",
      { pathname: h, search: S, hash: C },
      // state defaults to `null` because `window.history.state` does
      d.state && d.state.usr || null,
      d.state && d.state.key || "default"
    );
  }
  function s(f, d) {
    return typeof d == "string" ? d : Mn(d);
  }
  return Tv(
    o,
    s,
    null,
    c
  );
}
function qt(c, o) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(o);
}
function Re(c, o) {
  if (!c) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function xv() {
  return Math.random().toString(36).substring(2, 10);
}
function nm(c, o) {
  return {
    usr: c.state,
    key: c.key,
    idx: o
  };
}
function Hf(c, o, s = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? Un(o) : o,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || f || xv()
  };
}
function Mn({
  pathname: c = "/",
  search: o = "",
  hash: s = ""
}) {
  return o && o !== "?" && (c += o.charAt(0) === "?" ? o : "?" + o), s && s !== "#" && (c += s.charAt(0) === "#" ? s : "#" + s), c;
}
function Un(c) {
  let o = {};
  if (c) {
    let s = c.indexOf("#");
    s >= 0 && (o.hash = c.substring(s), c = c.substring(0, s));
    let f = c.indexOf("?");
    f >= 0 && (o.search = c.substring(f), c = c.substring(0, f)), c && (o.pathname = c);
  }
  return o;
}
function Tv(c, o, s, f = {}) {
  let { window: d = document.defaultView, v5Compat: h = !1 } = f, S = d.history, C = "POP", g = null, y = _();
  y == null && (y = 0, S.replaceState({ ...S.state, idx: y }, ""));
  function _() {
    return (S.state || { idx: null }).idx;
  }
  function E() {
    C = "POP";
    let q = _(), Y = q == null ? null : q - y;
    y = q, g && g({ action: C, location: V.location, delta: Y });
  }
  function M(q, Y) {
    C = "PUSH";
    let L = Hf(V.location, q, Y);
    y = _() + 1;
    let J = nm(L, y), ot = V.createHref(L);
    try {
      S.pushState(J, "", ot);
    } catch (mt) {
      if (mt instanceof DOMException && mt.name === "DataCloneError")
        throw mt;
      d.location.assign(ot);
    }
    h && g && g({ action: C, location: V.location, delta: 1 });
  }
  function B(q, Y) {
    C = "REPLACE";
    let L = Hf(V.location, q, Y);
    y = _();
    let J = nm(L, y), ot = V.createHref(L);
    S.replaceState(J, "", ot), h && g && g({ action: C, location: V.location, delta: 0 });
  }
  function X(q) {
    return zv(q);
  }
  let V = {
    get action() {
      return C;
    },
    get location() {
      return c(d, S);
    },
    listen(q) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(am, E), g = q, () => {
        d.removeEventListener(am, E), g = null;
      };
    },
    createHref(q) {
      return o(d, q);
    },
    createURL: X,
    encodeLocation(q) {
      let Y = X(q);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: M,
    replace: B,
    go(q) {
      return S.go(q);
    }
  };
  return V;
}
function zv(c, o = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), qt(s, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Mn(c);
  return f = f.replace(/ $/, "%20"), !o && f.startsWith("//") && (f = s + f), new URL(f, s);
}
function sm(c, o, s = "/") {
  return Av(c, o, s, !1);
}
function Av(c, o, s, f) {
  let d = typeof o == "string" ? Un(o) : o, h = el(d.pathname || "/", s);
  if (h == null)
    return null;
  let S = om(c);
  Cv(S);
  let C = null;
  for (let g = 0; C == null && g < S.length; ++g) {
    let y = qv(h);
    C = Hv(
      S[g],
      y,
      f
    );
  }
  return C;
}
function om(c, o = [], s = [], f = "", d = !1) {
  let h = (S, C, g = d, y) => {
    let _ = {
      relativePath: y === void 0 ? S.path || "" : y,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: C,
      route: S
    };
    if (_.relativePath.startsWith("/")) {
      if (!_.relativePath.startsWith(f) && g)
        return;
      qt(
        _.relativePath.startsWith(f),
        `Absolute route path "${_.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), _.relativePath = _.relativePath.slice(f.length);
    }
    let E = tl([f, _.relativePath]), M = s.concat(_);
    S.children && S.children.length > 0 && (qt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      S.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
    ), om(
      S.children,
      o,
      M,
      E,
      g
    )), !(S.path == null && !S.index) && o.push({
      path: E,
      score: Nv(E, S.index),
      routesMeta: M
    });
  };
  return c.forEach((S, C) => {
    if (S.path === "" || !S.path?.includes("?"))
      h(S, C);
    else
      for (let g of dm(S.path))
        h(S, C, !0, g);
  }), o;
}
function dm(c) {
  let o = c.split("/");
  if (o.length === 0) return [];
  let [s, ...f] = o, d = s.endsWith("?"), h = s.replace(/\?$/, "");
  if (f.length === 0)
    return d ? [h, ""] : [h];
  let S = dm(f.join("/")), C = [];
  return C.push(
    ...S.map(
      (g) => g === "" ? h : [h, g].join("/")
    )
  ), d && C.push(...S), C.map(
    (g) => c.startsWith("/") && g === "" ? "/" : g
  );
}
function Cv(c) {
  c.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : jv(
      o.routesMeta.map((f) => f.childrenIndex),
      s.routesMeta.map((f) => f.childrenIndex)
    )
  );
}
var _v = /^:[\w-]+$/, Dv = 3, Rv = 2, Ov = 1, Mv = 10, Uv = -2, um = (c) => c === "*";
function Nv(c, o) {
  let s = c.split("/"), f = s.length;
  return s.some(um) && (f += Uv), o && (f += Rv), s.filter((d) => !um(d)).reduce(
    (d, h) => d + (_v.test(h) ? Dv : h === "" ? Ov : Mv),
    f
  );
}
function jv(c, o) {
  return c.length === o.length && c.slice(0, -1).every((f, d) => f === o[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    c[c.length - 1] - o[o.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Hv(c, o, s = !1) {
  let { routesMeta: f } = c, d = {}, h = "/", S = [];
  for (let C = 0; C < f.length; ++C) {
    let g = f[C], y = C === f.length - 1, _ = h === "/" ? o : o.slice(h.length) || "/", E = ai(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: y },
      _
    ), M = g.route;
    if (!E && y && s && !f[f.length - 1].route.index && (E = ai(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      _
    )), !E)
      return null;
    Object.assign(d, E.params), S.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: tl([h, E.pathname]),
      pathnameBase: Gv(
        tl([h, E.pathnameBase])
      ),
      route: M
    }), E.pathnameBase !== "/" && (h = tl([h, E.pathnameBase]));
  }
  return S;
}
function ai(c, o) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [s, f] = Bv(
    c.path,
    c.caseSensitive,
    c.end
  ), d = o.match(s);
  if (!d) return null;
  let h = d[0], S = h.replace(/(.)\/+$/, "$1"), C = d.slice(1);
  return {
    params: f.reduce(
      (y, { paramName: _, isOptional: E }, M) => {
        if (_ === "*") {
          let X = C[M] || "";
          S = h.slice(0, h.length - X.length).replace(/(.)\/+$/, "$1");
        }
        const B = C[M];
        return E && !B ? y[_] = void 0 : y[_] = (B || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: h,
    pathnameBase: S,
    pattern: c
  };
}
function Bv(c, o = !1, s = !0) {
  Re(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`
  );
  let f = [], d = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (S, C, g) => (f.push({ paramName: C, isOptional: g != null }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return c.endsWith("*") ? (f.push({ paramName: "*" }), d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, o ? void 0 : "i"), f];
}
function qv(c) {
  try {
    return c.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return Re(
      !1,
      `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), c;
  }
}
function el(c, o) {
  if (o === "/") return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length, f = c.charAt(s);
  return f && f !== "/" ? null : c.slice(s) || "/";
}
var Lv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Yv(c, o = "/") {
  let {
    pathname: s,
    search: f = "",
    hash: d = ""
  } = typeof c == "string" ? Un(c) : c, h;
  return s ? (s = s.replace(/\/\/+/g, "/"), s.startsWith("/") ? h = im(s.substring(1), "/") : h = im(s, o)) : h = o, {
    pathname: h,
    search: Xv(f),
    hash: Qv(d)
  };
}
function im(c, o) {
  let s = o.replace(/\/+$/, "").split("/");
  return c.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function Uf(c, o, s, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function wv(c) {
  return c.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function mm(c) {
  let o = wv(c);
  return o.map(
    (s, f) => f === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function hm(c, o, s, f = !1) {
  let d;
  typeof c == "string" ? d = Un(c) : (d = { ...c }, qt(
    !d.pathname || !d.pathname.includes("?"),
    Uf("?", "pathname", "search", d)
  ), qt(
    !d.pathname || !d.pathname.includes("#"),
    Uf("#", "pathname", "hash", d)
  ), qt(
    !d.search || !d.search.includes("#"),
    Uf("#", "search", "hash", d)
  ));
  let h = c === "" || d.pathname === "", S = h ? "/" : d.pathname, C;
  if (S == null)
    C = s;
  else {
    let E = o.length - 1;
    if (!f && S.startsWith("..")) {
      let M = S.split("/");
      for (; M[0] === ".."; )
        M.shift(), E -= 1;
      d.pathname = M.join("/");
    }
    C = E >= 0 ? o[E] : "/";
  }
  let g = Yv(d, C), y = S && S !== "/" && S.endsWith("/"), _ = (h || S === ".") && s.endsWith("/");
  return !g.pathname.endsWith("/") && (y || _) && (g.pathname += "/"), g;
}
var tl = (c) => c.join("/").replace(/\/\/+/g, "/"), Gv = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"), Xv = (c) => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c, Qv = (c) => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c, Vv = class {
  constructor(c, o, s, f = !1) {
    this.status = c, this.statusText = o || "", this.internal = f, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Zv(c) {
  return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
}
function Kv(c) {
  return c.map((o) => o.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ym = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vm(c, o) {
  let s = c;
  if (typeof s != "string" || !Lv.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let f = s, d = !1;
  if (ym)
    try {
      let h = new URL(window.location.href), S = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s), C = el(S.pathname, o);
      S.origin === h.origin && C != null ? s = C + S.search + S.hash : d = !0;
    } catch {
      Re(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: f,
    isExternal: d,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var gm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  gm
);
var Jv = [
  "GET",
  ...gm
];
new Set(Jv);
var Na = z.createContext(null);
Na.displayName = "DataRouter";
var ni = z.createContext(null);
ni.displayName = "DataRouterState";
var kv = z.createContext(!1), pm = z.createContext({
  isTransitioning: !1
});
pm.displayName = "ViewTransition";
var $v = z.createContext(
  /* @__PURE__ */ new Map()
);
$v.displayName = "Fetchers";
var Wv = z.createContext(null);
Wv.displayName = "Await";
var ze = z.createContext(
  null
);
ze.displayName = "Navigation";
var ui = z.createContext(
  null
);
ui.displayName = "Location";
var ll = z.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ll.displayName = "Route";
var Lf = z.createContext(null);
Lf.displayName = "RouteError";
var Sm = "REACT_ROUTER_ERROR", Fv = "REDIRECT", Iv = "ROUTE_ERROR_RESPONSE";
function Pv(c) {
  if (c.startsWith(`${Sm}:${Fv}:{`))
    try {
      let o = JSON.parse(c.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function t0(c) {
  if (c.startsWith(
    `${Sm}:${Iv}:{`
  ))
    try {
      let o = JSON.parse(c.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Vv(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function e0(c, { relative: o } = {}) {
  qt(
    Nn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: f } = z.useContext(ze), { hash: d, pathname: h, search: S } = jn(c, { relative: o }), C = h;
  return s !== "/" && (C = h === "/" ? s : tl([s, h])), f.createHref({ pathname: C, search: S, hash: d });
}
function Nn() {
  return z.useContext(ui) != null;
}
function Dl() {
  return qt(
    Nn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), z.useContext(ui).location;
}
var bm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Em(c) {
  z.useContext(ze).static || z.useLayoutEffect(c);
}
function xm() {
  let { isDataRoute: c } = z.useContext(ll);
  return c ? h0() : l0();
}
function l0() {
  qt(
    Nn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = z.useContext(Na), { basename: o, navigator: s } = z.useContext(ze), { matches: f } = z.useContext(ll), { pathname: d } = Dl(), h = JSON.stringify(mm(f)), S = z.useRef(!1);
  return Em(() => {
    S.current = !0;
  }), z.useCallback(
    (g, y = {}) => {
      if (Re(S.current, bm), !S.current) return;
      if (typeof g == "number") {
        s.go(g);
        return;
      }
      let _ = hm(
        g,
        JSON.parse(h),
        d,
        y.relative === "path"
      );
      c == null && o !== "/" && (_.pathname = _.pathname === "/" ? o : tl([o, _.pathname])), (y.replace ? s.replace : s.push)(
        _,
        y.state,
        y
      );
    },
    [
      o,
      s,
      h,
      d,
      c
    ]
  );
}
z.createContext(null);
function jn(c, { relative: o } = {}) {
  let { matches: s } = z.useContext(ll), { pathname: f } = Dl(), d = JSON.stringify(mm(s));
  return z.useMemo(
    () => hm(
      c,
      JSON.parse(d),
      f,
      o === "path"
    ),
    [c, d, f, o]
  );
}
function a0(c, o, s, f, d) {
  qt(
    Nn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = z.useContext(ze), { matches: S } = z.useContext(ll), C = S[S.length - 1], g = C ? C.params : {}, y = C ? C.pathname : "/", _ = C ? C.pathnameBase : "/", E = C && C.route;
  {
    let L = E && E.path || "";
    zm(
      y,
      !E || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`
    );
  }
  let M = Dl(), B;
  B = M;
  let X = B.pathname || "/", V = X;
  if (_ !== "/") {
    let L = _.replace(/^\//, "").split("/");
    V = "/" + X.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let q = sm(c, { pathname: V });
  return Re(
    E || q != null,
    `No routes matched location "${B.pathname}${B.search}${B.hash}" `
  ), Re(
    q == null || q[q.length - 1].route.element !== void 0 || q[q.length - 1].route.Component !== void 0 || q[q.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), f0(
    q && q.map(
      (L) => Object.assign({}, L, {
        params: Object.assign({}, g, L.params),
        pathname: tl([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          h.encodeLocation ? h.encodeLocation(
            L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathname
        ]),
        pathnameBase: L.pathnameBase === "/" ? _ : tl([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          h.encodeLocation ? h.encodeLocation(
            L.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathnameBase
        ])
      })
    ),
    S,
    s,
    f,
    d
  );
}
function n0() {
  let c = m0(), o = Zv(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c), s = c instanceof Error ? c.stack : null, f = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: f }, h = { padding: "2px 4px", backgroundColor: f }, S = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    c
  ), S = /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ z.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ z.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ z.createElement("code", { style: h }, "errorElement"), " prop on your route.")), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ z.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ z.createElement("pre", { style: d }, s) : null, S);
}
var u0 = /* @__PURE__ */ z.createElement(n0, null), Tm = class extends z.Component {
  constructor(c) {
    super(c), this.state = {
      location: c.location,
      revalidation: c.revalidation,
      error: c.error
    };
  }
  static getDerivedStateFromError(c) {
    return { error: c };
  }
  static getDerivedStateFromProps(c, o) {
    return o.location !== c.location || o.revalidation !== "idle" && c.revalidation === "idle" ? {
      error: c.error,
      location: c.location,
      revalidation: c.revalidation
    } : {
      error: c.error !== void 0 ? c.error : o.error,
      location: o.location,
      revalidation: c.revalidation || o.revalidation
    };
  }
  componentDidCatch(c, o) {
    this.props.onError ? this.props.onError(c, o) : console.error(
      "React Router caught the following error during render",
      c
    );
  }
  render() {
    let c = this.state.error;
    if (this.context && typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
      const s = t0(c.digest);
      s && (c = s);
    }
    let o = c !== void 0 ? /* @__PURE__ */ z.createElement(ll.Provider, { value: this.props.routeContext }, /* @__PURE__ */ z.createElement(
      Lf.Provider,
      {
        value: c,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ z.createElement(i0, { error: c }, o) : o;
  }
};
Tm.contextType = kv;
var Nf = /* @__PURE__ */ new WeakMap();
function i0({
  children: c,
  error: o
}) {
  let { basename: s } = z.useContext(ze);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let f = Pv(o.digest);
    if (f) {
      let d = Nf.get(o);
      if (d) throw d;
      let h = vm(f.location, s);
      if (ym && !Nf.get(o))
        if (h.isExternal || f.reloadDocument)
          window.location.href = h.absoluteURL || h.to;
        else {
          const S = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(h.to, {
              replace: f.replace
            })
          );
          throw Nf.set(o, S), S;
        }
      return /* @__PURE__ */ z.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${h.absoluteURL || h.to}`
        }
      );
    }
  }
  return c;
}
function c0({ routeContext: c, match: o, children: s }) {
  let f = z.useContext(Na);
  return f && f.static && f.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ z.createElement(ll.Provider, { value: c }, s);
}
function f0(c, o = [], s = null, f = null, d = null) {
  if (c == null) {
    if (!s)
      return null;
    if (s.errors)
      c = s.matches;
    else if (o.length === 0 && !s.initialized && s.matches.length > 0)
      c = s.matches;
    else
      return null;
  }
  let h = c, S = s?.errors;
  if (S != null) {
    let _ = h.findIndex(
      (E) => E.route.id && S?.[E.route.id] !== void 0
    );
    qt(
      _ >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        S
      ).join(",")}`
    ), h = h.slice(
      0,
      Math.min(h.length, _ + 1)
    );
  }
  let C = !1, g = -1;
  if (s)
    for (let _ = 0; _ < h.length; _++) {
      let E = h[_];
      if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (g = _), E.route.id) {
        let { loaderData: M, errors: B } = s, X = E.route.loader && !M.hasOwnProperty(E.route.id) && (!B || B[E.route.id] === void 0);
        if (E.route.lazy || X) {
          C = !0, g >= 0 ? h = h.slice(0, g + 1) : h = [h[0]];
          break;
        }
      }
    }
  let y = s && f ? (_, E) => {
    f(_, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: Kv(s.matches),
      errorInfo: E
    });
  } : void 0;
  return h.reduceRight(
    (_, E, M) => {
      let B, X = !1, V = null, q = null;
      s && (B = S && E.route.id ? S[E.route.id] : void 0, V = E.route.errorElement || u0, C && (g < 0 && M === 0 ? (zm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), X = !0, q = null) : g === M && (X = !0, q = E.route.hydrateFallbackElement || null)));
      let Y = o.concat(h.slice(0, M + 1)), L = () => {
        let J;
        return B ? J = V : X ? J = q : E.route.Component ? J = /* @__PURE__ */ z.createElement(E.route.Component, null) : E.route.element ? J = E.route.element : J = _, /* @__PURE__ */ z.createElement(
          c0,
          {
            match: E,
            routeContext: {
              outlet: _,
              matches: Y,
              isDataRoute: s != null
            },
            children: J
          }
        );
      };
      return s && (E.route.ErrorBoundary || E.route.errorElement || M === 0) ? /* @__PURE__ */ z.createElement(
        Tm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: V,
          error: B,
          children: L(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: y
        }
      ) : L();
    },
    null
  );
}
function Yf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function r0(c) {
  let o = z.useContext(Na);
  return qt(o, Yf(c)), o;
}
function s0(c) {
  let o = z.useContext(ni);
  return qt(o, Yf(c)), o;
}
function o0(c) {
  let o = z.useContext(ll);
  return qt(o, Yf(c)), o;
}
function wf(c) {
  let o = o0(c), s = o.matches[o.matches.length - 1];
  return qt(
    s.route.id,
    `${c} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function d0() {
  return wf(
    "useRouteId"
    /* UseRouteId */
  );
}
function m0() {
  let c = z.useContext(Lf), o = s0(
    "useRouteError"
    /* UseRouteError */
  ), s = wf(
    "useRouteError"
    /* UseRouteError */
  );
  return c !== void 0 ? c : o.errors?.[s];
}
function h0() {
  let { router: c } = r0(
    "useNavigate"
    /* UseNavigateStable */
  ), o = wf(
    "useNavigate"
    /* UseNavigateStable */
  ), s = z.useRef(!1);
  return Em(() => {
    s.current = !0;
  }), z.useCallback(
    async (d, h = {}) => {
      Re(s.current, bm), s.current && (typeof d == "number" ? await c.navigate(d) : await c.navigate(d, { fromRouteId: o, ...h }));
    },
    [c, o]
  );
}
var cm = {};
function zm(c, o, s) {
  !o && !cm[c] && (cm[c] = !0, Re(!1, s));
}
z.memo(y0);
function y0({
  routes: c,
  future: o,
  state: s,
  onError: f
}) {
  return a0(c, void 0, s, f, o);
}
function v0({
  basename: c = "/",
  children: o = null,
  location: s,
  navigationType: f = "POP",
  navigator: d,
  static: h = !1,
  unstable_useTransitions: S
}) {
  qt(
    !Nn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let C = c.replace(/^\/*/, "/"), g = z.useMemo(
    () => ({
      basename: C,
      navigator: d,
      static: h,
      unstable_useTransitions: S,
      future: {}
    }),
    [C, d, h, S]
  );
  typeof s == "string" && (s = Un(s));
  let {
    pathname: y = "/",
    search: _ = "",
    hash: E = "",
    state: M = null,
    key: B = "default"
  } = s, X = z.useMemo(() => {
    let V = el(y, C);
    return V == null ? null : {
      location: {
        pathname: V,
        search: _,
        hash: E,
        state: M,
        key: B
      },
      navigationType: f
    };
  }, [C, y, _, E, M, B, f]);
  return Re(
    X != null,
    `<Router basename="${C}"> is not able to match the URL "${y}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), X == null ? null : /* @__PURE__ */ z.createElement(ze.Provider, { value: g }, /* @__PURE__ */ z.createElement(ui.Provider, { children: o, value: X }));
}
var ei = "get", li = "application/x-www-form-urlencoded";
function ii(c) {
  return typeof HTMLElement < "u" && c instanceof HTMLElement;
}
function g0(c) {
  return ii(c) && c.tagName.toLowerCase() === "button";
}
function p0(c) {
  return ii(c) && c.tagName.toLowerCase() === "form";
}
function S0(c) {
  return ii(c) && c.tagName.toLowerCase() === "input";
}
function b0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function E0(c, o) {
  return c.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !b0(c);
}
function Bf(c = "") {
  return new URLSearchParams(
    typeof c == "string" || Array.isArray(c) || c instanceof URLSearchParams ? c : Object.keys(c).reduce((o, s) => {
      let f = c[s];
      return o.concat(
        Array.isArray(f) ? f.map((d) => [s, d]) : [[s, f]]
      );
    }, [])
  );
}
function x0(c, o) {
  let s = Bf(c);
  return o && o.forEach((f, d) => {
    s.has(d) || o.getAll(d).forEach((h) => {
      s.append(d, h);
    });
  }), s;
}
var Pu = null;
function T0() {
  if (Pu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Pu = !1;
    } catch {
      Pu = !0;
    }
  return Pu;
}
var z0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function jf(c) {
  return c != null && !z0.has(c) ? (Re(
    !1,
    `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`
  ), null) : c;
}
function A0(c, o) {
  let s, f, d, h, S;
  if (p0(c)) {
    let C = c.getAttribute("action");
    f = C ? el(C, o) : null, s = c.getAttribute("method") || ei, d = jf(c.getAttribute("enctype")) || li, h = new FormData(c);
  } else if (g0(c) || S0(c) && (c.type === "submit" || c.type === "image")) {
    let C = c.form;
    if (C == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = c.getAttribute("formaction") || C.getAttribute("action");
    if (f = g ? el(g, o) : null, s = c.getAttribute("formmethod") || C.getAttribute("method") || ei, d = jf(c.getAttribute("formenctype")) || jf(C.getAttribute("enctype")) || li, h = new FormData(C, c), !T0()) {
      let { name: y, type: _, value: E } = c;
      if (_ === "image") {
        let M = y ? `${y}.` : "";
        h.append(`${M}x`, "0"), h.append(`${M}y`, "0");
      } else y && h.append(y, E);
    }
  } else {
    if (ii(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ei, f = null, d = li, S = c;
  }
  return h && d === "text/plain" && (S = h, h = void 0), { action: f, method: s.toLowerCase(), encType: d, formData: h, body: S };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Gf(c, o) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(o);
}
function C0(c, o, s, f) {
  let d = typeof c == "string" ? new URL(
    c,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : c;
  return s ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${f}` : d.pathname = `${d.pathname}.${f}` : d.pathname === "/" ? d.pathname = `_root.${f}` : o && el(d.pathname, o) === "/" ? d.pathname = `${o.replace(/\/$/, "")}/_root.${f}` : d.pathname = `${d.pathname.replace(/\/$/, "")}.${f}`, d;
}
async function _0(c, o) {
  if (c.id in o)
    return o[c.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      c.module
    );
    return o[c.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${c.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function D0(c) {
  return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string";
}
async function R0(c, o, s) {
  let f = await Promise.all(
    c.map(async (d) => {
      let h = o.routes[d.route.id];
      if (h) {
        let S = await _0(h, s);
        return S.links ? S.links() : [];
      }
      return [];
    })
  );
  return N0(
    f.flat(1).filter(D0).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function fm(c, o, s, f, d, h) {
  let S = (g, y) => s[y] ? g.route.id !== s[y].route.id : !0, C = (g, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== g.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== g.params["*"]
  );
  return h === "assets" ? o.filter(
    (g, y) => S(g, y) || C(g, y)
  ) : h === "data" ? o.filter((g, y) => {
    let _ = f.routes[g.route.id];
    if (!_ || !_.hasLoader)
      return !1;
    if (S(g, y) || C(g, y))
      return !0;
    if (g.route.shouldRevalidate) {
      let E = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(c, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof E == "boolean")
        return E;
    }
    return !0;
  }) : [];
}
function O0(c, o, { includeHydrateFallback: s } = {}) {
  return M0(
    c.map((f) => {
      let d = o.routes[f.route.id];
      if (!d) return [];
      let h = [d.module];
      return d.clientActionModule && (h = h.concat(d.clientActionModule)), d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)), s && d.hydrateFallbackModule && (h = h.concat(d.hydrateFallbackModule)), d.imports && (h = h.concat(d.imports)), h;
    }).flat(1)
  );
}
function M0(c) {
  return [...new Set(c)];
}
function U0(c) {
  let o = {}, s = Object.keys(c).sort();
  for (let f of s)
    o[f] = c[f];
  return o;
}
function N0(c, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), c.reduce((f, d) => {
    let h = JSON.stringify(U0(d));
    return s.has(h) || (s.add(h), f.push({ key: h, link: d })), f;
  }, []);
}
function Am() {
  let c = z.useContext(Na);
  return Gf(
    c,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), c;
}
function j0() {
  let c = z.useContext(ni);
  return Gf(
    c,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), c;
}
var Xf = z.createContext(void 0);
Xf.displayName = "FrameworkContext";
function Cm() {
  let c = z.useContext(Xf);
  return Gf(
    c,
    "You must render this element inside a <HydratedRouter> element"
  ), c;
}
function H0(c, o) {
  let s = z.useContext(Xf), [f, d] = z.useState(!1), [h, S] = z.useState(!1), { onFocus: C, onBlur: g, onMouseEnter: y, onMouseLeave: _, onTouchStart: E } = o, M = z.useRef(null);
  z.useEffect(() => {
    if (c === "render" && S(!0), c === "viewport") {
      let V = (Y) => {
        Y.forEach((L) => {
          S(L.isIntersecting);
        });
      }, q = new IntersectionObserver(V, { threshold: 0.5 });
      return M.current && q.observe(M.current), () => {
        q.disconnect();
      };
    }
  }, [c]), z.useEffect(() => {
    if (f) {
      let V = setTimeout(() => {
        S(!0);
      }, 100);
      return () => {
        clearTimeout(V);
      };
    }
  }, [f]);
  let B = () => {
    d(!0);
  }, X = () => {
    d(!1), S(!1);
  };
  return s ? c !== "intent" ? [h, M, {}] : [
    h,
    M,
    {
      onFocus: On(C, B),
      onBlur: On(g, X),
      onMouseEnter: On(y, B),
      onMouseLeave: On(_, X),
      onTouchStart: On(E, B)
    }
  ] : [!1, M, {}];
}
function On(c, o) {
  return (s) => {
    c && c(s), s.defaultPrevented || o(s);
  };
}
function B0({ page: c, ...o }) {
  let { router: s } = Am(), f = z.useMemo(
    () => sm(s.routes, c, s.basename),
    [s.routes, c, s.basename]
  );
  return f ? /* @__PURE__ */ z.createElement(L0, { page: c, matches: f, ...o }) : null;
}
function q0(c) {
  let { manifest: o, routeModules: s } = Cm(), [f, d] = z.useState([]);
  return z.useEffect(() => {
    let h = !1;
    return R0(c, o, s).then(
      (S) => {
        h || d(S);
      }
    ), () => {
      h = !0;
    };
  }, [c, o, s]), f;
}
function L0({
  page: c,
  matches: o,
  ...s
}) {
  let f = Dl(), { future: d, manifest: h, routeModules: S } = Cm(), { basename: C } = Am(), { loaderData: g, matches: y } = j0(), _ = z.useMemo(
    () => fm(
      c,
      o,
      y,
      h,
      f,
      "data"
    ),
    [c, o, y, h, f]
  ), E = z.useMemo(
    () => fm(
      c,
      o,
      y,
      h,
      f,
      "assets"
    ),
    [c, o, y, h, f]
  ), M = z.useMemo(() => {
    if (c === f.pathname + f.search + f.hash)
      return [];
    let V = /* @__PURE__ */ new Set(), q = !1;
    if (o.forEach((L) => {
      let J = h.routes[L.route.id];
      !J || !J.hasLoader || (!_.some((ot) => ot.route.id === L.route.id) && L.route.id in g && S[L.route.id]?.shouldRevalidate || J.hasClientLoader ? q = !0 : V.add(L.route.id));
    }), V.size === 0)
      return [];
    let Y = C0(
      c,
      C,
      d.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return q && V.size > 0 && Y.searchParams.set(
      "_routes",
      o.filter((L) => V.has(L.route.id)).map((L) => L.route.id).join(",")
    ), [Y.pathname + Y.search];
  }, [
    C,
    d.unstable_trailingSlashAwareDataRequests,
    g,
    f,
    h,
    _,
    o,
    c,
    S
  ]), B = z.useMemo(
    () => O0(E, h),
    [E, h]
  ), X = q0(E);
  return /* @__PURE__ */ z.createElement(z.Fragment, null, M.map((V) => /* @__PURE__ */ z.createElement("link", { key: V, rel: "prefetch", as: "fetch", href: V, ...s })), B.map((V) => /* @__PURE__ */ z.createElement("link", { key: V, rel: "modulepreload", href: V, ...s })), X.map(({ key: V, link: q }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ z.createElement(
      "link",
      {
        key: V,
        nonce: s.nonce,
        ...q,
        crossOrigin: q.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Y0(...c) {
  return (o) => {
    c.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var w0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  w0 && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function _m({
  basename: c,
  children: o,
  unstable_useTransitions: s,
  window: f
}) {
  let d = z.useRef();
  d.current == null && (d.current = Ev({ window: f, v5Compat: !0 }));
  let h = d.current, [S, C] = z.useState({
    action: h.action,
    location: h.location
  }), g = z.useCallback(
    (y) => {
      s === !1 ? C(y) : z.startTransition(() => C(y));
    },
    [s]
  );
  return z.useLayoutEffect(() => h.listen(g), [h, g]), /* @__PURE__ */ z.createElement(
    v0,
    {
      basename: c,
      children: o,
      location: S.location,
      navigationType: S.action,
      navigator: h,
      unstable_useTransitions: s
    }
  );
}
var Dm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Rm = z.forwardRef(
  function({
    onClick: o,
    discover: s = "render",
    prefetch: f = "none",
    relative: d,
    reloadDocument: h,
    replace: S,
    state: C,
    target: g,
    to: y,
    preventScrollReset: _,
    viewTransition: E,
    unstable_defaultShouldRevalidate: M,
    ...B
  }, X) {
    let { basename: V, unstable_useTransitions: q } = z.useContext(ze), Y = typeof y == "string" && Dm.test(y), L = vm(y, V);
    y = L.to;
    let J = e0(y, { relative: d }), [ot, mt, xt] = H0(
      f,
      B
    ), F = V0(y, {
      replace: S,
      state: C,
      target: g,
      preventScrollReset: _,
      relative: d,
      viewTransition: E,
      unstable_defaultShouldRevalidate: M,
      unstable_useTransitions: q
    });
    function Dt(me) {
      o && o(me), me.defaultPrevented || F(me);
    }
    let wt = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ z.createElement(
        "a",
        {
          ...B,
          ...xt,
          href: L.absoluteURL || J,
          onClick: L.isExternal || h ? o : Dt,
          ref: Y0(X, mt),
          target: g,
          "data-discover": !Y && s === "render" ? "true" : void 0
        }
      )
    );
    return ot && !Y ? /* @__PURE__ */ z.createElement(z.Fragment, null, wt, /* @__PURE__ */ z.createElement(B0, { page: J })) : wt;
  }
);
Rm.displayName = "Link";
var G0 = z.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: f = "",
    end: d = !1,
    style: h,
    to: S,
    viewTransition: C,
    children: g,
    ...y
  }, _) {
    let E = jn(S, { relative: y.relative }), M = Dl(), B = z.useContext(ni), { navigator: X, basename: V } = z.useContext(ze), q = B != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $0(E) && C === !0, Y = X.encodeLocation ? X.encodeLocation(E).pathname : E.pathname, L = M.pathname, J = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    s || (L = L.toLowerCase(), J = J ? J.toLowerCase() : null, Y = Y.toLowerCase()), J && V && (J = el(J, V) || J);
    const ot = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let mt = L === Y || !d && L.startsWith(Y) && L.charAt(ot) === "/", xt = J != null && (J === Y || !d && J.startsWith(Y) && J.charAt(Y.length) === "/"), F = {
      isActive: mt,
      isPending: xt,
      isTransitioning: q
    }, Dt = mt ? o : void 0, wt;
    typeof f == "function" ? wt = f(F) : wt = [
      f,
      mt ? "active" : null,
      xt ? "pending" : null,
      q ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let me = typeof h == "function" ? h(F) : h;
    return /* @__PURE__ */ z.createElement(
      Rm,
      {
        ...y,
        "aria-current": Dt,
        className: wt,
        ref: _,
        style: me,
        to: S,
        viewTransition: C
      },
      typeof g == "function" ? g(F) : g
    );
  }
);
G0.displayName = "NavLink";
var X0 = z.forwardRef(
  ({
    discover: c = "render",
    fetcherKey: o,
    navigate: s,
    reloadDocument: f,
    replace: d,
    state: h,
    method: S = ei,
    action: C,
    onSubmit: g,
    relative: y,
    preventScrollReset: _,
    viewTransition: E,
    unstable_defaultShouldRevalidate: M,
    ...B
  }, X) => {
    let { unstable_useTransitions: V } = z.useContext(ze), q = J0(), Y = k0(C, { relative: y }), L = S.toLowerCase() === "get" ? "get" : "post", J = typeof C == "string" && Dm.test(C), ot = (mt) => {
      if (g && g(mt), mt.defaultPrevented) return;
      mt.preventDefault();
      let xt = mt.nativeEvent.submitter, F = xt?.getAttribute("formmethod") || S, Dt = () => q(xt || mt.currentTarget, {
        fetcherKey: o,
        method: F,
        navigate: s,
        replace: d,
        state: h,
        relative: y,
        preventScrollReset: _,
        viewTransition: E,
        unstable_defaultShouldRevalidate: M
      });
      V && s !== !1 ? z.startTransition(() => Dt()) : Dt();
    };
    return /* @__PURE__ */ z.createElement(
      "form",
      {
        ref: X,
        method: L,
        action: Y,
        onSubmit: f ? g : ot,
        ...B,
        "data-discover": !J && c === "render" ? "true" : void 0
      }
    );
  }
);
X0.displayName = "Form";
function Q0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Om(c) {
  let o = z.useContext(Na);
  return qt(o, Q0(c)), o;
}
function V0(c, {
  target: o,
  replace: s,
  state: f,
  preventScrollReset: d,
  relative: h,
  viewTransition: S,
  unstable_defaultShouldRevalidate: C,
  unstable_useTransitions: g
} = {}) {
  let y = xm(), _ = Dl(), E = jn(c, { relative: h });
  return z.useCallback(
    (M) => {
      if (E0(M, o)) {
        M.preventDefault();
        let B = s !== void 0 ? s : Mn(_) === Mn(E), X = () => y(c, {
          replace: B,
          state: f,
          preventScrollReset: d,
          relative: h,
          viewTransition: S,
          unstable_defaultShouldRevalidate: C
        });
        g ? z.startTransition(() => X()) : X();
      }
    },
    [
      _,
      y,
      E,
      s,
      f,
      o,
      c,
      d,
      h,
      S,
      C,
      g
    ]
  );
}
function Qf(c) {
  Re(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let o = z.useRef(Bf(c)), s = z.useRef(!1), f = Dl(), d = z.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      x0(
        f.search,
        s.current ? null : o.current
      )
    ),
    [f.search]
  ), h = xm(), S = z.useCallback(
    (C, g) => {
      const y = Bf(
        typeof C == "function" ? C(new URLSearchParams(d)) : C
      );
      s.current = !0, h("?" + y, g);
    },
    [h, d]
  );
  return [d, S];
}
var Z0 = 0, K0 = () => `__${String(++Z0)}__`;
function J0() {
  let { router: c } = Om(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = z.useContext(ze), s = d0(), f = c.fetch, d = c.navigate;
  return z.useCallback(
    async (h, S = {}) => {
      let { action: C, method: g, encType: y, formData: _, body: E } = A0(
        h,
        o
      );
      if (S.navigate === !1) {
        let M = S.fetcherKey || K0();
        await f(M, s, S.action || C, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: _,
          body: E,
          formMethod: S.method || g,
          formEncType: S.encType || y,
          flushSync: S.flushSync
        });
      } else
        await d(S.action || C, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: _,
          body: E,
          formMethod: S.method || g,
          formEncType: S.encType || y,
          replace: S.replace,
          state: S.state,
          fromRouteId: s,
          flushSync: S.flushSync,
          viewTransition: S.viewTransition
        });
    },
    [f, d, o, s]
  );
}
function k0(c, { relative: o } = {}) {
  let { basename: s } = z.useContext(ze), f = z.useContext(ll);
  qt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1), h = { ...jn(c || ".", { relative: o }) }, S = Dl();
  if (c == null) {
    h.search = S.search;
    let C = new URLSearchParams(h.search), g = C.getAll("index");
    if (g.some((_) => _ === "")) {
      C.delete("index"), g.filter((E) => E).forEach((E) => C.append("index", E));
      let _ = C.toString();
      h.search = _ ? `?${_}` : "";
    }
  }
  return (!c || c === ".") && d.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (h.pathname = h.pathname === "/" ? s : tl([s, h.pathname])), Mn(h);
}
function $0(c, { relative: o } = {}) {
  let s = z.useContext(pm);
  qt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Om(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = jn(c, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let h = el(s.currentLocation.pathname, f) || s.currentLocation.pathname, S = el(s.nextLocation.pathname, f) || s.nextLocation.pathname;
  return ai(d.pathname, S) != null || ai(d.pathname, h) != null;
}
var W0 = rm();
const F0 = ({ isOpen: c, onClose: o, children: s, className: f = "" }) => {
  const d = z.useRef(null);
  z.useEffect(() => {
    const S = (C) => {
      C.key === "Escape" && o();
    };
    return c && (window.addEventListener("keydown", S), document.body.style.overflow = "hidden"), () => {
      window.removeEventListener("keydown", S), document.body.style.overflow = "unset";
    };
  }, [c, o]);
  const h = (S) => {
    d.current && !d.current.contains(S.target) && o();
  };
  return c ? W0.createPortal(
    /* @__PURE__ */ j.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300",
        onClick: h,
        "aria-modal": "true",
        role: "dialog",
        children: /* @__PURE__ */ j.jsx("div", { ref: d, className: f, children: s })
      }
    ),
    document.body
  ) : null;
}, Mm = z.createContext(), Um = ({ children: c }) => {
  const [o, s] = z.useState(null), [f, d] = z.useState({}), h = z.useCallback((C, g = {}) => {
    s(C), d(g);
  }, []), S = z.useCallback(() => {
    s(null), d({});
  }, []);
  return /* @__PURE__ */ j.jsxs(Mm.Provider, { value: { openModal: h, closeModal: S }, children: [
    c,
    o && /* @__PURE__ */ j.jsx(F0, { isOpen: !!o, onClose: S, ...f, children: o })
  ] });
}, Nm = () => {
  const c = z.useContext(Mm);
  if (!c)
    throw new Error("useModal must be used within a ModalProvider");
  return c;
}, I0 = () => {
  const { closeModal: c } = Nm();
  return /* @__PURE__ */ j.jsxs(
    "header",
    {
      className: "flex justify-between items-center bg-[#EDD6CC]/25 px-4 py-4 rounded-t-[14px]",
      children: [
        /* @__PURE__ */ j.jsxs("span", { className: "flex space-x-2", children: [
          /* @__PURE__ */ j.jsx("img", { src: "/v1_stars.svg", alt: "" }),
          /* @__PURE__ */ j.jsx("p", { className: "text-sm font-medium uppercase tracking-widest", children: "Immersive Experience" })
        ] }),
        /* @__PURE__ */ j.jsx(
          "button",
          {
            onClick: c,
            className: "cursor-pointer hover:bg-[#EDD6CC] p-2 rounded-full",
            children: /* @__PURE__ */ j.jsx("img", { src: "/cross.svg", alt: "" })
          }
        )
      ]
    }
  );
}, jm = z.createContext(), Hm = ({ children: c }) => {
  const [o, s] = z.useState(null), [f, d] = z.useState(null), h = (E) => {
    s((M) => ({ ...M, ...E }));
  }, S = (E) => {
    d((M) => ({ ...M, ...E }));
  }, [C, g] = z.useState({}), y = (E, M) => {
    g((B) => ({ ...B, [E]: M }));
  }, _ = () => {
    g({});
  };
  return /* @__PURE__ */ j.jsx(
    jm.Provider,
    {
      value: {
        shopTheLookValues: o,
        setShopTheLookValues: s,
        updateShopTheLookValues: h,
        customiseValues: f,
        setCustomiseValues: d,
        updateCustomiseValues: S,
        selectedItems: C,
        updateSelectedItem: y,
        clearSelectedItems: _
      },
      children: c
    }
  );
}, Vf = () => {
  const c = z.useContext(jm);
  if (!c)
    throw new Error(
      "useImmersiveExperience must be used within a ImmersiveExperienceProvider"
    );
  return c;
}, P0 = () => {
  const c = "/mock_images/image 404.png", o = async () => {
    try {
      const g = await (await fetch(c)).blob(), y = window.URL.createObjectURL(g), _ = document.createElement("a");
      _.href = y, _.download = "generated-look.png", document.body.appendChild(_), _.click(), document.body.removeChild(_), window.URL.revokeObjectURL(y);
    } catch (C) {
      console.error("Download failed:", C);
    }
  }, s = async () => {
    try {
      const g = await (await fetch(c)).blob(), y = new File([g], "look.png", { type: g.type });
      navigator.canShare && navigator.canShare({ files: [y] }) ? await navigator.share({
        title: "My Virtual Try-On Look",
        text: "Check out this look!",
        files: [y]
      }) : alert(
        "Sharing files is not supported on this browser. Please download the image instead."
      );
    } catch (C) {
      console.error("Sharing failed:", C);
    }
  }, [f] = Qf(), d = f.get("tab") === "customise", { selectedItems: h } = Vf(), S = Object.keys(h).length;
  return /* @__PURE__ */ j.jsxs("div", { className: "w-[40%] py-4 px-6 h-full flex flex-col justify-between", children: [
    /* @__PURE__ */ j.jsxs("header", { className: "flex justify-end items-center space-x-3", children: [
      /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: o,
          className: "cursor-pointer border border-solid border-[#DFCDC5] rounded-md p-2 hover:bg-[#faefe8] transition-colors",
          children: /* @__PURE__ */ j.jsx("img", { src: "/v1_download.svg", alt: "Download" })
        }
      ),
      /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: s,
          className: "cursor-pointer border border-solid border-[#DFCDC5] rounded-md p-2 hover:bg-[#faefe8] transition-colors",
          children: /* @__PURE__ */ j.jsx("img", { src: "/v1_share.svg", alt: "Share" })
        }
      )
    ] }),
    /* @__PURE__ */ j.jsx("img", { src: c, alt: "Virtual Try-On Preview" }),
    /* @__PURE__ */ j.jsxs("footer", { className: "w-full flex justify-between space-x-3 items-center", children: [
      /* @__PURE__ */ j.jsxs("button", { className: "flex items-center justify-center w-[60%] bg-[#EDD6CC] border border-solid border-[#DFCDC5] text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase", children: [
        d ? `Apply (${S})` : "Try on",
        /* @__PURE__ */ j.jsx("img", { src: "/v2_stars.svg", className: "ml-2" })
      ] }),
      /* @__PURE__ */ j.jsx("button", { className: "flex items-center justify-center w-[40%] bg-[#EDD6CC]/30 border border-solid border-[#DFCDC5]/30 text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase text-[#000000]/30", children: "Animate" })
    ] })
  ] });
}, tg = ({ id: c, title: o, items: s, selectedItem: f, onSelect: d }) => {
  const [h, S] = z.useState(!0), [C, g] = z.useState(10);
  if ((!s || s.length === 0) && c !== "height") return null;
  const y = [
    "5'0",
    "5'2",
    "5'4",
    "5'6",
    "5'8",
    "5'9",
    "5'10",
    "6'0",
    "6'1"
  ], _ = (M) => {
    const B = parseInt(M.target.value, 10), X = y[B];
    d && d(X);
  }, E = f ? y.indexOf(f) : 4;
  return /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col space-y-3", children: [
    /* @__PURE__ */ j.jsxs(
      "span",
      {
        className: "flex space-x-2 items-center cursor-pointer",
        onClick: () => S(!h),
        children: [
          /* @__PURE__ */ j.jsx("img", { src: h ? "/chevron_up.svg" : "/chevron_down.svg", alt: "" }),
          /* @__PURE__ */ j.jsx("label", { className: "text-center font-bold uppercase text-[12px] cursor-pointer", children: o }),
          f && /* @__PURE__ */ j.jsx("div", { className: "bg-[#CD9177] rounded-full w-2 h-2" })
        ]
      }
    ),
    h && /* @__PURE__ */ j.jsx(j.Fragment, { children: c === "height" ? /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col px-1 py-2 w-full", children: [
      /* @__PURE__ */ j.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: y.length - 1,
          step: "1",
          value: E !== -1 ? E : 4,
          onChange: _,
          className: "w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer accent-[#CD9177]"
        }
      ),
      /* @__PURE__ */ j.jsx("div", { className: "flex justify-between mt-3 w-full", children: y.map((M, B) => /* @__PURE__ */ j.jsx(
        "span",
        {
          className: "text-[10px] font-bold text-black",
          children: M
        },
        M
      )) })
    ] }) : /* @__PURE__ */ j.jsxs("span", { className: "flex space-x-3 overflow-x-scroll scrollbar-hide", children: [
      s.slice(0, C).map((M, B) => {
        const X = f === M;
        return /* @__PURE__ */ j.jsx(
          "div",
          {
            className: `shrink-0 cursor-pointer border  ${X ? "border-[#000000]" : "border-transparent"}`,
            onClick: () => d && d(f === M ? null : M),
            children: /* @__PURE__ */ j.jsx(
              "img",
              {
                src: M.image || "/mock_images/Rectangle 4948.png",
                className: "w-[78px] h-[90px] object-cover",
                alt: M.name || ""
              }
            )
          },
          B
        );
      }),
      C < s.length && /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "shrink-0 flex items-center justify-center cursor-pointer border border-[#DFCDC5] w-[78px] h-[90px] text-[10px] font-bold uppercase hover:bg-[#DFCDC5]/20",
          onClick: () => g((M) => M + 10),
          children: "Load More"
        }
      )
    ] }) })
  ] });
}, Bm = z.createContext(null), qm = ({ children: c, apiBase: o, tenantId: s, product: f = {} }) => {
  const [d, h] = z.useState(null), [S, C] = z.useState(!1), [g, y] = z.useState(null), _ = (o || "").replace(/\/$/, ""), E = (q) => {
    const Y = new URLSearchParams();
    return s != null && Y.set("tenantId", String(s)), Object.entries(q || {}).forEach(([L, J]) => {
      J != null && J !== "" && Y.set(L, String(J));
    }), Y.toString();
  }, M = z.useCallback(async () => {
    if (!_ || s == null || s === "") return { isValid: !1 };
    const q = E({
      tenantId: s,
      sku: f.sku,
      productVariantId: f.productVariantId ?? f.variantId,
      productHandle: f.handle,
      subTenantId: f.subTenantId
    });
    return await (await fetch(`${_}/api/vton/validate?${q}`, {
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    })).json();
  }, [_, s, f.sku, f.productVariantId, f.variantId, f.handle, f.subTenantId]), B = z.useCallback(async () => {
    if (!_ || s == null || s === "")
      return y("Missing apiBase or tenantId"), null;
    C(!0), y(null);
    try {
      const q = E({
        tenantId: s,
        sku: f.sku,
        productVariantId: f.productVariantId ?? f.variantId,
        subTenantId: f.subTenantId
      }), Y = await fetch(`${_}/api/vton/config?${q}`, {
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });
      if (!Y.ok) throw new Error(Y.statusText);
      const L = await Y.json();
      return h(L), L;
    } catch (q) {
      return y(q.message), h(null), null;
    } finally {
      C(!1);
    }
  }, [_, s, f.sku, f.productVariantId, f.variantId, f.subTenantId]), X = z.useCallback(
    async (q) => {
      if (!_ || !s) throw new Error("Missing apiBase or tenantId");
      const Y = new FormData();
      Y.append("file", q), Y.append("tenantId", String(s));
      const L = await fetch(`${_}/api/vton/upload-selfie`, {
        method: "POST",
        body: Y,
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });
      if (!L.ok) {
        const ot = await L.json().catch(() => ({}));
        throw new Error(ot.message || L.statusText);
      }
      return (await L.json()).url;
    },
    [_, s]
  ), V = z.useCallback(
    async (q) => {
      if (!_ || !s) throw new Error("Missing apiBase or tenantId");
      const Y = await fetch(`${_}/api/vton/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify({
          tenantId: s,
          ...q
        })
      });
      if (!Y.ok) {
        const L = await Y.json().catch(() => ({}));
        throw new Error(L.message || Y.statusText);
      }
      return Y.json();
    },
    [_, s]
  );
  return /* @__PURE__ */ j.jsx(
    Bm.Provider,
    {
      value: {
        apiBase: _,
        tenantId: s,
        product: f,
        config: d,
        configLoading: S,
        configError: g,
        validate: M,
        fetchConfig: B,
        uploadSelfie: X,
        generate: V,
        setConfig: h
      },
      children: c
    }
  );
}, Lm = () => z.useContext(Bm), eg = () => {
  const c = z.useRef(null), [o, s] = z.useState([]), { selectedItems: f, updateSelectedItem: d } = Vf();
  z.useEffect(() => {
    const g = f?.tryon;
    Array.isArray(g) ? s(g) : g?.image ? s([{ id: "legacy", url: g.image, file: g.file }]) : s([]);
  }, [f]);
  const h = () => {
    c.current?.click();
  }, S = (g) => {
    const y = Array.from(g.target.files || []);
    if (y.length > 0) {
      const _ = y.map((M) => ({
        id: URL.createObjectURL(M),
        // Use URL as ID for simplicity
        url: URL.createObjectURL(M),
        file: M
      })), E = [...o, ..._];
      s(E), d("tryon", E);
    }
    c.current && (c.current.value = "");
  }, C = (g) => {
    const y = o.filter((_) => _.id !== g);
    s(y), d("tryon", y);
  };
  return /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col space-y-2 w-full", children: [
    /* @__PURE__ */ j.jsx("label", { className: "font-bold uppercase text-[12px] cursor-pointer", children: "Try-on" }),
    /* @__PURE__ */ j.jsx(
      "input",
      {
        type: "file",
        ref: c,
        onChange: S,
        className: "hidden",
        accept: "image/*",
        multiple: !0
      }
    ),
    o.length > 0 ? /* @__PURE__ */ j.jsxs("div", { className: "flex space-x-2 overflow-x-auto scrollbar-hide py-1 bg-[#F4F4F4] rounded-[8px]", children: [
      o.map((g) => /* @__PURE__ */ j.jsxs(
        "div",
        {
          className: "relative shrink-0 w-[70px] h-[80px]  overflow-hidden group border border-[#E5E5E5]",
          children: [
            /* @__PURE__ */ j.jsx(
              "img",
              {
                src: g.url,
                alt: "User Upload",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: () => C(g.id),
                className: "absolute top-1 right-1 bg-white/80 hover:bg-white rounded-full p-1 transition-colors opacity-0 group-hover:opacity-100",
                children: /* @__PURE__ */ j.jsx("img", { src: "/cross.svg", alt: "Remove", className: "w-2.5 h-2.5" })
              }
            )
          ]
        },
        g.id
      )),
      /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: h,
          className: "shrink-0 w-[70px] h-[80px] bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D5D5D5] transition-colors",
          children: /* @__PURE__ */ j.jsx("span", { className: "text-4xl text-[#7A7A7A] font-light", children: "+" })
        }
      )
    ] }) : /* @__PURE__ */ j.jsxs(
      "button",
      {
        onClick: h,
        className: "w-full bg-[#F4F4F4] rounded-[8px] flex items-center justify-center h-[90px] space-x-1.5 hover:bg-[#EAEAEA] transition-colors",
        children: [
          /* @__PURE__ */ j.jsx("img", { src: "/v1_upload.svg", alt: "", className: "w-[36px] h-[36px]" }),
          /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ j.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ j.jsx("p", { className: "text-[10px] font-bold", children: "Upload Your Photos to" }),
              " ",
              /* @__PURE__ */ j.jsx("p", { className: "text-[10px] font-bold uppercase ml-1", children: "Try-on:" })
            ] }),
            /* @__PURE__ */ j.jsx("p", { className: "text-sm font-bold", children: "1 Full Body Shot + Selfie" })
          ] })
        ]
      }
    )
  ] });
}, ti = () => Array.from({ length: 11 }, (c, o) => ({
  id: o,
  image: "/mock_images/Rectangle 4948.png"
})), lg = [
  { id: "models", title: "Models", items: ti() },
  { id: "body_size", title: "Body Size", items: ti() },
  { id: "backgrounds", title: "Backgrounds", items: ti() },
  { id: "height", title: "Height", items: [] },
  { id: "looks", title: "Looks", items: ti() }
], ag = () => {
  const [c, o] = z.useState(lg), { selectedItems: s, updateSelectedItem: f, clearSelectedItems: d } = Vf(), S = Lm()?.config;
  z.useEffect(() => {
    if (S) {
      const E = [];
      S.models?.length && E.push({
        id: "models",
        title: "Models",
        items: S.models.map((M) => ({
          id: M.id,
          image: M.thumbnailUrl || M.imageUrl,
          name: M.name
        }))
      }), S.backgrounds?.length && E.push({
        id: "backgrounds",
        title: "Backgrounds",
        items: S.backgrounds.map((M) => ({
          id: M.id,
          image: M.imageUrl,
          name: M.name,
          value: M.value
        }))
      }), S.looks?.length && E.push({
        id: "looks",
        title: "Looks",
        items: S.looks.map((M) => ({
          id: M.id,
          image: M.thumbnailUrl || M.imageUrl,
          name: M.name,
          productVariantIds: M.productVariantIds
        }))
      }), E.length && o(E);
    }
  }, [S]);
  const [C, g] = Qf(), y = C.get("tab") === "shop_the_look", _ = (E) => {
    d(), g((M) => {
      const B = new URLSearchParams(M);
      return E ? B.set("tab", E) : B.delete("tab"), B;
    });
  };
  return /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col pt-4 w-[30%] h-full space-y-3", children: [
    /* @__PURE__ */ j.jsxs("header", { className: "flex items-center w-full justify-between border-b border-t border-solid border-[#DFCDC5]/50 ", children: [
      /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: () => _("shop_the_look"),
          className: `text-center w-full uppercase text-[12px] font-medium py-2 ${y ? "bg-[#DFCDC5]/50" : ""}`,
          children: "Shop the look"
        }
      ),
      /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: () => _("customise"),
          className: `text-center w-full uppercase text-[12px] font-medium py-2 ${y ? "" : "bg-[#DFCDC5]/50"}`,
          children: "Customize"
        }
      )
    ] }),
    /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col px-4 space-y-6 overflow-y-scroll h-[600px]", children: [
      /* @__PURE__ */ j.jsx(eg, {}),
      c.map((E) => /* @__PURE__ */ j.jsx(
        tg,
        {
          id: E.id,
          title: E.title,
          items: E.items,
          selectedItem: s[E.id],
          onSelect: (M) => f(E.id, M)
        },
        E.id
      ))
    ] })
  ] });
}, ng = () => /* @__PURE__ */ j.jsxs("div", { className: "w-[30%] py-4 px-6 h-full flex flex-col space-y-3 justify-between", children: [
  /* @__PURE__ */ j.jsx("header", { className: "flex  items-center space-x-3", children: /* @__PURE__ */ j.jsx("p", { className: "text-sm font-medium text-[#000000] tracking-widest uppercase", children: "In view (1)" }) }),
  /* @__PURE__ */ j.jsx("div", { className: "flex flex-col space-y-3 overflow-y-scroll scrollbar-hide h-[600px]", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c, o) => /* @__PURE__ */ j.jsx(
    "div",
    {
      className: "border border-solid border-[#DFCDC5] bg-[#FDFDFD] rounded p-2",
      children: /* @__PURE__ */ j.jsxs("span", { className: "flex space-x-3 w-full", children: [
        /* @__PURE__ */ j.jsx(
          "img",
          {
            src: "/mock_images/Rectangle 4948.png",
            className: "w-[86px] h-[86px] object-cover border border-solid border-[#DFCDC5] rounded-[2px]"
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col justify-between w-full", children: [
          /* @__PURE__ */ j.jsxs("span", { className: "flex justify-between", children: [
            /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ j.jsx("p", { className: "font-bold text-[10px] tracking-wider uppercase", children: "Product Name" }),
              /* @__PURE__ */ j.jsx("p", { className: "text-[10px] tracking-wider uppercase font-regular", children: "Color:White" })
            ] }),
            /* @__PURE__ */ j.jsx("img", { src: "/v1_trash.svg" })
          ] }),
          /* @__PURE__ */ j.jsxs("span", { className: "flex justify-between w-full", children: [
            /* @__PURE__ */ j.jsxs("div", { className: "flex space-x-1 items-center ", children: [
              /* @__PURE__ */ j.jsx("button", { className: " text-black", children: "-" }),
              /* @__PURE__ */ j.jsx("p", { className: "font-regular text-[10px] bg-[#F4F4F4] text-center p-2 text-black ", children: "1" }),
              /* @__PURE__ */ j.jsx("button", { className: " text-black", children: "+" })
            ] }),
            /* @__PURE__ */ j.jsx("p", { className: "font-regular text-sm text-black", children: "$49.99" })
          ] })
        ] })
      ] })
    },
    o
  )) }),
  /* @__PURE__ */ j.jsx("footer", { className: "w-full flex justify-between space-x-3 items-center", children: /* @__PURE__ */ j.jsx("button", { className: "flex items-center justify-center w-full bg-[#EDD6CC] border border-solid border-[#DFCDC5] text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase", children: "Add to cart" }) })
] }), Ym = () => /* @__PURE__ */ j.jsxs("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col", children: [
  /* @__PURE__ */ j.jsx(I0, {}),
  /* @__PURE__ */ j.jsxs("div", { className: "flex flex-1 w-full  divide-x divide-solid divide-[#B1988E]", children: [
    /* @__PURE__ */ j.jsx(ag, {}),
    /* @__PURE__ */ j.jsx(P0, {}),
    /* @__PURE__ */ j.jsx(ng, {})
  ] })
] });
function ug() {
  const { fetchConfig: c, configLoading: o, configError: s } = Lm();
  return z.useEffect(() => {
    c();
  }, [c]), o ? /* @__PURE__ */ j.jsx("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col items-center justify-center", children: /* @__PURE__ */ j.jsx("p", { className: "text-gray-500", children: "Loading..." }) }) : s ? /* @__PURE__ */ j.jsx("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col items-center justify-center", children: /* @__PURE__ */ j.jsx("p", { className: "text-red-500", children: s }) }) : /* @__PURE__ */ j.jsx(Ym, {});
}
function wm({ apiMode: c }) {
  const { openModal: o } = Nm(), [s, f] = Qf(), d = () => {
    s.set("tab", "shop_the_look"), f(s);
    const h = c === "shopify" ? ug : Ym;
    o(/* @__PURE__ */ j.jsx(h, {}));
  };
  return /* @__PURE__ */ j.jsx("section", { className: "relative w-screen h-screen   flex flex-col items-center justify-center", children: /* @__PURE__ */ j.jsxs(
    "button",
    {
      onClick: d,
      className: "flex uppercase bg-[#FFFDFD] hover:bg-[#DFCDC5] transition-all duration-300 ease-in-out text-center text-[12px] tracking-wider items-center gap-2  px-4 py-2 text-sm font-semibold text-black border border-solid border-[#DFCDC5]  ",
      children: [
        /* @__PURE__ */ j.jsx("img", { src: "v3_stars.svg", alt: "" }),
        " Immersive Experience"
      ]
    }
  ) });
}
const ig = z.createContext(), Gm = ({ children: c }) => {
  const [o, s] = z.useState(() => localStorage.getItem("theme-primary") || "#4F46E5"), [f, d] = z.useState(() => localStorage.getItem("theme-font") || "Inter"), [h, S] = z.useState(() => localStorage.getItem("theme-match-host") === "true"), [C, g] = z.useState(!1), y = () => {
    const B = [
      "--primary",
      "--color-primary",
      "--brand",
      "--brand-color",
      "--chk-primary"
    ], X = getComputedStyle(document.documentElement);
    for (const q of B) {
      const Y = X.getPropertyValue(q).trim();
      if (Y) return Y;
    }
    const V = Array.from(
      document.querySelectorAll(
        "button, a, .btn, .button, input[type='submit']"
      )
    );
    for (const q of V) {
      const Y = window.getComputedStyle(q), L = Y.backgroundColor, J = Y.color;
      if (L && L !== "rgba(0, 0, 0, 0)" && L !== "transparent") {
        const ot = L.match(/\d+/g);
        if (ot) {
          const [mt, xt, F] = ot.map(Number);
          if (Math.abs(mt - xt) > 20 || Math.abs(mt - F) > 20 || Math.abs(xt - F) > 20)
            return L;
        }
      }
      if (q.tagName === "A" && J && J !== "rgb(0, 0, 0)" && J !== "rgb(255, 255, 255)")
        return J;
    }
    return null;
  }, _ = () => {
    const B = window.getComputedStyle(document.body).fontFamily;
    return B ? B.split(",")[0].replace(/['"]/g, "") : null;
  }, E = () => {
    const B = y(), X = _();
    B && (s(B), console.log("Detected Primary Color:", B)), X && (d(X), console.log("Detected Font:", X)), g(!0);
  };
  z.useEffect(() => {
    localStorage.setItem("theme-match-host", h), h && E();
  }, [h]), z.useEffect(() => {
    const B = document.documentElement;
    B.style.setProperty("--color-primary", o), localStorage.setItem("theme-primary", o);
    let X = '"Inter", sans-serif';
    f === "Playfair Display" ? X = '"Playfair Display", serif' : f === "Space Mono" ? X = '"Space Mono", monospace' : f === "System" ? X = "system-ui, -apple-system, sans-serif" : X = `"${f}", sans-serif`, B.style.setProperty("--font-family-sans", X), localStorage.setItem("theme-font", f);
  }, [o, f]);
  const M = {
    primaryColor: o,
    setPrimaryColor: s,
    fontFamily: f,
    setFontFamily: d,
    matchHostTheme: h,
    setMatchHostTheme: S,
    extractThemeFromHost: E,
    isAutoDetected: C
  };
  return /* @__PURE__ */ j.jsx(ig.Provider, { value: M, children: c });
}, Xm = "https://3fd6-118-103-231-78.ngrok-free.app";
function cg() {
  return /* @__PURE__ */ j.jsx(z.StrictMode, { children: /* @__PURE__ */ j.jsx(_m, { children: /* @__PURE__ */ j.jsx(Gm, { children: /* @__PURE__ */ j.jsx(qm, { apiBase: "", tenantId: null, product: {}, children: /* @__PURE__ */ j.jsx(Hm, { children: /* @__PURE__ */ j.jsx(Um, { children: /* @__PURE__ */ j.jsx(wm, {}) }) }) }) }) }) });
}
function fg({ apiBase: c, tenantId: o, product: s }) {
  return /* @__PURE__ */ j.jsx(z.StrictMode, { children: /* @__PURE__ */ j.jsx(_m, { children: /* @__PURE__ */ j.jsx(Gm, { children: /* @__PURE__ */ j.jsx(qm, { apiBase: c, tenantId: o, product: s || {}, children: /* @__PURE__ */ j.jsx(Hm, { children: /* @__PURE__ */ j.jsx(Um, { children: /* @__PURE__ */ j.jsx(wm, { apiMode: "shopify" }) }) }) }) }) }) });
}
window.initVirtualTryOn = async (c, o = {}) => {
  const s = document.getElementById(c);
  if (!s) {
    console.error(`[VirtualTryOn] Target element "${c}" not found.`);
    return;
  }
  const { apiBase: f, tenantId: d, product: h } = o, S = f || Xm;
  if (d != null) {
    try {
      const g = new URLSearchParams({ tenantId: String(d) });
      h?.sku && g.set("sku", h.sku), h?.variantId && g.set("productVariantId", h.variantId), h?.productVariantId && g.set("productVariantId", h.productVariantId), h?.handle && g.set("productHandle", h.handle);
      const y = await fetch(
        `${S.replace(/\/$/, "")}/api/vton/validate?${g}`,
        {
          headers: {
            // Ngrok free tunnels show a browser warning page unless this header is set.
            // Adding it here ensures the initial validate call also bypasses that interstitial.
            "ngrok-skip-browser-warning": "true"
          }
        }
      ).then((_) => _.json());
      if (!y.isValid || !y.isEnabled) {
        s.style.display = "none";
        return;
      }
    } catch (g) {
      console.error("[VirtualTryOn] Validate failed:", g), s.style.display = "none";
      return;
    }
    s.style.display = "";
  }
  const C = bv.createRoot(s);
  d != null ? C.render(
    /* @__PURE__ */ j.jsx(fg, { apiBase: S, tenantId: d, product: h })
  ) : C.render(/* @__PURE__ */ j.jsx(cg, {}));
};
document.addEventListener("DOMContentLoaded", () => {
  const c = document.getElementById("virtual-try-on-widget");
  if (c && !c._vtonInitialized) {
    c._vtonInitialized = !0;
    const s = c.getAttribute("data-api-base") || Xm, f = c.getAttribute("data-tenant-id"), d = {
      handle: c.getAttribute("data-product-handle") || void 0,
      variantId: c.getAttribute("data-variant-id") || void 0,
      sku: c.getAttribute("data-sku") || void 0
    };
    f ? window.initVirtualTryOn("virtual-try-on-widget", { apiBase: s, tenantId: f, product: d }) : window.initVirtualTryOn("virtual-try-on-widget");
  }
});
