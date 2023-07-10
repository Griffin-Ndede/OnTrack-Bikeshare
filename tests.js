

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