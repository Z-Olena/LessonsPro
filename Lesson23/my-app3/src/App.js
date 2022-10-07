import logo from "./logo.svg"
import "./App.css"
import hello from "./hello.jpeg"
import React, { useEffect, useState } from "react"

import { Hi } from "./components/Greetings"
import Cards from "./components/Cards"
import CustomEdit from "./components/Edit"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function IndexPage() {
  return (
    <React.Fragment>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </React.Fragment>
  )
}

const ClickCounter = (props) => {
  const [count, setCount] = useState(props.startVal)

  const incrementCounter = () => setCount(count + 1)

  return (
    <React.Fragment>
      <button onClick={incrementCounter}>Click me!</button>
      <p>{`Click counter ${count}`}</p>
    </React.Fragment>
  )
}

function SecCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    function handleStatusChange() {
      setCount(count + 1)
    }

    const interval = setInterval(handleStatusChange, 1000)
    return () => clearInterval(interval)
  })
  return <p>{count}</p>
}

function UserForm() {
  const [text, setText] = useState("")
  const onEdit = (value) => setText(value)

  return (
    <React.Fragment>
      <SecCounter></SecCounter>
      <CustomEdit value={text} onEdit={onEdit} />
    </React.Fragment>
  )
}

function App() {
  const click = (index) => {
    console.log("Clicked", index)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <ClickCounter startVal={2} />
        <UserForm />
        <BrowserRouter>
          <Link to='/'>Home</Link>
          <Link to='greetings'>Greeting</Link>
          <Link to='cards'>Cards</Link>
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route
              path='greetings'
              element={
                <Hi image={hello}>
                  <button>OK</button>
                </Hi>
              }
            />
            <Route path='cards' element={<Cards></Cards>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
