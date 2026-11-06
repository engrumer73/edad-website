<?php
// EDAD Advertising: Book an Audit form handler.
// Sends each submission to every address in $TO. Runs on Hostinger PHP hosting.
$TO   = ['info@edadadvertising.com', 'umer@edadadvertising.com'];
$FROM = 'info@edadadvertising.com'; // must be a mailbox on this domain for good delivery

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false,"error":"method"}'; exit; }

// Spam trap: real visitors never fill this hidden field.
if (!empty($_POST['website'])) { echo '{"ok":true}'; exit; }

function clean($v, $max) { return mb_substr(trim(str_replace(["\r", "\0"], '', (string)$v)), 0, $max); }
$name    = clean($_POST['name'] ?? '', 120);
$email   = clean($_POST['email'] ?? '', 200);
$service = clean($_POST['service'] ?? 'Not sure yet', 120);
$message = clean($_POST['message'] ?? '', 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400); echo '{"ok":false,"error":"invalid"}'; exit;
}

// Single-line header values only (blocks header injection).
$name1 = str_replace("\n", ' ', $name);
$serv1 = str_replace("\n", ' ', $service);

$subject = '=?UTF-8?B?' . base64_encode("Free audit request: $serv1 ($name1)") . '?=';
$body = "New Book an Audit request from edadadvertising.com\n\n"
      . "Name: $name1\nEmail: $email\nService: $serv1\n\nMessage:\n$message\n\n"
      . "Sent: " . gmdate('Y-m-d H:i') . " UTC\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n";
$headers = "From: EDAD Advertising Website <$FROM>\r\n"
         . "Reply-To: $email\r\n"
         . "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$ok = mail(implode(', ', $TO), $subject, $body, $headers, "-f$FROM");
if (!$ok) { http_response_code(500); echo '{"ok":false,"error":"send"}'; exit; }
echo '{"ok":true}';
