import { interfaceId, asm } from '@asimojs/asimo';
import { jsx, jsxs } from 'react/jsx-runtime';
import { component, componentId } from '@traxjs/trax-preact';

const ImgList = component("ImgList", (props) => {
    let { title, height, imgs } = props;
    height = height || 150;
    const content = jsx("div", Object.assign({ style: { width: "200%" } }, { children: imgs === null || imgs === void 0 ? void 0 : imgs.map((img, idx) => {
            const ms = (idx === 0) ? "" : "ms-1";
            return jsx("a", Object.assign({ href: img.href }, { children: jsxs("div", Object.assign({ className: `inline-block ${ms}`, style: { width: img.width } }, { children: [jsx("div", { children: jsx("img", { alt: img.title, style: { height: height, width: img.width }, src: img.src, className: "h-full w-full border rounded-xl object-scale-down" }) }), jsx("div", Object.assign({ className: "pt-1 pe-1" }, { children: img.title }))] })) }));
        }) }));
    return jsxs("div", Object.assign({ "data-id": componentId(), className: 'imgList mt-5' }, { children: [jsx("div", Object.assign({ className: "title text-lg pb-2" }, { children: title })), jsx("div", Object.assign({ className: 'inline-block ', style: { height: height } }, { children: content }))] }));
});

// Interface ID that will be used by the consumer
const ABBundleIID = interfaceId("asimo.dpademo.bundles.abtest");
const bundle = {
    imgList: ImgList
};
asm.registerService(ABBundleIID, () => bundle);

export { ABBundleIID, bundle as default };
