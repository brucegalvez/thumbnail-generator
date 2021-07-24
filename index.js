require("dotenv").config();
const setupCanvas = require("./src/utils/setupCanvas");
const demoDayController = require("./src/templates/demoDay");
const uploadToS3 = require("./src/utils/uploadToS3");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { title, subtitle, imgUrl, type } = body;

  const controllers = {
    demoday: demoDayController,
  };

  try {
    if (!type) throw new Error("Missing type value");
    if (!controllers[type]) throw new Error("Non valid thumbnail type");
    const { canvas, ctx, img } = setupCanvas(40, imgUrl);
    const thumbnail = controllers[type](canvas, ctx, title, subtitle, img);

    const bufferData = thumbnail.toBuffer("image/jpeg", {
      quality: 0.75,
      progressive: false,
      chromaSubsampling: true,
    });

    const body = uploadToS3(
      `demoDay_${+new Date()}-${title},${subtitle}`,
      bufferData,
      "created-thumbnails"
    );
    return { statusCode: 200, body: JSON.stringify(body) };
  } catch (e) {
    console.log(e);
    return { statusCode: 500, body: JSON.stringify(e.message) };
  }
};
