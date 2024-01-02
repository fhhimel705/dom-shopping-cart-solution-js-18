function numberPlus(inpuId) {
  const inputField = document.getElementById(inpuId);
  const itemNo = parseFloat(inputField.value);
  const itemPlus = itemNo + 1;
  inputField.value = itemPlus;
  return itemPlus;
}

function numberMinus(inpuId) {
    const inputField = document.getElementById(inpuId);
    const itemNo = parseFloat(inputField.value);
    const itemMinus = itemNo - 1;
    inputField.value = itemMinus;
    return itemMinus;
}

function setInnerText(inputId, setElement) {
  const itemPrice = document.getElementById(inputId);
  itemPrice.innerText = setElement;
}

function getInnerText(inpuId){
    const input = document.getElementById(inpuId);
    const inputValue = parseFloat(input.innerText);
    return inputValue;
}
function setSubPrice() {

  const totalCasePrice = getInnerText('case-price');
  const totalPhonePrice = getInnerText('phone-price');

  const subPrice = document.getElementById("sub-total-price");
  const subTotalPrice = totalPhonePrice + totalCasePrice;
  subPrice.innerText = subTotalPrice;
}
function taxPrice(){
    const subPrice = document.getElementById('sub-total-price');
    const subPriceValue = parseFloat(subPrice.innerText);

    const taxPrice = subPriceValue * (30/100);
    const taxPriceString = taxPrice.toFixed(2);
    const taxPrice02 = parseFloat(taxPriceString);
    document.getElementById('tax').innerText = taxPrice02;
    
}
function totalPrice(){
    
    const subTotalPrice = getInnerText('sub-total-price');
    const taxPrice = getInnerText('tax');
    const totalPrice = subTotalPrice + taxPrice;
    setInnerText('total-price',totalPrice);
}

function removeSection(itemSectionId) {
  const itemSection = document.getElementById(itemSectionId);
  itemSection.style.display = "none";
}