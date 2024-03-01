import MathBlock from "./MathBlock";

function MathematicFunction() {
  const difficult = 6;
  return (
    <div className="math-func--block">
      <div>
        <a href="/">Back</a>
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
