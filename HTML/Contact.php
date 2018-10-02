<?php
if($_POST["submit"]) {
    mail("justinriverng@gmail.com", "Contact Form Message", $_POST["firstname"], $_POST["lastname"], $_POST["subject"], $_POST["replyto"]"From: an@email.address");
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