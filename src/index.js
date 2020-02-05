import homeDiv from "./home.js";
import menuDiv from "./menu.js";
import contactDiv from "./contact.js";

const content = document.getElementById("content");

let act = homeDiv,
  mark,
  home,
  menu,
  contact;

window.addEventListener("load", () => {
  content.innerHTML =
    '<div id="logo"><img id="logo" src="images/icon.png" /> Burger Joint</div><div id="nav"><ul><li id="homeBtn">HOME</li><li id="menuBtn">MENÚ</li><li id="contactBtn">CONTACTO</li></ul></div><hr /><hr id="mark"/><div id="footer"><div id="socialMedia"><a href="https://www.facebook.com" target="_blank"><img id="facebook" src="images/facebook.png"/></a><a href="https://www.twitter.com" target="_blank"><img id="twitter" src="images/twitter.png"/></a><a href="https://www.instagram.com" target="_blank"><img id="instagram" src="images/instagram.png"/></a></div><a href="https://www.github.com/LorenzoMarinucci" target="_blank"><img id="github" src="images/github.png" /></a></div>';
  mark = document.getElementById("mark");
  home = document.getElementById("homeBtn");
  contact = document.getElementById("contactBtn");
  menu = document.getElementById("menuBtn");
  content.insertBefore(homeDiv, mark);
  home.addEventListener("click", () => {
    if (act.id != "home") {
      act.parentNode.removeChild(act);
      act = homeDiv;
      content.insertBefore(act, mark);
    }
  });

  menu.addEventListener("click", () => {
    if (act.id != "menu") {
      act.parentNode.removeChild(act);
      act = menuDiv;
      content.insertBefore(act, mark);
    }
  });
  contact.addEventListener("click", () => {
    if (act.id != "contacto") {
      act.parentNode.removeChild(act);
      act = contactDiv;
      content.insertBefore(act, mark);
    }
  });
});
