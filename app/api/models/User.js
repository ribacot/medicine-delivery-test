import { handleMongooseError } from "../helpers/hendleMongooseError";

const { Schema, models, model } = require("mongoose");

const userSchema = new Schema(
	{
		email: { type: String },
		password: {
			type: String,
			// required: true,
			// validate: (pass) => {
			// 	if (!pass?.length || !pass.length < 5) {
			// 		new Error("Invalid password");
			// 	}
			// },
		},
	},
	{ timestamps: true, versionKey: false }
);
userSchema.post("save", handleMongooseError);
export const User = models?.User || model("User", userSchema);
