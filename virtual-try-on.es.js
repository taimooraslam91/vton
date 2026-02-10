var Df = { exports: {} }, On = {};
var Jd;
function mv() {
  if (Jd) return On;
  Jd = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(f, d, m) {
    var b = null;
    if (m !== void 0 && (b = "" + m), d.key !== void 0 && (b = "" + d.key), "key" in d) {
      m = {};
      for (var E in d)
        E !== "key" && (m[E] = d[E]);
    } else m = d;
    return d = m.ref, {
      $$typeof: c,
      type: f,
      key: b,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return On.Fragment = o, On.jsx = r, On.jsxs = r, On;
}
var kd;
function hv() {
  return kd || (kd = 1, Df.exports = mv()), Df.exports;
}
var O = hv(), _f = { exports: {} }, I = {};
var $d;
function yv() {
  if ($d) return I;
  $d = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), E = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), H = Symbol.iterator;
  function B(p) {
    return p === null || typeof p != "object" ? null : (p = H && p[H] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var G = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, V = Object.assign, w = {};
  function L(p, j, X) {
    this.props = p, this.context = j, this.refs = w, this.updater = X || G;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(p, j) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, j, "setState");
  }, L.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function q() {
  }
  q.prototype = L.prototype;
  function J(p, j, X) {
    this.props = p, this.context = j, this.refs = w, this.updater = X || G;
  }
  var ot = J.prototype = new q();
  ot.constructor = J, V(ot, L.prototype), ot.isPureReactComponent = !0;
  var mt = Array.isArray;
  function xt() {
  }
  var W = { H: null, A: null, T: null, S: null }, _t = Object.prototype.hasOwnProperty;
  function Yt(p, j, X) {
    var Z = X.ref;
    return {
      $$typeof: c,
      type: p,
      key: j,
      ref: Z !== void 0 ? Z : null,
      props: X
    };
  }
  function me(p, j) {
    return Yt(p.type, j, p.props);
  }
  function Re(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function $t(p) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(X) {
      return j[X];
    });
  }
  var Ol = /\/+/g;
  function He(p, j) {
    return typeof p == "object" && p !== null && p.key != null ? $t("" + p.key) : j.toString(36);
  }
  function Ae(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(xt, xt) : (p.status = "pending", p.then(
          function(j) {
            p.status === "pending" && (p.status = "fulfilled", p.value = j);
          },
          function(j) {
            p.status === "pending" && (p.status = "rejected", p.reason = j);
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
  function M(p, j, X, Z, P) {
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
              return dt = p._init, M(
                dt(p._payload),
                j,
                X,
                Z,
                P
              );
          }
      }
    if (dt)
      return P = P(p), dt = Z === "" ? "." + He(p, 0) : Z, mt(P) ? (X = "", dt != null && (X = dt.replace(Ol, "$&/") + "/"), M(P, j, X, "", function(Ha) {
        return Ha;
      })) : P != null && (Re(P) && (P = me(
        P,
        X + (P.key == null || p && p.key === P.key ? "" : ("" + P.key).replace(
          Ol,
          "$&/"
        ) + "/") + dt
      )), j.push(P)), 1;
    dt = 0;
    var Jt = Z === "" ? "." : Z + ":";
    if (mt(p))
      for (var Ot = 0; Ot < p.length; Ot++)
        Z = p[Ot], lt = Jt + He(Z, Ot), dt += M(
          Z,
          j,
          X,
          lt,
          P
        );
    else if (Ot = B(p), typeof Ot == "function")
      for (p = Ot.call(p), Ot = 0; !(Z = p.next()).done; )
        Z = Z.value, lt = Jt + He(Z, Ot++), dt += M(
          Z,
          j,
          X,
          lt,
          P
        );
    else if (lt === "object") {
      if (typeof p.then == "function")
        return M(
          Ae(p),
          j,
          X,
          Z,
          P
        );
      throw j = String(p), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return dt;
  }
  function Y(p, j, X) {
    if (p == null) return p;
    var Z = [], P = 0;
    return M(p, Z, "", "", function(lt) {
      return j.call(X, lt, P++);
    }), Z;
  }
  function F(p) {
    if (p._status === -1) {
      var j = p._result;
      j = j(), j.then(
        function(X) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = X);
        },
        function(X) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = X);
        }
      ), p._status === -1 && (p._status = 0, p._result = j);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var vt = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, St = {
    map: Y,
    forEach: function(p, j, X) {
      Y(
        p,
        function() {
          j.apply(this, arguments);
        },
        X
      );
    },
    count: function(p) {
      var j = 0;
      return Y(p, function() {
        j++;
      }), j;
    },
    toArray: function(p) {
      return Y(p, function(j) {
        return j;
      }) || [];
    },
    only: function(p) {
      if (!Re(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return I.Activity = x, I.Children = St, I.Component = L, I.Fragment = r, I.Profiler = d, I.PureComponent = J, I.StrictMode = f, I.Suspense = y, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, I.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return W.H.useMemoCache(p);
    }
  }, I.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, I.cacheSignal = function() {
    return null;
  }, I.cloneElement = function(p, j, X) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var Z = V({}, p.props), P = p.key;
    if (j != null)
      for (lt in j.key !== void 0 && (P = "" + j.key), j)
        !_t.call(j, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && j.ref === void 0 || (Z[lt] = j[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) Z.children = X;
    else if (1 < lt) {
      for (var dt = Array(lt), Jt = 0; Jt < lt; Jt++)
        dt[Jt] = arguments[Jt + 2];
      Z.children = dt;
    }
    return Yt(p.type, P, Z);
  }, I.createContext = function(p) {
    return p = {
      $$typeof: b,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: m,
      _context: p
    }, p;
  }, I.createElement = function(p, j, X) {
    var Z, P = {}, lt = null;
    if (j != null)
      for (Z in j.key !== void 0 && (lt = "" + j.key), j)
        _t.call(j, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (P[Z] = j[Z]);
    var dt = arguments.length - 2;
    if (dt === 1) P.children = X;
    else if (1 < dt) {
      for (var Jt = Array(dt), Ot = 0; Ot < dt; Ot++)
        Jt[Ot] = arguments[Ot + 2];
      P.children = Jt;
    }
    if (p && p.defaultProps)
      for (Z in dt = p.defaultProps, dt)
        P[Z] === void 0 && (P[Z] = dt[Z]);
    return Yt(p, lt, P);
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(p) {
    return { $$typeof: E, render: p };
  }, I.isValidElement = Re, I.lazy = function(p) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: p },
      _init: F
    };
  }, I.memo = function(p, j) {
    return {
      $$typeof: v,
      type: p,
      compare: j === void 0 ? null : j
    };
  }, I.startTransition = function(p) {
    var j = W.T, X = {};
    W.T = X;
    try {
      var Z = p(), P = W.S;
      P !== null && P(X, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(xt, vt);
    } catch (lt) {
      vt(lt);
    } finally {
      j !== null && X.types !== null && (j.types = X.types), W.T = j;
    }
  }, I.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, I.use = function(p) {
    return W.H.use(p);
  }, I.useActionState = function(p, j, X) {
    return W.H.useActionState(p, j, X);
  }, I.useCallback = function(p, j) {
    return W.H.useCallback(p, j);
  }, I.useContext = function(p) {
    return W.H.useContext(p);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(p, j) {
    return W.H.useDeferredValue(p, j);
  }, I.useEffect = function(p, j) {
    return W.H.useEffect(p, j);
  }, I.useEffectEvent = function(p) {
    return W.H.useEffectEvent(p);
  }, I.useId = function() {
    return W.H.useId();
  }, I.useImperativeHandle = function(p, j, X) {
    return W.H.useImperativeHandle(p, j, X);
  }, I.useInsertionEffect = function(p, j) {
    return W.H.useInsertionEffect(p, j);
  }, I.useLayoutEffect = function(p, j) {
    return W.H.useLayoutEffect(p, j);
  }, I.useMemo = function(p, j) {
    return W.H.useMemo(p, j);
  }, I.useOptimistic = function(p, j) {
    return W.H.useOptimistic(p, j);
  }, I.useReducer = function(p, j, X) {
    return W.H.useReducer(p, j, X);
  }, I.useRef = function(p) {
    return W.H.useRef(p);
  }, I.useState = function(p) {
    return W.H.useState(p);
  }, I.useSyncExternalStore = function(p, j, X) {
    return W.H.useSyncExternalStore(
      p,
      j,
      X
    );
  }, I.useTransition = function() {
    return W.H.useTransition();
  }, I.version = "19.2.4", I;
}
var Fd;
function qf() {
  return Fd || (Fd = 1, _f.exports = yv()), _f.exports;
}
var z = qf(), Of = { exports: {} }, Rn = {}, Rf = { exports: {} }, Mf = {};
var Wd;
function vv() {
  return Wd || (Wd = 1, (function(c) {
    function o(M, Y) {
      var F = M.length;
      M.push(Y);
      t: for (; 0 < F; ) {
        var vt = F - 1 >>> 1, St = M[vt];
        if (0 < d(St, Y))
          M[vt] = Y, M[F] = St, F = vt;
        else break t;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function f(M) {
      if (M.length === 0) return null;
      var Y = M[0], F = M.pop();
      if (F !== Y) {
        M[0] = F;
        t: for (var vt = 0, St = M.length, p = St >>> 1; vt < p; ) {
          var j = 2 * (vt + 1) - 1, X = M[j], Z = j + 1, P = M[Z];
          if (0 > d(X, F))
            Z < St && 0 > d(P, X) ? (M[vt] = P, M[Z] = F, vt = Z) : (M[vt] = X, M[j] = F, vt = j);
          else if (Z < St && 0 > d(P, F))
            M[vt] = P, M[Z] = F, vt = Z;
          else break t;
        }
      }
      return Y;
    }
    function d(M, Y) {
      var F = M.sortIndex - Y.sortIndex;
      return F !== 0 ? F : M.id - Y.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      c.unstable_now = function() {
        return m.now();
      };
    } else {
      var b = Date, E = b.now();
      c.unstable_now = function() {
        return b.now() - E;
      };
    }
    var y = [], v = [], _ = 1, x = null, H = 3, B = !1, G = !1, V = !1, w = !1, L = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function ot(M) {
      for (var Y = r(v); Y !== null; ) {
        if (Y.callback === null) f(v);
        else if (Y.startTime <= M)
          f(v), Y.sortIndex = Y.expirationTime, o(y, Y);
        else break;
        Y = r(v);
      }
    }
    function mt(M) {
      if (V = !1, ot(M), !G)
        if (r(y) !== null)
          G = !0, xt || (xt = !0, $t());
        else {
          var Y = r(v);
          Y !== null && Ae(mt, Y.startTime - M);
        }
    }
    var xt = !1, W = -1, _t = 5, Yt = -1;
    function me() {
      return w ? !0 : !(c.unstable_now() - Yt < _t);
    }
    function Re() {
      if (w = !1, xt) {
        var M = c.unstable_now();
        Yt = M;
        var Y = !0;
        try {
          t: {
            G = !1, V && (V = !1, q(W), W = -1), B = !0;
            var F = H;
            try {
              e: {
                for (ot(M), x = r(y); x !== null && !(x.expirationTime > M && me()); ) {
                  var vt = x.callback;
                  if (typeof vt == "function") {
                    x.callback = null, H = x.priorityLevel;
                    var St = vt(
                      x.expirationTime <= M
                    );
                    if (M = c.unstable_now(), typeof St == "function") {
                      x.callback = St, ot(M), Y = !0;
                      break e;
                    }
                    x === r(y) && f(y), ot(M);
                  } else f(y);
                  x = r(y);
                }
                if (x !== null) Y = !0;
                else {
                  var p = r(v);
                  p !== null && Ae(
                    mt,
                    p.startTime - M
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              x = null, H = F, B = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? $t() : xt = !1;
        }
      }
    }
    var $t;
    if (typeof J == "function")
      $t = function() {
        J(Re);
      };
    else if (typeof MessageChannel < "u") {
      var Ol = new MessageChannel(), He = Ol.port2;
      Ol.port1.onmessage = Re, $t = function() {
        He.postMessage(null);
      };
    } else
      $t = function() {
        L(Re, 0);
      };
    function Ae(M, Y) {
      W = L(function() {
        M(c.unstable_now());
      }, Y);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, c.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _t = 0 < M ? Math.floor(1e3 / M) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, c.unstable_next = function(M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = H;
      }
      var F = H;
      H = Y;
      try {
        return M();
      } finally {
        H = F;
      }
    }, c.unstable_requestPaint = function() {
      w = !0;
    }, c.unstable_runWithPriority = function(M, Y) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var F = H;
      H = M;
      try {
        return Y();
      } finally {
        H = F;
      }
    }, c.unstable_scheduleCallback = function(M, Y, F) {
      var vt = c.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? vt + F : vt) : F = vt, M) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return St = F + St, M = {
        id: _++,
        callback: Y,
        priorityLevel: M,
        startTime: F,
        expirationTime: St,
        sortIndex: -1
      }, F > vt ? (M.sortIndex = F, o(v, M), r(y) === null && M === r(v) && (V ? (q(W), W = -1) : V = !0, Ae(mt, F - vt))) : (M.sortIndex = St, o(y, M), G || B || (G = !0, xt || (xt = !0, $t()))), M;
    }, c.unstable_shouldYield = me, c.unstable_wrapCallback = function(M) {
      var Y = H;
      return function() {
        var F = H;
        H = Y;
        try {
          return M.apply(this, arguments);
        } finally {
          H = F;
        }
      };
    };
  })(Mf)), Mf;
}
var Id;
function gv() {
  return Id || (Id = 1, Rf.exports = vv()), Rf.exports;
}
var Nf = { exports: {} }, Kt = {};
var Pd;
function pv() {
  if (Pd) return Kt;
  Pd = 1;
  var c = qf();
  function o(y) {
    var v = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        v += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + y + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var f = {
    d: {
      f: r,
      r: function() {
        throw Error(o(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function m(y, v, _) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: x == null ? null : "" + x,
      children: y,
      containerInfo: v,
      implementation: _
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(y, v) {
    if (y === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Kt.createPortal = function(y, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(o(299));
    return m(y, v, null, _);
  }, Kt.flushSync = function(y) {
    var v = b.T, _ = f.p;
    try {
      if (b.T = null, f.p = 2, y) return y();
    } finally {
      b.T = v, f.p = _, f.d.f();
    }
  }, Kt.preconnect = function(y, v) {
    typeof y == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(y, v));
  }, Kt.prefetchDNS = function(y) {
    typeof y == "string" && f.d.D(y);
  }, Kt.preinit = function(y, v) {
    if (typeof y == "string" && v && typeof v.as == "string") {
      var _ = v.as, x = E(_, v.crossOrigin), H = typeof v.integrity == "string" ? v.integrity : void 0, B = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? f.d.S(
        y,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: x,
          integrity: H,
          fetchPriority: B
        }
      ) : _ === "script" && f.d.X(y, {
        crossOrigin: x,
        integrity: H,
        fetchPriority: B,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Kt.preinitModule = function(y, v) {
    if (typeof y == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var _ = E(
            v.as,
            v.crossOrigin
          );
          f.d.M(y, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(y);
  }, Kt.preload = function(y, v) {
    if (typeof y == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, x = E(_, v.crossOrigin);
      f.d.L(y, _, {
        crossOrigin: x,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Kt.preloadModule = function(y, v) {
    if (typeof y == "string")
      if (v) {
        var _ = E(v.as, v.crossOrigin);
        f.d.m(y, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(y);
  }, Kt.requestFormReset = function(y) {
    f.d.r(y);
  }, Kt.unstable_batchedUpdates = function(y, v) {
    return y(v);
  }, Kt.useFormState = function(y, v, _) {
    return b.H.useFormState(y, v, _);
  }, Kt.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, Kt.version = "19.2.4", Kt;
}
var tm;
function rm() {
  if (tm) return Nf.exports;
  tm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Nf.exports = pv(), Nf.exports;
}
var em;
function bv() {
  if (em) return Rn;
  em = 1;
  var c = gv(), o = qf(), r = rm();
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
  function m(t) {
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
  function b(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function E(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (m(t) !== t)
      throw Error(f(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(f(188));
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
          if (u === l) return y(n), t;
          if (u === a) return y(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (s === a) {
            i = !0, a = n, l = u;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (s === a) {
              i = !0, a = u, l = n;
              break;
            }
            s = s.sibling;
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
  var x = Object.assign, H = /* @__PURE__ */ Symbol.for("react.element"), B = /* @__PURE__ */ Symbol.for("react.transitional.element"), G = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), mt = /* @__PURE__ */ Symbol.for("react.suspense"), xt = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Yt = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Re = Symbol.iterator;
  function $t(t) {
    return t === null || typeof t != "object" ? null : (t = Re && t[Re] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ol = /* @__PURE__ */ Symbol.for("react.client.reference");
  function He(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ol ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case V:
        return "Fragment";
      case L:
        return "Profiler";
      case w:
        return "StrictMode";
      case mt:
        return "Suspense";
      case xt:
        return "SuspenseList";
      case Yt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case G:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case ot:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return e = t.displayName || null, e !== null ? e : He(t.type) || "Memo";
        case _t:
          e = t._payload, t = t._init;
          try {
            return He(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ae = Array.isArray, M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vt = [], St = -1;
  function p(t) {
    return { current: t };
  }
  function j(t) {
    0 > St || (t.current = vt[St], vt[St] = null, St--);
  }
  function X(t, e) {
    St++, vt[St] = t.current, t.current = e;
  }
  var Z = p(null), P = p(null), lt = p(null), dt = p(null);
  function Jt(t, e) {
    switch (X(lt, e), X(P, t), X(Z, null), e.nodeType) {
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
    j(Z), X(Z, t);
  }
  function Ot() {
    j(Z), j(P), j(lt);
  }
  function Ha(t) {
    t.memoizedState !== null && X(dt, t);
    var e = Z.current, l = gd(e, t.type);
    e !== l && (X(P, t), X(Z, l));
  }
  function Bn(t) {
    P.current === t && (j(Z), j(P)), dt.current === t && (j(dt), An._currentValue = F);
  }
  var fi, Zf;
  function Rl(t) {
    if (fi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        fi = e && e[1] || "", Zf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fi + t + Zf;
  }
  var si = !1;
  function ri(t, e) {
    if (!t || si) return "";
    si = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (D) {
                  var C = D;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (D) {
                  C = D;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                C = D;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (D) {
            if (D && C && typeof D.stack == "string")
              return [D.stack, C.stack];
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
      var u = a.DetermineComponentFrameRoot(), i = u[0], s = u[1];
      if (i && s) {
        var h = i.split(`
`), A = s.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < A.length && !A[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === h.length || n === A.length)
          for (a = h.length - 1, n = A.length - 1; 1 <= a && 0 <= n && h[a] !== A[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== A[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== A[n]) {
                  var R = `
` + h[a].replace(" at new ", " at ");
                  return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      si = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Rl(l) : "";
  }
  function Vm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Rl(t.type);
      case 16:
        return Rl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Rl("Suspense Fallback") : Rl("Suspense");
      case 19:
        return Rl("SuspenseList");
      case 0:
      case 15:
        return ri(t.type, !1);
      case 11:
        return ri(t.type.render, !1);
      case 1:
        return ri(t.type, !0);
      case 31:
        return Rl("Activity");
      default:
        return "";
    }
  }
  function Kf(t) {
    try {
      var e = "", l = null;
      do
        e += Vm(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var oi = Object.prototype.hasOwnProperty, di = c.unstable_scheduleCallback, mi = c.unstable_cancelCallback, Zm = c.unstable_shouldYield, Km = c.unstable_requestPaint, ae = c.unstable_now, Jm = c.unstable_getCurrentPriorityLevel, Jf = c.unstable_ImmediatePriority, kf = c.unstable_UserBlockingPriority, wn = c.unstable_NormalPriority, km = c.unstable_LowPriority, $f = c.unstable_IdlePriority, $m = c.log, Fm = c.unstable_setDisableYieldValue, Ba = null, ne = null;
  function al(t) {
    if (typeof $m == "function" && Fm(t), ne && typeof ne.setStrictMode == "function")
      try {
        ne.setStrictMode(Ba, t);
      } catch {
      }
  }
  var ue = Math.clz32 ? Math.clz32 : Pm, Wm = Math.log, Im = Math.LN2;
  function Pm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Wm(t) / Im | 0) | 0;
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
  function Gn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Ml(a) : (i &= s, i !== 0 ? n = Ml(i) : l || (l = s & ~t, l !== 0 && (n = Ml(l))))) : (s = a & ~u, s !== 0 ? n = Ml(s) : i !== 0 ? n = Ml(i) : l || (l = a & ~t, l !== 0 && (n = Ml(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function wa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function th(t, e) {
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
  function Ff() {
    var t = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), t;
  }
  function hi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function qa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function eh(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, h = t.expirationTimes, A = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var R = 31 - ue(l), U = 1 << R;
      s[R] = 0, h[R] = -1;
      var C = A[R];
      if (C !== null)
        for (A[R] = null, R = 0; R < C.length; R++) {
          var D = C[R];
          D !== null && (D.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Wf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function Wf(t, e, l) {
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
    return l = (l & 42) !== 0 ? 1 : yi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function yi(t) {
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
  function vi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ts() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Yd(t.type));
  }
  function es(t, e) {
    var l = Y.p;
    try {
      return Y.p = t, e();
    } finally {
      Y.p = l;
    }
  }
  var nl = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + nl, Ft = "__reactProps$" + nl, $l = "__reactContainer$" + nl, gi = "__reactEvents$" + nl, lh = "__reactListeners$" + nl, ah = "__reactHandles$" + nl, ls = "__reactResources$" + nl, La = "__reactMarker$" + nl;
  function pi(t) {
    delete t[Gt], delete t[Ft], delete t[gi], delete t[lh], delete t[ah];
  }
  function Fl(t) {
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
  function Wl(t) {
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
    var e = t[ls];
    return e || (e = t[ls] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function qt(t) {
    t[La] = !0;
  }
  var as = /* @__PURE__ */ new Set(), ns = {};
  function Nl(t, e) {
    Pl(t, e), Pl(t + "Capture", e);
  }
  function Pl(t, e) {
    for (ns[t] = e, t = 0; t < e.length; t++)
      as.add(e[t]);
  }
  var nh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), us = {}, is = {};
  function uh(t) {
    return oi.call(is, t) ? !0 : oi.call(us, t) ? !1 : nh.test(t) ? is[t] = !0 : (us[t] = !0, !1);
  }
  function Xn(t, e, l) {
    if (uh(e))
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
  function Qn(t, e, l) {
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
  function cs(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ih(t, e, l) {
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
  function bi(t) {
    if (!t._valueTracker) {
      var e = cs(t) ? "checked" : "value";
      t._valueTracker = ih(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function fs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = cs(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Vn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ch = /[\n"\\]/g;
  function ye(t) {
    return t.replace(
      ch,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Si(t, e, l, a, n, u, i, s) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + he(e)) : t.value !== "" + he(e) && (t.value = "" + he(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Ei(t, i, he(e)) : l != null ? Ei(t, i, he(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + he(s) : t.removeAttribute("name");
  }
  function ss(t, e, l, a, n, u, i, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        bi(t);
        return;
      }
      l = l != null ? "" + he(l) : "", e = e != null ? "" + he(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), bi(t);
  }
  function Ei(t, e, l) {
    e === "number" && Vn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
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
  function rs(t, e, l) {
    if (e != null && (e = "" + he(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function os(t, e, l, a) {
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
    l = he(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), bi(t);
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
  var fh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ds(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || fh.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function ms(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && ds(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && ds(t, u, e[u]);
  }
  function xi(t) {
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
  var sh = /* @__PURE__ */ new Map([
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
  function Zn(t) {
    return rh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function we() {
  }
  var Ti = null;
  function zi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var la = null, aa = null;
  function hs(t) {
    var e = Wl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
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
                var n = a[Ft] || null;
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
              a = l[e], a.form === t.form && fs(a);
          }
          break t;
        case "textarea":
          rs(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ta(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ai = !1;
  function ys(t, e, l) {
    if (Ai) return t(e, l);
    Ai = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Ai = !1, (la !== null || aa !== null) && (Nu(), la && (e = la, t = aa, aa = la = null, hs(e), t)))
        for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function Ga(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
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
  var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ci = !1;
  if (qe)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function() {
          Ci = !0;
        }
      }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      Ci = !1;
    }
  var ul = null, Di = null, Kn = null;
  function vs() {
    if (Kn) return Kn;
    var t, e = Di, l = e.length, a, n = "value" in ul ? ul.value : ul.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Kn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Jn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function kn() {
    return !0;
  }
  function gs() {
    return !1;
  }
  function Wt(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kn : gs, this.isPropagationStopped = gs, this;
    }
    return x(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = kn);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = kn);
      },
      persist: function() {
      },
      isPersistent: kn
    }), e;
  }
  var Ul = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $n = Wt(Ul), Qa = x({}, Ul, { view: 0, detail: 0 }), oh = Wt(Qa), _i, Oi, Va, Fn = x({}, Qa, {
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
    getModifierState: Mi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Va && (Va && t.type === "mousemove" ? (_i = t.screenX - Va.screenX, Oi = t.screenY - Va.screenY) : Oi = _i = 0, Va = t), _i);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Oi;
    }
  }), ps = Wt(Fn), dh = x({}, Fn, { dataTransfer: 0 }), mh = Wt(dh), hh = x({}, Qa, { relatedTarget: 0 }), Ri = Wt(hh), yh = x({}, Ul, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vh = Wt(yh), gh = x({}, Ul, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), ph = Wt(gh), bh = x({}, Ul, { data: 0 }), bs = Wt(bh), Sh = {
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
  }, Eh = {
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
  }, xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Th(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = xh[t]) ? !!e[t] : !1;
  }
  function Mi() {
    return Th;
  }
  var zh = x({}, Qa, {
    key: function(t) {
      if (t.key) {
        var e = Sh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Jn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Eh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mi,
    charCode: function(t) {
      return t.type === "keypress" ? Jn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Jn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Ah = Wt(zh), Ch = x({}, Fn, {
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
  }), Ss = Wt(Ch), Dh = x({}, Qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mi
  }), _h = Wt(Dh), Oh = x({}, Ul, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rh = Wt(Oh), Mh = x({}, Fn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nh = Wt(Mh), Uh = x({}, Ul, {
    newState: 0,
    oldState: 0
  }), jh = Wt(Uh), Hh = [9, 13, 27, 32], Ni = qe && "CompositionEvent" in window, Za = null;
  qe && "documentMode" in document && (Za = document.documentMode);
  var Bh = qe && "TextEvent" in window && !Za, Es = qe && (!Ni || Za && 8 < Za && 11 >= Za), xs = " ", Ts = !1;
  function zs(t, e) {
    switch (t) {
      case "keyup":
        return Hh.indexOf(e.keyCode) !== -1;
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
  function As(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var na = !1;
  function wh(t, e) {
    switch (t) {
      case "compositionend":
        return As(e);
      case "keypress":
        return e.which !== 32 ? null : (Ts = !0, xs);
      case "textInput":
        return t = e.data, t === xs && Ts ? null : t;
      default:
        return null;
    }
  }
  function qh(t, e) {
    if (na)
      return t === "compositionend" || !Ni && zs(t, e) ? (t = vs(), Kn = Di = ul = null, na = !1, t) : null;
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
        return Es && e.locale !== "ko" ? null : e.data;
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
  function Cs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Lh[t.type] : e === "textarea";
  }
  function Ds(t, e, l, a) {
    la ? aa ? aa.push(a) : aa = [a] : la = a, e = Lu(e, "onChange"), 0 < e.length && (l = new $n(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var Ka = null, Ja = null;
  function Yh(t) {
    rd(t, 0);
  }
  function Wn(t) {
    var e = Ya(t);
    if (fs(e)) return t;
  }
  function _s(t, e) {
    if (t === "change") return e;
  }
  var Os = !1;
  if (qe) {
    var Ui;
    if (qe) {
      var ji = "oninput" in document;
      if (!ji) {
        var Rs = document.createElement("div");
        Rs.setAttribute("oninput", "return;"), ji = typeof Rs.oninput == "function";
      }
      Ui = ji;
    } else Ui = !1;
    Os = Ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    Ka && (Ka.detachEvent("onpropertychange", Ns), Ja = Ka = null);
  }
  function Ns(t) {
    if (t.propertyName === "value" && Wn(Ja)) {
      var e = [];
      Ds(
        e,
        Ja,
        t,
        zi(t)
      ), ys(Yh, e);
    }
  }
  function Gh(t, e, l) {
    t === "focusin" ? (Ms(), Ka = e, Ja = l, Ka.attachEvent("onpropertychange", Ns)) : t === "focusout" && Ms();
  }
  function Xh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wn(Ja);
  }
  function Qh(t, e) {
    if (t === "click") return Wn(e);
  }
  function Vh(t, e) {
    if (t === "input" || t === "change")
      return Wn(e);
  }
  function Zh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ie = typeof Object.is == "function" ? Object.is : Zh;
  function ka(t, e) {
    if (ie(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!oi.call(e, n) || !ie(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Us(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function js(t, e) {
    var l = Us(t);
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
      l = Us(l);
    }
  }
  function Hs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Bs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Vn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Vn(t.document);
    }
    return e;
  }
  function Hi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Kh = qe && "documentMode" in document && 11 >= document.documentMode, ua = null, Bi = null, $a = null, wi = !1;
  function ws(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    wi || ua == null || ua !== Vn(a) || (a = ua, "selectionStart" in a && Hi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), $a && ka($a, a) || ($a = a, a = Lu(Bi, "onSelect"), 0 < a.length && (e = new $n(
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
  }, qi = {}, qs = {};
  qe && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
  function Hl(t) {
    if (qi[t]) return qi[t];
    if (!ia[t]) return t;
    var e = ia[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in qs)
        return qi[t] = e[l];
    return t;
  }
  var Ls = Hl("animationend"), Ys = Hl("animationiteration"), Gs = Hl("animationstart"), Jh = Hl("transitionrun"), kh = Hl("transitionstart"), $h = Hl("transitioncancel"), Xs = Hl("transitionend"), Qs = /* @__PURE__ */ new Map(), Li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Li.push("scrollEnd");
  function Ce(t, e) {
    Qs.set(t, e), Nl(e, [t]);
  }
  var In = typeof reportError == "function" ? reportError : function(t) {
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
  function Pn() {
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
      u !== 0 && Vs(l, n, u);
    }
  }
  function tu(t, e, l, a) {
    ve[ca++] = t, ve[ca++] = e, ve[ca++] = l, ve[ca++] = a, Yi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Gi(t, e, l, a) {
    return tu(t, e, l, a), eu(t);
  }
  function Bl(t, e) {
    return tu(t, null, null, e), eu(t);
  }
  function Vs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ue(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function eu(t) {
    if (50 < pn)
      throw pn = 0, Fc = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function Fh(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ce(t, e, l, a) {
    return new Fh(t, e, l, a);
  }
  function Xi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Le(t, e) {
    var l = t.alternate;
    return l === null ? (l = ce(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Zs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function lu(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Xi(t) && (i = 1);
    else if (typeof t == "string")
      i = ev(
        t,
        l,
        Z.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Yt:
          return t = ce(31, l, e, n), t.elementType = Yt, t.lanes = u, t;
        case V:
          return wl(l.children, n, u, e);
        case w:
          i = 8, n |= 24;
          break;
        case L:
          return t = ce(12, l, e, n | 2), t.elementType = L, t.lanes = u, t;
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
              case q:
                i = 9;
                break t;
              case ot:
                i = 11;
                break t;
              case W:
                i = 14;
                break t;
              case _t:
                i = 16, a = null;
                break t;
            }
          i = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ce(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function wl(t, e, l, a) {
    return t = ce(7, t, a, e), t.lanes = l, t;
  }
  function Qi(t, e, l) {
    return t = ce(6, t, null, e), t.lanes = l, t;
  }
  function Ks(t) {
    var e = ce(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Vi(t, e, l) {
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
  var Js = /* @__PURE__ */ new WeakMap();
  function ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Js.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Kf(e)
      }, Js.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Kf(e)
    };
  }
  var sa = [], ra = 0, au = null, Fa = 0, pe = [], be = 0, il = null, Me = 1, Ne = "";
  function Ye(t, e) {
    sa[ra++] = Fa, sa[ra++] = au, au = t, Fa = e;
  }
  function ks(t, e, l) {
    pe[be++] = Me, pe[be++] = Ne, pe[be++] = il, il = t;
    var a = Me;
    t = Ne;
    var n = 32 - ue(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ue(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Me = 1 << 32 - ue(e) + n | l << n | a, Ne = u + t;
    } else
      Me = 1 << u | l << n | a, Ne = t;
  }
  function Zi(t) {
    t.return !== null && (Ye(t, 1), ks(t, 1, 0));
  }
  function Ki(t) {
    for (; t === au; )
      au = sa[--ra], sa[ra] = null, Fa = sa[--ra], sa[ra] = null;
    for (; t === il; )
      il = pe[--be], pe[be] = null, Ne = pe[--be], pe[be] = null, Me = pe[--be], pe[be] = null;
  }
  function $s(t, e) {
    pe[be++] = Me, pe[be++] = Ne, pe[be++] = il, Me = e.id, Ne = e.overflow, il = t;
  }
  var Xt = null, Tt = null, ct = !1, cl = null, Se = !1, Ji = Error(f(519));
  function fl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(ge(e, t)), Ji;
  }
  function Fs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Gt] = t, e[Ft] = a, l) {
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
        nt("invalid", e), ss(
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
        nt("invalid", e), os(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || hd(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)), a.onScroll != null && nt("scroll", e), a.onScrollEnd != null && nt("scrollend", e), a.onClick != null && (e.onclick = we), e = !0) : e = !1, e || fl(t, !0);
  }
  function Ws(t) {
    for (Xt = t.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 31:
        case 13:
          Se = !1;
          return;
        case 27:
        case 3:
          Se = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function oa(t) {
    if (t !== Xt) return !1;
    if (!ct) return Ws(t), ct = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || df(t.type, t.memoizedProps)), l = !l), l && Tt && fl(t), Ws(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = Td(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = Td(t);
    } else
      e === 27 ? (e = Tt, xl(t.type) ? (t = gf, gf = null, Tt = t) : Tt = e) : Tt = Xt ? xe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ql() {
    Tt = Xt = null, ct = !1;
  }
  function ki() {
    var t = cl;
    return t !== null && (ee === null ? ee = t : ee.push.apply(
      ee,
      t
    ), cl = null), t;
  }
  function Wa(t) {
    cl === null ? cl = [t] : cl.push(t);
  }
  var $i = p(null), Ll = null, Ge = null;
  function sl(t, e, l) {
    X($i, e._currentValue), e._currentValue = l;
  }
  function Xe(t) {
    t._currentValue = $i.current, j($i);
  }
  function Fi(t, e, l) {
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
          var s = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (s.context === e[h]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Fi(
                u.return,
                l,
                t
              ), a || (i = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Fi(i, l, t), i = null;
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
          var s = n.type;
          ie(n.pendingProps.value, i.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (n === dt.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(An) : t = [An]);
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
  function nu(t) {
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
  function Yl(t) {
    Ll = t, Ge = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Qt(t) {
    return Is(Ll, t);
  }
  function uu(t, e) {
    return Ll === null && Yl(t), Is(t, e);
  }
  function Is(t, e) {
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
  }, Ih = c.unstable_scheduleCallback, Ph = c.unstable_NormalPriority, Nt = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ii() {
    return {
      controller: new Wh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(t) {
    t.refCount--, t.refCount === 0 && Ih(Ph, function() {
      t.controller.abort();
    });
  }
  var Pa = null, Pi = 0, ma = 0, ha = null;
  function ty(t, e) {
    if (Pa === null) {
      var l = Pa = [];
      Pi = 0, ma = lf(), ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Pi++, e.then(Ps, Ps), e;
  }
  function Ps() {
    if (--Pi === 0 && Pa !== null) {
      ha !== null && (ha.status = "fulfilled");
      var t = Pa;
      Pa = null, ma = 0, ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ey(t, e) {
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
  var tr = M.S;
  M.S = function(t, e) {
    qo = ae(), typeof e == "object" && e !== null && typeof e.then == "function" && ty(t, e), tr !== null && tr(t, e);
  };
  var Gl = p(null);
  function tc() {
    var t = Gl.current;
    return t !== null ? t : Et.pooledCache;
  }
  function iu(t, e) {
    e === null ? X(Gl, Gl.current) : X(Gl, e.pool);
  }
  function er() {
    var t = tc();
    return t === null ? null : { parent: Nt._currentValue, pool: t };
  }
  var ya = Error(f(460)), ec = Error(f(474)), cu = Error(f(542)), fu = { then: function() {
  } };
  function lr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ar(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(we, we), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, ur(t), t;
      default:
        if (typeof e.status == "string") e.then(we, we);
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
            throw t = e.reason, ur(t), t;
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
  function nr() {
    if (Ql === null) throw Error(f(459));
    var t = Ql;
    return Ql = null, t;
  }
  function ur(t) {
    if (t === ya || t === cu)
      throw Error(f(483));
  }
  var va = null, tn = 0;
  function su(t) {
    var e = tn;
    return tn += 1, va === null && (va = []), ar(va, t, e);
  }
  function en(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ru(t, e) {
    throw e.$$typeof === H ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function ir(t) {
    function e(S, g) {
      if (t) {
        var T = S.deletions;
        T === null ? (S.deletions = [g], S.flags |= 16) : T.push(g);
      }
    }
    function l(S, g) {
      if (!t) return null;
      for (; g !== null; )
        e(S, g), g = g.sibling;
      return null;
    }
    function a(S) {
      for (var g = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? g.set(S.key, S) : g.set(S.index, S), S = S.sibling;
      return g;
    }
    function n(S, g) {
      return S = Le(S, g), S.index = 0, S.sibling = null, S;
    }
    function u(S, g, T) {
      return S.index = T, t ? (T = S.alternate, T !== null ? (T = T.index, T < g ? (S.flags |= 67108866, g) : T) : (S.flags |= 67108866, g)) : (S.flags |= 1048576, g);
    }
    function i(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function s(S, g, T, N) {
      return g === null || g.tag !== 6 ? (g = Qi(T, S.mode, N), g.return = S, g) : (g = n(g, T), g.return = S, g);
    }
    function h(S, g, T, N) {
      var k = T.type;
      return k === V ? R(
        S,
        g,
        T.props.children,
        N,
        T.key
      ) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === _t && Xl(k) === g.type) ? (g = n(g, T.props), en(g, T), g.return = S, g) : (g = lu(
        T.type,
        T.key,
        T.props,
        null,
        S.mode,
        N
      ), en(g, T), g.return = S, g);
    }
    function A(S, g, T, N) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== T.containerInfo || g.stateNode.implementation !== T.implementation ? (g = Vi(T, S.mode, N), g.return = S, g) : (g = n(g, T.children || []), g.return = S, g);
    }
    function R(S, g, T, N, k) {
      return g === null || g.tag !== 7 ? (g = wl(
        T,
        S.mode,
        N,
        k
      ), g.return = S, g) : (g = n(g, T), g.return = S, g);
    }
    function U(S, g, T) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Qi(
          "" + g,
          S.mode,
          T
        ), g.return = S, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case B:
            return T = lu(
              g.type,
              g.key,
              g.props,
              null,
              S.mode,
              T
            ), en(T, g), T.return = S, T;
          case G:
            return g = Vi(
              g,
              S.mode,
              T
            ), g.return = S, g;
          case _t:
            return g = Xl(g), U(S, g, T);
        }
        if (Ae(g) || $t(g))
          return g = wl(
            g,
            S.mode,
            T,
            null
          ), g.return = S, g;
        if (typeof g.then == "function")
          return U(S, su(g), T);
        if (g.$$typeof === J)
          return U(
            S,
            uu(S, g),
            T
          );
        ru(S, g);
      }
      return null;
    }
    function C(S, g, T, N) {
      var k = g !== null ? g.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return k !== null ? null : s(S, g, "" + T, N);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            return T.key === k ? h(S, g, T, N) : null;
          case G:
            return T.key === k ? A(S, g, T, N) : null;
          case _t:
            return T = Xl(T), C(S, g, T, N);
        }
        if (Ae(T) || $t(T))
          return k !== null ? null : R(S, g, T, N, null);
        if (typeof T.then == "function")
          return C(
            S,
            g,
            su(T),
            N
          );
        if (T.$$typeof === J)
          return C(
            S,
            g,
            uu(S, T),
            N
          );
        ru(S, T);
      }
      return null;
    }
    function D(S, g, T, N, k) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return S = S.get(T) || null, s(g, S, "" + N, k);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case B:
            return S = S.get(
              N.key === null ? T : N.key
            ) || null, h(g, S, N, k);
          case G:
            return S = S.get(
              N.key === null ? T : N.key
            ) || null, A(g, S, N, k);
          case _t:
            return N = Xl(N), D(
              S,
              g,
              T,
              N,
              k
            );
        }
        if (Ae(N) || $t(N))
          return S = S.get(T) || null, R(g, S, N, k, null);
        if (typeof N.then == "function")
          return D(
            S,
            g,
            T,
            su(N),
            k
          );
        if (N.$$typeof === J)
          return D(
            S,
            g,
            T,
            uu(g, N),
            k
          );
        ru(g, N);
      }
      return null;
    }
    function Q(S, g, T, N) {
      for (var k = null, ft = null, K = g, et = g = 0, it = null; K !== null && et < T.length; et++) {
        K.index > et ? (it = K, K = null) : it = K.sibling;
        var st = C(
          S,
          K,
          T[et],
          N
        );
        if (st === null) {
          K === null && (K = it);
          break;
        }
        t && K && st.alternate === null && e(S, K), g = u(st, g, et), ft === null ? k = st : ft.sibling = st, ft = st, K = it;
      }
      if (et === T.length)
        return l(S, K), ct && Ye(S, et), k;
      if (K === null) {
        for (; et < T.length; et++)
          K = U(S, T[et], N), K !== null && (g = u(
            K,
            g,
            et
          ), ft === null ? k = K : ft.sibling = K, ft = K);
        return ct && Ye(S, et), k;
      }
      for (K = a(K); et < T.length; et++)
        it = D(
          K,
          S,
          et,
          T[et],
          N
        ), it !== null && (t && it.alternate !== null && K.delete(
          it.key === null ? et : it.key
        ), g = u(
          it,
          g,
          et
        ), ft === null ? k = it : ft.sibling = it, ft = it);
      return t && K.forEach(function(Dl) {
        return e(S, Dl);
      }), ct && Ye(S, et), k;
    }
    function $(S, g, T, N) {
      if (T == null) throw Error(f(151));
      for (var k = null, ft = null, K = g, et = g = 0, it = null, st = T.next(); K !== null && !st.done; et++, st = T.next()) {
        K.index > et ? (it = K, K = null) : it = K.sibling;
        var Dl = C(S, K, st.value, N);
        if (Dl === null) {
          K === null && (K = it);
          break;
        }
        t && K && Dl.alternate === null && e(S, K), g = u(Dl, g, et), ft === null ? k = Dl : ft.sibling = Dl, ft = Dl, K = it;
      }
      if (st.done)
        return l(S, K), ct && Ye(S, et), k;
      if (K === null) {
        for (; !st.done; et++, st = T.next())
          st = U(S, st.value, N), st !== null && (g = u(st, g, et), ft === null ? k = st : ft.sibling = st, ft = st);
        return ct && Ye(S, et), k;
      }
      for (K = a(K); !st.done; et++, st = T.next())
        st = D(K, S, et, st.value, N), st !== null && (t && st.alternate !== null && K.delete(st.key === null ? et : st.key), g = u(st, g, et), ft === null ? k = st : ft.sibling = st, ft = st);
      return t && K.forEach(function(dv) {
        return e(S, dv);
      }), ct && Ye(S, et), k;
    }
    function bt(S, g, T, N) {
      if (typeof T == "object" && T !== null && T.type === V && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            t: {
              for (var k = T.key; g !== null; ) {
                if (g.key === k) {
                  if (k = T.type, k === V) {
                    if (g.tag === 7) {
                      l(
                        S,
                        g.sibling
                      ), N = n(
                        g,
                        T.props.children
                      ), N.return = S, S = N;
                      break t;
                    }
                  } else if (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === _t && Xl(k) === g.type) {
                    l(
                      S,
                      g.sibling
                    ), N = n(g, T.props), en(N, T), N.return = S, S = N;
                    break t;
                  }
                  l(S, g);
                  break;
                } else e(S, g);
                g = g.sibling;
              }
              T.type === V ? (N = wl(
                T.props.children,
                S.mode,
                N,
                T.key
              ), N.return = S, S = N) : (N = lu(
                T.type,
                T.key,
                T.props,
                null,
                S.mode,
                N
              ), en(N, T), N.return = S, S = N);
            }
            return i(S);
          case G:
            t: {
              for (k = T.key; g !== null; ) {
                if (g.key === k)
                  if (g.tag === 4 && g.stateNode.containerInfo === T.containerInfo && g.stateNode.implementation === T.implementation) {
                    l(
                      S,
                      g.sibling
                    ), N = n(g, T.children || []), N.return = S, S = N;
                    break t;
                  } else {
                    l(S, g);
                    break;
                  }
                else e(S, g);
                g = g.sibling;
              }
              N = Vi(T, S.mode, N), N.return = S, S = N;
            }
            return i(S);
          case _t:
            return T = Xl(T), bt(
              S,
              g,
              T,
              N
            );
        }
        if (Ae(T))
          return Q(
            S,
            g,
            T,
            N
          );
        if ($t(T)) {
          if (k = $t(T), typeof k != "function") throw Error(f(150));
          return T = k.call(T), $(
            S,
            g,
            T,
            N
          );
        }
        if (typeof T.then == "function")
          return bt(
            S,
            g,
            su(T),
            N
          );
        if (T.$$typeof === J)
          return bt(
            S,
            g,
            uu(S, T),
            N
          );
        ru(S, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, g !== null && g.tag === 6 ? (l(S, g.sibling), N = n(g, T), N.return = S, S = N) : (l(S, g), N = Qi(T, S.mode, N), N.return = S, S = N), i(S)) : l(S, g);
    }
    return function(S, g, T, N) {
      try {
        tn = 0;
        var k = bt(
          S,
          g,
          T,
          N
        );
        return va = null, k;
      } catch (K) {
        if (K === ya || K === cu) throw K;
        var ft = ce(29, K, null, S.mode);
        return ft.lanes = N, ft.return = S, ft;
      }
    };
  }
  var Vl = ir(!0), cr = ir(!1), rl = !1;
  function lc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ac(t, e) {
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
    if (a = a.shared, (rt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = eu(t), Vs(t, null, l), e;
    }
    return tu(t, a, e, l), eu(t);
  }
  function ln(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, If(t, l);
    }
  }
  function nc(t, e) {
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
  var uc = !1;
  function an() {
    if (uc) {
      var t = ha;
      if (t !== null) throw t;
    }
  }
  function nn(t, e, l, a) {
    uc = !1;
    var n = t.updateQueue;
    rl = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s, A = h.next;
      h.next = null, i === null ? u = A : i.next = A, i = h;
      var R = t.alternate;
      R !== null && (R = R.updateQueue, s = R.lastBaseUpdate, s !== i && (s === null ? R.firstBaseUpdate = A : s.next = A, R.lastBaseUpdate = h));
    }
    if (u !== null) {
      var U = n.baseState;
      i = 0, R = A = h = null, s = u;
      do {
        var C = s.lane & -536870913, D = C !== s.lane;
        if (D ? (ut & C) === C : (a & C) === C) {
          C !== 0 && C === ma && (uc = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, $ = s;
            C = e;
            var bt = l;
            switch ($.tag) {
              case 1:
                if (Q = $.payload, typeof Q == "function") {
                  U = Q.call(bt, U, C);
                  break t;
                }
                U = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = $.payload, C = typeof Q == "function" ? Q.call(bt, U, C) : Q, C == null) break t;
                U = x({}, U, C);
                break t;
              case 2:
                rl = !0;
            }
          }
          C = s.callback, C !== null && (t.flags |= 64, D && (t.flags |= 8192), D = n.callbacks, D === null ? n.callbacks = [C] : D.push(C));
        } else
          D = {
            lane: C,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, R === null ? (A = R = D, h = U) : R = R.next = D, i |= C;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          D = s, s = D.next, D.next = null, n.lastBaseUpdate = D, n.shared.pending = null;
        }
      } while (!0);
      R === null && (h = U), n.baseState = h, n.firstBaseUpdate = A, n.lastBaseUpdate = R, u === null && (n.shared.lanes = 0), gl |= i, t.lanes = i, t.memoizedState = U;
    }
  }
  function fr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function sr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        fr(l[t], e);
  }
  var ga = p(null), ou = p(0);
  function rr(t, e) {
    t = We, X(ou, t), X(ga, e), We = t | e.baseLanes;
  }
  function ic() {
    X(ou, We), X(ga, ga.current);
  }
  function cc() {
    We = ou.current, j(ga), j(ou);
  }
  var fe = p(null), Ee = null;
  function ml(t) {
    var e = t.alternate;
    X(Rt, Rt.current & 1), X(fe, t), Ee === null && (e === null || ga.current !== null || e.memoizedState !== null) && (Ee = t);
  }
  function fc(t) {
    X(Rt, Rt.current), X(fe, t), Ee === null && (Ee = t);
  }
  function or(t) {
    t.tag === 22 ? (X(Rt, Rt.current), X(fe, t), Ee === null && (Ee = t)) : hl();
  }
  function hl() {
    X(Rt, Rt.current), X(fe, fe.current);
  }
  function se(t) {
    j(fe), Ee === t && (Ee = null), j(Rt);
  }
  var Rt = p(0);
  function du(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || yf(l) || vf(l)))
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
  var Qe = 0, tt = null, gt = null, Ut = null, mu = !1, pa = !1, Zl = !1, hu = 0, un = 0, ba = null, ly = 0;
  function Ct() {
    throw Error(f(321));
  }
  function sc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ie(t[l], e[l])) return !1;
    return !0;
  }
  function rc(t, e, l, a, n, u) {
    return Qe = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? kr : Ac, Zl = !1, u = l(a, n), Zl = !1, pa && (u = mr(
      e,
      l,
      a,
      n
    )), dr(t), u;
  }
  function dr(t) {
    M.H = sn;
    var e = gt !== null && gt.next !== null;
    if (Qe = 0, Ut = gt = tt = null, mu = !1, un = 0, ba = null, e) throw Error(f(300));
    t === null || jt || (t = t.dependencies, t !== null && nu(t) && (jt = !0));
  }
  function mr(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if (pa && (ba = null), un = 0, pa = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Ut = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = $r, u = e(l, a);
    } while (pa);
    return u;
  }
  function ay() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? cn(e) : e, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (tt.flags |= 1024), e;
  }
  function oc() {
    var t = hu !== 0;
    return hu = 0, t;
  }
  function dc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function mc(t) {
    if (mu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      mu = !1;
    }
    Qe = 0, Ut = gt = tt = null, pa = !1, un = hu = 0, ba = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? tt.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Mt() {
    if (gt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Ut === null ? tt.memoizedState : Ut.next;
    if (e !== null)
      Ut = e, gt = t;
    else {
      if (t === null)
        throw tt.alternate === null ? Error(f(467)) : Error(f(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Ut === null ? tt.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cn(t) {
    var e = un;
    return un += 1, ba === null && (ba = []), t = ar(ba, t, e), e = tt, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? kr : Ac), t;
  }
  function vu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cn(t);
      if (t.$$typeof === J) return Qt(t);
    }
    throw Error(f(438, String(t)));
  }
  function hc(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = yu(), tt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = me;
    return e.index++, l;
  }
  function Ve(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function gu(t) {
    var e = Mt();
    return yc(e, gt, t);
  }
  function yc(t, e, l) {
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
      var s = i = null, h = null, A = e, R = !1;
      do {
        var U = A.lane & -536870913;
        if (U !== A.lane ? (ut & U) === U : (Qe & U) === U) {
          var C = A.revertLane;
          if (C === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), U === ma && (R = !0);
          else if ((Qe & C) === C) {
            A = A.next, C === ma && (R = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, h === null ? (s = h = U, i = u) : h = h.next = U, tt.lanes |= C, gl |= C;
          U = A.action, Zl && l(u, U), u = A.hasEagerState ? A.eagerState : l(u, U);
        } else
          C = {
            lane: U,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, h === null ? (s = h = C, i = u) : h = h.next = C, tt.lanes |= U, gl |= U;
        A = A.next;
      } while (A !== null && A !== e);
      if (h === null ? i = u : h.next = s, !ie(u, t.memoizedState) && (jt = !0, R && (l = ha, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = h, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function vc(t) {
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
  function hr(t, e, l) {
    var a = tt, n = Mt(), u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ie(
      (gt || n).memoizedState,
      l
    );
    if (i && (n.memoizedState = l, jt = !0), n = n.queue, bc(gr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || Ut !== null && Ut.memoizedState.tag & 1) {
      if (a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        vr.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Et === null) throw Error(f(349));
      u || (Qe & 127) !== 0 || yr(a, e, l);
    }
    return l;
  }
  function yr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = tt.updateQueue, e === null ? (e = yu(), tt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function vr(t, e, l, a) {
    e.value = l, e.getSnapshot = a, pr(e) && br(t);
  }
  function gr(t, e, l) {
    return l(function() {
      pr(e) && br(t);
    });
  }
  function pr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ie(t, l);
    } catch {
      return !0;
    }
  }
  function br(t) {
    var e = Bl(t, 2);
    e !== null && le(e, t, 2);
  }
  function gc(t) {
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
  function Sr(t, e, l, a) {
    return t.baseState = l, yc(
      t,
      gt,
      typeof a == "function" ? a : Ve
    );
  }
  function ny(t, e, l, a, n) {
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
      M.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Er(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Er(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = M.T, i = {};
      M.T = i;
      try {
        var s = l(n, a), h = M.S;
        h !== null && h(i, s), xr(t, e, s);
      } catch (A) {
        pc(t, e, A);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), M.T = u;
      }
    } else
      try {
        u = l(n, a), xr(t, e, u);
      } catch (A) {
        pc(t, e, A);
      }
  }
  function xr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Tr(t, e, a);
      },
      function(a) {
        return pc(t, e, a);
      }
    ) : Tr(t, e, l);
  }
  function Tr(t, e, l) {
    e.status = "fulfilled", e.value = l, zr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Er(t, l)));
  }
  function pc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, zr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function zr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ar(t, e) {
    return e;
  }
  function Cr(t, e) {
    if (ct) {
      var l = Et.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ct) {
            if (Tt) {
              e: {
                for (var n = Tt, u = Se; n.nodeType !== 8; ) {
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
      lastRenderedReducer: Ar,
      lastRenderedState: e
    }, l.queue = a, l = Zr.bind(
      null,
      tt,
      a
    ), a.dispatch = l, a = gc(!1), u = zc.bind(
      null,
      tt,
      !1,
      a.queue
    ), a = kt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = ny.bind(
      null,
      tt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Dr(t) {
    var e = Mt();
    return _r(e, gt, t);
  }
  function _r(t, e, l) {
    if (e = yc(
      t,
      e,
      Ar
    )[0], t = gu(Ve)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = cn(e);
      } catch (i) {
        throw i === ya ? cu : i;
      }
    else a = e;
    e = Mt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (tt.flags |= 2048, Sa(
      9,
      { destroy: void 0 },
      uy.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function uy(t, e) {
    t.action = e;
  }
  function Or(t) {
    var e = Mt(), l = gt;
    if (l !== null)
      return _r(e, l, t);
    Mt(), e = e.memoizedState, l = Mt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Sa(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = tt.updateQueue, e === null && (e = yu(), tt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Rr() {
    return Mt().memoizedState;
  }
  function pu(t, e, l, a) {
    var n = kt();
    tt.flags |= t, n.memoizedState = Sa(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function bu(t, e, l, a) {
    var n = Mt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && sc(a, gt.memoizedState.deps) ? n.memoizedState = Sa(e, u, l, a) : (tt.flags |= t, n.memoizedState = Sa(
      1 | e,
      u,
      l,
      a
    ));
  }
  function Mr(t, e) {
    pu(8390656, 8, t, e);
  }
  function bc(t, e) {
    bu(2048, 8, t, e);
  }
  function iy(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null)
      e = yu(), tt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Nr(t) {
    var e = Mt().memoizedState;
    return iy({ ref: e, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ur(t, e) {
    return bu(4, 2, t, e);
  }
  function jr(t, e) {
    return bu(4, 4, t, e);
  }
  function Hr(t, e) {
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
  function Br(t, e, l) {
    l = l != null ? l.concat([t]) : null, bu(4, 4, Hr.bind(null, e, t), l);
  }
  function Sc() {
  }
  function wr(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && sc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function qr(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && sc(e, a[1]))
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
  function Ec(t, e, l) {
    return l === void 0 || (Qe & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Yo(), tt.lanes |= t, gl |= t, l);
  }
  function Lr(t, e, l, a) {
    return ie(l, e) ? l : ga.current !== null ? (t = Ec(t, l, a), ie(t, e) || (jt = !0), t) : (Qe & 42) === 0 || (Qe & 1073741824) !== 0 && (ut & 261930) === 0 ? (jt = !0, t.memoizedState = l) : (t = Yo(), tt.lanes |= t, gl |= t, e);
  }
  function Yr(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var i = M.T, s = {};
    M.T = s, zc(t, !1, e, l);
    try {
      var h = n(), A = M.S;
      if (A !== null && A(s, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var R = ey(
          h,
          a
        );
        fn(
          t,
          e,
          R,
          de(t)
        );
      } else
        fn(
          t,
          e,
          a,
          de(t)
        );
    } catch (U) {
      fn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        de()
      );
    } finally {
      Y.p = u, i !== null && s.types !== null && (i.types = s.types), M.T = i;
    }
  }
  function cy() {
  }
  function xc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Gr(t).queue;
    Yr(
      t,
      n,
      e,
      F,
      l === null ? cy : function() {
        return Xr(t), l(a);
      }
    );
  }
  function Gr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ve,
        lastRenderedState: F
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
  function Xr(t) {
    var e = Gr(t);
    e.next === null && (e = t.alternate.memoizedState), fn(
      t,
      e.next.queue,
      {},
      de()
    );
  }
  function Tc() {
    return Qt(An);
  }
  function Qr() {
    return Mt().memoizedState;
  }
  function Vr() {
    return Mt().memoizedState;
  }
  function fy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = de();
          t = ol(l);
          var a = dl(e, t, l);
          a !== null && (le(a, e, l), ln(a, e, l)), e = { cache: Ii() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function sy(t, e, l) {
    var a = de();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t) ? Kr(e, l) : (l = Gi(t, e, l, a), l !== null && (le(l, t, a), Jr(l, e, a)));
  }
  function Zr(t, e, l) {
    var a = de();
    fn(t, e, l, a);
  }
  function fn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Su(t)) Kr(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, s = u(i, l);
          if (n.hasEagerState = !0, n.eagerState = s, ie(s, i))
            return tu(t, e, n, 0), Et === null && Pn(), !1;
        } catch {
        }
      if (l = Gi(t, e, n, a), l !== null)
        return le(l, t, a), Jr(l, e, a), !0;
    }
    return !1;
  }
  function zc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: lf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t)) {
      if (e) throw Error(f(479));
    } else
      e = Gi(
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
  function Kr(t, e) {
    pa = mu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Jr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, If(t, l);
    }
  }
  var sn = {
    readContext: Qt,
    use: vu,
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
  sn.useEffectEvent = Ct;
  var kr = {
    readContext: Qt,
    use: vu,
    useCallback: function(t, e) {
      return kt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Qt,
    useEffect: Mr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, pu(
        4194308,
        4,
        Hr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return pu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      pu(4, 2, t, e);
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
      }, a.queue = t, t = t.dispatch = sy.bind(
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
      t = gc(t);
      var e = t.queue, l = Zr.bind(null, tt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = kt();
      return Ec(l, t, e);
    },
    useTransition: function() {
      var t = gc(!1);
      return t = Yr.bind(
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
        (ut & 127) !== 0 || yr(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, Mr(gr.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        vr.bind(
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
        var l = Ne, a = Me;
        l = (a & ~(1 << 32 - ue(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = hu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = ly++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Tc,
    useFormState: Cr,
    useActionState: Cr,
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
      return e.queue = l, e = zc.bind(
        null,
        tt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: hc,
    useCacheRefresh: function() {
      return kt().memoizedState = fy.bind(
        null,
        tt
      );
    },
    useEffectEvent: function(t) {
      var e = kt(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((rt & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ac = {
    readContext: Qt,
    use: vu,
    useCallback: wr,
    useContext: Qt,
    useEffect: bc,
    useImperativeHandle: Br,
    useInsertionEffect: Ur,
    useLayoutEffect: jr,
    useMemo: qr,
    useReducer: gu,
    useRef: Rr,
    useState: function() {
      return gu(Ve);
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return Lr(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gu(Ve)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        e
      ];
    },
    useSyncExternalStore: hr,
    useId: Qr,
    useHostTransitionStatus: Tc,
    useFormState: Dr,
    useActionState: Dr,
    useOptimistic: function(t, e) {
      var l = Mt();
      return Sr(l, gt, t, e);
    },
    useMemoCache: hc,
    useCacheRefresh: Vr
  };
  Ac.useEffectEvent = Nr;
  var $r = {
    readContext: Qt,
    use: vu,
    useCallback: wr,
    useContext: Qt,
    useEffect: bc,
    useImperativeHandle: Br,
    useInsertionEffect: Ur,
    useLayoutEffect: jr,
    useMemo: qr,
    useReducer: vc,
    useRef: Rr,
    useState: function() {
      return vc(Ve);
    },
    useDebugValue: Sc,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return gt === null ? Ec(l, t, e) : Lr(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = vc(Ve)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        e
      ];
    },
    useSyncExternalStore: hr,
    useId: Qr,
    useHostTransitionStatus: Tc,
    useFormState: Or,
    useActionState: Or,
    useOptimistic: function(t, e) {
      var l = Mt();
      return gt !== null ? Sr(l, gt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: hc,
    useCacheRefresh: Vr
  };
  $r.useEffectEvent = Nr;
  function Cc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : x({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Dc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = de(), n = ol(a);
      n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (le(e, t, a), ln(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = de(), n = ol(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (le(e, t, a), ln(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = de(), a = ol(l);
      a.tag = 2, e != null && (a.callback = e), e = dl(t, a, l), e !== null && (le(e, t, l), ln(e, t, l));
    }
  };
  function Fr(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !ka(l, a) || !ka(n, u) : !0;
  }
  function Wr(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Dc.enqueueReplaceState(e, e.state, null);
  }
  function Kl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = x({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Ir(t) {
    In(t);
  }
  function Pr(t) {
    console.error(t);
  }
  function to(t) {
    In(t);
  }
  function Eu(t, e) {
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
      Eu(t, e);
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
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
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
            return Ee === null ? Uu() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === fu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Pc(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === fu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Pc(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Pc(t, a, n), Uu(), !1;
    }
    if (ct)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Ji && (t = Error(f(422), { cause: a }), Wa(ge(t, l)))) : (a !== Ji && (e = Error(f(423), {
        cause: a
      }), Wa(
        ge(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = ge(a, l), n = _c(
        t.stateNode,
        a,
        n
      ), nc(t, n), Dt !== 4 && (Dt = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = ge(u, l), gn === null ? gn = [u] : gn.push(u), Dt !== 4 && (Dt = 2), e === null) return !0;
    a = ge(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = _c(l.stateNode, a, t), nc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pl === null || !pl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = lo(n), ao(
              n,
              t,
              l,
              a
            ), nc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Oc = Error(f(461)), jt = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? cr(e, null, l, a) : Vl(
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
      for (var s in a)
        s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return Yl(e), a = rc(
      t,
      e,
      l,
      i,
      u,
      n
    ), s = oc(), t !== null && !jt ? (dc(t, e, n), Ze(t, e, n)) : (ct && s && Zi(e), e.flags |= 1, Vt(t, e, a, n), e.child);
  }
  function uo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Xi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, io(
        t,
        e,
        u,
        a,
        n
      )) : (t = lu(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !wc(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ka, l(i, a) && t.ref === e.ref)
        return Ze(t, e, n);
    }
    return e.flags |= 1, t = Le(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function io(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (ka(u, a) && t.ref === e.ref)
        if (jt = !1, e.pendingProps = a = u, wc(t, n))
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
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && iu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? rr(e, u) : ic(), or(e);
      else
        return a = e.lanes = 536870912, fo(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (iu(e, u.cachePool), rr(e, u), hl(), e.memoizedState = null) : (t !== null && iu(e, null), ic(), hl());
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
    var u = tc();
    return u = u === null ? null : { parent: Nt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && iu(e, null), ic(), or(e), t !== null && da(t, e, a, !0), e.childLanes = n, null;
  }
  function xu(t, e) {
    return e = zu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function so(t, e, l) {
    return Vl(e, t.child, null, l), t = xu(e, e.pendingProps), t.flags |= 2, se(e), e.memoizedState = null, t;
  }
  function oy(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (a.mode === "hidden")
          return t = xu(e, a), e.lanes = 536870912, rn(null, t);
        if (fc(e), (t = Tt) ? (t = xd(
          t,
          Se
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: il !== null ? { id: Me, overflow: Ne } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ks(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw fl(e);
        return e.lanes = 536870912, null;
      }
      return xu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (fc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = so(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (jt || da(t, e, l, !1), n = (l & t.childLanes) !== 0, jt || n) {
        if (a = Et, a !== null && (i = Pf(a, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Bl(t, i), le(a, t, i), Oc;
        Uu(), e = so(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Tt = xe(i.nextSibling), Xt = e, ct = !0, cl = null, Se = !1, t !== null && $s(e, t), e = xu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Le(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tu(t, e) {
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
    return Yl(e), l = rc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = oc(), t !== null && !jt ? (dc(t, e, n), Ze(t, e, n)) : (ct && a && Zi(e), e.flags |= 1, Vt(t, e, l, n), e.child);
  }
  function ro(t, e, l, a, n, u) {
    return Yl(e), e.updateQueue = null, l = mr(
      e,
      a,
      l,
      n
    ), dr(t), a = oc(), t !== null && !jt ? (dc(t, e, u), Ze(t, e, u)) : (ct && a && Zi(e), e.flags |= 1, Vt(t, e, l, u), e.child);
  }
  function oo(t, e, l, a, n) {
    if (Yl(e), e.stateNode === null) {
      var u = fa, i = l.contextType;
      typeof i == "object" && i !== null && (u = Qt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Dc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, lc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Qt(i) : fa, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Cc(
        e,
        l,
        i,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Dc.enqueueReplaceState(u, u.state, null), nn(e, a, u, n), an(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps, h = Kl(l, s);
      u.props = h;
      var A = u.context, R = l.contextType;
      i = fa, typeof R == "object" && R !== null && (i = Qt(R));
      var U = l.getDerivedStateFromProps;
      R = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || A !== i) && Wr(
        e,
        u,
        a,
        i
      ), rl = !1;
      var C = e.memoizedState;
      u.state = C, nn(e, a, u, n), an(), A = e.memoizedState, s || C !== A || rl ? (typeof U == "function" && (Cc(
        e,
        l,
        U,
        a
      ), A = e.memoizedState), (h = rl || Fr(
        e,
        l,
        h,
        a,
        C,
        A,
        i
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = i, a = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, ac(t, e), i = e.memoizedProps, R = Kl(l, i), u.props = R, U = e.pendingProps, C = u.context, A = l.contextType, h = fa, typeof A == "object" && A !== null && (h = Qt(A)), s = l.getDerivedStateFromProps, (A = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== U || C !== h) && Wr(
        e,
        u,
        a,
        h
      ), rl = !1, C = e.memoizedState, u.state = C, nn(e, a, u, n), an();
      var D = e.memoizedState;
      i !== U || C !== D || rl || t !== null && t.dependencies !== null && nu(t.dependencies) ? (typeof s == "function" && (Cc(
        e,
        l,
        s,
        a
      ), D = e.memoizedState), (R = rl || Fr(
        e,
        l,
        R,
        a,
        C,
        D,
        h
      ) || t !== null && t.dependencies !== null && nu(t.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, D, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        D,
        h
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = D), u.props = a, u.state = D, u.context = h, a = R) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Tu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Vl(
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
    return ql(), e.flags |= 256, Vt(t, e, l, a), e.child;
  }
  var Mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nc(t) {
    return { baseLanes: t, cachePool: er() };
  }
  function Uc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= oe), t;
  }
  function ho(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Rt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (n ? ml(e) : hl(), (t = Tt) ? (t = xd(
          t,
          Se
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: il !== null ? { id: Me, overflow: Ne } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ks(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw fl(e);
        return vf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (hl(), n = e.mode, s = zu(
        { mode: "hidden", children: s },
        n
      ), a = wl(
        a,
        n,
        l,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Nc(l), a.childLanes = Uc(
        t,
        i,
        l
      ), e.memoizedState = Mc, rn(null, a)) : (ml(e), jc(e, s));
    }
    var h = t.memoizedState;
    if (h !== null && (s = h.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (ml(e), e.flags &= -257, e = Hc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (hl(), e.child = t.child, e.flags |= 128, e = null) : (hl(), s = a.fallback, n = e.mode, a = zu(
          { mode: "visible", children: a.children },
          n
        ), s = wl(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, Vl(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Nc(l), a.childLanes = Uc(
          t,
          i,
          l
        ), e.memoizedState = Mc, e = rn(null, a));
      else if (ml(e), vf(s)) {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var A = i.dgst;
        i = A, a = Error(f(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), e = Hc(
          t,
          e,
          l
        );
      } else if (jt || da(t, e, l, !1), i = (l & t.childLanes) !== 0, jt || i) {
        if (i = Et, i !== null && (a = Pf(i, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, Bl(t, a), le(i, t, a), Oc;
        yf(s) || Uu(), e = Hc(
          t,
          e,
          l
        );
      } else
        yf(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Tt = xe(
          s.nextSibling
        ), Xt = e, ct = !0, cl = null, Se = !1, t !== null && $s(e, t), e = jc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (hl(), s = a.fallback, n = e.mode, h = t.child, A = h.sibling, a = Le(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, A !== null ? s = Le(
      A,
      s
    ) : (s = wl(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, rn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Nc(l) : (n = s.cachePool, n !== null ? (h = Nt._currentValue, n = n.parent !== h ? { parent: h, pool: h } : n) : n = er(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Uc(
      t,
      i,
      l
    ), e.memoizedState = Mc, rn(t.child, a)) : (ml(e), l = t.child, t = l.sibling, l = Le(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function jc(t, e) {
    return e = zu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function zu(t, e) {
    return t = ce(22, t, null, e), t.lanes = 0, t;
  }
  function Hc(t, e, l) {
    return Vl(e, t.child, null, l), t = jc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function yo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Fi(t.return, e, l);
  }
  function Bc(t, e, l, a, n, u) {
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
    var i = Rt.current, s = (i & 2) !== 0;
    if (s ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, X(Rt, i), Vt(t, e, a, l), a = ct ? Fa : 0, !s && t !== null && (t.flags & 128) !== 0)
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
          t = l.alternate, t !== null && du(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Bc(
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
          if (t = n.alternate, t !== null && du(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Bc(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Bc(
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
      for (t = e.child, l = Le(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Le(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function wc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && nu(t)));
  }
  function dy(t, e, l) {
    switch (e.tag) {
      case 3:
        Jt(e, e.stateNode.containerInfo), sl(e, Nt, t.memoizedState.cache), ql();
        break;
      case 27:
      case 5:
        Ha(e);
        break;
      case 4:
        Jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        sl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, fc(e), null;
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
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X(Rt, Rt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, co(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        sl(e, Nt, t.memoizedState.cache);
    }
    return Ze(t, e, l);
  }
  function go(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        jt = !0;
      else {
        if (!wc(t, l) && (e.flags & 128) === 0)
          return jt = !1, dy(
            t,
            e,
            l
          );
        jt = (t.flags & 131072) !== 0;
      }
    else
      jt = !1, ct && (e.flags & 1048576) !== 0 && ks(e, Fa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Xl(e.elementType), e.type = t, typeof t == "function")
            Xi(t) ? (a = Kl(t, a), e.tag = 1, e = oo(
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
              } else if (n === W) {
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
          n = u.element, ac(t, e), nn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, sl(e, Nt, a), a !== u.cache && Wi(
            e,
            [Nt],
            l,
            !0
          ), an(), a = i.element, u.isDehydrated)
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
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Tt = xe(t.firstChild), Xt = e, ct = !0, cl = null, Se = !0, l = cr(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ql(), a === n) {
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
        return Tu(t, e), t === null ? (l = _d(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = Yu(
          lt.current
        ).createElement(l), a[Gt] = e, a[Ft] = t, Zt(a, l, t), qt(a), e.stateNode = a) : e.memoizedState = _d(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ha(e), t === null && ct && (a = e.stateNode = Ad(
          e.type,
          e.pendingProps,
          lt.current
        ), Xt = e, Se = !0, n = Tt, xl(e.type) ? (gf = n, Tt = xe(a.firstChild)) : Tt = n), Vt(
          t,
          e,
          e.pendingProps.children,
          l
        ), Tu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((n = a = Tt) && (a = Xy(
          a,
          e.type,
          e.pendingProps,
          Se
        ), a !== null ? (e.stateNode = a, Xt = e, Tt = xe(a.firstChild), Se = !1, n = !0) : n = !1), n || fl(e)), Ha(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, df(n, u) ? a = null : i !== null && df(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = rc(
          t,
          e,
          ay,
          null,
          null,
          l
        ), An._currentValue = n), Tu(t, e), Vt(t, e, a, l), e.child;
      case 6:
        return t === null && ct && ((t = l = Tt) && (l = Qy(
          l,
          e.pendingProps,
          Se
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
        return a = e.pendingProps, sl(e, e.type, a.value), Vt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Yl(e), n = Qt(n), a = a(n), e.flags |= 1, Vt(t, e, a, l), e.child;
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
        return oy(t, e, l);
      case 22:
        return co(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Yl(e), a = Qt(Nt), t === null ? (n = tc(), n === null && (n = Et, u = Ii(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, lc(e), sl(e, Nt, n)) : ((t.lanes & l) !== 0 && (ac(t, e), nn(e, null, null, l), an()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), sl(e, Nt, a)) : (a = u.cache, sl(e, Nt, a), a !== n.cache && Wi(
          e,
          [Nt],
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
          throw Ql = fu, ec;
    } else t.flags &= -16777217;
  }
  function po(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ud(e))
      if (Vo()) t.flags |= 8192;
      else
        throw Ql = fu, ec;
  }
  function Au(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ff() : 536870912, t.lanes |= e, za |= e);
  }
  function on(t, e) {
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
  function my(t, e, l) {
    var a = e.pendingProps;
    switch (Ki(e), e.tag) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xe(Nt), Ot(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (oa(e) ? Ke(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ki())), zt(e), null;
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
        if (Bn(e), l = lt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return zt(e), null;
          }
          t = Z.current, oa(e) ? Fs(e) : (t = Ad(n, a, l), e.stateNode = t, Ke(e));
        }
        return zt(e), null;
      case 5:
        if (Bn(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return zt(e), null;
          }
          if (u = Z.current, oa(e))
            Fs(e);
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
            u[Gt] = e, u[Ft] = a;
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
              ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), t = !1;
          } else
            l = ki(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (se(e), e) : (se(e), null);
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
              ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), n = !1;
          } else
            n = ki(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (se(e), e) : (se(e), null);
        }
        return se(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Au(e, e.updateQueue), zt(e), null);
      case 4:
        return Ot(), t === null && cf(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return Xe(e.type), zt(e), null;
      case 19:
        if (j(Rt), a = e.memoizedState, a === null) return zt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) on(a, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = du(t), u !== null) {
                  for (e.flags |= 128, on(a, !1), t = u.updateQueue, e.updateQueue = t, Au(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Zs(l, t), l = l.sibling;
                  return X(
                    Rt,
                    Rt.current & 1 | 2
                  ), ct && Ye(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ae() > Ru && (e.flags |= 128, n = !0, on(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = du(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Au(e, t), on(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct)
                return zt(e), null;
            } else
              2 * ae() - a.renderingStartTime > Ru && l !== 536870912 && (e.flags |= 128, n = !0, on(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ae(), t.sibling = null, l = Rt.current, X(
          Rt,
          n ? l & 1 | 2 : l & 1
        ), ct && Ye(e, a.treeForkCount), t) : (zt(e), null);
      case 22:
      case 23:
        return se(e), cc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && Au(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && j(Gl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Xe(Nt), zt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function hy(t, e) {
    switch (Ki(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Xe(Nt), Ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Bn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (se(e), e.alternate === null)
            throw Error(f(340));
          ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (se(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return j(Rt), null;
      case 4:
        return Ot(), null;
      case 10:
        return Xe(e.type), null;
      case 22:
      case 23:
        return se(e), cc(), t !== null && j(Gl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Xe(Nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bo(t, e) {
    switch (Ki(e), e.tag) {
      case 3:
        Xe(Nt), Ot();
        break;
      case 26:
      case 27:
      case 5:
        Bn(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && se(e);
        break;
      case 13:
        se(e);
        break;
      case 19:
        j(Rt);
        break;
      case 10:
        Xe(e.type);
        break;
      case 22:
      case 23:
        se(e), cc(), t !== null && j(Gl);
        break;
      case 24:
        Xe(Nt);
    }
  }
  function dn(t, e) {
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
    } catch (s) {
      yt(e, e.return, s);
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
            var i = a.inst, s = i.destroy;
            if (s !== void 0) {
              i.destroy = void 0, n = e;
              var h = l, A = s;
              try {
                A();
              } catch (R) {
                yt(
                  n,
                  h,
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
  function So(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        sr(e, l);
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
  function mn(t, e) {
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
  function Ue(t, e) {
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
      By(a, t.type, l, e), a[Ft] = e;
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
  function Gc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = we));
    else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Gc(t, e, l), t = t.sibling; t !== null; )
        Gc(t, e, l), t = t.sibling;
  }
  function Cu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Cu(t, e, l), t = t.sibling; t !== null; )
        Cu(t, e, l), t = t.sibling;
  }
  function zo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Zt(e, a, l), e[Gt] = t, e[Ft] = l;
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  var Je = !1, Ht = !1, Xc = !1, Ao = typeof WeakSet == "function" ? WeakSet : Set, Lt = null;
  function yy(t, e) {
    if (t = t.containerInfo, rf = Ju, t = Bs(t), Hi(t)) {
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
            var i = 0, s = -1, h = -1, A = 0, R = 0, U = t, C = null;
            e: for (; ; ) {
              for (var D; U !== l || n !== 0 && U.nodeType !== 3 || (s = i + n), U !== u || a !== 0 && U.nodeType !== 3 || (h = i + a), U.nodeType === 3 && (i += U.nodeValue.length), (D = U.firstChild) !== null; )
                C = U, U = D;
              for (; ; ) {
                if (U === t) break e;
                if (C === l && ++A === n && (s = i), C === u && ++R === a && (h = i), (D = U.nextSibling) !== null) break;
                U = C, C = U.parentNode;
              }
              U = D;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (of = { focusedElem: t, selectionRange: l }, Ju = !1, Lt = e; Lt !== null; )
      if (e = Lt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Lt = t;
      else
        for (; Lt !== null; ) {
          switch (e = Lt, u = e.alternate, t = e.flags, e.tag) {
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
                  hf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hf(t);
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
            t.return = e.return, Lt = t;
            break;
          }
          Lt = e.return;
        }
  }
  function Co(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $e(t, l), a & 4 && dn(5, l);
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
        a & 64 && So(l), a & 512 && mn(l, l.return);
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
            sr(t, e);
          } catch (i) {
            yt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && zo(l);
      case 26:
      case 5:
        $e(t, l), e === null && a & 4 && xo(l), a & 512 && mn(l, l.return);
        break;
      case 12:
        $e(t, l);
        break;
      case 31:
        $e(t, l), a & 4 && Oo(t, l);
        break;
      case 13:
        $e(t, l), a & 4 && Ro(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = zy.bind(
          null,
          l
        ), Vy(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Je, !a) {
          e = e !== null && e.memoizedState !== null || Ht, n = Je;
          var u = Ht;
          Je = a, (Ht = e) && !u ? Fe(
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
  function Do(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Do(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && pi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, It = !1;
  function ke(t, e, l) {
    for (l = l.child; l !== null; )
      _o(t, e, l), l = l.sibling;
  }
  function _o(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(Ba, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ht || Ue(l, e), ke(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ht || Ue(l, e);
        var a = At, n = It;
        xl(l.type) && (At = l.stateNode, It = !1), ke(
          t,
          e,
          l
        ), xn(l.stateNode), At = a, It = n;
        break;
      case 5:
        Ht || Ue(l, e);
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
        At !== null && (It ? (t = At, Sd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Na(t)) : Sd(At, l.stateNode));
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
        Ht || (Ue(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Eo(
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
  function Oo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Na(t);
      } catch (l) {
        yt(e, e.return, l);
      }
    }
  }
  function Ro(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Na(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function vy(t) {
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
  function Du(t, e) {
    var l = vy(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Ay.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (xl(s.type)) {
                At = s.stateNode, It = !1;
                break t;
              }
              break;
            case 5:
              At = s.stateNode, It = !1;
              break t;
            case 3:
            case 4:
              At = s.stateNode.containerInfo, It = !0;
              break t;
          }
          s = s.return;
        }
        if (At === null) throw Error(f(160));
        _o(u, i, n), At = null, It = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Mo(e, t), e = e.sibling;
  }
  var De = null;
  function Mo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(e, t), te(t), a & 4 && (yl(3, t, t.return), dn(3, t), yl(5, t, t.return));
        break;
      case 1:
        Pt(e, t), te(t), a & 512 && (Ht || l === null || Ue(l, l.return)), a & 64 && Je && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = De;
        if (Pt(e, t), te(t), a & 512 && (Ht || l === null || Ue(l, l.return)), a & 4) {
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
                      )), Zt(u, a, l), u[Gt] = t, qt(u), a = u;
                      break t;
                    case "link":
                      var i = Md(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(s, 1);
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
                        for (s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Zt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[Gt] = t, qt(u), a = u;
                }
                t.stateNode = a;
              } else
                Nd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Rd(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Nd(
              n,
              t.type,
              t.stateNode
            ) : Rd(
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
        Pt(e, t), te(t), a & 512 && (Ht || l === null || Ue(l, l.return)), l !== null && a & 4 && Lc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Pt(e, t), te(t), a & 512 && (Ht || l === null || Ue(l, l.return)), t.flags & 32) {
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
        )), a & 1024 && (Xc = !0);
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
        if (Qu = null, n = De, De = Gu(e.containerInfo), Pt(e, t), De = n, te(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Na(e.containerInfo);
          } catch (Q) {
            yt(t, t.return, Q);
          }
        Xc && (Xc = !1, No(t));
        break;
      case 4:
        a = De, De = Gu(
          t.stateNode.containerInfo
        ), Pt(e, t), te(t), De = a;
        break;
      case 12:
        Pt(e, t), te(t);
        break;
      case 31:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Du(t, a)));
        break;
      case 13:
        Pt(e, t), te(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ou = ae()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Du(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, A = Je, R = Ht;
        if (Je = A || n, Ht = R || h, Pt(e, t), Ht = R, Je = A, te(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || h || Je || Ht || Jl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (u = h.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = h.stateNode;
                    var U = h.memoizedProps.style, C = U != null && U.hasOwnProperty("display") ? U.display : null;
                    s.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (Q) {
                  yt(h, h.return, Q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (Q) {
                  yt(h, h.return, Q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var D = h.stateNode;
                  n ? Ed(D, !0) : Ed(h.stateNode, !1);
                } catch (Q) {
                  yt(h, h.return, Q);
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
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Du(t, l))));
        break;
      case 19:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Du(t, a)));
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
            Cu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ea(i, ""), l.flags &= -33);
            var s = Yc(t);
            Cu(t, s, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, A = Yc(t);
            Gc(
              t,
              A,
              h
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
  function No(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        No(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
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
          Ue(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Eo(
            e,
            e.return,
            l
          ), Jl(e);
          break;
        case 27:
          xn(e.stateNode);
        case 26:
        case 5:
          Ue(e, e.return), Jl(e);
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
  function Fe(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Fe(
            n,
            u,
            l
          ), dn(4, u);
          break;
        case 1:
          if (Fe(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (A) {
              yt(a, a.return, A);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  fr(h[n], s);
            } catch (A) {
              yt(a, a.return, A);
            }
          }
          l && i & 64 && So(u), mn(u, u.return);
          break;
        case 27:
          zo(u);
        case 26:
        case 5:
          Fe(
            n,
            u,
            l
          ), l && a === null && i & 4 && xo(u), mn(u, u.return);
          break;
        case 12:
          Fe(
            n,
            u,
            l
          );
          break;
        case 31:
          Fe(
            n,
            u,
            l
          ), l && i & 4 && Oo(n, u);
          break;
        case 13:
          Fe(
            n,
            u,
            l
          ), l && i & 4 && Ro(n, u);
          break;
        case 22:
          u.memoizedState === null && Fe(
            n,
            u,
            l
          ), mn(u, u.return);
          break;
        case 30:
          break;
        default:
          Fe(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Qc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ia(l));
  }
  function Vc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ia(t));
  }
  function _e(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Uo(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Uo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _e(
          t,
          e,
          l,
          a
        ), n & 2048 && dn(9, e);
        break;
      case 1:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        _e(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ia(t)));
        break;
      case 12:
        if (n & 2048) {
          _e(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (h) {
            yt(e, e.return, h);
          }
        } else
          _e(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? _e(
          t,
          e,
          l,
          a
        ) : hn(t, e) : u._visibility & 2 ? _e(
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
        )), n & 2048 && Qc(i, e);
        break;
      case 24:
        _e(
          t,
          e,
          l,
          a
        ), n & 2048 && Vc(e.alternate, e);
        break;
      default:
        _e(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ea(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, s = l, h = a, A = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ea(
            u,
            i,
            s,
            h,
            n
          ), dn(8, i);
          break;
        case 23:
          break;
        case 22:
          var R = i.stateNode;
          i.memoizedState !== null ? R._visibility & 2 ? Ea(
            u,
            i,
            s,
            h,
            n
          ) : hn(
            u,
            i
          ) : (R._visibility |= 2, Ea(
            u,
            i,
            s,
            h,
            n
          )), n && A & 2048 && Qc(
            i.alternate,
            i
          );
          break;
        case 24:
          Ea(
            u,
            i,
            s,
            h,
            n
          ), n && A & 2048 && Vc(i.alternate, i);
          break;
        default:
          Ea(
            u,
            i,
            s,
            h,
            n
          );
      }
      e = e.sibling;
    }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            hn(l, a), n & 2048 && Qc(
              a.alternate,
              a
            );
            break;
          case 24:
            hn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          default:
            hn(l, a);
        }
        e = e.sibling;
      }
  }
  var yn = 8192;
  function xa(t, e, l) {
    if (t.subtreeFlags & yn)
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
        ), t.flags & yn && t.memoizedState !== null && lv(
          l,
          De,
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
        var a = De;
        De = Gu(t.stateNode.containerInfo), xa(
          t,
          e,
          l
        ), De = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = yn, yn = 16777216, xa(
          t,
          e,
          l
        ), yn = a) : xa(
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
  function vn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Lt = a, wo(
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
        vn(t), t.flags & 2048 && yl(9, t, t.return);
        break;
      case 3:
        vn(t);
        break;
      case 12:
        vn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, _u(t)) : vn(t);
        break;
      default:
        vn(t);
    }
  }
  function _u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Lt = a, wo(
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
  function wo(t, e) {
    for (; Lt !== null; ) {
      var l = Lt;
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
          Ia(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Lt = a;
      else
        t: for (l = t; Lt !== null; ) {
          a = Lt;
          var n = a.sibling, u = a.return;
          if (Do(a), a === l) {
            Lt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Lt = n;
            break t;
          }
          Lt = u;
        }
    }
  }
  var gy = {
    getCacheForType: function(t) {
      var e = Qt(Nt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Qt(Nt).controller.signal;
    }
  }, py = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, Et = null, at = null, ut = 0, ht = 0, re = null, vl = !1, Ta = !1, Zc = !1, We = 0, Dt = 0, gl = 0, kl = 0, Kc = 0, oe = 0, za = 0, gn = null, ee = null, Jc = !1, Ou = 0, qo = 0, Ru = 1 / 0, Mu = null, pl = null, Bt = 0, bl = null, Aa = null, Ie = 0, kc = 0, $c = null, Lo = null, pn = 0, Fc = null;
  function de() {
    return (rt & 2) !== 0 && ut !== 0 ? ut & -ut : M.T !== null ? lf() : ts();
  }
  function Yo() {
    if (oe === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Ln;
        Ln <<= 1, (Ln & 3932160) === 0 && (Ln = 262144), oe = t;
      } else oe = 536870912;
    return t = fe.current, t !== null && (t.flags |= 32), oe;
  }
  function le(t, e, l) {
    (t === Et && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0), Sl(
      t,
      ut,
      oe,
      !1
    )), qa(t, l), ((rt & 2) === 0 || t !== Et) && (t === Et && ((rt & 2) === 0 && (kl |= l), Dt === 4 && Sl(
      t,
      ut,
      oe,
      !1
    )), je(t));
  }
  function Go(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || wa(t, e), n = a ? Ey(t, e) : Ic(t, e, !0), u = a;
    do {
      if (n === 0) {
        Ta && !a && Sl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !by(l)) {
          n = Ic(t, e, !1), u = !1;
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
              var s = t;
              n = gn;
              var h = s.current.memoizedState.isDehydrated;
              if (h && (Ca(s, i).flags |= 256), i = Ic(
                s,
                i,
                !1
              ), i !== 2) {
                if (Zc && !h) {
                  s.errorRecoveryDisabledLanes |= u, kl |= u, n = 4;
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
          Ca(t, 0), Sl(t, e, 0, !0);
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
              Sl(
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
          if ((e & 62914560) === e && (n = Ou + 300 - ae(), 10 < n)) {
            if (Sl(
              a,
              e,
              oe,
              !vl
            ), Gn(a, 0, !0) !== 0) break t;
            Ie = e, a.timeoutHandle = pd(
              Xo.bind(
                null,
                a,
                l,
                ee,
                Mu,
                Jc,
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
            Mu,
            Jc,
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
  function Xo(t, e, l, a, n, u, i, s, h, A, R, U, C, D) {
    if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: we
      }, jo(
        e,
        u,
        U
      );
      var Q = (u & 62914560) === u ? Ou - ae() : (u & 4194048) === u ? qo - ae() : 0;
      if (Q = av(
        U,
        Q
      ), Q !== null) {
        Ie = u, t.cancelPendingCommit = Q(
          Fo.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            i,
            s,
            h,
            R,
            U,
            null,
            C,
            D
          )
        ), Sl(t, u, i, !A);
        return;
      }
    }
    Fo(
      t,
      e,
      u,
      l,
      a,
      n,
      i,
      s,
      h
    );
  }
  function by(t) {
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
  function Sl(t, e, l, a) {
    e &= ~Kc, e &= ~kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ue(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && Wf(t, l, e);
  }
  function Nu() {
    return (rt & 6) === 0 ? (bn(0), !1) : !0;
  }
  function Wc() {
    if (at !== null) {
      if (ht === 0)
        var t = at.return;
      else
        t = at, Ge = Ll = null, mc(t), va = null, tn = 0, t = at;
      for (; t !== null; )
        bo(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Ly(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ie = 0, Wc(), Et = t, at = l = Le(t.current, null), ut = e, ht = 0, re = null, vl = !1, Ta = wa(t, e), Zc = !1, za = oe = Kc = kl = gl = Dt = 0, ee = gn = null, Jc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ue(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return We = e, Pn(), l;
  }
  function Qo(t, e) {
    tt = null, M.H = sn, e === ya || e === cu ? (e = nr(), ht = 3) : e === ec ? (e = nr(), ht = 4) : ht = e === Oc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, re = e, at === null && (Dt = 1, Eu(
      t,
      ge(e, t.current)
    ));
  }
  function Vo() {
    var t = fe.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Ee === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Ee : !1;
  }
  function Zo() {
    var t = M.H;
    return M.H = sn, t === null ? sn : t;
  }
  function Ko() {
    var t = M.A;
    return M.A = gy, t;
  }
  function Uu() {
    Dt = 4, vl || (ut & 4194048) !== ut && fe.current !== null || (Ta = !0), (gl & 134217727) === 0 && (kl & 134217727) === 0 || Et === null || Sl(
      Et,
      ut,
      oe,
      !1
    );
  }
  function Ic(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = Zo(), u = Ko();
    (Et !== t || ut !== e) && (Mu = null, Ca(t, e)), e = !1;
    var i = Dt;
    t: do
      try {
        if (ht !== 0 && at !== null) {
          var s = at, h = re;
          switch (ht) {
            case 8:
              Wc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var A = ht;
              if (ht = 0, re = null, Da(t, s, h, A), l && Ta) {
                i = 0;
                break t;
              }
              break;
            default:
              A = ht, ht = 0, re = null, Da(t, s, h, A);
          }
        }
        Sy(), i = Dt;
        break;
      } catch (R) {
        Qo(t, R);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ge = Ll = null, rt = a, M.H = n, M.A = u, at === null && (Et = null, ut = 0, Pn()), i;
  }
  function Sy() {
    for (; at !== null; ) Jo(at);
  }
  function Ey(t, e) {
    var l = rt;
    rt |= 2;
    var a = Zo(), n = Ko();
    Et !== t || ut !== e ? (Mu = null, Ru = ae() + 500, Ca(t, e)) : Ta = wa(
      t,
      e
    );
    t: do
      try {
        if (ht !== 0 && at !== null) {
          e = at;
          var u = re;
          e: switch (ht) {
            case 1:
              ht = 0, re = null, Da(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (lr(u)) {
                ht = 0, re = null, ko(e);
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
              lr(u) ? (ht = 0, re = null, ko(e)) : (ht = 0, re = null, Da(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var s = at;
                  if (i ? Ud(i) : s.stateNode.complete) {
                    ht = 0, re = null;
                    var h = s.sibling;
                    if (h !== null) at = h;
                    else {
                      var A = s.return;
                      A !== null ? (at = A, ju(A)) : at = null;
                    }
                    break e;
                  }
              }
              ht = 0, re = null, Da(t, e, u, 5);
              break;
            case 6:
              ht = 0, re = null, Da(t, e, u, 6);
              break;
            case 8:
              Wc(), Dt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        xy();
        break;
      } catch (R) {
        Qo(t, R);
      }
    while (!0);
    return Ge = Ll = null, M.H = a, M.A = n, rt = l, at !== null ? 0 : (Et = null, ut = 0, Pn(), Dt);
  }
  function xy() {
    for (; at !== null && !Zm(); )
      Jo(at);
  }
  function Jo(t) {
    var e = go(t.alternate, t, We);
    t.memoizedProps = t.pendingProps, e === null ? ju(t) : at = e;
  }
  function ko(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ro(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ut
        );
        break;
      case 11:
        e = ro(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ut
        );
        break;
      case 5:
        mc(e);
      default:
        bo(l, e), e = at = Zs(e, We), e = go(l, e, We);
    }
    t.memoizedProps = t.pendingProps, e === null ? ju(t) : at = e;
  }
  function Da(t, e, l, a) {
    Ge = Ll = null, mc(e), va = null, tn = 0;
    var n = e.return;
    try {
      if (ry(
        t,
        n,
        e,
        l,
        ut
      )) {
        Dt = 1, Eu(
          t,
          ge(l, t.current)
        ), at = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw at = n, u;
      Dt = 1, Eu(
        t,
        ge(l, t.current)
      ), at = null;
      return;
    }
    e.flags & 32768 ? (ct || a === 1 ? t = !0 : Ta || (ut & 536870912) !== 0 ? t = !1 : (vl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), $o(e, t)) : ju(e);
  }
  function ju(t) {
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
      var l = my(
        e.alternate,
        e,
        We
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
    Dt === 0 && (Dt = 5);
  }
  function $o(t, e) {
    do {
      var l = hy(t.alternate, t);
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
    Dt = 6, at = null;
  }
  function Fo(t, e, l, a, n, u, i, s, h) {
    t.cancelPendingCommit = null;
    do
      Hu();
    while (Bt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= Yi, eh(
        t,
        l,
        u,
        i,
        s,
        h
      ), t === Et && (at = Et = null, ut = 0), Aa = e, bl = t, Ie = l, kc = u, $c = n, Lo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Cy(wn, function() {
        return ed(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null, n = Y.p, Y.p = 2, i = rt, rt |= 4;
        try {
          yy(t, e, l);
        } finally {
          rt = i, Y.p = n, M.T = a;
        }
      }
      Bt = 1, Wo(), Io(), Po();
    }
  }
  function Wo() {
    if (Bt === 1) {
      Bt = 0;
      var t = bl, e = Aa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Mo(e, t);
          var u = of, i = Bs(t.containerInfo), s = u.focusedElem, h = u.selectionRange;
          if (i !== s && s && s.ownerDocument && Hs(
            s.ownerDocument.documentElement,
            s
          )) {
            if (h !== null && Hi(s)) {
              var A = h.start, R = h.end;
              if (R === void 0 && (R = A), "selectionStart" in s)
                s.selectionStart = A, s.selectionEnd = Math.min(
                  R,
                  s.value.length
                );
              else {
                var U = s.ownerDocument || document, C = U && U.defaultView || window;
                if (C.getSelection) {
                  var D = C.getSelection(), Q = s.textContent.length, $ = Math.min(h.start, Q), bt = h.end === void 0 ? $ : Math.min(h.end, Q);
                  !D.extend && $ > bt && (i = bt, bt = $, $ = i);
                  var S = js(
                    s,
                    $
                  ), g = js(
                    s,
                    bt
                  );
                  if (S && g && (D.rangeCount !== 1 || D.anchorNode !== S.node || D.anchorOffset !== S.offset || D.focusNode !== g.node || D.focusOffset !== g.offset)) {
                    var T = U.createRange();
                    T.setStart(S.node, S.offset), D.removeAllRanges(), $ > bt ? (D.addRange(T), D.extend(g.node, g.offset)) : (T.setEnd(g.node, g.offset), D.addRange(T));
                  }
                }
              }
            }
            for (U = [], D = s; D = D.parentNode; )
              D.nodeType === 1 && U.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < U.length; s++) {
              var N = U[s];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Ju = !!rf, of = rf = null;
        } finally {
          rt = n, Y.p = a, M.T = l;
        }
      }
      t.current = e, Bt = 2;
    }
  }
  function Io() {
    if (Bt === 2) {
      Bt = 0;
      var t = bl, e = Aa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Co(t, e.alternate, e);
        } finally {
          rt = n, Y.p = a, M.T = l;
        }
      }
      Bt = 3;
    }
  }
  function Po() {
    if (Bt === 4 || Bt === 3) {
      Bt = 0, Km();
      var t = bl, e = Aa, l = Ie, a = Lo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Bt = 5 : (Bt = 0, Aa = bl = null, td(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (pl = null), vi(l), e = e.stateNode, ne && typeof ne.onCommitFiberRoot == "function")
        try {
          ne.onCommitFiberRoot(
            Ba,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = M.T, n = Y.p, Y.p = 2, M.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          M.T = e, Y.p = n;
        }
      }
      (Ie & 3) !== 0 && Hu(), je(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Fc ? pn++ : (pn = 0, Fc = t) : pn = 0, bn(0);
    }
  }
  function td(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ia(e)));
  }
  function Hu() {
    return Wo(), Io(), Po(), ed();
  }
  function ed() {
    if (Bt !== 5) return !1;
    var t = bl, e = kc;
    kc = 0;
    var l = vi(Ie), a = M.T, n = Y.p;
    try {
      Y.p = 32 > l ? 32 : l, M.T = null, l = $c, $c = null;
      var u = bl, i = Ie;
      if (Bt = 0, Aa = bl = null, Ie = 0, (rt & 6) !== 0) throw Error(f(331));
      var s = rt;
      if (rt |= 4, Bo(u.current), Uo(
        u,
        u.current,
        i,
        l
      ), rt = s, bn(0, !1), ne && typeof ne.onPostCommitFiberRoot == "function")
        try {
          ne.onPostCommitFiberRoot(Ba, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = n, M.T = a, td(t, e);
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
  function Pc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new py();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Zc = !0, n.add(l), t = Ty.bind(null, t, e, l), e.then(t, t));
  }
  function Ty(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Et === t && (ut & l) === l && (Dt === 4 || Dt === 3 && (ut & 62914560) === ut && 300 > ae() - Ou ? (rt & 2) === 0 && Ca(t, 0) : Kc |= l, za === ut && (za = 0)), je(t);
  }
  function ad(t, e) {
    e === 0 && (e = Ff()), t = Bl(t, e), t !== null && (qa(t, e), je(t));
  }
  function zy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ad(t, l);
  }
  function Ay(t, e) {
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
  function Cy(t, e) {
    return di(t, e);
  }
  var Bu = null, _a = null, tf = !1, wu = !1, ef = !1, El = 0;
  function je(t) {
    t !== _a && t.next === null && (_a === null ? Bu = _a = t : _a = _a.next = t), wu = !0, tf || (tf = !0, _y());
  }
  function bn(t, e) {
    if (!ef && wu) {
      ef = !0;
      do
        for (var l = !1, a = Bu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ue(42 | t) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, cd(a, u));
          } else
            u = ut, u = Gn(
              a,
              a === Et ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || wa(a, u) || (l = !0, cd(a, u));
          a = a.next;
        }
      while (l);
      ef = !1;
    }
  }
  function Dy() {
    nd();
  }
  function nd() {
    wu = tf = !1;
    var t = 0;
    El !== 0 && qy() && (t = El);
    for (var e = ae(), l = null, a = Bu; a !== null; ) {
      var n = a.next, u = ud(a, e);
      u === 0 ? (a.next = null, l === null ? Bu = n : l.next = n, n === null && (_a = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (wu = !0)), a = n;
    }
    Bt !== 0 && Bt !== 5 || bn(t), El !== 0 && (El = 0);
  }
  function ud(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ue(u), s = 1 << i, h = n[i];
      h === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = th(s, e)) : h <= e && (t.expiredLanes |= s), u &= ~s;
    }
    if (e = Et, l = ut, l = Gn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && mi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || wa(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && mi(a), vi(l)) {
        case 2:
        case 8:
          l = kf;
          break;
        case 32:
          l = wn;
          break;
        case 268435456:
          l = $f;
          break;
        default:
          l = wn;
      }
      return a = id.bind(null, t), l = di(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && mi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function id(t, e) {
    if (Bt !== 0 && Bt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Hu() && t.callbackNode !== l)
      return null;
    var a = ut;
    return a = Gn(
      t,
      t === Et ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Go(t, a, e), ud(t, ae()), t.callbackNode != null && t.callbackNode === l ? id.bind(null, t) : null);
  }
  function cd(t, e) {
    if (Hu()) return null;
    Go(t, e, !0);
  }
  function _y() {
    Yy(function() {
      (rt & 6) !== 0 ? di(
        Jf,
        Dy
      ) : nd();
    });
  }
  function lf() {
    if (El === 0) {
      var t = ma;
      t === 0 && (t = qn, qn <<= 1, (qn & 261888) === 0 && (qn = 256)), El = t;
    }
    return El;
  }
  function fd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zn("" + t);
  }
  function sd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Oy(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = fd(
        (n[Ft] || null).action
      ), i = a.submitter;
      i && (e = (e = i[Ft] || null) ? fd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var s = new $n(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (El !== 0) {
                  var h = i ? sd(n, i) : new FormData(n);
                  xc(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: n.method,
                      action: u
                    },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), h = i ? sd(n, i) : new FormData(n), xc(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: n.method,
                    action: u
                  },
                  u,
                  h
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var af = 0; af < Li.length; af++) {
    var nf = Li[af], Ry = nf.toLowerCase(), My = nf[0].toUpperCase() + nf.slice(1);
    Ce(
      Ry,
      "on" + My
    );
  }
  Ce(Ls, "onAnimationEnd"), Ce(Ys, "onAnimationIteration"), Ce(Gs, "onAnimationStart"), Ce("dblclick", "onDoubleClick"), Ce("focusin", "onFocus"), Ce("focusout", "onBlur"), Ce(Jh, "onTransitionRun"), Ce(kh, "onTransitionStart"), Ce($h, "onTransitionCancel"), Ce(Xs, "onTransitionEnd"), Pl("onMouseEnter", ["mouseout", "mouseover"]), Pl("onMouseLeave", ["mouseout", "mouseover"]), Pl("onPointerEnter", ["pointerout", "pointerover"]), Pl("onPointerLeave", ["pointerout", "pointerover"]), Nl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ny = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn)
  );
  function rd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i], h = s.instance, A = s.currentTarget;
            if (s = s.listener, h !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = A;
            try {
              u(n);
            } catch (R) {
              In(R);
            }
            n.currentTarget = null, u = h;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (s = a[i], h = s.instance, A = s.currentTarget, s = s.listener, h !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = A;
            try {
              u(n);
            } catch (R) {
              In(R);
            }
            n.currentTarget = null, u = h;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[gi];
    l === void 0 && (l = e[gi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (od(e, t, 2, !1), l.add(a));
  }
  function uf(t, e, l) {
    var a = 0;
    e && (a |= 4), od(
      l,
      t,
      a,
      e
    );
  }
  var qu = "_reactListening" + Math.random().toString(36).slice(2);
  function cf(t) {
    if (!t[qu]) {
      t[qu] = !0, as.forEach(function(l) {
        l !== "selectionchange" && (Ny.has(l) || uf(l, !1, t), uf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qu] || (e[qu] = !0, uf("selectionchange", !1, e));
    }
  }
  function od(t, e, l, a) {
    switch (Yd(e)) {
      case 2:
        var n = iv;
        break;
      case 8:
        n = cv;
        break;
      default:
        n = xf;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Ci || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function ff(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = Fl(s), i === null) return;
            if (h = i.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ys(function() {
      var A = u, R = zi(l), U = [];
      t: {
        var C = Qs.get(t);
        if (C !== void 0) {
          var D = $n, Q = t;
          switch (t) {
            case "keypress":
              if (Jn(l) === 0) break t;
            case "keydown":
            case "keyup":
              D = Ah;
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
              D = ps;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = mh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = _h;
              break;
            case Ls:
            case Ys:
            case Gs:
              D = vh;
              break;
            case Xs:
              D = Rh;
              break;
            case "scroll":
            case "scrollend":
              D = oh;
              break;
            case "wheel":
              D = Nh;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = ph;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Ss;
              break;
            case "toggle":
            case "beforetoggle":
              D = jh;
          }
          var $ = (e & 4) !== 0, bt = !$ && (t === "scroll" || t === "scrollend"), S = $ ? C !== null ? C + "Capture" : null : C;
          $ = [];
          for (var g = A, T; g !== null; ) {
            var N = g;
            if (T = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || T === null || S === null || (N = Ga(g, S), N != null && $.push(
              En(g, N, T)
            )), bt) break;
            g = g.return;
          }
          0 < $.length && (C = new D(
            C,
            Q,
            null,
            l,
            R
          ), U.push({ event: C, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (C = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", C && l !== Ti && (Q = l.relatedTarget || l.fromElement) && (Fl(Q) || Q[$l]))
            break t;
          if ((D || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, D ? (Q = l.relatedTarget || l.toElement, D = A, Q = Q ? Fl(Q) : null, Q !== null && (bt = m(Q), $ = Q.tag, Q !== bt || $ !== 5 && $ !== 27 && $ !== 6) && (Q = null)) : (D = null, Q = A), D !== Q)) {
            if ($ = ps, N = "onMouseLeave", S = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && ($ = Ss, N = "onPointerLeave", S = "onPointerEnter", g = "pointer"), bt = D == null ? C : Ya(D), T = Q == null ? C : Ya(Q), C = new $(
              N,
              g + "leave",
              D,
              l,
              R
            ), C.target = bt, C.relatedTarget = T, N = null, Fl(R) === A && ($ = new $(
              S,
              g + "enter",
              Q,
              l,
              R
            ), $.target = T, $.relatedTarget = bt, N = $), bt = N, D && Q)
              e: {
                for ($ = Uy, S = D, g = Q, T = 0, N = S; N; N = $(N))
                  T++;
                N = 0;
                for (var k = g; k; k = $(k))
                  N++;
                for (; 0 < T - N; )
                  S = $(S), T--;
                for (; 0 < N - T; )
                  g = $(g), N--;
                for (; T--; ) {
                  if (S === g || g !== null && S === g.alternate) {
                    $ = S;
                    break e;
                  }
                  S = $(S), g = $(g);
                }
                $ = null;
              }
            else $ = null;
            D !== null && dd(
              U,
              C,
              D,
              $,
              !1
            ), Q !== null && bt !== null && dd(
              U,
              bt,
              Q,
              $,
              !0
            );
          }
        }
        t: {
          if (C = A ? Ya(A) : window, D = C.nodeName && C.nodeName.toLowerCase(), D === "select" || D === "input" && C.type === "file")
            var ft = _s;
          else if (Cs(C))
            if (Os)
              ft = Vh;
            else {
              ft = Xh;
              var K = Gh;
            }
          else
            D = C.nodeName, !D || D.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? A && xi(A.elementType) && (ft = _s) : ft = Qh;
          if (ft && (ft = ft(t, A))) {
            Ds(
              U,
              ft,
              l,
              R
            );
            break t;
          }
          K && K(t, C, A), t === "focusout" && A && C.type === "number" && A.memoizedProps.value != null && Ei(C, "number", C.value);
        }
        switch (K = A ? Ya(A) : window, t) {
          case "focusin":
            (Cs(K) || K.contentEditable === "true") && (ua = K, Bi = A, $a = null);
            break;
          case "focusout":
            $a = Bi = ua = null;
            break;
          case "mousedown":
            wi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wi = !1, ws(U, l, R);
            break;
          case "selectionchange":
            if (Kh) break;
          case "keydown":
          case "keyup":
            ws(U, l, R);
        }
        var et;
        if (Ni)
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
          na ? zs(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Es && l.locale !== "ko" && (na || it !== "onCompositionStart" ? it === "onCompositionEnd" && na && (et = vs()) : (ul = R, Di = "value" in ul ? ul.value : ul.textContent, na = !0)), K = Lu(A, it), 0 < K.length && (it = new bs(
          it,
          t,
          null,
          l,
          R
        ), U.push({ event: it, listeners: K }), et ? it.data = et : (et = As(l), et !== null && (it.data = et)))), (et = Bh ? wh(t, l) : qh(t, l)) && (it = Lu(A, "onBeforeInput"), 0 < it.length && (K = new bs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), U.push({
          event: K,
          listeners: it
        }), K.data = et)), Oy(
          U,
          t,
          A,
          l,
          R
        );
      }
      rd(U, e);
    });
  }
  function En(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Lu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ga(t, l), n != null && a.unshift(
        En(t, n, u)
      ), n = Ga(t, e), n != null && a.push(
        En(t, n, u)
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
      var s = l, h = s.alternate, A = s.stateNode;
      if (s = s.tag, h !== null && h === a) break;
      s !== 5 && s !== 26 && s !== 27 || A === null || (h = A, n ? (A = Ga(l, u), A != null && i.unshift(
        En(l, A, h)
      )) : n || (A = Ga(l, u), A != null && i.push(
        En(l, A, h)
      ))), l = l.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var jy = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function md(t) {
    return (typeof t == "string" ? t : "" + t).replace(jy, `
`).replace(Hy, "");
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
        Qn(t, "class", a);
        break;
      case "tabIndex":
        Qn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qn(t, l, a);
        break;
      case "style":
        ms(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Qn(t, "data", a);
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
        a = Zn("" + a), t.setAttribute(l, a);
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
        a = Zn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = we);
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
        l = Zn("" + a), t.setAttributeNS(
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
        nt("beforetoggle", t), nt("toggle", t), Xn(t, "popover", a);
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
        Xn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = sh.get(l) || l, Xn(t, l, a));
    }
  }
  function sf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        ms(t, a, u);
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
        a != null && (t.onclick = we);
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
        if (!ns.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Ft] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Xn(t, l, a);
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
        var s = u = i = n = null, h = null, A = null;
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
                  h = R;
                  break;
                case "defaultChecked":
                  A = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  s = R;
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
        ss(
          t,
          u,
          s,
          h,
          A,
          i,
          n,
          !1
        );
        return;
      case "select":
        nt("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n], s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                pt(t, e, n, s, l, null);
            }
        e = u, l = i, t.multiple = !!a, e != null ? ta(t, !!a, e, !1) : l != null && ta(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (s = l[i], s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                pt(t, e, i, s, l, null);
            }
        os(t, a, n, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : pt(t, e, h, a, l, null));
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
        for (A in l)
          if (l.hasOwnProperty(A) && (a = l[A], a != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                pt(t, e, A, a, l, null);
            }
        return;
      default:
        if (xi(e)) {
          for (R in l)
            l.hasOwnProperty(R) && (a = l[R], a !== void 0 && sf(
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
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s], a != null && pt(t, e, s, a, l, null));
  }
  function By(t, e, l, a) {
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
        var n = null, u = null, i = null, s = null, h = null, A = null, R = null;
        for (D in l) {
          var U = l[D];
          if (l.hasOwnProperty(D) && U != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = U;
              default:
                a.hasOwnProperty(D) || pt(t, e, D, null, a, U);
            }
        }
        for (var C in a) {
          var D = a[C];
          if (U = l[C], a.hasOwnProperty(C) && (D != null || U != null))
            switch (C) {
              case "type":
                u = D;
                break;
              case "name":
                n = D;
                break;
              case "checked":
                A = D;
                break;
              case "defaultChecked":
                R = D;
                break;
              case "value":
                i = D;
                break;
              case "defaultValue":
                s = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(f(137, e));
                break;
              default:
                D !== U && pt(
                  t,
                  e,
                  C,
                  D,
                  a,
                  U
                );
            }
        }
        Si(
          t,
          i,
          s,
          h,
          A,
          R,
          u,
          n
        );
        return;
      case "select":
        D = i = s = C = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = h;
              default:
                a.hasOwnProperty(u) || pt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  h
                );
            }
        for (n in a)
          if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null))
            switch (n) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== h && pt(
                  t,
                  e,
                  n,
                  u,
                  a,
                  h
                );
            }
        e = s, l = i, a = D, C != null ? ta(t, !!l, C, !1) : !!a != !!l && (e != null ? ta(t, !!l, e, !0) : ta(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        D = C = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                pt(t, e, s, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                C = n;
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
        rs(t, C, D);
        return;
      case "option":
        for (var Q in l)
          C = l[Q], l.hasOwnProperty(Q) && C != null && !a.hasOwnProperty(Q) && (Q === "selected" ? t.selected = !1 : pt(
            t,
            e,
            Q,
            null,
            a,
            C
          ));
        for (h in a)
          C = a[h], D = l[h], a.hasOwnProperty(h) && C !== D && (C != null || D != null) && (h === "selected" ? t.selected = C && typeof C != "function" && typeof C != "symbol" : pt(
            t,
            e,
            h,
            C,
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
          C = l[$], l.hasOwnProperty($) && C != null && !a.hasOwnProperty($) && pt(t, e, $, null, a, C);
        for (A in a)
          if (C = a[A], D = l[A], a.hasOwnProperty(A) && C !== D && (C != null || D != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(f(137, e));
                break;
              default:
                pt(
                  t,
                  e,
                  A,
                  C,
                  a,
                  D
                );
            }
        return;
      default:
        if (xi(e)) {
          for (var bt in l)
            C = l[bt], l.hasOwnProperty(bt) && C !== void 0 && !a.hasOwnProperty(bt) && sf(
              t,
              e,
              bt,
              void 0,
              a,
              C
            );
          for (R in a)
            C = a[R], D = l[R], !a.hasOwnProperty(R) || C === D || C === void 0 && D === void 0 || sf(
              t,
              e,
              R,
              C,
              a,
              D
            );
          return;
        }
    }
    for (var S in l)
      C = l[S], l.hasOwnProperty(S) && C != null && !a.hasOwnProperty(S) && pt(t, e, S, null, a, C);
    for (U in a)
      C = a[U], D = l[U], !a.hasOwnProperty(U) || C === D || C == null && D == null || pt(t, e, U, C, a, D);
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
  function wy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, s = n.duration;
        if (u && s && yd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], A = h.startTime;
            if (A > s) break;
            var R = h.transferSize, U = h.initiatorType;
            R && yd(U) && (h = h.responseEnd, i += R * (h < s ? 1 : (s - A) / (h - A)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var rf = null, of = null;
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
  function df(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var mf = null;
  function qy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === mf ? !1 : (mf = t, !0) : (mf = null, !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, Yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(t) {
    return bd.resolve(null).then(t).catch(Gy);
  } : pd;
  function Gy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function xl(t) {
    return t === "head";
  }
  function Sd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Na(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          xn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, xn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[La] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && xn(t.ownerDocument.body);
      l = n;
    } while (l);
    Na(e);
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
  function hf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hf(l), pi(l);
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
  function Xy(t, e, l, a) {
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
  function Qy(t, e, l) {
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
  function yf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function vf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Vy(t, e) {
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
  var gf = null;
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
  function xn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    pi(t);
  }
  var Te = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Set();
  function Gu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pe = Y.d;
  Y.d = {
    f: Zy,
    r: Ky,
    D: Jy,
    C: ky,
    L: $y,
    m: Fy,
    X: Iy,
    S: Wy,
    M: Py
  };
  function Zy() {
    var t = Pe.f(), e = Nu();
    return t || e;
  }
  function Ky(t) {
    var e = Wl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Xr(e) : Pe.r(t);
  }
  var Oa = typeof document > "u" ? null : document;
  function Dd(t, e, l) {
    var a = Oa;
    if (a && typeof e == "string" && e) {
      var n = ye(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Cd.has(n) || (Cd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Zt(e, "link", t), qt(e), a.head.appendChild(e)));
    }
  }
  function Jy(t) {
    Pe.D(t), Dd("dns-prefetch", t, null);
  }
  function ky(t, e) {
    Pe.C(t, e), Dd("preconnect", t, e);
  }
  function $y(t, e, l) {
    Pe.L(t, e, l);
    var a = Oa;
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
          u = Ra(t);
          break;
        case "script":
          u = Ma(t);
      }
      Te.has(u) || (t = x(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Te.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Tn(u)) || e === "script" && a.querySelector(zn(u)) || (e = a.createElement("link"), Zt(e, "link", t), qt(e), a.head.appendChild(e)));
    }
  }
  function Fy(t, e) {
    Pe.m(t, e);
    var l = Oa;
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
      if (!Te.has(u) && (t = x({ rel: "modulepreload", href: t }, e), Te.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(zn(u)))
              return;
        }
        a = l.createElement("link"), Zt(a, "link", t), qt(a), l.head.appendChild(a);
      }
    }
  }
  function Wy(t, e, l) {
    Pe.S(t, e, l);
    var a = Oa;
    if (a && t) {
      var n = Il(a).hoistableStyles, u = Ra(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if (i = a.querySelector(
          Tn(u)
        ))
          s.loading = 5;
        else {
          t = x(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Te.get(u)) && pf(t, l);
          var h = i = a.createElement("link");
          qt(h), Zt(h, "link", t), h._p = new Promise(function(A, R) {
            h.onload = A, h.onerror = R;
          }), h.addEventListener("load", function() {
            s.loading |= 1;
          }), h.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Xu(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: s
        }, n.set(u, i);
      }
    }
  }
  function Iy(t, e) {
    Pe.X(t, e);
    var l = Oa;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ma(t), u = a.get(n);
      u || (u = l.querySelector(zn(n)), u || (t = x({ src: t, async: !0 }, e), (e = Te.get(n)) && bf(t, e), u = l.createElement("script"), qt(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Py(t, e) {
    Pe.M(t, e);
    var l = Oa;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ma(t), u = a.get(n);
      u || (u = l.querySelector(zn(n)), u || (t = x({ src: t, async: !0, type: "module" }, e), (e = Te.get(n)) && bf(t, e), u = l.createElement("script"), qt(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function _d(t, e, l, a) {
    var n = (n = lt.current) ? Gu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ra(l.href), l = Il(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ra(l.href);
          var u = Il(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            Tn(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Te.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Te.set(t, l), u || tv(
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
  function Ra(t) {
    return 'href="' + ye(t) + '"';
  }
  function Tn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Od(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function tv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zt(e, "link", l), qt(e), t.head.appendChild(e));
  }
  function Ma(t) {
    return '[src="' + ye(t) + '"]';
  }
  function zn(t) {
    return "script[async]" + t;
  }
  function Rd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ye(l.href) + '"]'
          );
          if (a)
            return e.instance = a, qt(a), a;
          var n = x({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), qt(a), Zt(a, "style", n), Xu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ra(l.href);
          var u = t.querySelector(
            Tn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, qt(u), u;
          a = Od(l), (n = Te.get(n)) && pf(a, n), u = (t.ownerDocument || t).createElement("link"), qt(u);
          var i = u;
          return i._p = new Promise(function(s, h) {
            i.onload = s, i.onerror = h;
          }), Zt(u, "link", a), e.state.loading |= 4, Xu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ma(l.src), (n = t.querySelector(
            zn(u)
          )) ? (e.instance = n, qt(n), n) : (a = l, (n = Te.get(u)) && (a = x({}, l), bf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), qt(n), Zt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Xu(a, l.precedence, t));
    return e.instance;
  }
  function Xu(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function pf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function bf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Qu = null;
  function Md(t, e, l) {
    if (Qu === null) {
      var a = /* @__PURE__ */ new Map(), n = Qu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Qu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[La] || u[Gt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Nd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function ev(t, e, l) {
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
  function Ud(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function lv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Ra(a.href), u = e.querySelector(
          Tn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, qt(u);
          return;
        }
        u = e.ownerDocument || e, a = Od(a), (n = Te.get(n)) && pf(a, n), u = u.createElement("link"), qt(u);
        var i = u;
        i._p = new Promise(function(s, h) {
          i.onload = s, i.onerror = h;
        }), Zt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Vu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Sf = 0;
  function av(t, e) {
    return t.stylesheets && t.count === 0 && Ku(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Ku(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Sf === 0 && (Sf = 62500 * wy());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ku(t, t.stylesheets), t.unsuspend)) {
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
  function Vu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Zu = null;
  function Ku(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Zu = /* @__PURE__ */ new Map(), e.forEach(nv, t), Zu = null, Vu.call(t));
  }
  function nv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Zu.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Zu.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Vu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var An = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function uv(t, e, l, a, n, u, i, s, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hi(0), this.hiddenUpdates = hi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jd(t, e, l, a, n, u, i, s, h, A, R, U) {
    return t = new uv(
      t,
      e,
      l,
      i,
      h,
      A,
      R,
      U,
      s
    ), e = 1, u === !0 && (e |= 24), u = ce(3, null, null, e), t.current = u, u.stateNode = t, e = Ii(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, lc(u), t;
  }
  function Hd(t) {
    return t ? (t = fa, t) : fa;
  }
  function Bd(t, e, l, a, n, u) {
    n = Hd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ol(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = dl(t, a, e), l !== null && (le(l, t, e), ln(l, t, e));
  }
  function wd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ef(t, e) {
    wd(t, e), (t = t.alternate) && wd(t, e);
  }
  function qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Bl(t, 67108864);
      e !== null && le(e, t, 67108864), Ef(t, 67108864);
    }
  }
  function Ld(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = de();
      e = yi(e);
      var l = Bl(t, e);
      l !== null && le(l, t, e), Ef(t, e);
    }
  }
  var Ju = !0;
  function iv(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 2, xf(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function cv(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 8, xf(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function xf(t, e, l, a) {
    if (Ju) {
      var n = Tf(a);
      if (n === null)
        ff(
          t,
          e,
          a,
          ku,
          l
        ), Gd(t, a);
      else if (sv(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Gd(t, a), e & 4 && -1 < fv.indexOf(t)) {
        for (; n !== null; ) {
          var u = Wl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ml(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var h = 1 << 31 - ue(i);
                      s.entanglements[1] |= h, i &= ~h;
                    }
                    je(u), (rt & 6) === 0 && (Ru = ae() + 500, bn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Bl(u, 2), s !== null && le(s, u, 2), Nu(), Ef(u, 2);
            }
          if (u = Tf(a), u === null && ff(
            t,
            e,
            a,
            ku,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        ff(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function Tf(t) {
    return t = zi(t), zf(t);
  }
  var ku = null;
  function zf(t) {
    if (ku = null, t = Fl(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = b(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = E(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ku = t, null;
  }
  function Yd(t) {
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
        switch (Jm()) {
          case Jf:
            return 2;
          case kf:
            return 8;
          case wn:
          case km:
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
  var Af = !1, Tl = null, zl = null, Al = null, Cn = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Cl = [], fv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Cn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(e.pointerId);
    }
  }
  function _n(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Wl(e), e !== null && qd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function sv(t, e, l, a, n) {
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
        return Cn.set(
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
      case "gotpointercapture":
        return u = n.pointerId, Dn.set(
          u,
          _n(
            Dn.get(u) || null,
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
    var e = Fl(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = b(l), e !== null) {
            t.blockedOn = e, es(t.priority, function() {
              Ld(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = E(l), e !== null) {
            t.blockedOn = e, es(t.priority, function() {
              Ld(l);
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
  function $u(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Tf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Ti = a, l.target.dispatchEvent(a), Ti = null;
      } else
        return e = Wl(l), e !== null && qd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Qd(t, e, l) {
    $u(t) && l.delete(e);
  }
  function rv() {
    Af = !1, Tl !== null && $u(Tl) && (Tl = null), zl !== null && $u(zl) && (zl = null), Al !== null && $u(Al) && (Al = null), Cn.forEach(Qd), Dn.forEach(Qd);
  }
  function Fu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Af || (Af = !0, c.unstable_scheduleCallback(
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
            if (zf(a || l) === null)
              continue;
            break;
          }
          var u = Wl(l);
          u !== null && (t.splice(e, 3), e -= 3, xc(
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
  function Na(t) {
    function e(h) {
      return Fu(h, t);
    }
    Tl !== null && Fu(Tl, t), zl !== null && Fu(zl, t), Al !== null && Fu(Al, t), Cn.forEach(e), Dn.forEach(e);
    for (var l = 0; l < Cl.length; l++) {
      var a = Cl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Cl.length && (l = Cl[0], l.blockedOn === null); )
      Xd(l), l.blockedOn === null && Cl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[Ft] || null;
        if (typeof u == "function")
          i || Vd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ft] || null)
              s = i.formAction;
            else if (zf(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), Vd(l);
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
  function Cf(t) {
    this._internalRoot = t;
  }
  Iu.prototype.render = Cf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = de();
    Bd(l, a, t, e, null, null);
  }, Iu.prototype.unmount = Cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Bd(t.current, 2, null, t, null, null), Nu(), e[$l] = null;
    }
  };
  function Iu(t) {
    this._internalRoot = t;
  }
  Iu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ts();
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
  Y.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = v(e), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var ov = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pu.isDisabled && Pu.supportsFiber)
      try {
        Ba = Pu.inject(
          ov
        ), ne = Pu;
      } catch {
      }
  }
  return Rn.createRoot = function(t, e) {
    if (!d(t)) throw Error(f(299));
    var l = !1, a = "", n = Ir, u = Pr, i = to;
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
    ), t[$l] = e.current, cf(t), new Cf(e);
  }, Rn.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(f(299));
    var a = !1, n = "", u = Ir, i = Pr, s = to, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = jd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      h,
      u,
      i,
      s,
      Zd
    ), e.context = Hd(null), l = e.current, a = de(), a = yi(a), n = ol(a), n.callback = null, dl(l, n, a), l = a, e.current.lanes = l, qa(e, l), je(e), t[$l] = e.current, cf(t), new Iu(e);
  }, Rn.version = "19.2.4", Rn;
}
var lm;
function Sv() {
  if (lm) return Of.exports;
  lm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Of.exports = bv(), Of.exports;
}
var Ev = Sv();
var am = "popstate";
function xv(c = {}) {
  function o(f, d) {
    let { pathname: m, search: b, hash: E } = f.location;
    return Bf(
      "",
      { pathname: m, search: b, hash: E },
      // state defaults to `null` because `window.history.state` does
      d.state && d.state.usr || null,
      d.state && d.state.key || "default"
    );
  }
  function r(f, d) {
    return typeof d == "string" ? d : Nn(d);
  }
  return zv(
    o,
    r,
    null,
    c
  );
}
function wt(c, o) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(o);
}
function Oe(c, o) {
  if (!c) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function Tv() {
  return Math.random().toString(36).substring(2, 10);
}
function nm(c, o) {
  return {
    usr: c.state,
    key: c.key,
    idx: o
  };
}
function Bf(c, o, r = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? Un(o) : o,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || f || Tv()
  };
}
function Nn({
  pathname: c = "/",
  search: o = "",
  hash: r = ""
}) {
  return o && o !== "?" && (c += o.charAt(0) === "?" ? o : "?" + o), r && r !== "#" && (c += r.charAt(0) === "#" ? r : "#" + r), c;
}
function Un(c) {
  let o = {};
  if (c) {
    let r = c.indexOf("#");
    r >= 0 && (o.hash = c.substring(r), c = c.substring(0, r));
    let f = c.indexOf("?");
    f >= 0 && (o.search = c.substring(f), c = c.substring(0, f)), c && (o.pathname = c);
  }
  return o;
}
function zv(c, o, r, f = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = f, b = d.history, E = "POP", y = null, v = _();
  v == null && (v = 0, b.replaceState({ ...b.state, idx: v }, ""));
  function _() {
    return (b.state || { idx: null }).idx;
  }
  function x() {
    E = "POP";
    let w = _(), L = w == null ? null : w - v;
    v = w, y && y({ action: E, location: V.location, delta: L });
  }
  function H(w, L) {
    E = "PUSH";
    let q = Bf(V.location, w, L);
    v = _() + 1;
    let J = nm(q, v), ot = V.createHref(q);
    try {
      b.pushState(J, "", ot);
    } catch (mt) {
      if (mt instanceof DOMException && mt.name === "DataCloneError")
        throw mt;
      d.location.assign(ot);
    }
    m && y && y({ action: E, location: V.location, delta: 1 });
  }
  function B(w, L) {
    E = "REPLACE";
    let q = Bf(V.location, w, L);
    v = _();
    let J = nm(q, v), ot = V.createHref(q);
    b.replaceState(J, "", ot), m && y && y({ action: E, location: V.location, delta: 0 });
  }
  function G(w) {
    return Av(w);
  }
  let V = {
    get action() {
      return E;
    },
    get location() {
      return c(d, b);
    },
    listen(w) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(am, x), y = w, () => {
        d.removeEventListener(am, x), y = null;
      };
    },
    createHref(w) {
      return o(d, w);
    },
    createURL: G,
    encodeLocation(w) {
      let L = G(w);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: H,
    replace: B,
    go(w) {
      return b.go(w);
    }
  };
  return V;
}
function Av(c, o = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), wt(r, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Nn(c);
  return f = f.replace(/ $/, "%20"), !o && f.startsWith("//") && (f = r + f), new URL(f, r);
}
function om(c, o, r = "/") {
  return Cv(c, o, r, !1);
}
function Cv(c, o, r, f) {
  let d = typeof o == "string" ? Un(o) : o, m = el(d.pathname || "/", r);
  if (m == null)
    return null;
  let b = dm(c);
  Dv(b);
  let E = null;
  for (let y = 0; E == null && y < b.length; ++y) {
    let v = qv(m);
    E = Bv(
      b[y],
      v,
      f
    );
  }
  return E;
}
function dm(c, o = [], r = [], f = "", d = !1) {
  let m = (b, E, y = d, v) => {
    let _ = {
      relativePath: v === void 0 ? b.path || "" : v,
      caseSensitive: b.caseSensitive === !0,
      childrenIndex: E,
      route: b
    };
    if (_.relativePath.startsWith("/")) {
      if (!_.relativePath.startsWith(f) && y)
        return;
      wt(
        _.relativePath.startsWith(f),
        `Absolute route path "${_.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), _.relativePath = _.relativePath.slice(f.length);
    }
    let x = tl([f, _.relativePath]), H = r.concat(_);
    b.children && b.children.length > 0 && (wt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      b.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), dm(
      b.children,
      o,
      H,
      x,
      y
    )), !(b.path == null && !b.index) && o.push({
      path: x,
      score: jv(x, b.index),
      routesMeta: H
    });
  };
  return c.forEach((b, E) => {
    if (b.path === "" || !b.path?.includes("?"))
      m(b, E);
    else
      for (let y of mm(b.path))
        m(b, E, !0, y);
  }), o;
}
function mm(c) {
  let o = c.split("/");
  if (o.length === 0) return [];
  let [r, ...f] = o, d = r.endsWith("?"), m = r.replace(/\?$/, "");
  if (f.length === 0)
    return d ? [m, ""] : [m];
  let b = mm(f.join("/")), E = [];
  return E.push(
    ...b.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), d && E.push(...b), E.map(
    (y) => c.startsWith("/") && y === "" ? "/" : y
  );
}
function Dv(c) {
  c.sort(
    (o, r) => o.score !== r.score ? r.score - o.score : Hv(
      o.routesMeta.map((f) => f.childrenIndex),
      r.routesMeta.map((f) => f.childrenIndex)
    )
  );
}
var _v = /^:[\w-]+$/, Ov = 3, Rv = 2, Mv = 1, Nv = 10, Uv = -2, um = (c) => c === "*";
function jv(c, o) {
  let r = c.split("/"), f = r.length;
  return r.some(um) && (f += Uv), o && (f += Rv), r.filter((d) => !um(d)).reduce(
    (d, m) => d + (_v.test(m) ? Ov : m === "" ? Mv : Nv),
    f
  );
}
function Hv(c, o) {
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
function Bv(c, o, r = !1) {
  let { routesMeta: f } = c, d = {}, m = "/", b = [];
  for (let E = 0; E < f.length; ++E) {
    let y = f[E], v = E === f.length - 1, _ = m === "/" ? o : o.slice(m.length) || "/", x = ni(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: v },
      _
    ), H = y.route;
    if (!x && v && r && !f[f.length - 1].route.index && (x = ni(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      _
    )), !x)
      return null;
    Object.assign(d, x.params), b.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: tl([m, x.pathname]),
      pathnameBase: Xv(
        tl([m, x.pathnameBase])
      ),
      route: H
    }), x.pathnameBase !== "/" && (m = tl([m, x.pathnameBase]));
  }
  return b;
}
function ni(c, o) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, f] = wv(
    c.path,
    c.caseSensitive,
    c.end
  ), d = o.match(r);
  if (!d) return null;
  let m = d[0], b = m.replace(/(.)\/+$/, "$1"), E = d.slice(1);
  return {
    params: f.reduce(
      (v, { paramName: _, isOptional: x }, H) => {
        if (_ === "*") {
          let G = E[H] || "";
          b = m.slice(0, m.length - G.length).replace(/(.)\/+$/, "$1");
        }
        const B = E[H];
        return x && !B ? v[_] = void 0 : v[_] = (B || "").replace(/%2F/g, "/"), v;
      },
      {}
    ),
    pathname: m,
    pathnameBase: b,
    pattern: c
  };
}
function wv(c, o = !1, r = !0) {
  Oe(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`
  );
  let f = [], d = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (b, E, y) => (f.push({ paramName: E, isOptional: y != null }), y ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return c.endsWith("*") ? (f.push({ paramName: "*" }), d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? d += "\\/*$" : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, o ? void 0 : "i"), f];
}
function qv(c) {
  try {
    return c.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return Oe(
      !1,
      `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), c;
  }
}
function el(c, o) {
  if (o === "/") return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let r = o.endsWith("/") ? o.length - 1 : o.length, f = c.charAt(r);
  return f && f !== "/" ? null : c.slice(r) || "/";
}
var Lv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Yv(c, o = "/") {
  let {
    pathname: r,
    search: f = "",
    hash: d = ""
  } = typeof c == "string" ? Un(c) : c, m;
  return r ? (r = r.replace(/\/\/+/g, "/"), r.startsWith("/") ? m = im(r.substring(1), "/") : m = im(r, o)) : m = o, {
    pathname: m,
    search: Qv(f),
    hash: Vv(d)
  };
}
function im(c, o) {
  let r = o.replace(/\/+$/, "").split("/");
  return c.split("/").forEach((d) => {
    d === ".." ? r.length > 1 && r.pop() : d !== "." && r.push(d);
  }), r.length > 1 ? r.join("/") : "/";
}
function Uf(c, o, r, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Gv(c) {
  return c.filter(
    (o, r) => r === 0 || o.route.path && o.route.path.length > 0
  );
}
function hm(c) {
  let o = Gv(c);
  return o.map(
    (r, f) => f === o.length - 1 ? r.pathname : r.pathnameBase
  );
}
function ym(c, o, r, f = !1) {
  let d;
  typeof c == "string" ? d = Un(c) : (d = { ...c }, wt(
    !d.pathname || !d.pathname.includes("?"),
    Uf("?", "pathname", "search", d)
  ), wt(
    !d.pathname || !d.pathname.includes("#"),
    Uf("#", "pathname", "hash", d)
  ), wt(
    !d.search || !d.search.includes("#"),
    Uf("#", "search", "hash", d)
  ));
  let m = c === "" || d.pathname === "", b = m ? "/" : d.pathname, E;
  if (b == null)
    E = r;
  else {
    let x = o.length - 1;
    if (!f && b.startsWith("..")) {
      let H = b.split("/");
      for (; H[0] === ".."; )
        H.shift(), x -= 1;
      d.pathname = H.join("/");
    }
    E = x >= 0 ? o[x] : "/";
  }
  let y = Yv(d, E), v = b && b !== "/" && b.endsWith("/"), _ = (m || b === ".") && r.endsWith("/");
  return !y.pathname.endsWith("/") && (v || _) && (y.pathname += "/"), y;
}
var tl = (c) => c.join("/").replace(/\/\/+/g, "/"), Xv = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"), Qv = (c) => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c, Vv = (c) => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c, Zv = class {
  constructor(c, o, r, f = !1) {
    this.status = c, this.statusText = o || "", this.internal = f, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function Kv(c) {
  return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
}
function Jv(c) {
  return c.map((o) => o.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var vm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function gm(c, o) {
  let r = c;
  if (typeof r != "string" || !Lv.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let f = r, d = !1;
  if (vm)
    try {
      let m = new URL(window.location.href), b = r.startsWith("//") ? new URL(m.protocol + r) : new URL(r), E = el(b.pathname, o);
      b.origin === m.origin && E != null ? r = E + b.search + b.hash : d = !0;
    } catch {
      Oe(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: f,
    isExternal: d,
    to: r
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var pm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  pm
);
var kv = [
  "GET",
  ...pm
];
new Set(kv);
var Ua = z.createContext(null);
Ua.displayName = "DataRouter";
var ui = z.createContext(null);
ui.displayName = "DataRouterState";
var $v = z.createContext(!1), bm = z.createContext({
  isTransitioning: !1
});
bm.displayName = "ViewTransition";
var Fv = z.createContext(
  /* @__PURE__ */ new Map()
);
Fv.displayName = "Fetchers";
var Wv = z.createContext(null);
Wv.displayName = "Await";
var ze = z.createContext(
  null
);
ze.displayName = "Navigation";
var ii = z.createContext(
  null
);
ii.displayName = "Location";
var ll = z.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ll.displayName = "Route";
var Lf = z.createContext(null);
Lf.displayName = "RouteError";
var Sm = "REACT_ROUTER_ERROR", Iv = "REDIRECT", Pv = "ROUTE_ERROR_RESPONSE";
function t0(c) {
  if (c.startsWith(`${Sm}:${Iv}:{`))
    try {
      let o = JSON.parse(c.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function e0(c) {
  if (c.startsWith(
    `${Sm}:${Pv}:{`
  ))
    try {
      let o = JSON.parse(c.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Zv(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function l0(c, { relative: o } = {}) {
  wt(
    jn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: f } = z.useContext(ze), { hash: d, pathname: m, search: b } = Hn(c, { relative: o }), E = m;
  return r !== "/" && (E = m === "/" ? r : tl([r, m])), f.createHref({ pathname: E, search: b, hash: d });
}
function jn() {
  return z.useContext(ii) != null;
}
function _l() {
  return wt(
    jn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), z.useContext(ii).location;
}
var Em = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xm(c) {
  z.useContext(ze).static || z.useLayoutEffect(c);
}
function Tm() {
  let { isDataRoute: c } = z.useContext(ll);
  return c ? y0() : a0();
}
function a0() {
  wt(
    jn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = z.useContext(Ua), { basename: o, navigator: r } = z.useContext(ze), { matches: f } = z.useContext(ll), { pathname: d } = _l(), m = JSON.stringify(hm(f)), b = z.useRef(!1);
  return xm(() => {
    b.current = !0;
  }), z.useCallback(
    (y, v = {}) => {
      if (Oe(b.current, Em), !b.current) return;
      if (typeof y == "number") {
        r.go(y);
        return;
      }
      let _ = ym(
        y,
        JSON.parse(m),
        d,
        v.relative === "path"
      );
      c == null && o !== "/" && (_.pathname = _.pathname === "/" ? o : tl([o, _.pathname])), (v.replace ? r.replace : r.push)(
        _,
        v.state,
        v
      );
    },
    [
      o,
      r,
      m,
      d,
      c
    ]
  );
}
z.createContext(null);
function Hn(c, { relative: o } = {}) {
  let { matches: r } = z.useContext(ll), { pathname: f } = _l(), d = JSON.stringify(hm(r));
  return z.useMemo(
    () => ym(
      c,
      JSON.parse(d),
      f,
      o === "path"
    ),
    [c, d, f, o]
  );
}
function n0(c, o, r, f, d) {
  wt(
    jn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: m } = z.useContext(ze), { matches: b } = z.useContext(ll), E = b[b.length - 1], y = E ? E.params : {}, v = E ? E.pathname : "/", _ = E ? E.pathnameBase : "/", x = E && E.route;
  {
    let q = x && x.path || "";
    Am(
      v,
      !x || q.endsWith("*") || q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`
    );
  }
  let H = _l(), B;
  B = H;
  let G = B.pathname || "/", V = G;
  if (_ !== "/") {
    let q = _.replace(/^\//, "").split("/");
    V = "/" + G.replace(/^\//, "").split("/").slice(q.length).join("/");
  }
  let w = om(c, { pathname: V });
  return Oe(
    x || w != null,
    `No routes matched location "${B.pathname}${B.search}${B.hash}" `
  ), Oe(
    w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), s0(
    w && w.map(
      (q) => Object.assign({}, q, {
        params: Object.assign({}, y, q.params),
        pathname: tl([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          m.encodeLocation ? m.encodeLocation(
            q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : q.pathname
        ]),
        pathnameBase: q.pathnameBase === "/" ? _ : tl([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          m.encodeLocation ? m.encodeLocation(
            q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : q.pathnameBase
        ])
      })
    ),
    b,
    r,
    f,
    d
  );
}
function u0() {
  let c = h0(), o = Kv(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c), r = c instanceof Error ? c.stack : null, f = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: f }, m = { padding: "2px 4px", backgroundColor: f }, b = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    c
  ), b = /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ z.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ z.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ z.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ z.createElement("h3", { style: { fontStyle: "italic" } }, o), r ? /* @__PURE__ */ z.createElement("pre", { style: d }, r) : null, b);
}
var i0 = /* @__PURE__ */ z.createElement(u0, null), zm = class extends z.Component {
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
      const r = e0(c.digest);
      r && (c = r);
    }
    let o = c !== void 0 ? /* @__PURE__ */ z.createElement(ll.Provider, { value: this.props.routeContext }, /* @__PURE__ */ z.createElement(
      Lf.Provider,
      {
        value: c,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ z.createElement(c0, { error: c }, o) : o;
  }
};
zm.contextType = $v;
var jf = /* @__PURE__ */ new WeakMap();
function c0({
  children: c,
  error: o
}) {
  let { basename: r } = z.useContext(ze);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let f = t0(o.digest);
    if (f) {
      let d = jf.get(o);
      if (d) throw d;
      let m = gm(f.location, r);
      if (vm && !jf.get(o))
        if (m.isExternal || f.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const b = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: f.replace
            })
          );
          throw jf.set(o, b), b;
        }
      return /* @__PURE__ */ z.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${m.absoluteURL || m.to}`
        }
      );
    }
  }
  return c;
}
function f0({ routeContext: c, match: o, children: r }) {
  let f = z.useContext(Ua);
  return f && f.static && f.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ z.createElement(ll.Provider, { value: c }, r);
}
function s0(c, o = [], r = null, f = null, d = null) {
  if (c == null) {
    if (!r)
      return null;
    if (r.errors)
      c = r.matches;
    else if (o.length === 0 && !r.initialized && r.matches.length > 0)
      c = r.matches;
    else
      return null;
  }
  let m = c, b = r?.errors;
  if (b != null) {
    let _ = m.findIndex(
      (x) => x.route.id && b?.[x.route.id] !== void 0
    );
    wt(
      _ >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        b
      ).join(",")}`
    ), m = m.slice(
      0,
      Math.min(m.length, _ + 1)
    );
  }
  let E = !1, y = -1;
  if (r)
    for (let _ = 0; _ < m.length; _++) {
      let x = m[_];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (y = _), x.route.id) {
        let { loaderData: H, errors: B } = r, G = x.route.loader && !H.hasOwnProperty(x.route.id) && (!B || B[x.route.id] === void 0);
        if (x.route.lazy || G) {
          E = !0, y >= 0 ? m = m.slice(0, y + 1) : m = [m[0]];
          break;
        }
      }
    }
  let v = r && f ? (_, x) => {
    f(_, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: Jv(r.matches),
      errorInfo: x
    });
  } : void 0;
  return m.reduceRight(
    (_, x, H) => {
      let B, G = !1, V = null, w = null;
      r && (B = b && x.route.id ? b[x.route.id] : void 0, V = x.route.errorElement || i0, E && (y < 0 && H === 0 ? (Am(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), G = !0, w = null) : y === H && (G = !0, w = x.route.hydrateFallbackElement || null)));
      let L = o.concat(m.slice(0, H + 1)), q = () => {
        let J;
        return B ? J = V : G ? J = w : x.route.Component ? J = /* @__PURE__ */ z.createElement(x.route.Component, null) : x.route.element ? J = x.route.element : J = _, /* @__PURE__ */ z.createElement(
          f0,
          {
            match: x,
            routeContext: {
              outlet: _,
              matches: L,
              isDataRoute: r != null
            },
            children: J
          }
        );
      };
      return r && (x.route.ErrorBoundary || x.route.errorElement || H === 0) ? /* @__PURE__ */ z.createElement(
        zm,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: V,
          error: B,
          children: q(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: v
        }
      ) : q();
    },
    null
  );
}
function Yf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function r0(c) {
  let o = z.useContext(Ua);
  return wt(o, Yf(c)), o;
}
function o0(c) {
  let o = z.useContext(ui);
  return wt(o, Yf(c)), o;
}
function d0(c) {
  let o = z.useContext(ll);
  return wt(o, Yf(c)), o;
}
function Gf(c) {
  let o = d0(c), r = o.matches[o.matches.length - 1];
  return wt(
    r.route.id,
    `${c} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function m0() {
  return Gf(
    "useRouteId"
    /* UseRouteId */
  );
}
function h0() {
  let c = z.useContext(Lf), o = o0(
    "useRouteError"
    /* UseRouteError */
  ), r = Gf(
    "useRouteError"
    /* UseRouteError */
  );
  return c !== void 0 ? c : o.errors?.[r];
}
function y0() {
  let { router: c } = r0(
    "useNavigate"
    /* UseNavigateStable */
  ), o = Gf(
    "useNavigate"
    /* UseNavigateStable */
  ), r = z.useRef(!1);
  return xm(() => {
    r.current = !0;
  }), z.useCallback(
    async (d, m = {}) => {
      Oe(r.current, Em), r.current && (typeof d == "number" ? await c.navigate(d) : await c.navigate(d, { fromRouteId: o, ...m }));
    },
    [c, o]
  );
}
var cm = {};
function Am(c, o, r) {
  !o && !cm[c] && (cm[c] = !0, Oe(!1, r));
}
z.memo(v0);
function v0({
  routes: c,
  future: o,
  state: r,
  onError: f
}) {
  return n0(c, void 0, r, f, o);
}
function g0({
  basename: c = "/",
  children: o = null,
  location: r,
  navigationType: f = "POP",
  navigator: d,
  static: m = !1,
  unstable_useTransitions: b
}) {
  wt(
    !jn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let E = c.replace(/^\/*/, "/"), y = z.useMemo(
    () => ({
      basename: E,
      navigator: d,
      static: m,
      unstable_useTransitions: b,
      future: {}
    }),
    [E, d, m, b]
  );
  typeof r == "string" && (r = Un(r));
  let {
    pathname: v = "/",
    search: _ = "",
    hash: x = "",
    state: H = null,
    key: B = "default"
  } = r, G = z.useMemo(() => {
    let V = el(v, E);
    return V == null ? null : {
      location: {
        pathname: V,
        search: _,
        hash: x,
        state: H,
        key: B
      },
      navigationType: f
    };
  }, [E, v, _, x, H, B, f]);
  return Oe(
    G != null,
    `<Router basename="${E}"> is not able to match the URL "${v}${_}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), G == null ? null : /* @__PURE__ */ z.createElement(ze.Provider, { value: y }, /* @__PURE__ */ z.createElement(ii.Provider, { children: o, value: G }));
}
var li = "get", ai = "application/x-www-form-urlencoded";
function ci(c) {
  return typeof HTMLElement < "u" && c instanceof HTMLElement;
}
function p0(c) {
  return ci(c) && c.tagName.toLowerCase() === "button";
}
function b0(c) {
  return ci(c) && c.tagName.toLowerCase() === "form";
}
function S0(c) {
  return ci(c) && c.tagName.toLowerCase() === "input";
}
function E0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function x0(c, o) {
  return c.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !E0(c);
}
function wf(c = "") {
  return new URLSearchParams(
    typeof c == "string" || Array.isArray(c) || c instanceof URLSearchParams ? c : Object.keys(c).reduce((o, r) => {
      let f = c[r];
      return o.concat(
        Array.isArray(f) ? f.map((d) => [r, d]) : [[r, f]]
      );
    }, [])
  );
}
function T0(c, o) {
  let r = wf(c);
  return o && o.forEach((f, d) => {
    r.has(d) || o.getAll(d).forEach((m) => {
      r.append(d, m);
    });
  }), r;
}
var ti = null;
function z0() {
  if (ti === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ti = !1;
    } catch {
      ti = !0;
    }
  return ti;
}
var A0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Hf(c) {
  return c != null && !A0.has(c) ? (Oe(
    !1,
    `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ai}"`
  ), null) : c;
}
function C0(c, o) {
  let r, f, d, m, b;
  if (b0(c)) {
    let E = c.getAttribute("action");
    f = E ? el(E, o) : null, r = c.getAttribute("method") || li, d = Hf(c.getAttribute("enctype")) || ai, m = new FormData(c);
  } else if (p0(c) || S0(c) && (c.type === "submit" || c.type === "image")) {
    let E = c.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = c.getAttribute("formaction") || E.getAttribute("action");
    if (f = y ? el(y, o) : null, r = c.getAttribute("formmethod") || E.getAttribute("method") || li, d = Hf(c.getAttribute("formenctype")) || Hf(E.getAttribute("enctype")) || ai, m = new FormData(E, c), !z0()) {
      let { name: v, type: _, value: x } = c;
      if (_ === "image") {
        let H = v ? `${v}.` : "";
        m.append(`${H}x`, "0"), m.append(`${H}y`, "0");
      } else v && m.append(v, x);
    }
  } else {
    if (ci(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = li, f = null, d = ai, b = c;
  }
  return m && d === "text/plain" && (b = m, m = void 0), { action: f, method: r.toLowerCase(), encType: d, formData: m, body: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Xf(c, o) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(o);
}
function D0(c, o, r, f) {
  let d = typeof c == "string" ? new URL(
    c,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : c;
  return r ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${f}` : d.pathname = `${d.pathname}.${f}` : d.pathname === "/" ? d.pathname = `_root.${f}` : o && el(d.pathname, o) === "/" ? d.pathname = `${o.replace(/\/$/, "")}/_root.${f}` : d.pathname = `${d.pathname.replace(/\/$/, "")}.${f}`, d;
}
async function _0(c, o) {
  if (c.id in o)
    return o[c.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      c.module
    );
    return o[c.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${c.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function O0(c) {
  return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string";
}
async function R0(c, o, r) {
  let f = await Promise.all(
    c.map(async (d) => {
      let m = o.routes[d.route.id];
      if (m) {
        let b = await _0(m, r);
        return b.links ? b.links() : [];
      }
      return [];
    })
  );
  return j0(
    f.flat(1).filter(O0).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function fm(c, o, r, f, d, m) {
  let b = (y, v) => r[v] ? y.route.id !== r[v].route.id : !0, E = (y, v) => (
    // param change, /users/123 -> /users/456
    r[v].pathname !== y.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[v].route.path?.endsWith("*") && r[v].params["*"] !== y.params["*"]
  );
  return m === "assets" ? o.filter(
    (y, v) => b(y, v) || E(y, v)
  ) : m === "data" ? o.filter((y, v) => {
    let _ = f.routes[y.route.id];
    if (!_ || !_.hasLoader)
      return !1;
    if (b(y, v) || E(y, v))
      return !0;
    if (y.route.shouldRevalidate) {
      let x = y.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(c, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function M0(c, o, { includeHydrateFallback: r } = {}) {
  return N0(
    c.map((f) => {
      let d = o.routes[f.route.id];
      if (!d) return [];
      let m = [d.module];
      return d.clientActionModule && (m = m.concat(d.clientActionModule)), d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)), r && d.hydrateFallbackModule && (m = m.concat(d.hydrateFallbackModule)), d.imports && (m = m.concat(d.imports)), m;
    }).flat(1)
  );
}
function N0(c) {
  return [...new Set(c)];
}
function U0(c) {
  let o = {}, r = Object.keys(c).sort();
  for (let f of r)
    o[f] = c[f];
  return o;
}
function j0(c, o) {
  let r = /* @__PURE__ */ new Set();
  return new Set(o), c.reduce((f, d) => {
    let m = JSON.stringify(U0(d));
    return r.has(m) || (r.add(m), f.push({ key: m, link: d })), f;
  }, []);
}
function Cm() {
  let c = z.useContext(Ua);
  return Xf(
    c,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), c;
}
function H0() {
  let c = z.useContext(ui);
  return Xf(
    c,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), c;
}
var Qf = z.createContext(void 0);
Qf.displayName = "FrameworkContext";
function Dm() {
  let c = z.useContext(Qf);
  return Xf(
    c,
    "You must render this element inside a <HydratedRouter> element"
  ), c;
}
function B0(c, o) {
  let r = z.useContext(Qf), [f, d] = z.useState(!1), [m, b] = z.useState(!1), { onFocus: E, onBlur: y, onMouseEnter: v, onMouseLeave: _, onTouchStart: x } = o, H = z.useRef(null);
  z.useEffect(() => {
    if (c === "render" && b(!0), c === "viewport") {
      let V = (L) => {
        L.forEach((q) => {
          b(q.isIntersecting);
        });
      }, w = new IntersectionObserver(V, { threshold: 0.5 });
      return H.current && w.observe(H.current), () => {
        w.disconnect();
      };
    }
  }, [c]), z.useEffect(() => {
    if (f) {
      let V = setTimeout(() => {
        b(!0);
      }, 100);
      return () => {
        clearTimeout(V);
      };
    }
  }, [f]);
  let B = () => {
    d(!0);
  }, G = () => {
    d(!1), b(!1);
  };
  return r ? c !== "intent" ? [m, H, {}] : [
    m,
    H,
    {
      onFocus: Mn(E, B),
      onBlur: Mn(y, G),
      onMouseEnter: Mn(v, B),
      onMouseLeave: Mn(_, G),
      onTouchStart: Mn(x, B)
    }
  ] : [!1, H, {}];
}
function Mn(c, o) {
  return (r) => {
    c && c(r), r.defaultPrevented || o(r);
  };
}
function w0({ page: c, ...o }) {
  let { router: r } = Cm(), f = z.useMemo(
    () => om(r.routes, c, r.basename),
    [r.routes, c, r.basename]
  );
  return f ? /* @__PURE__ */ z.createElement(L0, { page: c, matches: f, ...o }) : null;
}
function q0(c) {
  let { manifest: o, routeModules: r } = Dm(), [f, d] = z.useState([]);
  return z.useEffect(() => {
    let m = !1;
    return R0(c, o, r).then(
      (b) => {
        m || d(b);
      }
    ), () => {
      m = !0;
    };
  }, [c, o, r]), f;
}
function L0({
  page: c,
  matches: o,
  ...r
}) {
  let f = _l(), { future: d, manifest: m, routeModules: b } = Dm(), { basename: E } = Cm(), { loaderData: y, matches: v } = H0(), _ = z.useMemo(
    () => fm(
      c,
      o,
      v,
      m,
      f,
      "data"
    ),
    [c, o, v, m, f]
  ), x = z.useMemo(
    () => fm(
      c,
      o,
      v,
      m,
      f,
      "assets"
    ),
    [c, o, v, m, f]
  ), H = z.useMemo(() => {
    if (c === f.pathname + f.search + f.hash)
      return [];
    let V = /* @__PURE__ */ new Set(), w = !1;
    if (o.forEach((q) => {
      let J = m.routes[q.route.id];
      !J || !J.hasLoader || (!_.some((ot) => ot.route.id === q.route.id) && q.route.id in y && b[q.route.id]?.shouldRevalidate || J.hasClientLoader ? w = !0 : V.add(q.route.id));
    }), V.size === 0)
      return [];
    let L = D0(
      c,
      E,
      d.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return w && V.size > 0 && L.searchParams.set(
      "_routes",
      o.filter((q) => V.has(q.route.id)).map((q) => q.route.id).join(",")
    ), [L.pathname + L.search];
  }, [
    E,
    d.unstable_trailingSlashAwareDataRequests,
    y,
    f,
    m,
    _,
    o,
    c,
    b
  ]), B = z.useMemo(
    () => M0(x, m),
    [x, m]
  ), G = q0(x);
  return /* @__PURE__ */ z.createElement(z.Fragment, null, H.map((V) => /* @__PURE__ */ z.createElement("link", { key: V, rel: "prefetch", as: "fetch", href: V, ...r })), B.map((V) => /* @__PURE__ */ z.createElement("link", { key: V, rel: "modulepreload", href: V, ...r })), G.map(({ key: V, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ z.createElement(
      "link",
      {
        key: V,
        nonce: r.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? r.crossOrigin
      }
    )
  )));
}
function Y0(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == "function" ? r(o) : r != null && (r.current = o);
    });
  };
}
var G0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  G0 && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function _m({
  basename: c,
  children: o,
  unstable_useTransitions: r,
  window: f
}) {
  let d = z.useRef();
  d.current == null && (d.current = xv({ window: f, v5Compat: !0 }));
  let m = d.current, [b, E] = z.useState({
    action: m.action,
    location: m.location
  }), y = z.useCallback(
    (v) => {
      r === !1 ? E(v) : z.startTransition(() => E(v));
    },
    [r]
  );
  return z.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ z.createElement(
    g0,
    {
      basename: c,
      children: o,
      location: b.location,
      navigationType: b.action,
      navigator: m,
      unstable_useTransitions: r
    }
  );
}
var Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Rm = z.forwardRef(
  function({
    onClick: o,
    discover: r = "render",
    prefetch: f = "none",
    relative: d,
    reloadDocument: m,
    replace: b,
    state: E,
    target: y,
    to: v,
    preventScrollReset: _,
    viewTransition: x,
    unstable_defaultShouldRevalidate: H,
    ...B
  }, G) {
    let { basename: V, unstable_useTransitions: w } = z.useContext(ze), L = typeof v == "string" && Om.test(v), q = gm(v, V);
    v = q.to;
    let J = l0(v, { relative: d }), [ot, mt, xt] = B0(
      f,
      B
    ), W = Z0(v, {
      replace: b,
      state: E,
      target: y,
      preventScrollReset: _,
      relative: d,
      viewTransition: x,
      unstable_defaultShouldRevalidate: H,
      unstable_useTransitions: w
    });
    function _t(me) {
      o && o(me), me.defaultPrevented || W(me);
    }
    let Yt = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ z.createElement(
        "a",
        {
          ...B,
          ...xt,
          href: q.absoluteURL || J,
          onClick: q.isExternal || m ? o : _t,
          ref: Y0(G, mt),
          target: y,
          "data-discover": !L && r === "render" ? "true" : void 0
        }
      )
    );
    return ot && !L ? /* @__PURE__ */ z.createElement(z.Fragment, null, Yt, /* @__PURE__ */ z.createElement(w0, { page: J })) : Yt;
  }
);
Rm.displayName = "Link";
var X0 = z.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: r = !1,
    className: f = "",
    end: d = !1,
    style: m,
    to: b,
    viewTransition: E,
    children: y,
    ...v
  }, _) {
    let x = Hn(b, { relative: v.relative }), H = _l(), B = z.useContext(ui), { navigator: G, basename: V } = z.useContext(ze), w = B != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    F0(x) && E === !0, L = G.encodeLocation ? G.encodeLocation(x).pathname : x.pathname, q = H.pathname, J = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    r || (q = q.toLowerCase(), J = J ? J.toLowerCase() : null, L = L.toLowerCase()), J && V && (J = el(J, V) || J);
    const ot = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let mt = q === L || !d && q.startsWith(L) && q.charAt(ot) === "/", xt = J != null && (J === L || !d && J.startsWith(L) && J.charAt(L.length) === "/"), W = {
      isActive: mt,
      isPending: xt,
      isTransitioning: w
    }, _t = mt ? o : void 0, Yt;
    typeof f == "function" ? Yt = f(W) : Yt = [
      f,
      mt ? "active" : null,
      xt ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let me = typeof m == "function" ? m(W) : m;
    return /* @__PURE__ */ z.createElement(
      Rm,
      {
        ...v,
        "aria-current": _t,
        className: Yt,
        ref: _,
        style: me,
        to: b,
        viewTransition: E
      },
      typeof y == "function" ? y(W) : y
    );
  }
);
X0.displayName = "NavLink";
var Q0 = z.forwardRef(
  ({
    discover: c = "render",
    fetcherKey: o,
    navigate: r,
    reloadDocument: f,
    replace: d,
    state: m,
    method: b = li,
    action: E,
    onSubmit: y,
    relative: v,
    preventScrollReset: _,
    viewTransition: x,
    unstable_defaultShouldRevalidate: H,
    ...B
  }, G) => {
    let { unstable_useTransitions: V } = z.useContext(ze), w = k0(), L = $0(E, { relative: v }), q = b.toLowerCase() === "get" ? "get" : "post", J = typeof E == "string" && Om.test(E), ot = (mt) => {
      if (y && y(mt), mt.defaultPrevented) return;
      mt.preventDefault();
      let xt = mt.nativeEvent.submitter, W = xt?.getAttribute("formmethod") || b, _t = () => w(xt || mt.currentTarget, {
        fetcherKey: o,
        method: W,
        navigate: r,
        replace: d,
        state: m,
        relative: v,
        preventScrollReset: _,
        viewTransition: x,
        unstable_defaultShouldRevalidate: H
      });
      V && r !== !1 ? z.startTransition(() => _t()) : _t();
    };
    return /* @__PURE__ */ z.createElement(
      "form",
      {
        ref: G,
        method: q,
        action: L,
        onSubmit: f ? y : ot,
        ...B,
        "data-discover": !J && c === "render" ? "true" : void 0
      }
    );
  }
);
Q0.displayName = "Form";
function V0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mm(c) {
  let o = z.useContext(Ua);
  return wt(o, V0(c)), o;
}
function Z0(c, {
  target: o,
  replace: r,
  state: f,
  preventScrollReset: d,
  relative: m,
  viewTransition: b,
  unstable_defaultShouldRevalidate: E,
  unstable_useTransitions: y
} = {}) {
  let v = Tm(), _ = _l(), x = Hn(c, { relative: m });
  return z.useCallback(
    (H) => {
      if (x0(H, o)) {
        H.preventDefault();
        let B = r !== void 0 ? r : Nn(_) === Nn(x), G = () => v(c, {
          replace: B,
          state: f,
          preventScrollReset: d,
          relative: m,
          viewTransition: b,
          unstable_defaultShouldRevalidate: E
        });
        y ? z.startTransition(() => G()) : G();
      }
    },
    [
      _,
      v,
      x,
      r,
      f,
      o,
      c,
      d,
      m,
      b,
      E,
      y
    ]
  );
}
function Vf(c) {
  Oe(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let o = z.useRef(wf(c)), r = z.useRef(!1), f = _l(), d = z.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      T0(
        f.search,
        r.current ? null : o.current
      )
    ),
    [f.search]
  ), m = Tm(), b = z.useCallback(
    (E, y) => {
      const v = wf(
        typeof E == "function" ? E(new URLSearchParams(d)) : E
      );
      r.current = !0, m("?" + v, y);
    },
    [m, d]
  );
  return [d, b];
}
var K0 = 0, J0 = () => `__${String(++K0)}__`;
function k0() {
  let { router: c } = Mm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = z.useContext(ze), r = m0(), f = c.fetch, d = c.navigate;
  return z.useCallback(
    async (m, b = {}) => {
      let { action: E, method: y, encType: v, formData: _, body: x } = C0(
        m,
        o
      );
      if (b.navigate === !1) {
        let H = b.fetcherKey || J0();
        await f(H, r, b.action || E, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: _,
          body: x,
          formMethod: b.method || y,
          formEncType: b.encType || v,
          flushSync: b.flushSync
        });
      } else
        await d(b.action || E, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: _,
          body: x,
          formMethod: b.method || y,
          formEncType: b.encType || v,
          replace: b.replace,
          state: b.state,
          fromRouteId: r,
          flushSync: b.flushSync,
          viewTransition: b.viewTransition
        });
    },
    [f, d, o, r]
  );
}
function $0(c, { relative: o } = {}) {
  let { basename: r } = z.useContext(ze), f = z.useContext(ll);
  wt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1), m = { ...Hn(c || ".", { relative: o }) }, b = _l();
  if (c == null) {
    m.search = b.search;
    let E = new URLSearchParams(m.search), y = E.getAll("index");
    if (y.some((_) => _ === "")) {
      E.delete("index"), y.filter((x) => x).forEach((x) => E.append("index", x));
      let _ = E.toString();
      m.search = _ ? `?${_}` : "";
    }
  }
  return (!c || c === ".") && d.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (m.pathname = m.pathname === "/" ? r : tl([r, m.pathname])), Nn(m);
}
function F0(c, { relative: o } = {}) {
  let r = z.useContext(bm);
  wt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Mm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Hn(c, { relative: o });
  if (!r.isTransitioning)
    return !1;
  let m = el(r.currentLocation.pathname, f) || r.currentLocation.pathname, b = el(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return ni(d.pathname, b) != null || ni(d.pathname, m) != null;
}
var W0 = rm();
const Nm = z.createContext(), Um = ({ children: c }) => {
  const [o, r] = z.useState(null), [f, d] = z.useState(null), m = (B) => {
    r((G) => ({ ...G, ...B }));
  }, b = (B) => {
    d((G) => ({ ...G, ...B }));
  }, [E, y] = z.useState({}), v = (B, G) => {
    y((V) => ({ ...V, [B]: G }));
  }, _ = () => {
    y({});
  }, [x, H] = z.useState(!1);
  return /* @__PURE__ */ O.jsx(
    Nm.Provider,
    {
      value: {
        shopTheLookValues: o,
        setShopTheLookValues: r,
        updateShopTheLookValues: m,
        customiseValues: f,
        setCustomiseValues: d,
        updateCustomiseValues: b,
        selectedItems: E,
        updateSelectedItem: v,
        clearSelectedItems: _,
        hasTriedOn: x,
        setHasTriedOn: H
      },
      children: c
    }
  );
}, ja = () => {
  const c = z.useContext(Nm);
  if (!c)
    throw new Error(
      "useImmersiveExperience must be used within a ImmersiveExperienceProvider"
    );
  return c;
}, I0 = ({
  isOpen: c,
  onClose: o,
  children: r,
  className: f = "",
  backdropClassName: d = "bg-black/70"
}) => {
  const m = z.useRef(null);
  z.useEffect(() => {
    const E = (y) => {
      y.key === "Escape" && o();
    };
    return c && (window.addEventListener("keydown", E), document.body.style.overflow = "hidden"), () => {
      window.removeEventListener("keydown", E), document.body.style.overflow = "unset";
    };
  }, [c, o]);
  const b = (E) => {
    m.current && !m.current.contains(E.target) && o();
  };
  return c ? W0.createPortal(
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: `fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${d}`,
        onClick: b,
        "aria-modal": "true",
        role: "dialog",
        children: /* @__PURE__ */ O.jsx("div", { ref: m, className: f, children: r })
      }
    ),
    document.body
  ) : null;
}, jm = z.createContext(), Hm = ({ children: c }) => {
  const [o, r] = z.useState(null), [f, d] = z.useState({}), m = z.useCallback((E, y = {}) => {
    r(E), d(y);
  }, []), b = z.useCallback(() => {
    r(null), d({});
  }, []);
  return /* @__PURE__ */ O.jsxs(jm.Provider, { value: { openModal: m, closeModal: b }, children: [
    c,
    o && /* @__PURE__ */ O.jsx(I0, { isOpen: !!o, onClose: b, ...f, children: o })
  ] });
}, Bm = () => {
  const c = z.useContext(jm);
  if (!c)
    throw new Error("useModal must be used within a ModalProvider");
  return c;
}, P0 = ({ className: c = "" }) => {
  const { closeModal: o } = Bm();
  return /* @__PURE__ */ O.jsxs(
    "header",
    {
      className: `flex justify-between items-center bg-[#EDD6CC]/25 px-4 py-4 rounded-t-[14px] ${c}`,
      children: [
        /* @__PURE__ */ O.jsxs("span", { className: "flex space-x-2", children: [
          /* @__PURE__ */ O.jsx("img", { src: "/v1_stars.svg", alt: "" }),
          /* @__PURE__ */ O.jsx("p", { className: "text-sm font-medium uppercase tracking-widest", children: "Immersive Experience" })
        ] }),
        /* @__PURE__ */ O.jsx(
          "button",
          {
            onClick: o,
            className: "cursor-pointer hover:bg-[#EDD6CC] p-2 rounded-full",
            children: /* @__PURE__ */ O.jsx("img", { src: "/cross.svg", alt: "" })
          }
        )
      ]
    }
  );
}, tg = ({
  isCustomise: c,
  selectedCount: o,
  onClick: r,
  className: f = ""
}) => {
  const d = o === 0;
  return /* @__PURE__ */ O.jsxs(
    "button",
    {
      onClick: d ? void 0 : r,
      disabled: d,
      className: `flex items-center justify-center text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase border border-solid ${f} ${d ? "bg-[#EDD6CC]/30 border-[#DFCDC5]/30 text-[#000000]/30 cursor-not-allowed" : "bg-[#EDD6CC] border-[#DFCDC5]"}`,
      children: [
        c ? `Apply (${o})` : "Try on",
        /* @__PURE__ */ O.jsx(
          "img",
          {
            src: d ? "/v2_stars_disabled.svg" : "/v2_stars.svg",
            className: "ml-2",
            alt: ""
          }
        )
      ]
    }
  );
}, sm = ({ imageUrl: c, hasSelection: o, className: r = "" }) => {
  const f = async () => {
    try {
      const b = await (await fetch(c)).blob(), E = window.URL.createObjectURL(b), y = document.createElement("a");
      y.href = E, y.download = "generated-look.png", document.body.appendChild(y), y.click(), document.body.removeChild(y), window.URL.revokeObjectURL(E);
    } catch (m) {
      console.error("Download failed:", m);
    }
  }, d = async () => {
    try {
      const b = await (await fetch(c)).blob(), E = new File([b], "look.png", { type: b.type });
      navigator.canShare && navigator.canShare({ files: [E] }) ? await navigator.share({
        title: "My Virtual Try-On Look",
        text: "Check out this look!",
        files: [E]
      }) : alert(
        "Sharing files is not supported on this browser. Please download the image instead."
      );
    } catch (m) {
      console.error("Sharing failed:", m);
    }
  };
  return /* @__PURE__ */ O.jsxs("div", { className: `flex space-x-3 ${r}`, children: [
    /* @__PURE__ */ O.jsx(
      "button",
      {
        onClick: f,
        disabled: !o,
        className: `border border-solid border-[#DFCDC5] rounded-md p-2 transition-colors ${o ? "hover:bg-[#faefe8] cursor-pointer" : "opacity-50 cursor-not-allowed"}`,
        children: /* @__PURE__ */ O.jsx("img", { src: "/v1_download.svg", alt: "Download" })
      }
    ),
    /* @__PURE__ */ O.jsx(
      "button",
      {
        onClick: d,
        disabled: !o,
        className: `border border-solid border-[#DFCDC5] rounded-md p-2 transition-colors ${o ? "hover:bg-[#faefe8] cursor-pointer" : "opacity-50 cursor-not-allowed"}`,
        children: /* @__PURE__ */ O.jsx("img", { src: "/v1_share.svg", alt: "Share" })
      }
    )
  ] });
}, eg = ({ isMobile: c = !1, showPreview: o = !0 }) => {
  const r = "/mock_images/red_pants.png", f = "/mock_images/spin_ccw88_lhblk_v2_p3.mp4", [d] = Vf(), [m, b] = z.useState(!1), E = d.get("tab") === "customise", { selectedItems: y, setHasTriedOn: v } = ja(), _ = Object.keys(y).length, x = _ > 0, H = () => {
    v(!0);
  }, B = () => {
    x && b((G) => !G);
  };
  return c ? o ? /* @__PURE__ */ O.jsxs("div", { className: "relative w-full flex-1 bg-[#F5F5F5] overflow-hidden pointer-events-auto", children: [
    x ? m ? /* @__PURE__ */ O.jsx(
      "video",
      {
        src: f,
        className: "w-full h-full object-contain",
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0
      }
    ) : /* @__PURE__ */ O.jsx(
      "img",
      {
        src: r,
        alt: "Virtual Try-On Preview",
        className: "w-full h-full object-contain"
      }
    ) : /* @__PURE__ */ O.jsx("div", { className: "w-full h-full bg-[#E3DEDC]" }),
    /* @__PURE__ */ O.jsx(
      sm,
      {
        imageUrl: r,
        hasSelection: x,
        className: "absolute top-4 right-4 z-10"
      }
    ),
    /* @__PURE__ */ O.jsx(
      "button",
      {
        onClick: B,
        className: `absolute bg-white bottom-4 right-4 border border-solid border-[#DFCDC5] rounded-full p-2 transition-colors hover:bg-[#faefe8] cursor-pointer ${x ? "" : "opacity-50 cursor-not-allowed"}`,
        disabled: !x,
        children: /* @__PURE__ */ O.jsx("img", { src: "/animate.svg", alt: "animate" })
      }
    )
  ] }) : /* @__PURE__ */ O.jsx("div", { className: "relative w-full flex-1 bg-transparent overflow-hidden" }) : /* @__PURE__ */ O.jsxs("div", { className: "w-full lg:w-[40%] py-4 px-6 h-full flex flex-col justify-between", children: [
    /* @__PURE__ */ O.jsx("header", { className: "flex justify-end items-center", children: /* @__PURE__ */ O.jsx(sm, { imageUrl: r, hasSelection: x }) }),
    /* @__PURE__ */ O.jsx("div", { className: "relative w-full flex-1 min-h-0 my-4", children: x ? m ? /* @__PURE__ */ O.jsx(
      "video",
      {
        src: f,
        className: "w-full h-full object-contain",
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0
      }
    ) : /* @__PURE__ */ O.jsx(
      "img",
      {
        src: r,
        alt: "Virtual Try-On Preview",
        className: "w-full h-full object-contain"
      }
    ) : /* @__PURE__ */ O.jsx("div", { className: "w-full h-full bg-[#E3DEDC]" }) }),
    /* @__PURE__ */ O.jsxs("footer", { className: "w-full flex justify-between space-x-3 items-center", children: [
      /* @__PURE__ */ O.jsx(
        tg,
        {
          isCustomise: E,
          selectedCount: _,
          className: "w-[60%]",
          onClick: H
        }
      ),
      /* @__PURE__ */ O.jsx(
        "button",
        {
          onClick: B,
          disabled: !x,
          className: `flex items-center justify-center w-[40%] border border-solid text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase transition-colors ${x ? "bg-[#EDD6CC] border-[#DFCDC5] text-[#000000] cursor-pointer hover:bg-[#e6c4b8]" : "bg-[#EDD6CC]/30 border-[#DFCDC5]/30 text-[#000000]/30 cursor-not-allowed"}`,
          children: "Animate"
        }
      )
    ] })
  ] });
}, lg = ({ id: c, title: o, items: r, selectedItem: f, onSelect: d }) => {
  const [m, b] = z.useState(!0), [E, y] = z.useState(10);
  if ((!r || r.length === 0) && c !== "height") return null;
  const v = [
    "5'0",
    "5'2",
    "5'4",
    "5'6",
    "5'8",
    "5'9",
    "5'10",
    "6'0",
    "6'1"
  ], _ = (H) => {
    const B = parseInt(H.target.value, 10), G = v[B];
    d && d(G);
  }, x = f ? v.indexOf(f) : 4;
  return /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col space-y-3", children: [
    /* @__PURE__ */ O.jsxs(
      "span",
      {
        className: "flex space-x-2 items-center cursor-pointer",
        onClick: () => b(!m),
        children: [
          /* @__PURE__ */ O.jsx("img", { src: m ? "/chevron_up.svg" : "/chevron_down.svg", alt: "" }),
          /* @__PURE__ */ O.jsx("label", { className: "text-center font-bold uppercase text-[12px] cursor-pointer", children: o }),
          f && /* @__PURE__ */ O.jsx("div", { className: "bg-[#CD9177] rounded-full w-2 h-2" })
        ]
      }
    ),
    m && /* @__PURE__ */ O.jsx(O.Fragment, { children: c === "height" ? /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col px-1 py-2 w-full", children: [
      /* @__PURE__ */ O.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: v.length - 1,
          step: "1",
          value: x !== -1 ? x : 4,
          onChange: _,
          className: "w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer accent-[#CD9177]"
        }
      ),
      /* @__PURE__ */ O.jsx("div", { className: "flex justify-between mt-3 w-full", children: v.map((H, B) => /* @__PURE__ */ O.jsx(
        "span",
        {
          className: "text-[10px] font-bold text-black",
          children: H
        },
        H
      )) })
    ] }) : /* @__PURE__ */ O.jsxs("span", { className: "flex space-x-3 overflow-x-scroll scrollbar-hide", children: [
      r.slice(0, E).map((H, B) => {
        const G = f === H;
        return /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `shrink-0 cursor-pointer border  ${G ? "border-[#000000]" : "border-transparent"}`,
            onClick: () => d && d(f === H ? null : H),
            children: /* @__PURE__ */ O.jsx(
              "img",
              {
                src: H.image || "/mock_images/Rectangle 4948.png",
                className: "w-[78px] h-[90px] object-cover",
                alt: H.name || ""
              }
            )
          },
          B
        );
      }),
      E < r.length && /* @__PURE__ */ O.jsx(
        "div",
        {
          className: "shrink-0 flex items-center justify-center cursor-pointer border border-[#DFCDC5] w-[78px] h-[90px] text-[10px] font-bold uppercase hover:bg-[#DFCDC5]/20",
          onClick: () => y((H) => H + 10),
          children: "Load More"
        }
      )
    ] }) })
  ] });
}, ag = () => {
  const [c, o] = z.useState(() => typeof window < "u" ? window.matchMedia("(max-width: 768px)").matches : !1);
  return z.useEffect(() => {
    const r = window.matchMedia("(max-width: 768px)");
    o(r.matches);
    const f = (d) => {
      o(d.matches);
    };
    return r.addEventListener("change", f), () => {
      r.removeEventListener("change", f);
    };
  }, []), c;
}, ng = () => {
  const [c, o] = Vf(), { clearSelectedItems: r } = ja(), f = ag(), d = c.get("tab") === "shop_the_look", m = (b) => {
    r(), o((E) => {
      const y = new URLSearchParams(E);
      return b ? y.set("tab", b) : y.delete("tab"), y;
    });
  };
  return /* @__PURE__ */ O.jsxs(
    "header",
    {
      className: `${f ? "w-[90%]" : "w-full"} flex items-center justify-between border border-solid border-[#DFCDC5]/50`,
      children: [
        /* @__PURE__ */ O.jsx(
          "button",
          {
            onClick: () => m("shop_the_look"),
            className: `text-center w-full uppercase text-[10px] lg:text-[12px]  py-2 ${d ? "bg-[#DFCDC5]/50 font-bold" : "font-medium"}`,
            children: "Shop the look"
          }
        ),
        /* @__PURE__ */ O.jsx(
          "button",
          {
            onClick: () => m("customise"),
            className: `text-center w-full uppercase text-[10px] lg:text-[12px]  py-2 ${d ? "font-medium" : "bg-[#DFCDC5]/50 font-bold"}`,
            children: "Customize"
          }
        )
      ]
    }
  );
}, wm = z.createContext(null), qm = ({ children: c, apiBase: o, tenantId: r, product: f = {} }) => {
  const [d, m] = z.useState(null), [b, E] = z.useState(!1), [y, v] = z.useState(null), _ = (o || "").replace(/\/$/, ""), x = (w) => {
    const L = new URLSearchParams();
    return r != null && L.set("tenantId", String(r)), Object.entries(w || {}).forEach(([q, J]) => {
      J != null && J !== "" && L.set(q, String(J));
    }), L.toString();
  }, H = z.useCallback(async () => {
    if (!_ || r == null || r === "") return { isValid: !1 };
    const w = x({
      tenantId: r,
      sku: f.sku,
      productVariantId: f.productVariantId ?? f.variantId,
      productHandle: f.handle,
      subTenantId: f.subTenantId
    });
    return await (await fetch(`${_}/api/vton/validate?${w}`, {
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    })).json();
  }, [_, r, f.sku, f.productVariantId, f.variantId, f.handle, f.subTenantId]), B = z.useCallback(async () => {
    if (!_ || r == null || r === "")
      return v("Missing apiBase or tenantId"), null;
    E(!0), v(null);
    try {
      const w = x({
        tenantId: r,
        sku: f.sku,
        productVariantId: f.productVariantId ?? f.variantId,
        subTenantId: f.subTenantId
      }), L = await fetch(`${_}/api/vton/config?${w}`, {
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });
      if (!L.ok) throw new Error(L.statusText);
      const q = await L.json();
      return m(q), q;
    } catch (w) {
      return v(w.message), m(null), null;
    } finally {
      E(!1);
    }
  }, [_, r, f.sku, f.productVariantId, f.variantId, f.subTenantId]), G = z.useCallback(
    async (w) => {
      if (!_ || !r) throw new Error("Missing apiBase or tenantId");
      const L = new FormData();
      L.append("file", w), L.append("tenantId", String(r));
      const q = await fetch(`${_}/api/vton/upload-selfie`, {
        method: "POST",
        body: L,
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });
      if (!q.ok) {
        const ot = await q.json().catch(() => ({}));
        throw new Error(ot.message || q.statusText);
      }
      return (await q.json()).url;
    },
    [_, r]
  ), V = z.useCallback(
    async (w) => {
      if (!_ || !r) throw new Error("Missing apiBase or tenantId");
      const L = await fetch(`${_}/api/vton/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify({
          tenantId: r,
          ...w
        })
      });
      if (!L.ok) {
        const q = await L.json().catch(() => ({}));
        throw new Error(q.message || L.statusText);
      }
      return L.json();
    },
    [_, r]
  );
  return /* @__PURE__ */ O.jsx(
    wm.Provider,
    {
      value: {
        apiBase: _,
        tenantId: r,
        product: f,
        config: d,
        configLoading: b,
        configError: y,
        validate: H,
        fetchConfig: B,
        uploadSelfie: G,
        generate: V,
        setConfig: m
      },
      children: c
    }
  );
}, Lm = () => z.useContext(wm), ug = () => {
  const c = z.useRef(null), [o, r] = z.useState([]), { selectedItems: f, updateSelectedItem: d } = ja();
  z.useEffect(() => {
    const y = f?.tryon;
    Array.isArray(y) ? r(y) : y?.image ? r([{ id: "legacy", url: y.image, file: y.file }]) : r([]);
  }, [f]);
  const m = () => {
    c.current?.click();
  }, b = (y) => {
    const v = Array.from(y.target.files || []);
    if (v.length > 0) {
      const _ = v.map((H) => ({
        id: URL.createObjectURL(H),
        // Use URL as ID for simplicity
        url: URL.createObjectURL(H),
        file: H
      })), x = [...o, ..._];
      r(x), d("tryon", x);
    }
    c.current && (c.current.value = "");
  }, E = (y) => {
    const v = o.filter((_) => _.id !== y);
    r(v), d("tryon", v);
  };
  return /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col space-y-2 w-full", children: [
    /* @__PURE__ */ O.jsx("label", { className: "font-bold uppercase text-[12px] cursor-pointer", children: "Try-on" }),
    /* @__PURE__ */ O.jsx(
      "input",
      {
        type: "file",
        ref: c,
        onChange: b,
        className: "hidden",
        accept: "image/*",
        multiple: !0
      }
    ),
    o.length > 0 ? /* @__PURE__ */ O.jsxs("div", { className: "flex space-x-2 overflow-x-auto scrollbar-hide py-1 bg-[#F4F4F4] rounded-[8px]", children: [
      o.map((y) => /* @__PURE__ */ O.jsxs(
        "div",
        {
          className: "relative shrink-0 w-[70px] h-[80px]  overflow-hidden group border border-[#E5E5E5]",
          children: [
            /* @__PURE__ */ O.jsx(
              "img",
              {
                src: y.url,
                alt: "User Upload",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ O.jsx(
              "button",
              {
                onClick: () => E(y.id),
                className: "absolute top-1 right-1 bg-white/80 hover:bg-white rounded-full p-1 transition-colors opacity-0 group-hover:opacity-100",
                children: /* @__PURE__ */ O.jsx("img", { src: "/cross.svg", alt: "Remove", className: "w-2.5 h-2.5" })
              }
            )
          ]
        },
        y.id
      )),
      /* @__PURE__ */ O.jsx(
        "button",
        {
          onClick: m,
          className: "shrink-0 w-[70px] h-[80px] bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D5D5D5] transition-colors",
          children: /* @__PURE__ */ O.jsx("span", { className: "text-4xl text-[#7A7A7A] font-light", children: "+" })
        }
      )
    ] }) : /* @__PURE__ */ O.jsxs(
      "button",
      {
        onClick: m,
        className: "w-full bg-[#F4F4F4] rounded-[8px] flex items-center justify-center h-[90px] space-x-1.5 hover:bg-[#EAEAEA] transition-colors",
        children: [
          /* @__PURE__ */ O.jsx("img", { src: "/v1_upload.svg", alt: "", className: "w-[36px] h-[36px]" }),
          /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ O.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[10px] font-bold", children: "Upload Your Photos to" }),
              " ",
              /* @__PURE__ */ O.jsx("p", { className: "text-[10px] font-bold uppercase ml-1", children: "Try-on:" })
            ] }),
            /* @__PURE__ */ O.jsx("p", { className: "text-sm font-bold", children: "1 Full Body Shot + Selfie" })
          ] })
        ]
      }
    )
  ] });
}, ei = () => Array.from({ length: 11 }, (c, o) => ({
  id: o,
  image: "/mock_images/Rectangle 4948.png"
})), ig = [
  { id: "models", title: "Models", items: ei() },
  { id: "body_size", title: "Body Size", items: ei() },
  { id: "backgrounds", title: "Backgrounds", items: ei() },
  { id: "height", title: "Height", items: [] },
  { id: "looks", title: "Looks", items: ei() }
], cg = () => {
  const [c, o] = z.useState(ig), { selectedItems: r, updateSelectedItem: f, clearSelectedItems: d } = ja(), b = Lm()?.config;
  return z.useEffect(() => {
    if (b) {
      const E = [];
      b.models?.length && E.push({
        id: "models",
        title: "Models",
        items: b.models.map((y) => ({
          id: y.id,
          image: y.thumbnailUrl || y.imageUrl,
          name: y.name
        }))
      }), b.backgrounds?.length && E.push({
        id: "backgrounds",
        title: "Backgrounds",
        items: b.backgrounds.map((y) => ({
          id: y.id,
          image: y.imageUrl,
          name: y.name,
          value: y.value
        }))
      }), b.looks?.length && E.push({
        id: "looks",
        title: "Looks",
        items: b.looks.map((y) => ({
          id: y.id,
          image: y.thumbnailUrl || y.imageUrl,
          name: y.name,
          productVariantIds: y.productVariantIds
        }))
      }), E.length && o(E);
    }
  }, [b]), /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col pt-4 w-full lg:w-[30%] h-full space-y-3 items-center ", children: [
    /* @__PURE__ */ O.jsx(ng, {}),
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col px-4 space-y-6 overflow-y-auto  h-full md:h-[600px]", children: [
      /* @__PURE__ */ O.jsx(ug, {}),
      c.map((E) => /* @__PURE__ */ O.jsx(
        lg,
        {
          id: E.id,
          title: E.title,
          items: E.items,
          selectedItem: r[E.id],
          onSelect: (y) => f(E.id, y)
        },
        E.id
      ))
    ] })
  ] });
}, fg = ({ onClose: c }) => {
  const { selectedItems: o, hasTriedOn: r } = ja(), f = Object.keys(o).length, d = r ? 10 : 0, m = f === 0 || !r;
  return /* @__PURE__ */ O.jsxs("div", { className: "w-full lg:w-[30%] py-4 px-6 h-full flex flex-col space-y-3 justify-between", children: [
    /* @__PURE__ */ O.jsxs("header", { className: "flex justify-between items-center w-full", children: [
      /* @__PURE__ */ O.jsxs("p", { className: "text-sm font-medium text-[#000000] tracking-widest uppercase", children: [
        "In view (",
        d,
        ")"
      ] }),
      c && /* @__PURE__ */ O.jsx(
        "button",
        {
          onClick: c,
          className: "text-sm font-medium tracking-widest uppercase",
          children: "CLOSE"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "flex flex-col space-y-3 overflow-y-scroll scrollbar-hide h-[600px]", children: r ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((b, E) => /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "border border-solid border-[#DFCDC5] bg-[#FDFDFD] rounded p-2",
        children: /* @__PURE__ */ O.jsxs("span", { className: "flex space-x-3 w-full", children: [
          /* @__PURE__ */ O.jsx(
            "img",
            {
              src: "/mock_images/Rectangle 4948.png",
              className: "w-[86px] h-[86px] object-cover border border-solid border-[#DFCDC5] rounded-[2px]",
              alt: ""
            }
          ),
          /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col justify-between w-full", children: [
            /* @__PURE__ */ O.jsxs("span", { className: "flex justify-between", children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col space-y-1", children: [
                /* @__PURE__ */ O.jsx("p", { className: "font-bold text-[10px] tracking-wider uppercase", children: "Product Name" }),
                /* @__PURE__ */ O.jsx("p", { className: "text-[10px] tracking-wider uppercase font-regular", children: "Color:White" })
              ] }),
              /* @__PURE__ */ O.jsx("img", { src: "/v1_trash.svg", alt: "" })
            ] }),
            /* @__PURE__ */ O.jsxs("span", { className: "flex justify-between w-full", children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex space-x-1 items-center ", children: [
                /* @__PURE__ */ O.jsx("button", { className: " text-black", children: "-" }),
                /* @__PURE__ */ O.jsx("p", { className: "font-regular text-[10px] bg-[#F4F4F4] text-center p-2 text-black ", children: "1" }),
                /* @__PURE__ */ O.jsx("button", { className: " text-black", children: "+" })
              ] }),
              /* @__PURE__ */ O.jsx("p", { className: "font-regular text-sm text-black", children: "$49.99" })
            ] })
          ] })
        ] })
      },
      E
    )) : /* @__PURE__ */ O.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ O.jsx("p", { className: "text-sm font-medium text-[#000000] tracking-widest uppercase", children: "Please try on items" }) }) }),
    /* @__PURE__ */ O.jsx("footer", { className: "w-full flex justify-between space-x-3 items-center", children: /* @__PURE__ */ O.jsx(
      "button",
      {
        disabled: m,
        className: `flex items-center justify-center w-full text-center px-4 py-2 font-medium text-[15px] tracking-widest uppercase border border-solid ${m ? "bg-[#EDD6CC]/30 border-[#DFCDC5]/30 text-[#000000]/30 cursor-not-allowed" : "bg-[#EDD6CC] border-[#DFCDC5]"}`,
        children: "Add to cart"
      }
    ) })
  ] });
}, Ym = () => {
  const { clearSelectedItems: c, setHasTriedOn: o } = ja();
  return z.useEffect(() => () => {
    c(), o(!1);
  }, []), /* @__PURE__ */ O.jsxs("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col", children: [
    /* @__PURE__ */ O.jsx(P0, {}),
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-1 w-full  divide-x divide-solid divide-[#B1988E]", children: [
      /* @__PURE__ */ O.jsx(cg, {}),
      /* @__PURE__ */ O.jsx(eg, {}),
      /* @__PURE__ */ O.jsx(fg, {})
    ] })
  ] });
};
function sg() {
  const { fetchConfig: c, configLoading: o, configError: r } = Lm();
  return z.useEffect(() => {
    c();
  }, [c]), o ? /* @__PURE__ */ O.jsx("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col items-center justify-center", children: /* @__PURE__ */ O.jsx("p", { className: "text-gray-500", children: "Loading..." }) }) : r ? /* @__PURE__ */ O.jsx("div", { className: "relative bg-white rounded-[14px] lg:h-[800px] lg:w-[1250px] flex flex-col items-center justify-center", children: /* @__PURE__ */ O.jsx("p", { className: "text-red-500", children: r }) }) : /* @__PURE__ */ O.jsx(Ym, {});
}
function Gm({ apiMode: c }) {
  const { openModal: o } = Bm(), [r, f] = Vf(), d = () => {
    r.set("tab", "shop_the_look"), f(r);
    const m = c === "shopify" ? sg : Ym;
    o(/* @__PURE__ */ O.jsx(m, {}));
  };
  return /* @__PURE__ */ O.jsx("section", { className: "relative w-screen h-screen   flex flex-col items-center justify-center", children: /* @__PURE__ */ O.jsxs(
    "button",
    {
      onClick: d,
      className: "flex uppercase bg-[#FFFDFD] hover:bg-[#DFCDC5] transition-all duration-300 ease-in-out text-center text-[12px] tracking-wider items-center gap-2  px-4 py-2 text-sm font-semibold text-black border border-solid border-[#DFCDC5]  ",
      children: [
        /* @__PURE__ */ O.jsx("img", { src: "v3_stars.svg", alt: "" }),
        " Immersive Experience"
      ]
    }
  ) });
}
const rg = z.createContext(), Xm = ({ children: c }) => {
  const [o, r] = z.useState(() => localStorage.getItem("theme-primary") || "#4F46E5"), [f, d] = z.useState(() => localStorage.getItem("theme-font") || "Inter"), [m, b] = z.useState(() => localStorage.getItem("theme-match-host") === "true"), [E, y] = z.useState(!1), v = () => {
    const B = [
      "--primary",
      "--color-primary",
      "--brand",
      "--brand-color",
      "--chk-primary"
    ], G = getComputedStyle(document.documentElement);
    for (const w of B) {
      const L = G.getPropertyValue(w).trim();
      if (L) return L;
    }
    const V = Array.from(
      document.querySelectorAll(
        "button, a, .btn, .button, input[type='submit']"
      )
    );
    for (const w of V) {
      const L = window.getComputedStyle(w), q = L.backgroundColor, J = L.color;
      if (q && q !== "rgba(0, 0, 0, 0)" && q !== "transparent") {
        const ot = q.match(/\d+/g);
        if (ot) {
          const [mt, xt, W] = ot.map(Number);
          if (Math.abs(mt - xt) > 20 || Math.abs(mt - W) > 20 || Math.abs(xt - W) > 20)
            return q;
        }
      }
      if (w.tagName === "A" && J && J !== "rgb(0, 0, 0)" && J !== "rgb(255, 255, 255)")
        return J;
    }
    return null;
  }, _ = () => {
    const B = window.getComputedStyle(document.body).fontFamily;
    return B ? B.split(",")[0].replace(/['"]/g, "") : null;
  }, x = () => {
    const B = v(), G = _();
    B && (r(B), console.log("Detected Primary Color:", B)), G && (d(G), console.log("Detected Font:", G)), y(!0);
  };
  z.useEffect(() => {
    localStorage.setItem("theme-match-host", m), m && x();
  }, [m]), z.useEffect(() => {
    const B = document.documentElement;
    B.style.setProperty("--color-primary", o), localStorage.setItem("theme-primary", o);
    let G = '"Inter", sans-serif';
    f === "Playfair Display" ? G = '"Playfair Display", serif' : f === "Space Mono" ? G = '"Space Mono", monospace' : f === "System" ? G = "system-ui, -apple-system, sans-serif" : G = `"${f}", sans-serif`, B.style.setProperty("--font-family-sans", G), localStorage.setItem("theme-font", f);
  }, [o, f]);
  const H = {
    primaryColor: o,
    setPrimaryColor: r,
    fontFamily: f,
    setFontFamily: d,
    matchHostTheme: m,
    setMatchHostTheme: b,
    extractThemeFromHost: x,
    isAutoDetected: E
  };
  return /* @__PURE__ */ O.jsx(rg.Provider, { value: H, children: c });
}, Qm = "https://3fd6-118-103-231-78.ngrok-free.app";
function og() {
  return /* @__PURE__ */ O.jsx(z.StrictMode, { children: /* @__PURE__ */ O.jsx(_m, { children: /* @__PURE__ */ O.jsx(Xm, { children: /* @__PURE__ */ O.jsx(qm, { apiBase: "", tenantId: null, product: {}, children: /* @__PURE__ */ O.jsx(Um, { children: /* @__PURE__ */ O.jsx(Hm, { children: /* @__PURE__ */ O.jsx(Gm, {}) }) }) }) }) }) });
}
function dg({ apiBase: c, tenantId: o, product: r }) {
  return /* @__PURE__ */ O.jsx(z.StrictMode, { children: /* @__PURE__ */ O.jsx(_m, { children: /* @__PURE__ */ O.jsx(Xm, { children: /* @__PURE__ */ O.jsx(qm, { apiBase: c, tenantId: o, product: r || {}, children: /* @__PURE__ */ O.jsx(Um, { children: /* @__PURE__ */ O.jsx(Hm, { children: /* @__PURE__ */ O.jsx(Gm, { apiMode: "shopify" }) }) }) }) }) }) });
}
window.initVirtualTryOn = async (c, o = {}) => {
  const r = document.getElementById(c);
  if (!r) {
    console.error(`[VirtualTryOn] Target element "${c}" not found.`);
    return;
  }
  const { apiBase: f, tenantId: d, product: m } = o, b = f || Qm;
  if (d != null) {
    try {
      const y = new URLSearchParams({ tenantId: String(d) });
      m?.sku && y.set("sku", m.sku), m?.variantId && y.set("productVariantId", m.variantId), m?.productVariantId && y.set("productVariantId", m.productVariantId), m?.handle && y.set("productHandle", m.handle);
      const v = await fetch(
        `${b.replace(/\/$/, "")}/api/vton/validate?${y}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true"
          }
        }
      ).then((_) => _.json());
      if (!v.isValid || !v.isEnabled) {
        r.style.display = "none";
        return;
      }
    } catch (y) {
      console.error("[VirtualTryOn] Validate failed:", y), r.style.display = "none";
      return;
    }
    r.style.display = "";
  }
  const E = Ev.createRoot(r);
  d != null ? E.render(
    /* @__PURE__ */ O.jsx(dg, { apiBase: b, tenantId: d, product: m })
  ) : E.render(/* @__PURE__ */ O.jsx(og, {}));
};
document.addEventListener("DOMContentLoaded", () => {
  const c = document.getElementById("virtual-try-on-widget");
  if (c && !c._vtonInitialized) {
    c._vtonInitialized = !0;
    const r = c.getAttribute("data-api-base") || Qm, f = c.getAttribute("data-tenant-id"), d = {
      handle: c.getAttribute("data-product-handle") || void 0,
      variantId: c.getAttribute("data-variant-id") || void 0,
      sku: c.getAttribute("data-sku") || void 0
    };
    f ? window.initVirtualTryOn("virtual-try-on-widget", { apiBase: r, tenantId: f, product: d }) : window.initVirtualTryOn("virtual-try-on-widget");
  }
});
