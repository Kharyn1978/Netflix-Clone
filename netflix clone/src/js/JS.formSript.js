function Login(){

 var a = new Array();
 kharla = new Object();
 cherel = new Object();

 
  kharla={
    name:kharla@gmail.com,
    password:kharlavista,
   };

  Cherel={
    name:cherel@gmail.com,
    password:cherelvie,
   };

 a.push(kharla);
 a.push(cherel);
 
}

function LocalStorages() {
var username = document.getElementById(‘uname’).value;
var password = document.getElementById(‘psw’).value;
sessionStorage.setItem(“currentloggedin”,username);

localStorage.setItem('all_users',JSON.stringify(a));

!----Displaying the users on the webpage after logging-in-----!

a.JSON.parse((localStorage.getItem("all_users")));
a.push({name: username, password: password});
localStorage.setItem('name',JSON.stringify(a));

for(var i=0; i<a.length; i++){
   var li = document.createElement("li");
   li.innerHTML=a[i]['name'];
   document.getElementById("listuser").appendChild(li);
}

}

!------  Authentication user ------!

function Login()
{
   const hash = Object.fromEntries(
   a.map(e => [e.name, e.password]))

var username = document.getElementById('uname').value;
var password = document.getElementById('psw').value;

for (let key of hash) {
    
    if(key[0] === username && key[1]===atob(password))
     {
         alert('Login successful');
     }
 
 else{
         alert('Login fail');
     }
}

}