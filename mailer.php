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
  require 'PHPMailer/PHPMailerAutoload.php';

  $mail = new PHPMailer;

  foreach ($addresses as $dest)
    $mail->addAddress($dest);

  $mail->isHTML(true);
  $mail->isSMTP();

  $mail->From     = "borzifrancesco2@gmail.com";
  $mail->FromName = "Sender Name";
  $mail->Subject  = utf8_decode($subject);
  $mail->Body     = $text;

  if (!$mail->send()) {
    $output = array(
      "status" => "error",
      "message" => $mail->ErrorInfo
    );
  } else {
    $output = array(
      "status" => "ok"
    );
  }

  echo json_encode($output);
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
