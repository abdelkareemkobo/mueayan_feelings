import { Schema, model, models } from "mongoose";

const QouteSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Qoute is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Qoute = models.Qoute || model("Qoute", QouteSchema);

export default Qoute;
