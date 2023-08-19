function pintar(color = 'green'){
  ele1.style.backgroundColor = color;
}

const ele1 = document.getElementById("ele1");

ele1.addEventListener("click", function(event) {
  pintar("yellow");
});
