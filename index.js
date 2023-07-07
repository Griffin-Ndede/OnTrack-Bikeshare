fetch("https://user-profiles-jgk3.onrender.com/users")
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
    <div id = "name">
        <h1>
            ${users.name}
        </h1>
    </div>
    <div id = "username">
        <h1>
            ${users.username}
        </h1>
    </div>
    <div id = "email">
        <h1>
            ${users.email}
        </h1>
    </div>
    <div id = "gender">
        <h1>
            ${users.gender}
        </h1>
    </div>
    <div id = "pp">
        <img src= "${users.gender}" alt = "Profile picture">
    </div>
    <div id = "vehicle">
        <h1>
            ${users.evehicle}
        </h1>
    </div>
    <div id = "rating">
        <h1>
            ${users.rating}
        </h1>
    </div>
    `
    displayDetails.innerHTML = display1.innerHTML
        })
    })
})

.catch(error => {
    console.log('Error:', error);
})