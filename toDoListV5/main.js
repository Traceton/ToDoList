import { createListItem } from "./createListItems.js";
import {
  sendToLocalStorage,
  clearLocalStorage,
  showLocalStorage,
} from "./localStorage.js";

// start of elements below
export let listDiv = document.getElementById("list");
let userTextInput = document.getElementById("userListEntry");
let userSubmitButton = document.getElementById("userAddButton");
let clearLocal = document.getElementById("clearLocal");
let showLocal = document.getElementById("showLocal");
// end of elements above

// start of event listeners
userSubmitButton.addEventListener("click", function () {
  createListItem(userTextInput.value);
  sendToLocalStorage(userTextInput.value);
  userTextInput.value = "";
});

clearLocal.addEventListener("click", clearLocalStorage);
showLocal.addEventListener("click", showLocalStorage);
