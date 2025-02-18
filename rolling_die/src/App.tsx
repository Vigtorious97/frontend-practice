import './App.css'
import RollDice from "./components/RollDice";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>🎲 Dice Roller</h1>
      <RollDice />
    </div>
  );
};



export default App
