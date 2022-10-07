import React from "react"

const helloStyle = {
  image: {
    width: "400px",
  },
  frame: {
    border: "1px solid white",
    width: "400px",
  },
}

export class Hi extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: new Date() }
  }
  render() {
    return (
      <div style={helloStyle.frame}>
        <h1>Привітання!</h1>
        <img src={this.props.image} style={helloStyle.image} alt='logo' />
        {this.props.children}
        <h3>{this.state.date.toLocaleTimeString()}.</h3>
      </div>
    )
  }
}
