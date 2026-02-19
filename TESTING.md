# Testing Record

1. To check if we get correct user count from `storage.js`

In `script.test.js`
```
import { getUserIds } from "./storage.js";

test("User count is correct", () => {
  expect(getUserIds().length).toEqual(5);
});
```
