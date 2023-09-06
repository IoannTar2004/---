<?php
    date_default_timezone_set('Europe/Moscow');
    $timeStart = microtime(true);
    $json = json_decode($_POST['data'], true);
    $arr_x = $json['inputX'];
    $y = $json['inputY'];
    $r = $json['inputR'];
    
    for($i = 0; $i < count($arr_x); $i++) {
        $x = $arr_x[$i];
        if ($x >= 0 && $y >= 0) {
            response(pow((int)$x, 2) + pow((float)$y, 2) <= pow((float)$r/2, 2));
        } else if ($x < 0 && $y >= 0) {
            response($y - $x <= $r);
        } else if ($x < 0 && $y <= 0) {
            response($x >= -$r && $y >= -$r);
        } else {
            response(false);
        }
    }

    function response($bool) {
        global $timeStart, $r, $x, $y;
        
        $timeEnd = microtime(true);
        $time = $timeEnd - $timeStart;
        $time = round($time * 1000, 4);
        $response = sprintf('R=%d: (%d;%s)', $r, $x, $y).'|%s|'.date('d-m-Y H:i:s').'|'.$time.'ms<br>';
        if ($bool) {
            $response = sprintf($response, 'Попал!');
        } else {
            $response = sprintf($response, 'Не попал!');
        }
        echo $response;
    }
?>