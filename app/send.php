<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require (__DIR__.'php_mailer/Exception.php');
require (__DIR__.'php_mailer/PHPMailer.php');
require (__DIR__.'php_mailer/SMTP.php');
$recipient_mail1 = "";

$mail = new PHPMailer;
try {
	$mail->isSMTP();
	$mail->Host = 'smtp.yandex.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'no-reply@gridstudio.ru'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
	$mail->Password = 'iCd9D6mRR59j4VuJ'; // Ваш пароль
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;
	$mail->setFrom('no-reply@gridstudio.ru'); // Ваш Email
	$mail->addAddress($recipient_mail1); // Email получателя
	$mail->addAddress('pdv@apimedia.ru'); // Email получателя
}


catch (Exception $e) {
	echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}



$message = "<h1>Спецпотолок</h1>";
if (isset($_POST['name'])) {
	$message .= "Имя: ".$_POST['name']."<br />";
}
if (isset($_POST['phone'])) {
	$message .= "Телефон: ".$_POST['phone']."<br />";
}
if (isset($_POST['email'])) {
	$message .= "Город: ".$_POST['city']."<br />";
}
if (isset($_POST['comment'])) {
	$message .= "Описание: ".$_POST['comment']."<br />";
}

if (isset($_POST['title'])) {
	$message .= "Заголовок: ".$_POST['title']."<br />";
}
if (isset($_POST['subtitle'])) {
	$message .= "Подзаголовок: ".$_POST['subtitle']."<br />";
}






// Письмо
$mail->isHTML(true);
$mail->Subject = 'Заявка с сайта Спецпотолок'; // Заголовок письма
$mail->Body = $message; // Текст письма
$mail->CharSet = "utf-8";
// Результат
if(!$mail->send()) {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	echo 'ok';
}
