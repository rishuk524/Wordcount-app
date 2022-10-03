let result = document.querySelector(".my-text");
let string = document.querySelector("#text-area");
let count = 0;

string.addEventListener("keyup", (e) => {
    let string = e.target.value;
    console.log(string);
    let repString = string.replace(/\s/g, "");
    result.textContent = repString.length;
  });
