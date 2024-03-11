import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST(req) {
	const body = await req.json();
	mongoose.connect(process.env.DB_URL);

	const data = await User.create(body);

	return Response.json(data);
}
