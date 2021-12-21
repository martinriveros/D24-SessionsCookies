function getLogin(){
  location.href = "http://localhost:8080/login";
}

function getRegistro(){
  location.href = "http://localhost:8080/registro"
}


// function registerSend(e) {
//   e.preventDefault()
//   console.log('esto hay dentro del evento....', e)
//   let payload = {  username: e.srcElement[0].value,
//                 email: e.srcElement[1].value,
//                 password: e.srcElement[2].value,
//                 moment: moment().format('LLL')}

//   fetch('/registro',{
//     method:'POST',
  
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'},
//     body:JSON.stringify(payload)}
//   );
// }



// function loginSend(e) {
//     e.preventDefault()
//     let payload = {  email: e.srcElement[0].value,
//                   password: e.srcElement[1].value
//                 }
  
//     fetch('/login',{
//       method:'POST',
    
//       headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'},
//       body:JSON.stringify(payload)}
//     );
// }

try {
  
    let irALoginButton = document.querySelector('#irALoginButton')
    irALoginButton.addEventListener('click', ()=>getLogin())

    // let loginForm = document.querySelector('#loginForm')
    // loginForm.addEventListener("submit", ()=>{
    //   console.log('boton loguearse presionado')
    //   loginSend});

} catch (error) {
    console.log(error)
  
}

try {
    let irARegistroButton = document.querySelector('#irARegistroButton')
    irARegistroButton.addEventListener('click', ()=>getRegistro())

    // let registerForm = document.querySelector('#registerForm')
    // registerForm.addEventListener("submit", ()=>{
    //   console.log('boton loguearse presionado')
    //   registerSend});


}catch(err){
    console.log(err)
}

