import MathBlock from "./MathBlock";
import Navi from "./Navi";

function MathematicFunction() {
  const difficult = 6;
  return (
    <div className="math-func--block">
      <div>
        <Navi />
        <h2>Посчитай</h2>
      </div>
      <div className="math-func--block--left">
        <MathBlock int={difficult} />
        <MathBlock int={difficult} />
        <MathBlock int={difficult} />
      </div>
      <div></div>
      <div className="math-func--block--right">
        <MathBlock int={difficult} />
        <MathBlock int={difficult} />
        <MathBlock int={difficult} />
      </div>
      <div></div>
    </div>
  );
}

export default MathematicFunction;
