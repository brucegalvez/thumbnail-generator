const createDemoDay = require("../src/templates/demoDay");

// passed data from API
const title = ["Making", "Impactful", "Decisions"];
const subtitle = ["Rick Smith"];
const type = "demoday";
const img = "";

const garnetCapitals = new FontFace(
  "Garnet Capitals Black",
  "url(./GarnetCapitals-Black.ttf)"
);

const futura = new FontFace("Futura", "url(./Futura-Bk-Book.ttf)");

Promise.all([garnetCapitals.load(), futura.load()]).then((fonts) => {
  // add font to document
  fonts.map((font) => document.fonts.add(font));

  // setup original image
  const original = document.getElementById("original");
  original.style.position = "absolute";
  original.style.opacity = "0";
  original.style.height = "23rem";
  original.style.transform = "translate(-0.5rem)";
  original.style.fontFamily = garnetCapitals;

  // setup canvas
  const canvas = document.getElementById("canvas");
  const resolution = 40;
  const width = resolution * 16;
  const height = resolution * 9;
  canvas.setAttribute("width", `${width}px`);
  canvas.setAttribute("height", `${height}px`);
  canvas.style.border = "1px solid black";
  const ctx = canvas.getContext("2d");

  // call controller
  createDemoDay(canvas, ctx, title, subtitle, img);
});
