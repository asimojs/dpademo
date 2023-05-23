import { JsxContent } from "@asimojs/lml/dist/types";
import { component, componentId } from "@traxjs/trax-preact";

export interface SectionProps {
    title?: string;
    className?: string;
    children?: JsxContent;
}

export const Section = component("Section", (props: SectionProps) => {
    let { children, className, title } = props;
    className = className || "";

    let titleSection: JsxContent = "";
    if (title) {
        titleSection = <div className="text-lg pb-2">{title}</div>
    }

    return <div data-id={componentId()} className="section mt-7 text-sm" >
        {titleSection}
        <div className={className}> {children} </div>
    </div>
});
