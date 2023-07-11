

// // post request for when a user is added
// const form = document.getElementById("registration-form")
// form.addEventListener('click', (e) =>{
//     // prevent auto submission
//     e.preventDefault()

//     const name = document.getElementById('name').value
//     const username = document.getElementById("username").value
//     const email = document.getElementById('email').value
//     const gender = document.getElementById('gender').value
//     const profilepicture = document.getElementById('pp').value
//     const evehicle = document.getElementById('vehicle').value

//     // fetch post request

//     fetch('https://user-profiles-jgk3.onrender.com/users',{
//         method: 'POST',
//         body: JSON.stringify({
//             name: name,
//             username: username,
//             email: email,
//             gender: gender,
//             profilepicture: profilepicture,
//             evehicle: evehicle
//         }),
//         headers:{
//             "Content-Type" :"application/JSON"
//         } 
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// })

// const form = document.getElementById("registration-form");
// form.addEventListener('submit', (e) => {
//     // prevent form submission
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const gender = document.getElementById('gender').value;
//     const profilepicture = document.getElementById('pp').value;
//     const evehicle = document.getElementById('vehicle').value;

//     // fetch post request
//     fetch('https://user-profiles-jgk3.onrender.com', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             username: username,
//             email: email,
//             gender: gender,
//             profilepicture: profilepicture,
//             evehicle: evehicle
//         }),
       
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });
// });

document.getElementById('registration').addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let userObj = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        gender: e.target.gender.value,
        profilepicture: e.target.profilepicture.value,
        evehicle: e.target.evehicle.value,
    };
    newUserName(userObj)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function newUserName(userObj) {
    return fetch('https://ontrack-server.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }
            return response.json();
        });
}
