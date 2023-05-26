import { component, componentId } from "@traxjs/trax-preact";
import { SearchResults, SearchService, NavService } from "../stores/types";
import { createContext } from "../bundles/utils";
import { Lml2JsxIID } from "./types";
import { trax } from "@traxjs/trax";

export const SearchResultsPanel = component("SearchResultsPanel", (props: { searchService: SearchService, nav: NavService }) => {
    const { searchService, nav } = props;
    const res = searchService.data.lastResult;

    if (res === null || res.type === "Error") {
        return <div>[Under construction]</div>;
    }

    const r = res.results;
    const lml2jsx = res.lml2jsx;
    const L2JContext = createContext(Lml2JsxIID, lml2jsx);

    return <L2JContext.Provider value={lml2jsx}>
        <div data-id={componentId()} className="results-container flex justify-center text-sm">
            <div className="w-full max-w-screen-xl relative">
                <div className="header bg-neutral-100 p-5 text-sm">
                    <div> About <b className="font-bold">{r.totalMatchCount}</b> results ({r.processingTime} seconds) </div>
                </div>
                <div className="body flex pt-3 px-5">
                    <div className="main flex-grow me-5">
                        {searchResultsPanel(searchService)}
                    </div>
                    <div className="sidebar w-4/12">
                        {(!r.sidebar) ? "" :
                            <div className="text-neutral-700 border-l border-l-neutral-200 ps-5 pb-9">
                                {lml2jsx(r.sidebar)}
                            </div>
                        }
                    </div>
                </div>
                {r.popover ? <div className="popover absolute w-5/12 top-0 right-0">
                    {lml2jsx(r.popover)}
                </div> : ""}
            </div>

        </div>
    </L2JContext.Provider>
});

function searchResultsPanel(ss: SearchService) {
    const data = ss.data;
    const res = data.lastResult;
    if (res === null) {
        return "";
    }

    return <div className="searchResults" lang="en">
        {res.type === "Error" ? <div className="Error">
            Error: {res.message}
        </div> : ""}
        {res.type === "SearchResults" ? searchResultsList(res) : ""}
    </div>
}

function searchResultsList(res: SearchResults) {
    return <div className="searchResults" lang="en">
        <div style={{ width: 657 }} className="text-neutral-700">
            {res.lml2jsx(res.results.main!)}
        </div>
    </div>
}
