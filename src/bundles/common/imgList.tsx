import { asm } from "@asimojs/asimo";
import { component, componentId } from "@traxjs/trax-preact";
import { SearchServiceIID } from "../../stores/types";

export interface ImgProps {
    height?: number;
    href?: string;
    imgs?: ImgItem[];
}
export interface ImgItem {
    /** Image source - url or base64 data */
    src: string;
    /** Image width */
    width: number;
    /** Alt text for this image */
    alt?: string;
    /** URL from where the image was extracted */
    lpage?: string;
    /** Unique identifier */
    key?: string;
}

export const ImgList = component("ImgList", (props: ImgProps) => {
    let { height, imgs, href } = props;
    height = height || 150;

    const content = <div style={{ width: "200%" }}>
        {imgs?.map((img, idx) => {
            const ms = (idx === 0) ? "" : "ms-1";

            return <div className={`inline-block cursor-pointer ${ms}`} style={{ height: height, width: img.width }}
                onClick={() => handleClick(img.key)}>
                <img alt={img.alt} src={img.src} className="h-full w-full" loading="lazy"/>
            </div>
        })}
    </div>

    return <div data-id={componentId()} className='imgList'>
        <div className='inline-block border rounded-xl overflow-hidden'
            style={{ height: height + "px" }}>
            {href ? <a href={href} aria-label="Images in this result">
                {content}
            </a>
                : content}
        </div>
    </div>

    async function handleClick(imgKey?: string) {
        if (imgKey) {
            // submit request to get more data
            const ss = await asm.get(SearchServiceIID);
            if (ss) {
                const q = ss.data.lastResult!.query;
                ss.getMoreResults({
                    searchInput: q.searchInput,
                    src: {
                        key: imgKey,
                        componentType: "ImgList",
                    }
                });
            }
        }
    }
});
