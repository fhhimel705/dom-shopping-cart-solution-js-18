document.getElementById("case-plus").addEventListener("click", function () {
  const casePlus = numberPlus("case-field");
  const totalCasePrice = casePlus * 59;

  setInnerText('case-price', totalCasePrice);
  setSubPrice();
  taxPrice();
  totalPrice();
});
document.getElementById('case-minus').addEventListener('click',function(){
    const caseMinus = numberMinus('case-field');
    const totalCasePrice = caseMinus * 59;

    setInnerText('case-price', totalCasePrice);
    setSubPrice();
    taxPrice();
    totalPrice();
})

document.getElementById('remove-case').addEventListener('click', function(){
  removeSection('case-section');
})
