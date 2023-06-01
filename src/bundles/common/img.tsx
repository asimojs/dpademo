import { component, componentId } from "@traxjs/trax-preact";
import { testId } from "../testutils";

export interface ImgProps {
    height: number;
    width: number;
    alt: string;
    href: string;
    src: string;
}

export const Img = component("Img", (props: ImgProps) => {
    let { height, width, alt, src, href } = props;

    return <div data-id={componentId()} data-testid={testId()} className='img inline-block border rounded-md overflow-hidden' style={{ height, width }} >
        <a href={href}>
            <img style={{ height, width }} alt={alt} src={src} loading="lazy" />
        </a>
    </div>
});
