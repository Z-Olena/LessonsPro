import "./App.css"

import { useContext, useState } from "react"
import WebSocketClient from "./services/SocketClientProvider"
import WebSocketContext from "./services/WebSocketContext"

function MessageList() {
  const socketCtx = useContext(WebSocketContext)

  return (
    <div>
      {socketCtx.recivedBuffer.map((message, index) => (
        <p key={`msg-${index}`}>{message}</p>
      ))}
    </div>
  )
}

function SocketDemo() {
  const socketCtx = useContext(WebSocketContext)
  const [message, setMessage] = useState("")

  const sendMessage = () => socketCtx.sendMessage(message)
  const onTyped = (event) => setMessage(event.target.value)

  return (
    <>
      <p>Connection status: {socketCtx.connectionStatus}</p>
      <button onClick={sendMessage}>Send message</button>
      <input type='text' value={message} onChange={onTyped} />
    </>
  )
}

function App() {
  return (
    <div className='App'>
      <WebSocketClient>
        <SocketDemo />
        <MessageList />
      </WebSocketClient>
    </div>
  )
}

export default App
