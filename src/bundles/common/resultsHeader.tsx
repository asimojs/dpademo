import { LML } from "@asimojs/lml/dist/types";
import { component, componentId } from "@traxjs/trax-preact";
import { useContext } from "../utils";
import { Lml2JsxIID } from "../../views/types";
import { testId } from "../testutils";

export interface ResultsHeaderProps {
    title: string;
    subTitle: string;
    logo: LML;
}

export const ResultsHeader = component("ResultsHeader", (props: ResultsHeaderProps) => {
    let { title, subTitle, logo } = props;

    const lml2jsx = useContext(Lml2JsxIID, () => "[...]")!;

    return <div data-id={componentId()} data-testid={testId()} className="rheader mt-4 text-sm flex" >
        <div className="w-15"> {logo && lml2jsx(logo)} </div>
        <div className="ps-4">
            <div className="title text-2xl">{title}</div>
            <div className="subtitle pt-0.5">{subTitle}</div>
        </div>
    </div>
});
