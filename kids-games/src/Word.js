import React from "react";

function Word(props){
    function get_random_index_word (word) {
        return Math.floor((Math.random()* word.length))
      }
    
    let index_char = get_random_index_word(props.word)

    function get_letter(word){
        return word.charAt(index_char)
    }

    function get_word(word){
        let out_word = word.substring(0, index_char) + '_' + word.substring(index_char + 1);
        return out_word
    }

    return <div className="dict-main-block">
        <div>
            |
        </div>
        <div className="dict_word">
            {get_word(props.word)}
        </div>
        <div>
            |
        </div>
        <div className="dict_letter">
            {get_letter(props.word)}
        </div>
        <div>
            |
        </div>
    </div>

}

export default Word;