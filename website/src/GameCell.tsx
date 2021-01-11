import React from "react";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import RightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Game.css";

export interface Game {
  id: string;
  name: string;
  icon: string;
  description: string;
  short_desc: string;
  code: string;
}


function GameCell(props: any) {
  const {game } = props;

  console.log("Current game : ",game)
  return (
    <div className="Game">
      <img src={game.icon} alt="game-thumbnail"/>
      <p><b>{game.name}</b>
      {game.short_desc}</p>
      <IconButton aria-label="delete" onClick={e => {console.log("Go to Details page")}}>
        <RightIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default GameCell;