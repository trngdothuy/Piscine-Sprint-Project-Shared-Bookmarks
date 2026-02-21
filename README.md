# Piscine Sprint Project: Shared Bookmarks
#### By Trang Do (@trngdothuy) and June Monton (@juneMonton)

## Link to the deployed website:

## Introduction
### User Story

As developers, we spend a lot of time reading articles and technical resources online. We want a simple way to save useful links along with a title and short description so that we can easily remember what each resource is about without reopening it.

We also want to share these bookmarks with other developers, view each other’s saved resources, and interact with them by liking useful links. The system should allow us to select different users, view their bookmarks in reverse chronological order, copy links to the clipboard, and add new bookmarks easily through an accessible form.


## Set up
To install `jest`:
```
npm install jest
```
To install `http-server`:
```
npm install http-server
```

## Rubric
- [ ] The website must contain a drop-down which lists five users
- [ ] Selecting a user must display the list of bookmarks for the relevant user
- [ ] If there are no bookmarks for the selected user, a message is displayed to explain this
- [ ] The list of bookmarks must be shown in reverse chronological order
- [ ] Each bookmark has a title, description and created at timestamp displayed
- [ ] Each bookmark’s title is a link to the bookmark’s URL
- [ ] Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark
- [ ] Each bookmark's like counter works independently, and persists data across sessions
- [ ] The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.
- [ ] Submitting the form adds a new bookmark for the relevant user only
- [ ] After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark
- [ ] The website must score 100 for accessibility in Lighthouse
- [ ] Unit tests must be written for at least one non-trivial function


## Breakdown problem
### Level 100
- [ ] Display bookmarks
    - [ ] For 1 user
    - [ ] For multi users
    - [ ] Organize in reverse chronological order
### Level 200
- [ ] Add copy and like buttons
    - [ ] Add copy button
    - [ ] Add like button
### Level 300
- [ ] Allow user to add new bookmark
