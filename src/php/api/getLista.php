<?php
header("Content-Type: text/html;charset=utf-8");
require 'connectDB.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

$sql = "Select * from listas where ramdon='$datos->ramdon';";
$conn = connect_db();
$rs = mysqli_query($conn, $sql);
if ($rs->num_rows > 0) {
    $sql = "select * from lineas where ramdon='$datos->ramdon';";
    $rsl = mysqli_query($conn, $sql);
    $array = array();
    while ($fila = mysqli_fetch_assoc($rsl)) {
        if ($fila['done'] == "0") {
            $array[] = array_map(null, $fila);
        }
    }
    $res = json_encode($array, JSON_NUMERIC_CHECK);
    echo $res;
} else {
    $sql = "insert into listas (ramdon) values ('$datos->ramdon');";
    $rsi = mysqli_query($conn, $sql);
    echo '{
        "message": "devolviendo array vacio"
    }';
}

mysqli_close($conn);
