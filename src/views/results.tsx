import { component, componentId, useTraxState } from "@traxjs/trax-preact";
import { SearchService, NavService } from "../stores/types";
import { createContext, useContext } from "../bundles/utils";
import { Lml2JsxIID } from "./types";
import { LML } from "@asimojs/lml/dist/types";
import { testId } from "../bundles/testutils";

export const SearchResultsPanel = component("SearchResultsPanel", (props: { searchService: SearchService, nav: NavService }) => {
    const { searchService, nav } = props;
    const res = searchService.data.lastResult;

    const state = useTraxState<{ ctxt: any }>({ ctxt: null });

    if (res === null || res.type === "Error") {
        return <div>[Under construction]</div>;
    }

    const r = res.results;
    const lml2jsx = res.lml2jsx;
    if (!state.ctxt) {
        // store context into state to avoid creating a new instance (that will trigger unnecessary re-render)
        // when this componentn is refreshed
        state.ctxt = createContext(Lml2JsxIID, lml2jsx);
    }
    const L2JContext = state.ctxt;

    return <L2JContext.Provider value={lml2jsx}>
        <div data-id={componentId()} data-testid={testId()} className="results-container flex justify-center text-sm">
            <div className="w-full max-w-screen-xl relative">
                <div className="header bg-neutral-100 px-5 pt-5 pb-3 text-xs">
                    <div> About <b className="font-bold">{r.totalMatchCount}</b> results ({r.processingTime} seconds) </div>
                    <div>{r.header && lml2jsx(r.header)}</div>
                </div>
                <div className="body flex pt-3 px-5">
                    <div className="main flex-grow me-5">
                        <ResultsPanel content={r.main} />
                    </div>
                    <div className="sidebar w-4/12">
                        {(!r.sidebar) ? "" :
                            <div className="text-neutral-700 border-l border-l-neutral-200 ps-5 pb-9">
                                {lml2jsx(r.sidebar)}
                            </div>
                        }
                    </div>
                </div>

                <div className="popover absolute w-5/12 top-0 right-0">
                    {r.popover && lml2jsx(r.popover)}
                </div>
                <div className="footer bg-neutral-100 italic px-5 pt-9 pb-4 text-xs mt-10">
                    For more information about this demo, please visit
                    the <a className="link" href="https://github.com/asimojs/dpademo">project's github page</a>
                </div>
            </div>

        </div>
    </L2JContext.Provider>
});


const ResultsPanel = component("ResultsPanel", (props: { content?: LML }) => {
    const { content } = props;
    const lml2jsx = useContext(Lml2JsxIID, () => "[...]")!;

    let cn = content;
    // // This code splits the rendering in 2 waves - allows to shave a few ms on the initial rendering but not significantly
    // const state = useTraxState({ init: true });
    // if (Array.isArray(content)) {
    //     if (state.init) {
    //         cn = content.slice(0, Math.floor(content.length / 2));
    //         setTimeout(() => {
    //             // this will trigger a commponent re-render to display the full content
    //             state.init = false;
    //         }, 200);
    //     }
    // }

    return <div className="results-panel" lang="en">
        <div style={{ width: 657 }} className="results-panel-content text-neutral-700">
            {cn ? lml2jsx(cn) : ""}
        </div>
    </div>
});
