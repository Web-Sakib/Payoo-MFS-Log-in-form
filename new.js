// Step 1 : set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
  // Step 2 : prevent default brhavior (reloading browser)
  event.preventDefault(); //click করলে event fire হলে পেইজ reload করবে না

  // Step 3 : get phone number 
  const phoneNumber = document.getElementById('phn-number').value;






})