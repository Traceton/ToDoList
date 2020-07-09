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
    h3.remove();
  };
  deleteBtn.addEventListener("click", remove);
};
