import React, { JSX } from "react";
import {
    FaDiceOne,
    FaDiceTwo,
    FaDiceThree,
    FaDiceFour,
    FaDiceFive,
    FaDiceSix,
} from "react-icons/fa";

interface DieProps {
    number : number;
    rolling : Boolean;
}

const Die : React.FC<DieProps> = ({number,rolling}) => {
    const dieFaces : {[key:number] : JSX.Element} = {
        1 : <FaDiceOne/>,
        2 : <FaDiceTwo/>,
        3 : <FaDiceThree/>,
        4 : <FaDiceFour/>,
        5 : <FaDiceFive/>,
        6 : <FaDiceSix/>,
    };

    return <div className={ `die ${rolling ? "shaking" : ""}`}>{dieFaces[number]}</div>
}

export default Die;
