import React from 'react';
import {connectPagarme} from '../Services/PagarmeService'

export const CheckoutSplitPagamento = () =>{
  
  const handleOnClick = () => {
    function handleSuccess (data) {
      console.log('Caso de sucesso: ', data);
      connectPagarme(data);
    }
  
    function handleError (data) {
      console.log('Caso de erro: ', data);
      connectPagarme(data);
    }
  
    var checkout = new window.PagarMeCheckout.Checkout({
      encryption_key: 'ENC_KEY',
      success: handleSuccess,
      error: handleError
    });
  
    checkout.open({
      customerData: 'true',      
      createToken: 'true',
      paymentMethods: 'credit_card',
      amount: 1,
      items: [
        {
          id: '1',
          title: 'Curso de Programação',
          unit_price: 1,
          quantity: 1,
          tangible: 'false'
        }]
    })
  };

    return (
        <>        
        <button onClick={handleOnClick}>Pagar</button>        
        </>
    )
}