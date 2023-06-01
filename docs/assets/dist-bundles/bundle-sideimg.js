import { interfaceId, asm } from '@asimojs/asimo';
import { jsx, jsxs } from 'react/jsx-runtime';
import { componentId, component } from '@traxjs/trax-preact';
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

// ------------------------------------------------------------------------------------------------------------
interfaceId("asimo.doc.stores.NavService");
// ------------------------------------------------------------------------------------------------------------
const SearchServiceIID = interfaceId("asimo.doc.stores.SearchService");
// ------------------------------------------------------------------------------------------------------------

/**
 * Create a test id by removing the unique counter from component id
 * and concatenating the optional suffix
 */
function testId(suffix) {
    return componentId().replace(/\:\d+$/, suffix ? ":" + suffix : "");
}

const Dialog = component("Dialog", (props) => {
    let { title, children, header } = props;
    const lml2jsx = useContext(Lml2JsxIID, () => "[...]");
    const hdr = header ? jsx("div", Object.assign({ className: "header top-0" }, { children: lml2jsx(header) })) : "";
    return jsxs("div", Object.assign({ "data-id": componentId(), "data-testid": testId(), className: 'dialog relative bg-neutral-300 border-neutral-200 border rounded-lg mt-7 overflow-hidden min-h-full' }, { children: [jsx("div", Object.assign({ className: "close-btn absolute right-2 top-1.5 cursor-pointer text-neutral-700 px-1 py-1\n            hover:bg-neutral-600 hover:text-white hover:rounded-full", onClick: close }, { children: jsxs("svg", Object.assign({ viewBox: "0 0 24 24", focusable: "false", height: "24", width: "24" }, { children: [jsx("path", { d: "M0 0h24v24H0z", fill: "none" }), jsx("path", { className: "fill-current", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })] })) })), hdr, jsx("div", Object.assign({ className: "content px-3 pb-7 text-xs" }, { children: children }))] }));
    function close() {
        return __awaiter(this, void 0, void 0, function* () {
            const ss = yield asm.get(SearchServiceIID);
            if (ss) {
                ss.closePopover();
            }
        });
    }
});

const ImgBlock = component("ImgBlock", (props) => {
    let { title, img, header } = props;
    const lml2jsx = useContext(Lml2JsxIID, () => "[...]");
    const hdr = header ? jsxs("div", Object.assign({ className: "header bg-neutral-400 h-10 mt-0 flex pt-2 px-3 text-white" }, { children: [jsx("div", Object.assign({ className: "border rounded-full bg-white flex items-center justify-center", style: { height: 26, width: 26 } }, { children: lml2jsx(header.logo) })), jsx("div", Object.assign({ className: "pt-1 px-3" }, { children: lml2jsx(header.content) }))] })) : "";
    return jsxs("div", Object.assign({ "data-id": componentId(), "data-testid": testId(), className: 'imgblock' }, { children: [hdr, jsx("a", Object.assign({ href: img.href }, { children: jsx("img", { className: "w-full", src: img.src, alt: title, width: img.width, height: img.height, loading: "lazy" }) })), jsxs("div", Object.assign({ className: "title text-base flex py-4 px-3 border-b-2" }, { children: [jsxs("div", Object.assign({ className: "flex-1 pe-5" }, { children: [jsx("div", { children: jsx("a", Object.assign({ className: "hover:underline", href: img.href }, { children: title })) }), jsx("div", Object.assign({ className: "text-xs text-neutral-600" }, { children: "Images may be subject to copyright." }))] })), jsx("div", Object.assign({ className: "text-sm " }, { children: jsx("a", Object.assign({ href: img.href, className: "inline-block px-6 py-1 bg-neutral-400 rounded-full hover:underline" }, { children: "Visit" })) }))] }))] }));
});

const ImgGroup = component("ImgGroup", (props) => {
    let { title, images } = props;
    return jsxs("div", Object.assign({ "data-id": componentId(), "data-testid": testId(), className: 'imgblock mt-5' }, { children: [jsx("div", Object.assign({ className: "head text-xl pb-2" }, { children: title })), jsx("div", Object.assign({ className: "content columns-3 gap-3 pt-2" }, { children: images.map(img => jsx("div", Object.assign({ className: "w-full break-inside-avoid-column\tmb-3" }, { children: jsxs("a", Object.assign({ href: img.href }, { children: [jsx("img", { className: "w-full rounded-xl block", src: img.src, alt: img.title, height: img.height, width: img.width, loading: "lazy" }), jsx("p", Object.assign({ title: img.title, className: "title pt-2 text-xs truncate max-h-6 overflow-hidden" }, { children: img.title }))] })) }))) }))] }));
});

// Interface ID that will be used by the consumer
const SideImgIID = interfaceId("asimo.dpademo.bundles.sideimg");
const bundle = {
    dialog: Dialog,
    imgBlock: ImgBlock,
    imgGroup: ImgGroup,
};
asm.registerService(SideImgIID, () => bundle);

export { SideImgIID, bundle as default };
