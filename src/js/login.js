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
    //let formData = document.getElementById("signInForm"); //for the form
    let thisEmail = document.getElementById("userEmail").value;
    let thisPassword = document.getElementById("userPassword").value;

    console.log(thisEmail)
    for (let i = 0; i < storedUsers.length; i++) {
        if (
            storedUsers[i].email !== thisEmail || 
            storedUsers[i].password !== thisPassword
        ) {
            //show error -- enter corrwectemail passowoerrd
            alert("please enter correct details");
            return;
        }

        if (
            storedUsers[i].email === thisEmail || 
            storedUsers[i].password === thisPassword
        ) {
            //we login with user

            let thisUser = localStorage.getItem(storedUsers[i].id);
            alert(JSON.parse(thisUser));
        }
    }
}

let user1 = {
    id: "user1",
    movies: [
        {
            Title: "Prince of Persia: The Sands of Time",
            watched: true,
            Available: true,
        },
        {
            Title: "Spider-Man: Homecoming",
            watched: true,
            Available: true,
        },
        {
            Title: "Indiana Jones and the Kingdom of the Crystal Skull",
            watched: true,
            Available: true,
        },
    ]
}



localStorage.setItem("user1",JSON.parse(user1));

let User2 = {
    id: "user2",
    movies: [
        {
            Title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            watched: true,
            Available: true,
        },
        {
            Title: "King Kong Lives",
            watched: true,
            Available: true,
        },
        {
            Title: "Jumanji: The Next Level",
            watched: true,
            Available: true,
        },

    ]
}

localStorage.setItem("user2",JSON.parse(user2));

let user3 = {
    id: "user3",
    movies: [
        {
            Title: "The Fast and the Furious: Tokyo Drift",
            watched: true,
            Available: true,
        },
        {
            Title: "Skyfall",
            watched: true,
            Available: true,
        },
        {
            Title: "Spectre",
            watched: true,
            Available: true,
        },

    ]
}

localStorage.setItem("user3",JSON.parse(user3));