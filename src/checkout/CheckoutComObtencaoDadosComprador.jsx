import React from 'react';

export const CheckoutComObtencaoDadosComprador = (props) =>{    
  const {customerData} = props;
  const handleOnClickNew = () => {
    function handleSuccess (data) {
      console.log(data);
    }
  
    function handleError (data) {
      console.log(data);
    }
  
    var checkout = new window.PagarMeCheckout.Checkout({
      encryption_key: 'ENC_KEY',
      success: handleSuccess,
      error: handleError
    });
  
    checkout.open({
      amount: 12000,
      createToken: 'true',
      paymentMethods: 'credit_card',
      customerData: false,
      customer: {
        external_id: customerData.external_id,
        name: customerData.name,
        type: 'individual',
        country: 'br',
        email: 'fulano@email.com',
        documents: [
          {
            type: 'cpf',
            number: '71404665560',
          },
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1985-01-01',
      },
      billing: {
        name: 'Ciclano de Tal',
        address: {
          country: 'br',
          state: 'SP',
          city: 'São Paulo',
          neighborhood: 'Fulanos bairro',
          street: 'Rua dos fulanos',
          street_number: '123',
          zipcode: '05170060'
        }
      },
      shipping: {
        name: 'Ciclano de Tal',
        fee: 12345,
        delivery_date: '2017-12-25',
        expedited: true,
        address: {
          country: 'br',
          state: 'SP',
          city: 'São Paulo',
          neighborhood: 'Fulanos bairro',
          street: 'Rua dos fulanos',
          street_number: '123',
          zipcode: '05170060'
        }
      },      
      items: [
        {
          id: '1',
          title: 'Curso de Programação',
          unit_price: 12000,
          quantity: 1,
          tangible: 'false'
        }]
    })
  };

    return (
        <>
        <button onClick={handleOnClickNew}>Pagar</button>        
        </>
    )
}