<!doctype html>

<html>

<head>
  <title>Corona Challenge in TypeScript - object oriented approach</title>
  <link rel="stylesheet" href="style.css">
  <meta http-equiv="refresh" content="2">
</head>

<body>
  <?php

  include "app.php";
  //
  // let's do it...
  //
  for ($a = 0; $a < 15; $a++) {
    $coronaVirus = new CoronaVirus(getRndInteger(0, 1000), getRndInteger(0, 500), getRndInteger(50, 400), getRndInteger(6, 32));
    $id = $coronaVirus->create();
  }
  ?>

</body>

</html>