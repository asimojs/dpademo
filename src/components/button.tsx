import { component, componentId } from "@traxjs/trax-preact";
import { JsxContent } from "@asimojs/lml/dist/types";

export interface ButtonProps {
    href: string;
    className: string;
    align?: "center" | "start";
    children: JsxContent;
}

export const Button = component("Button", (props: ButtonProps) => {
    let { href, align, className, children } = props;
    align = align || "center";
    className = className || "";
    let cls = "justify-center"

    if (align === "start") {
        cls = "justify-start pl-3";
    }

    // possible classNames: mt-1 mt-3 mt-4 mt-5 mt-2 mt-3 mt-4 mt-5

    return <div data-id={componentId()} className={`btn flex ${className} h-12`} >
        <a href={href} className={`flex-grow flex bg-neutral-200 mt-2 rounded-full ${cls} hover:bg-neutral-400 hover:text-white`}>
            <span data-id={componentId()} className='h-full pt-2.5 text-base overflow-hidden' >
                {children}
            </span>
        </a>
    </div>
});
