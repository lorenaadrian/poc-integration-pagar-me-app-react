import React from 'react';

export const ObtendoDadosDoCartao = () =>{
  
  const handleOnClick = (event) => {
    event.preventDefault();
    var card = {} 
    card.card_holder_name = document.getElementById("#form #card_expiration_month").nodeValue    
    //$("#form #card_holder_name").val()
    //card.card_expiration_date = $("#form #card_expiration_month").val() + '/' + $("#form #card_expiration_year").val()
    //card.card_number = $("#form #card_number").val()
    //card.card_cvv = $("#form #card_cvv").val()

    console.log('dados do card: ', card);
    // pega os erros de validação nos campos do form e a bandeira do cartão
    var cardValidations = window.pagarme.validate({card: card})
            
    //Então você pode verificar se algum campo não é válido
    if(!cardValidations.card.card_number)
      console.log('Oops, número de cartão incorreto')
     
    //Mas caso esteja tudo certo, você pode seguir o fluxo
    // window.pagarme.client.connect({ encryption_key: 'SUA_ENCRYPTION_KEY' })
    //   .then(client => client.security.encrypt(card))
    //   .then(card_hash => console.log(card_hash))
      // o próximo passo aqui é enviar o card_hash para seu servidor, e
      // em seguida criar a transação/assinatura


  };

    return (
        <>        
        <div id="form">
    Número do cartão: <input type="text" id="card_number"/>
    <br/>
    Nome (como escrito no cartão): <input type="text" id="card_holder_name"/>
    <br/>
    Mês de expiração: <input type="text" id="card_expiration_month"/>
    <br/>
    Ano de expiração: <input type="text" id="card_expiration_year"/>
    <br/>
    Código de segurança: <input type="text" id="card_cvv"/>
    <br/>
    <div id="field_errors">
    </div>
    <br/>
</div>
<form id="payment_form" action="https://seusite.com.br/transactions/new" method="POST">
    <button onclick={(e)=> handleOnClick(e)}></button>
</form>
        </>
    )
}