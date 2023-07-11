
fetch("https://ontrack-server.onrender.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);

    // display the users list
const displayUsers = document.getElementById('usernames')
data.forEach((users) => {
    const displayNames = document.createElement('li')
    displayNames.textContent = users.name

    displayUsers.appendChild(displayNames);

    // displaying the details of the users
    displayNames.addEventListener('click', () => {
    const displayDetails = document.getElementById("usernames")
    const display1 = document.createElement("div")
    display1.innerHTML =`
    <div id = "pp">
        <img src= "${users.gender}" alt = "Profile picture">
    </div>
    <div id = "name">
        <h2>
           Name: ${users.name}
        </h2>
    </div>
    <div id = "username">
        <h2>
            Username: ${users.username}
        </h2>
    </div>
    <div id = "email">
        <h2>
            Email: ${users.email}
        </h2>
    </div>
    <div id = "gender">
        <h2>
            Gender: ${users.gender}
        </h2>
    </div>
    <div id = "vehicle">
        <h2>
            Preferred vehicle: ${users.eVehicle}
        </h2>
    </div>
    `
    displayDetails.innerHTML = display1.innerHTML
        })
    })
})

.catch(error => {
    console.log('Error:', error);
});
    const form = document.getElementById('registration');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const profilepicture = document.getElementById('profilepicture');
    const evehicle = document.getElementById('evehicle');;
    const submitbtn = document.getElementById('submit')


// POST request

// form.addEventListener('submit', formSubmit)
document.getElementById('registration').addEventListener('submit', formSubmit);


function formSubmit(e){
    e.preventDefault()
    let userObj = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        gender: e.target.gender.value,
        profilepicture: e.target.profilepicture.value,
        evehicle: e.target.evehicle.value,
    }
    newUserName(userObj);
    console.log(userObj);
}
function newUserName(userObj){

    fetch('https://studentprofile.onrender.com/student', {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(userObj => console.log(userObj))
}




