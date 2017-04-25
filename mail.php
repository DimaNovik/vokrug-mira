<?php

$recepient = "dimanovik1989@gmail.com";
$sitename = "Vokrug-Mira.od.ua";

$email = trim($_GET["email"]);
$text = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Email: $email \n Телефон: $phone \n Имя: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
