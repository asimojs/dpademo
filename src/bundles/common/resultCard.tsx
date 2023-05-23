import { component, componentId } from "@traxjs/trax-preact";
import { useContext } from "../utils";
import { Lml2JsxIID } from "../../views/types";
import { JsxContent, LML } from "@asimojs/lml/dist/types";


export interface RcProps {
    lang?: string;
    header: RcHeader;
    sideContent?: LML;
    footerLinks?: LML[];
    footer?: LML;
    children?: JsxContent;
}
export interface RcHeader {
    title: string;
    href: string;
    pos?: "first" | "last";
    src: {
        name?: string;
        ref: string;
        logo?: LML;
    },
    misc?: LML;
}

export const ResultCard = component("ResultCard", (props: RcProps) => {
    let { lang, header, children, sideContent, footerLinks, footer } = props;
    const lml2jsx = useContext(Lml2JsxIID);

    let sideSection: JsxContent = "";
    let logo: JsxContent = "";
    let footerSection1: JsxContent = "";
    let footerSection2: JsxContent = "";
    if (lml2jsx) {
        if (sideContent) {
            sideSection = lml2jsx(sideContent);
        }
        if (header.src.logo) {
            logo = lml2jsx(header.src.logo);
        }
        if (footerLinks) {
            footerSection1 = <div className="pt-1">
                {footerLinks.map((lnk, idx) => {
                    if (idx === 0) {
                        return lml2jsx(lnk);
                    } else {
                        return [" · ", lml2jsx(lnk)];
                    }
                })}
            </div>;
        }
        if (footer) {
            footerSection2 = <div className="pt-1 text-sm">
                {lml2jsx(footer)}
            </div>;
        }
    }

    const headerLast = header.pos === "last";
    const topMargin = headerLast ? "" : "mt-7";
    const headerMargin = headerLast ? "mt-2" : "";

    const headerSection = <>
        <div className={`header flex ${headerMargin}`}>
            {!logo ? "" :
                <div className="border rounded-full flex items-center justify-center mt-1" style={{ height: 26, width: 26 }}>
                    {logo}
                </div>
            }
            <div className={logo ? "px-2" : ""}>
                {header.src.name? <div className="text-sm">{header.src.name}</div> : ""}
                <div className="text-xs">{header.src.ref}</div>
            </div>
        </div>
        <div className="title pt-2 text-xl leading-tight">
            <a className="link font-medium" href={header.href}>{header.title}</a>
        </div>
    </>

    return <div data-id={componentId()} lang={lang} className={`resultCard flex font-normal ${topMargin}`}>
        <div className="mainsection flex-1 pe-2">
            {headerLast ? "" : headerSection}
            <div className='content text-xs pt-1'>
                {children}
            </div>
            {headerLast ? headerSection : ""}
            {footerSection1}
            {footerSection2}
        </div>
        <div className="sidesection text-xs ">
            {sideSection}
        </div>
    </div>
});
