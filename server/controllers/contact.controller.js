import Contact from '../models/contact.schema.js';

export const submitContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;

  if (!fullName || !email || !mobile || !city) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const user = await Contact.create({ fullName, email, mobile, city });

  res.status(201).json({
    success: true,
    message: "Contact form submitted successfully",
    data: user,});
};;

export const getContacts = async(req, res) => {
  const contacts = await Contact.find().sort("-createdAt");
  res.json(contacts);
};
