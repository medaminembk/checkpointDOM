

let heartButton1 = document.getElementById("heart-button-item1");

// Add a click event listener to the heart button
heartButton1.addEventListener("click", function() {
  // Toggle the "liked" class on the heart button
  heartButton1.classList.toggle("liked");
});

let heartButton2 = document.getElementById("heart-button-item2");

// Add a click event listener to the heart button
heartButton2.addEventListener("click", function() {
  // Toggle the "liked" class on the heart button
  heartButton2.classList.toggle("liked");
});

let heartButton3 = document.getElementById("heart-button-item3");

// Add a click event listener to the heart button
heartButton3.addEventListener("click", function() {
  // Toggle the "liked" class on the heart button
  heartButton3.classList.toggle("liked");
});
















// /////////////////////////////////////////////
// Get the plus and minus buttons and the delete buttons
var plusBtns = document.querySelectorAll(".plus-btn");
var minusBtns = document.querySelectorAll(".minus-btn");
var deleteBtns = document.querySelectorAll(".delete-btn");

// Get the input fields where the quantity is displayed and the price spans
var quantityInputs = document.querySelectorAll(".quantity");
var priceSpans = document.querySelectorAll(".price");

// Get the span element where the total price is displayed
var totalPriceSpan = document.getElementById("total-price");

// Calculate the total price
var totalPrice = 0;
for (var i = 0; i < priceSpans.length; i++) {
  totalPrice += parseFloat(priceSpans[i].innerText.slice(1));
}

// Set the initial total price in the span element
totalPriceSpan.innerText = "$" + totalPrice.toFixed(2);

// Add event listeners to the plus buttons
for (var i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function() {
    // Get the parent div element
    var parent = this.parentNode;

    // Get the quantity input field and the price span
    var quantityInput = parent.querySelector(".quantity");
    var priceSpan = parent.querySelector(".price");

    console.log(priceSpan,"priceSpan", "quantityInput", quantityInput)

    var currentQuantity = parseInt(quantityInput.value);
    console.log(currentQuantity,"currentQuantity")
    var itemPrice = parseFloat(parent.querySelector(".price").textContent.replace('$','')) ;
    console.log(itemPrice,"itemPrice")

    quantityInput.value = currentQuantity + 1;
    var itemTotal = (currentQuantity + 1) * (itemPrice / currentQuantity);
    console.log(itemTotal,"itemTotal")
    priceSpan.innerText = "$" + itemTotal.toFixed(2);
    totalPrice = totalPrice + (itemPrice / currentQuantity) 
    totalPriceSpan.innerText = "$" + totalPrice.toFixed(2);
  });
}


for (var i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", function() {
      var parent = this.parentNode;
      // Get the quantity input field for this cart item
      var quantityInput = parent.querySelector(".quantity");
      var priceSpan = parent.querySelector(".price");
        console.log(priceSpan,"priceSpan", "quantityInput", quantityInput)
      // Get the current quantity value
      var currentQuantity = parseInt(quantityInput.value);
      console.log(currentQuantity,"currentQuantity")
      // Get the price of the item
      var itemPrice = parseFloat(parent.querySelector(".price").textContent.replace('$','')) ;
      console.log(itemPrice,"itemPrice")
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        var itemTotal = (currentQuantity - 1) * (itemPrice / currentQuantity);
        console.log(itemTotal,"itemTotal")
        priceSpan.innerText = "$" + itemTotal.toFixed(2);
        totalPrice = totalPrice - (itemPrice / currentQuantity)
        totalPriceSpan.innerText = "$" + totalPrice.toFixed(2);
      }
    });
  }



  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function() {
        console.log('hiiiiiiiii')
      // Get the parent element of the delete button, which is the cart item
      var parent = this.parentNode;
      var gparent = this.parentNode.parentNode;

      // Get the quantity input field for this cart item
      var quantityInput = parent.querySelector(".quantity");
      var priceSpan = parent.querySelector(".price");
        console.log(priceSpan,"priceSpan", "quantityInput", quantityInput)
      // Get the current quantity value
      var currentQuantity = parseInt(quantityInput.value);
      console.log(currentQuantity,"currentQuantity")
      var itemPrice = parseFloat(parent.querySelector(".price").textContent.replace('$','')) ;
      console.log(itemPrice,"itemPrice")

      totalPrice = totalPrice - (itemPrice)
      totalPriceSpan.innerText = "$" + totalPrice.toFixed(2);

      gparent.remove();
  
      // Calculate the new total price of all items in the cart
    
    });
  }

 

    let deleteButtons = document.querySelectorAll(".delete-button");

// Loop through each delete button and add a click event listener
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Get the parent li element of the clicked button
    let parentLi = button.parentNode;
    // var quantityInput = parent.querySelector(".quantity");
    // var priceSpan = parent.querySelector(".price");
    //   console.log(priceSpan,"priceSpan", "quantityInput", quantityInput)
    // // Get the current quantity value
    // var currentQuantity = parseInt(quantityInput.value);
    // console.log(currentQuantity,"currentQuantity")
    // var itemPrice = parseFloat(parent.querySelector(".price").textContent.replace('$','')) ;
    // console.log(itemPrice,"itemPrice")
    // Remove the parent li element from the cart list
    parentLi.remove();
  });
});


 

