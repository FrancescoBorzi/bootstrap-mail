<?php

function getAddresses()
{
  // Address list
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


function sendEmail($addresses, $subject, $text)
{
  // TODO
}


if (isset($_GET['action']))
{
  switch($_GET['action'])
  {
    case "getAddresses":
      getAddresses();
      break;
    case "sendEmails":
      sendEmail($_GET['addresses'], $_GET['subject'], $_GET['text']);
      break;
  }
}

?>
