fetch("http://localhost:3000/users")
.then(response => response.json())
.then(data => {
    console.log(data);

const displayUsers = document.getElementById('usernames')
data.forEach((users) => {
    const displayNames = document.createElement('li')
    displayNames.textContent = users.name

    displayUsers.appendChild(displayNames);
    })
})

.catch(error => {
    console.log('Error:', error);
})