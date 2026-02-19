# Piscine Sprint Project: Shared Bookmarks
#### By Trang Do (@trngdothuy) and June Monton (@juneMonton)

### Link to the deployed website:

### Introduction
#### User Story

I'm a developers who loves to learn and self-develop. Every day, I spent a lot of time reading online, and I found tons of useful links that I would love to save them to come back later. And I also want to share my beautiful and useful bookmarks collection with my fellows. 

Therefore, I create this website so that I can see my list of bookmarks and copy the link. Plus, I can add more useful resources. At the same time, my fellows can also do that own their own. And we can switch from one person's page to another one.

### Set up
To install `jest`:
```
npm install jest
```
To install `http-server`:
```
npm install http-server
```

### Rubric
The website must contain a drop-down which lists five users
Selecting a user must display the list of bookmarks for the relevant user
If there are no bookmarks for the selected user, a message is displayed to explain this
The list of bookmarks must be shown in reverse chronological order
Each bookmark has a title, description and created at timestamp displayed
Each bookmark’s title is a link to the bookmark’s URL
Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark
Each bookmark's like counter works independently, and persists data across sessions
The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.
Submitting the form adds a new bookmark for the relevant user only
After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark
The website must score 100 for accessibility in Lighthouse
Unit tests must be written for at least one non-trivial function