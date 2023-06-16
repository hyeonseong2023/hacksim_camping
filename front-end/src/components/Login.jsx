import React from 'react'
import '../Login.css'
const Login = () => {
    return (
        <div id='login-container'>
            <body>
                <div class="main">
                    <h1 class="logo">Acidgram</h1>
                    <div class="container">
                        <input type="text" placeholder="ID" id="id" class="account" />
                        <input type="password" placeholder="Password" id="password" class="account" />
                        <button id="login" class="account">login</button>
                        <p id="alert" class="account"> </p>
                    </div>
                </div>
                <script src="script.js"></script>
            </body>
        </div>
    )
}

export default Login