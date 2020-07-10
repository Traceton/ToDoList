export let sendToLocalStorage = (userInput) => {
  console.log(userInput);
  localStorage.setItem(userInput, userInput);
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
