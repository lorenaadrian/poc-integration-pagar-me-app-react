import React, {useState} from 'react';

export const CheckoutSemObtencaoDadosComprador = () =>{
  const [colorUi, setColorUi] = useState('#fff');
  
  const handleColor = (e) => {
    console.log(e.target.name);    
    switch(e.target.name){
      case 'azul':
        setColorUi('#0000ff');
        break;
      case 'verde':
        setColorUi('#008000');
        break;
      case 'violeta':
        setColorUi('#6600A1');
        break;
      default: 
        setColorUi('#fff');
      break;
    }

  }
  
  const handleOnClick = () => {
    console.log(colorUi);
    function handleSuccess (data) {
      console.log('Caso de sucesso: ', data);
    }
  
    function handleError (data) {
      console.log('Caso de erro: ', data);
    }
  
    var checkout = new window.PagarMeCheckout.Checkout({
      encryption_key: 'ENC_KEY',
      success: handleSuccess,
      error: handleError
    });
  
    checkout.open({
      amount: 100,
      createToken: 'true',
      paymentMethods: 'credit_card',
      customerData: 'true',
      uiColor: colorUi,
      items: [
        {
          id: '1',
          title: 'Curso de Programação',
          unit_price: 100,
          quantity: 1,
          tangible: 'false'
        }]
    })
  };

    return (
        <>        
        <span>É possível alterar a cor primária da interface com checkout</span>
        <button style={{backgroundColor:'#0000ff'}} name="azul" onClick={(e)=>handleColor(e)}>Azul</button><br/>
        <button style={{backgroundColor:'#008000'}} name="verde" onClick={(e)=>handleColor(e)}>Verde</button><br/>
        <button style={{backgroundColor:'#6600A1'}} name="violeta"  onClick={(e)=>handleColor(e)}>Violeta</button><br/>        
        <button onClick={handleOnClick}>Pagar</button>        
        </>
    )
}