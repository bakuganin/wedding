<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = $_POST['name'];
    $attendance = $_POST['attendance'];
    $song = $_POST['song'];

    // Настройка отправки почты
    $to = "jegorbakunin@gmail.com";
    $subject = "New Wedding RSVP";
    $message = "Name: $name\nAttendance: $attendance\nFavorite Song: $song";
    $headers = "From: roybak7@gmail.com";

    // Отправка почты
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo "Method " . $_SERVER['REQUEST_METHOD'] . " Not Allowed";
}
?>
