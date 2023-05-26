import { component, componentId } from "@traxjs/trax-preact";

export interface ImgGroupProps {
    title: string;
    images: {
        src: string;
        height: number;
        width: number;
        href: string;
        title: string;
    }[]
}

export const ImgGroup = component("ImgGroup", (props: ImgGroupProps) => {
    let { title, images } = props;

    return <div data-id={componentId()} className='imgblock mt-5'>
        <div className="head text-xl pb-2">
            {title}
        </div>
        <div className="content columns-3 gap-3 pt-2">
            {images.map(img => <div className="w-full break-inside-avoid-column	mb-3">
                <a href={img.href}>
                    <img className="w-full rounded-xl block" src={img.src} alt={img.title} height={img.height} width={img.width} />
                    <p title={img.title} className="title pt-2 text-xs truncate max-h-6 overflow-hidden">{img.title}</p>
                </a>
            </div>)}
        </div>
    </div>
});
