export default function Guess({ selectedWord, correctLetters }){
    return (
      <div className="word">
        {  selectedWord && selectedWord.split('').map((letter, i) => {
            //console.log("hi",selectedWord,correctLetters);
          return (
            <span className="" key={i} >
              {correctLetters && correctLetters.includes(letter) ? letter : '_'}
            </span>
          )
        })}
      </div>
    )
  }