import { component, componentId } from "@traxjs/trax-preact";
import { useContext } from "../utils";
import { Lml2JsxIID } from "../../views/types";
import { LML } from "@asimojs/lml/dist/types";

export interface ImgBlockProps {
    title: string;
    header?: {
        logo: LML;
        content: LML;
    };
    img: {
        src: string;
        href: string;
        width: number;
        height: number;
    }
}

export const ImgBlock = component("ImgBlock", (props: ImgBlockProps) => {
    let { title, img, header } = props;


    const lml2jsx = useContext(Lml2JsxIID, () => "[...]")!;

    const hdr = header ? <div className="header bg-neutral-400 h-10 mt-0 flex pt-2 px-3 text-white">
        <div className="border rounded-full bg-white flex items-center justify-center" style={{ height: 26, width: 26 }}>{
            lml2jsx(header.logo)}
        </div>
        <div className="pt-1 px-3">{lml2jsx(header.content)}</div>
    </div> : ""

    return <div data-id={componentId()} className='imgblock'>
        {hdr}
        <a href={img.href}>
            <img className="w-full" src={img.src} alt={title} width={img.width} height={img.height} />
        </a>
        <div className="title text-base flex py-4 px-3 border-b-2">
            <div className="flex-1 pe-5">
                <div>
                    <a className="hover:underline" href={img.href}>
                        {title}
                    </a>
                </div>
                <div className="text-xs text-neutral-600">
                    Images may be subject to copyright.
                </div>
            </div>
            <div className="text-sm " >
                <a href={img.href} className="inline-block px-6 py-1 bg-neutral-400 rounded-full hover:underline">Visit</a>
            </div>
        </div>
    </div >
});
