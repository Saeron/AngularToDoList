<?php

    define('HOST','localhost');
    define('USER','root');
    define('PASS','locoderemate');
    define('DB','todo');

    function connect_db()
    {
        $connect = mysqli_connect(HOST,USER,PASS,DB);

        if(mysqli_connect_errno($connect)){
            echo mysqli_connect_error();
            exit(0);
        }
        mysqli_query($connect,"SET NAMES 'utf8'");
        return $connect;
    }

?>