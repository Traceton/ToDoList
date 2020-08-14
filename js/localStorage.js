import { listDiv } from "./main.js";
export let sendToLocalStorage = (userInput) => {
  if (localStorage.length < 1) {
    localStorage.setItem(userInput, userInput);
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let storageItems = localStorage.getItem(localStorage.key(i));
      localStorage.setItem(userInput, userInput);
      if (storageItems != userInput) {
        localStorage.setItem(userInput, userInput);
      } else return;
    }
  }
};

export let clearLocalStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared");
};

export let showLocalStorage = () => {
  if (localStorage.length >= 1) {
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
    }
  }
};

export let loadLocalStorageItems = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let storageItems = localStorage.getItem(localStorage.key(i));
    let h3 = document.createElement("h3");
    let deleteBtn = document.createElement("input");
    deleteBtn.type = "submit";
    deleteBtn.classList = "deleteBtn";
    deleteBtn.value = "X";
    h3.append(storageItems);
    h3.append(deleteBtn);
    h3.classList = "max";
    listDiv.append(h3);

    let remove = () => {
      for (let i = 0; i < localStorage.length; i++) {
        let storageItems = localStorage.getItem(localStorage.key(i));
        if ((storageItems = h3.innerText)) {
          localStorage.removeItem(storageItems);
        }
      }
      h3.remove();
    };
    deleteBtn.addEventListener("click", remove);
  }
};
