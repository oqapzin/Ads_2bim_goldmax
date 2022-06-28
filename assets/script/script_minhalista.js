var menu = false
var NotificacaoMenu = false
var BarraPesquisa = false 
var infoVideo = false 
var OptionsResponsive = false 

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE GERENCIAMENTO DE CONTAS */

function abrirMenu(){
    if (!NotificacaoMenu) {
        var displayValue = document.querySelector(".gerenciar") 

        if (menu){
            displayValue["style"]["display"] = "none";
            menu = false
        }else {
            displayValue["style"]["display"] = "block";
            menu = true 
        }
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE NOTIFICAÇÕES*/

function abrirNotificacao(){
    if (!menu) {
        var displayValue = document.querySelector(".alerts") 

        if (NotificacaoMenu){
            displayValue["style"]["display"] = "none";
            NotificacaoMenu = false
        }else {
            displayValue["style"]["display"] = "block";
            NotificacaoMenu = true 
        }
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DA BARRA DE PESQUISA */

function abrirBarraPesquisa() {
    var displayValue = document.querySelector(".pesquisa") 
    if (BarraPesquisa){
        displayValue["style"]["display"] = "none";
        BarraPesquisa = false
    }else {
        displayValue["style"]["display"] = "block";
        BarraPesquisa = true 
    }
}

/* JAVASCRIPT - FUNÇÃO PARA DESATIVAÇÃO DA ANIMAÇÃO  */

function activeBackground() {
    setTimeout(() => {
        document.querySelector(".loading_page")["style"]["display"] = "none";
        document.querySelector(".loading_off")["style"]["display"] = "block";
    },3000)     
}

/* JAVASCRIPT - FUNÇÃO PARA DESATIVAÇÃO DO VÍDEO */

function closeVideos() {
    var displayValue = document.querySelector(".info-film-display")
    var displayValue2 = document.querySelector(".inf-film-display-responsive") 
    var windowWidth = screen.width;
    var windowHeight = screen.height;
    if (windowHeight <= 1024 && windowWidth <= 863) {
        if (infoVideo){
            displayValue2["style"]["display"] = "none";
            infoVideo = false
        }
    } else {
        if (infoVideo){
            displayValue["style"]["display"] = "none";
            infoVideo = false
        }
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO VÍDEO */


function openVideoInfos() {
    var displayValue = document.querySelector(".info-film-display") 
    var displayValue2 = document.querySelector(".inf-film-display-responsive") 
    var windowWidth = screen.width;
    var windowHeight = screen.height;

    console.log(windowWidth,windowHeight)
    if (windowHeight <= 1024 && windowWidth <= 863) {
        if (infoVideo){
            displayValue2["style"]["display"] = "none";
            infoVideo = false
        }else {
            displayValue2["style"]["display"] = "block";
            infoVideo = true 
        }  
    } else {
        if (infoVideo){
            displayValue["style"]["display"] = "none";
            infoVideo = false
        }else {
            displayValue["style"]["display"] = "block";
            infoVideo = true 
        }  
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE INFOS RESPONSIVO  */

function openNavInfos() {
    var displayValue = document.querySelector(".infos") 
    if (OptionsResponsive){
        displayValue["style"]["display"] = "none";
        OptionsResponsive = false
    }else {
        displayValue["style"]["display"] = "block";
        OptionsResponsive = true 
    }  
}

activeBackground()


function ActiveAnim() {
    var classList = document.getElementById("AnimSucess"); 
    var displayValue = document.querySelector(".displayAnimSucess") 


    displayValue["style"]["display"] = "block";

    setTimeout(() => {
        classList.classList.remove("AnimSucess");
        classList.classList.add("qaAnimReturn");  
        setTimeout(() => {
            displayValue["style"]["display"] = "none";
        },350)      
    }, 1250)
}


ActiveAnim() 