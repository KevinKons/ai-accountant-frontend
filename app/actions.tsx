"use server"

import Question from "./models/Question";
import { connectToMongoDB } from "./service/mongoose";

connectToMongoDB()

export async function createMessage() {
  const newQuestion = new Question({ question: "Hello world" });
  await newQuestion.save();
}
