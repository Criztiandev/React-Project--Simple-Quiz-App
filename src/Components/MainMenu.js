import React, { useContext } from 'react'
import { gameStateContext } from '../Context/gameStateContext'
function Mainmenu() {
    const {setGameState} = useContext(gameStateContext)
  return (
   <>
          <header>
                <h1>Quiz App</h1>
            </header>
            <main>
                <h1>Welcome</h1>
                <button onClick={() => setGameState("gamePlay")}>Start Quiz</button>
            </main>
   </>
  )
}

export default Mainmenu