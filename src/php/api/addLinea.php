<?php
require 'connectDB.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

$sql="insert into lineas (ramdon,msg) values ('$datos->rnd','$datos->msg');";

$conn = connect_db();
$rs = mysqli_query($conn,$sql);
if($rs){
    echo '{
        "message": "Line added."
    }';
}else{
    echo '{
        "message": "No posible add line."
    }';
}

mysqli_close($conn);