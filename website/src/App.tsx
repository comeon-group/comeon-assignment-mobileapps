import React from "react";
import GameList from "./GameList";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Container className="conatiner" maxWidth="sm">
        <Card>
          <CardContent>
            <h3>List of Games</h3>
            <GameList />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
