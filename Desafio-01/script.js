
    // validador do login 
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    //Expressao regular para validacao de caracteres no email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;

    if(emailRegex.test(email)){
        showMessage('Por favor inserir um e-mail valido', 'error');
        return;
    } 
    if (senha.length < 8){
        showMessage('A senha deve ter pelo menos 8 caracteres','error');
        return;
    }

    //Mensagem de sucesso
    showMessage('login realizado com sucesso!'+
        'Redirecionando para pag inicial...','sucesso');
   form.reset();

   //Simulacao de redicionamento
   setTimeout(() => {
       window.location.href = '';
   },2000);

})
