<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');

$items = [
    'abc',
    'cba'
];

$request_body = file_get_contents('php://input');
$body = json_decode($request_body, true);

if (!empty($body['item'])) {
    $items[] = $body['item'];
}

echo json_encode($items);