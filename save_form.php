<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Contact-04-first-name'];
    $attendance = $_POST['attendance'];
    $song = $_POST['Contact-04-phone'];

    $to = "jegorbakunin@gmail.com";
    $subject = "Новая свадьба, ответ на приглашение.";
    $message = "Имя: $name\nБудете ли вы присутствовать?: $attendance\nЛюбимая песня: $song";
    $headers = "От: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
