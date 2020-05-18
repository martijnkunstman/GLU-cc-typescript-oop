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
    $coronaVirus = new CoronaVirus(rand(0, 1000), rand(0, 500), rand(50, 400), rand(6, 32));
    $id = $coronaVirus->create();
  }
  ?>

</body>

</html>