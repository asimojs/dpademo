import { component, componentId } from "@traxjs/trax-preact";
import { testId } from "../testutils";

export interface ImgListProps {
    title: string;
    height?: number;
    imgs?: ImgItem[];
}
export interface ImgItem {
    /** Image source - url or base64 data */
    src: string;
    /** Image width */
    width: number;
    /** Link */
    href: string;
    /** Image title (not tooltip) - also used for alt text*/
    title: string;
}

export const ImgList = component("ImgList", (props: ImgListProps) => {
    let { title, height, imgs } = props;
    height = height || 150;


    const content = <div style={{ width: "200%" }}>
        {imgs?.map((img, idx) => {
            const ms = (idx === 0) ? "" : "ms-1";

            return <a href={img.href}>
                <div className={`inline-block ${ms}`} style={{ width: img.width }} >
                    <div>
                        <img alt={img.title} style={{ height: height, width: img.width }} loading="lazy"
                            src={img.src} className="h-full w-full border rounded-xl object-scale-down" />
                    </div>
                    <div className="pt-1 pe-1">
                        {img.title}
                    </div>
                </div>
            </a>
        })}
    </div>

    return <div data-id={componentId()} data-testid={testId()} className='imgList mt-5'>
        <div className="title text-lg pb-2">{title}</div>
        <div className='inline-block ' style={{ height: height }}>
            {content}
        </div>
    </div>
});
