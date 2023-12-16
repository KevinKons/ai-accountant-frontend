import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  question: string;
  answer: string;
  // date: Date;
  // company: mongoose.Types.ObjectId | string;
}

const QuestionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  answer: { type: String },
  // date: { type: Date, required: true },
  // company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
});

const Question = mongoose.model<IQuestion>('Question', QuestionSchema);

export default Question;