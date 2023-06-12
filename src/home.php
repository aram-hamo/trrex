<!DOCTYPE html>
<html lang=en>
<head>
    <meta name=viewport content="width=device-width, initial-scale=1">
</head>
<body>
  <title><?= self::viewData()['title'] ?></title>
<table id="game">

    <tbody><tr id="players">
      <td>Game</td>
      <td><input id="displayName0" value="Player 1"></td>
      <td><input id="displayName1" value="Player 2"></td>
      <td><input id="displayName2" value="Player 3"></td>
      <td><input id="displayName3" value="Player 4"></td>
    </tr></tbody>
        <tbody><tr id="queens">
          <td>Queens</td>
<td>
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
</td>
          <td><input onchange="updateRecords();updateUI();" id="1-0-queens" type="number" min="0" max="4"></td>
          <td><input onchange="updateRecords();updateUI();" id="2-0-queens" type="number" min="0" max="4"></td>
          <td><input onchange="updateRecords();updateUI();" id="3-0-queens" type="number" min="0" max="4"></td>
        </tr></tbody>
        <tbody><tr id="letoosh">
          <td>Letoosh</td>
          <td><input onchange="updateRecords();updateUI();" id="0-0-letoosh" type="number" min="0" max="13"></td>
          <td><input onchange="updateRecords();updateUI();" id="1-0-letoosh" type="number" min="0" max="13"></td>
          <td><input onchange="updateRecords();updateUI();" id="2-0-letoosh" type="number" min="0" max="13"></td>
          <td><input onchange="updateRecords();updateUI();" id="3-0-letoosh" type="number" min="0" max="13"></td>
        </tr></tbody></table>


 <label for="cars">Choose a car:</label>
<select  name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
</body>
</html>
