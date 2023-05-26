import { JsxContent, LML } from "@asimojs/lml/dist/types";
import { component, componentId } from "@traxjs/trax-preact";
import { useContext } from "../utils";
import { Lml2JsxIID } from "../../views/types";
import { asm } from "@asimojs/asimo";
import { SearchServiceIID } from "../../stores/types";


export interface DialogProps {
    title?: string;
    header?: LML;
    children: JsxContent;
}


export const Dialog = component("Dialog", (props: DialogProps) => {
    let { title, children, header } = props;

    const lml2jsx = useContext(Lml2JsxIID, () => "[...]")!;

    const hdr = header ? <div className="header top-0">{lml2jsx(header)}</div> : ""

    return <div data-id={componentId()}
        className='dialog relative bg-neutral-300 border-neutral-200 border rounded-lg mt-7 overflow-hidden min-h-full'>
        <div className="close-btn absolute right-2 top-1.5 cursor-pointer text-neutral-700 px-1 py-1
            hover:bg-neutral-600 hover:text-white hover:rounded-full" onClick={close}>
            <svg viewBox="0 0 24 24" focusable="false" height="24" width="24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path className="fill-current" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
        </div>
        {hdr}
        <div className="content px-3 pb-7 text-xs">
            {children}
        </div>
    </div>

    async function close() {
        const ss = await asm.get(SearchServiceIID);
        if (ss) {
            ss.closePopover();
        }
    }
});
