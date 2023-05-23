import { component, componentId } from "@traxjs/trax-preact";
import { JsxContent } from "@asimojs/lml/dist/types";

export interface ColumnsProps {
    className?: string;
    children: JsxContent;
}

export const Columns = component("Columns", (props: ColumnsProps) => {
    let { className, children } = props;
    className = className || "mt-4";

    return <div data-id={componentId()} className={`columns ${className} columns-2`} >
        <div>{children}</div>
    </div>
});
