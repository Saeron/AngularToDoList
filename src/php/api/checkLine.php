<?php
require 'connectDB.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

$sql= "update lineas set done='$datos->marc' where id='$datos->id';";
$conn = connect_db();
$rs= mysqli_query($conn,$sql);

if($rs){
    echo '{
        "message": "Updated row."
    }';
}else {
    echo '{
        "message": "Not posible update row."
    }';
}