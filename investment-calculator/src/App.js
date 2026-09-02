import {Header} from './components/Header.jsx'
import {UserInput} from './components/UserInput.jsx'
import {useState} from 'react'
import {Results} from './components/Results.jsx'

function App() {
  const[userInput, setUserInput]=useState({
    initialInvestment:1000,
    annualInvestment:100,
    expectedReturn:7,
    duration:3,

})

function handleUserInput(inputIdentifier, inputValue){
    setUserInput(
        (prevInput)=>{
            return{
                ...prevInput,
                [inputIdentifier]:+inputValue
            }
        }
    )
}
  return (
    <>
    <Header/>
    <UserInput onChange={handleUserInput} userInput={userInput}/>
    
    {userInput.duration > 0 && <Results input={userInput} />}
{userInput.duration <= 0 && (
  <p className='center'>Duration must be greater than 0.</p>
)}    </>
  )
}

export default App


