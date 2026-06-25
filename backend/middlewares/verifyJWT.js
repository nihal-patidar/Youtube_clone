import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyJWT = async (
  req,
  res,
  next
) => {
  try {

    const token =
      req.header("Authorization")
      ?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(
      decoded.id
    ).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    console.log("req.user", user);

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid Access Token",
    });
  }
};