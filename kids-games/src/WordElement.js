
function WordElement(props){
    return <div className="dict-main-block">
    <div>
        |
    </div>
    <div className="dict_word">
        {props.new_word}
    </div>
    <div>
        |
    </div>
    <div className="dict_letter">
        {props.letter}
    </div>
    <div>
        |
    </div>
</div>

}

export default WordElement;