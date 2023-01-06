//DOM
/***************************************************************************************************/
function ValidateMail(mail) 
{
 if (mail.value.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function ShowMe()
{
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var msg = document.getElementById("msg");
  
  if(name.value=="" | email.value=="" | msg.value=="") {
    alert("Please fill in the missing fields");
  } else {
    if (ValidateMail(email) == true)  {
      //resetting the form
      name.value = "";
      email.value = "";
      msg.value = "";
    }
    else {
      return;
    };
  }
};
