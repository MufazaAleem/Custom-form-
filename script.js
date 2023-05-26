document.getElementById("customForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Hide the form and show the "thank you" message
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("thankYouContainer").style.display = "block";
});
