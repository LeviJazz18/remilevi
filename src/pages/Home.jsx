import React from 'react'
import Herosection from '../components/Home/Herosection'
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(5)
  const [name, setName] = useState("Foodie")
   const [openmenu, setOpenmenu] = useState(false)
  

  return (
    <div>

      <Herosection />
      <div>Body Count: {count}</div>
      <button onClick={() => setCount(count + 10)}> Update Body Count</button>
       <div>Your Name: {name}</div>
      <button onClick={() => setName('Food for all')}> Update Body Count</button>

{openmenu && <div>Menu is open</div>}
      <button onClick={() => setOpenmenu((openmenu)=>!openmenu)}> toggle <menu></menu></button>
    </div>
  )
}


export default Home