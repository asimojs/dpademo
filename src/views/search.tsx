import { component, componentId } from "@traxjs/trax-preact";
import { asm } from "@asimojs/asimo";
import { NavService, SearchServiceIID } from "../stores/types";
import { testId } from "../bundles/testutils";

export const SearchPanel = component("SearchPanel", (props: { nav: NavService }) => {
    const { nav } = props;

    return <div data-id={componentId()} data-testid={testId()} className="search-panel  py-64">
        <div className="input-container flex justify-center">
            <div className="w-1/2" >
                <SearchField className="py-2.5 h-11" />
                <div className="info mt-12 px-5">
                    <p>
                        This application is a proof of concept that demonstrates how highly <em>dynamic</em> and <em>heterogeneous</em> web pages can be implemented
                        using an advanced <a className="link" href="https://en.wikipedia.org/wiki/Single-page_application">Single Page Application</a> architecture.
                    </p>
                    <p className="mt-2">
                        This demo can be accessed through two different entry points:
                        the current <a className="link" href=".">search</a> page or a direct link
                        to the <a className="link" href="./homer_simpson.html">results</a> pages that simulates a search triggered from an external link.
                    </p>
                    <p className="mt-2">
                        The general architecture considerations behind this project are described
                        in this <a className="link" href="https://docs.google.com/document/d/1GqCh5UbKQdyXI8jyj1YoDHQOfTM8bDsYIVEzXJIdPO8">document</a>.
                    </p>
                    <p className="mt-10 italic text-sm">
                        For more information about the demo content
                        please visit the <a className="link" href="https://github.com/asimojs/dpademo">project's github page</a>.
                    </p>
                </div>
            </div>

        </div>
    </div>
});

export const SearchField = component("SearchPanel", (props: { className?: string }) => {
    let { className } = props;
    className = className || "";

    return <div data-id={componentId()} data-testid={testId()}
        className={`${className} flex px-3 bg-neutral-200 rounded-full text-neutral-600
        cursor-pointer
        border border-neutral-200 hover:border-neutral-400`} onClick={search}>
        <div className="mx-1">
            <SearchIcon />
        </div>
        <div>
            Search: <span className="font-medium text-sky-700"> Homer Simpson </span>
        </div>
    </div>

    async function search() {
        const ss = await asm.get(SearchServiceIID);
        ss?.search({ searchInput: "Homer Simpson" });
    }
});

const SearchIcon = component("SearchIcon", () => {
    // 42
    let dim = 32;
    return <svg width={dim} height={dim} viewBox="0 0 24 24" version="1.1" aria-hidden="false" >
        <desc lang="en">Magnifying glass</desc>
        {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
        <path className="fill-current  stroke-0" d="M13.07336,12.29053,10.14679,9.364a3.9711,3.9711,0,1,0-.78284.78284l2.92658,2.92657Zm-6.064-2.4516A2.82914,2.82914,0,1,1,9.8385,7.00934,2.83286,2.83286,0,0,1,7.00934,9.83893Z" />
    </svg>
});


