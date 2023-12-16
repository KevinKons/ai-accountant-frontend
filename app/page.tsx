import SendMessageBox from './components/SendMessageBox'
import ChatHeader from './components/ChatHeader'
import ChatMessage, { MessageType } from './components/ChatMessage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <ChatHeader />
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <ChatMessage messageType={MessageType.USER_MESSAGE} message='Hi how are you?' />
          <ChatMessage messageType={MessageType.BOT_MESSAGE} message='Good, thanks for asking.' />
        </div>
        <SendMessageBox />
      </div>
    </main>
  )
}
