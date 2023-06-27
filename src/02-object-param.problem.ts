import { expect, it } from "vitest";



// solution 1 (type)
type Param = {
  first: number;
  second: number;
};
export const addTwoNumbers = (params: Param) => {
  return params.first + params.second;
};

// solution 2
export const addTwoNumbers2 = (params: { first: number, second: number }) => {
  return params.first + params.second;
};

// solution 3 (interface)
interface Base {
  first: number;
  second: number;
};
export const addTwoNumbers3 = (params: Base) => {
  return params.first + params.second;
};

// bonus: not recommendable way 1 (deconstructed parameters on the left side)
export const addTwoNumbers4 = ({ first, second }: { first: number, second: number }) => {
  return first + second;
};

it ("Should add the two  numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});

