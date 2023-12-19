"use server"

import finetune from "./config/finetune";
import Question from "./models/Question";
import { connectToMongoDB } from "./service/mongoose";
import OpenAI from "openai";
import { revalidatePath } from "next/cache";

connectToMongoDB()

const openai = new OpenAI({ apiKey: "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" })

export async function sendMessage(formData: FormData) {

  const messageText = formData.get("messageText")

  console.log({ messageText })

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: finetune.prompt },
    { role: "user", content: messageText as string }],
    model: "gpt-3.5-turbo",
  });

  const answer = completion.choices[0].message.content

  console.log({ answer })


  const newQuestion = new Question({ question: messageText, answer, date: new Date() });
  await newQuestion.save();

  revalidatePath("/")  
}
