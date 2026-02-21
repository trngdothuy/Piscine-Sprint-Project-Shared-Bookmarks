import { getUserIds, getData } from "./storage.js";

test("User count is correct", () => {
  expect(getUserIds().length).toEqual(5);
});

test("Get data successfully from storage.js", () => {
  expect(typeof(getData(1))).toEqual("object");
})