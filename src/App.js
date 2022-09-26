import './App.css';
import React,{useState,useEffect} from 'react';
import Hangman from './component/Hangman';
import Guess from './component/Guess';
import Popup from './component/Popup';
import axios from 'axios';

function App() {
  const [playable, setPlayable] = useState(true);
  const[correctLetters,setCorrectLetters]=useState([]||JSON.parse(sessionStorage.getItem('correctLetters')));
  const [wrongLetters, setWrongLetters] = useState([]||sessionStorage.getItem('wrongLetters'));
  const[movies,setMovies]=useState([]);
  const[selectedWord,setSelectedWord]= useState(''||sessionStorage.getItem('selectedWord'));
  const alphabet= 'abcdefghijklmnopqrstuvwxyz';
  const[clickLetter,setclickLetter]=useState(''||sessionStorage.getItem('clickLetter'));
  useEffect(()=>{
     sessionStorage.setItem('correctLetters',JSON.stringify(correctLetters));
     sessionStorage.setItem('wrongLetters',wrongLetters);
     sessionStorage.setItem('selectedWord',selectedWord);
     sessionStorage.setItem('clickLetter',clickLetter);

  },[correctLetters,wrongLetters,selectedWord,clickLetter])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=13b4f06388f5d0fa6dd6465c19618bd1&language=en-US&pa').then(res=>{
      console.log("hi",res.data.results);
      const moviesTitle = res.data.results.length && res.data.results.map(({title})=>title.toLowerCase());
      setMovies(moviesTitle);
      setSelectedWord(moviesTitle[Math.floor(Math.random() * movies.length)]);
     }).catch(err=>console.log(err))
     
},[])

  console.log("movies",movies);

  console.log("selectedWord",selectedWord);
  function CheckCorrect(letter) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters((currentLetters) => [...currentLetters, letter]);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters((currentLetters) => [...currentLetters, letter]);
      }
    }
  }

  const handleKeydown = event => {
    const { key, keyCode } = event;
    console.log("keyCode",keyCode);
    if(!keyCode){
      const {value}=event.target;
      const clkLetter=[];
      clkLetter.push(value);
      setclickLetter((prevState)=>[...prevState,...clkLetter]);
  console.log("button",value);
  CheckCorrect(value);
       }
    else{
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        console.log("selectedWord1",selectedWord);
        console.log("selectedWord1",selectedWord);
  
        CheckCorrect(letter);
      }
  
    }
  }

  useEffect(() => {
    
   window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
}, [correctLetters, wrongLetters,playable]);
 

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setclickLetter([]);
    setSelectedWord(movies[Math.floor(Math.random() * movies.length)]);

  }
  console.log('clickLetter',clickLetter);

  const isDisabled=(ch)=>clickLetter.includes(ch);

  return (
    <div>
    <div className='container'>
    <h1 className='text-center mt-4'>HANGMAN..</h1>
  
    <div className='row mt-4'>
    <div className='col-6'>
      <Hangman wrongLetters={wrongLetters}/>
    </div>
    <div className='col-6'>
    
    {alphabet.split('').map((letter,i) =>
       <button className='btn btn-color btn-lg mr-4 mt-4' value= {letter} onClick={handleKeydown} disabled={isDisabled(letter)} >
          {letter}
       </button>)}
    </div>
    </div>
    <div className='text-center mt-4'>
    <Guess selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
       
    <div className='text-center mt-4'><button className='btn btn-color btn-lg' onClick={playAgain}>START</button>

    </div>
    </div>
    <div className='mt-4'>
    <Popup wrongLetters={wrongLetters} selectedWord={selectedWord}/>
    
    </div>
    </div>
    
  );
}

export default App;
