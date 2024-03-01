import React from "react";


function ComponentNumber(props){
    function getRandomInt() {
        return Math.floor(1 + (Math.random() * props.int));
      }
    

    const listOfSymbol = ["* ", "o ", "/ "];
    
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }
      
      
      

    const randomSymbol = get_random(listOfSymbol);

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
                {numberOne}
            </diV>
            <div className="little">
                {strOne}
            </div>
        </div>
        <div className="component-number--value">
            <diV>
                {numberTwo}
            </diV>
            <div className="little">
                {strTwo}
            </div>
        </div>
    </div>
}

export default ComponentNumber;