import "./Dice.css";

function Dice(props) {
  return (
    <img
      src={`https://www.shalach-manos.com/class/dice-${props.number}.png`}
      alt="Playing dice"
      class="dice"
    ></img>
  );
}

export default Dice;
