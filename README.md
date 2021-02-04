# comeon-assignment-mobileapps

Our client has requested a simple Casino Games App that lists the available games on the opening screen and allows users to navigate through the game detail page where users can see relevant game content. And our team's duty is to complete this task ASAP and provide a demo app to our client.
While analyzing the client's brief, one of our App team members had a 'brilliant' idea that we can make use of a Game listing web page that our Frontend team had already implemented with Web technologies (React, TS etc.) So in order to complete the project, we have decided to make use of this Website. It is to our advantage that we got rid of reimplementing game listing page but there are still missing requirements for the given tasks and we need to complete them in the native side. You may find the remaining tasks to implement, in below. Please note that since we are making use of a shared Web Page project we want to make minimal change to web part's code. What we want to see is a vanilla solution of a webview wrapper that has the native features below. 



1) Our client thought that putting a bar on top of the Game listing page would allow users to identify which part of the page they are in, making navigation easier to understand. 
2) Our client asked us to show the number of games in the 'navigation bar' so you are required to implement a 'Total Game Number' indicator on top of the game-list page.
3) When a user taps on the arrow icon of any game, the user should be navigated to the game detail page. The detail page must show : 
- Game's name on top of the detail page
- Game's description inside a card with a white background.
- Game's theme color as the background color of Game Detail page.
Note : You may also find these values in the remote Game resource that our current 'website' consumes.

## Running Website
```sh
npm install
npm start
```
### Hints
You may make use of a free web tunnel (eg: NGRok) if you don't want to deal with a self signed SSL on the localhost website you wrap.
