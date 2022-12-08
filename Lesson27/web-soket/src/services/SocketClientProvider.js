import React, { Component } from "react"
import WebSocketContext from "./WebSocketContext"

class WebSocketClient extends Component {
  constructor(props) {
    super(props)

    this.socket = new WebSocket(
      "wss://javascript.info/article/websocket/demo/hello"
    )

    this.state = {
      connectionStatus: "connected",
      recivedBuffer: [],
    }
    this.sendMessage = this.sendMessage.bind(this)
  }
  componentWillUnmount() {
    this.socket.onopen = () => this.setState({ connectionStatus: "connected" })
  }

  componentDidMount() {
    // this.socket.onopen = () => this.setState({ connectionStatus: "connected" })
    this.socket.onclose = () => {
      this.setState({ connectionStatus: "disconnected" })
      this.setState({ recivedBuffer: [] })
      //   // Add some magic here
    }
    this.socket.onmessage = (msg) =>
      this.setState({ recivedBuffer: [...this.state.recivedBuffer, msg.data] })
  }

  sendMessage = (message) => {
    this.socket.send(message)
  }

  get WebSocketContextData() {
    return {
      connectionStatus: this.state.connectionStatus,
      recivedBuffer: this.state.recivedBuffer,
      sendMessage: this.sendMessage,
    }
  }

  render() {
    return (
      <WebSocketContext.Provider value={this.WebSocketContextData}>
        {this.props.children}
      </WebSocketContext.Provider>
    )
  }
}

export default WebSocketClient
