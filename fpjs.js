// Get the container element
const billContainer = document.getElementById('bill');

// Function to add "BILL" to the container
function addBill() {
    billContainer.append("BILL ");
}

// Call addBill every 500 milliseconds
setInterval(addBill, 500);
