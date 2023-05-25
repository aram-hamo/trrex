round = 0;
var gamesCounter = 0;
playedGames = [];
// {{{ elementCheck
function elementCheck(elmId) {
  var elem = document.getElementById(elmId);
  if(typeof elem == 'undefined' || elem == null) {
    return 0;
  }else{
    return elem.value;
  }
}
// }}}
// {{{ updateUI
function updateUI(){
  player0record = 0;
  for (var element in records["player-0"]) {
    if(document.getElementById(element) !== null) {
      document.getElementById(element).value = records["player-0"][element];

        if( /dinnar/.test(element)){
          player0record = player0record + Number(records["player-0"][element])*-10;
        }else if( /king/.test(element)){
          player0record = player0record + Number(records["player-0"][element])*-75;
        }else if( /letoosh/.test(element)){
          player0record = player0record + Number(records["player-0"][element])*-15;
        }else if( /queens/.test(element)){
          player0record = player0record + Number(records["player-0"][element])*-25;
        }else{
          player0record = player0record + Number(records["player-0"][element]);
        }
    }
  }
  document.getElementById("player0record").value = player0record;

  player1record = 0;
  for (var element in records["player-1"]) {
    if(document.getElementById(element) !== null) {
      document.getElementById(element).value = records["player-1"][element];
        if( /dinnar/.test(element)){
          player1record = player1record + Number(records["player-1"][element])*-10;
        }else if( /king/.test(element)){
          player1record = player1record + Number(records["player-1"][element])*-75;
        }else if( /letoosh/.test(element)){
          player1record = player1record + Number(records["player-1"][element])*-15;
        }else if( /queens/.test(element)){
          player1record = player1record + Number(records["player-1"][element])*-25;
        }else{
          player1record = player1record + Number(records["player-1"][element]);
        }
    }
  }
  document.getElementById("player1record").value = player1record;

  player2record = 0;
  for (var element in records["player-2"]) {
    if(document.getElementById(element) !== null) {
      document.getElementById(element).value = records["player-2"][element];
        if( /dinnar/.test(element)){
          player2record = player2record + Number(records["player-2"][element])*-10;
        }else if( /king/.test(element)){
          player2record = player2record + Number(records["player-2"][element])*-75;
        }else if( /letoosh/.test(element)){
          player2record = player2record + Number(records["player-2"][element])*-15;
        }else if( /queens/.test(element)){
          player2record = player2record + Number(records["player-2"][element])*-25;
        }else{
          player2record = player2record + Number(records["player-2"][element]);
        }
    }
  }
  document.getElementById("player2record").value = player2record;

  player3record = 0;
  for (var element in records["player-3"]) {
    if(document.getElementById(element) !== null) {
      document.getElementById(element).value = records["player-3"][element];
        if( /dinnar/.test(element)){
          player3record = player3record + Number(records["player-3"][element])*-10;
        }else if( /king/.test(element)){
          player3record = player3record + Number(records["player-3"][element])*-75;
        }else if( /letoosh/.test(element)){
          player3record = player3record + Number(records["player-3"][element])*-15;
        }else if( /queens/.test(element)){
          player3record = player3record + Number(records["player-3"][element])*-25;
        }else{
          player3record = player3record + Number(records["player-3"][element]);
        }
    }
  }
  document.getElementById("player3record").value = player3record;

  document.getElementById("displayName0").value = displayNames["0"];
  document.getElementById("displayName1").value = displayNames["1"];
  document.getElementById("displayName2").value = displayNames["2"];
  document.getElementById("displayName3").value = displayNames["3"];
}
// }}}
function updateRecords(){
  displayNames = {
    "0":"Player 0",
    "1":"Player 1",
    "2":"Player 2",
    "3":"Player 3"
  };
  records = {
    "player-0":{},
    "player-1":{},
    "player-2":{},
    "player-3":{}
  };
  records["player-0"] = {};
  records["player-0"] = {
    "0-0-letoosh":elementCheck("0-0-letoosh"),
    "0-0-king":   elementCheck("0-0-king"),
    "0-0-trex":   elementCheck("0-0-trex"),
    "0-0-queens": elementCheck("0-0-queens"),
    "0-0-dinnar": elementCheck("0-0-dinnar"),
    "0-1-letoosh":elementCheck("0-1-letoosh"),
    "0-1-king":   elementCheck("0-1-king"),
    "0-1-trex":   elementCheck("0-1-trex"),
    "0-1-queens": elementCheck("0-1-queens"),
    "0-1-dinnar": elementCheck("0-1-dinnar"),
    "0-2-letoosh":elementCheck("0-2-letoosh"),
    "0-2-king":   elementCheck("0-2-king"),
    "0-2-trex":   elementCheck("0-2-trex"),
    "0-2-queens": elementCheck("0-2-queens"),
    "0-2-dinnar": elementCheck("0-2-dinnar"),
    "0-3-letoosh":elementCheck("0-3-letoosh"),
    "0-3-king":   elementCheck("0-3-king"),
    "0-3-trex":   elementCheck("0-3-trex"),
    "0-3-queens": elementCheck("0-3-queens"),
    "0-3-dinnar": elementCheck("0-3-dinnar")
  };
  
  records["player-1"] = {
    "1-0-letoosh":elementCheck("1-0-letoosh"),
    "1-0-king":   elementCheck("1-0-king"),
    "1-0-trex":   elementCheck("1-0-trex"),
    "1-0-queens": elementCheck("1-0-queens"),
    "1-0-dinnar": elementCheck("1-0-dinnar"),
    "1-1-letoosh":elementCheck("1-1-letoosh"),
    "1-1-king":   elementCheck("1-1-king"),
    "1-1-trex":   elementCheck("1-1-trex"),
    "1-1-queens": elementCheck("1-1-queens"),
    "1-1-dinnar": elementCheck("1-1-dinnar"),
    "1-2-letoosh":elementCheck("1-2-letoosh"),
    "1-2-king":   elementCheck("1-2-king"),
    "1-2-trex":   elementCheck("1-2-trex"),
    "1-2-queens": elementCheck("1-2-queens"),
    "1-2-dinnar": elementCheck("1-2-dinnar"),
    "1-3-letoosh":elementCheck("1-3-letoosh"),
    "1-3-king":   elementCheck("1-3-king"),
    "1-3-trex":   elementCheck("1-3-trex"),
    "1-3-queens": elementCheck("1-3-queens"),
    "1-3-dinnar": elementCheck("1-3-dinnar")
  };
  records["player-2"] = {
    "2-0-letoosh":elementCheck("2-0-letoosh"),
    "2-0-king":   elementCheck("2-0-king"),
    "2-0-trex":   elementCheck("2-0-trex"),
    "2-0-queens": elementCheck("2-0-queens"),
    "2-0-dinnar": elementCheck("2-0-dinnar"),
    "2-1-letoosh":elementCheck("2-1-letoosh"),
    "2-1-king":   elementCheck("2-1-king"),
    "2-1-trex":   elementCheck("2-1-trex"),
    "2-1-queens": elementCheck("2-1-queens"),
    "2-1-dinnar": elementCheck("2-1-dinnar"),
    "2-2-letoosh":elementCheck("2-2-letoosh"),
    "2-2-king":   elementCheck("2-2-king"),
    "2-2-trex":   elementCheck("2-2-trex"),
    "2-2-queens": elementCheck("2-2-queens"),
    "2-2-dinnar": elementCheck("2-2-dinnar"),
    "2-3-letoosh":elementCheck("2-3-letoosh"),
    "2-3-king":   elementCheck("2-3-king"),
    "2-3-trex":   elementCheck("2-3-trex"),
    "2-3-queens": elementCheck("2-3-queens"),
    "2-3-dinnar": elementCheck("2-3-dinnar")
  };
  records["player-3"] = {
    "3-0-letoosh":elementCheck("3-0-letoosh"),
    "3-0-king":   elementCheck("3-0-king"),
    "3-0-trex":   elementCheck("3-0-trex"),
    "3-0-queens": elementCheck("3-0-queens"),
    "3-0-dinnar": elementCheck("3-0-dinnar"),
    "3-1-letoosh":elementCheck("3-1-letoosh"),
    "3-1-king":   elementCheck("3-1-king"),
    "3-1-trex":   elementCheck("3-1-trex"),
    "3-1-queens": elementCheck("3-1-queens"),
    "3-1-dinnar": elementCheck("3-1-dinnar"),
    "3-2-letoosh":elementCheck("3-2-letoosh"),
    "3-2-king":   elementCheck("3-2-king"),
    "3-2-trex":   elementCheck("3-2-trex"),
    "3-2-queens": elementCheck("3-2-queens"),
    "3-2-dinnar": elementCheck("3-2-dinnar"),
    "3-3-letoosh":elementCheck("3-3-letoosh"),
    "3-3-king":   elementCheck("3-3-king"),
    "3-3-trex":   elementCheck("3-3-trex"),
    "3-3-queens": elementCheck("3-3-queens"),
    "3-3-dinnar": elementCheck("3-3-dinnar")
  };
}
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
  updateRecords();
  if(round == 3 && playedGames.length >= 5){
    document.getElementById("newGameButtons").style.display = "none";
  }
  var players = document.getElementById("players");
  if(players == null){
  document.getElementById("game").innerHTML +=`
    <tr id=players>
      <td>Game</td>
      <td><input id="displayName0" value="Player 1"></td>
      <td><input id="displayName1" value="Player 2"></td>
      <td><input id="displayName2" value="Player 3"></td>
      <td><input id="displayName3" value="Player 4"></td>
    </tr>`;
  document.getElementById("record").innerHTML +=`
    <tr id=records>
      <td>Records</td>
      <td><input id="player0record" value="" readonly></td>
      <td><input id="player1record" value="" readonly></td>
      <td><input id="player2record" value="" readonly></td>
      <td><input id="player3record" value="" readonly></td>
    </tr>`;
  }
  if(notPlayed(gameType)){
  switch(gameType){
    case "queens":
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Queens</td>
          <td><input onclick="updateRecords();updateUI();" id="`+"0-"+round+"-"+gameType+`" type=number min=0 max=4></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"1-"+round+"-"+gameType+`" type=number min=0 max=4></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"2-"+round+"-"+gameType+`" type=number min=0 max=4></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"3-"+round+"-"+gameType+`" type=number min=0 max=4></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "queens";
      break;
    case "letoosh": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Letoosh</td>
          <td><input onclick="updateRecords();updateUI();" id="`+"0-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"1-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"2-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"3-"+round+"-"+gameType+`" type=number min=0 max=13></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "letoosh";
      break
    case "king": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>king</td>
          <td><input onclick="updateRecords();updateUI();" id="`+"0-"+round+"-"+gameType+`" type=number min=0 max=1></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"1-"+round+"-"+gameType+`" type=number min=0 max=1></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"2-"+round+"-"+gameType+`" type=number min=0 max=1></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"3-"+round+"-"+gameType+`" type=number min=0 max=1></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "king";
      break
    case "trex": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Trex</td>
          <td><input onclick="updateRecords();updateUI();" id="`+"0-"+round+"-"+gameType+`" step="50" type=number min=0 max=200></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"1-"+round+"-"+gameType+`" step="50" type=number min=0 max=200></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"2-"+round+"-"+gameType+`" step="50" type=number min=0 max=200></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"3-"+round+"-"+gameType+`" step="50" type=number min=0 max=200></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "trex";
      break
    case "dinnar": 
      document.getElementById("game").innerHTML +=`
        <tr id=`+gameType+` >
          <td>Dinnar</td>
          <td><input onclick="updateRecords();updateUI();" id="`+"0-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"1-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"2-"+round+"-"+gameType+`" type=number min=0 max=13></td>
          <td><input onclick="updateRecords();updateUI();" id="`+"3-"+round+"-"+gameType+`" type=number min=0 max=13></td>
        </tr>`;
      gamesCounter++;
      playedGames[gamesCounter] = "dinnar";
      break
  }
  }
  updateUI();
}
/// }}}
