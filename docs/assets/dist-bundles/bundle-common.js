import { interfaceId, asm } from '@asimojs/asimo';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { trax } from '@traxjs/trax';
import { component, useStore, componentId, useTraxState } from '@traxjs/trax-preact';
import { useContext as useContext$1 } from 'preact/hooks';
import 'preact';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// ------------------------------------------------------------------------------------------------------------
const NavServiceIID = interfaceId("asimo.doc.stores.NavService");
// ------------------------------------------------------------------------------------------------------------
const SearchServiceIID = interfaceId("asimo.doc.stores.SearchService");
// ------------------------------------------------------------------------------------------------------------

function createCounterStore() {
    return trax.createStore("CounterStore", (store) => {
        const data = store.init({ count: 0 }); // init the store root object
        const interval = setInterval(() => data.count++, 1000);
        return {
            data,
            dispose() {
                clearInterval(interval);
            },
            reset() {
                data.count = 0;
            },
            home() {
                return __awaiter(this, void 0, void 0, function* () {
                    const nav = yield asm.get(NavServiceIID);
                    nav === null || nav === void 0 ? void 0 : nav.home();
                });
            }
        };
    });
}
const Counter = component("Counter", () => {
    // get or create a CounterStore instance
    const cs = useStore(createCounterStore);
    return jsxs("div", Object.assign({ "data-id": componentId(), className: 'counter', title: "Click to reset", onClick: cs.reset }, { children: [jsxs("h1", { children: [" Counter 7:  ", jsx("span", Object.assign({ className: "counter-value" }, { children: cs.data.count }))] }), jsx("button", Object.assign({ onClick: cs.home }, { children: " Navigate Home " }))] }));
});

const ImgList = component("ImgList", (props) => {
    let { height, imgs, href } = props;
    height = height || 150;
    const content = jsx("div", Object.assign({ style: { width: "200%" } }, { children: imgs === null || imgs === void 0 ? void 0 : imgs.map((img, idx) => {
            const ms = (idx === 0) ? "" : "ms-1";
            return jsx("div", Object.assign({ className: `inline-block cursor-pointer ${ms}`, style: { height: height, width: img.width }, onClick: () => handleClick(img.key) }, { children: jsx("img", { alt: img.alt, src: img.src, className: "h-full w-full" }) }));
        }) }));
    return jsx("div", Object.assign({ "data-id": componentId(), className: 'imgList' }, { children: jsx("div", Object.assign({ className: 'inline-block border rounded-xl overflow-hidden', style: { height: height + "px" } }, { children: href ? jsx("a", Object.assign({ href: href, "aria-label": "Images in this result" }, { children: content }))
                : content })) }));
    function handleClick(imgKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (imgKey) {
                // submit request to get more data
                const ss = yield asm.get(SearchServiceIID);
                if (ss) {
                    const q = ss.data.lastResult.query;
                    ss.getMoreResults({
                        searchInput: q.searchInput,
                        src: {
                            key: imgKey,
                            componentType: "ImgList",
                        }
                    });
                }
            }
        });
    }
});

/**
 * Hack to extract the first context object in preact
 * Necessary until preact allows to define and retrieve a context with/by id
 * (today id is generated and first id is "__cC0" - besides transpiler transforms the "_id" property into "__c")
 */
const CTXT_FIRST_ID = "__cC0";
const CTXT_ID_PROP = "__c"; // _id property after transpilation (!)
function getGlobalCtxt() {
    // Preact createContext doesn't allow to provide a context id for the time being
    // This implementation assumes that only one global context object will be created and that its id will be CTXT_FIRST_ID
    // it also assumes that the transpiler will transform the _id property into CTXT_ID_PROP
    return useContext$1({ [CTXT_ID_PROP]: CTXT_FIRST_ID });
}
function useContext(iid, defaultValue = null) {
    const globalCtxt = getGlobalCtxt();
    if (globalCtxt) {
        return globalCtxt.subCtxts[iid.ns] || defaultValue;
    }
    return null;
}

const Lml2JsxIID = interfaceId("asimo.dpademo.views.Lml2JSX");

const ResultCard = component("ResultCard", (props) => {
    let { lang, header, children, sideContent, footerLinks, footer } = props;
    const lml2jsx = useContext(Lml2JsxIID);
    let sideSection = "";
    let logo = "";
    let footerSection1 = "";
    let footerSection2 = "";
    if (lml2jsx) {
        if (sideContent) {
            sideSection = lml2jsx(sideContent);
        }
        if (header.src.logo) {
            logo = lml2jsx(header.src.logo);
        }
        if (footerLinks) {
            footerSection1 = jsx("div", Object.assign({ className: "pt-1" }, { children: footerLinks.map((lnk, idx) => {
                    if (idx === 0) {
                        return lml2jsx(lnk);
                    }
                    else {
                        return [" · ", lml2jsx(lnk)];
                    }
                }) }));
        }
        if (footer) {
            footerSection2 = jsx("div", Object.assign({ className: "pt-1 text-sm" }, { children: lml2jsx(footer) }));
        }
    }
    const headerLast = header.pos === "last";
    const topMargin = headerLast ? "" : "mt-7";
    const headerMargin = headerLast ? "mt-2" : "";
    const headerSection = jsxs(Fragment, { children: [jsxs("div", Object.assign({ className: `header flex ${headerMargin}` }, { children: [!logo ? "" :
                        jsx("div", Object.assign({ className: "border rounded-full flex items-center justify-center mt-1", style: { height: 26, width: 26 } }, { children: logo })), jsxs("div", Object.assign({ className: logo ? "px-2" : "" }, { children: [header.src.name ? jsx("div", Object.assign({ className: "text-sm" }, { children: header.src.name })) : "", jsx("div", Object.assign({ className: "text-xs" }, { children: header.src.ref }))] }))] })), jsx("div", Object.assign({ className: "title pt-2 text-xl leading-tight" }, { children: jsx("a", Object.assign({ className: "link font-medium", href: header.href }, { children: header.title })) }))] });
    return jsxs("div", Object.assign({ "data-id": componentId(), lang: lang, className: `resultCard flex font-normal ${topMargin}` }, { children: [jsxs("div", Object.assign({ className: "mainsection flex-1 pe-2" }, { children: [headerLast ? "" : headerSection, jsx("div", Object.assign({ className: 'content text-xs pt-1' }, { children: children })), headerLast ? headerSection : "", footerSection1, footerSection2] })), jsx("div", Object.assign({ className: "sidesection text-xs " }, { children: sideSection }))] }));
});

const Img = component("Img", (props) => {
    let { height, width, alt, src, href } = props;
    return jsx("div", Object.assign({ "data-id": componentId(), className: 'img inline-block border rounded-md overflow-hidden', style: { height, width } }, { children: jsx("a", Object.assign({ href: href }, { children: jsx("img", { style: { height, width }, alt: alt, src: src, loading: "lazy" }) })) }));
});

const Facts = component("Facts", (props) => {
    let { entries, cols, entryClassName } = props;
    cols = cols || 2;
    const len = entries.length;
    const mid = Math.ceil(len / 2);
    entryClassName = entryClassName || "text-xs";
    const lml2jsx = useContext(Lml2JsxIID, () => "[...]");
    if (cols > 1) {
        return jsxs("div", Object.assign({ "data-id": componentId(), className: 'facts columns-2 pt-2' }, { children: [jsx("div", { children: printFacts(0, mid) }), jsx("div", { children: printFacts(mid + 1, len - 1) })] }));
    }
    else {
        return jsx("div", Object.assign({ "data-id": componentId(), className: 'facts  pt-2' }, { children: jsx("div", Object.assign({ className: "" }, { children: printFacts(0, len - 1) })) }));
    }
    function printFacts(startIdx, lastIdx) {
        const r = [];
        for (let i = startIdx; lastIdx >= i; i++) {
            const fact = entries[i];
            r.push(jsxs("div", Object.assign({ className: entryClassName }, { children: [jsxs("span", Object.assign({ className: "name text-neutral-500" }, { children: [fact.name, ": "] })), jsx("span", Object.assign({ className: "value" }, { children: lml2jsx(fact.value) }))] })));
        }
        return r;
    }
});

const Accordion = component("Accordion", (props) => {
    let { title, keyValue, sections, sectionClassName } = props;
    sectionClassName = sectionClassName || "py-2";
    const lml2jsx = useContext(Lml2JsxIID, () => "[...]");
    const state = useTraxState({ sections: {} });
    const sectionStates = state.sections;
    return jsxs("div", Object.assign({ "data-id": componentId(), className: 'accordion mt-7 border-b' }, { children: [!title ? "" :
                jsx("div", Object.assign({ className: "title text-xl pb-2" }, { children: lml2jsx(title) })), jsx("div", Object.assign({ className: "sections text-base", onClick: handleClick }, { children: sections.map((section, idx) => jsxs("div", Object.assign({ className: "section" }, { children: [jsxs("div", Object.assign({ "data-section-key": section.key, className: `${sectionClassName} flex border-t cursor-pointer` }, { children: [section.iconSrc ? jsx("div", Object.assign({ className: "icon pe-4" }, { children: jsx("img", { className: "object-fill border rounded", src: section.iconSrc, style: { height: 30, width: 30 }, "aria-hidden": "true" }) })) : "", jsx("div", Object.assign({ className: "flex-1" }, { children: section.title })), jsx("div", Object.assign({ className: "w-8" }, { children: jsx(ArrowIcon, { idx: idx, up: !!sectionStates[section.key] }) }))] })), jsx("div", Object.assign({ className: "content pt-1 pb-4 " + (sectionStates[section.key] ? "" : "hidden") }, { children: lml2jsx(section.content) }))] }))) }))] }));
    function handleClick(e) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let sectionKey = "", elt = e.target;
            while (elt) {
                if (((_a = elt.dataset) === null || _a === void 0 ? void 0 : _a.sectionKey) !== undefined) {
                    sectionKey = (_b = elt.dataset) === null || _b === void 0 ? void 0 : _b.sectionKey;
                    break;
                }
                elt = elt.parentElement || null;
            }
            if (sectionKey) {
                const open = !(sectionStates[sectionKey]);
                sectionStates[sectionKey] = open;
                if (open) {
                    // submit request to get more data
                    const ss = yield asm.get(SearchServiceIID);
                    if (ss) {
                        const q = ss.data.lastResult.query;
                        ss.getMoreResults({
                            searchInput: q.searchInput,
                            src: {
                                key: keyValue,
                                componentType: "Accordion",
                                firstContentKey: sections[0].key,
                                lastContentKey: sections[sections.length - 1].key
                            }
                        });
                    }
                }
            }
        });
    }
});
const ArrowIcon = component("ArrowIcon", (props) => {
    let dim = 15;
    const dir = props.up ? "rotate-180" : "";
    return jsxs("svg", Object.assign({ className: `arrow-icon ${dir}`, width: dim, height: dim, viewBox: "0 -4.5 20 20", version: "1.1", "aria-hidden": "true" }, { children: [jsx("desc", Object.assign({ lang: "en" }, { children: "Arrow Down" })), jsx("g", Object.assign({ stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, { children: jsx("g", Object.assign({ transform: "translate(-220.000000, -6684.000000)", className: "fill-current" }, { children: jsx("g", Object.assign({ id: "icons", transform: "translate(56.000000, 160.000000)" }, { children: jsx("path", { d: "M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" }) })) })) }))] }));
});

const Section = component("Section", (props) => {
    let { children, className, title } = props;
    className = className || "";
    let titleSection = "";
    if (title) {
        titleSection = jsx("div", Object.assign({ className: "text-lg pb-2" }, { children: title }));
    }
    return jsxs("div", Object.assign({ "data-id": componentId(), className: "section mt-7 text-sm" }, { children: [titleSection, jsxs("div", Object.assign({ className: className }, { children: [" ", children, " "] }))] }));
});

// Interface ID that will be used by the consumer
const CommonBundleIID = interfaceId("asimo.dpademo.bundles.common");
const bundle = {
    counter: Counter,
    imgList: ImgList,
    rcard: ResultCard,
    img: Img,
    facts: Facts,
    accordion: Accordion,
    section: Section
};
asm.registerService(CommonBundleIID, () => bundle);

export { CommonBundleIID, bundle as default };
