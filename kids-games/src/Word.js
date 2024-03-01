import WordElement from "./WordElement";

function Word(props) {
  let list_of_word_in = props.list_of_word;
  let dict_word_letter = list_of_word_in.map(getNewWordDict);

  let list_of_letter_out = dict_word_letter.map((e) => e.letter);
  let list_of_word_out = dict_word_letter.map((e) => e.new_word);
  list_of_letter_out = list_of_letter_out.sort();
  list_of_word_out = list_of_word_out.sort();
  console.log(list_of_word_out);
  console.log(list_of_letter_out);

  function getNewWordDict(word) {
    function get_random_index_word(word) {
      return Math.floor(Math.random() * word.length);
    }

    let index_char = get_random_index_word(word);

    function get_word(word) {
      let out_word =
        word.substring(0, index_char) + "_" + word.substring(index_char + 1);
      return out_word;
    }

    let new_word = get_word(word);
    let letter = word[index_char];
    return {
      new_word: new_word,
      letter: letter,
    };
  }

  return (
    <div id="print-content">
      <a href="/">Back</a>
      <button onClick={() => window.print()}>PRINT</button>
      <h2>Соедини недостающие буквы со словами</h2>

      <WordElement
        new_word={list_of_word_out[0]}
        letter={list_of_letter_out[0]}
      />
      <WordElement
        new_word={list_of_word_out[1]}
        letter={list_of_letter_out[1]}
      />
      <WordElement
        new_word={list_of_word_out[2]}
        letter={list_of_letter_out[2]}
      />
    </div>
  );
}

export default Word;
