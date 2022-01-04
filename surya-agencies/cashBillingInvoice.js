address = window.location.search;

// Returns a URLSearchParams object instance
parameterList = new URLSearchParams(address);

// Returning the respected value associated
// with the provided key
console.log(JSON.parse(parameterList.get("data")));

let customerBillingDetails = JSON.parse(parameterList.get("data"));
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
  "transportationMode"
).innerHTML = `<span class="font-weight-bold text-uppercase"
  >Transportation mode :${customerBillingDetails.transportationMode}
</span>`;

document.getElementById(
  "deliveryName"
).innerHTML = `<span class="font-weight-bold text-uppercase">Name : ${customerBillingDetails.deliveryName}</span>`;

var table = document.getElementById("detailTable");

customerBillingDetails.soldproducts.map((data, index) => {
  var row = table.insertRow(index + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);

  cell1.innerHTML = index + 1;
  cell2.innerHTML = data.productName;
  cell3.innerHTML = data.productCode;
  cell4.innerHTML = data.hnsCode;
  cell5.innerHTML = "Number";

  cell6.innerHTML = data.quantity;
  cell7.innerHTML = data.price;

  cell9.innerHTML = data.grandTotal;
  cell8.innerHTML = data.grandTotal;
});

for (let i = customerBillingDetails.soldproducts.length; i < 10; i++) {
  var row = table.insertRow(i + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);

  cell1.innerHTML = i + 1;
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";
  cell8.innerHTML = "";
  cell9.innerHTML = "";
}

document.getElementById(
  "grandTotal"
).innerHTML = customerBillingDetails.totalAmount.toFixed(2);

document.getElementById(
  "amountInWords"
).innerHTML = `<span class="font-weight-bold">Amount in words : ${customerBillingDetails.amountInWords}</span>`;
