import Int from "./Int";

function BigInt() {
  const difficult = 100;
  return (
    <div>
      <a href="/">Back</a>
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
