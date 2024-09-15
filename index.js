const d = new Date();
let month = d.getMonth();
let day = d.getDate();
console.log(month, day);
card = document.getElementById("card");
card.src = `public/images/birthday/${month + 1}/${day}.svg`;
card.onerror = function () {
  card.src = "public/images/card.svg";
  whoIsHe = document
    .getElementById("whoIsHe")
    .style.setProperty("visibility", "visible");
  whoIsHeRedirect = document
    .getElementById("whoIsHeRedirect")
    .style.setProperty("visibility", "visible");
};
