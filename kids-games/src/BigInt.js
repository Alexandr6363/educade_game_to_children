import Int from "./Int";
import Navi from "./Navi";

function BigInt() {
  const difficult = 100;
  return (
    <div>
      <Navi />
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
