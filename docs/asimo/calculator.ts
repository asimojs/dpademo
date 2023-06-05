import { asm } from "@asimojs/asimo";
import { Calculator, CalculatorIID } from "./types";

// Service implementing the interface
class CalculatorService implements Calculator {
    add(a: number, b: number) {
        return a + b;
    }
}

// Service registration - should be defined in separate files when using packagers
// that don't support tree-shaking (otherwise implementation will be
// packaged with the interface!)
asm.registerService(CalculatorIID, () => new CalculatorService());


