import dict from "./data/Dict"
import Word from "./Word";

function Dictionary(){
    function getRandomWord(dict){
                                return dict[Math.floor((Math.random()*dict.length))];
                                     }    
    let list_of_word = [getRandomWord(dict), getRandomWord(dict), getRandomWord(dict)]
    return <div>
            <Word list_of_word={list_of_word} />

    </div>
}

export default Dictionary;