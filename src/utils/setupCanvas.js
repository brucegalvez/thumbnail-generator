const { createCanvas, loadImage, registerFont } = require("canvas");

const setupCanvas = (resolution, imgUrl) => {
  registerFont("src/assets/GarnetCapitals-Black.ttf", {
    family: "Garnet Capitals Black",
  });
  registerFont("src/assets/Futura-Bk-Book.ttf", {
    family: "Futura",
  });
  const img = imgUrl ? loadImage(imgUrl) : null;
  const canvas = createCanvas(16 * resolution, 9 * resolution);
  const ctx = canvas.getContext("2d");
  return { canvas, ctx, img };
};

module.exports = setupCanvas;
