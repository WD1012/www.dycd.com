/**
 * Created by Administrator on 2017/12/26.
 */
!function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;var e = c[d] = { exports: {}, id: d, loaded: !1 };return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports;
  }var c = {};return b.m = a, b.c = c, b.p = "", b(0);
}([function (a, b, c) {
  function d() {
    var a, b;if (navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"]) {
      if (b = navigator.plugins["Shockwave Flash"].description) return b;
    } else if ("undefined" != typeof window.ActiveXObject) try {
      if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), a && (b = a.GetVariable("$version"))) return b;
    } catch (c) {}return "";
  }jwplayer.jwpsrv = jwplayer.jwpsrv || {};var e = c(1),
      f = c(4),
      g = c(5),
      h = c(2),
      i = c(3),
      j = c(6),
      k = function (a, b, c) {
    function d() {
      if ("" === pa.innerHTML || pa.className !== oa) na = 1;else {
        var a = ba.getContainer();na = 0 === ca.width || null === a.offsetParent || 0 === a.clientHeight ? -1 : null === pa.offsetParent || 0 === pa.clientHeight ? 1 : 0;
      }return na;
    }function k(a) {
      return Aa = x(a), [$(H, ja, 21), $(I, ba.getAutostart(), 11), $(J, fa, 21), $(Y, ga, 28), $(Z, ha, 28), $(U, ba.html5Mode(), 10), $(O, ca.bucket, 21), $(V, Aa, 101), $(L, w(a), 20), $(X, d(), 100)];
    }function m(a) {
      return [$(K, v(a), 100)].concat(k(a));
    }function n(a, b) {
      return [$(T, b, 23)].concat(m(a));
    }function o(a) {
      Aa = null, p(), ha = A(12), ba.playlistIndex = a.index;
    }function p() {
      qa = {}, ra = !1, sa = 0;
    }function q(a) {
      return function (b) {
        if (!za) {
          var c = qa[a];(a !== va || (b = b.metadata || b, c && (b.width = b.width || c.width, b.height = b.height || c.height, b.duration = b.duration || c.duration), !ba.html5Mode() || 100 !== b.duration && 0 !== b.duration || 0 !== b.width || 0 !== b.height)) && (qa[a] = b, a === ua && (c || (xa = 0), ya = ba.getPosition()), qa[ua] && qa[va] && qa[wa] && (ra || (ra = !0, B())));
        }
      };
    }function r() {
      var a = ba.getDuration();if (0 >= a) {
        var b = qa[va];b && (a = b.duration);
      }return 0 | a;
    }function s(a) {
      return a = 0 | a, 0 >= a ? 0 : 30 > a ? 1 : 60 > a ? 4 : 180 > a ? 8 : 300 > a ? 16 : 32;
    }function t(a) {
      return a = 0 | a, 0 >= a ? 0 : 15 > a ? 1 : 300 >= a ? 2 : 1200 >= a ? 3 : 4;
    }function u() {
      ya = ba.getPosition(), sa = 0;
    }function v(a) {
      var b;if (!a) return null;var c = a.sources;if (c) {
        for (var d = [], e = c.length; e--;) c[e].file && d.push(c[e].file);d.sort(), b = d[0];
      } else b = a.file;return h.getAbsolutePath(b);
    }function w(a) {
      return a ? a.title : null;
    }function x(a) {
      if (!a) return null;var b = /^[a-zA-Z0-9]{8}$/,
          c = a.mediaid;if (b.test(c)) return c;var d = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/,
          e = d.exec(a.file);return e && 2 === e.length && (c = e[1], b.test(c)) ? c : null;
    }function y(a) {
      if (!a) return null;var b = 1,
          c = 2,
          d = 3,
          e = 4,
          f = 5,
          g = 6,
          h = 0,
          i = qa[wa];if (i && i.levels && i.levels.length) {
        var j = i.levels[0];if (j && "auto" === ("" + j.label).toLowerCase()) return f;
      }var k,
          l = a.sources;if (l && l.length && (k = l[0].type, "aac" === k || "mp3" === k || "vorbis" === k)) return g;var m = qa[va] || {},
          n = 0 | m.width,
          o = 0 | m.height;return 0 === n && 0 === o ? "rtmp" === k ? g : h : 320 >= n ? b : 640 >= n ? c : 1280 >= n ? d : e;
    }function z(a) {
      a = a || ba.getPlaylistItem(), ga = A(12), da.calculate(), ta.track(ia, E, [$(W, l(), 22), $(R, ca.height, 22), $(Q, ca.width, 23)].concat(m(a)));
    }function A(a) {
      return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a);
    }function B() {
      var a = r(),
          b = ba.getPlaylistItem();da.calculate(), ta.track(ia, F, [$(P, y(b), 21), $(S, t(a), 22)].concat(n(b, s(a))));
    }function C(a, b, c) {
      var d = b + .5 | 0;d > 0 && (da.calculate(), ta.track(ia, G, [$(M, d, 21), $(N, 0 | a, 22)].concat(n(ba.getPlaylistItem(), c))));
    }function D(a) {
      za = !!a.active;
    }var E = "e",
        F = "s",
        G = "t",
        H = "ed",
        I = "d",
        J = "ph",
        K = "mu",
        L = "t",
        M = "ti",
        N = "pw",
        O = "ps",
        P = "vs",
        Q = "wd",
        R = "pl",
        S = "l",
        T = "q",
        U = "m",
        V = "id",
        W = "fv",
        X = "eb",
        Y = "emi",
        Z = "pli",
        $ = function (a, b, c) {
      return new i(a, b, c);
    },
        _ = 128,
        aa = b.debug === !0,
        ba = new f(a),
        ca = null,
        da = this,
        ea = jwplayer.defaults,
        fa = ea && ea.ph ? ea.ph : 0;2 === parseInt(b.sdkplatform, 10) && (fa = "");var ga,
        ha,
        ia,
        ja = 0;if (jwplayer.key) {
      var ka = new jwplayer.utils.key(jwplayer.key),
          la = ka.edition();"invalid" !== la && (ia = ka.token()), "enterprise" === la ? ja = 6 : "invalid" === la ? ja = 4 : "ads" === la ? ja = 3 : "premium" === la ? ja = 2 : "pro" === la && (ja = 1);
    }ia || (ia = "_"), da.getCommonAdTrackingParameters = function () {
      return k(ba.getPlaylistItem(), !1);
    }, da.calculate = function () {
      ca = function () {
        function a(a, b) {
          return (/\d+%/.test(a) && (a = Math.ceil(parseFloat(a) / 100 * b)), b - a
          );
        }var b = 1,
            c = 2,
            d = 3,
            e = 4,
            f = 5,
            g = 0,
            h = 40,
            i = ba.getConfig(),
            j = ba.getWidth(),
            k = ba.getHeight(),
            l = /\d+%/.test(j);if (l) {
          var m = jwplayer.utils.bounds(ba.getContainer());j = Math.ceil(m.width), k = Math.ceil(m.height);
        }var n = 0;return i.listbar && (n = i.listbar.size, "bottom" === i.listbar.position ? k = a(n, k) : j = a(n, j)), j = 0 | j, /\d+%/.test(i.width || j) && i.aspectratio ? { bucket: e, width: j, height: k } : h > k ? { bucket: f, width: j, height: k } : 0 === j ? { bucket: g, width: j, height: k } : 320 >= j ? { bucket: b, width: j, height: k } : 640 >= j ? { bucket: c, width: j, height: k } : { bucket: d, width: j, height: k };
      }();
    }, da.getPlayerSize = function () {
      return ca;
    };var ma = new g(ba, 2e3);j(da, b, ia, aa, ba, ma);var na = -1,
        oa = "afs_ads",
        pa = document.createElement("div");pa.className = oa, pa.innerHTML = "&nbsp;", pa.style.width = "1px", pa.style.height = "1px", pa.style.position = "absolute", pa.style.background = "transparent", c.appendChild(pa);var qa,
        ra,
        sa,
        ta = new e(b, aa, "jwplayer6", ma),
        ua = "play",
        va = "meta",
        wa = "levels",
        xa = 0,
        ya = null,
        za = !1,
        Aa = null;ba.onReady(function () {
      var a = ba.getPlaylistItem();setTimeout(function () {
        z(a);
      }, 0);
    }), ba.onPlay(q(ua)), ba.onMeta(q(va)), ba.onQualityLevels(q(wa)), ba.onCast(D), ba.onTime(function (a) {
      if (!za) {
        var b = a.position,
            c = a.duration;if (b) {
          if (b > 1) {
            if (!qa[va]) {
              var d = { duration: c };if (ba.html5Mode()) {
                var e = ba.getVideoTag();e && (d.width = e.videoWidth, d.height = e.videoHeight);
              }q(va)(d);
            }qa[wa] || q(wa)({});
          }if (Aa) {
            var f = s(c),
                g = c / f,
                h = b / g + 1 | 0;0 === sa && (sa = h), null === ya && (ya = b);var i = b - ya;if (ya = b, i = Math.min(Math.max(0, i), 4), xa += i, h === sa + 1) {
              var j = _ * sa / f;if (sa = 0, h > f) return;C(j, xa, f), xa = 0;
            }
          }
        }
      }
    }), ba.onComplete(function () {
      if (!za && Aa) {
        var a = r();if (!(0 >= a)) {
          var b = s(a);C(_, xa, b), xa = 0;
        }
      }
    }), ba.onSeek(u), ba.onIdle(p), ba.onPlaylistItem(o), p();
  },
      l = function () {
    var a = d().replace("Shockwave Flash", "").replace(/ /g, "");return function () {
      return a;
    };
  }();window.jwplayer && jwplayer() && jwplayer().registerPlugin("jwpsrv", "6.0", k);
}, function (a, b, c) {
  var d = jwplayer.jwpsrv,
      e = c(2),
      f = c(3),
      g = function (a, b, c, d, e) {
    var f = 2 === parseInt(a.sdkplatform, 10),
        g = "complete" === document.readyState,
        h = { trackerVersion: "1.1.0", serverURL: "jwpltx.com", serverPath: "v1/" + c + "/ping.gif?", playerVersion: jwplayer.version, config: a, SDKPlatform: a.sdkplatform || "0", isiOSSDK: f, iFrame: e, pageURL: e, pageTitle: e, pageLoaded: g, queue: [], debug: b, positionUtils: d };if (!f) {
      if (h.iFrame = window.top !== window.self) {
        h.pageURL = document.referrer;try {
          h.pageURL = h.pageURL || window.top.location.href, h.pageTitle = window.top.document.title;
        } catch (i) {}
      }h.pageURL = h.pageURL || window.location.href, h.pageTitle = h.pageTitle || document.title;
    }var j = jwplayer.utils.extend(this, h);if (!g) {
      var k = function () {
        for (j.pageLoaded = !0; j.queue.length;) j.ping(j.queue.shift());
      };window.addEventListener ? window.addEventListener("load", k) : window.attachEvent("onload", k);
    }
  };g.prototype.track = function (a, b, c) {
    this.ping(this.buildTrackingURL(a, b, c));
  };var h = "tv",
      i = "n",
      j = "aid",
      k = "e",
      l = "i",
      m = "ifd",
      n = "pv",
      o = "pu",
      p = "pt",
      q = "sdk",
      r = "sv",
      s = "bi",
      t = "an",
      u = "did",
      v = "dm",
      w = function (a, b, c) {
    return new f(a, b, c);
  };g.prototype.buildTrackingURL = function (a, b, c) {
    var d = [w(h, this.trackerVersion, 0), w(i, Math.random().toFixed(16).substr(2, 16), 2), w(j, a, 4), w(k, b, 5), w(l, this.iFrame, 6), w(m, this.positionUtils.getIFrameDepth(), 6), w(n, this.playerVersion, 7), w(o, this.pageURL, 101), w(p, this.pageTitle, 103), w(q, this.SDKPlatform, 25)].concat(c);this.isiOSSDK && d.push(w(u, this.config.mobiledeviceid || "", 26), w(r, this.config.iossdkversion || "", 27), w(v, this.config.mobiledevicemodel || "", 28), w(s, this.config.bundleid || "", 29), w(t, this.config.applicationname || "", 30)), d.sort(function (a, b) {
      return a.priority - b.priority;
    });for (var e = [], f = 0; d.length > f; f++) e.push(d[f].getKey() + "=" + encodeURIComponent(d[f].getValue()));var g = ["//", this.serverURL, "/", this.serverPath, e.join("&")];return "file:" === window.location.protocol && g.unshift("http:"), g.join("");
  }, g.prototype.ping = function (a) {
    if (!this.pageLoaded) return void this.queue.push(a);var b = new Image();if (b.src = a, this.debug && e.isFunction(d.onping)) try {
      d.onping.call(this, a);
    } catch (c) {}
  }, a.exports = g;
}, function (a, b) {
  var c = {};c.getAbsolutePath = function (a, b) {
    if (c.isAbsolutePath(a)) return a;b = b || document.location.href;var d = b.substring(0, b.indexOf("://") + 3),
        e = b.substring(d.length, b.indexOf("/", d.length + 1)),
        f = a.split("/");if (0 !== a.indexOf("/")) {
      var g = b.split("?")[0];g = g.substring(d.length + e.length + 1, g.lastIndexOf("/")), f = g.split("/").concat(f);
    }for (var h = [], i = 0; f.length > i; i++) f[i] && "." !== f[i] && (".." === f[i] ? h.pop() : h.push(f[i]));return d + e + "/" + h.join("/");
  }, c.isAbsolutePath = function (a) {
    return a.match(/^[a-zA-Z]+:\/\//);
  }, c.forEach = function (a, b) {
    var c, d;for (c in a) e(a.hasOwnProperty) ? a.hasOwnProperty(c) && (d = a[c], b(c, d)) : (d = a[c], b(c, d));
  };var d = window.jwplayer.utils.typeOf,
      e = c.isFunction = function (a) {
    return "function" === d(a);
  };a.exports = c;
}, function (a, b) {
  var c = function (a, b, c) {
    b === !0 || b === !1 ? b = b ? 1 : 0 : (null === b || void 0 === b) && (b = ""), this.key = a, this.value = b, this.priority = c;
  };c.prototype.getKey = function () {
    return this.key;
  }, c.prototype.getValue = function () {
    return this.value;
  }, a.exports = c;
}, function (a, b, c) {
  function d(a, b) {
    return function (c) {
      return a[b] ? a[b](c) : void 0;
    };
  }function e(a, b) {
    return function () {
      return a[b]();
    };
  }function f(a) {
    n(a.plugins) && o(a.plugins, function (b, c) {
      return l(c.client) && (c.client.match("vast") || c.client.match("googima")) ? void (a.advertising = c) : void 0;
    });
  }function g(a) {
    var b = { description: "", image: "", mediaid: "", title: "", sources: [], tracks: [] };if (a.playlist) {
      if (!l(a.playlist)) {
        for (var c = [], d = 0; a.playlist.length > d; d++) c[d] = h(a.playlist[d]);a.playlist = c;
      }
    } else {
      var e = {};if (o(b, function (b) {
        k(a, e, b);
      }), !e.sources) if (a.levels) e.sources = a.levels, delete a.levels;else {
        var f = {};k(a, f, "file"), k(a, f, "type"), e.sources = f.file ? [f] : [];
      }a.playlist = [h(e)];
    }
  }function h(a) {
    var b = { description: "", image: "", mediaid: "", title: "", sources: [], tracks: [] },
        c = m({}, b, a);0 === c.sources.length && (c.sources = [i(c)]);for (var d = [], e = 0; c.sources.length > e; e++) d[e] = i(c.sources[e]);c.sources = d;var f = [];for (c.tracks = a && n(a.tracks) ? a.tracks : [], e = 0; c.tracks.length > e; e++) f[e] = j(c.tracks[e]);if (c.captions && !n(a.tracks)) {
      for (var g = 0; c.captions.length > g; g++) f.push(c.captions[g]);delete c.captions;
    }return c.tracks = f, c;
  }function i(a) {
    var b = { file: null, label: null, type: null };b[p] = null;var c = m({}, b);o(b, function (b) {
      n(a[b]) && (c[b] = a[b]);
    });var d = a[p];return a[p] = d && "true" === d.toString(), c;
  }function j(a) {
    var b = { file: null, label: null, kind: "captions" };b[p] = !1;var c = m({}, b);return o(b, function (b) {
      n(a[b]) && (c[b] = a[b]);
    }), c;
  }function k(a, b, c) {
    n(a[c]) && (b[c] = a[c], delete a[c]);
  }function l(a) {
    return "string" == typeof a;
  }var m = jwplayer.utils.extend,
      n = jwplayer.utils.exists,
      o = c(2).forEach,
      p = "default",
      q = function (a) {
    for (var b = "BeforePlay Ready Idle Playlist PlaylistItem Cast Buffer QualityLevels Meta Play Pause Seek Complete Time AdMeta AdImpression AdPlay AdError AdClick AdSkipped AdTime AdComplete".split(" "), c = b.length; c--;) {
      var h = "on" + b[c];this[h] = d(a, h);
    }var i = "RenderingMode Width Height Volume Mute Position Duration Fullscreen QualityLevels CurrentQuality Container".split(" ");for (c = i.length; c--;) {
      var j = "get" + i[c];this[j] = e(a, j);
    }var k = m({}, a.config);g(k), f(k), this.getConfig = function () {
      return k;
    }, this.removed = function () {
      var b = a.getContainer();return b ? "IDLE" === a.getState() && !b.parentNode : !0;
    }, this.playlistIndex = 0, this.getPlaylistItem = function (b) {
      try {
        return a.getPlaylistItem(b);
      } catch (c) {}return b = b || this.playlistIndex, this.getConfig().playlist[b] || null;
    }, this.getPlaylist = function () {
      try {
        return a.getPlaylist();
      } catch (b) {}return this.getConfig().playlist || null;
    }, this.getPlaylistIndex = function () {
      try {
        return a.getPlaylistIndex();
      } catch (b) {}return this.playlistIndex;
    }, this.html5Mode = function () {
      return "html5" === this.getRenderingMode().toLowerCase();
    }, this.getID = function () {
      return a.id;
    }, this.getAutostart = function () {
      return !!this.getConfig().autostart;
    }, this.getVideoTag = function () {
      if (this.html5Mode()) {
        var b = a.getContainer(),
            c = b.getElementsByTagName("video");if (c.length) return c[0];
      }return null;
    };
  };a.exports = q;
}, function (a, b) {
  function c(a, b) {
    var c = b.top > a.top + a.height || a.top > b.top + b.height || b.left > a.left + a.width || a.left > b.left + b.width,
        d = { top: 0, left: 0, width: 0, height: 0 };return c === !1 && (d = { top: Math.max(a.top, b.top), left: Math.max(a.left, b.left), width: Math.min(Math.abs(a.left - (b.left + b.width)), Math.abs(b.left - (a.left + a.width)), a.width, b.width), height: Math.min(Math.abs(a.top - (b.top + b.height)), Math.abs(b.top - (a.top + a.height)), a.height, b.height) }), d;
  }function d(a, b) {
    for (var d, e = a, f = b; null !== e.parentElement && "undefined" != typeof e.parentElement.tagName;) d = i(e.parentElement), f = c(f, d), e = e.parentElement;var g = i(e.ownerDocument.body).width,
        h = i(e.ownerDocument.body).height;return f = c(f, { top: 0, left: 0, width: g, height: h });
  }function e(a, b) {
    for (var c = a, d = b; null !== c && "undefined" != typeof c.tagName;) null !== c.offsetParent && c.offsetParent === c.parentElement.offsetParent ? (d.top += c.offsetTop - c.parentElement.offsetTop, d.left += c.offsetLeft - c.parentElement.offsetLeft) : (d.top += c.offsetTop, d.left += c.offsetLeft), null !== c.parentElement && "BODY" !== c.parentElement.tagName && (d.top -= "undefined" != typeof c.parentElement.scrollTop ? c.parentElement.scrollTop : 0, d.left -= "undefined" != typeof c.parentElement.scrollLeft ? c.parentElement.scrollLeft : 0), c = c.parentElement;return d;
  }function f(a, b) {
    for (var c = { top: 0, left: 0 }, d = a.getContainer(); null !== d;) {
      if (c = e(d, c), b || j(d) === window.top) return c;d = j(d).frameElement;
    }return c;
  }function g(a) {
    for (var b = a.getContainer(), c = i(b); null !== b;) {
      if (c = d(b, c), j(b) === window.top) return c;try {
        b = j(b).frameElement, c.top += b.offsetTop, c.left += b.offsetLeft;
      } catch (e) {
        b = null;
      }
    }return c;
  }function h(a, b) {
    for (var c = a.getContainer(), f = i(c), g = { top: 0, left: 0 }; null !== c;) {
      f = d(c, f), g = e(c, g);var h = j(c);if (h === window.top) {
        h.parent.postMessage(JSON.stringify({ type: "jwpsrv_position_response", playerId: a.getID(), rect: { top: f.top, left: f.left, width: f.width, height: f.height }, iframeDepth: 0, coords: g, responseChain: b }), "*"), c = null;break;
      }try {
        c = h.frameElement;
      } catch (k) {
        c = null;
      }null === c ? parent.postMessage(JSON.stringify({ type: "jwpsrv_position", playerId: a.getID(), rect: { top: f.top, left: f.left, width: f.width, height: f.height }, iframeDepth: 0, coords: g, responseChain: b }), "*") : (f.top += c.offsetTop, f.left += c.offsetLeft);
    }
  }function i(a) {
    if (!a.getBoundingClientRect) throw new Error("Cannot get bounds: " + a);var b = a.getBoundingClientRect(),
        c = { left: b.left, top: b.top, width: b.width, height: b.height };return "width" in b || (c.width = b.right - b.left), "height" in b || (c.height = b.bottom - b.top), c;
  }function j(a) {
    var b = a.ownerDocument;return b.defaultView || b.parentWindow;
  }var k = function (a, b) {
    this.player = a, this.lastViewRect = void 0, this.lastViewPos = void 0, this.iframeDepth = 0;var c,
        d = window.location;try {
      c = !(window.top.location.protocol === d.protocol && window.top.location.host === d.host && window.top.location.port === d.port);
    } catch (e) {
      c = !0;
    }if (this.isPolling = c, c) {
      var f = this,
          g = "" + Math.floor(1e11 * Math.random()),
          i = function (a) {
        var b;try {
          b = JSON.parse(a.data);
        } catch (c) {}b && b.type && "jwpsrv_position_response" === b.type && f.player.getID() === b.playerId && (f.lastViewRect = b.rect, f.lastViewPos = b.coords, f.iframeDepth = b.iframeDepth);
      };window.addEventListener ? window.addEventListener("message", i) : window.attachEvent("onmessage", i), h(a, g);var j = setInterval(function () {
        a.removed() ? clearInterval(j) : f.isPolling && h(a, g);
      }, b);
    }
  };k.prototype.getPosition = function () {
    if (this.player.getFullscreen()) return "0,0";if (this.isPolling) return this.lastViewPos ? this.lastViewPos.left + "," + this.lastViewPos.top : null;var a = f(this.player, this.isPolling);return a.left + "," + a.top;
  }, k.prototype.getViewablePercentage = function (a) {
    if (this.player.getFullscreen()) return 1;if (this.isPolling) return this.lastViewRect ? Math.round(1e3 * (this.lastViewRect.width * this.lastViewRect.height / (a.width * a.height))) / 1e3 : null;var b = g(this.player);return Math.round(1e3 * (b.width * b.height / (a.width * a.height))) / 1e3;
  }, k.prototype.getIFrameDepth = function () {
    if (this.isPolling === !0) return this.iframeDepth ? this.iframeDepth : null;for (var a = j(this.player.getContainer()), b = 0; a !== window.top;) a = j(a.frameElement), b++;return b;
  }, a.exports = k;
}, function (a, b, c) {
  function d(a, b, c) {
    return new h(a, b, c);
  }function e(a) {
    var b = a.advertising;return f(b && b.client);
  }function f(a) {
    if (a) {
      if (/vast/.test(a)) return 0;if (/googima/.test(a)) return 1;
    }return -1;
  }var g = c(1),
      h = c(3);a.exports = function (a, b, c, h, i, j) {
    function k(b) {
      b > 4 || (z.adscheduleid && b > v.previousQuartile && (a.calculate(), l(b)), v.previousQuartile = b);
    }function l(a) {
      var b = [d(Q, v.duration, 1), d(_, a, 1)].concat(s());x.track(c, D, b);
    }function m(a) {
      return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a);
    }function n(a) {
      return a = a.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/)), a && a.length > 1 ? a[1] : "";
    }function o() {
      return document.hasFocus && "function" == typeof document.hasFocus && document.hasFocus();
    }function p(a, b) {
      for (var c = b; c;) {
        if (c === a) return !0;c = c.parentNode;
      }return !1;
    }function q() {
      return p(i.getContainer(), document.activeElement);
    }function r() {
      return [d(F, v.adId, 1), d(H, y, 19), d(G, i.getMute(), 28), d(Y, v.tagdomain, 29), d(J, v.adposition, 31)].concat(a.getCommonAdTrackingParameters());
    }function s() {
      var b = a.getPlayerSize(i);return [d(N, i.getVolume(), 20), d(O, b.width, 21), d(P, b.height, 21), d(W, v.podCount, 22), d(X, v.podIndex, 23), d(L, v.adCreativeType, 24), d(I, v.adLinear, 25), d(K, v.vastVersion, 26), d(M, v.adSystem, 27), d(R, x.positionUtils.getViewablePercentage(b), 30), d(S, x.positionUtils.getPosition(), 31), d(U, aa(), 31), d(V, o(), 31), d(T, q(), 31)].concat(r());
    }function t(a) {
      null === v && (v = { adId: m(12) }, w.extend(v, u)), -1 === y && a && (y = f(a.client));
    }var u = { numCompanions: -1, podCount: 0, podIndex: 0, adLinear: -1, vastVersion: -1, adSystem: "", adCreativeType: -1, adposition: -1, tagdomain: "", position: "", previousQuartile: 0, duration: "" },
        v = null,
        w = jwplayer.utils,
        x = new g(b, h, "clienta", j),
        y = e(i.getConfig() || {}),
        z = (i.getConfig() || {}).advertising || {},
        A = "i",
        B = "c",
        C = "s",
        D = "v",
        E = "ae",
        F = "adi",
        G = "mt",
        H = "c",
        I = "al",
        J = "p",
        K = "vv",
        L = "ct",
        M = "ad",
        N = "vl",
        O = "wd",
        P = "pl",
        Q = "du",
        R = "vi",
        S = "ap",
        T = "tf",
        U = "at",
        V = "df",
        W = "pc",
        X = "pi",
        Y = "vu",
        Z = "ec",
        $ = "tw",
        _ = "qt";i.onAdMeta(function (a) {
      v = null, t(a), v.adLinear = "linear" === a.linear;
    }), i.onAdImpression(function (b) {
      switch (t(b), b.creativetype) {case "static":
          v.adCreativeType = 0;break;case "video":
          v.adCreativeType = 1;break;case "vpaid":
          v.adCreativeType = 2;}switch (b.adposition) {case "pre":
          v.adposition = 0;break;case "mid":
          v.adposition = 1;break;case "post":
          v.adposition = 2;break;case "api":
          v.adposition = 3;}v.tagdomain = n(w.getAbsolutePath(b.tag)), v.adSystem = b.adsystem || v.adSystem, v.vastVersion = b.vastversion || v.vastVersion, v.podIndex = b.sequence || v.podIndex, v.podCount = b.podcount || v.podCount, a.calculate(), x.track(c, A, s());
    }), i.onAdComplete(function () {
      null !== v && k(4), v = null;
    }), i.onAdTime(function (a) {
      t(a), v.position = a.position, v.duration = v.duration || a.duration, v.duration && k((4 * v.position + .05) / v.duration | 0);
    }), i.onAdSkipped(function (b) {
      t(b), a.calculate();var e = [d($, v.position, 1), d(_, v.previousQuartile, 1), d(Q, v.duration, 1)].concat(s());x.track(c, C, e), v = null;
    }), i.onAdError(function (b) {
      if (!z.adscheduleid) return void (v = null);t(b);var e = 1;"object" == typeof b && b && (void 0 !== b.code && (e = b.code), void 0 !== b.tag && (v.tagdomain = n(w.getAbsolutePath(b.tag)))), a.calculate();var f = [d(Z, e, 1)].concat(r());x.track(c, E, f), v = null;
    }), i.onAdClick(function (b) {
      t(b), a.calculate();var e = [d($, v.position, 1), d(Q, v.duration, 1), d(_, v.previousQuartile, 1)].concat(s());x.track(c, B, e);
    });var aa = function () {
      for (var a = "hidden", b = ["", "webkit", "moz", "ms", "o"], c = 0; b.length > c; c++) if (b[c] && (a = b[c] + "Hidden"), a in document) return function () {
        return !document[a];
      };return function () {
        return null;
      };
    }();
  };
}]);