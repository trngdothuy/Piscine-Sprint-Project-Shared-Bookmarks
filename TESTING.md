# Testing Record

1. To check if we get correct user count from `storage.js`

In `script.test.js`
```
import { getUserIds } from "./storage.js";

test("User count is correct", () => {
  expect(getUserIds().length).toEqual(5);
});
```

2. To check if we successfully fetch data of bookmarks of each user from `storage.js`
```
import { getData } from "./storage.js";

test("Get data successfully from storage.js", () => {
  expect(typeof(getData(1))).toEqual("object");
  expect(typeof(getData(2))).toEqual("object");
  expect(typeof(getData(3))).toEqual("object");
  expect(typeof(getData(4))).toEqual("object");
  expect((getData(1)[0].name)).toEqual("Figma");
})
```

3. To check if we successfully sort bookmarks from newest to oldest `storage.js`

```
import { getData } from "./storage.js";

test("user 4 bookmarks sorted newest to oldest (3 items)", () => {
  const sorted = getData(4).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  expect(sorted[0].name).toBe("AWS")       // 2026-02-15
  expect(sorted[1].name).toBe("Docker")    // 2026-02-14
  expect(sorted[2].name).toBe("AWS-test")  // 2026-02-12
})
```