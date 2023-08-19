//DESAFIO 4.1//
const key = document.querySelector("#key");
let color="";

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    color = "pink";
  }else if (event.key === 's') {
    color = "orange";
  }
  else if (event.key === 'd') {
    color = "aqua";
  }
  key.style.backgroundColor = color;
});

//DESAFIO 4.2//

const fatherEle = document.querySelector("#father");
const newDiv = document.createElement("div");

document.addEventListener('keydown', (e) => {
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.margin = "10px";
  newDiv.style.backgroundColor = "white";
  newDiv.style.border = "5px solid black";

  if (e.key === "q") {
    newDiv.style.backgroundColor = "purple";
    fatherEle.appendchild(newDiv);
  } else if (e.key === "w"){
    newDiv.style.backgroundColor = "grey";
    fatherEle.appendChild(newDiv);
} else if (e.key === "e") {
  newDiv.style.backgroundColor = "brown";
  fatherEle.appendChild(newDiv);
} else {
  fatherEle.removechild(fatherEle.lastchild);
}
});
