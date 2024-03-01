import ComponentNumber from "./ComponentNumber";
import Navi from "./Navi";

function CompareNumber() {
  const difficult = 10;
  return (
    <div className="compare-number--block">
      <div>
        <Navi />
        <h2>Сравни два числа</h2>
      </div>
      <div className="compare-number--block--left">
        <ComponentNumber int={difficult} />
        <ComponentNumber int={difficult} />
        <ComponentNumber int={difficult} />
      </div>
      <div></div>
      <div className="compare-number--block--right">
        <ComponentNumber int={difficult} />
        <ComponentNumber int={difficult} />
        <ComponentNumber int={difficult} />
      </div>
      <div></div>
    </div>
  );
}

export default CompareNumber;
