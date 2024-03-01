import ComponentNumber from "./ComponentNumber";


function CompareNumber(){
    const difficult = 10
    return <div className="compare-number--block">
                <div>
                <a href="/">Back</a>
                </div>
                <div className="compare-number--block--left">
                    <ComponentNumber int={difficult}/>
                    <ComponentNumber int={difficult}/>
                    <ComponentNumber int={difficult}/>
                </div>
                <div></div>
                <div className="compare-number--block--right">
                    <ComponentNumber int={difficult}/>
                    <ComponentNumber int={difficult}/>
                    <ComponentNumber int={difficult}/>
                </div>
                <div></div>
            </div>
    
}

export default CompareNumber;