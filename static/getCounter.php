<?php
$key = $_GET["page"];

if(!$key) {
  echo 0;
  return;
}

$data = file_get_contents('http://backend.i-project.by/results.json');
$list = json_decode($data, true);
$result = 0;
if(isset($list[$key])) {
$result = $list[$key];
}
else {
$result =0;
}

$result = $list[$key];

echo $result;
return;
?>