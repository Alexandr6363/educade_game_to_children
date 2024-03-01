import Int from "./Int";

function BigInt() {
  const difficult = 100;
  return (
    <div>
      <a href="/">Back</a>
      <button onClick={() => window.print()}>PRINT</button>
      <h2>Прочитай числа</h2>
      <div className="big-int">
        <Int int={difficult} />
        <Int int={difficult} />
        <Int int={difficult} />
        <Int int={difficult} />
        <Int int={difficult} />
        <Int int={difficult} />
      </div>
    </div>
  );
}

export default BigInt;
