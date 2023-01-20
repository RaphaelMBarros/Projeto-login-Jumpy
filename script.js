    
let button = document.querySelector("button");    
        
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let tel = document.querySelector("#tel")
let cpf = document.querySelector("#cpf")
let senha = document.querySelector("#senha")

let validaNome = document.querySelector("#validaNome")
let validaEmail = document.querySelector("#validaEmail")
let validaTel = document.querySelector("#validaTel")
let validaCpf = document.querySelector("#validaCpf")
let validaSenha = document.querySelector("#validaSenha")
let validaButton = document.querySelector("#validaButton");
    
 

function validaDados(event) {
    event.preventDefault()
    let dataArray = [nome.value,email.value,tel.value,cpf.value,senha.value]
    let msgCampoObrigatorio = [validaNome,validaEmail,validaTel,validaCpf,validaSenha]

    for(i = 0; i < dataArray.length; i++) {
        if (dataArray[i] === "") {
            msgCampoObrigatorio[i].style.visibility = "visible";
            
        } else {
            msgCampoObrigatorio[i].style.visibility = "hidden";
            
        }

        if (nome.value !== "" && email.value !== "" && tel.value !== "" && cpf.value !== "" && senha.value !== ""){
            validaButton.style.visibility = "visible";
            validaButton.innerHTML = "Sucesso!";
            validaButton.setAttribute("class", "sucesso")
        } else {    
            validaButton.style.visibility = "visible";
            validaButton.classList.remove("sucesso");
            validaButton.innerHTML = "*Campo Obrigatório*";
        } 

           
    }  
}
    button.addEventListener("click", validaDados)