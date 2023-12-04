import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

// How to encrypt password using BCRYPT

UserSchema.post("validate", function (user) {
  console.log({ arguments });
});

export const User = models?.User || model("User", UserSchema);
/*





*/
