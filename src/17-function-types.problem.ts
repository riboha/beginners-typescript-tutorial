import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

type FocusListener = (isFocused: boolean) => void;
// if this type returns 'undefined', we have to return it.
// if it returns void, we don't have to.

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
