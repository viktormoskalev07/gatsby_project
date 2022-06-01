<?php
$key = $_GET["page"];
$data = file_get_contents('http://backend.i-project.by/pageCounter.php?page='.$key);
echo $data;
return;
?>