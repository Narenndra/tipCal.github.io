let bill_amount = document.getElementById("billAmount");
let per_tip = document.getElementById("percentageTip");

function calculateButton() {
    let calculatedTip = (parseInt(per_tip.value) / 100) * parseInt(bill_amount.value);
    let total_amount = parseInt(bill_amount.value) + calculatedTip;
    if (bill_amount.value === "" || per_tip.value === "") {
        document.getElementById("errorMessage").textContent = "Pleace Enter a Valid Input";
        document.getElementById("errorMessage").style.color = "red";
    } else {
        document.getElementById("tipAmount").value = calculatedTip;
        document.getElementById("totalAmount").value = parseInt(total_amount);
        document.getElementById("calculateButton").style.backgroundColor = "#5EE8AF";
        document.getElementById("errorMessage").textContent = "";
    }
}