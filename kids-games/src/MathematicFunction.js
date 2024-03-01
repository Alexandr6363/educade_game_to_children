import MathBlock from "./MathBlock";

function MathematicFunction() {
  const difficult = 6;
  return (
    <div className="math-func--block">
      <div>
        <a href="/">Back</a>
        <button onClick={() => window.print()}>PRINT</button>
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
