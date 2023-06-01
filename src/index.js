import "./index.html";
import "./index.scss";
import { mult, sum } from "./modules/calc";
import banner from "./img/IT-School.png";
import logo from "./img/pr-logo.png";

const imgWrapper = document.querySelector(".banner");
const img = new Image();
img.src = banner;
img.alt = "IT-School banner";
imgWrapper.append(img);

const imgWrapper2 = document.querySelector(".img");
const img2 = new Image();
img2.src = logo;
img2.alt = "logo IT-School";
img2.style.width = "40%";
imgWrapper2.style.textAlign = "center";
imgWrapper2.append(img2);

console.log(sum(3, 5));
console.log(mult(3, 5));

console.log("env", process.env.NODE_ENV);
