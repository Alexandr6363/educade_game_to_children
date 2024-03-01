import React from "react";


function MathBlock(props){
    function getRandomInt() {
        return Math.floor(1 + (Math.random() * props.int));
      }
    

    const listOfSymbol = ["* ", "o ", ". ", "/ "];
    const listOfOperator = ["+", "-"]

    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }
      
      
      

    const randomSymbol = get_random(listOfSymbol);
    const randomOperator = get_random(listOfOperator);

    function getImages(int){
        let str = '';
        
        for (let i = 1; i <= int; i++) {
                str = str + randomSymbol;
        }
        return str;
    }

    const numberOne = getRandomInt();
    const numberTwo = getRandomInt();
    const strOne = getImages(parseInt(numberOne));
    const strTwo = getImages(parseInt(numberTwo));
    return <div className="component-number">
        <div className="component-number--value">
            <diV>
                {numberOne > numberTwo ? numberOne : numberTwo}
            </diV>
            <div className="little">
            {numberOne > numberTwo ? strOne : strTwo}
            </div>
        </div>
        <div className="component-number--value">
            {randomOperator}
        </div>
        <div className="component-number--value">
            <diV>
            {numberOne < numberTwo ? numberOne : numberTwo}
            </diV>
            <div className="little">
            {numberOne < numberTwo ? strOne : strTwo}
            </div>
        </div>
        <div className="component-number--value">
            =
        </div>
    </div>
}

export default MathBlock;