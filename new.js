const register = document.getElementById('create-account')
register.addEventListener('click', (e) => {

    e.preventDefault()

    const createAccount = document.getElementById('container1')
    const account = document.createElement('div')
    account.setAttribute('id', 'container');
account.innerHTML =`
<form id="createaccount">
            <h1 id="title">Create account</h1>
            <p>Let's get started</p>
            <div id="error1"></div>
            <div id="input1">
                <input type="text" id="username" placeholder="username">
                <div id="error2"></div>
            </div>
            <div id="input1">
                <input type="text" id="address" placeholder="email address">
                <div id="error2"></div>
            </div>
            <div>
                <input type="password" id="password1" placeholder="Create password">
                <div id="error3"></div>
            </div>
            <div>
                <input type="password" id="password2" placeholder="Confirm password">
                <div id="error3"></div>
            </div>
            <button id="account" type="submit">Create account</button>
            <p id="text">
                <a href="" id="signin"> Already have an account? Sign in</a>
            </p>
        </form>  
        <div id="bike">
            <img src="images/img_0100 (1).JPG" width="350px" height="auto" alt="ebike">
        </div> 
`
createAccount.innerHTML ='';
createAccount.appendChild(account)
})