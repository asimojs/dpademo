import { useRef as d, useEffect as m, useState as h } from "preact/hooks";
import { createElement as S } from "preact";
import { trax as i } from "@traxjs/trax";
const l = "Preact", p = /* @__PURE__ */ new Map();
let _ = 0;
function C(e, o) {
  return e + ":" + o;
}
function x() {
  return i.getStore(l) || i.createStore(l, {});
}
let a = x();
function g(e, o, r, t) {
  r.jsx = "";
  let n = p.get(e);
  n === void 0 ? n = 1 : n++, p.set(e, n);
  const s = C(e, n);
  r.id = s;
  const c = a.compute(s, () => {
    try {
      r.jsx = o(r.props);
    } catch (f) {
      i.log.error(`[@traxjs/trax-preact] Processing Error: ${f}`);
    }
  }, !1, !0);
  c.onDirty = () => {
    queueMicrotask(() => t(++_));
  }, r.processor = c;
}
function j(e, o) {
  function r(s) {
    const [c, f] = h(0), u = d({}).current;
    return u.processor || g(e, o, u, f), m(() => function() {
      u.processor && (u.processor.dispose(), u.processor = void 0);
    }, [u]), u.props = s, u.processor.compute(!0), u.jsx;
  }
  const t = e.replace(/\:/g, "_"), n = new Function("fc", `return function ${t}(props){ return fc(props) }`);
  return R(n(r));
}
function w(e) {
  return i.getTraxId(e);
}
function v() {
  var e;
  return ((e = i.getActiveProcessor()) === null || e === void 0 ? void 0 : e.id) || "";
}
function M() {
  p.clear(), a.dispose(), a = x();
}
function E(e, ...o) {
  const r = d({}).current;
  let t = r.store;
  return t || (r.store = t = e(...o)), typeof t.dispose == "function" && m(() => () => {
    t == null || t.dispose();
  }, [t]), t;
}
function A(e) {
  return E(() => {
    const r = "State[" + v().replace(/(^[^\/\%]+(\/|\%))|(%)/g, "") + "]";
    return i.createStore(r, e);
  }).root;
}
function R(e, o) {
  function r(n) {
    let s = this.props.ref, c = s === n.ref;
    return !c && s && (s.call ? s(null) : s.current = null), o ? !o(this.props, n) || !c : y(this.props, n);
  }
  function t(n) {
    return this.shouldComponentUpdate = r, S(e, n);
  }
  return t.displayName = "Memo(" + (e.displayName || e.name) + ")", t.prototype.isReactComponent = !0, t._forwarded = !0, t;
}
function y(e, o) {
  for (let r in e)
    if (r !== "__source" && !(r in o))
      return !0;
  for (let r in o)
    if (r !== "__source" && e[r] !== o[r])
      return !0;
  return !1;
}
export {
  j as component,
  v as componentId,
  M as resetPreactEnv,
  w as traxId,
  E as useStore,
  A as useTraxState
};
