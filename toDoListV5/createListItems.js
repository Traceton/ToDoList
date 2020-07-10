import { listDiv } from "./main.js";
export let createListItem = (userInputValue) => {
  let h3 = document.createElement("h3");
  let deleteBtn = document.createElement("input");
  deleteBtn.type = "submit";
  deleteBtn.classList = "deleteBtn";
  deleteBtn.value = "X";
  h3.append(userInputValue);
  h3.append(deleteBtn);
  h3.classList = "max";
  listDiv.append(h3);

  let remove = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let storageItems = localStorage.getItem(localStorage.key(i));
      console.log(storageItems);
      if ((storageItems = h3.innerText)) {
        localStorage.removeItem(storageItems);
      }
    }
    h3.remove();
  };
  deleteBtn.addEventListener("click", remove);
};
