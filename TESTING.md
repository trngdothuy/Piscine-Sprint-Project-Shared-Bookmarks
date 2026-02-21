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
})
```

