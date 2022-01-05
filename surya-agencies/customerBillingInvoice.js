address = window.location.search;

// Returns a URLSearchParams object instance
parameterList = new URLSearchParams(address);

// Returning the respected value associated
// with the provided key
console.log(JSON.parse(parameterList.get("data")));

let customerBillingDetails = JSON.parse(parameterList.get("data"));
// amountInWords: "Rupees Five Thousand One Hundred Fifty Eight  Only"
// deliveryAddress: "CHENTHAREDDYPALLEM,NELLORE"
// deliveryGstin: ""
// deliveryName: "Narayana Educational Society"
// financialYear: "2021-2022"
// invoiceNumber: "SA-21-22-0044"
// modeOfPayment: "credit"
// shippingAdddress: "CHENTHAREDDYPALLEM,NELLORE"
// shippingGstin: ""
// shippingName: "Narayana Educational Society"
// soldproducts: (2) [{…}, {…}]
// supplyDate: "2021-07-22"
// supplyPlace: "NELLORE."
// totalAmount: "5158.00"
// transportationMode: "By Hand"
document.getElementById(
  "shippingGstin"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >gstin :${customerBillingDetails.shippingGstin}
</span>`;

document.getElementById(
  "deliveryGstin"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >gstin :${customerBillingDetails.deliveryGstin}
</span>`;

document.getElementById(
  "shippingAddress"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >address :${customerBillingDetails.shippingAdddress}
</span>`;

document.getElementById(
  "deliveryAddress"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >Address :${customerBillingDetails.deliveryAddress}
</span>`;

document.getElementById(
  "shippingName"
).innerHTML = `<span class="font-weight-bold text-uppercase" >Name : ${customerBillingDetails.shippingName}</span>`;

document.getElementById(
  "invoiceNumber"
).innerHTML = `<span class="font-weight-bold text-uppercase"
>Invoice Number : ${customerBillingDetails.invoiceNumber}
</span>`;

document.getElementById(
  "supplyDate"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >Date of supply : ${customerBillingDetails.supplyDate}
</span>`;

document.getElementById(
  "modeOfPayment"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >mode of payment : ${customerBillingDetails.modeOfPayment}
</span>`;

document.getElementById(
  "transportationMode"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >Transportation mode :${customerBillingDetails.transportationMode}
</span>`;

document.getElementById(
  "supplyPlace"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >place of supply :${customerBillingDetails.supplyPlace}
</span>`;

document.getElementById(
  "deliveryName"
).innerHTML = `<span class="font-weight-bold text-uppercase">Name : ${customerBillingDetails.deliveryName}</span>`;

var table = document.getElementById("detailTable");
let amountBeforeTax = 0;
var total_cgst = 0;
var total_sgst = 0;
var total_igst = 0;
var total_discount = 0;
customerBillingDetails.soldproducts.map((data, index) => {
  amountBeforeTax = (+amountBeforeTax + +data.subTotal).toFixed(2);
  console.log(amountBeforeTax);
  total_discount += data.discount;
  total_cgst = (data.subTotal - data.discount) * (data.cgst / 100) + total_cgst;
  total_sgst = (data.subTotal - data.discount) * (data.sgst / 100) + total_sgst;
  total_igst = (data.subTotal - data.discount) * (data.igst / 100) + total_igst;

  var row = table.insertRow(index + 2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  var cell13 = row.insertCell(12);
  var cell14 = row.insertCell(13);
  var cell15 = row.insertCell(14);

  cell1.innerHTML = index + 1;
  cell2.innerHTML = data.productName;
  cell3.innerHTML = data.productCode;
  cell4.innerHTML = data.hnsCode;
  cell5.innerHTML = data.quantity;
  cell6.innerHTML = data.price;
  cell7.innerHTML = data.subTotal;
  cell8.innerHTML = data.discount;
  cell9.innerHTML = data.cgst;
  cell10.innerHTML = (
    (data.subTotal - data.discount) *
    (data.cgst / 100)
  ).toFixed(2);
  cell11.innerHTML = data.sgst;
  cell12.innerHTML = (
    (data.subTotal - data.discount) *
    (data.sgst / 100)
  ).toFixed(2);
  cell13.innerHTML = data.igst;
  cell14.innerHTML = (
    (data.subTotal - data.discount) *
    (data.igst / 100)
  ).toFixed(2);
  cell15.innerHTML = data.grandTotal;
});

for (let i = customerBillingDetails.soldproducts.length; i < 10; i++) {
  var row = table.insertRow(i + 2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  var cell13 = row.insertCell(12);
  var cell14 = row.insertCell(13);
  var cell15 = row.insertCell(14);

  cell1.innerHTML = i + 1;
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";
  cell8.innerHTML = "";
  cell9.innerHTML = "";
  cell10.innerHTML = "";
  cell11.innerHTML = "";
  cell12.innerHTML = "";
  cell13.innerHTML = "";
  cell14.innerHTML = "";
  cell15.innerHTML = "";
}

document.getElementById("amountBeforeTax").innerHTML = amountBeforeTax;
document.getElementById("addcgst").innerHTML = total_cgst.toFixed(2);
document.getElementById("addsgst").innerHTML = total_sgst.toFixed(2);
document.getElementById("addigst").innerHTML = total_igst.toFixed(2);
document.getElementById("grandTotal").innerHTML =
  customerBillingDetails.totalAmount;

document.getElementById(
  "amountInWords"
).innerHTML = `<span class="font-weight-bold">Amount in words : ${customerBillingDetails.amountInWords}</span>`;
