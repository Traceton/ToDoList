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
