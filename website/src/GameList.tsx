import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import GameCell from './GameCell';

function GameList() {
  const [games, setGames] = useState<any>([]);
  useEffect(() => {
    fetch('https://kismet-bd1ac.firebaseio.com/assignment/games.json')
      .then((res) => res.json())
      .then((result) => {
        setGames(result.map((item: any, index: number) => ({ id: index, ...item })));
      });
  }, []);
  return (
    <>
      {games.map((game: any, i: number) => (
        <React.Fragment key={game.id}>
          <GameCell game={game} />
          {i < game.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default GameList;
