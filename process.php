<?php
$conn = mysqli_connect("localhost", "root", "", "coffee_db");

$customer = $_POST['customer_name'];
$coffee = $_POST['coffee_name'];
$quantity = $_POST['quantity'];

if($coffee == "Espresso") $price = 100;
if($coffee == "Latte") $price = 150;
if($coffee == "Cappuccino") $price = 180;

$total = $price * $quantity;

$sql = "INSERT INTO orders (customer_name, coffee_name, quantity, price, total)
        VALUES ('$customer', '$coffee', '$quantity', '$price', '$total')";

mysqli_query($conn, $sql);

echo "<h2>Order Placed Successfully</h2>";
echo "Total Bill: ₹" . $total;
?>
