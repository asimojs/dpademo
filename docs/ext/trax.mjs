let re;
function $e(i) {
  i.value = null, i.next = re, re = i;
}
function we(i, s) {
  if (re) {
    const r = re;
    return re = r.next, r.value = i, r.next = s, r;
  }
}
class me {
  constructor() {
    this._size = 0;
  }
  get head() {
    return this._head;
  }
  get size() {
    return this._size;
  }
  add(s) {
    const r = this._head;
    let n = we(s, r) || { value: s, next: r };
    return this._head = n, this._size++, n;
  }
  insert(s) {
    let r = this._head, n;
    if (!r)
      n = s() || void 0, n !== void 0 && this.add(n);
    else {
      let d;
      for (; d || r; ) {
        if (n = s(d == null ? void 0 : d.value, r == null ? void 0 : r.value) || void 0, n !== void 0) {
          let a = we(n, r) || { value: n, next: r };
          d ? d.next = a : this._head = a, this._size++;
          return;
        }
        d = r, r = r == null ? void 0 : r.next;
      }
    }
  }
  peek() {
    return this._head ? this._head.value : void 0;
  }
  shift() {
    const s = this._head;
    if (s) {
      const r = s.value;
      return this._head = s.next, this._size--, $e(s), r;
    }
  }
  remove(s) {
    let r = this._head, n = null;
    for (; r; ) {
      if (r.value === s)
        return n ? (n.next = r.next, this._size--, $e(r)) : this.shift(), !0;
      n = r, r = r.next;
    }
    return !1;
  }
}
var B;
(function(i) {
  i.NotATraxObject = "", i.Object = "O", i.Array = "A", i.Store = "S", i.Processor = "P";
})(B || (B = {}));
const y = Object.freeze({
  Info: "!LOG",
  Warning: "!WRN",
  Error: "!ERR",
  CycleStart: "!CS",
  CycleComplete: "!CC",
  New: "!NEW",
  Dispose: "!DEL",
  Set: "!SET",
  Get: "!GET",
  ProcessorDirty: "!DRT",
  ProcessorSkipped: "!SKP",
  ProcessingStart: "!PCS",
  ProcessingPause: "!PCP",
  ProcessingResume: "!PCR",
  ProcessingEnd: "!PCE"
});
var Ne = globalThis && globalThis.__awaiter || function(i, s, r, n) {
  function d(a) {
    return a instanceof r ? a : new r(function(P) {
      P(a);
    });
  }
  return new (r || (r = Promise))(function(a, P) {
    function O(E) {
      try {
        j(n.next(E));
      } catch (D) {
        P(D);
      }
    }
    function v(E) {
      try {
        j(n.throw(E));
      } catch (D) {
        P(D);
      }
    }
    function j(E) {
      E.done ? a(E.value) : d(E.value).then(O, v);
    }
    j((n = n.apply(i, s || [])).next());
  });
};
function Te(i, s, r) {
  let n = 0, d = 1e3, a, P;
  const O = /* @__PURE__ */ new Map(), v = [];
  let j = "None", E = -1, D = -1, W = null, A = 0;
  function z() {
    return W === null && (D = -1, E++, W = Promise.resolve().then(I), w(y.CycleStart)), D++, E + ":" + D;
  }
  function I() {
    Y(), w(y.CycleComplete), W = null;
  }
  function w(f) {
    f === y.CycleComplete && r && r();
    const x = Date.now(), u = A !== 0 ? x - A : 0;
    A = x, _(f, { elapsedTime: u }, i);
  }
  const L = 1, M = 2, H = 3, J = new me();
  function Q(f) {
    J.add(f);
  }
  function X(f) {
    let x = J.shift();
    for (; x && x !== f; )
      S("[trax/processing context] Contexts must be ended or paused before parent:", x.id), x = J.shift();
  }
  function Y() {
    if (J.size !== 0) {
      let f = J.shift();
      for (; f; )
        S("[trax/processing context] Contexts must be ended or paused before cycle ends:", f.id), f = J.shift();
    }
  }
  function ee(f, x) {
    let u = L;
    const m = Object.assign({ processId: f }, x), p = {
      get id() {
        return f;
      },
      pause() {
        u !== L ? S("[trax/processing context] Only started or resumed contexts can be paused:", f) : (X(p), _(y.ProcessingPause, m, i), u = M);
      },
      resume() {
        u !== M ? S("[trax/processing context] Only paused contexts can be resumed:", f) : (Q(p), _(y.ProcessingResume, m, i), u = L);
      },
      end() {
        u === H ? S("[trax/processing context] Contexts cannot be ended twice:", f) : (X(p), _(y.ProcessingEnd, m, i), u = H);
      }
    };
    return Q(p), p;
  }
  function S(...f) {
    _(y.Error, pe(f));
  }
  function _(f, x, u, m) {
    let p;
    if (n >= d && d > 1 ? (p = a, a = a.next, n--, p.id = "", p.type = "", p.next = p.data = p.parentId = void 0) : p = { id: "", type: "" }, Ve(i, p, f, s, x, u), p.id = z(), p.parentId = m, p.type !== "") {
      a === void 0 ? (a = P = p, n = 1) : (P.next = p, P = p, n++);
      for (const T of v)
        try {
          T({ id: p.id, type: p.type, data: p.data });
        } catch {
        }
      Z(p.type, p);
    }
    if (j !== "None") {
      const T = p.type;
      if (T !== y.CycleStart && T !== y.CycleComplete && (T !== y.Get || j === "All")) {
        let U = We(p.type, p.data), G = "";
        p.parentId && (G = " - parent:" + p.parentId), console.log(`${p.id} ${p.type}${U ? " - " + U : ""}${G}`);
      }
    }
    return p;
  }
  function Z(f, x) {
    const u = O.get(f);
    if (u) {
      const m = u.filter((p) => !p({ id: x.id, type: x.type, data: x.data, parentId: x.parentId }));
      m.length === 0 ? O.delete(f) : O.set(f, m);
    }
  }
  return {
    get consoleOutput() {
      return j;
    },
    set consoleOutput(f) {
      j = f;
    },
    event(f, x, u) {
      _(f, x, u);
    },
    info(...f) {
      _(y.Info, pe(f));
    },
    warn(...f) {
      _(y.Warning, pe(f));
    },
    error: S,
    set maxSize(f) {
      const x = d;
      if (f < 0 ? d = -1 : f < 2 ? d = 2 : d = f, d > 0 && d < x && d < n) {
        let u = n - d;
        for (; a && u; )
          a = a.next, u--, n--;
      }
    },
    startProcessingContext(f, x) {
      let u = f.name;
      u.charAt(0) === "!" && x !== i && (S(`Processing Context name cannot start with reserved prefix: ${u}`), f.name = u.replace(/\!+/, ""));
      const m = J.peek(), p = m ? m.id : void 0, T = _(y.ProcessingStart, f, i, p);
      return ee(T.id, f);
    },
    get maxSize() {
      return d;
    },
    get size() {
      return n;
    },
    scan(f) {
      let x = a, u = !0;
      for (; u && x; )
        try {
          f(x) === !1 && (u = !1), x = x.next;
        } catch {
        }
    },
    lastEvent() {
      return P;
    },
    awaitEvent(f, x) {
      return Ne(this, void 0, void 0, function* () {
        if (f === "" || f === "*")
          return _(y.Error, `[trax/eventStream.await] Invalid event type: '${f}'`), { id: P.id, type: P.type, data: P.data };
        let u = O.get(f);
        u === void 0 && (u = [], O.set(f, u));
        let m, p = new Promise((T) => {
          m = T;
        });
        return u.push((T) => Me(T, x) ? (m(T), !0) : !1), p;
      });
    },
    subscribe(f, x) {
      let u;
      return f === "*" ? u = (m) => x(m) : u = (m) => {
        m.type === f && x(m);
      }, v.push(u), u;
    },
    unsubscribe(f) {
      const x = v.indexOf(f);
      return x > -1 ? (v.splice(x, 1), !0) : !1;
    }
  };
}
function Me(i, s) {
  if (s === void 0 || i.data === void 0)
    return !0;
  const r = JSON.parse(i.data);
  if (typeof s != "object" && s !== null)
    return r === s;
  if (s !== null && r !== null && typeof r == "object") {
    for (const n of Object.keys(s)) {
      const d = r[n], a = s[n];
      if (a instanceof RegExp)
        if (typeof d == "string") {
          if (d.match(a) === null)
            return !1;
        } else
          return !1;
      else if (d !== s[n])
        return !1;
    }
    return !0;
  }
  return !1;
}
function pe(i) {
  let s = "";
  const r = [];
  for (let n of i) {
    const d = typeof n;
    d === "string" || d === "number" || d === "boolean" || n === null ? s ? s += " " + n : s = "" + n : (s && (r.push(s), s = ""), r.push(n));
  }
  if (s && r.push(s), r.length !== 0)
    return r.length === 1 ? r[0] : r;
}
function Ve(i, s, r, n, d, a) {
  let P = !1, O = "";
  if (r === "")
    P = !0, O = "Event type cannot be empty";
  else if (r.charAt(0) === "!" && a !== i && r !== y.Error && r !== y.Warning && r !== y.Info)
    P = !0, O = "Event type cannot start with reserved prefix: " + r;
  else if (s.type = r, d !== void 0)
    try {
      n ? s.data = n(d) : s.data = JSON.stringify(d);
    } catch (v) {
      P = !0, O = "Event strinfication error: " + v;
    }
  else
    d = void 0;
  P && (s.type = y.Error, s.data = O);
}
function We(i, s) {
  if (!s || !i || i.charAt(0) !== "!")
    return s;
  try {
    const r = JSON.parse("" + s);
    if (i === y.CycleStart || i === y.CycleComplete)
      return "0";
    if (i === y.Info || i === y.Warning || i === y.Error)
      return `${s.replace(/"/g, "")}`;
    if (i === y.ProcessingPause || i === y.ProcessingResume || i === y.ProcessingEnd)
      return `${JSON.parse(s).processId}`;
    if (i === y.ProcessingStart) {
      const n = r;
      if (n.name === "!StoreInit")
        return `${n.name} (${n.storeId})`;
      if (n.name === "!Compute") {
        const d = n.isRenderer ? " R" : "";
        return `${n.name} #${n.computeCount} (${n.processorId}) P${n.processorPriority} ${n.trigger}${d}`;
      } else
        return n.name === "!Reconciliation" ? `${n.name} #${n.index} - ${n.processorCount} processor${n.processorCount !== 1 ? "s" : ""}` : n.name === "!ArrayUpdate" ? `${n.name} (${n.objectId})` : `${n.name}`;
    } else if (i === y.New) {
      const n = r;
      return n.objectId === void 0 ? s : `${n.objectType}: ${n.objectId}`;
    } else if (i === y.Dispose) {
      const n = r;
      return n.objectId === void 0 ? s : `${n.objectId}`;
    } else if (i === y.Get) {
      const n = r;
      return `${n.objectId}.${n.propName} -> ${he(n.propValue)}`;
    } else if (i === y.Set) {
      const n = r;
      return `${n.objectId}.${n.propName} = ${he(n.toValue)} (prev: ${he(n.fromValue)})`;
    } else if (i === y.ProcessorDirty) {
      const n = r;
      return `${n.processorId} <- ${n.objectId}.${n.propName}`;
    } else if (i === y.ProcessorSkipped)
      return `${r.processorId}`;
  } catch {
  }
  return s;
}
function he(i) {
  if (i === void 0)
    return "undefined";
  if (i === null)
    return "null";
  if (typeof i == "object") {
    const s = N(i);
    return s ? s.id : JSON.stringify(i);
  } else
    return typeof i == "string" ? "'" + i.replace(/\'/g, "\\'") + "'" : "" + i;
}
function Ee() {
}
function ge(i, s, r, n = Ee, d = Ee) {
  let a = null, P, O, v, j;
  return (...A) => {
    n(), a = s();
    let z, I = !0;
    P = void 0;
    let w;
    try {
      w = i(...A), w && w.next && typeof w.next == "function" ? (P = w, z = w.next(), I = !!z.done) : w && typeof w == "object" && typeof w.then == "function" && typeof w.catch == "function" && w.catch((L) => {
        r(L);
      });
    } catch (L) {
      r(L);
    }
    return d(I), I ? (a.end(), a = null) : (a.pause(), E(z, P)), P !== void 0 ? (O && j && j("Processing Cancelled"), O = v = j = void 0, I ? Promise.resolve(w) : (O = new Promise((L, M) => {
      v = L, j = M;
    }), O)) : w;
  };
  function E(A, z) {
    if (A && !A.done) {
      const I = A.value, w = (L) => {
        r(L);
      };
      I && I.then ? I.then((L) => {
        D(L, z);
      }).catch(w) : Promise.resolve().then(() => {
        D(I, z);
      }).catch(w);
    }
  }
  function D(A, z) {
    if (z !== P || !a)
      return;
    if (n() === !1) {
      W();
      return;
    }
    a.resume();
    let I, w = !0;
    try {
      I = z.next(A), w = !!I.done;
    } catch (L) {
      r(L), w = !0, j && j(L), W();
    }
    d(w), w ? (a.end(), v && v(I.value)) : (a.pause(), E(I, z));
  }
  function W() {
    v = j = void 0;
  }
}
function Ge(i, s, r, n, d, a, P, O, v, j, E = !0, D = !1) {
  let W = 0, A = -1, z = !0, I = !1, w = !1, L = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set(), H, J = -1, Q = "DirectCall", X;
  function Y(u) {
    P({ type: y.Error, data: u });
  }
  let ee, S;
  f(n);
  const _ = {
    get id() {
      return i;
    },
    get target() {
      return v;
    },
    get reconciliationId() {
      return J;
    },
    get autoCompute() {
      return E;
    },
    get priority() {
      return r;
    },
    get computeCount() {
      return W;
    },
    get dirty() {
      return z;
    },
    get isRenderer() {
      return D;
    },
    get disposed() {
      return I;
    },
    get dependencies() {
      return I ? [] : Array.from(L).sort();
    },
    onDirty: null,
    notifyChange(u, m) {
      if (I || w)
        return !1;
      if (!z && L.has(Z(u, m))) {
        if (z = !0, P({ type: y.ProcessorDirty, processorId: i, objectId: u, propName: m }), this.onDirty)
          try {
            this.onDirty();
          } catch (p) {
            Y(`(${i}) onDirty callback execution error: ${p}`);
          }
        return !0;
      }
      return !1;
    },
    registerDependency(u, m, p) {
      !w || I || p === "then" && u.then === void 0 || (L.add(Z(m, p)), M.add(m), He(_, N(a(m))));
    },
    compute(u = !1, m = "DirectCall", p = -1) {
      var T;
      if (I || !u && !E && (m === "Init" || m === "Reconciliation"))
        return;
      let U = !0;
      if (v !== null && m !== "TargetRead" && (U = ((T = N(v)) === null || T === void 0 ? void 0 : T.hasExternalPropListener) || !1), U && z || u) {
        z = !1, L.clear(), H = M, M = /* @__PURE__ */ new Set(), W++, J = p, Q = m, S && (f(S), S = void 0), X = {
          processorId: i,
          processorName: s,
          computeCount: W,
          maxComputeCount: A
        };
        let G;
        v !== null ? G = ee(v, X) : G = ee(X), G && typeof G == "object" && typeof G.catch == "function" && G.catch(() => {
        }), E && L.size === 0 && Y(`(${i}) No dependencies found: processor will never be re-executed`);
      } else
        U || P({ type: y.ProcessorSkipped, processorId: i });
    },
    updateComputeFn(u) {
      S = u;
    },
    dispose() {
      if (I)
        return !1;
      I = !0, w = !1, j && j(i);
      for (const u of M)
        ve(_, N(a(u)));
      return P({ type: y.Dispose, objectId: i }), !0;
    }
  };
  return P({ type: y.New, objectId: i, objectType: B.Processor }), _.compute(!1, "Init"), _;
  function Z(u, m) {
    return u + "." + m;
  }
  function f(u) {
    ee = ge(u, () => O({
      type: "!PCS",
      name: "!Compute",
      processorId: i,
      processorPriority: r,
      trigger: Q,
      isRenderer: D,
      computeCount: W
    }), (m) => {
      Y(`(${i}) Compute error: ${m}`);
    }, () => (w = !0, d.add(_), I ? !1 : void 0), (m) => {
      w = !1, d.shift(), A = (X == null ? void 0 : X.maxComputeCount) || -1, m && A > -1 && W >= A ? _.dispose() : x();
    });
  }
  function x() {
    if (H) {
      for (const u of H)
        M.has(u) || ve(_, N(a(u)));
      H = void 0;
    }
  }
}
var Fe = globalThis && globalThis.__awaiter || function(i, s, r, n) {
  function d(a) {
    return a instanceof r ? a : new r(function(P) {
      P(a);
    });
  }
  return new (r || (r = Promise))(function(a, P) {
    function O(E) {
      try {
        j(n.next(E));
      } catch (D) {
        P(D);
      }
    }
    function v(E) {
      try {
        j(n.throw(E));
      } catch (D) {
        P(D);
      }
    }
    function j(E) {
      E.done ? a(E.value) : d(E.value).then(O, v);
    }
    j((n = n.apply(i, s || [])).next());
  });
};
const Pe = /* @__PURE__ */ new WeakMap(), ie = Symbol("trax.proxy.target"), Ie = Symbol("trax.dict.size"), je = /(\/|\>|\.|\%)/g, ce = "root", Je = ":", Xe = "*", Ue = "-", Ke = "$", Re = "$", ye = "%", _e = ">", Be = "/", fe = "☆trax.dictionary.size☆";
function He(i, s) {
  s && (s.propListeners || (s.propListeners = /* @__PURE__ */ new Set()), s.propListeners.add(i), s.contentProcessors !== void 0 && !s.hasExternalPropListener && (!i.target || N(i.target) !== s) && (s.hasExternalPropListener = !0));
}
function ve(i, s) {
  if (s && s.propListeners)
    if (s.propListeners.delete(i), s.propListeners.size === 0)
      s.propListeners = void 0, s.hasExternalPropListener = !1;
    else if (s.contentProcessors) {
      let r = !1;
      for (const n of s.propListeners)
        !r && (!n.target || N(n.target) !== s) && (r = !0);
      s.hasExternalPropListener = r;
    } else
      s.hasExternalPropListener = !1;
}
function N(i) {
  return i ? Pe.get(i[ie] || i) : void 0;
}
function ue(i, s, r, n) {
  const d = {
    id: s,
    type: r,
    storeId: n,
    propListeners: void 0,
    computedProps: void 0,
    computedContent: void 0,
    awLevel: void 0,
    dictSize: void 0,
    contentProcessors: void 0,
    hasExternalPropListener: !1,
    lastContentProcessorCheck: -1
  };
  return Pe.set(i[ie] || i, d), d;
}
function Ye(i) {
  Pe.delete(i[ie] || i);
}
function Ze() {
  const i = {};
  let s = 0;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), P = Array.isArray;
  let O = 0, v = 0, j = new me(), E = new me(), D = 0;
  const A = Te(i, (e) => JSON.stringify(e, (t, o) => {
    if (typeof o == "object") {
      const l = N(o);
      return l ? `[TRAX ${l.id}]` : o;
    } else if (typeof o == "function")
      return "[Function]";
    return o;
  }), () => {
    u(), I.processChanges();
  });
  let z = !1;
  const I = {
    log: A,
    createStore(e, t) {
      return xe(e, "", t);
    },
    get pendingChanges() {
      return E.size > 0;
    },
    processChanges() {
      if (E.size > 0) {
        D++;
        const e = Z({
          type: "!PCS",
          name: "!Reconciliation",
          index: D,
          processorCount: v
        });
        let t = E.shift();
        for (; t; )
          t.reconciliationId === D ? S(`(${t.id}) Circular reference: Processors cannot run twice during reconciliation`) : t.compute(!1, "Reconciliation", D), t = E.shift();
        e.end();
      }
    },
    reconciliation() {
      return Fe(this, void 0, void 0, function* () {
        const e = A.lastEvent();
        e && e.type !== y.CycleComplete && (yield A.awaitEvent(y.CycleComplete));
      });
    },
    isTraxObject(e) {
      return N(e) !== void 0;
    },
    getTraxId(e) {
      var t;
      return ((t = N(e)) === null || t === void 0 ? void 0 : t.id) || "";
    },
    getTraxObjectType(e) {
      var t;
      return ((t = N(e)) === null || t === void 0 ? void 0 : t.type) || B.NotATraxObject;
    },
    getProcessor(e) {
      return d.get(e);
    },
    getStore(e) {
      return r.get(e);
    },
    getData(e) {
      return m(e) || void 0;
    },
    getActiveProcessor() {
      return j.peek();
    },
    updateArray(e, t) {
      if (!P(e) || !P(t)) {
        S("updateArray: Invalid argument (array expected)");
        return;
      }
      const o = w(e), l = Z({ type: y.ProcessingStart, name: "!ArrayUpdate", objectId: o }), c = e.length, C = t.length;
      for (let b = 0; C > b; b++)
        e[b] = t[b];
      if (C < c) {
        for (let b = C; c > b; b++)
          e[b] = void 0;
        e.splice(C, c - C);
      }
      l.end();
    },
    updateDictionary(e, t) {
      if (e === null || typeof e != "object") {
        S("updateDictionary: Invalid argument (object expected)");
        return;
      }
      const o = w(e), l = Z({ type: y.ProcessingStart, name: "!DictionaryUpdate", objectId: o }), c = I.getObjectKeys(e), C = I.getObjectKeys(t);
      for (const b of c)
        C.includes(b) || delete e[b];
      for (const b of C)
        e[b] = t[b];
      l.end();
    },
    getObjectKeys(e) {
      return N(e) ? e[Ie] ? Object.keys(e) : [] : Object.keys(e);
    }
  };
  function w(e) {
    const t = N(e);
    if (t) {
      ee(t);
      const o = j.peek();
      return o && (t.computedContent ? o.id !== t.computedContent && S(`Computed content conflict: ${t.id} can only be changed by ${t.computedContent}`) : t.computedContent = o.id), t.id;
    }
    return "";
  }
  const L = {
    get(e, t) {
      const o = N(e);
      if (t === ie)
        return e;
      if (t === "toJSON")
        return;
      if (typeof t == "string") {
        let l, c = !1;
        if (o) {
          const C = j.peek();
          C && C.registerDependency(e, o.id, t), x(o), c = t !== "then" && t !== "constructor" || l !== void 0, e[t] !== void 0 && (l = e[t] = M(e[t], t, o)), c && _({ type: "!GET", objectId: o.id, propName: t, propValue: l });
        } else
          l = e[t];
        return l;
      } else if (t === Ie && o) {
        let l = o.dictSize;
        l === void 0 && (o.dictSize = l = Object.keys(e).length);
        const c = j.peek();
        return c && c.registerDependency(e, o.id, fe), x(o), _({ type: "!GET", objectId: o.id, propName: fe, propValue: l }), l;
      }
      return e[t];
    },
    set(e, t, o) {
      if (typeof t != "symbol") {
        const l = e[t], c = N(e);
        if (c) {
          const C = j.peek();
          if (ee(c), C) {
            let b = c.computedContent || void 0;
            if (!c.computedContent) {
              let V = c.computedProps;
              V || (V = c.computedProps = {}), b = V[t], b || (V[t] = C.id);
            }
            b && b !== C.id && (c.computedContent ? S(`Computed content conflict: ${c.id}.${t} can only be set by ${b}`) : S(`Computed property conflict: ${c.id}.${t} can only be set by ${b}`), o = l);
          } else
            c.computedContent && (S(`Computed content conflict: ${c.id}.${t} can only be set by ${c.computedContent}`), o = l);
          if (l !== o) {
            let b = !1, V = !1;
            if (P(e)) {
              const te = e.length;
              o = e[t] = M(o, "" + t, c), b = e.length !== te;
            } else {
              o = e[t] = M(o, "" + t, c);
              const te = c.dictSize;
              if (l === void 0 && te !== void 0) {
                const oe = Object.keys(e).length;
                oe !== te && (c.dictSize = oe, V = !0);
              }
            }
            _({ type: "!SET", objectId: c.id, propName: t, fromValue: l, toValue: o }), typeof t == "string" && f(c, t), b && f(c, "length"), V && f(c, fe);
          }
        } else
          e[t] = o;
      }
      return !0;
    },
    deleteProperty(e, t) {
      if (typeof t == "string" && t in e) {
        const o = N(e);
        return o && o.dictSize && (o.dictSize--, f(o, fe)), delete e[t], !0;
      }
      return !1;
    }
  };
  function M(e, t, o) {
    if (e != null && typeof e == "object") {
      if (e[ie])
        return e;
      let l = N(e);
      if (l)
        return e;
      let c = 0;
      if (t[0] === Re) {
        let C = 0, b = t.length;
        for (; C < b && t[C] === Re; ) {
          c++;
          C++;
        }
      } else
        o.awLevel && (c = o.awLevel);
      if (c !== 1 && !l && (e = H(o.id + Xe + t, e, o.storeId, !0), c && c > 1)) {
        let C = N(e);
        C && !C.awLevel && (C.awLevel = c - 1);
      }
    }
    return e;
  }
  function H(e, t, o, l = !1) {
    const c = m(e);
    if (c)
      if (t && l) {
        const V = e;
        for (; s++, e = V + Ke + s, !!n.get(e); )
          ;
      } else
        return c;
    let C;
    P(t) ? C = ue(t, e, B.Array, o) : C = ue(t, e, B.Object, o), _({ type: "!NEW", objectId: e, objectType: C.type });
    const b = new Proxy(t, L);
    return p(e, b, o), b;
  }
  return I;
  function J(e) {
    const t = e.priority;
    E.insert((o, l) => {
      if (!l || t <= l.priority)
        return e;
    });
  }
  function Q(e, t) {
    let o = "";
    if (P(e) ? o = e.map((l) => {
      if (typeof l == "object") {
        const c = N(l);
        if (c) {
          const C = c.id;
          if (t) {
            const b = t.length + 1;
            if (C.length > b && C.slice(0, b) === t + "/")
              return C.slice(b);
          }
          return C.replace(/\//g, Ue);
        } else
          return S("Invalid id param: not a trax object"), X();
      }
      return "" + l;
    }).join(Je) : o = e, o.match(je)) {
      const l = o.replace(je, "");
      S(`Invalid trax id: ${o} (changed into ${l})`), o = l;
    }
    return o;
  }
  function X() {
    return "" + Math.floor(Math.random() * 1e5);
  }
  function Y(e, t, o) {
    let l = Q(e, t);
    return o ? t + ye + l : t + Be + l;
  }
  function ee(e, t) {
    if (e) {
      o(e.computedContent) && (e.computedContent = void 0);
      const l = e.computedProps;
      l && t && o(l[t]) && (l[t] = void 0);
    }
    function o(l) {
      return !!(l && !d.has(l));
    }
  }
  function S(e) {
    A.error("[TRAX] " + e);
  }
  function _(e) {
    e.type === y.Error ? S("" + e.data) : e.type === y.Info ? A.info("" + e.data) : A.event(e.type, e, i);
  }
  function Z(e) {
    return A.startProcessingContext(e, i);
  }
  function f(e, t) {
    const o = e.propListeners;
    if (o)
      for (const l of o)
        l.notifyChange(e.id, t) && J(l);
  }
  function x(e) {
    if (e.lastContentProcessorCheck !== D && (e.lastContentProcessorCheck = D, e.contentProcessors))
      for (const t of e.contentProcessors)
        t.compute(!1, "TargetRead");
  }
  function u() {
    !z && globalThis.__TRAX_DEVTOOLS__ && (z = !0, console.log("[Trax] DevTools detected"), globalThis.__TRAX_DEVTOOLS__.connectTrax(I));
  }
  function m(e) {
    const t = n.get(e);
    return t && t.deref() || null;
  }
  function p(e, t, o) {
    n.set(e, new WeakRef(t)), U(e, o);
  }
  function T(e, t, o) {
    if (t && Ye(t), o) {
      if (o.contentProcessors) {
        for (const l of o.contentProcessors)
          l.dispose();
        o.contentProcessors = void 0;
      }
      G(e, o.storeId);
    }
    return _({ type: "!DEL", objectId: e }), n.delete(e);
  }
  function U(e, t) {
    let o = a.get(t);
    o || (o = /* @__PURE__ */ new Set(), a.set(t, o)), o.add(e);
  }
  function G(e, t) {
    let o = a.get(t);
    o && o.delete(e);
  }
  function xe(e, t, o, l) {
    const c = Ce(e, t, !0);
    let C, b = !0, V = !1;
    const te = Z({ type: "!PCS", name: "!StoreInit", storeId: c }), oe = typeof o == "function" ? o : (h) => {
      h.init(o);
    }, se = {
      get id() {
        return c;
      },
      get root() {
        return C;
      },
      get disposed() {
        return V;
      },
      createStore(h, g) {
        const $ = xe(h, c, g, Ae);
        return U($.id, c), $;
      },
      init(h, g) {
        return b ? C = de(ce, h, !0, g) : S(`(${c}) Store.init can only be called during the store init phase`), C;
      },
      add(h, g, $) {
        return de(h, g, !1, $);
      },
      get(h) {
        const g = Y(h, c, !1);
        return m(g) || void 0;
      },
      remove(h) {
        const g = N(h);
        let $ = "";
        if (g)
          if ($ = g.id, g.type === B.Processor)
            S(`(${$}) Processors cannot be disposed through store.remove()`);
          else if (g.type === B.Store)
            S(`(${$}) Stores cannot be disposed through store.remove()`);
          else if ($.slice(c.length + 1) === ce)
            S(`(${$}) Root objects cannot be disposed through store.remove()`);
          else
            return T($, h, g);
        return !1;
      },
      compute(h, g, $, R) {
        let k = Y(h, c, !0);
        return be(k, "", g, null, $, R);
      },
      getProcessor(h) {
        const g = Y(h, c, !0);
        return d.get(g);
      },
      getStore(h) {
        const g = Ce(h, c, !1);
        return r.get(g);
      },
      dispose() {
        return le();
      },
      async(h, g) {
        let $ = "[ASYNC]", R;
        typeof h == "string" ? ($ = h, R = g) : R = h;
        const k = ge(R, () => A.startProcessingContext({ name: c + "." + $ + "()", storeId: c }), (F) => {
          S(`(${c}.${$}) error: ${F}`);
        });
        return k.updateAsyncName = (F) => {
          $ = F;
        }, k;
      }
    };
    ue(se, c, B.Store, ""), _({ type: "!NEW", objectId: c, objectType: B.Store }), r.set(c, se);
    function le() {
      if (V)
        return !1;
      r.delete(c), V = !0, l && l(c);
      const h = a.get(c);
      if (h) {
        a.delete(c);
        const g = c.length;
        let $, R;
        for (const k of h)
          R = void 0, $ = k.charAt(g), $ === _e ? (R = r.get(k), R && R.dispose()) : $ === ye ? (R = d.get(k), R && R.dispose()) : T(k);
      }
      return _({ type: "!DEL", objectId: c }), !0;
    }
    function Ae(h) {
      G(h, c);
    }
    function Oe(h) {
      d.delete(h) && (v--, G(h, c));
    }
    function De(h) {
      const g = h;
      for (const $ of Object.keys(g))
        if (typeof g[$] == "function") {
          const R = g[$];
          typeof R.updateAsyncName == "function" ? R.updateAsyncName($) : g[$] = ge(R, () => A.startProcessingContext({ name: c + "." + $ + "()", storeId: c }), (k) => {
            S(`(${c}.${$}) error: ${k}`);
          });
        }
    }
    let q;
    try {
      q = oe(se), b = !1, q !== void 0 && (q !== null && typeof q == "object" ? De(q) : (S(`createStore init function must return a valid object (${c})`), q = {}));
    } catch (h) {
      S(`createStore init error (${c}): ${h}`), q = {};
    }
    if (b = !1, Le(), q === void 0)
      return te.end(), se;
    const ne = q;
    if (typeof ne.dispose == "function") {
      const h = ne.dispose;
      ne.dispose = () => {
        h.call(q), le();
      };
    } else
      ne.dispose = le;
    return ne.id && S(`Store id will be overridden and must not be provided by init function (${c})`), ne.id = c, te.end(), ne;
    function Le() {
      C == null && (S(`(${c}) createStore init must define a root object - see also: init()`), C = de(ce, {}, !0));
    }
    function ke() {
      return V ? (S(`(${c}) Stores cannot be used after being disposed`), !1) : !0;
    }
    function Ce(h, g, $ = !0) {
      let R = Q(h);
      g !== "" && (R = g + _e + R);
      let k = "";
      if ($) {
        let F = r.get(R), K = 0;
        for (; F; )
          k = "" + ++K, F = F = r.get(R + k);
      }
      return R + k;
    }
    function de(h, g, $, R) {
      let k = Q(h, c);
      if ($ || k === ce && (S("Store.add: Invalid id 'root' (reserved)"), k = X()), ke()) {
        (g == null || typeof g != "object") && (S(`(${c}) Store.add(${h}): Invalid init object parameter: [${typeof g}]`), g = {});
        const F = H(Y(k, c, !1), g, c);
        if (R !== void 0) {
          const K = N(F), Se = [];
          for (const ae of Object.getOwnPropertyNames(R)) {
            const ze = `${c}${ye}${k}[${ae}]`;
            Se.push(be(ze, ae, R[ae], F, !0, !1));
          }
          K.contentProcessors = Se;
        }
        return F;
      } else
        return g;
    }
    function be(h, g, $, R, k, F) {
      let K = d.get(h);
      return K ? (K.updateComputeFn($), K) : (O++, v++, K = Ge(h, g, O, $, j, m, _, Z, R, Oe, k, F), ue(K, h, B.Processor, c), d.set(h, K), U(h, c), K);
    }
  }
}
const qe = Ze();
export {
  B as TraxObjectType,
  qe as trax,
  y as traxEvents
};
