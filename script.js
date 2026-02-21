import { getUserIds, getData } from "./storage.js";

const selectedUser = document.getElementById("users-selector")

let state = {
  userId: "1",
}

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

selectedUser.addEventListener("change", (e) => {
  e.preventDefault
  state.userId = e.target.value
})

console.log(getData("1"))


