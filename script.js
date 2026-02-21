import { getUserIds } from "./storage.js";

const selectedUser = document.getElementById("users-selector")

// make selector to choose user to display bookmarks
function makeDisplayUserSelector() {
  const users = getUserIds();
  for (let i = 1; i < users.length; i++) {
    const option = document.createElement("option");
    option.textContent = `User ${i}`;
    option.value = i
    selectedUser.append(option)
  }
};

makeDisplayUserSelector()