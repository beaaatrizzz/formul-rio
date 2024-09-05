document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById ('Form');
    formulario.addEventListener ('submit', function(event){
        event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;     

alert(`OLá, ${nome}. Agradecemos o envio do seu formulário com o email: ${email}`);
});
});