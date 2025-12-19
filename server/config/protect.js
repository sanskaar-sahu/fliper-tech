import jwt from "jsonwebtoken";
import Admin from '../models/admin.schema.js';

/**
 * Protect routes – Admin only
 * Checks JWT token and attaches admin to request
 */
const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, token missing");
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach admin to request (without password)
    req.admin = await Admin.findById(decoded.id).select("-password");

    if (!req.admin) {
      res.status(401);
      throw new Error("Not authorized, admin not found");
    }

    next();
  } catch (error) {
    res.status(401);
    next(new Error("Not authorized, invalid token"));
  }
};

export default protect;
