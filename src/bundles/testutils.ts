import { componentId } from "@traxjs/trax-preact";

/**
 * Create a test id by removing the unique counter from component id
 * and concatenating the optional suffix
 */
export function testId(suffix?: string) {
    return componentId().replace(/\:\d+$/, suffix ? ":" + suffix : "");
}
