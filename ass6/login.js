window.onload = loginLoad;
function loginLoad()
{
    var login = document.getElementById("myLogin");
    login.onsubmit = checkLogin;
}
function checkLogin()
{
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const reusername = urlParams.get('username');
    console.log("username : " + username.value);

    const repassword = urlParams.get('passwordMain');
    console.log("password : " + password.value);

    if(username.value == reusername && password.value == repassword)
    {
        alert ("Login Complete :)");
		return true;
    }

    else if (username.value != reusername || password.value != repassword)
    {
        alert ("Sorry! Login again :("); 
		return false;       
    }
}



// window.onload = loginLoad;
// function loginLoad()
// {
//     var login = document.getElementById("myLogin");
//     login.onsubmit = checkLogin;
// }
// function checkLogin()
// {
//     var username = document.forms["myLogin"]["username"];
//     var password = document.forms["myLogin"]["password"];
//     const queryString = window.location.search;  //เคลียร์ทุกอย่างที่พิมพ์ตรงปุ่มLogin
//     console.log(queryString);
//     const urlParams = new URLSearchParams(queryString);


//     const reusername = urlParams.get('username');
//     console.log("username : " + username.value);   
//     //console.log(reusername);


//     const repassword = urlParams.get('password');
//     console.log("password : " + password.value); 

    
//     if(username.value == reusername && password.value == repassword)
//     {
//         alert ("Login Complete.");
//         return true;
//     }

//     else if (username.value != reusername || password.value != repassword)
//     {
//         alert ("Sorry! Login Again.");      
//         return false;  
//     }
// }

