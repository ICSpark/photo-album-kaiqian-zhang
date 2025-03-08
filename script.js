function fix() {
   let coconut = document.getElementById("coconut");

   coconut.remove()

   let coast = document.getElementById("coast");

   coast.remove()

   let watermelon = document.getElementById("watermelon");

   watermelon.remove()

   let sunflowers = document.getElementById("sunflowers");

   sunflowers.remove()

   let tree = document.createElement("img");

   tree.id = "tree";
   tree.src = "to-add/christmasTree.jpg";
   
   let photos = document.getElementById("photos");

   photos.appendChild(tree);

   let snowmen = document.createElement("img");

   snowmen.id = "tree";
   snowmen.src = "to-add/snowmen.jpg";

   let w = document.getElementById("photos");

   photos.appendChild(snowmen);

   let stockings = document.createElement("img");

   stockings.id = "tree";
   stockings.src = "to-add/stockings.jpg";

   let b = document.getElementById("photos");

   photos.appendChild(stockings);

}