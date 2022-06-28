var actived = false 
var activedAnim = false 

/* JAVASCRIPT - EMAILS */ 
const emails = [
    ["iesb@gmail.com","12345"],
    ["ads@gmail.com","ads"]
]

/* JAVASCRIPT - VISUALIZAR OU NÃO A SENHA */    
function PasswordOn() {
    var passwordType = document.getElementById("passwordInput")
    if (passwordType["type"] == "password"){
        document.getElementById("passwordInput").type = "text"
        document.getElementById("eye").src = "./assets/img/login/eye.png"
    }else if (passwordType["type"] == "text"){
        document.getElementById("passwordInput").type = "password"
        document.getElementById("eye").src = "./assets/img/login/eye-off.png"
    }
};

/* JAVASCRIPT - SISTEMA DE LOGIN */

function Login() {
    var email = document.querySelector("#email")
    var password = document.querySelector("#passwordInput")

    if (!email["value"] == '' && !actived) {
        if (!password["value"] == '') {
            for (var i = 0; i < emails.length; i++) {
                if (emails[i][0] == email["value"]) {
                    if (password["value"] == emails[i][1]) {
                        ActiveAnim("sucesso")                
                        actived = true           
                    } else {
                        ActiveAnim("negado")
                        break
                    }
                }
             }
        } else {
            ActiveAnim("negado")
        }
      
    } else {
        ActiveAnim("negado")
    }
};

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO ALERTA */

function ActiveAnim(Anim) {
    if (!activedAnim) {
        if (Anim === "negado" && !actived) {
            activedAnim = true 
            var classList = document.getElementById("Anim"); 
            var displayValue = document.querySelector(".displayAnim") 

    
            displayValue["style"]["display"] = "block";
    
            setTimeout(() => {
                classList.classList.remove("qaAnim");
                classList.classList.add("qaAnimReturn");  
                setTimeout(() => {
                    displayValue["style"]["display"] = "none";
                    setTimeout(() => {
                        activedAnim = false  
                    },100) 
                },350)      
            }, 1250)
        } else if (Anim === "sucesso") {
            activedAnim = true 
            var classList = document.getElementById("AnimSucess"); 
            var displayValue = document.querySelector(".displayAnimSucess") 
        
            displayValue["style"]["display"] = "block";
        
            setTimeout(() => {
                classList.classList.remove("qaAnim");
                classList.classList.add("qaAnimReturn");  
                setTimeout(() => {
                    displayValue["style"]["display"] = "none";
                    document.getElementById("submitbutton").textContent = "Entrar";
                    document.getElementById("formInfo").action = "pag_escolha.html";
                    document.getElementById("submitbutton").type = "submit";
                    activedAnim = false 
                },350)      
            }, 1250)
        }
    }
}