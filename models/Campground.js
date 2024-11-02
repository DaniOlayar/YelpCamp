import { Schema, model } from "mongoose";

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

export default model("Campground", CampgroundSchema);
