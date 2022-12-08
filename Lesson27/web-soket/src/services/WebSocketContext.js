import { createContext } from "react"

const WebSocketContext = createContext({
  connectionStatus: "",
  recivedBuffer: [],
  sendMessage: () => {},
})

export default WebSocketContext
