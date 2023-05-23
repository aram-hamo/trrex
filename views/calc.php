<!DOCTYPE html>
<html lang=en>
<head>
    <meta name=viewport content="width=device-width, initial-scale=1">
</head>
<body>
  <title><?= self::viewData()['title'] ?></title>
<style>
table,td{
  margin:0px;
  border:solid 1px;
}
</style>
<table id=game>
</table>
<div id=newGameButtons>
  <button onclick="newGame('queens');">Queens</button>
  <button onclick="newGame('letoosh');">Letoosh</button>
  <button onclick="newGame('king');">King</button>
  <button onclick="newGame('trex');">Trex</button>
  <button onclick="newGame('dinnar');">Dinnar</button>
</div>
<script>
round = 0;
var gamesCounter = 0;
playedGames = [];
/// {{{ notPlayed
function notPlayed(game){
  if(playedGames.length >= 6){
    playedGames = [];
    gamesCounter = 0;
    round++;
    if(round == 3){
      document.getElementById("newGameButtons").style.display = "none";
    }
  }
  if (playedGames[gamesCounter] == game || playedGames[gamesCounter-1] == game || playedGames[gamesCounter-2] == game || playedGames[gamesCounter-3] == game){
    return 0;
  }else{
    return 1;
  }
}
/// }}}
// {{{ newGame
function newGame(gameType){
  var players = document.getElementById("players");
  if(players == null){
  document.getElementById("game").innerHTML +=`
    <tr id=players>
      <td>Game</td>
      <td><input value="Player 1"></input></td>
      <td><input value="Player 2"></input></td>
      <td><input value="Player 3"></input></td>
      <td><input value="Player 4"></input></td>
    </tr>`;
  }
/// }}}
  if(notPlayed(gameType)){
  switch(gameType){
    case "queens":
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Queens</td>
          <td><input value=0 type=number min=0 max=4></input></td>
          <td><input value=0 type=number min=0 max=4></input></td>
          <td><input value=0 type=number min=0 max=4></input></td>
          <td><input value=0 type=number min=0 max=4></input></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "queens";
      break;
    case "letoosh": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Letoosh</td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "letoosh";
      break
    case "king": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>king</td>
          <td><input value=0 type=number min=0 max=1></input></td>
          <td><input value=0 type=number min=0 max=1></input></td>
          <td><input value=0 type=number min=0 max=1></input></td>
          <td><input value=0 type=number min=0 max=1></input></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "king";
      break
    case "trex": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Trex</td>
          <td><input value=0 type=number min=0 max=200></input></td>
          <td><input value=0 type=number min=0 max=200></input></td>
          <td><input value=0 type=number min=0 max=200></input></td>
          <td><input value=0 type=number min=0 max=200></input></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "trex";
      break
    case "dinnar": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Dinnar</td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
          <td><input value=0 type=number min=0 max=13></input></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "dinnar";
      break
  }
  }
}
</script>
</body>
</html>
