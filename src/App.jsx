import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
  const [Temp1, setTemp1] = useState(0);
  const [Temp2, setTemp2] = useState(0);
  const [Temp3, setTemp3] = useState(0);
  const [Temp4, setTemp4] = useState(0);
  
  return (
    <>
    <div id='Place'>
      {/*Items divs */}
          <div className='Items'>
          {/*Items divs */}
          <h1>
            Shawarma roll
          </h1> 
          <div id = "testdiv"> 
            <button id='button1' onClick={() =>setTemp1((Temp1) => Temp1+1) }>+</button> 
            <h1>{Temp1}</h1> 
            <button id='button1' onClick={() =>setTemp1((Temp1) => Temp1-1)} disabled={Temp1 === 0}>-</button>
          </div>
          </div>
      {/*Items divs */}
          <div className='Items'><h1>
            Crispy Chiken roll
          </h1> 
          <div id = "testdiv"> 
            <button id='button1' onClick={() =>setTemp2((Temp2) => Temp2+1) }>+</button> 
            <h1>{Temp2}</h1> 
            <button id='button1' onClick={() =>setTemp2((Temp2) => Temp2-1)} disabled={Temp2 === 0}>-</button>
          </div>
          </div>

          <div className='Items'><h1>
            Peri Peri Chicken roll
          </h1> 
          <div id = "testdiv"> 
            <button id='button1' onClick={() =>setTemp3((Temp3) => Temp3+1) }>+</button> 
            <h1>{Temp3}</h1> 
            <button id='button1' onClick={() =>setTemp3((Temp3) => Temp3-1)} disabled={Temp3 === 0}>-</button>
          </div>
          </div>

          <div className='Items'><h1>
            Chicken Fajita roll
          </h1> 
          <div id = "testdiv"> 
            <button id='button1' onClick={() =>setTemp4((Temp4) => Temp4+1) }>+</button> 
            <h1>{Temp4}</h1> 
            <button id='button1' onClick={() =>setTemp4((Temp4) => Temp4-1)} disabled={Temp4 === 0}>-</button>
          </div>
      </div>
      

      <div>
          <table>
          <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
      </tbody>
          </table>
      </div>
      </div>
    </>
  )
}

export default App
