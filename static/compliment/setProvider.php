<?php
$key = $_GET["page"];
// $data = file_get_contents('http://likecounter/counterSet.php?page='.$key);
$data = file_get_contents('http://backend.i-project.by/compliment/counterSet.php?page='.$key);
echo $data;
return;
?>