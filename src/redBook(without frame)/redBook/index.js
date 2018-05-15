!(function(e) {
  function t(r) {
    if (o[r]) return o[r].exports;
    var n = (o[r] = { exports: {}, id: r, loaded: !1 });
    return e[r].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
  }
  var o = {};
  return (t.m = e), (t.c = o), (t.p = "/"), t(0);
})({
  0: function(e, t, o) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n() {
      var e = (0, u.getConfigFromScriptTag)();
      if (
        ((window.owl = (0, s.default)()),
        (window.owl.config = i({}, a.defaultConfig, e)),
        (window.owl.disableAutoPv = e.disableAutoPv),
        e.plugins)
      ) {
        var t = e.plugins.split(",");
        window.owl.config.plugins = Array.prototype.concat(a.defaultConfig.plugins, t);
      }
      (0, u.createScriptTag)(a.ADAPT_SRC);
    }
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          }
          return e;
        },
      u = o(5),
      a = o(4),
      c = o(21),
      s = r(c);
    (window.owl = { desc: "owl script is loaded" }),
      (window.owlTest = { desc: "owlTest is loaded" });
    try {
      n();
    } catch (e) {
      throw new Error("[owl error] " + e);
    }
  },
  4: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = "//s.xiaohongshu.com/owl/public/2.8/snowplow.960343.js",
      r = "//s.xiaohongshu.com/owl/public/2.8/adapter.a32e4d.js",
      n = { requestApi: "//t.xiaohongshu.com/api/collect" },
      i = {
        plugins: ["click", "impression", "link", "autoPv", "spent", "performance"],
        urlParamsKeys: ["xhs_g_s", "from"],
        appId: "xhs_app_id_unset"
      };
    (t.SNOWPLOW_SRC = o), (t.ADAPT_SRC = r), (t.vendorConfig = n), (t.defaultConfig = i);
  },
  5: function(e, t) {
    "use strict";
    function o(e) {
      var t = document.createElement("script");
      t.setAttribute("src", e),
        t.setAttribute("defer", 1),
        t.setAttribute("async", 1),
        t.setAttribute("crossorigin", "anonymous"),
        document.head.appendChild(t);
    }
    function r() {
      var e = document.currentScript,
        t = {},
        o = void 0;
      if (!e) {
        var r = document.querySelectorAll("script");
        e = r[r.length - 1];
      }
      return e
        ? (Array.prototype.slice.call(e.attributes).forEach(function(e) {
            e.nodeName &&
              ((o = e.nodeName.replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase();
              })),
              e.nodeValue && (t[o] = e.nodeValue));
          }),
          t)
        : t;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createScriptTag = o),
      (t.getConfigFromScriptTag = r);
  },
  21: function(e, t) {
    "use strict";
    function o() {
      var e = {},
        t = [],
        o = !1,
        r = null;
      return (e = {
        version: "2.8.42",
        config: {},
        disableAutoPv: !0,
        cookieIsReady: function() {
          var e = !1;
          return o ? e : ("function" == typeof r && (r(), (e = !0)), (o = !0), e);
        },
        setCookieReadyCallBackMethod: function(e) {
          r = e;
        },
        setUid: function(t) {
          e.config.uid = t;
        },
        getUid: function() {
          return e.config.uid;
        },
        getAppId: function() {
          return e.config.appId;
        },
        push: function(e) {
          t.push(e);
        },
        getTaskQueue: function() {
          return t;
        },
        flush: function() {}
      });
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
  }
});
