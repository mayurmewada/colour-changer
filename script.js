const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const hex = Math.trunc(Math.random() * 1000000) + 1;
  //console.log("#" + hex);

  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hex;
  document.getElementsByTagName(
    "h3"
  )[0].textContent = `Background-Color : #${hex}`;
});
