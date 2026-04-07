public/js/script.js
/* =================================
   Coffee Shop Frontend Script
   Beginner Friendly Code
================================= */

// LOGIN FUNCTION
function loginAdmin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple frontend validation
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

// ADD MENU ITEM (Frontend only)
function addMenuItem() {
    const name = document.getElementById("coffeeName").value = "";
    const price =document.getElementById("coffeePrice").value = "";

    if(name && price){
        alert("Item Added Successfully ✅");
    } else {
        alert("Please fill all fields ❌");
    }
}
function addMenuItem() {
    const name = document.getElementById("coffeeName").value;
    const price = document.getElementById("coffeePrice").value;

    if(name && price){
        const table = document.getElementById("menuTable");
        const row = table.insertRow();

        row.insertCell(0).innerHTML = name;
        row.insertCell(1).innerHTML = "₹ " + price;

        document.getElementById("coffeeName").value = "";
        document.getElementById("coffeePrice").value = "";
    } else {
        alert("Please fill all fields");
    }
}
// CALCULATE ORDER TOTAL
function calculateTotal() {
    const price = document.getElementById("itemPrice").value;
    const quantity = document.getElementById("quantity").value;

    if(quantity === "") {
        alert("Enter quantity");
        return;
    }

    const total = price * quantity;

    document.getElementById("totalAmount").innerText =
        "Total Amount: ₹ " + total;
}
