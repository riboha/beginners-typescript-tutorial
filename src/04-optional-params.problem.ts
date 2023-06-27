import { expect, it } from "vitest";

export const getName = (first: string, last?: string) => { // optional
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

export const getName2 = (first: string, last: string = "Pocock") => { // cant be optional with initializing
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

//export const getName3 = (first?: string, last: string) => { }; // required param can't follow an optional one

export const getName4 = (first: string, middle?: string, last?: string) => { // optional params after the required ones
  if (last) {
    return `${first} ${last}`;
  }
  return first;
}; 

export const getName5 = (first: string, ...otherNames: string[]) => {
  return [first, ...otherNames].join (" ");
}; 


it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
