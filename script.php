<?php
    $x = $_POST['checkbox'];
    for($i=0; $i < count($x); $i++){
        echo "Selected " . $x[$i] . "<br/>";
    }
?>