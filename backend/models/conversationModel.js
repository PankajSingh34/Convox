import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // make sure your user model is named "User"
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // this should match your message model name
    },
  ],
}, { timestamps: true });

// Correct name and default export
export default mongoose.model("Conversation", conversationSchema);
