import React , {useEffect,useState}from 'react'
import './Jokes.css'
const API_URL = 'https://api.chucknorris.io/jokes/random'


function Jokes() {
    const[joke,setjoke] =useState('');
    const generateJoke = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setjoke(data.value));
    }
    useEffect(()=>{
        generateJoke();

    },[]
    )
    

  
     
  return (
    <>
    <div className='container'>
        <div className="container-p">
            {joke}
        </div>
            <button onClick={generateJoke}>Get Jokes</button>
      
    </div>
    
    </>
    
  )
}

export default Jokes