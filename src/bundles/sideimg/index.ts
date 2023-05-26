import { asm, interfaceId } from "@asimojs/asimo";
import { ComponentBundle } from "../types";
import { Dialog } from "./dialog";
import { ImgBlock } from "./imgBlock";
import { ImgGroup } from "./imgGroup";

// Interface ID that will be used by the consumer
export const SideImgIID = interfaceId<ComponentBundle>("asimo.dpademo.bundles.sideimg");

const bundle = {
    dialog: Dialog,
    imgBlock: ImgBlock,
    imgGroup: ImgGroup,
}

asm.registerService(SideImgIID, () => bundle);
export default bundle;
