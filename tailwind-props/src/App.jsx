import { useState } from 'react'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    username: "sou",
    age:23
  }

  return (
    <>
      <Card username="Soumita Das" btnText='Click Me' myobject={myObj}/>
      <Card username="Ruban Pathak"/>
    </>
  )
}

export default App
