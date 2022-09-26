
export default function Popup({wrongLetters,selectedWord,playable}){
    if (wrongLetters.length>=7) 
    return (
        <div className="text-center">
            <h2>Unfortunately you lose</h2>
            <h3>The word was : {selectedWord}</h3>
            <h3>Play Again</h3>
          </div>
    
      )
    
}