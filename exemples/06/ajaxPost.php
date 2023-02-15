<?php 
header('Content-Type: text/xml');  
echo "<?xml version=\"1.0\"?>\n"; 
echo "<data>\n"; 
echo "<item nom='$_POST[nom]' prenom='$_POST[prenom]'/>\n"; 
echo "</data>\n"; 
?>
