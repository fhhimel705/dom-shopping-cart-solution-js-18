document.getElementById("phone-plus").addEventListener("click", function () {
  //   const phoneField = document.getElementById("phone-field");
  //   const phoneNo = parseFloat(phoneField.value);
  //   const phonePlus = phoneNo + 1;
  //   phoneField.value = phonePlus;
  const phonePlus = numberPlus("phone-field");
  const totalPhonePrice = parseFloat(phonePlus * 1219);

  //   const phonePrice = document.getElementById("phone-price");
  //   phonePrice.innerText = totalPhonePrice;
  setInnerText("phone-price", totalPhonePrice);

//   const CasePrice = document.getElementById('case-price');
//   const totalCasePrice = parseFloat(CasePrice.innerText);

//   const subPrice = document.getElementById('sub-total-price');
//   const subTotalPrice = totalPhonePrice + totalCasePrice;
//   subPrice.innerText = subTotalPrice;
setSubPrice();
taxPrice();
totalPrice();

});

document.getElementById("phone-minus").addEventListener("click", function () {
  //   const phoneField = document.getElementById("phone-field");
  //   const phoneNo = parseFloat(phoneField.value);
  //   const phoneMinus = phoneNo - 1;
  //   phoneField.value = phoneMinus;
  const phoneMinus = numberMinus("phone-field");
  const totalPhonePrice = phoneMinus * 1219;

//   const phonePrice = document.getElementById("phone-price");
//   phonePrice.innerText = totalPhonePrice;
setInnerText('phone-price', totalPhonePrice);
setSubPrice();
taxPrice();
totalPrice();

});
