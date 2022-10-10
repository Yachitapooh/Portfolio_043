let passwordMain = document.getElementById("passwordMain")
let passwordRe = document.getElementById("passwordRe")


window.onload = pageLoad;
function pageLoad()
{
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;	
}

function validateForm() 
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let passwordMain = document.getElementById("passwordMain").value;
    let passwordRe = document.getElementById("passwordRe").value;

    if(passwordMain == passwordRe)
    {
        alert("Your registration is successful :)");
        return true;
    }

    else
    {
        var errormsg = document.getElementById("errormsg")
        errormsg.textContent = ("Password is not connect, please try again.");  //กรอกรหัสไม่ถูกก็จะขึ้น     
        return false;
    }
}


// let passwordMain = document.getElementById("passwordMain")
// let passwordRe= document.getElementById("passwordRe")

// window.onload = pageLoad;
// function pageLoad()
// {
//     var form = document.getElementById("myForm");
//     form.onsubmit = validateForm;
// }

// function validateForm()
// {
//     //ถ้ามีการตรวจสอบเเล้วว่ามีการ regis ไม่ถูกต้องให้ return false ด้วย
//     let passwordMain = document.getElementById("passwordMain").value;
//     let passwordRe = document.getElementById("passwordRe").value;

//     if(passwoedMain == passwordRe)
//     {
//         alert("Your registration is successful!");
//         return true;
//     }

//     else
//     {
//         var errormsg = document.getElementById("errormsg");
//         errormsg.textContent = ("Password is not connect, please try again.");
//         return false;
//     }

// }