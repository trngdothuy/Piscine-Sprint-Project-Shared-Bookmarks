import { getUserIds, getData } from "./storage.js";

const selectedUser = document.getElementById("users-selector")
const bookmarkDisplayDiv = document.getElementById("bookmark-display-div")

let state = {
  userId: "1",
  bookmarksData: {},
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

function displayBookmarks(userId) {
  state.bookmarksData = getData(userId)
  const bookmarkShown = state.bookmarksData.map(makeBookmarkCard)
  bookmarkDisplayDiv.append(...bookmarkShown)
}

function makeBookmarkCard({name, url, description, timestamp}) {
  const bookmarkCardDiv = document.createElement("div");
  bookmarkCardDiv.className = "bookmark-card-div";

  const bookmarkName = document.createElement("a")
  bookmarkName.href = url
  bookmarkName.innerHTML = name

  const bookmarkDescription = document.createElement("p")
  bookmarkDescription.innerHTML = description

  const bookmarkTimestamp = document.createElement("p")
  bookmarkTimestamp.innerHTML = new Date(timestamp).toLocaleDateString() 

  bookmarkCardDiv.append(bookmarkName, bookmarkDescription, bookmarkTimestamp)
  return bookmarkCardDiv;
}

makeDisplayUserSelector()
displayBookmarks(state.userId)

// listen to the change in the user selector, then change the state and re-render
selectedUser.addEventListener("change", (e) => {
  state.userId = e.target.value;
  bookmarkDisplayDiv.innerHTML = ""
  displayBookmarks(state.userId)
  console.log(state)
})







