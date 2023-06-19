import "./Score.css";

function Score(props) {
  return (
    <>
      <p class="score" id="score--0">
        {props.score}
      </p>
      <div class="current">
        <p class="current-label">Current</p>
        <p class="current-score" id="current--0">
          {props.total}
        </p>
      </div>
    </>
  );
}

export default Score;
