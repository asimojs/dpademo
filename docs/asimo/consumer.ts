import { asm } from "@asimojs/asimo";
import { CalculatorIID } from "./types";

async function doSomething() {
    const calc = await asm.get(CalculatorIID);
    const result = calc.add(1, 2);
}
