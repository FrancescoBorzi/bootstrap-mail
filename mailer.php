<?php

function getAddresses()
{
  $addresses = array(
    "Borzì Francesco" => "borzifrancesco@gmail.com",
    "Borzì Stefano"   => "stefanoborzi32@gmail.com"
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