
// Fetch data for user 1 from the server
fetch("https://ontrack-server.onrender.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Display user 1 details as default
    const displayUsers = document.getElementById('display');
    const user1 = document.createElement('div');
    user1.innerHTML = `
      <div>
          <img src="${data.profilePicture}" alt="Profile picture" id="pp">
      </div>
      <div id="name">
          <h2>Name: ${data.name}</h2>
      </div>
      <div id="username">
          <h2>Username: ${data.username}</h2>
      </div>
      <div id="email">
          <h2>Email: ${data.email}</h2>
      </div>
      <div id="gender">
          <h2>Gender: ${data.gender}</h2>
      </div>
      <div id="vehicle">
          <h2>Preferred vehicle: ${data.eVehicle}</h2>
      </div>
    `;
    // Ensure that user 1 is always displayed by default
    displayUsers.innerHTML = user1.innerHTML;
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Fetch data from the server for all users
fetch("https://ontrack-server.onrender.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Display the users list
    const displayUsers = document.getElementById('usernames');
    data.forEach(user => {
      const displayNames = document.createElement('li');
      displayNames.textContent = user.name;

      displayUsers.appendChild(displayNames);

      // Display the details of the selected user
      displayNames.addEventListener('click', () => {
        const displayDetails = document.getElementById("display");
        const userDetails = document.createElement("div");
        userDetails.innerHTML = `
          <div>
              <img src="${user.profilePicture}" alt="Profile picture" id="pp">
          </div>
          <div id="name">
              <h2>Name: ${user.name}</h2>
          </div>
          <div id="username">
              <h2>Username: ${user.username}</h2>
          </div>
          <div id="email">
              <h2>Email: ${user.email}</h2>
          </div>
          <div id="gender">
              <h2>Gender: ${user.gender}</h2>
          </div>
          <div id="vehicle">
              <h2>Preferred vehicle: ${user.eVehicle}</h2>
          </div>
        `;
        displayDetails.innerHTML = userDetails.innerHTML;
      });
    });
  })
  .catch(error => {
    console.log('Error:', error);
  })

.catch(error => {
    console.log('Error:', error);
});

// POST request
    const form = document.getElementById('registration');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const profilepicture = document.getElementById('profilepicture');
    const evehicle = document.getElementById('evehicle');;
    const submitbtn = document.getElementById('submit')




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




