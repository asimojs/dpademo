import { component, componentId } from "@traxjs/trax-preact";

export interface VideoListProps {
    title: string;
    videos?: VideoItem[];
}
export interface VideoItem {
    title: string;
    href: string;
    originSite: string;
    originPage: string;
    date: string;
    video: {
        img: string;
        src: string;
        duration: string;
    }
}

export const VideoList = component("VideoList", (props: VideoListProps) => {
    let { title, videos } = props;

    const content = <div>
        {videos?.map((v, idx) => {
            const mt = (idx === 0) ? "" : "mt-2";

            return <div className={`${mt} video flex border-t pt-2`}>
                    <Video className="colA" img={v.video.img} src={v.video.src} duration={v.video.duration} />
                    <a href={v.href}>
                        <div className="colB ps-5">
                            <div className="title text-base"><a className="link" href={v.href}>{v.title}</a></div>
                            <div className="text-xs mt-2">
                                <em>{v.originSite}</em><span aria-hidden="true"> · </span>{v.originPage}
                            </div>
                            <div className="text-xs text-neutral-600">{v.date}</div>
                        </div>
                    </a>
                </div>
        })}
    </div >

    return <div data-id={componentId()} className='videoList mt-5 pb-2 border-b'>
        <div className="title text-xl pb-2">{title}</div>
        <div>
            {content}
        </div>
    </div>
});

interface VideoProps {
    className: string;
    img: string;
    src: string;
    duration: string;
}

export const Video = component("VideoList", (props: VideoProps) => {
    const { className, img, src, duration } = props;

    return <div className={`${className || ""} relative rounded-lg overflow-hidden`} style={{ width: 148, height: 83 }}>
        <img className="w-full h-full" src={img} />
        <div className="video absolute top-0 left-0">
            <video onMouseOver={e => start(e)} src={src} className="w-full h-full" muted playsInline preload="none" webkit-playsinline="" />
        </div>
        <div className="absolute text-white text-base opacity-80" style={{ top: 2, left: 60 }}>&nbsp;
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32}>
                <path className="fill-current" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
        </div>
        <div className="absolute top-14 left-2 text-white text-xs bg-neutral-800 rounded-full pt-0.5 px-2 bg-opacity-50">
            <span aria-label={"duration: " + duration}>{duration}</span>
        </div>
    </div>

    function start(e: any) {
        const me: HTMLMediaElement = e.target;
        me.play();
        me.loop = true;
    }
});
