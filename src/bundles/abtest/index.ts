import { asm, interfaceId } from "@asimojs/asimo";
import { ComponentBundle } from "../types";
import { ImgList } from "./imgList";
import { VideoList } from "./videoList";

// Interface ID that will be used by the consumer
export const ABBundleIID = interfaceId<ComponentBundle>("asimo.dpademo.bundles.abtest");

const bundle = {
    imgList: ImgList,
    videoList: VideoList
}

asm.registerService(ABBundleIID, () => bundle);

export default bundle;
