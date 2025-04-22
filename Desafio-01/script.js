function logar(){

    event.preventDefault();
    
    var nome = document.getElementById("nome").value; 
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if(nome === "a" && email === "a@gmail.com" && senha === "1") {
        window.location.assign("cad-anormalidade.html");
    }else{
        alert("Acesso Negado")
    }
    
    }
