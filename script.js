import { getUserIds, getData, setData } from "./storage.js";

const selectedUser = document.getElementById("users-selector")
const bookmarkDisplayDiv = document.getElementById("bookmark-display-div")
const addBookmarkForm = document.getElementById("bookmark-form")

let state = {
  userId: "1",
  bookmarksData: {},
}

// make selector to choose user to display bookmarks
function makeDisplayUserSelector() {
  const users = getUserIds();
  for (let i = 1; i <= users.length; i++) {
    const option = document.createElement("option");
    option.textContent = `User ${i}`;
    option.value = i
    selectedUser.append(option)
  }
};

function displayBookmarks(userId) {
  state.bookmarksData = getData(userId)
  console.log("state", state)
  bookmarkDisplayDiv.innerHTML = ""
  if (Object.keys(state.bookmarksData).length == 0) {
    const bookmarkShown = document.createElement("div")
    bookmarkShown.className = "bookmark-card-div" 
    bookmarkShown.style["background-color"] = "#F88379"
    bookmarkShown.innerHTML = "No data. This user didn't save any bookmark"
    bookmarkDisplayDiv.append(bookmarkShown)
  } else {
    const sorted =state.bookmarksData.sort ((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    const bookmarkShown = sorted.map(makeBookmarkCard)
    bookmarkDisplayDiv.append(...bookmarkShown)
  }
}

function makeBookmarkCard({name, url, description, timestamp}) {
  const bookmarkCardDiv = document.createElement("div");
  bookmarkCardDiv.className = "bookmark-card-div";

  const bookmarkFirstLine = document.createElement("div")
  bookmarkFirstLine.className = "bookmark-first-line"

  const bookmarkName = document.createElement("a")
  bookmarkName.href = url
  bookmarkName.innerHTML = name

  const copyButton = document.createElement("button")
  copyButton.className = "copy-button"
  copyButton.innerHTML = "Copy URL"

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(bookmarkName.href);
    copyButton.innerHTML = "Copied ✅"
  })

  bookmarkFirstLine.append(bookmarkName, copyButton)

  const bookmarkDescription = document.createElement("p")
  bookmarkDescription.innerHTML = description

  const bookmarkTimestamp = document.createElement("p")
  bookmarkTimestamp.innerHTML = new Date(timestamp).toLocaleDateString() 
  bookmarkTimestamp.classList.add("bookmark-date")

  bookmarkCardDiv.append(bookmarkFirstLine, bookmarkDescription, bookmarkTimestamp)
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

// add bookmark form
addBookmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = document.querySelector('input[name="user-submit"]:checked').value
  const title = document.getElementById("title")
  const url = document.getElementById("url")
  const description = document.getElementById("description")
  const time = new Date().toISOString()
  const data = {
    name: title.value,
    url: url.value,
    description: description.value,
    timestamp: time
  }
  state.bookmarksData = getData(userId)
  state.bookmarksData.push(data)

  setData(userId, state.bookmarksData)
  displayBookmarks(state.userId)
  addBookmarkForm.reset()
})






