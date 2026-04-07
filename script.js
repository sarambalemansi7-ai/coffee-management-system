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
    const name = document.getElementById("coffeeName").value;
    const price = document.getElementById("coffeePrice").value;

    if(name === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Menu Item Added (Backend will be connected later)");
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
