$(document).ready(function() {
    $('.form').submit(function(event) {
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (this.checkValidity()) {
            // Impede o envio automático do formulário
            event.preventDefault();

            // Simula um envio assíncrono do formulário (você pode substituir isso pela lógica real de envio para o servidor)
            setTimeout(function() {
                // Exibe mensagem de sucesso
                showSuccessMessage();

                // Redireciona para a página de login após 3 segundos
                setTimeout(function() {
                    window.location.href = "login.html";
                }, 3000); // Tempo em milissegundos antes de redirecionar (3 segundos aqui)

                // Limpa os campos do formulário (opcional)
                $('.form')[0].reset();

            }, 1000); // Tempo em milissegundos antes de exibir a mensagem (1 segundo aqui)
        }
    });
});

function showSuccessMessage() {
    // Cria um elemento div para a mensagem
    var messageElement = $('<div class="success-message">Cadastro realizado com sucesso!</div>');

    // Adiciona o elemento à página dentro do main (ou onde desejar)
    $('main').append(messageElement);

    // Após alguns segundos, remove a mensagem
    setTimeout(function() {
        messageElement.fadeOut('slow', function() {
            $(this).remove();
        });
    }, 3000); // Tempo em milissegundos para manter a mensagem (3 segundos aqui)
}
