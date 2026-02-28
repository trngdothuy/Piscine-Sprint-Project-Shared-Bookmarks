import { getUserIds, getData } from "./storage.js";

test("User count is correct", () => {
  expect(getUserIds().length).toEqual(5);
});

test("Get data successfully from localStorage", () => {
  expect(typeof(getData(1))).toEqual("object");
  expect(typeof(getData(2))).toEqual("object");
  expect(typeof(getData(3))).toEqual("object");
  expect(typeof(getData(4))).toEqual("object");
  expect((getData(1)[0].name)).toEqual("Figma");
})

test("user 4 bookmarks sorted newest to oldest (3 items)", () => {
  const sorted = getData(4).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  expect(sorted[0].name).toBe("AWS")       // 2026-02-15
  expect(sorted[1].name).toBe("Docker")    // 2026-02-14
  expect(sorted[2].name).toBe("Dribbble")  // 2026-02-12
})

