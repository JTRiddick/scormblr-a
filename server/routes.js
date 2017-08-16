// connect to s3 bucket for image uploading
import express from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';

const router = express.Router();

//aws s3 config
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  subregion: process.env.AWS_S3_SUBREGION,
});

// Multer config
// memory storage keeps file data in a buffer
// Thanks, medium.com/@tewolfe2/5-steps-to-uploading-files-and-images-to-s3-in-react-using-express-superagent-multer-and-46a9e72244a2
const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

router.post('/upload', upload.single('imageFile'), (req, res) => {
  //test log
  console.log("s3 post test :", req.file);

  // req.file is the 'theseNamesMustMatch' file
  s3.putObject({
      Bucket: 'pommedeterror',
      Key: req.file.originalname,
      Body: req.file.buffer,
      ACL: 'public-read', // your permisions
    }, (err) => {
      if (err) return res.status(400).send(err);
      res.send('File uploaded to S3');
  })
})




module.exports = router;
