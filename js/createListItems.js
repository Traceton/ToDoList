export const createListItem = (userInputValue) => {
  // Dom Objects.
  let item = document.createElement("h3");
  let delBtn = document.createElement("input");
  let list = document.getElementById("list");

  delBtn.type = "submit";
  delBtn.classList = "deleteBtn";
  delBtn.value = "X";

  // Create list item.
  item.append(userInputValue);
  item.append(delBtn);
  list.append(item);

  item.classList = "todo-item";
  
  // Remove list item.
  const remove = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let storageItems = localStorage.getItem(localStorage.key(i));
      console.log(storageItems);
      if ((storageItems = item.innerText)) {
        localStorage.removeItem(storageItems);
      }
    }
    item.remove();
  };
  delBtn.addEventListener("click", remove);
};
