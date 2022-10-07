const cardStyle = {
  frame: {
    border: "1px solid white",
    width: "400px",
    height: "100%",
  },
}

const nameCards = {
  name: "Jon",
  phone: "+380123456789",
}
function Cards() {
  return (
    <div style={cardStyle.frame}>
      <h3>{nameCards.name}</h3>
      <h4>{nameCards.phone}</h4>
      <button>ok</button>
    </div>
  )
}

export default Cards
