function sendPost(conteudo) {
    console.log('abcd', conteudo)
    $.ajax({
        context: this,
        url: '/cadastro/apagar',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({ "conteudo": conteudo }),
        success: function(result) {
            if (result.status == 200) {
                $("[id='" + conteudo + "']").remove();
            } else {
                console.log("erro")
            }
        }

    });

}