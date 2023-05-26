import { component } from "@traxjs/trax-preact";

export interface IconProps {
    type?: "magnifier" | "r-arrow";
    size?: number;
    className?: string;
}

export const Icon = component("Icon", (props: IconProps) => {
    let { type, size, className } = props;
    type = type || "magnifier";

    if (type === "magnifier") {
        size = size || 22;
        const cls = `inline-block relative ${className || "mx-2"}`;

        return <svg width={size} height={size} viewBox="0 0 18 18" version="1.1" aria-hidden="false" className={cls}>
            <desc lang="en">Magnifying glass</desc>
            {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
            <path className="fill-current  stroke-0" d="M13.07336,12.29053,10.14679,9.364a3.9711,3.9711,0,1,0-.78284.78284l2.92658,2.92657Zm-6.064-2.4516A2.82914,2.82914,0,1,1,9.8385,7.00934,2.83286,2.83286,0,0,1,7.00934,9.83893Z" />
        </svg>
    }

    size = size || 18;
    const cls = `inline-block relative ${className || "-top-0.5 mx-2"}`;
    return <svg width={size} height={size} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className={cls}>
        <path  className="fill-current" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
});

