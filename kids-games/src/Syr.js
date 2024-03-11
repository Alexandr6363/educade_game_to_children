import dict_syr from "./data/Dict_syr";
import Navi from "./Navi";
import SyrWord from "./SyrWord";

function Syr (){
    function getRandomWord(dict) {
        return dict[Math.floor(Math.random() * dict.length)];
      }

    return (
        <div className="dict-syr">
            <Navi />
            <SyrWord word={getRandomWord(dict_syr)}/>
            <SyrWord word={getRandomWord(dict_syr)}/>
            <SyrWord word={getRandomWord(dict_syr)}/>
        </div>
      );
}

export default Syr;