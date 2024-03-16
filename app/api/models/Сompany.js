import { handleMongooseError } from "../helpers/hendleMongooseError";

import { Schema, models, model } from "mongoose";

const companySchema = new Schema(
	{
		_id: String,
		name: String,
		permalink: String,
		crunchbase_url: String,
		homepage_url: String,
		blog_url: String,
		blog_feed_url: String,
		twitter_username: String,
		category_code: String,
		//     number_of_employees:null
		//     null
		//     founded_year
		//     2002
		//     founded_month
		//     2
		//     founded_day
		//     1
		//     deadpooled_year
		//     null
		//     deadpooled_month
		//     null
		//     deadpooled_day
		//     null
		//     deadpooled_url
		//     null
		//     tag_list
		//     "content-discovery, find, content, stumble, toolbar"
		//     alias_list
		//     ""
		//     email_address
		//     ""
		//     phone_number
		//     ""
		//     description
		//     "Content discovery service"
		//     created_at
		//     2007-06-01T09:28:13.000+00:00
		//     updated_at
		//     "Wed Mar 20 04:14:12 UTC 2013"
		//     overview
		//     "<p>StumbleUpon is the easiest way to discover new and interesting thin…"
	},
	{ timestamps: true, versionKey: false }
);

// companySchema.post("save", handleMongooseError);
export const Company = models?.Company || model("Company", companySchema);
