import { Schema, model } from "mongoose";

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});

export default model("Campground", CampgroundSchema);
