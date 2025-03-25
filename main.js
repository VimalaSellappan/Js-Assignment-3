let username=prompt("please enter your username");
let password=prompt("please enter your password");

console.log(isValidPassword(username,password));

isValidPassword(username,password)
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
