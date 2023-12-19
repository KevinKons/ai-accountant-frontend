import SendMessageBox from './components/SendMessageBox'
import ChatHeader from './components/ChatHeader'
import ChatMessage, { MessageType } from './components/ChatMessage'
import { useEffect, useState } from 'react'
import { connectToMongoDB } from './service/mongoose'
import Question, { IQuestion } from './models/Question'

connectToMongoDB()

export default async function Home() {
  const messages: IQuestion[] = await Question.find(/*{ company: companyId }*/)
    .sort({ date: 'asc' })
    .exec();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <ChatHeader />
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {
            messages && messages.length > 0 && messages.map((message, index) => (
              <div>
                <ChatMessage messageType={MessageType.USER_MESSAGE} message={message.question} />
                <ChatMessage messageType={MessageType.BOT_MESSAGE} message={message.answer} />
              </div>
            ))
          }
        </div>
        <SendMessageBox />
      </div>
    </main>
  )
}
