<?php
if($_POST["firstname"]) {
    mail("justinriverng@gmail.com", "Contact Form Message", $_POST["firstname"], "From: an@email.address");
}
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>