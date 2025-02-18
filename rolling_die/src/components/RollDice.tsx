import React, {useState} from "react"
import Die from './Die'

const RollDice : React.FC = () => {
    const [die1 , setDie1] = useState<number>(1);
    const [die2 , setDie2] = useState<number>(2);
    const [rolling, setRolling] = useState<boolean>(false)

    const roll = () => {
        setRolling(true)

        setTimeout(() => {
            setDie1(Math.floor(Math.random() * 6 )+ 1);
            setDie2(Math.floor(Math.random() * 6 ) +1);
            setRolling(false);
        },1000);
    };

    return(
        <div className = "roll-dice">
            <div className = "dice-container">
                <Die number = {die1} rolling={rolling}/>
                <Die number = {die2} rolling={rolling}/>
            </div>
            < button onClick={roll} disabled={rolling}>
                {rolling ? "Rolling..." : "Roll Dice"}
            </button>
        </div>
    )
}

export default RollDice;