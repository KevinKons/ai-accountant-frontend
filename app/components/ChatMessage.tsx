import { twMerge } from 'tailwind-merge';

export enum MessageType {
  USER_MESSAGE,
  BOT_MESSAGE
}

export default function ChatMessage({ message, messageType }: { message: string, messageType: MessageType }) {
  return (
    <div className="chat-message">
      <div className={twMerge("flex items-end", messageType === MessageType.USER_MESSAGE && "justify-end")}>
        <div className={twMerge("flex flex-col space-y-2 text-xs max-w-xs mx-2", `${messageType === MessageType.BOT_MESSAGE ? "order-2 items-start" : "order-1 items-end"}`)}>
          <div>
            <span
              className={twMerge(
                "px-4 py-2 rounded-lg inline-block",
                `${messageType == MessageType.BOT_MESSAGE ? "rounded-bl-none bg-gray-300 text-gray-600" : "rounded-br-none bg-blue-600 text-white"}`,
              )}
            >
              {message}
            </span>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1" />
      </div>
    </div>
  )
} 