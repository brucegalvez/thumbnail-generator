const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_USER_KEY,
  secretAccessKey: process.env.AWS_USER_SECRET,
});

const uploadToS3 = (objectName, objectData, s3Bucket) => {
  try {
    const params = {
      Bucket: s3Bucket,
      Key: objectName,
      Body: objectData,
      ContentType: "image/jpeg",
    };
    s3.upload(params, (err, data) => {
      if (err) throw err;
      console.log(`File uploaded successfully at ${data.Location}`);
    });
    return { statusCode: 200, body: "uploaded perfectly" };
  } catch (err) {
    return { statusCode: 500, error: err };
  }
};

module.exports = uploadToS3;
