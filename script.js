const message = document.getElementById('message');
const boleto = document.getElementById('boleto');
const salario = document.getElementById('salario');
const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(boleto.value && salario.value){
        if(boleto.value > salario.value){
            message.className = 'error';
            message.innerText = 'Não será possível realizar o pagamento!';
            setTimeout(() => {
                message.innerText = ''
                message.className = ''
            }, 9000)
        }else if(boleto.value === salario.value){
            message.className = 'warning';
            message.innerText = `Pagamento realizado com sucesso! Por pouco ehm`
            setTimeout(() => {
                message.innerText = ''
                message.className = ''
            }, 9000)
        }else{
            const resto = salario.value - boleto.value;
            message.className = 'success';
            message.innerText = `Pagamento realizado com sucesso!  sobrou: R$${resto.toFixed(2)}`
            setTimeout(() => {
                message.innerText = ''
                message.className = ''
            }, 9000)
        }
    }else{
        message.className = 'error';
        message.innerText = `Preencha todos os campos`
        setTimeout(() => {
            message.innerText = ''
            message.className = ''
        }, 2000)
    }
})
