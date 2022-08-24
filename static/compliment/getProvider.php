<?php
$key = $_GET["page"];
// $data = file_get_contents('http://likecounter/counterGet.php?page='.$key);
$data = file_get_contents('http://backend.i-project.by/compliment/counterGet.php?page='.$key);
echo $data;
return;
?>