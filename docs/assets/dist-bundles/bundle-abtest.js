import { interfaceId, asm } from '@asimojs/asimo';
import { jsx, jsxs } from 'react/jsx-runtime';
import { componentId, component } from '@traxjs/trax-preact';

/**
 * Create a test id by removing the unique counter from component id
 * and concatenating the optional suffix
 */
function testId(suffix) {
    return componentId().replace(/\:\d+$/, suffix ? ":" + suffix : "");
}

const ImgList = component("ImgList", (props) => {
    let { title, height, imgs } = props;
    height = height || 150;
    const content = jsx("div", Object.assign({ style: { width: "200%" } }, { children: imgs === null || imgs === void 0 ? void 0 : imgs.map((img, idx) => {
            const ms = (idx === 0) ? "" : "ms-1";
            return jsx("a", Object.assign({ href: img.href }, { children: jsxs("div", Object.assign({ className: `inline-block ${ms}`, style: { width: img.width } }, { children: [jsx("div", { children: jsx("img", { alt: img.title, style: { height: height, width: img.width }, loading: "lazy", src: img.src, className: "h-full w-full border rounded-xl object-scale-down" }) }), jsx("div", Object.assign({ className: "pt-1 pe-1" }, { children: img.title }))] })) }));
        }) }));
    return jsxs("div", Object.assign({ "data-id": componentId(), "data-testid": testId(), className: 'imgList mt-5' }, { children: [jsx("div", Object.assign({ className: "title text-lg pb-2" }, { children: title })), jsx("div", Object.assign({ className: 'inline-block ', style: { height: height } }, { children: content }))] }));
});

const VideoList = component("VideoList", (props) => {
    let { title, videos } = props;
    const content = jsx("div", { children: videos === null || videos === void 0 ? void 0 : videos.map((v, idx) => {
            const mt = (idx === 0) ? "" : "mt-2";
            return jsxs("div", Object.assign({ className: `${mt} video flex border-t pt-2` }, { children: [jsx(Video, { className: "colA", img: v.video.img, src: v.video.src, duration: v.video.duration }), jsx("a", Object.assign({ href: v.href }, { children: jsxs("div", Object.assign({ className: "colB ps-5" }, { children: [jsx("div", Object.assign({ className: "title text-base" }, { children: jsx("a", Object.assign({ className: "link", href: v.href }, { children: v.title })) })), jsxs("div", Object.assign({ className: "text-xs mt-2" }, { children: [jsx("em", { children: v.originSite }), jsx("span", Object.assign({ "aria-hidden": "true" }, { children: " \u00B7 " })), v.originPage] })), jsx("div", Object.assign({ className: "text-xs text-neutral-600" }, { children: v.date }))] })) }))] }));
        }) });
    return jsxs("div", Object.assign({ "data-id": componentId(), "data-testid": testId(), className: 'videoList mt-5 pb-2 border-b' }, { children: [jsx("div", Object.assign({ className: "title text-xl pb-2" }, { children: title })), jsx("div", { children: content })] }));
});
const Video = component("VideoList", (props) => {
    const { className, img, src, duration } = props;
    return jsxs("div", Object.assign({ className: `${className || ""} relative rounded-lg overflow-hidden`, style: { width: 148, height: 83 } }, { children: [jsx("img", { className: "w-full h-full", src: img, loading: "lazy" }), jsx("div", Object.assign({ className: "video absolute top-0 left-0" }, { children: jsx("video", { onMouseOver: e => start(e), src: src, className: "w-full h-full", muted: true, playsInline: true, preload: "none", "webkit-playsinline": "" }) })), jsxs("div", Object.assign({ className: "absolute text-white text-base opacity-80", style: { top: 2, left: 60 } }, { children: ["\u00A0", jsx("svg", Object.assign({ focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 32 }, { children: jsx("path", { className: "fill-current", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" }) }))] })), jsx("div", Object.assign({ className: "absolute top-14 left-2 text-white text-xs bg-neutral-800 rounded-full pt-0.5 px-2 bg-opacity-50" }, { children: jsx("span", Object.assign({ "aria-label": "duration: " + duration }, { children: duration })) }))] }));
    function start(e) {
        const me = e.target;
        me.play();
        me.loop = true;
    }
});

// Interface ID that will be used by the consumer
const ABBundleIID = interfaceId("asimo.dpademo.bundles.abtest");
const bundle = {
    imgList: ImgList,
    videoList: VideoList
};
asm.registerService(ABBundleIID, () => bundle);

export { ABBundleIID, bundle as default };
