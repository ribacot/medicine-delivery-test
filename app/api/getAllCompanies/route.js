// import mongoose from "mongoose";

// import {Company} from "../models/Сompany"

// export async function GET() {
// const db= await	mongoose.connect(process.env.DB_URL)

// 	const data = await Company.find();

// 	console.log("data: " + JSON.stringify(data));
// 	return Response.json(data);
// }
import mongoose from "mongoose";
import { Company } from "../models/Сompany";

export async function GET() {
	mongoose.connect(process.env.DB_URL);

	const data = await Company.find();

	return Response.json(data);
}

