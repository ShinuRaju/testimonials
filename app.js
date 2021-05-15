let btnIndicator = document.querySelector(".indicators");
let testi = document.querySelector(".testi");

let row = document.querySelector(".row");

let updateStyleInRow = (num) => {
  row.style.transform = `translateY(-50%) translateX(-${num}%)`;
};

let addActiveClass = (element) => {
  Array.from(element.parentElement.children).forEach((eachElem) => {
    eachElem.classList.remove("active");
  });
  element.classList.add("active");
};

let clickFunction = (e) => {
  e.preventDefault();
  let target = e.target;

  switch (target.classList.item(1)) {
    case "bone":
      updateStyleInRow(0);
      addActiveClass(target);

      break;
    case "btwo":
      updateStyleInRow(25);
      addActiveClass(target);
      break;
    case "bthree":
      updateStyleInRow(50);
      addActiveClass(target);
      break;
    case "bfour":
      updateStyleInRow(75);
      addActiveClass(target);
      break;

    default:
      break;
  }
};

btnIndicator.addEventListener("click", (e) => {
  clickFunction(e);
});

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width < `800px`) {
    testi.style.display = "none";
  } else {
    testi.style.display = "block";
  }

  console.log(window.innerWidth);
});
