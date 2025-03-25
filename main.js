function isValidPassword(username,password)
{
    if(password.length<8)
    {
        return false;
    }
    if(password.includes(" "))
    {
        return false;
    }
    if(password.includes(username))
    {
        return false;
    }
    return true;
 }
 
let username=prompt("please enter your username");
let password=prompt("please enter your password");

    if (isValidPassword(username, password))
         {
        alert("Your password is valid!");
    } else {
        alert("Your password is invalid!");
    }



