import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

export default cloudinary;
