export default function Hangman({wrongLetters}){
    const errors = wrongLetters.length;

    return(
        <svg className='col' width="334" height="300" viewBox="0 0 334 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="297.5" x2="150" y2="297.5" stroke="#FFFFFF" strokeWidth="5"/>
<line x1="72.502" y1="300" x2="72.502" stroke="#FFFFFF" strokeWidth="5"/>
<line x1="75" y1="2.5" x2="275" y2="2.5" stroke="#FFFFFF" strokeWidth="5"/>
<line x1="73.2322" y1="56.2652" x2="126.265" y2="3.23218" stroke="#FFFFFF" strokeWidth="5"/>

{errors>0 && <line x1="272.5" y1="5" x2="272.5" y2="58" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>1 && <circle cx="273" cy="82" r="22.5" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>2 && <line x1="272.5" y1="107" x2="272.5" y2="207" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>3 && <line x1="273.75" y1="155.585" x2="332.207" y2="121.835" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>4 && <line x1="213.25" y1="121.835" x2="271.707" y2="155.585" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>5 && <line x1="319.962" y1="252.498" x2="272.232" y2="204.768" stroke="#FFFFFF" strokeWidth="5"/>}
{errors>6 && <line x1="272.498" y1="204.768" x2="224.768" y2="252.497" stroke="#FFFFFF" strokeWidth="5"/>}
</svg>

    )
}