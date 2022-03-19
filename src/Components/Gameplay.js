import React, { useContext, useState } from 'react'
import { gameStateContext } from '../Context/gameStateContext'
import QuizIndex from './quizIndex'

function Gameplay() {

    const {setGameState,quizData,score,setScore} = useContext(gameStateContext)
    const [currectQuiz,setCurrentQuiz] = useState(0)
    const {category,difficulty,question,correct_answer,incorrect_answers} = quizData[currectQuiz]


    const Shuffledanswer = [...incorrect_answers,correct_answer].sort(() => 0.5 - Math.random())

    function toggleAnswer(value){
        if(value === correct_answer){
            setScore(score + 1)
        }
        return currectQuiz === quizData.length - 1 ? setGameState("result") : setCurrentQuiz(currectQuiz + 1)
    }


  return (  
    <main className=' min-h-screen border border-black grid grid-cols-[5%,85%,10%]'>
           <section className=' max-h-screen border border-black flex justify-evenly items-center flex-col'>
                {quizData.map((element,index) =>{
                    return(
                        <QuizIndex
                            key = {index}
                            index = {index}
                            current = {currectQuiz === index}
                        />
                    )
                })}
            </section>

            <section className=' w-[80%] h-[80%] m-auto  border border-black rounded-xl flex justify-evenly items-center flex-col '>
                <h1 className='border border-black rounded-lg px-8 py-2 text-lg font-bold'>{category}</h1>
                <p className="w-[80%] border border-black p-8 text-3xl text-center">{question}</p>

                <div className="choices max-w-[80%] grid grid-cols-4  gap-4">
                    {Shuffledanswer.map(items =>{
                        return (
                            <button
                            className='border border-black w-[10rem] p-2 rounded-lg' 
                            key={items}
                            onClick={(e) => toggleAnswer(e.target.value)}
                            value={items}>{items}
                            </button>
                        )
                    })   }
                </div>
            </section>

            <section className='border border-black flex justify-around items-center flex-col'>
                <div className=" w-full  flex justify-center items-center flex-col">
                    <div className="w-24 h-24 rounded-full border border-black "></div>
                    <h1 className='text-center'>Criztian Jade M Tuplano</h1>
                    <h1>CAS</h1>
                </div>

                <div className=' p-4'>
                    <div className='text-center mb-2'>
                            <h2 className='border-b border-black'>{difficulty}</h2>
                            <p>Dificulty</p>
                    </div>

                    <div className='text-center mb-2'>
                            <h2 className='border-b border-black'>{score}</h2>
                            <p>Score</p>
                    </div>
                </div>

                <div className=''>
                    <button>Menu</button>
                    <button>Quit</button>
                </div>

            </section>
         
    </main>
  )
}

export default Gameplay

