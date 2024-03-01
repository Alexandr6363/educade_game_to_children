function Int(props) {
  function getRandomInt() {
    return Math.floor(1 + Math.random() * props.int);
  }
  return <div className="int">{getRandomInt(props)}</div>;
}

export default Int;
