document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("CPF:", cpf);
    console.log("Senha:", senha);

    if (validarCPF(cpf) && validarTelefone(telefone)) {
        alert('Cadastro realizado com sucesso!');
    } else {
        alert('Por favor, verifique os campos e tente novamente.');
    }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        console.log('CPF inválido: comprimento ou padrão incorretos');
        return false;
    }

    for (let t = 9; t < 11; t++) {
        let soma = 0;
        for (let i = 0; i < t; i++) {
            soma += parseInt(cpf.charAt(i)) * (t + 1 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(t))) {
            console.log(`CPF inválido: dígito verificador ${t + 1} incorreto`);
            return false;
        }
    }

    return true;
}

function validarTelefone(telefone) {
    const telefoneRegex = /^(\(\d{2}\)\s)?(\d{4,5}-\d{4})$/;
    const valido = telefoneRegex.test(telefone);
    if (!valido) {
        console.log('Telefone inválido');
    }
    return valido;
}