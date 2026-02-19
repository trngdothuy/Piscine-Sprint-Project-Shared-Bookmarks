import { getUserIds } from "./storage.js";

test("User count is correct", () => {
  expect(getUserIds().length).toEqual(5);
});