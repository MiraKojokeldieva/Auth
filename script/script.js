const user = {
    
}

const loginInput = document.querySelector("#login")
const passInput = document.querySelector("#pass")
const loginBtn = document.querySelector(".auth__log-in")
const loginLabel = document.querySelector(".auth__login")
const passwordLabel = document.querySelector(".auth__password")


let login = ""
let password = ""

loginInput.addEventListener("input", (e) => {
  login = e.target.value
  loginInput.style.color = "2px solid #000"
})

passInput.addEventListener("input", (e) => {
  password = e.target.value
  passInput.style.color = "2px solid #000"
})

loginBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (password !== "" && user !== "") {
    if(password.length > 5) {
        user.password = password
        user.login = login
        
        console.log(user)
    } else {
        passInput.style.border = "1px solid red"
        passInput.placeholder = "Too short password"
        passInput.value = ""
    } 
  } else {
    if (password.length < 6 ) {
        passInput.style.border = "1px solid red"
        passInput.placeholder = "Too short password"
        passInput.value = ""
    }
    if(password === "") {
        passInput.style.border = "1px solid red"
        passInput.placeholder = "Please enter your password"
    }
    if (login === "") {
        loginInput.style.border = "1px solid red"
        loginInput.placeholder = "Please enter your login"
    }
  }
})































