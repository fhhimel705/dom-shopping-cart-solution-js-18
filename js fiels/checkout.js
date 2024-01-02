document.getElementById("check-out").addEventListener("click", function () {
  // const totalPriceString = document.getElementById("total-price");
  // const totalPrice = totalPriceString.innerText;

  const checkOut = document.getElementById("check-out");
  if (checkOut.innerText === "Paid") {
      checkOut.innerText = "Paid";
    } else {
        alert("Congrats!!!");
        checkOut.innerText = "Paid";
  }
});
