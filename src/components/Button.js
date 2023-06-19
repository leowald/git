import "./Button.css";

function Button(props) {
  return (
    <button onClick={props.whenClick} class={`btn ${props.applyClass}`}>
      {props.text}
    </button>
  );
}

export default Button;
