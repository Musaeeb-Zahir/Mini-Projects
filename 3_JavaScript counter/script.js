// (function main() {
//   let counter = document.querySelector("#counter")
//   let lowerbtn = document.querySelector(".lower")
//   let addbtn = document.querySelector(".add")
//   lowerbtn.addEventListener("click", (e) => {
//     counter.innerHTML = parseInt(counter.innerHTML) - 1;
//     if (parseInt(counter.innerHTML)<0) {
//       counter.classList.add("bgred")
//       counter.classList.remove("bggreen")
//     }
//   })
//   addbtn.addEventListener("click", (e) => {
//     counter.innerHTML = parseInt(counter.innerHTML) + 1;
    
//     if (parseInt(counter.innerHTML) >0) {
//       counter.classList.add("bggreen")
//       counter.classList.remove("bgred")
//     }
//   })
  
  
  
// })()

(function main() {
  let counter = document.querySelector("#counter");
  let lowerbtn = document.querySelector(".lower");
  let addbtn = document.querySelector(".add");

  lowerbtn.addEventListener("click", (e) => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    updateColor(); // Check color after decrement
  });

  addbtn.addEventListener("click", (e) => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    updateColor(); // Check color after increment
  });

  function updateColor() {
    if (parseInt(counter.innerHTML) > 0) {
      counter.classList.add("bggreen");
      counter.classList.remove("bgred"); // Remove red class if present
    } else if (parseInt(counter.innerHTML) < 0) {
      counter.classList.add("bgred");
      counter.classList.remove("bggreen"); // Remove green class if present
    } else {
      counter.classList.remove("bggreen", "bgred"); // Remove both classes
    }
  }
})();
