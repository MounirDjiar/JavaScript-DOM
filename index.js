let title = document.title;
let widthWindow = window.innerWidth;

document.title = "Ce titre est beaucoup trop long";
title = document.title;

let elementsH2 = document.getElementsByTagName("h2");

let elementsClassRed = document.getElementsByClassName("text-red");

// Au click sur le sous titre
let elementID = document.getElementById("sous-titre-DOM");
elementID.addEventListener("click", function () {
  let p = document.createElement("p");
  p.classList.add("text-red");
  p.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, delectus nobis. Veritatis, officia! Illum minus perspiciatis nesciunt voluptate recusandae? Suscipit repellendus autem laudantium iure deserunt animi sunt exercitationem, veniam modi! Exercitationem accusamus voluptatum fugiat aliquid sapiente a cupiditate consequatur, in dolor debitis totam? Ipsa id aut excepturi saepe tenetur? Nemo at tempore labore saepe minima dolorem sit nobis animi velit? Delectus nobis officia, nesciunt odit corrupti ipsa! Sunt officia similique, soluta quos fugit dolor cum veniam tenetur, vero atque at unde laudantium quaerat mollitia, nihil esse nisi quibusdam ab optio. Error, magni maiores. Quod laborum rem sed necessitatibus consequatur optio dolor! Obcaecati accusamus alias amet, autem possimus rem quae error adipisci beatae iste dolore sit expedita perferendis sunt esse quis. At eius quasi nam animi ratione. Officia reprehenderit dolorum labore iure, minus eos, ratione ipsa itaque esse pariatur suscipit voluptatum soluta quam odio consequuntur iusto tenetur adipisci quae culpa quos.";
  document.body.appendChild(p);
  changeColorLeftAndRight(p);
  backToRedColor(p);
});

let elementIDEventListener = document.getElementById("event-listener");

function changeColorLeftAndRight(elt) {
  elt.addEventListener("mousemove", function (evt) {
    let side = getPositionRightOrLeft(evt.x, evt.y, widthWindow);

    if (side == "DROITE") {
      elt.classList.remove("text-red");
    } else {
      elt.classList.add("text-red");
    }
  });
}

function backToRedColor(elt) {
  elt.addEventListener("mouseout", function (evt) {
    elt.classList.add("text-red");
  });
}

let redArrayElements = document.getElementsByClassName("text-red");

for (let element of redArrayElements) {
  changeColorLeftAndRight(element);
  backToRedColor(element);
}

elementIDEventListener.onmousedown = function (event) {
  let x = event.x;
  let y = event.y;
};

function getPositionRightOrLeft(x, y, windowWidth) {
  return x > widthWindow / 2 ? "DROITE" : "GAUCHE";
}
