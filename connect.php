<?php
$hostname = "localhost";
$dbname = "jimngoor_PLF";
$Username = "jimngoor_admin";
$Password = "HayDay@614";

$conn = mysql_connect($hostname, $Username, $Password, $dbname)	;

if (!$conn) {
	die("Connection Failed:" .mysql_connect_error());

}
echo "<h1>Connected Successfully...!</h1>";
mysql_close($conn);
?>
