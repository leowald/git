import "./Player.css";
import Score from "./Score";

function Player(props) {
  return (
    <section class={`player ${props.active}`}>
      <h2 class="name" id="name--0">
        Player {props.playerNum}
      </h2>
      <Score score={props.score} total={props.current}></Score>
    </section>
  );
}

export default Player;
