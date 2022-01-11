import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Window from './Window';
import ToDo from './ToDo';

export default function App() {

  const fib = () => {
    console.log('Added')
    return 0
  }

  let [count, setcount] = useState(() => fib());

  const addCount = () => {
    setcount(prevCount => prevCount + 1)
  }

  const {pokemon, setPokemon} = useState({})

  const getData = async () => {
    const res = await fetch(" https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await res.json()
    console.log("Got the Pokemon")
    return data
  }

  useEffect(async ()=>{
    const data = await getData();
    setPokemon(data)

  }, [])


    return (
      <div>
        <h1>"Will's Functional Component"</h1>
        <h3>Count Me: {count}</h3>
        <button onClick={() =>{addCount()}}>+</button>

        <Routes>
          <Route path ='/' element={<Home />}/>
          <Route path ='/window' element={<Window />}/>
          <Route path ='/todo' element={<ToDo />}/>
        </Routes>
        
      </div>
    )
}

