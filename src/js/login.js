const users = [
    {
        id: "user1",
        email: "a@b.com",
        password: "pass1"
    },
    {
        id: "user2",
        email: "u@m.com",
        password: "pass2"
    },
    {
        id: "user3",
        email: "em@d.com",
        password: "pass3"
    }
];


if (localStorage.getItem("allUsers") === null)
    localStorage.setItem("allUsers",JSON.stringify(users));

function login() {
    let storedUsers = JSON.parse(localStorage.getItem("allUsers"));
    let formData = getElementById("signInForm"); //for the form
    let thisEmail = formData.getElementById("userEmail").value;
    let thisPassword = formData.getElementById("userPassword").value;

    console.log(thisEmail)
    for (let i = 0; i < storedUsers.length; i++) {
        if (
            storedUsers[i].email !== thisEmail || 
            storedUsers[i].password !== thisPassword
        ) {
            //show error -- enter corrwectemail passowoerrd
            console.log("please enter correct details");
        }

        if (
            storedUsers[i].email === thisEmail || 
            storedUsers[i].password === thisPassword
        ) {
            //we login with user

            let thisUser = localStorage.getItem(storedUsers[i].id);
            console.log(JSON.parse(thisUser));
        }
    }
}

let singleUser = {
    id: "user1",
    movies: []
}

//localStorage.setItem("user1",JSON.parse(singleUser));