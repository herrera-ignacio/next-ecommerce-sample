import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 1,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      lowercase: true,
      unique: true,
      minLength: 5
    },
    password: String,
    role: {
      type: String,
      default: "user"
    },
    image: String,
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
      }
    }
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator)

export default mongoose.models.User || mongoose.model("User", userSchema);
