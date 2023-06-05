import { interfaceId } from "@asimojs/asimo";

// Interface declaration
export interface Calculator {
    add(a: number, b: number): number;
}
// Interface ID that will be used by the consumer
export const CalculatorIID = interfaceId<Calculator>("asimo.src.tests.Calculator");

