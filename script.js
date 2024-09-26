// Validação de dados dos formulários
// Campo do nome não pode estar vazio e até 50 caracteres 
// O campo do e-mail não deve ficar em branco ou vazio.
// O campo Assunto não deve ficar em branco ou vazio.
// Mostrar mensagem de erro

function enviar(){
    let txtnome = document.querySelector('#nome').value;
    let txtemail = document.querySelector('#txtemail').value;
    let txtassunto = document.querySelector('#txtassunto').value;
    let txtmensagem = document.querySelector('#txtmensagem').value;

    // Validação de dados 

    if (txtnome === ''){
        window.alert('O nome não pode estar vazio!');
        return;
    } else if (txtnome.length < 15){
        window.alert(`O nome deve ter no mínimo 15 e o nome digitado tem apenas ${txtnome.length} caracteres!`);
        return;
    } 

    //validação de email

    if (txtemail === ''){
        window.alert('A caixa de email não pode estar vazio!');
        return;
    } else if (!txtemail.includes('@')){ //verifica se tem @
        window.alert('Faltou o @ do email!')
        return;
    }

    //validação de formulário de contato

    if (txtassunto == ''){
        window.alert('O assunto não pode ficar vazio! Por favor digite o assunto que deseja falar!');
        return;
    } else if (txtassunto.length > 50){
        window.alert('O assunto deve ter menos de 50 caracteres, seja breve!');
        return;
    }

    // Validação da mensagem

    if(txtmensagem === ''){
        window.alert('Digite a mensagem!');
        return;
    } else if (txtmensagem.length > 300){
        window.alert(`A mensagem digitada tem mais que 300 caracteres permitidos!`);
        return;
    }

    alert(`A sua mensagem foi enviada ${txtnome}! Fique atento no email!`);

    document.querySelector('#nome').value = ''
    document.querySelector('#txtemail').value = ''
    document.querySelector('#txtassunto').value = ''
    document.querySelector('#txtmensagem').value = ''

}