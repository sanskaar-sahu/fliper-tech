import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from '../models/admin.schema.js';

/**
 * Generate JWT Token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });
};

/**
 * @desc    Admin Login
 * @route   POST /api/admin/login
 * @access  Public
 */

export const adminLogin =async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  res.status(200).json({
    success: true,
    token: generateToken(admin._id)
  });
};

export const createAdminIfNotExists = async (req, res) => {    
    const existingAdmin = await Admin.findOne({ email: 'admin@fliprtech.com' });

    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const user = await Admin.create({
            email: 'admin@fliprtech.com',
            password: hashedPassword
        });
    }

    return res.status(200).json({ message: "Admin user checked/created"  , data : user });
};  