/* Get the form and the submit button
const form = document.querySelector(".Contact .Message");
const submitButton = form.querySelector(".submit");

// Add an event listener to the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const nameInput = form.querySelector(".message-name");
  const emailInput = form.querySelector(".message-email");
  const messageInput = form.querySelector(".message-input");

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  // You can add additional logic here, such as sending the form data to a server
  console.log("Form submitted and fields cleared");
});*/

//--------------------------------------------------------------//

//--------------------------------------------------------------//
const popTemple = document.getElementById("popup-temple");
const popBeach = document.getElementById("popup-beach");
const popUSA = document.getElementById("popup-USA");
const temp = document.querySelector(".search");
const searchButton = temp.querySelector(".search-button");
const clearButton = temp.querySelector(".search-clear");

searchButton.addEventListener("click", (event) => {
  const input = temp.querySelector(".search-input").value.toLowerCase();

  if (input === "temple") {
    console.log(input);
    openPopup();
  } else if (input === "beach") {
    console.log("Beach search");
    openPopupB();
  } else if (input === "usa") {
    console.log("USA");
    openPopupUSA();
  }
});

clearButton.addEventListener("click", (event) => {
  const input = temp.querySelector(".search-input");
  input.value = "";
  closePopup();
});

function openPopup() {
  popTemple.classList.add("open-popup");
}

function openPopupB() {
  popBeach.classList.add("open-popup");
}

function openPopupUSA() {
  popUSA.classList.add("open-popup");
}

function closePopup() {
  popTemple.classList.remove("open-popup");
  popBeach.classList.remove("open-popup");
  popUSA.classList.remove("open-popup");
}
