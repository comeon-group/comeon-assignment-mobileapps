import React, {useState, useEffect} from "react";
import GameCell from "./GameCell";
import {Game as Game} from "./GameCell";
import Divider from "@material-ui/core/Divider";

function GameList() {
  const [games,setTodos]  = useState<any>([]);
  useEffect(() => {
    
      let newState: Game[] = [];
      fetch("https://kismet-bd1ac.firebaseio.com/assignment/games.json")
      .then(res => res.json())
      .then((result) => {
        for (let item in result) {
        console.log("Item : ",result[item].name)
        newState.push({
          id: item,
          name: result[item].name,
          description:result[item].description,
          short_desc : result[item].short_desc,
          code: result[item].code,
          icon : result[item].icon
        });
      }
      setTodos(newState)
      })
   
  },[])
  return (
    <>
      {games.map((game: any, i: number) => (
        
        <React.Fragment key={game.id}>
          <GameCell  game={game} />
          {i<game.length -1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default GameList;