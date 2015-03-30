<?php

function getAddresses()
{
  $addresses = array(
    array(
      "name" => "Borzì Francesco",
      "address" => "borzifrancesco@gmail.com"
    ),
    array(
      "name" => "Borzì Stefano",
      "address" => "stefanoborzi32@gmail.com"
    )
  );

  echo json_encode($addresses);
}

if (isset($_GET['action']))
{
  switch($_GET['action'])
  {
    case "addresses":
      getAddresses();
      break;
    case "mail":
      break;
  }
}

?>
