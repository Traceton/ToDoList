import { createListItem } from "./createListItems.js";
import {
  sendToLocalStorage,
  clearLocalStorage,
  showLocalStorage,
  loadLocalStorageItems,
} from "./localStorage.js";

// start of elements below
export let listDiv = document.getElementById("list");
let userTextInput = document.getElementById("userListEntry");
let userSubmitButton = document.getElementById("userAddButton");
// end of elements above

// start of event listeners
userSubmitButton.addEventListener("click", function () {
  createListItem(userTextInput.value);
  sendToLocalStorage(userTextInput.value);
  userTextInput.value = "";
});

window.onload = loadLocalStorageItems();
