import type { Components, JSX } from "../types/components";

interface CallUser extends Components.CallUser, HTMLElement {}
export const CallUser: {
    prototype: CallUser;
    new (): CallUser;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
