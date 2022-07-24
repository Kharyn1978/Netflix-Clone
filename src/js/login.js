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
sessionStorage.clear();

if (localStorage.getItem("allUsers") === null)
    localStorage.setItem("allUsers",JSON.stringify(users));

function login(e) {
    //e.preventDefault();
    let storedUsers = JSON.parse(localStorage.getItem("allUsers"));
    //let formData = document.getElementById("signInForm"); //for the form
    let thisEmail = document.getElementById("userEmail").value;
    let thisPassword = document.getElementById("userPassword").value;
    let detailsCorrect = false;
    let matchedUser = {};

    console.log(thisEmail)
    for (let i = 0; i < storedUsers.length; i++) {
        if (
            storedUsers[i].email !== thisEmail || 
            storedUsers[i].password !== thisPassword
        ) {
            //show error -- enter corrwectemail passowoerrd
            detailsCorrect = false;
        }

        if (
            storedUsers[i].email === thisEmail || 
            storedUsers[i].password === thisPassword
        ) {
            detailsCorrect = true;
            matchedUser = storedUsers[i];
            break;
        }
        console.log(detailsCorrect)
    }

    if (!detailsCorrect) {
        alert("Please enter the correct details");
    }

    if (detailsCorrect) {
        let thisUser = JSON.parse(localStorage.getItem(matchedUser.id));

        let thisUserInfo = {};
        console.log(thisUser);

        allUsersMovieData.forEach(item => {
            if (item.id === matchedUser.id) {
                thisUserInfo = item;
            }
        })
        sessionStorage.setItem(matchedUser.id, JSON.stringify(thisUserInfo));
        window.location.replace("index.html");
        //sessionStorage.setItem("user1",user1 movies)
    }
}

function logout() {
    sessionStorage.clear();
    window.location.replace("form.html");
}

let allUsersMovieData = [
    {
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
    },
    {
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
    },
    {
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
];