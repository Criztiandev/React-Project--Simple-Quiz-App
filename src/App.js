import React, { useState,useEffect } from 'react'
import './App.css'
import {Gameplay,Mainmenu,ResultScreen} from "./Components/componentsIndex"
import { gameStateContext } from './Context/gameStateContext'
import Loader from './Routes/Loader'

//TODO : Auth system , UI Design (Cute and Cartonny) , Create Question set (https://opentdb.com/api_config.php), Seassion

function App() {
  const [isLoading,setLoading] = useState(true)
  const [quizData,setQuizData] = useState([])
  
  const [gameState,setGameState] = useState("menu")
  const [score,setScore] = useState(0)


  async function fetchData(API){
      try{
        setLoading(true)
        const result = await fetch(API)
        const data =  await result.json()
        setQuizData(data.results)
        setLoading(false)
      }catch(e){
        console.log(e)
        setLoading(true)
      }
  }
  useEffect(() =>{
        fetchData("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
  },[])
    return isLoading ? <Loader /> : (
      <>
        <gameStateContext.Provider value={{gameState,setGameState, quizData, score,setScore}}>
            {gameState === "menu" && <Mainmenu />}
            {gameState === "gamePlay" && <Gameplay />}
            {gameState === "result" && <ResultScreen />}
        </gameStateContext.Provider>
      </>
    )
}

export default App