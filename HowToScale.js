function handleFormSubmit(event){

  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  
  const user = {
    username,
    email,
    phone
  };
  console.log(`${user.username}-${user.email}-${user.phone}`)
  
}  
