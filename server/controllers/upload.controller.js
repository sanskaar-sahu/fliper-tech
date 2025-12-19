import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  const file = req.file;

  if (!file) {
    res.status(400);
    throw new Error("No image provided");
  }

  const result = await cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
    {
      folder: "landing_app"
    }
  );

  res.json({
    url: result.secure_url
  });
};
