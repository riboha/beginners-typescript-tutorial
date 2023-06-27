import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } 
  // solution 1
  /* catch (e: any) {
    return e.message;
  } */
  // solution 2
  /* catch (e) {
    return (e as Error).message;
  } */
  // solution 3 (best)
  catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    return String(e);
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
