function v(i) {
  return { ns: i };
}
const C = "service:", d = "object:", y = "group:", m = Promise.resolve(null);
function h(i) {
  let I = 0;
  const s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), P = {
    /** Register a service factory */
    registerService(t, e) {
      s.set(C + t.ns, e);
    },
    /** Register an object factory */
    registerFactory(t, e) {
      s.set(d + t.ns, e);
    },
    /** Register a factory group */
    registerGroup(t, e) {
      const r = y + ++I, l = () => {
        let n = c.get(r);
        return n || (n = u(e), c.set(r, n), n);
      };
      for (const n of t)
        s.set(y + n.ns, l);
    },
    /** Get a service or an object instance (services have priority) */
    get(...t) {
      if (t.length === 1) {
        const e = t[0];
        return p(typeof e == "string" ? e : e.ns);
      }
      return Promise.all(t.map((e) => p(typeof e == "string" ? e : e.ns)));
    },
    createChildContext() {
      return h(P);
    }
  };
  return P;
  function p(t, e = !0) {
    const r = C + t, l = c.get(r);
    if (l !== void 0)
      return l;
    const n = s.get(r);
    if (n) {
      let g = u(n), f;
      const a = new Promise((o) => {
        f = o;
      });
      return g.then((o) => {
        o && (typeof o == "object" || typeof o == "function") ? (c.set(r, o), f(o)) : (c.set(r, m), f(null));
      }), c.set(r, a), a;
    } else {
      const g = s.get(d + t);
      if (g)
        return u(g);
      if (e) {
        const f = s.get(y + t);
        if (f)
          return u(f).then(() => p(t, !1));
      }
      if (i)
        return i.get(t);
    }
    return m;
  }
  function u(t) {
    let e = t();
    return e && (typeof e == "object" || typeof e == "function") ? typeof e.then != "function" && (e = Promise.resolve(e)) : e = m, e;
  }
}
const x = h();
export {
  x as asm,
  v as interfaceId
};
