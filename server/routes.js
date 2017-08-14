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
  subregion: 'us-east-2',
});

module.exports = router;
