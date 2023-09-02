import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

export default Form;
