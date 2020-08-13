import { createListItem } from "./createListItems.js";
import {
  sendToLocalStorage,
  clearLocalStorage,
  showLocalStorage,
  loadLocalStorageItems,
} from "./localStorage.js";

export let listDiv = document.getElementById("list");
let userTextInput = document.getElementById("userListEntry");
let userSubmitButton = document.getElementById("userAddButton");

// start of event listeners
userSubmitButton.addEventListener("click", function () {
  createListItem(userTextInput.value);
  sendToLocalStorage(userTextInput.value);
  userTextInput.value = "";
});

window.onload = loadLocalStorageItems();
