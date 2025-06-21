<?php
$insert=false;
$host = "localhost";
$username = "root";
$password = "";
$dbname = "web_feedback";


$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) { 
        $insert=true;
        // echo "Feedback submitted successfully!";
    } 
    else {
        echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
    }
}

$conn->close();
?> 




<!-- INSERT INTO `feedback` (`id`, `name`, `email`, `message`) VALUES ('1', 'shreya', 'shreya@gmail.com', 'this page is very good'); -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="feedback.css">
</head>
<body>
    <div class="feedback-container">
        <h1>We Value Your Feedback</h1>
        <?php
        if($insert==true){
            echo "<p class='Submit Feedback'>Thanks for submitting your feedback.</p>";
        }
        ?>
        <form action="feedback.php" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="message">Your Feedback</label>
                <textarea id="message" name="message" rows="5" placeholder="Share your thoughts with us..." required></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit Feedback</button>
        </form>
    </div>
</body>
</html>
