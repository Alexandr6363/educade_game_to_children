import dict from "./data/Dict"
import Word from "./Word";

function Dictionary(){
    function getRandomWord(dict){
                                return dict[Math.floor((Math.random()*dict.length))];
                                     }    
    
    return <div>
            <Word word={getRandomWord(dict)} />
            <Word word={getRandomWord(dict)} />
            <Word word={getRandomWord(dict)} />
    </div>
}

export default Dictionary;