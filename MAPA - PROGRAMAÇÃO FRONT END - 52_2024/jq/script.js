$(document).ready(function() {
    $('.form').submit(function(event) {
        if (this.checkValidity()) {
            event.preventDefault();

            setTimeout(function() {
                showSuccessMessage();

                setTimeout(function() {
                    window.location.href = "../index.html";
                }, 3000); 

                $('.form')[0].reset();

            }, 1000); 
        }
    });
});

function showSuccessMessage() {
    var messageElement = $('<div class="success-message">Operação concluida...</div>');

    $('main').append(messageElement);

    setTimeout(function() {
        messageElement.fadeOut('slow', function() {
            $(this).remove();
        });
    }, 3000); 
}
