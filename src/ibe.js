! function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol
      .toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(i, o, function (t) {
        return e[t]
      }.bind(null, o));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 4)
}([function (e, t, n) {
  "use strict";
  e.exports = n(1)
}, function (e, t, n) {
  t.iframeResizer = n(2), t.iframeResizerContentWindow = n(3)
}, function (e, t, n) {
  var i, o, r;
  ! function (n) {
    "use strict";
    if ("undefined" != typeof window) {
      var a = 0,
        s = !1,
        c = !1,
        u = "message".length,
        d = "[iFrameSizer]",
        l = d.length,
        f = null,
        m = window.requestAnimationFrame,
        g = {
          max: 1,
          scroll: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        },
        p = {},
        h = null,
        y = {
          autoResize: !0,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: !0,
          inPageLinks: !1,
          enablePublicMethods: !0,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          log: !1,
          maxHeight: 1 / 0,
          maxWidth: 1 / 0,
          minHeight: 0,
          minWidth: 0,
          resizeFrom: "parent",
          scrolling: !1,
          sizeHeight: !0,
          sizeWidth: !1,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          closedCallback: function () {},
          initCallback: function () {},
          messageCallback: function () {
            T("MessageCallback function not defined")
          },
          resizedCallback: function () {},
          scrollCallback: function () {
            return !0
          }
        },
        b = {};
      window.jQuery && function (e) {
        e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function (e) {
          return this.filter("iframe").each(function (t, n) {
            W(n, e)
          }).end()
        }) : k("", "Unable to bind to jQuery, it is not fully loaded.")
      }(window.jQuery), o = [], (r = "function" == typeof (i = function () {
        function e(e, n) {
          n && (function () {
            if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
            if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError(
              "Expected <IFRAME> tag, found <" + n.tagName + ">")
          }(), W(n, e), t.push(n))
        }
        var t;
        return function () {
            var e, t = ["moz", "webkit", "o", "ms"];
            for (e = 0; e < t.length && !m; e += 1) m = window[t[e] +
              "RequestAnimationFrame"];
            m || x("setup", "RequestAnimationFrame not supported")
          }(), w(window, "message", M), w(window, "resize", function () {
            q("resize")
          }), w(document, "visibilitychange", D), w(document, "-webkit-visibilitychange",
            D), w(window, "focusin", function () {
            q("focus")
          }), w(window, "focus", function () {
            q("focus")
          }),
          function (i, o) {
            switch (t = [], function (e) {
              e && e.enablePublicMethods && T(
                "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
              )
            }(i), typeof o) {
              case "undefined":
              case "string":
                Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e
                  .bind(n, i));
                break;
              case "object":
                e(i, o);
                break;
              default:
                throw new TypeError("Unexpected data type (" + typeof o + ")")
            }
            return t
          }
      }) ? i.apply(t, o) : i) === n || (e.exports = r)
    }

    function w(e, t, n) {
      "addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e
        .attachEvent("on" + t, n)
    }

    function v(e, t, n) {
      "removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in
        window && e.detachEvent("on" + t, n)
    }

    function E(e) {
      return d + "[" + function (e) {
        var t = "Host page: " + e;
        return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame
          .getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
      }(e) + "]"
    }

    function I(e) {
      return p[e] ? p[e].log : s
    }

    function x(e, t) {
      _("log", e, t, I(e))
    }

    function k(e, t) {
      _("info", e, t, I(e))
    }

    function T(e, t) {
      _("warn", e, t, !0)
    }

    function _(e, t, n, i) {
      !0 === i && "object" == typeof window.console && console[e](E(t), n)
    }

    function M(e) {
      function t() {
        n("Height"), n("Width"), z(function () {
          R(g), N(h), c("resizedCallback", g)
        }, g, "init")
      }

      function n(e) {
        var t = Number(p[h]["max" + e]),
          n = Number(p[h]["min" + e]),
          i = e.toLowerCase(),
          o = Number(g[i]);
        x(h, "Checking " + i + " is in range " + n + "-" + t), o < n && (o = n, x(h, "Set " +
            i + " to min value")), o > t && (o = t, x(h, "Set " + i + " to max value")), g[i] =
          "" + o
      }

      function i(e) {
        return m.substr(m.indexOf(":") + u + e)
      }

      function o(e, t) {
        ! function (e, t, n) {
          b[n] || (b[n] = setTimeout(function () {
            b[n] = null, e()
          }, t))
        }(function () {
          P("Send Page Info", "pageInfo:" + function () {
            var e = document.body.getBoundingClientRect(),
              t = g.iframe.getBoundingClientRect();
            return JSON.stringify({
              iframeHeight: t.height,
              iframeWidth: t.width,
              clientHeight: Math.max(document.documentElement.clientHeight, window
                .innerHeight || 0),
              clientWidth: Math.max(document.documentElement.clientWidth, window
                .innerWidth || 0),
              offsetTop: parseInt(t.top - e.top, 10),
              offsetLeft: parseInt(t.left - e.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset
            })
          }(), e, t)
        }, 32, t)
      }

      function r(e) {
        var t = e.getBoundingClientRect();
        return S(h), {
          x: Math.floor(Number(t.left) + Number(f.x)),
          y: Math.floor(Number(t.top) + Number(f.y))
        }
      }

      function a(e) {
        var t = e ? r(g.iframe) : {
            x: 0,
            y: 0
          },
          n = {
            x: Number(g.width) + t.x,
            y: Number(g.height) + t.y
          };
        x(h, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window
          .top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ?
            "Offset" : "")](n.x, n.y) : T(h,
            "Unable to scroll to requested position, window.parentIFrame not found") : (f = n,
            s(), x(h, "--"))
      }

      function s() {
        !1 !== c("scrollCallback", f) ? N(h) : A()
      }

      function c(e, t) {
        return C(h, e, t)
      }
      var m = e.data,
        g = {},
        h = null;
      "[iFrameResizerChild]Ready" === m ? function () {
        for (var e in p) P("iFrame requested init", L(e), document.getElementById(e), e)
      }() : d === ("" + m).substr(0, l) && m.substr(l).split(":")[0] in p ? (g = function () {
        var e = m.substr(l).split(":");
        return {
          iframe: p[e[0]] && p[e[0]].iframe,
          id: e[0],
          height: e[1],
          width: e[2],
          type: e[3]
        }
      }(), h = g.id, p[h] && (p[h].loaded = !0), ! function () {
        var e = g.type in {
          true: 1,
          false: 1,
          undefined: 1
        };
        return e && x(h, "Ignoring init message from meta parent page"), e
      }() && function (e) {
        var t = !0;
        return p[e] || (t = !1, T(g.type + " No settings for " + e + ". Message was: " +
          m)), t
      }(h) && (x(h, "Received: " + m), function () {
        var e = !0;
        return null === g.iframe && (T(h, "IFrame (" + g.id + ") not found"), e = !1), e
      }() && function () {
        var t = e.origin,
          n = p[h] && p[h].checkOrigin;
        if (n && "" + t != "null" && !(n.constructor === Array ? function () {
            var e = 0,
              i = !1;
            for (x(h, "Checking connection is from allowed list of origins: " + n); e <
              n.length; e++)
              if (n[e] === t) {
                i = !0;
                break
              }
            return i
          }() : function () {
            var e = p[h] && p[h].remoteHost;
            return x(h, "Checking connection is from: " + e), t === e
          }())) throw new Error("Unexpected message received from: " + t + " for " + g
          .iframe.id + ". Message was: " + e.data +
          ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
        );
        return !0
      }() && function () {
        switch (p[h] && p[h].firstRun && p[h] && (p[h].firstRun = !1), g.type) {
          case "close":
            p[h].closeRequestCallback ? C(h, "closeRequestCallback", p[h].iframe) : O(g
              .iframe);
            break;
          case "message":
            ! function (e) {
              x(h, "MessageCallback passed: {iframe: " + g.iframe.id + ", message: " + e +
                "}"), c("messageCallback", {
                iframe: g.iframe,
                message: JSON.parse(e)
              }), x(h, "--")
            }(i(6));
            break;
          case "scrollTo":
            a(!1);
            break;
          case "scrollToOffset":
            a(!0);
            break;
          case "pageInfo":
            o(p[h] && p[h].iframe, h),
              function () {
                function e(e, i) {
                  function r() {
                    p[n] ? o(p[n].iframe, n) : t()
                  } ["scroll", "resize"].forEach(function (t) {
                    x(n, e + t + " listener for sendPageInfo"), i(window, t, r)
                  })
                }

                function t() {
                  e("Remove ", v)
                }
                var n = h;
                e("Add ", w), p[n] && (p[n].stopPageInfo = t)
              }();
            break;
          case "pageInfoStop":
            p[h] && p[h].stopPageInfo && (p[h].stopPageInfo(), delete p[h].stopPageInfo);
            break;
          case "inPageLink":
            ! function (e) {
              var t = e.split("#")[1] || "",
                n = decodeURIComponent(t),
                i = document.getElementById(n) || document.getElementsByName(n)[0];
              i ? function () {
                  var e = r(i);
                  x(h, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y),
                    f = {
                      x: e.x,
                      y: e.y
                    }, s(), x(h, "--")
                }() : window.top !== window.self ? window.parentIFrame ? window
                .parentIFrame.moveToAnchor(t) : x(h, "In page link #" + t +
                  " not found and window.parentIFrame not found") : x(h,
                  "In page link #" + t + " not found")
            }(i(9));
            break;
          case "reset":
            F(g);
            break;
          case "init":
            t(), c("initCallback", g.iframe);
            break;
          default:
            t()
        }
      }())) : k(h, "Ignored: " + m)
    }

    function C(e, t, n) {
      var i = null,
        o = null;
      if (p[e]) {
        if ("function" != typeof (i = p[e][t])) throw new TypeError(t + " on iFrame[" + e +
          "] is not a function");
        o = i(n)
      }
      return o
    }

    function O(e) {
      var t = e.id;
      x(t, "Removing iFrame: " + t), e.parentNode && e.parentNode.removeChild(e), C(t,
        "closedCallback", t), x(t, "--"), delete p[t]
    }

    function S(e) {
      null === f && x(e, "Get page position: " + (f = {
        x: window.pageXOffset !== n ? window.pageXOffset : document.documentElement
          .scrollLeft,
        y: window.pageYOffset !== n ? window.pageYOffset : document.documentElement
          .scrollTop
      }).x + "," + f.y)
    }

    function N(e) {
      null !== f && (window.scrollTo(f.x, f.y), x(e, "Set page position: " + f.x + "," + f.y),
        A())
    }

    function A() {
      f = null
    }

    function F(e) {
      x(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), S(e
        .id), z(function () {
        R(e), P("reset", "reset", e.iframe, e.id)
      }, e, "reset")
    }

    function R(e) {
      function t(t) {
        c || "0" !== e[t] || (c = !0, x(i,
          "Hidden iFrame detected, creating visibility listener"), function () {
          function e() {
            function e(e) {
              function t(t) {
                return "0px" === (p[e] && p[e].iframe.style[t])
              }
              p[e] && function (e) {
                return null !== e.offsetParent
              }(p[e].iframe) && (t("height") || t("width")) && P("Visibility change",
                "resize", p[e].iframe, e)
            }
            for (var t in p) e(t)
          }

          function t(t) {
            x("window", "Mutation observed: " + t[0].target + " " + t[0].type), B(e, 16)
          }
          var n = window.MutationObserver || window.WebKitMutationObserver;
          n && function () {
            var e = document.querySelector("body");
            new n(t).observe(e, {
              attributes: !0,
              attributeOldValue: !1,
              characterData: !0,
              characterDataOldValue: !1,
              childList: !0,
              subtree: !0
            })
          }()
        }())
      }

      function n(n) {
        ! function (t) {
          e.iframe.style[t] = e[t] + "px", x(e.id, "IFrame (" + i + ") " + t + " set to " + e[
            t] + "px")
        }(n), t(n)
      }
      var i = e.iframe.id;
      p[i] && (p[i].sizeHeight && n("height"), p[i].sizeWidth && n("width"))
    }

    function z(e, t, n) {
      n !== t.type && m ? (x(t.id, "Requesting animation frame"), m(e)) : e()
    }

    function P(e, t, n, i, o) {
      var r = !1;
      i = i || n.id, p[i] && (n && "contentWindow" in n && null !== n.contentWindow ?
        function () {
          var o = p[i] && p[i].targetOrigin;
          x(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + o),
            n.contentWindow.postMessage(d + t, o)
        }() : T(i, "[" + e + "] IFrame(" + i + ") not found"), o && p[i] && p[i]
        .warningTimeout && (p[i].msgTimeout = setTimeout(function () {
          !p[i] || p[i].loaded || r || (r = !0, T(i, "IFrame has not responded within " +
            p[i].warningTimeout / 1e3 +
            " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
          ))
        }, p[i].warningTimeout)))
    }

    function L(e) {
      return e + ":" + p[e].bodyMarginV1 + ":" + p[e].sizeWidth + ":" + p[e].log + ":" + p[e]
        .interval + ":" + p[e].enablePublicMethods + ":" + p[e].autoResize + ":" + p[e]
        .bodyMargin + ":" + p[e].heightCalculationMethod + ":" + p[e].bodyBackground + ":" + p[
          e].bodyPadding + ":" + p[e].tolerance + ":" + p[e].inPageLinks + ":" + p[e]
        .resizeFrom + ":" + p[e].widthCalculationMethod
    }

    function W(e, t) {
      var i = function (n) {
        return n, "" === n && (e.id = n = function () {
          var e = t && t.id || y.id + a++;
          return null !== document.getElementById(e) && (e += a++), e
        }(), s = (t || {}).log, n, x(n, "Added missing iframe ID: " + n + " (" + e.src +
          ")")), n
      }(e.id);
      i in p && "iFrameResizer" in e ? T(i, "Ignored iFrame, already setup.") : (! function (
          t) {
          t = t || {}, p[i] = {
              firstRun: !0,
              iframe: e,
              remoteHost: e.src.split("/").slice(0, 3).join("/")
            },
            function (e) {
              if ("object" != typeof e) throw new TypeError("Options is not an object")
            }(t),
            function (e) {
              for (var t in y) y.hasOwnProperty(t) && (p[i][t] = e.hasOwnProperty(t) ? e[t] :
                y[t])
            }(t), p[i] && (p[i].targetOrigin = !0 === p[i].checkOrigin ? function (e) {
              return "" === e || "file://" === e ? "*" : e
            }(p[i].remoteHost) : "*")
        }(t), function () {
          switch (x(i, "IFrame scrolling " + (p[i] && p[i].scrolling ? "enabled" :
              "disabled") + " for " + i), e.style.overflow = !1 === (p[i] && p[i].scrolling) ?
            "hidden" : "auto", p[i] && p[i].scrolling) {
            case !0:
              e.scrolling = "yes";
              break;
            case !1:
              e.scrolling = "no";
              break;
            default:
              e.scrolling = p[i] ? p[i].scrolling : "no"
          }
        }(), function () {
          function t(t) {
            1 / 0 !== p[i][t] && 0 !== p[i][t] && (e.style[t] = p[i][t] + "px", x(i, "Set " +
              t + " = " + p[i][t] + "px"))
          }

          function n(e) {
            if (p[i]["min" + e] > p[i]["max" + e]) throw new Error("Value for min" + e +
              " can not be greater than max" + e)
          }
          n("Height"), n("Width"), t("maxHeight"), t("minHeight"), t("maxWidth"), t(
            "minWidth")
        }(), "number" != typeof (p[i] && p[i].bodyMargin) && "0" !== (p[i] && p[i]
          .bodyMargin) || (p[i].bodyMarginV1 = p[i].bodyMargin, p[i].bodyMargin = p[i]
          .bodyMargin + "px"),
        function (t) {
          w(e, "load", function () {
            P("iFrame.onload", t, e, n, !0),
              function () {
                var t = p[i] && p[i].firstRun,
                  n = p[i] && p[i].heightCalculationMethod in g;
                !t && n && F({
                  iframe: e,
                  height: 0,
                  width: 0,
                  type: "init"
                })
              }()
          }), P("init", t, e, n, !0)
        }(L(i)), Function.prototype.bind && p[i] && (p[i].iframe.iFrameResizer = {
          close: O.bind(null, p[i].iframe),
          resize: P.bind(null, "Window resize", "resize", p[i].iframe),
          moveToAnchor: function (e) {
            P("Move to anchor", "moveToAnchor:" + e, p[i].iframe, i)
          },
          sendMessage: function (e) {
            P("Send Message", "message:" + (e = JSON.stringify(e)), p[i].iframe, i)
          }
        }))
    }

    function B(e, t) {
      null === h && (h = setTimeout(function () {
        h = null, e()
      }, t))
    }

    function q(e) {
      x("window", "Trigger event: " + e), B(function () {
        H("Window " + e, "resize")
      }, 16)
    }

    function D() {
      "hidden" !== document.visibilityState && (x("document",
        "Trigger event: Visiblity change"), B(function () {
        H("Tab Visable", "resize")
      }, 16))
    }

    function H(e, t) {
      function n(e) {
        return p[e] && "parent" === p[e].resizeFrom && p[e].autoResize && !p[e].firstRun
      }
      for (var i in p) n(i) && P(e, t, document.getElementById(i), i)
    }
  }()
}, function (e, t) {
  ! function (t) {
    "use strict";
    if ("undefined" != typeof window) {
      var n = !0,
        i = 10,
        o = "",
        r = 0,
        a = "",
        s = null,
        c = "",
        u = !1,
        d = {
          resize: 1,
          click: 1
        },
        l = 128,
        f = !0,
        m = 1,
        g = "bodyOffset",
        p = g,
        h = !0,
        y = "",
        b = {},
        w = 32,
        v = null,
        E = !1,
        I = "[iFrameSizer]",
        x = I.length,
        k = "",
        T = {
          max: 1,
          min: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        },
        _ = "child",
        M = !0,
        C = window.parent,
        O = "*",
        S = 0,
        N = !1,
        A = null,
        F = 16,
        R = 1,
        z = "scroll",
        P = z,
        L = window,
        W = function () {
          $("MessageCallback function not defined")
        },
        B = function () {},
        q = function () {},
        D = {
          height: function () {
            return $("Custom height calculation function not defined"), document
              .documentElement.offsetHeight
          },
          width: function () {
            return $("Custom width calculation function not defined"), document.body
              .scrollWidth
          }
        },
        H = {},
        U = Date.now || function () {
          return (new Date).getTime()
        },
        j = {
          bodyOffset: function () {
            return document.body.offsetHeight + ue("marginTop") + ue("marginBottom")
          },
          offset: function () {
            return j.bodyOffset()
          },
          bodyScroll: function () {
            return document.body.scrollHeight
          },
          custom: function () {
            return D.height()
          },
          documentElementOffset: function () {
            return document.documentElement.offsetHeight
          },
          documentElementScroll: function () {
            return document.documentElement.scrollHeight
          },
          max: function () {
            return Math.max.apply(null, le(j))
          },
          min: function () {
            return Math.min.apply(null, le(j))
          },
          grow: function () {
            return j.max()
          },
          lowestElement: function () {
            return Math.max(j.bodyOffset() || j.documentElementOffset(), de("bottom", me()))
          },
          taggedElement: function () {
            return fe("bottom", "data-iframe-height")
          }
        },
        V = {
          bodyScroll: function () {
            return document.body.scrollWidth
          },
          bodyOffset: function () {
            return document.body.offsetWidth
          },
          custom: function () {
            return D.width()
          },
          documentElementScroll: function () {
            return document.documentElement.scrollWidth
          },
          documentElementOffset: function () {
            return document.documentElement.offsetWidth
          },
          scroll: function () {
            return Math.max(V.bodyScroll(), V.documentElementScroll())
          },
          max: function () {
            return Math.max.apply(null, le(V))
          },
          min: function () {
            return Math.min.apply(null, le(V))
          },
          rightMostElement: function () {
            return de("right", me())
          },
          taggedElement: function () {
            return fe("right", "data-iframe-width")
          }
        },
        G = function (e) {
          var t, n, i, o = null,
            r = 0,
            a = function () {
              r = U(), o = null, i = e.apply(t, n), o || (t = n = null)
            };
          return function () {
            var s = U();
            r || (r = s);
            var c = F - (s - r);
            return t = this, n = arguments, c <= 0 || c > F ? (o && (clearTimeout(o), o =
              null), r = s, i = e.apply(t, n), o || (t = n = null)) : o || (o = setTimeout(
              a, c)), i
          }
        }(ge);
      J(window, "message", ve), "loading" !== document.readyState && window.parent.postMessage(
        "[iFrameResizerChild]Ready", "*")
    }

    function J(e, t, n) {
      "addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e
        .attachEvent("on" + t, n)
    }

    function X(e, t, n) {
      "removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in
        window && e.detachEvent("on" + t, n)
    }

    function Q(e) {
      return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function Y(e) {
      return I + "[" + k + "] " + e
    }

    function K(e) {
      E && "object" == typeof window.console && console.log(Y(e))
    }

    function $(e) {
      "object" == typeof window.console && console.warn(Y(e))
    }

    function Z() {
      ! function () {
        function e(e) {
          return "true" === e
        }
        var i = y.substr(x).split(":");
        k = i[0], r = t !== i[1] ? Number(i[1]) : r, u = t !== i[2] ? e(i[2]) : u, E = t !== i[
            3] ? e(i[3]) : E, w = t !== i[4] ? Number(i[4]) : w, n = t !== i[6] ? e(i[6]) : n,
          a = i[7], p = t !== i[8] ? i[8] : p, o = i[9], c = i[10], S = t !== i[11] ? Number(i[
            11]) : S, b.enable = t !== i[12] && e(i[12]), _ = t !== i[13] ? i[13] : _, P = t !==
          i[14] ? i[14] : P
      }(), K("Initialising iFrame (" + location.href + ")"),
        function () {
          function e(e, t) {
            return "function" == typeof e && (K("Setup custom " + t + "CalcMethod"), D[t] = e,
              e = "custom"), e
          }
          "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (!
            function () {
              var e = window.iFrameResizer;
              K("Reading data from page: " + JSON.stringify(e)), W = "messageCallback" in e ?
                e.messageCallback : W, B = "readyCallback" in e ? e.readyCallback : B, O =
                "targetOrigin" in e ? e.targetOrigin : O, p = "heightCalculationMethod" in e ?
                e.heightCalculationMethod : p, P = "widthCalculationMethod" in e ? e
                .widthCalculationMethod : P
            }(), p = e(p, "height"), P = e(P, "width"));
          K("TargetOrigin for parent set to: " + O)
        }(),
        function () {
          t === a && (a = r + "px");
          ee("margin", function (e, t) {
            -1 !== t.indexOf("-") && ($("Negative CSS value ignored for " + e), t = "");
            return t
          }("margin", a))
        }(), ee("background", o), ee("padding", c),
        function () {
          var e = document.createElement("div");
          e.style.clear = "both", e.style.display = "block", document.body.appendChild(e)
        }(), oe(), re(), document.documentElement.style.height = "", document.body.style
        .height = "", K('HTML & body height set to "auto"'), K("Enable public methods"), L
        .parentIFrame = {
          autoResize: function (e) {
            return !0 === e && !1 === n ? (n = !0, ae()) : !1 === e && !0 === n && (n = !1,
              se()), n
          },
          close: function () {
            we(0, 0, "close"), K("Disable outgoing messages"), M = !1, K(
              "Remove event listener: Message"), X(window, "message", ve), !0 === n && se()
          },
          getId: function () {
            return k
          },
          getPageInfo: function (e) {
            "function" == typeof e ? (q = e, we(0, 0, "pageInfo")) : (q = function () {}, we(
              0, 0, "pageInfoStop"))
          },
          moveToAnchor: function (e) {
            b.findTarget(e)
          },
          reset: function () {
            be("parentIFrame.reset")
          },
          scrollTo: function (e, t) {
            we(t, e, "scrollTo")
          },
          scrollToOffset: function (e, t) {
            we(t, e, "scrollToOffset")
          },
          sendMessage: function (e, t) {
            we(0, 0, "message", JSON.stringify(e), t)
          },
          setHeightCalculationMethod: function (e) {
            p = e, oe()
          },
          setWidthCalculationMethod: function (e) {
            P = e, re()
          },
          setTargetOrigin: function (e) {
            K("Set targetOrigin: " + e), O = e
          },
          size: function (e, t) {
            var n = (e || "") + (t ? "," + t : "");
            pe("size", "parentIFrame.size(" + n + ")", e, t)
          }
        }, ae(), b = function () {
          function e(e) {
            var n = e.getBoundingClientRect(),
              i = {
                x: window.pageXOffset !== t ? window.pageXOffset : document.documentElement
                  .scrollLeft,
                y: window.pageYOffset !== t ? window.pageYOffset : document.documentElement
                  .scrollTop
              };
            return {
              x: parseInt(n.left, 10) + parseInt(i.x, 10),
              y: parseInt(n.top, 10) + parseInt(i.y, 10)
            }
          }

          function n(n) {
            var i = n.split("#")[1] || n,
              o = decodeURIComponent(i),
              r = document.getElementById(o) || document.getElementsByName(o)[0];
            t !== r ? function (t) {
              var n = e(t);
              K("Moving to in page link (#" + i + ") at x: " + n.x + " y: " + n.y), we(n.y, n
                .x, "scrollToOffset")
            }(r) : (K("In page link (#" + i + ") not found in iFrame, so sending to parent"),
              we(0, 0, "inPageLink", "#" + i))
          }

          function i() {
            "" !== location.hash && "#" !== location.hash && n(location.href)
          }
          b.enable ? Array.prototype.forEach && document.querySelectorAll ? (K(
            "Setting up location.hash handlers"), Array.prototype.forEach.call(document
            .querySelectorAll('a[href^="#"]'),
            function (e) {
              "#" !== e.getAttribute("href") && J(e, "click", function (e) {
                e.preventDefault(), n(this.getAttribute("href"))
              })
            }), J(window, "hashchange", i), setTimeout(i, l)) : $(
            "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
          ) : K("In page linking not enabled");
          return {
            findTarget: n
          }
        }(), pe("init", "Init message from host page"), B()
    }

    function ee(e, n) {
      t !== n && "" !== n && "null" !== n && (document.body.style[e] = n, K("Body " + e +
        ' set to "' + n + '"'))
    }

    function te(e) {
      var t = {
        add: function (t) {
          function n() {
            pe(e.eventName, e.eventType)
          }
          H[t] = n, J(window, t, n)
        },
        remove: function (e) {
          var t = H[e];
          delete H[e], X(window, e, t)
        }
      };
      e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(t[e
        .method])) : t[e.method](e.eventName), K(Q(e.method) + " event listener: " + e
        .eventType)
    }

    function ne(e) {
      te({
        method: e,
        eventType: "Animation Start",
        eventNames: ["animationstart", "webkitAnimationStart"]
      }), te({
        method: e,
        eventType: "Animation Iteration",
        eventNames: ["animationiteration", "webkitAnimationIteration"]
      }), te({
        method: e,
        eventType: "Animation End",
        eventNames: ["animationend", "webkitAnimationEnd"]
      }), te({
        method: e,
        eventType: "Input",
        eventName: "input"
      }), te({
        method: e,
        eventType: "Mouse Up",
        eventName: "mouseup"
      }), te({
        method: e,
        eventType: "Mouse Down",
        eventName: "mousedown"
      }), te({
        method: e,
        eventType: "Orientation Change",
        eventName: "orientationchange"
      }), te({
        method: e,
        eventType: "Print",
        eventName: ["afterprint", "beforeprint"]
      }), te({
        method: e,
        eventType: "Ready State Change",
        eventName: "readystatechange"
      }), te({
        method: e,
        eventType: "Touch Start",
        eventName: "touchstart"
      }), te({
        method: e,
        eventType: "Touch End",
        eventName: "touchend"
      }), te({
        method: e,
        eventType: "Touch Cancel",
        eventName: "touchcancel"
      }), te({
        method: e,
        eventType: "Transition Start",
        eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart",
          "oTransitionStart", "otransitionstart"
        ]
      }), te({
        method: e,
        eventType: "Transition Iteration",
        eventNames: ["transitioniteration", "webkitTransitionIteration",
          "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"
        ]
      }), te({
        method: e,
        eventType: "Transition End",
        eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd",
          "oTransitionEnd", "otransitionend"
        ]
      }), "child" === _ && te({
        method: e,
        eventType: "IFrame Resized",
        eventName: "resize"
      })
    }

    function ie(e, t, n, i) {
      return t !== e && (e in n || ($(e + " is not a valid option for " + i +
        "CalculationMethod."), e = t), K(i + ' calculation method set to "' + e + '"')), e
    }

    function oe() {
      p = ie(p, g, j, "height")
    }

    function re() {
      P = ie(P, z, V, "width")
    }

    function ae() {
      !0 === n ? (ne("add"), function () {
        var e = 0 > w;
        window.MutationObserver || window.WebKitMutationObserver ? e ? ce() : s =
          function () {
            function e(e) {
              function t(e) {
                !1 === e.complete && (K("Attach listeners to " + e.src), e.addEventListener(
                  "load", o, !1), e.addEventListener("error", r, !1), s.push(e))
              }
              "attributes" === e.type && "src" === e.attributeName ? t(e.target) :
                "childList" === e.type && Array.prototype.forEach.call(e.target
                  .querySelectorAll("img"), t)
            }

            function n(e) {
              K("Remove listeners from " + e.src), e.removeEventListener("load", o, !1), e
                .removeEventListener("error", r, !1),
                function (e) {
                  s.splice(s.indexOf(e), 1)
                }(e)
            }

            function i(e, i, o) {
              n(e.target), pe(i, o + ": " + e.target.src, t, t)
            }

            function o(e) {
              i(e, "imageLoad", "Image loaded")
            }

            function r(e) {
              i(e, "imageLoadFailed", "Image load failed")
            }

            function a(t) {
              pe("mutationObserver", "mutationObserver: " + t[0].target + " " + t[0].type),
                t.forEach(e)
            }
            var s = [],
              c = window.MutationObserver || window.WebKitMutationObserver,
              u = function () {
                var e = document.querySelector("body");
                return u = new c(a), K("Create body MutationObserver"), u.observe(e, {
                  attributes: !0,
                  attributeOldValue: !1,
                  characterData: !0,
                  characterDataOldValue: !1,
                  childList: !0,
                  subtree: !0
                }), u
              }();
            return {
              disconnect: function () {
                "disconnect" in u && (K("Disconnect body MutationObserver"), u
                  .disconnect(), s.forEach(n))
              }
            }
          }() : (K("MutationObserver not supported in this browser!"), ce())
      }()) : K("Auto Resize disabled")
    }

    function se() {
      ne("remove"), null !== s && s.disconnect(), clearInterval(v)
    }

    function ce() {
      0 !== w && (K("setInterval: " + w + "ms"), v = setInterval(function () {
        pe("interval", "setInterval: " + w)
      }, Math.abs(w)))
    }

    function ue(e, t) {
      var n = 0;
      return t = t || document.body, n = "defaultView" in document && "getComputedStyle" in
        document.defaultView ? null !== (n = document.defaultView.getComputedStyle(t, null)) ?
        n[e] : 0 : function (e) {
          if (/^\d+(px)?$/i.test(e)) return parseInt(e, i);
          var n = t.style.left,
            o = t.runtimeStyle.left;
          return t.runtimeStyle.left = t.currentStyle.left, t.style.left = e || 0, e = t.style
            .pixelLeft, t.style.left = n, t.runtimeStyle.left = o, e
        }(t.currentStyle[e]), parseInt(n, i)
    }

    function de(e, t) {
      for (var n = t.length, i = 0, o = 0, r = Q(e), a = U(), s = 0; s < n; s++)(i = t[s]
        .getBoundingClientRect()[e] + ue("margin" + r, t[s])) > o && (o = i);
      return a = U() - a, K("Parsed " + n + " HTML elements"), K(
          "Element position calculated in " + a + "ms"),
        function (e) {
          e > F / 2 && K("Event throttle increased to " + (F = 2 * e) + "ms")
        }(a), o
    }

    function le(e) {
      return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e
        .documentElementScroll()
      ]
    }

    function fe(e, t) {
      var n = document.querySelectorAll("[" + t + "]");
      return 0 === n.length && ($("No tagged elements (" + t + ") found on page"), document
        .querySelectorAll("body *")), de(e, n)
    }

    function me() {
      return document.querySelectorAll("body *")
    }

    function ge(e, n, i, o) {
      var r, a;
      ! function () {
        function e(e, t) {
          return !(Math.abs(e - t) <= S)
        }
        return r = t !== i ? i : j[p](), a = t !== o ? o : V[P](), e(m, r) || u && e(R, a)
      }() && "init" !== e ? e in {
        init: 1,
        interval: 1,
        size: 1
      } || !(p in T || u && P in T) ? e in {
        interval: 1
      } || K("No change in size detected") : be(n) : (he(), we(m = r, R = a, e))
    }

    function pe(e, t, n, i) {
      N && e in d ? K("Trigger event cancelled: " + e) : (e in {
        reset: 1,
        resetPage: 1,
        init: 1
      } || K("Trigger event: " + t), "init" === e ? ge(e, t, n, i) : G(e, t, n, i))
    }

    function he() {
      N || (N = !0, K("Trigger event lock on")), clearTimeout(A), A = setTimeout(function () {
        N = !1, K("Trigger event lock off"), K("--")
      }, l)
    }

    function ye(e) {
      m = j[p](), R = V[P](), we(m, R, e)
    }

    function be(e) {
      var t = p;
      p = g, K("Reset trigger event: " + e), he(), ye("reset"), p = t
    }

    function we(e, n, i, o, r) {
      !0 === M && (t === r ? r = O : K("Message targetOrigin: " + r), function () {
        var a = k + ":" + e + ":" + n + ":" + i + (t !== o ? ":" + o : "");
        K("Sending message to host page (" + a + ")"), C.postMessage(I + a, r)
      }())
    }

    function ve(t) {
      var n = {
        init: function () {
          "interactive" === document.readyState || "complete" === document.readyState ? (y =
            t.data, C = t.source, Z(), f = !1, setTimeout(function () {
              h = !1
            }, l)) : (K("Waiting for page ready"), J(window, "readystatechange", n
            .initFromParent))
        },
        reset: function () {
          h ? K("Page reset ignored by init") : (K("Page size reset by host page"), ye(
            "resetPage"))
        },
        resize: function () {
          pe("resizeParent", "Parent window requested size check")
        },
        moveToAnchor: function () {
          b.findTarget(o())
        },
        inPageLink: function () {
          this.moveToAnchor()
        },
        pageInfo: function () {
          var e = o();
          K("PageInfoFromParent called from parent: " + e), q(JSON.parse(e)), K(" --")
        },
        message: function () {
          var e = o();
          K("MessageCallback called from parent: " + e), W(JSON.parse(e)), K(" --")
        }
      };

      function i() {
        return t.data.split("]")[1].split(":")[0]
      }

      function o() {
        return t.data.substr(t.data.indexOf(":") + 1)
      }

      function r() {
        return t.data.split(":")[2] in {
          true: 1,
          false: 1
        }
      }

      function a() {
        var o = i();
        o in n ? n[o]() : (void 0 === e || !e.exports) && "iFrameResize" in window || r() || $(
          "Unexpected message (" + t.data + ")")
      }
      I === ("" + t.data).substr(0, x) && (!1 === f ? a() : r() ? n.init() : K(
        'Ignored message of type "' + i() + '". Received before initialization.'))
    }
  }()
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var i = n(0),
    o = n.n(i);
  ! function () {
    var e = {
      settings: {
        version: .96,
        container: "ibe",
        debug: !1,
        region: "apac",
        region_subdomain: {
          emea: "app",
          apac: "app-apac"
        },
        domain: "thebookingbutton.com",
        property_customdomain: !1,
        templates: {
          property: "https://{region_subdomain}.{domain}/{clientid}properties/{channelcode}",
          property_customdomain: "https://{property_customdomain}/{clientid}properties/{channelcode}",
          widgets: {
            ga_proxy: "https://{region_subdomain}.{domain}/{clientid}/ga_proxy",
            ga_proxy_customdomain: "https://{property_customdomain}/{clientid}/ga_proxy",
            property_check_availability: "https://{region_subdomain}.{domain}/properties/{channelcode}/booking_widget",
            property_check_availability_customdomain: "https://{property_customdomain}/properties/{channelcode}/booking_widget",
            property_grid: "https://{region_subdomain}.{domain}/properties/{channelcode}/widget?number_of_days=14",
            property_grid_customdomain: "https://{property_customdomain}/properties/{channelcode}/widget?number_of_days=14"
          }
        },
        ga_active: !0 == ("undefined" != typeof ga || "undefined" != typeof dataLayer),
        ga_classname: "ibe_decorate",
        query: [],
        postmessage_domains: [],
        allowed_query_vars: ["check_in_date", "check_out_date", "number_nights",
          "number_adults", "number_children", "number_infants", "promo_code", "campaign",
          "locale", "currency", "room_type", "room_rate", "rate_plan"
        ],
        mobile_fullscreen: "true"
      },
      getElements: function (e) {
        if (document.getElementsByClassName) return document.getElementsByClassName(e);
        var t = [],
          n = document.getElementsByTagName("*");
        for (var i in n)
          if (n[i].className && -1 !== n[i].className.indexOf(e)) {
            var o = n[i].className.split(" ");
            for (var r in o)
              if (o[r] == e) {
                t.push(n[i]);
                break
              }
          }
        return t
      },
      getDataAttributes: function (e) {
        for (var t = {
            query: []
          }, n = e.attributes, i = n.length, o = 0; o < i; o++) 2 === n.item(o).nodeType &&
          0 === n.item(o).name.indexOf("data-") && n.item(o).value.length && (0 === n.item(
            o).name.indexOf("data-query-") ? t.query.push(n.item(o).name.substr(11)
            .toLowerCase() + "=" + escape(n.item(o).value)) : t[n.item(o).name.substr(5)
            .toLowerCase()] = n.item(o).value);
        return t
      },
      getUrlParameters: function (e) {
        var t = document.location.href.split("?")[1];
        if (t && t.length) {
          var n = t.split("&");
          for (var i in n) {
            var o = n[i].split("=");
            this.settings.allowed_query_vars.indexOf(o[0]) >= 0 && o[1].length && e.push(n[
              i])
          }
        }
        return e
      },
      extend: function (e, t) {
        var n = {};
        for (var i in e) n[i] = e[i];
        for (var i in t) n[i] = t[i];
        return n
      },
      getLinker: function (e) {
        return e ? e.get("linkerParam") : ga.getAll()[0].get("linkerParam")
      },
      decorate: function (t) {
        var n = e.getLinker(t),
          i = e.getElements(e.settings.ga_classname);
        for (var o in i) {
          var r = i[o];
          if (r.getAttribute && r.getAttribute("data-dst")) {
            if ("IFRAME" === r.tagName) r.setAttribute("src", e.getDecoratedURL(r, n));
            else if ("FORM" === r.tagName) {
              r.action = r.getAttribute("data-dst");
              var a = n.split("&");
              for (var o in a) {
                var s = a[o].split("="),
                  c = document.createElement("input");
                c.setAttribute("name", s[0]), c.setAttribute("value", s[1]), c.setAttribute(
                    "type", "hidden"), c.name = s[0], c.value = s[1], c.type = "hidden", r
                  .appendChild(c)
              }
            } else r.setAttribute("href", e.getDecoratedURL(r, n));
            r.removeAttribute("data-dst")
          }
        }
      },
      getQuerySeparatorForUrl: function (e) {
        return e.indexOf("?") > 0 ? "&" : "?"
      },
      getDecoratedURL: function (t, n) {
        var i = t.getAttribute("data-dst");
        return i + e.getQuerySeparatorForUrl(i) + n
      },
      getPropertyUrl: function (t, n) {
        return t.channelcode || (e.debug("IBE: No Property Channelcode found!"),
            "#error-no-channelcode-found"), (!1 !== n && e.settings.templates.widgets[n] ? !
            1 !== t.property_customdomain ? e.settings.templates.widgets[n +
              "_customdomain"].replace("{property_customdomain}", t.property_customdomain) :
            e.settings.templates.widgets[n].replace("{region_subdomain}", t
              .region_subdomain[t.region]).replace("{domain}", t.domain) : !1 !== t
            .property_customdomain ? e.settings.templates.property_customdomain.replace(
              "{property_customdomain}", t.property_customdomain) : e.settings.templates
            .property.replace("{region_subdomain}", t.region_subdomain[t.region]).replace(
              "{domain}", t.domain)).replace("{channelcode}", escape(t.channelcode))
          .replace("{clientid}", e.formatClientId(t)) + (t.query.length > 0 ? "?" + t.query
            .join("&") : "")
      },
      formatClientId: function (e) {
        return e.clientid ? escape(e.clientid) + "/" : ""
      },
      decorate_debug: function (t) {
        var n = t ? t.get("trackingId") : ga.getAll()[0].get("trackingId"),
          i = e.getElements(e.settings.ga_classname);
        e.debug("IBE: Decorating " + i.length +
          ' Links, Forms or Frames with cross-domain tracking for Google Analytics Client ID "' +
          n + '"')
      },
      debug: function (t) {
        e.settings.debug && console.log(t)
      },
      backwardCompatibleWidgetGA: function (t) {
        this.settings.ga_active && !document.getElementById("ga_proxy_" + t.channelcode) &&
          (t.clientid ? (e.debug(
              'IBE: Creating Proxy Frame for cross-domain tracking for clientID "' + t
              .clientid + '"'), f = document.createElement("iframe"), f.style.display =
            "none", f.style.width = "1px", f.style.height = "1px", f.style.overflow =
            "hidden", f.setAttribute("data-dst", this.getPropertyUrl(this.extend(this
              .settings, t), "ga_proxy")), f.className += " " + this.settings
            .ga_classname, f.id = "ga_proxy_" + t.channelcode, document.body.appendChild(
              f)) : e.debug(
            "IBE: Cross-domain Tracking requires a clientID to be set up"))
      },
      go: function () {
        this.settings = this.extend(this.settings, this.getDataAttributes(document.body)),
          this.debug("IBE: Initiating IBE.JS Version " + this.settings.version);
        var t = this.getElements(this.settings.container),
          n = t.length;
        this.debug("IBE: Found " + n + ' Elements with class name "' + this.settings
          .container + '":', t);
        for (var i = !1, r = 0; r < n; r++)
          if ("DIV" === t[r].tagName) {
            var a = this.getDataAttributes(t[r]);
            if (a.query = this.getUrlParameters(a.query), "property_check_availability" == a
              .widget.toLowerCase()) this.debug(
                "IBE: Creating Property check availability widget"), (s = document
                .createElement("iframe")).style.border = "none", s.style.width = "250px", s
              .style.height = "200px", s.style.overflow = "hidden", s.setAttribute("src",
                this.getPropertyUrl(this.extend(this.settings, a),
                  "property_check_availability")), t[r].appendChild(s), this
              .backwardCompatibleWidgetGA(this.extend(this.settings, a));
            else if ("property_grid" == a.widget.toLowerCase()) {
              this.debug("IBE: Creating Property Availability Grid widget"), (s = document
                  .createElement("iframe")).style.border = "none", s.style.width = "100%", s
                .style.minWidth = "800px", s.style.height = (a.height || 500) + "px", s
                .style.overflowX = "hidden", s.setAttribute("src", this.getPropertyUrl(this
                  .extend(this.settings, a), "property_grid")), t[r].appendChild(s), this
                .backwardCompatibleWidgetGA(this.extend(this.settings, a))
            } else if ("embed" == a.widget.toLowerCase()) {
              var s;
              if ((s = document.createElement("iframe")).className = this.settings
                .container, s.style.border = "none", s.style.width = "100%", screen.width <
                768 && "true" === this.settings.mobile_fullscreen) {
                this.debug("IBE: Creating embedded widget: Mobile Version");
                var c = document.createElement("meta");
                c.name = "viewport", c.content =
                  "initial-scale=1, maximum-scale=1, minimum-scale=1", document
                  .getElementsByTagName("head")[0].appendChild(c), s.style.width = "100%", s
                  .style.height = "100%", s.style.position = "absolute", s.style.left = 0, s
                  .style.right = 0, s.style.top = 0, s.style.zIndex = 1e3, document.body
                  .style.padding = 0, document.body.style.margin = 0, document.body.style
                  .overflow = "hidden"
              } else this.debug("IBE: Creating embedded widget: Desktop Version"), a.query
                .push("skin=0"), this.debug("LOL"), s.setAttribute("scrolling", "no"), s
                .style.overflow = "hidden", s.style.height = "900px", s.style.minWidth =
                "768px", s.style.maxWidth = "995px", s.style.borderRadius = "3px", window
                .postMessage && (s.style.height = "200px", s.style.overflow = "hidden", s
                  .className += " " + this.settings.container + "fr"), i = !0;
              if (s.setAttribute(this.settings.ga_active ? "data-dst" : "src", this
                  .getPropertyUrl(this.extend(this.settings, a), !1)), this.settings
                .ga_active && (s.className += " " + this.settings.ga_classname), screen
                .width < 768 && "true" === this.settings.mobile_fullscreen) {
                var u = document.body.childNodes;
                for (n = u.length, r = 0; r < n; r++) 1 == u[r].nodeType && "SCRIPT" !== u[
                  r].tagName && (u[r].style.display = "none");
                document.body.appendChild(s)
              } else t[r].appendChild(s);
              i && window.postMessage && o.a.iframeResizer({
                log: !1,
                checkOrigin: !1
              }, "." + this.settings.container + "fr");
              break
            }
          } else t[r].setAttribute(this.settings.ga_active ? "data-dst" : "FORM" === t[r]
            .tagName ? "action" : "href", this.getPropertyUrl(this.extend(this.settings,
              this.getDataAttributes(t[r])), !1)), this.settings.ga_active && (t[r]
            .className += " " + this.settings.ga_classname);
        return this.settings.ga_active ? "undefined" != typeof ga ? (ga(e.decorate), this
          .settings.debug && (console.log("IBE: Google Analytics found"), ga(e
            .decorate_debug))) : "undefined" != typeof dataLayer && (dataLayer.push(
          function () {
            "undefined" != typeof ga && ga(e.decorate)
          }), this.settings.debug && (console.log("IBE: Google Tag Manager found"),
          dataLayer.push(function () {
            "undefined" != typeof ga && ga(e.decorate_debug)
          }))) : this.debug(
          "IBE: No Google Analytics or Tag Manager found: Ensure Analytics or GTM scripts are placed before ibe.js"
        ), this
      }
    };
    e.go()
  }()
}]);
