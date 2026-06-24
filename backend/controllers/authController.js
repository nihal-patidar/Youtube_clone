import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name cannot exceed 30 characters"),

  email: z.string().trim().email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

const register = async (req, res) => {
  try {
    // Validate Request Body
    const validatedData = registerSchema.parse(req.body);

    const { name, email, password } = validatedData;

    // Check Existing User via email or username // both should unique
    const existingUser = await User.findOne({
      $or: [{ email }, { username: name }],
    });

    if (existingUser) {
      // duplicate -> status 409
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password using bcrypt
    // const hashedPassword = await bcrypt.hash(password, 10);

    const pepperedPassword = password + process.env.PASSWORD_PEPPER;

    // used 12 round of hashing for higher production level security
    const hashedPassword = await bcrypt.hash(pepperedPassword, 12);

    // Create User
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
    });

    // Remove Password From Response
    const createdUser = await User.findById(user._id).select("-password");

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: createdUser,
    });
  } catch (error) {
    // Zod Validation Errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { register };
