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
table{
  width:100%;
}
input{
  width:99%;
}
*{
  margin:unset;
  text-decoration:unset;
}
input{
  border: 0px;
  margin:0px;
  padding:0px;
}
</style>
<table id=game>
</table>
<table id=record>
</table>
<div id=newGameButtons>
  <button onclick="newGame('queens');">Queens</button>
  <button onclick="newGame('letoosh');">Letoosh</button>
  <button onclick="newGame('king');">King</button>
  <button onclick="newGame('trex');">Trex</button>
  <button onclick="newGame('dinnar');">Dinnar</button>
</div>
<script src=calc.js></script>
</body>
</html>
