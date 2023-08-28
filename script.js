function saveInfo(event) {
    event.preventDefault();

    let obj = {
        title : document.getElementById("title").value,
        firstName : document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        email : document.getElementById("email").value,
        userName : document.getElementById("userName").value,
        password : document.getElementById("password").value,
        confirmPassword : document.getElementById("confirmPassword").value,
        acceptTerms : document.getElementById("acceptTerms").checked,
    }


    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register",
    {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(obj),
    })
    .then((value)=>{
        return value.json();
    }).then((value)=>{
        return console.log(value);
    })
}

function GetInfo(event) {
    event.preventDefault();

    let dataObj = {
        email : document.getElementById("email1").value,
        password : document.getElementById("password1").value,
    }

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",
    {
        method:"post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj)
    })
    .then((value)=>{
        return value.json();
    }).then((value)=>{
        console.log(value);
    })
}