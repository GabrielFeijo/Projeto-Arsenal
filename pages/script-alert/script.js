
alerta = false;
function showAlert(type){

    if (type == "error"){
        if (alerta == false){
            document.querySelector("#alert").innerHTML = `
            <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                <i class="bi-exclamation-octagon-fill"></i>
                <strong class="mx-2">Erro!</strong> Preencha todas as informações.
            
            </div> `;
            alerta = true;
           setTimeout( closeAlert,4000);
        }
    }else if (type == "warning"){
        if (alerta == false){
            document.querySelector("#alert").innerHTML = `    
            <div class="alert alert-warning alert-dismissible d-flex align-items-center fade show">
                <i class="bi-exclamation-triangle-fill"></i>
                <strong class="mx-2">Alerta!</strong> Você precisa ler e concordar com os Termos de Uso!
            </div>`;
            alerta = true;
           setTimeout( closeAlert,4000);
        }
    }else if( type == "sucess"){
    

        if (alerta == false){
            document.querySelector("#alert").innerHTML = `    
            <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
            <i class="bi-check-circle-fill"></i>
          <strong class="mx-2">Successo!</strong> Você logou na sua conta com sucesso!
      </div>`;
            alerta = true;
        setTimeout( closeAlert,4000);
        }
    }else if (type == "pass"){
        if (alerta == false){
            document.querySelector("#alert").innerHTML = `    
            <div class="alert alert-primary d-flex align-items-center" role="alert">
            <i class="bi-info-circle-fill"></i>

            <strong class="mx-2">Info!</strong> As senhas digitadas não coincidem!
         </div>`;
            alerta = true;
        setTimeout( closeAlert,4000);
        }
    }else if (type == "sucessPass"){
        if (alerta == false){
            document.querySelector("#alert").innerHTML = `    
            <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
            <i class="bi-check-circle-fill"></i>
          <strong class="mx-2">Successo!</strong> Você resetou sua senha com sucesso!
      </div>`;
            alerta = true;
        setTimeout( closeAlert,4000);
        }
    }
    
}

function closeAlert(){

    var element = document.querySelector(".alert");

    // Create alert instance
    var myAlert = new bootstrap.Alert(element);

    myAlert.close();
    alerta = false
}