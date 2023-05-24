round = 0;
var gamesCounter = 0;
playedGames = [];
// {{{ notPlayed
function notPlayed(game){
  if(playedGames.length >= 6){
    playedGames = [];
    gamesCounter = 0;
    round++;
      document.getElementById("game").innerHTML +=`
        <tr> </tr>
        <tr> </tr>
        <tr> </tr>
        <tr> </tr>
`;
  }
  if (playedGames[gamesCounter] == game || playedGames[gamesCounter-1] == game || playedGames[gamesCounter-2] == game || playedGames[gamesCounter-3] == game){
    return 0;
  }else{
    return 1;
  }
}
// }}}
// {{{ newGame
function newGame(gameType){
  if(round == 3 && playedGames.length >= 5){
    document.getElementById("newGameButtons").style.display = "none";
  }
  var players = document.getElementById("players");
  if(players == null){
  document.getElementById("game").innerHTML +=`
    <tr id=players>
      <td>Game</td>
      <td><input value="Player 1"></td>
      <td><input value="Player 2"></td>
      <td><input value="Player 3"></td>
      <td><input value="Player 4"></td>
    </tr>`;
  document.getElementById("record").innerHTML +=`
    <tr id=records>
      <td>Records</td>
      <td><input value="" readonly></td>
      <td><input value="" readonly></td>
      <td><input value="" readonly></td>
      <td><input value="" readonly></td>
    </tr>`;
  }
/// }}}
  if(notPlayed(gameType)){
  switch(gameType){
    case "queens":
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Queens</td>
          <td><input id="`+"0-"+round+"-"+gameType+`" value=0 type=number min=0 max=4></input></td>
          <td><input id="`+"1-"+round+"-"+gameType+`" value=0 type=number min=0 max=4></td>
          <td><input id="`+"2-"+round+"-"+gameType+`" value=0 type=number min=0 max=4></td>
          <td><input id="`+"3-"+round+"-"+gameType+`" value=0 type=number min=0 max=4></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "queens";
      break;
    case "letoosh": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Letoosh</td>
          <td><input  id="`+"0-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"1-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"2-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"3-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "letoosh";
      break
    case "king": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>king</td>
          <td><input  id="`+"0-"+round+"-"+gameType+`" value=0 type=number min=0 max=1></td>
          <td><input  id="`+"1-"+round+"-"+gameType+`" value=0 type=number min=0 max=1></td>
          <td><input  id="`+"2-"+round+"-"+gameType+`" value=0 type=number min=0 max=1></td>
          <td><input  id="`+"3-"+round+"-"+gameType+`" value=0 type=number min=0 max=1></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "king";
      break
    case "trex": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Trex</td>
          <td><input  id="`+"0-"+round+"-"+gameType+`" value=0 type=number min=0 max=200></td>
          <td><input  id="`+"1-"+round+"-"+gameType+`" value=0 type=number min=0 max=200></td>
          <td><input  id="`+"2-"+round+"-"+gameType+`" value=0 type=number min=0 max=200></td>
          <td><input  id="`+"3-"+round+"-"+gameType+`" value=0 type=number min=0 max=200></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "trex";
      break
    case "dinnar": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Dinnar</td>
          <td><input  id="`+"0-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"1-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"2-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
          <td><input  id="`+"3-"+round+"-"+gameType+`" value=0 type=number min=0 max=13></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "dinnar";
      break
  }
  }
}
function updateRecords(){
records = {
  "player-0":[],
  "player-1":[],
  "player-2":[],
  "player-3":[]
};
records["player-0"] = [];
records["player-0"] = [
document.getElementById("0-0-letoosh").value,
document.getElementById("0-0-king").value,
document.getElementById("0-0-trex").value,
document.getElementById("0-0-queens").value,
document.getElementById("0-0-dinnar").value
];

records["player-1"] = [
document.getElementById("1-0-letoosh").value,
document.getElementById("1-0-queens").value,
document.getElementById("1-0-dinnar").value,
document.getElementById("1-0-king").value,
document.getElementById("1-0-trex").value
];
records["player-2"] = [
document.getElementById("2-0-letoosh").value,
document.getElementById("2-0-dinnar").value,
document.getElementById("2-0-trex").value,
document.getElementById("2-0-queens").value,
document.getElementById("2-0-king").value
];
records["player-3"] = [
document.getElementById("3-0-letoosh").value,
document.getElementById("3-0-queens").value,
document.getElementById("3-0-dinnar").value,
document.getElementById("3-0-king").value,
document.getElementById("3-0-trex").value
];
}
